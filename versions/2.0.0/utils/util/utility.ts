import * as path from "path";
import { Converter } from "./converter.js";
import { Initializer } from "../../routes/initializer.js";
import { Constants } from "./constants.js";
import { MinifiedModule } from "../../core/com/zoho/crm/api/modules/minified_module.js";
import Logger from "winston";
import * as fs from "fs";
import { SDKException } from "../../core/com/zoho/crm/api/exception/sdk_exception.js";
import {CommonAPIHandler, OAuthToken} from "../../zohocrmsdk.js";
import {Fields} from "../../core/com/zoho/crm/api/fields/fields.js";
import {Choice} from "./choice.js";

/**
 * This class handles module field details.
 */
class Utility {
    static apiTypeVsDataType : Map<string, string> = new Map();
    static apiTypeVsStructureName : Map<string, string> = new Map();
    static newFile : boolean= false;
    static getModifiedModules : boolean= false;
    static forceRefresh : boolean = false;
    static moduleAPIName : string| null = null;
    static apiSupportedModule : {[key : string]: any}= {};
    static async assertNotNull(value : any, errorCode: any, errorMessage: any) {
        if (value == null) {
            throw new SDKException(errorCode, errorMessage);
        }
    }

    static async fileExistsFlow( moduleAPIName : string | null, recordFieldDetailsPath : string, lastModifiedTime: number|null) {
        let recordFieldDetailsJson = Initializer.getJSON(recordFieldDetailsPath);
        let initializer = await Initializer.getInitializer().catch((err) => { throw err });
        if (initializer.getSDKConfig() != null && initializer.getSDKConfig().getAutoRefreshFields() == true && !this.newFile && !this.getModifiedModules && (!recordFieldDetailsJson.hasOwnProperty(Constants.FIELDS_LAST_MODIFIED_TIME) || this.forceRefresh ||new Date().getTime() - recordFieldDetailsJson[Constants.FIELDS_LAST_MODIFIED_TIME] > 3600000)) {
            this.getModifiedModules = true;
            lastModifiedTime = !this.forceRefresh &&recordFieldDetailsJson.hasOwnProperty(Constants.FIELDS_LAST_MODIFIED_TIME) ? recordFieldDetailsJson[Constants.FIELDS_LAST_MODIFIED_TIME] : null;
            await Utility.modifyFields(recordFieldDetailsPath, lastModifiedTime).catch((err) => { throw err });
            this.getModifiedModules = false;
        } else if (initializer.getSDKConfig() != null && initializer.getSDKConfig().getAutoRefreshFields() == false && this.forceRefresh && !this.getModifiedModules) {
            this.getModifiedModules = true;
            await Utility.modifyFields(recordFieldDetailsPath, lastModifiedTime).catch((err) => { throw err });
            this.getModifiedModules = false;
        }
        recordFieldDetailsJson = Initializer.getJSON(recordFieldDetailsPath);
        if (moduleAPIName == null || (recordFieldDetailsJson.hasOwnProperty(moduleAPIName.toLowerCase()) && recordFieldDetailsJson[moduleAPIName.toLowerCase()] != null)) {
            return;
        } else {
            await Utility.fillDataType().catch((err) => { throw err });
            recordFieldDetailsJson[moduleAPIName.toLowerCase()] = {};
            fs.writeFileSync(recordFieldDetailsPath, JSON.stringify(recordFieldDetailsJson));
            let fieldsDetails = await Utility.getFieldsDetails(moduleAPIName).catch(err => { throw err; });
            recordFieldDetailsJson = await Initializer.getJSON(recordFieldDetailsPath);
            recordFieldDetailsJson[moduleAPIName.toLowerCase()] = fieldsDetails;
            fs.writeFileSync(recordFieldDetailsPath, JSON.stringify(recordFieldDetailsJson));
        }
    }

    static async verifyModuleAPIName(moduleName : string) {
        if (moduleName != null && Constants.DEFAULT_MODULENAME_VS_APINAME.has(moduleName.toLowerCase()) && Constants.DEFAULT_MODULENAME_VS_APINAME.get(moduleName.toLowerCase()) != null) {
            return Constants.DEFAULT_MODULENAME_VS_APINAME.get(moduleName.toLowerCase());
        }
        var recordFieldDetailsPath: string = await this.getFileName().catch((err) => { throw err });
        if (fs.existsSync(recordFieldDetailsPath)) {
            let fieldsJSON = Initializer.getJSON(recordFieldDetailsPath);
            if (fieldsJSON.hasOwnProperty(Constants.SDK_MODULE_METADATA) && fieldsJSON[Constants.SDK_MODULE_METADATA].hasOwnProperty(moduleName.toLowerCase())) {
                let moduleMeta = fieldsJSON[Constants.SDK_MODULE_METADATA];
                return moduleMeta[moduleName.toLowerCase()][Constants.API_NAME];
            }
        }
        return moduleName;
    }

    static async setHandlerAPIPath(moduleAPIName: string | null,  handlerInstance : CommonAPIHandler | null ) {
        if (handlerInstance == null) {
            return;
        }
        let apiPath : string = handlerInstance.getAPIPath();
        if (moduleAPIName != null && apiPath.toLowerCase().includes(moduleAPIName.toLowerCase())) {
            let apiPathSplit : (string|undefined)[] = apiPath.split("/");
            for (var i = 0; i < apiPathSplit.length; i++) {
                if (apiPathSplit[i] != null && apiPathSplit[i]!.toLowerCase() == moduleAPIName.toLowerCase()) {
                    apiPathSplit[i] = moduleAPIName;
                } else if (apiPathSplit[i] != null && Constants.DEFAULT_MODULENAME_VS_APINAME.has(apiPathSplit[i]!.toLowerCase()) && Constants.DEFAULT_MODULENAME_VS_APINAME.get(apiPathSplit[i]!.toLowerCase()) != null) {
                    apiPathSplit[i] = Constants.DEFAULT_MODULENAME_VS_APINAME.get(apiPathSplit[i]!.toLowerCase());
                }
            }
            apiPath = apiPathSplit.join("/");
            handlerInstance.setAPIPath(apiPath);
        }
    }

    /**
     * This method to fetch field details of the current module for the current user and store the result in a JSON file.
     * @param {string} moduleAPIName - A String containing the CRM module API name.
     * @param {string} handlerInstance - A String containing CommonAPIHandler Instance.
     */
    static async getFields(moduleAPIName : string | null, handlerInstance : CommonAPIHandler | null = null) {
        if(this.moduleAPIName != null && this.moduleAPIName.includes(",")) {
            let moduleAPINames = this.moduleAPIName.split(",");
            for (var i = 0; i < moduleAPINames.length; i++) {
              this.moduleAPIName = moduleAPINames[i];
              await this.getFieldsInfo(this.moduleAPIName, handlerInstance).catch( (err) => { throw err; } );
            }
        }
        else {
            this.moduleAPIName = moduleAPIName;
            await this.getFieldsInfo(this.moduleAPIName, handlerInstance).catch( (err) => { throw err; } );
        }
    }

