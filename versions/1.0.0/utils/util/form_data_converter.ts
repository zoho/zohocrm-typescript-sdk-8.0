import { APIHTTPConnector } from "../../routes/controllers/api_http_connector";
import { CommonAPIHandler } from "../../routes/middlewares/common_api_handler";
import { Converter } from "./converter";
import { StreamWrapper } from "./stream_wrapper";
import { Initializer } from "../../routes/initializer";
import { Constants } from "./constants";
import { SDKException } from "../../core/com/zoho/crm/api/exception/sdk_exception";
import FormData = require("form-data");

/**
 * This class is to process the upload file and stream.
 * @extends {Converter}
 */
class FormDataConverter extends Converter {
    private uniqueValuesMap: Map<string, any[]> = new Map<string, any[]>();

    constructor(commonAPIHandler: CommonAPIHandler) {
        super(commonAPIHandler);
    }

    public async appendToRequest(requestBase: object): Promise<any> {
        let request = requestBase as APIHTTPConnector;
        var formDataRequestBody = new FormData();
        await this.addFileBody(request.getRequestBody(), formDataRequestBody).catch((err) => { throw err });
        return formDataRequestBody;
    }

    private async addFileBody(requestObject: { [key: string]: any }, formData: FormData): Promise<void> {
        let requestKeys = Object.keys(requestObject);
        for (let key of requestKeys) {
            let value = requestObject[key];
            if (Array.isArray(value)) {
                for (let fileObject of value) {
                    if (fileObject instanceof StreamWrapper) {
                        formData.append(key, fileObject.getStream());
                    }
                    else {
                        formData.append(key, fileObject);
                    }
                }
            }
            else if (value instanceof StreamWrapper) {
                formData.append(key, value.getStream());
            }
            else {
                formData.append(key, value);
            }
        }
    }

    public async formRequest(requestInstance: any, pack: string, instanceNumber: number | null, classMemberDetail: object | null): Promise<object> {
        var classDetail = Initializer.jsonDetails[pack];
        var request: { [key: string]: any } = {};
        if (classDetail.hasOwnProperty(Constants.INTERFACE) && classDetail[Constants.INTERFACE]) {
            var classes = classDetail[Constants.CLASSES];
            var baseName = pack.split('/').slice(0, -1);
            let className = await this.getFileName(requestInstance.constructor.name).catch((err) => { throw err });
            baseName.push(className);
            let requestObjectClassName = baseName.join('/');
            for (let className in classes) {
                if (classes[className].toLowerCase() == requestObjectClassName) {
                    classDetail = Initializer.jsonDetails[requestObjectClassName];
                    break;
                }
            }
        }
        for (let memberName in classDetail) {
            var modification: any = null;
            var memberDetail: { [key: string]: any } = classDetail[memberName];
            if ((memberDetail.hasOwnProperty(Constants.READ_ONLY) && memberDetail[Constants.READ_ONLY] == 'true') || !memberDetail.hasOwnProperty(Constants.NAME)) {
                continue;
            }
            try {
                modification = requestInstance.isKeyModified(memberDetail[Constants.NAME]);
            } catch (e) {
                throw new SDKException(Constants.EXCEPTION_IS_KEY_MODIFIED, null, null, e);
            }
            // check required
            if ((modification == null || modification == 0) && memberDetail.hasOwnProperty(Constants.REQUIRED) && memberDetail[Constants.REQUIRED] == 'true') {
                throw new SDKException(Constants.MANDATORY_VALUE_ERROR, Constants.MANDATORY_KEY_ERROR + memberName);
            }
            var fieldValue = Reflect.get(requestInstance, memberName);
            if (modification != null && modification != 0 && await this.valueChecker(requestInstance.constructor.name, memberName, memberDetail, fieldValue, this.uniqueValuesMap, instanceNumber).catch((err) => { throw err })) {
                var keyName = memberDetail[Constants.NAME];
                var type = memberDetail[Constants.TYPE];
                if (type.toLowerCase() == Constants.LIST_NAMESPACE.toLowerCase()) {
                    request[keyName] = await this.setJSONArray(fieldValue, memberDetail).catch((err) => { throw err });;
                } else if (type.toLowerCase() == Constants.MAP_NAMESPACE.toLowerCase()) {
                    request[keyName] = await this.setJSONObject(fieldValue, memberDetail).catch((err) => { throw err });;
                } else if (memberDetail.hasOwnProperty(Constants.STRUCTURE_NAME)) {
                    request[keyName] = await this.formRequest(fieldValue, memberDetail[Constants.STRUCTURE_NAME], 0, memberDetail).catch((err) => { throw err });;
                } else {
                    request[keyName] = fieldValue;
                }
            }
        }
        return request;
    }