    /**
     * This method to fetch field details of the current module for the current user and store the result in a JSON file.
     * @param {string} moduleAPIName - A String containing the CRM module API name.
     * @param {string} handlerInstance - A String containing CommonAPIHandler Instance.
     */
    static async getFieldsInfo(moduleAPIName : string | null , handlerInstance : CommonAPIHandler | null = null) {
        let lastModifiedTime : number|null= null;
        var recordFieldDetailsPath : string|null= null;
        try {
            let initializer = await Initializer.getInitializer();
            var resourcesPath = path.join(initializer.getResourcePath(), Constants.FIELD_DETAILS_DIRECTORY);
            if (!fs.existsSync(resourcesPath)) {
                fs.mkdirSync(resourcesPath, { recursive: true });
            }
            if (moduleAPIName != null) {
                moduleAPIName = await Utility.verifyModuleAPIName(moduleAPIName).catch((err) => { throw err });
                await Utility.setHandlerAPIPath(moduleAPIName, handlerInstance).catch((err) => { throw err });
                if (handlerInstance != null && handlerInstance.getModuleAPIName() == null && ( moduleAPIName != null && !Constants.SKIP_MODULES.includes(moduleAPIName.toLowerCase()))) {
                    return;
                }
            }
            recordFieldDetailsPath = resourcesPath + "/" + await this.getFileName().catch((err) => { throw err });
            if (fs.existsSync(recordFieldDetailsPath)) {
                await Utility.fileExistsFlow(moduleAPIName, recordFieldDetailsPath, lastModifiedTime).catch((err) => { throw err });
            } else if (initializer.getSDKConfig() !== null && initializer.getSDKConfig().getAutoRefreshFields() == true) {
                this.newFile = true;
                await Utility.fillDataType().catch((err) => { throw err });
                this.apiSupportedModule = Object.keys(this.apiSupportedModule).length > 0 ? this.apiSupportedModule : await Utility.getModules(null).catch((err) => { throw err });
                let recordFieldDetailsJson = fs.existsSync(recordFieldDetailsPath) ? Initializer.getJSON(recordFieldDetailsPath) : {};
                recordFieldDetailsJson[Constants.FIELDS_LAST_MODIFIED_TIME] = new Date().getTime();
                if (Object.keys(this.apiSupportedModule).length > 0) {
                    for (let module in this.apiSupportedModule) {
                        if (!recordFieldDetailsJson.hasOwnProperty(module)) {
                            let moduleData = this.apiSupportedModule[module];
                            recordFieldDetailsJson[module] = {};
                            fs.writeFileSync(recordFieldDetailsPath, JSON.stringify(recordFieldDetailsJson));
                            let fieldsDetails = await Utility.getFieldsDetails(moduleData[Constants.API_NAME]).catch(err => { throw err; });
                            recordFieldDetailsJson = await Initializer.getJSON(recordFieldDetailsPath);
                            recordFieldDetailsJson[module] = fieldsDetails;
                            fs.writeFileSync(recordFieldDetailsPath, JSON.stringify(recordFieldDetailsJson));
                        }
                    }
                }
                this.newFile = false;
            } else if (this.forceRefresh && !this.getModifiedModules) {
                //New file - and force refresh by Users
                this.getModifiedModules = true;
                let recordFieldDetailsJson = {};
                fs.writeFileSync(recordFieldDetailsPath, JSON.stringify(recordFieldDetailsJson));
                await Utility.modifyFields(recordFieldDetailsPath, lastModifiedTime).catch((err) => { throw err });
                this.getModifiedModules = false;
            } else {
                await Utility.fillDataType().catch((err) => { throw err });
                let recordFieldDetailsJson : { [key: string]: any } = {};
                if (moduleAPIName != null) {
                    recordFieldDetailsJson[moduleAPIName.toLowerCase()] = {};
                    fs.writeFileSync(recordFieldDetailsPath, JSON.stringify(recordFieldDetailsJson));
                    let fieldsDetails = await Utility.getFieldsDetails(moduleAPIName).catch(err => { throw err; });
                    recordFieldDetailsJson = await Initializer.getJSON(recordFieldDetailsPath);
                    recordFieldDetailsJson[moduleAPIName.toLowerCase()] = fieldsDetails;
                    fs.writeFileSync(recordFieldDetailsPath, JSON.stringify(recordFieldDetailsJson));
                }
            }
        } catch (error) {
            if (recordFieldDetailsPath != null && fs.existsSync(recordFieldDetailsPath)) {
                try {
                    let recordFieldDetailsJson = await Initializer.getJSON(recordFieldDetailsPath);
                    if (moduleAPIName != null) {
                        if (recordFieldDetailsJson.hasOwnProperty(moduleAPIName.toLowerCase())) {
                            delete recordFieldDetailsJson[moduleAPIName.toLowerCase()];
                        }
                    }
                    if (this.newFile) {
                        if (recordFieldDetailsJson.hasOwnProperty(Constants.FIELDS_LAST_MODIFIED_TIME)) {
                            delete recordFieldDetailsJson[Constants.FIELDS_LAST_MODIFIED_TIME];
                        }
                        this.newFile = false;
                    }
                    if (this.getModifiedModules || this.forceRefresh) {
                        this.getModifiedModules = false;
                        this.forceRefresh = false;
                        if (lastModifiedTime != null) {
                            recordFieldDetailsJson[Constants.FIELDS_LAST_MODIFIED_TIME] = lastModifiedTime;
                        }
                    }
                    fs.writeFileSync(recordFieldDetailsPath, JSON.stringify(recordFieldDetailsJson));
                } catch (error) {
                    error = new SDKException(null, null, null, error);
                    Logger.error(Constants.EXCEPTION, error);
                    throw error;
                }
            }
            if (!(error instanceof SDKException)) {
                error = new SDKException(null, null, null, error);
            }
            Logger.error(Constants.EXCEPTION, error);
            throw error;
        }
    }

    static async modifyFields(recordFieldDetailsPath : string , modifiedTime: number | null) {
        let modifiedModules = await this.getModules(modifiedTime).catch((err) => { throw err });
        let recordFieldDetailsJson : { [key: string]: any } = await Initializer.getJSON(recordFieldDetailsPath);
        recordFieldDetailsJson[Constants.FIELDS_LAST_MODIFIED_TIME] = new Date().getTime();
        fs.writeFileSync(recordFieldDetailsPath, JSON.stringify(recordFieldDetailsJson));
        if (Object.keys(modifiedModules).length > 0) {
            for (let module in modifiedModules) {
                if (recordFieldDetailsJson.hasOwnProperty(module)) {
                    delete recordFieldDetailsJson[module];
                }
            }
            fs.writeFileSync(recordFieldDetailsPath, JSON.stringify(recordFieldDetailsJson));
            for (let module in modifiedModules) {
                let moduleData = modifiedModules[module];
                await Utility.getFieldsInfo(moduleData[Constants.API_NAME], null).catch((err) => { throw err });
            }
        }
    }