    private async setJSONObject(fieldValue: any, memberDetail: { [key: string]: any } | null): Promise<object> {
        var jsonObject: { [key: string]: any } = {};
        var requestObject: Map<string, any> = fieldValue;
        if (memberDetail == null) {
            for (let key of Array.from(requestObject.keys())) {
                jsonObject[key] = await this.redirectorForObjectToJSON(requestObject.get(key)).catch((err) => { throw err });;
            }
        } else {
            var keysDetail = memberDetail[Constants.KEYS];
            for (let keyIndex = 0; keyIndex < keysDetail.length; keyIndex++) {
                let keyDetail = keysDetail[keyIndex];
                let keyName = keyDetail[Constants.NAME];
                let keyValue = null;
                if (requestObject.has(keyName) && requestObject.get(keyName) != null) {
                    if (keyDetail.hasOwnProperty(Constants.STRUCTURE_NAME)) {
                        keyValue = await this.formRequest(requestObject.get(keyName), keyDetail[Constants.STRUCTURE_NAME], 0, memberDetail).catch((err) => { throw err });
                        jsonObject[keyName] = keyValue;
                    } else {
                        keyValue = requestObject.get(keyName);
                        jsonObject[keyName] = await this.redirectorForObjectToJSON(keyValue).catch((err) => { throw err });
                    }
                }
            }
        }
        return jsonObject;
    }

    private async setJSONArray(fieldValue: any, memberDetail: { [key: string]: any } | null): Promise<object> {
        var jsonArray: any[] = [];
        var requestObjects: Array<any> = fieldValue;
        if (memberDetail == null) {
            for (let request of requestObjects) {
                jsonArray.push(await this.redirectorForObjectToJSON(request).catch((err) => { throw err }));
            }
        } else {
            if (memberDetail.hasOwnProperty(Constants.STRUCTURE_NAME)) {
                let instanceCount = 0;
                let pack = memberDetail[Constants.STRUCTURE_NAME];
                for (let request of requestObjects) {
                    jsonArray.push(await this.formRequest(request, pack, instanceCount++, memberDetail).catch((err) => { throw err }));
                }
            } else {
                for (let request of requestObjects) {
                    jsonArray.push(await this.redirectorForObjectToJSON(request).catch((err) => { throw err }));
                }
            }
        }
        return jsonArray;
    }

    private async redirectorForObjectToJSON(request: any) {
        let type = Object.prototype.toString.call(request)
        if (type == Constants.ARRAY_TYPE) {
            return await this.setJSONArray(request, null).catch((err) => { throw err });
        } else if (type == Constants.MAP_TYPE) {
            return await this.setJSONObject(request, null).catch((err) => { throw err });
        } else {
            return request;
        }
    }

    public async getWrappedResponse(responseObject: object, pack: string): Promise<(object|null)[] | null> {
        return [await this.getResponse(responseObject, pack)];
    }

    public async getResponse(response: object, pack: string): Promise<object | null> {
        return null;
    }

    public async getFileName(name: string): Promise<string> {
        let fileName = [];
        let nameParts = name.split(/([A-Z][a-z]+)/).filter(function (e) { return e });
        fileName.push(nameParts[0].toLowerCase());
        for (let i = 1; i < nameParts.length; i++) {
            fileName.push(nameParts[i].toLowerCase());
        }
        return fileName.join("_");
    }
}

export {
    FormDataConverter as MasterModel,
    FormDataConverter as FormDataConverter
}