    static async deleteFields(recordFieldDetailsJson : { [key: string]: any } , module : string) {
        let subformModules : string[] = [];
        let fieldsJSON = recordFieldDetailsJson[module.toLowerCase()];
        for (let keyName of Object.keys(fieldsJSON)) {
            if (fieldsJSON[keyName].hasOwnProperty(Constants.SUBFORM) && fieldsJSON[keyName][Constants.SUBFORM] == true && recordFieldDetailsJson.hasOwnProperty(fieldsJSON[keyName][Constants.MODULE].toLowerCase())) {
                let subformModuleName = fieldsJSON[keyName][Constants.MODULE];
                if (!subformModules.includes(subformModuleName)) {
                    subformModules.push(subformModuleName);
                }
            }
        }
        delete recordFieldDetailsJson[module.toLowerCase()];
        if (subformModules.length > 0) {
            for (let subformModule of subformModules) {
                await this.deleteFields(recordFieldDetailsJson, subformModule).catch((err) => { throw err });
            }
        }
    }

    static async getFileName() {
        let initializer = await Initializer.getInitializer().catch((err) => { throw err });
        let token = initializer.getToken();
        let tokenKey = "";
        if (token instanceof OAuthToken){
            let oauthToken = token;
            let user = oauthToken.getUserSignature();
            if(user != null){
                tokenKey = user.getName();
            } else {
                let refreshToken = oauthToken.getRefreshToken();
                if (refreshToken != null && refreshToken.length > 0) {
                    tokenKey = refreshToken.substring(refreshToken.length - 32);
                }
                else {
                    let accessToken = oauthToken.getAccessToken();
                    if (accessToken != null && accessToken.length > 0) {
                        tokenKey = accessToken.substring(accessToken.length - 32);
                    }
                }
            }
        }
        let fileName = initializer.getEnvironment().getUrl();
        if (tokenKey != null && tokenKey.length > 0) {
            fileName = fileName + tokenKey;
        }
        var input =  Converter.toUTF8Array(fileName);
        var str = Buffer.from(input).toString('base64');
        return str + ".json";
    }

    static async getRelatedLists(relatedModuleName : string, moduleAPIName : string, commonAPIHandler : CommonAPIHandler) {
        try {
            let isnewData = false;
            let key = (moduleAPIName + Constants.UNDERSCORE + Constants.RELATED_LISTS).toLowerCase();
            let initializer = await Initializer.getInitializer().catch((err) => { throw err });
            let resourcesPath = path.join(initializer.getResourcePath(), Constants.FIELD_DETAILS_DIRECTORY);
            if (!fs.existsSync(resourcesPath)) {
                fs.mkdirSync(resourcesPath, { recursive: true });
            }
            var recordFieldDetailsPath = initializer.getResourcePath() + "resources/" +  await this.getFileName().catch((err) => { throw err });
            let recordFieldDetailsJSON = null;
            if (!fs.existsSync(recordFieldDetailsPath) || (fs.existsSync(recordFieldDetailsPath) && (!Initializer.getJSON(recordFieldDetailsPath).hasOwnProperty(key) || Initializer.getJSON(recordFieldDetailsPath)[key] == null || Initializer.getJSON(recordFieldDetailsPath)[key].length <= 0))) {
                isnewData = true;
                moduleAPIName = await Utility.verifyModuleAPIName(moduleAPIName).catch((err) => { throw err });
                let relatedListValues = await this.getRelatedListDetails(moduleAPIName).catch((err) => { throw err });
                recordFieldDetailsJSON = fs.existsSync(recordFieldDetailsPath)? await Initializer.getJSON(recordFieldDetailsPath) : {};
                recordFieldDetailsJSON[key] = relatedListValues;
                fs.writeFileSync(recordFieldDetailsPath, JSON.stringify(recordFieldDetailsJSON));
            }
            recordFieldDetailsJSON = await Initializer.getJSON(recordFieldDetailsPath);
            let moduleRelatedList = recordFieldDetailsJSON.hasOwnProperty(key) ? recordFieldDetailsJSON[key] : {};
            if (!(await this.checkRelatedListExists(relatedModuleName, moduleRelatedList, commonAPIHandler).catch((err) => { throw err })) && !isnewData) {
                delete recordFieldDetailsJSON[key];
                fs.writeFileSync(recordFieldDetailsPath, JSON.stringify(recordFieldDetailsJSON));
                await Utility.getRelatedLists(relatedModuleName, moduleAPIName, commonAPIHandler).catch((err) => { throw err });
            }
        } catch (error) {
            if (!(error instanceof SDKException)) {
                error = new SDKException(null, null, null, error);
            }
            Logger.error(Constants.EXCEPTION, error);
            throw error;
        }
    }

    static async checkRelatedListExists(relatedModuleName : string, modulerelatedListArray : any[], commonAPIHandler : CommonAPIHandler) : Promise<boolean>{
        for (let index = 0; index < modulerelatedListArray.length; index++) {
            const relatedListObject = modulerelatedListArray[index];
            if (relatedListObject[Constants.API_NAME] != null && relatedListObject[Constants.API_NAME].toLowerCase() == relatedModuleName.toLowerCase()) {
                if (relatedListObject[Constants.HREF].toLowerCase() == Constants.NULL_VALUE) {
                    throw new SDKException(Constants.UNSUPPORTED_IN_API, commonAPIHandler.getHttpMethod() + " " + commonAPIHandler.getAPIPath() + Constants.UNSUPPORTED_IN_API_MESSAGE);
                }
                if (relatedListObject[Constants.MODULE].toLowerCase() != Constants.NULL_VALUE) {
                    commonAPIHandler.setModuleAPIName(relatedListObject[Constants.MODULE]);
                    await Utility.getFieldsInfo(relatedListObject[Constants.MODULE], commonAPIHandler).catch((err) => { throw err; });
                }
                return true;
            }
        }
        return false;
    }

    static async getRelatedListDetails(moduleAPIName : string) {
        let RelatedListsOperations = (await import("../../core/com/zoho/crm/api/related_lists/related_lists_operations.js")).RelatedListsOperations;
        let ResponseWrapper = (await import("../../core/com/zoho/crm/api/related_lists/response_wrapper.js")).ResponseWrapper;
        let APIException = (await import("../../core/com/zoho/crm/api/related_lists/api_exception.js")).APIException;
        let GetRelatedListsParam = (await import("../../core/com/zoho/crm/api/related_lists/related_lists_operations.js")).GetRelatedListsParam;
        let ParameterMap = ( await import("../../routes/parameter_map.js")).ParameterMap;
        let relatedListArray : any[] = [];
        let paramInstance = new ParameterMap();
        await paramInstance.add(GetRelatedListsParam.MODULE, moduleAPIName);
        let response = await new RelatedListsOperations().getRelatedLists(paramInstance).catch((err) => { throw err });
        if (response != null) {
            if (response.getStatusCode() == Constants.NO_CONTENT_STATUS_CODE) {
                return relatedListArray;
            }
            let responseObject = response.getObject();
            if (responseObject != null) {
                if (responseObject instanceof ResponseWrapper) {
                    let relatedLists = responseObject.getRelatedLists();
                    relatedLists.forEach((relatedList) => {
                        let relatedListDetail : {[key : string]: any}= {};
                        relatedListDetail[Constants.API_NAME] = relatedList.getAPIName();
                        relatedListDetail[Constants.MODULE] = relatedList.getModule() != null ? relatedList.getModule().getAPIName() : Constants.NULL_VALUE;
                        relatedListDetail[Constants.NAME] = relatedList.getName();
                        relatedListDetail[Constants.HREF] = relatedList.getHref() != null ? relatedList.getHref() : Constants.NULL_VALUE;
                        relatedListArray.push(relatedListDetail);
                    });
                } else if (responseObject instanceof APIException) {
                    let errorResponse : { [key: string]: any } = {};
                    errorResponse[Constants.CODE] = responseObject.getCode().getValue();
                    errorResponse[Constants.STATUS] = responseObject.getStatus().getValue();
                    errorResponse[Constants.MESSAGE] = responseObject.getMessage();
                    throw new SDKException(Constants.API_EXCEPTION, null, errorResponse, null);
                } else {
                    let errorResponse : { [key: string]: any } = {};
                    errorResponse[Constants.CODE] = response.getStatusCode();
                    throw new SDKException(Constants.API_EXCEPTION, null, errorResponse, null);
                }
            }
        }
        return relatedListArray;
    }

    /**
     * This method is to get module field data from Zoho CRM.
     * @param {string} moduleAPIName - A String containing the CRM module API name.
     * @returns {object} An Object representing the Zoho CRM module field details.
     */
    static async getFieldsDetails(moduleAPIName : string) : Promise<any>{
        let FieldOperations = (await import("../../core/com/zoho/crm/api/fields/fields_operations.js")).FieldsOperations;
        let FieldsResponseWrapper = (await import("../../core/com/zoho/crm/api/fields/response_wrapper.js")).ResponseWrapper;
        let APIException = (await import("../../core/com/zoho/crm/api/fields/api_exception.js")).APIException;
        let ParameterMap = ( await import("../../routes/parameter_map.js")).ParameterMap;
        let GetFieldsParam = (await import("../../core/com/zoho/crm/api/fields/fields_operations.js")).GetFieldsParam;
        let paramInstance = new ParameterMap();
        await paramInstance.add(GetFieldsParam.MODULE, moduleAPIName);
        let response = await new FieldOperations().getFields(paramInstance).catch((err) => { throw err });
        let fieldsDetails : { [key: string]: any } = {};
        if (response != null) {
            if (response.getStatusCode() == Constants.NO_CONTENT_STATUS_CODE) {
                return fieldsDetails;
            }
            let responseHandler = response.getObject();
            if (responseHandler != null) {
                if (responseHandler instanceof FieldsResponseWrapper) {
                    let fields = await responseHandler.getFields();
                    for (let field in fields) {
                        let keyName = fields[field].getAPIName();
                        if (Constants.KEYS_TO_SKIP.includes(keyName)) {
                            continue;
                        }
                        let fieldDetail = {};
                        await Utility.setDataType(fieldDetail, fields[field], moduleAPIName).catch((err) => { throw err });
                        fieldsDetails[fields[field].getAPIName()] = fieldDetail;
                    }
                    if ((Constants.INVENTORY_MODULES.includes(moduleAPIName.toLowerCase()))) {
                        let fieldDetail : {[key : string]: any}= {};
                        fieldDetail[Constants.NAME] = Constants.LINE_TAX;
                        fieldDetail[Constants.TYPE] = Constants.LIST_NAMESPACE;
                        fieldDetail[Constants.STRUCTURE_NAME] =Constants.LINE_TAX_NAMESPACE;
                        fieldDetail[Constants.LOOKUP] = true;
                        fieldsDetails[Constants.LINE_TAX] = fieldDetail;
                    }
                    if (moduleAPIName.toLowerCase() == Constants.NOTES) {
                        let fieldDetail : {[key : string] : any}= {};
                        fieldDetail[Constants.NAME] = Constants.ATTACHMENTS;
                        fieldDetail[Constants.TYPE] = Constants.LIST_NAMESPACE;
                        fieldDetail[Constants.STRUCTURE_NAME] = Constants.ATTACHMENTS_NAMESPACE;
                        fieldsDetails[Constants.ATTACHMENTS] = fieldDetail;
                    }
                } else if (responseHandler instanceof APIException) {
                    let errorResponse : { [key: string]: any } = {};
                    errorResponse[Constants.CODE] = responseHandler.getCode().getValue();
                    errorResponse[Constants.STATUS] = responseHandler.getStatus().getValue();
                    errorResponse[Constants.MESSAGE] = responseHandler.getMessage();
                    let exception = new SDKException(Constants.API_EXCEPTION, null, errorResponse, null);
                    if (this.moduleAPIName != null && this.moduleAPIName.toLowerCase() == moduleAPIName.toLowerCase()) {
                        throw exception;
                    }
                    Logger.error(Constants.API_EXCEPTION, exception);
                }
            } else {
                let errorResponse : { [key: string]: any } = {};
                errorResponse[Constants.CODE] = response.getStatusCode();
                throw new SDKException(Constants.API_EXCEPTION, null, errorResponse, null);
            }
        }
        return fieldsDetails;
    }

    static async verifyPhotoSupport(moduleAPIName : string) {
        try {
            moduleAPIName = await Utility.verifyModuleAPIName(moduleAPIName).catch((err) => { throw err });
            if (Constants.PHOTO_SUPPORTED_MODULES.includes(moduleAPIName.toLowerCase())) {
                return true;
            }
            let modules = await Utility.getModuleNames().catch((err) => {
                throw err;
            });
            if (modules.hasOwnProperty(moduleAPIName.toLowerCase()) &&modules[moduleAPIName.toLowerCase()] != null) {
                let moduleMetaData = modules[moduleAPIName.toLowerCase()];
                if (moduleMetaData.hasOwnProperty(Constants.GENERATED_TYPE) && moduleMetaData[Constants.GENERATED_TYPE] != Constants.GENERATED_TYPE_CUSTOM) {
                    throw new SDKException(Constants.UPLOAD_PHOTO_UNSUPPORTED_ERROR,Constants.UPLOAD_PHOTO_UNSUPPORTED_MESSAGE + moduleAPIName);
                }
            }
        } catch (error) {
            if (!(error instanceof SDKException)) {
                error = new SDKException(null, null, null, error);
            }
            Logger.error(Constants.EXCEPTION, error);
            throw error;
        }
        return true;
    }

    static async getModuleNames() {
        let moduleData = {};
        var resourcesPath = path.join((await Initializer.getInitializer()).getResourcePath(), Constants.FIELD_DETAILS_DIRECTORY);
        if (!fs.existsSync(resourcesPath)) {
            fs.mkdirSync(resourcesPath, { recursive: true });
        }
        let recordFieldDetailsPath = await this.getFileName().catch((err) => { throw err });
        let fieldMetaJSON = Initializer.getJSON(recordFieldDetailsPath);
        if (!fs.existsSync(recordFieldDetailsPath) || (fs.existsSync(recordFieldDetailsPath) && (!fieldMetaJSON.hasOwnProperty(Constants.SDK_MODULE_METADATA) || fieldMetaJSON[Constants.SDK_MODULE_METADATA] == null || fieldMetaJSON[Constants.SDK_MODULE_METADATA].length <= 0))) {
            moduleData = await Utility.getModules(null).catch((err) => { throw err });
            await Utility.writeModuleMetaData(recordFieldDetailsPath, moduleData).catch((err) => { throw err });
            return moduleData;
        }
        let recordFieldDetailsJson = Initializer.getJSON(recordFieldDetailsPath);
        return recordFieldDetailsJson[Constants.SDK_MODULE_METADATA];
    }

    static async writeModuleMetaData(recordFieldDetailsPath : string, moduleData : any) : Promise<void>{
        let fieldDetailsJSON = fs.existsSync(recordFieldDetailsPath) ? Initializer.getJSON(recordFieldDetailsPath) : {};
        fieldDetailsJSON[Constants.SDK_MODULE_METADATA] = moduleData;
        fs.writeFileSync(recordFieldDetailsPath, JSON.stringify(fieldDetailsJSON));
    }

    static async getModules(header : number | null) : Promise<any>{
        const HeaderMap = (await import("../../routes/header_map.js")).HeaderMap;
        const ParameterMap = (await import("../../routes/parameter_map.js")).ParameterMap;
        let ResponseWrapper = (await import("../../core/com/zoho/crm/api/modules/response_wrapper.js")).ResponseWrapper;
        let APIException = (await import("../../core/com/zoho/crm/api/modules/api_exception.js")).APIException;
        const ModuleOperations = (await import("../../core/com/zoho/crm/api/modules/modules_operations.js")).ModulesOperations;
        const GetModulesHeader = (await import("../../core/com/zoho/crm/api/modules/modules_operations.js")).GetModulesHeader;
        let apiNames : {[key : string]: any} = {};
        let headerMap = new HeaderMap();
        let parameterMap = new ParameterMap();
        if (header != null) {
            await headerMap.add(GetModulesHeader.IF_MODIFIED_SINCE, new Date(header));
        }
        let response = await new ModuleOperations().getModules(parameterMap, headerMap).catch((err) => { throw err });
        if (response != null) {
            if ([Constants.NO_CONTENT_STATUS_CODE,Constants.NOT_MODIFIED_STATUS_CODE].includes(response.getStatusCode())) {
                return apiNames;
            }
            let responseObject = response.getObject();
            if (responseObject != null) {
                if (responseObject instanceof ResponseWrapper) {
                    let modules = responseObject.getModules();
                    modules.forEach((module) => {
                        if (module.getAPISupported() == true) {
                            let moduleDetails : {[key : string]: any} = {};
                            moduleDetails[Constants.API_NAME] = module.getAPIName();
                            moduleDetails[Constants.GENERATED_TYPE] = module.getGeneratedType().getValue();
                            apiNames[module.getAPIName().toLowerCase()] = moduleDetails;
                        }
                    });
                } else if (responseObject instanceof APIException) {
                    let errorResponse : {[key : string]: any}= {};
                    errorResponse[Constants.CODE] = responseObject.getCode().getValue();
                    errorResponse[Constants.STATUS] = responseObject.getStatus().getValue();
                    errorResponse[Constants.MESSAGE] = responseObject.getMessage();
                    throw new SDKException(Constants.API_EXCEPTION, null, errorResponse, null);
                }
            }
        }
        if (header == null) {
            try {
                var resourcesPath = path.join((await Initializer.getInitializer()).getResourcePath(), Constants.FIELD_DETAILS_DIRECTORY);
                if (!fs.existsSync(resourcesPath)) {
                    fs.mkdirSync(resourcesPath, { recursive: true });
                }
                var recordFieldDetailsPath = resourcesPath + "/" + await this.getFileName().catch((err) => { throw err });
                await Utility.writeModuleMetaData(recordFieldDetailsPath, apiNames).catch((err) => { throw err });
            } catch (error) {
                if (!(error instanceof SDKException)) {
                    error = new SDKException(null, null, null, error);
                }
                Logger.error(Constants.EXCEPTION, error);
                throw error;
            }
        }
        return apiNames;
    }

    static async refreshModules() {
        this.forceRefresh = true;
        await Utility.getFieldsInfo(null).catch((err) => { throw err; });
        this.forceRefresh = false;
    }

    static async getJSONObject(json : { [key: string]: any }, key: string) {
        let keyArray = Array.from(Object.keys(json));
        for (let keyInJSON of keyArray) {
            if (key.toLowerCase() == keyInJSON.toLowerCase()) {
                return json[keyInJSON];
            }
        }
        return null;
    }

    static async setDataType(fieldDetail: { [key: string]: any } , field : Fields, moduleAPIName : string) {
        var apiType = field.getDataType();
        var keyName = field.getAPIName();
        var module = new MinifiedModule();
        if (field.getSystemMandatory() != null && field.getSystemMandatory() == true && !(moduleAPIName.toLowerCase() == Constants.CALLS && keyName.toLowerCase() == Constants.CALL_DURATION)) {
            fieldDetail.required = true;
        }
        if (keyName.toLowerCase() == Constants.PRICING_DETAILS_API_NAME.toLowerCase() && moduleAPIName.toLowerCase() == Constants.PRICE_BOOKS) {
            fieldDetail.name = keyName;
            fieldDetail.type = Constants.LIST_NAMESPACE;
            fieldDetail.structure_name = Constants.PRICING_DETAILS;
            fieldDetail[Constants.SKIP_MANDATORY] = true;
            return;
        } else if (keyName.toLowerCase() == Constants.PARTICIPANT_API_NAME.toLowerCase() && (moduleAPIName.toLowerCase() == Constants.EVENTS || moduleAPIName.toLowerCase() == Constants.ACTIVITIES)) {
            fieldDetail.name = keyName;
            fieldDetail.type = Constants.LIST_NAMESPACE;
            fieldDetail.structure_name = Constants.PARTICIPANTS;
            fieldDetail[Constants.SKIP_MANDATORY] = true;
            return;
        } else if (keyName.toLowerCase() == Constants.COMMENTS.toLowerCase() && (moduleAPIName.toLowerCase() == Constants.SOLUTIONS || moduleAPIName.toLowerCase() == Constants.CASES)) {
            fieldDetail.name = keyName;
            fieldDetail.type = Constants.LIST_NAMESPACE;
            fieldDetail.structure_name = Constants.COMMENT_NAMESPACE;
            fieldDetail.lookup = true;
            return;
        } else if (keyName.toLowerCase() == Constants.LAYOUT.toLowerCase()) {
            fieldDetail.name = keyName;
            fieldDetail.type = Constants.LAYOUT_NAMESPACE;
            fieldDetail.structure_name = Constants.LAYOUT_NAMESPACE;
            fieldDetail.lookup = true;
            return;
        } else if ((keyName.toLowerCase() == Constants.TERRITORIES.toLowerCase() || keyName.toLowerCase() == Constants.TERRITORY.toLowerCase()) && field.getCustomField() !== null && field.getCustomField() == false) {
            fieldDetail.name = keyName;
            fieldDetail.type = Constants.LIST_NAMESPACE;
            fieldDetail.structure_name = Constants.TERRITORY_NAMESPACE;
            fieldDetail.lookup = true;
            return;
        } else if (keyName.toLowerCase() == Constants.PRODUCT_NAME.toLowerCase() && Constants.INVENTORY_MODULES_ITEMS.includes(moduleAPIName.toLowerCase())) {
            fieldDetail.name = keyName;
            fieldDetail.type = Constants.LINEITEM_PRODUCT;
            fieldDetail.structure_name = Constants.LINEITEM_PRODUCT;
            fieldDetail[Constants.SKIP_MANDATORY] = true;
            return;
        } else if (keyName.toLowerCase() == Constants.DISCOUNT.toLowerCase() && Constants.INVENTORY_MODULES_ITEMS.includes(moduleAPIName.toLowerCase())) {
            fieldDetail.name = keyName;
            fieldDetail.type = Constants.STRING_NAMESPACE;
            return;
        } else if (keyName.toLowerCase() == Constants.TAX.toLowerCase() && Constants.PRODUCTS.toLowerCase() == moduleAPIName.toLowerCase()) {
            fieldDetail.name = keyName;
            fieldDetail.type = Constants.LIST_NAMESPACE;
            fieldDetail.structure_name = Constants.TAX_NAMESPACE;
            return;
        } else if (Utility.apiTypeVsDataType.has(apiType)) {
            fieldDetail.type = Utility.apiTypeVsDataType.get(apiType);
        } else if (apiType.toLowerCase() == Constants.FORMULA.toLowerCase()) {
            if (field.getFormula() != null) {
                let returnType = field.getFormula().getReturnType();
                if (returnType != null && Utility.apiTypeVsDataType.has(returnType) && Utility.apiTypeVsDataType.get(returnType) != null) {
                    fieldDetail.type = Utility.apiTypeVsDataType.get(returnType);
                }
            }
            fieldDetail[Constants.READ_ONLY] = true;
        }
        else if (apiType.toLowerCase() == Constants.ROLLUP_SUMMARY.toLowerCase()) {
            if (field.getRollupSummary() != null) {
                const returnType = field.getRollupSummary().getReturnType();
                if (Utility.apiTypeVsDataType.get(returnType) != null) {
                    fieldDetail.type = Utility.apiTypeVsDataType.get(returnType);
                } else if (Utility.apiTypeVsDataType.get(field.getJsonType()) != null) {
                    fieldDetail.type = Utility.apiTypeVsDataType.get(field.getJsonType());
                }
            }
        }
        else {
            return;
        }
        if (apiType.toLowerCase().includes(Constants.LOOKUP.toLowerCase())) {
            fieldDetail.lookup = true;
        }
        if (apiType.toLowerCase() == Constants.CONSENT_LOOKUP || apiType.toLowerCase() == Constants.OWNER_LOOKUP) {
            fieldDetail[Constants.SKIP_MANDATORY] = true;
        }
        if (apiType.toLowerCase() == Constants.MULTI_SELECT_LOOKUP) {
            fieldDetail[Constants.SKIP_MANDATORY] = true;
            if (field.getMultiselectlookup() != null && field.getMultiselectlookup().getLinkingDetails() != null) {
                let linkingDetails = field.getMultiselectlookup().getLinkingDetails();
                if(linkingDetails != null){
                    let linkingModule = linkingDetails.getModule();
                    fieldDetail[Constants.MODULE] = linkingModule.getAPIName();
                    module = new MinifiedModule();
                    module.setAPIName(linkingModule.getAPIName());
                    module.setId(linkingModule.getId());
                }
            }
            fieldDetail[Constants.SUBFORM] = true;
        }
        if (apiType.toLowerCase() == Constants.MULTI_USER_LOOKUP) {
            fieldDetail[Constants.SKIP_MANDATORY] = true;
            if (field.getMultiuserlookup() != null && field.getMultiuserlookup().getLinkingDetails() != null) {
                let linkingDetails = field.getMultiuserlookup().getLinkingDetails();
                if(linkingDetails != null){
                    let linkingModule = linkingDetails.getModule();
                    fieldDetail[Constants.MODULE] = linkingModule.getAPIName();
                    module = new MinifiedModule();
                    module.setAPIName(linkingModule.getAPIName());
                    module.setId(linkingModule.getId());
                }
            }
            fieldDetail[Constants.SUBFORM] = true;
        }
        if(apiType.toLowerCase() == Constants.MULTI_MODULE_LOOKUP) {
            fieldDetail[Constants.SKIP_MANDATORY] = true;
        }
        if (Utility.apiTypeVsStructureName.has(apiType)) {
            fieldDetail.structure_name = Utility.apiTypeVsStructureName.get(apiType);
        }
        if (apiType.toLowerCase() == Constants.PICKLIST && field.getPickListValues() != null && field.getPickListValues().length > 0) {
            let values : any[] = [];
            fieldDetail.picklist = true;
            field.getPickListValues().every((x) => values.push(x.getDisplayValue()));
            fieldDetail.values = values;
        }
        if (apiType == Constants.SUBFORM && field.getAssociatedModule() != null) {
            module.setAPIName(field.getAssociatedModule().getModule());
            fieldDetail.module = module.getAPIName();
            fieldDetail[Constants.SKIP_MANDATORY] = true;
            fieldDetail.subform = true;
        }
        if (apiType == Constants.LOOKUP && field.getLookup() != null) {
            let module1 = field.getLookup().getModule();
            if (module1 != null && module1.getAPIName().toLowerCase() != Constants.SE_MODULE) {
                module.setAPIName(module1.getAPIName());
                module.setId(module1.getId());
                fieldDetail.module = module1.getAPIName();
                if (module1.getAPIName().toLowerCase() == Constants.ACCOUNTS && field.getCustomField() != null && !field.getCustomField()) {
                    fieldDetail[Constants.SKIP_MANDATORY] = true;
                }
            } else {
                const MinifiedModule = (await import("../../core/com/zoho/crm/api/modules/minified_module.js")).MinifiedModule;
                module = new MinifiedModule();
            }
            fieldDetail.lookup = true;
        }
        if (module != null && module.getAPIName() != null && module.getAPIName().length > 0) {
            await Utility.getFieldsInfo(module.getAPIName()).catch((err) => { throw err; });
        }
        fieldDetail.name = keyName;
    }

    static async fillDataType() {
        if (this.apiTypeVsDataType.size > 0) {
            return;
        }
        let fieldAPINamesString = [
            "textarea",
            "text",
            "website",
            "email",
            "phone",
            "mediumtext",
            "profileimage",
            "autonumber",
        ];
        let fieldAPINamesInteger = ["integer"];
        let fieldAPINamesBoolean = ["boolean"];
        let fieldAPINamesLong = ["long", "bigint"];
        let fieldAPINamesDouble = ["double", "percent", "currency"];
        let fieldAPINamesFieldFile = ["fileupload"];
        let fieldAPINamesDateTime = ["datetime", "event_reminder"];
        let fieldAPINamesDate = ["date"];
        let fieldAPINamesLookup = ["lookup"];
        let fieldAPINamesPickList = ["picklist"];
        let fieldAPINamesMultiSelectPickList = ["multiselectpicklist"];
        let fieldAPINamesSubForm = ["subform"];
        let fieldAPINamesOwnerLookUp = ["ownerlookup", "userlookup"];
        let fieldAPINamesMultiUserLookUp = ["multiuserlookup"];
        let fieldAPINameTaskRemindAt = ["ALARM"];
        let fieldAPINameRecurringActivity = ["RRULE"];
        let fieldAPINameReminder = ["multireminder"];
        let fieldAPINameConsentLookUp = ["consent_lookup"];
        let fieldAPINameImageUpload = ["imageupload"];
        let fieldAPInameMultiSelectLookUp = ["multiselectlookup"];
        let fieldAPINameLineTax = ["linetax"];
        let fieldAPINamesModule = ["module"];
        let fieldAPINamesLayout = ["layout"];
        let fieldAPINamesMultiModuleLookUp = ["multi_module_lookup"];
        let fieldAPINamesTimeRange = ["time_range" ];
        for (let fieldAPIName of fieldAPINamesString) {
            Utility.apiTypeVsDataType.set(fieldAPIName, Constants.STRING_NAMESPACE);
        }
        for (let fieldAPIName of fieldAPINamesInteger) {
            Utility.apiTypeVsDataType.set(fieldAPIName, Constants.INTEGER_NAMESPACE);
        }
        for (let fieldAPIName of fieldAPINamesBoolean) {
            Utility.apiTypeVsDataType.set(fieldAPIName, Constants.BOOLEAN_NAMESPACE);
        }
        for (let fieldAPIName of fieldAPINamesLong) {
            Utility.apiTypeVsDataType.set(fieldAPIName, Constants.LONG_NAMESPACE);
        }
        for (let fieldAPIName of fieldAPINamesDouble) {
            Utility.apiTypeVsDataType.set(fieldAPIName, Constants.DOUBLE_NAMESPACE);
        }
        for (let fieldAPIName of fieldAPINamesDateTime) {
            Utility.apiTypeVsDataType.set(fieldAPIName, Constants.DATETIME_NAMESPACE);
        }
        for (let fieldAPIName of fieldAPINamesDate) {
            Utility.apiTypeVsDataType.set(fieldAPIName, Constants.DATE_NAMESPACE);
        }
        for (let fieldAPIName of fieldAPINamesLookup) {
            Utility.apiTypeVsDataType.set(fieldAPIName, Constants.RECORD_NAMESPACE);
            Utility.apiTypeVsStructureName.set(fieldAPIName, Constants.RECORD_NAMESPACE);
        }
        for (let fieldAPIName of fieldAPINamesPickList) {
            Utility.apiTypeVsDataType.set(fieldAPIName, Constants.CHOICE_NAMESPACE);
        }
        for (let fieldAPIName of fieldAPINamesMultiSelectPickList) {
            Utility.apiTypeVsDataType.set(fieldAPIName, Constants.LIST_NAMESPACE);
            Utility.apiTypeVsStructureName.set(fieldAPIName, Constants.CHOICE_NAMESPACE);
        }
        for (let fieldAPIName of fieldAPINamesSubForm) {
            Utility.apiTypeVsDataType.set(fieldAPIName, Constants.LIST_NAMESPACE);
            Utility.apiTypeVsStructureName.set(fieldAPIName, Constants.RECORD_NAMESPACE);
        }
        for (let fieldAPIName of fieldAPINamesOwnerLookUp) {
            Utility.apiTypeVsDataType.set(fieldAPIName, Constants.USER_NAMESPACE);
            Utility.apiTypeVsStructureName.set(fieldAPIName, Constants.USER_NAMESPACE);
        }
        for (let fieldAPIName of fieldAPINamesMultiUserLookUp) {
            Utility.apiTypeVsDataType.set(fieldAPIName, Constants.LIST_NAMESPACE);
            Utility.apiTypeVsStructureName.set(fieldAPIName, Constants.RECORD_NAMESPACE);
        }
        for (let fieldAPIName of fieldAPINamesFieldFile) {
            Utility.apiTypeVsDataType.set(fieldAPIName, Constants.LIST_NAMESPACE);
            Utility.apiTypeVsStructureName.set(fieldAPIName, Constants.FIELD_FILE_NAMESPACE);
        }
        for (let fieldAPIName of fieldAPINameTaskRemindAt) {
            Utility.apiTypeVsDataType.set(fieldAPIName, Constants.REMINDAT_NAMESPACE);
            Utility.apiTypeVsStructureName.set(fieldAPIName, Constants.REMINDAT_NAMESPACE);
        }
        for (let fieldAPIName of fieldAPINameRecurringActivity) {
            Utility.apiTypeVsDataType.set(fieldAPIName, Constants.RECURRING_ACTIVITY_NAMESPACE);
            Utility.apiTypeVsStructureName.set(fieldAPIName, Constants.RECURRING_ACTIVITY_NAMESPACE);
        }
        for (let fieldAPIName of fieldAPINameReminder) {
            Utility.apiTypeVsDataType.set(fieldAPIName, Constants.LIST_NAMESPACE);
            Utility.apiTypeVsStructureName.set(fieldAPIName, Constants.REMINDER_NAMESPACE);
        }
        for (let fieldAPIName of fieldAPINameConsentLookUp) {
            Utility.apiTypeVsDataType.set(fieldAPIName, Constants.CONSENT_NAMESPACE);
            Utility.apiTypeVsStructureName.set(fieldAPIName, Constants.CONSENT_NAMESPACE);
        }
        for (let fieldAPIName of fieldAPINameImageUpload) {
            Utility.apiTypeVsDataType.set(fieldAPIName, Constants.LIST_NAMESPACE);
            Utility.apiTypeVsStructureName.set(fieldAPIName, Constants.IMAGEUPLOAD_NAMESPACE);
        }
        for (let fieldAPIName of fieldAPInameMultiSelectLookUp) {
            Utility.apiTypeVsDataType.set(fieldAPIName, Constants.LIST_NAMESPACE);
            Utility.apiTypeVsStructureName.set(fieldAPIName, Constants.RECORD_NAMESPACE);
        }
        for (let fieldAPIName of fieldAPINameLineTax) {
            Utility.apiTypeVsDataType.set(fieldAPIName, Constants.LIST_NAMESPACE);
            Utility.apiTypeVsStructureName.set(fieldAPIName, Constants.LINETAX);
        }
        for (let fieldAPIName of fieldAPINamesModule) {
            Utility.apiTypeVsDataType.set(fieldAPIName, Constants.MODULE_NAMESPACE);
            Utility.apiTypeVsStructureName.set(fieldAPIName, Constants.MODULE_NAMESPACE);
        }
        for (let fieldAPIName of fieldAPINamesMultiModuleLookUp) {
            Utility.apiTypeVsDataType.set(fieldAPIName, Constants.RECORD_NAMESPACE);
            Utility.apiTypeVsStructureName.set(fieldAPIName, Constants.RECORD_NAMESPACE);
        }
        for (let fieldAPIName of fieldAPINamesLayout) {
            Utility.apiTypeVsDataType.set(fieldAPIName, Constants.LAYOUT_NAMESPACE);
            Utility.apiTypeVsStructureName.set(fieldAPIName, Constants.LAYOUT_NAMESPACE);
        }
        for (let fieldAPIName of fieldAPINamesTimeRange) {
			Utility.apiTypeVsDataType.set(fieldAPIName, Constants.LIST_NAMESPACE);
			Utility.apiTypeVsStructureName.set(fieldAPIName, Constants.TIME_RANGE_NAMESPACE);
		}
    }

    async getUserName(token: string | null): Promise<string | null>{
        const HeaderMap = (await import("../../routes/header_map.js")).HeaderMap;
        const Header = (await import("../../routes/header.js")).Header;
        const ParameterMap = (await import("../../routes/parameter_map.js")).ParameterMap;
        let ResponseWrapper = (await import("../../core/com/zoho/crm/api/users/response_wrapper.js")).ResponseWrapper;
        let APIException = (await import("../../core/com/zoho/crm/api/users/api_exception.js")).APIException;
        const GetUsersParam = (await import("../../core/com/zoho/crm/api/users/users_operations.js")).GetUsersParam;
        let userName = null;
        let paramInstance = new ParameterMap();
        await paramInstance.add(GetUsersParam.TYPE, new Choice(Constants.CURRENTUSER));
        let headerInstance = new HeaderMap();
        var handlerInstance = new CommonAPIHandler();
        var apiPath = '';
        apiPath = apiPath.concat("/crm/v8/users");
        handlerInstance.setAPIPath(apiPath);
        handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
        handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
        handlerInstance.setParam(paramInstance);
        await headerInstance.add(await new Header(Constants.AUTHORIZATION, Constants.STRING_NAMESPACE), Constants.OAUTH_HEADER_PREFIX + token);
        handlerInstance.setHeader(headerInstance);
        let ResponseHandler = require.resolve("../../core/com/zoho/crm/api/users/response_handler.js");
        let response = await handlerInstance.apiCall(ResponseHandler, "application/json").catch((err) => { throw err; });
        if (response != null) {
          if ([204, 304].includes(response.getStatusCode())) {
            return null;
          }
          //Get object from response
          let responseObject = response.getObject();
          if (responseObject != null) {
            if (responseObject instanceof ResponseWrapper) {
                let users = responseObject.getUsers();
                for(let user of users) {
                  userName = user.getEmail();
                  break;
                }
            }
            else if (responseObject instanceof APIException) {
              let errorResponse : {[key : string]: any}= {};
              errorResponse[Constants.CODE] = responseObject.getCode().getValue();
              errorResponse[Constants.STATUS] = responseObject.getStatus().getValue();
              errorResponse[Constants.MESSAGE] = responseObject.getMessage();
              throw new SDKException(Constants.API_EXCEPTION, null, errorResponse, null);
            }
          }
        }
        let orgID = await this.getUserOrgID(token);
        if (userName == null || orgID == null)
        {
            return null;
        }
        return userName + ":" + orgID;
      }
    
      async getUserOrgID(token: string | null): Promise<string | null>{
        const HeaderMap = (await import("../../routes/header_map.js")).HeaderMap;
        const Header = (await import("../../routes/header.js")).Header;
        let ResponseWrapper = (await import("../../core/com/zoho/crm/api/org/response_wrapper.js")).ResponseWrapper;
        let APIException = (await import("../../core/com/zoho/crm/api/org/api_exception.js")).APIException;
        var handlerInstance = new CommonAPIHandler();
        var apiPath = '';
        apiPath = apiPath.concat("/crm/v8/org");
        handlerInstance.setAPIPath(apiPath);
        handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
        handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
        let headerInstance = new HeaderMap();
        await  headerInstance.add(await new Header(Constants.AUTHORIZATION, Constants.STRING_NAMESPACE), Constants.OAUTH_HEADER_PREFIX + token);
        handlerInstance.setHeader(headerInstance);
        let ResponseHandler = require.resolve("../../core/com/zoho/crm/api/org/response_handler.js");
        let response = await handlerInstance.apiCall(ResponseHandler, "application/json").catch((err) => { throw err; });
        if (response != null) {
            let responseObject = response.getObject();
            if (responseObject != null) {
                if (responseObject instanceof ResponseWrapper) {
                    let orgs = responseObject.getOrg();
                    for(let org of orgs) {
                      return org.getZgid();
                    }
                }
                else if (responseObject instanceof APIException) {
                  let errorResponse : {[key : string]: any}= {};
                  errorResponse[Constants.CODE] = responseObject.getCode().getValue();
                  errorResponse[Constants.STATUS] = responseObject.getStatus().getValue();
                  errorResponse[Constants.MESSAGE] = responseObject.getMessage();
                  throw new SDKException(Constants.API_EXCEPTION, null, errorResponse, null);
                }
            }
        }
        return null;
      }
}

export { Utility as Utility, Utility as MasterModel };