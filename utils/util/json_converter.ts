import { SDKException } from "../../core/com/zoho/crm/api/exception/sdk_exception";
import { FileDetails } from "../../core/com/zoho/crm/api/record/file_details";
import { Record } from "../../core/com/zoho/crm/api/record/record";
import { APIHTTPConnector } from "../../routes/controllers/api_http_connector";
import { Initializer } from "../../routes/initializer";
import { CommonAPIHandler } from "../../routes/middlewares/common_api_handler";
import { Constants } from "./constants";
import { Converter } from "./converter";
import { DatatypeConverter } from "./datatype_converter";
import { Choice } from "./choice";
import { Utility } from "./utility";
import {join} from "path";
import {writeFileSync} from "fs";

/**
 * This class processes the API response to the object and an object to a JSON object, containing the request body.
 */
export class JSONConverter extends Converter {
	private uniqueValuesMap: Map<string, any[]> = new Map<string, any[]>();

	constructor(commonAPIHandler: CommonAPIHandler) {
		super(commonAPIHandler)
	}

	public async appendToRequest(requestBase: object): Promise<any> {
		let request = requestBase as APIHTTPConnector;
		return JSON.stringify(request.getRequestBody(), (key, value) => typeof value === Constants.BIGINT_TYPE ? value.toString() : value);
	}

	public async formRequest(requestInstance: object, pack: string, instanceNumber: number | null, memberDetail: object | null): Promise<object> {
		var classDetail = Initializer.jsonDetails[pack];
		if (classDetail.hasOwnProperty(Constants.INTERFACE) && classDetail[Constants.INTERFACE] === true) {
			var classes = classDetail[Constants.CLASSES];
			var baseName = pack.split('/').slice(0, -1);
			let className = await this.getFileName(requestInstance.constructor.name).catch((err) => { throw err });
			baseName.push(className);
			let fileName : string  = requestInstance.constructor.name;
			let fileNameArray = fileName.split(/(?=[A-Z])/);
			baseName[5] = fileNameArray[0].toLowerCase() + "_" + fileNameArray[1].toLowerCase()+ "s";
			let requestObjectClassName = baseName.join('/');
			for (let className1 in classes) {
				if (classes[className1].toLowerCase() == requestObjectClassName) {
					classDetail = Initializer.jsonDetails[requestObjectClassName];
					break;
				}
			}
		}
		if (requestInstance instanceof Record) {
			let moduleAPIName = this.commonAPIHandler.getModuleAPIName();
			let returnJSON = await this.isRecordRequest(requestInstance, classDetail, instanceNumber, memberDetail).catch((err) => { throw err });
			this.commonAPIHandler.setModuleAPIName(moduleAPIName);
			return returnJSON;
		} else {
			return await this.isNotRecordRequest(requestInstance, classDetail, instanceNumber, memberDetail).catch((err) => { throw err });
		}
	}

	private async isNotRecordRequest(requestInstance: any, classDetail: { [key: string]: any }, instanceNumber: number | null, classMemberDetail: { [key: string]: any } | null): Promise<object> {
		let lookUp: boolean = false;
		let skipMandatory: boolean = false;
		let classMemberName: string | null = null;
		if (classMemberDetail !== null) {
			lookUp = (classMemberDetail.hasOwnProperty(Constants.LOOKUP) ? classMemberDetail[Constants.LOOKUP] : false);
			skipMandatory = (classMemberDetail.hasOwnProperty(Constants.SKIP_MANDATORY) ? classMemberDetail[Constants.SKIP_MANDATORY] : false);
			classMemberName = await this.buildName(classMemberDetail[Constants.NAME]).catch((err) => { throw err });
		}
		let requestJSON: { [key: string]: any } = {};
		let requiredKeys: Map<string, boolean> = new Map<string, boolean>();
		let primaryKeys: Map<string, boolean> = new Map<string, boolean>();
		let requiredInUpdateKeys = new Map();
		for (let memberName in classDetail) {
			let modification: any = null;
			let memberDetail: { [key: string]: any } = classDetail[memberName];
			if ((memberDetail.hasOwnProperty(Constants.READ_ONLY) && memberDetail[Constants.READ_ONLY] == 'true') || !memberDetail.hasOwnProperty(Constants.NAME)) {// read only or no keyName
				continue;
			}
			let keyName: string = memberDetail[Constants.NAME];
			try {
				modification = requestInstance.isKeyModified(keyName);
			} catch (e) {
				throw new SDKException(Constants.EXCEPTION_IS_KEY_MODIFIED, null, null, e);
			}
			if (memberDetail.hasOwnProperty(Constants.REQUIRED) && memberDetail[Constants.REQUIRED] == true) {
				requiredKeys.set(keyName, true);
			}
			if (memberDetail.hasOwnProperty(Constants.PRIMARY) && memberDetail[Constants.PRIMARY] == true && (!memberDetail.hasOwnProperty(Constants.REQUIRED_IN_UPDATE) || memberDetail[Constants.REQUIRED_IN_UPDATE] == true)) {
				primaryKeys.set(keyName, true);
			}
			if (memberDetail.hasOwnProperty(Constants.REQUIRED_IN_UPDATE) && memberDetail[Constants.REQUIRED_IN_UPDATE] == true) {
				requiredInUpdateKeys.set(keyName, true);
			}
			let fieldValue = null
			if (modification != null && modification !== undefined && modification != 0) {
				fieldValue = Reflect.get(requestInstance, memberName);
				if (fieldValue != null) {
					if (await this.valueChecker(requestInstance.constructor.name, memberName, memberDetail, fieldValue, this.uniqueValuesMap, instanceNumber).catch((err) => { throw err })) {
						requiredKeys.delete(keyName);
						primaryKeys.delete(keyName);
						requiredInUpdateKeys.delete(keyName);
					}
				}
				if(keyName.toLowerCase() === Constants.BODY.toLowerCase() && this.commonAPIHandler.getAPIPath().endsWith(Constants.FUNCTIONS_PATH) && this.commonAPIHandler.getAPIPath().includes(Constants.FUNCTIONS))
				{
					return await this.setData(memberDetail, fieldValue);
				}
				else
				{
					requestJSON[keyName] = await this.setData(memberDetail, fieldValue).catch((err) => {throw err;});
				}
			}
		}
		if (skipMandatory || this.checkException(classMemberName, requestInstance, instanceNumber, lookUp, requiredKeys, primaryKeys, requiredInUpdateKeys)) {
			return requestJSON;
		}
		return requestJSON;
	}

	private checkException(memberName: string | null, requestInstance: any, instanceNumber: number | null, lookUp: boolean, requiredKeys: Map<string, boolean>, primaryKeys: Map<string, boolean>, requiredInUpdateKeys: Map<string, boolean>): boolean {
		if (requiredInUpdateKeys.size > 0 && this.commonAPIHandler.getCategoryMethod() != null && this.commonAPIHandler.getCategoryMethod().toUpperCase() == Constants.REQUEST_CATEGORY_UPDATE) {
			let error: { [key: string]: any } = {};
			error.field = memberName;
			error.type = requestInstance.constructor.name;
			error.keys = Array.from(requiredInUpdateKeys.keys()).toString();
			if (instanceNumber != null) {
				error.instance_number = instanceNumber;
			}
			throw new SDKException(Constants.MANDATORY_VALUE_ERROR, Constants.MANDATORY_KEY_ERROR, error);
		}
		if (this.commonAPIHandler.isMandatoryChecker() != null && this.commonAPIHandler.isMandatoryChecker()) {
			if (this.commonAPIHandler.getCategoryMethod().toUpperCase() == Constants.REQUEST_CATEGORY_CREATE) {
				if (lookUp) {
					if (primaryKeys.size > 0) {
						let error: { [key: string]: any } = {};
						error.field = memberName;
						error.type = requestInstance.constructor.name;
						error.keys = Array.from(primaryKeys.keys()).toString();
						if (instanceNumber != null) {
							error.instance_number = instanceNumber;
						}
						throw new SDKException(Constants.MANDATORY_VALUE_ERROR, Constants.PRIMARY_KEY_ERROR, error);
					}
				} else if (requiredKeys.size > 0) {
					let error: { [key: string]: any } = {};
					error.field = memberName;
					error.type = requestInstance.constructor.name;
					error.keys = Array.from(requiredKeys.keys()).toString();
					if (instanceNumber != null) {
						error.instance_number = instanceNumber;
					}
					throw new SDKException(Constants.MANDATORY_VALUE_ERROR, Constants.MANDATORY_KEY_ERROR, error);
				}
			}
			if (this.commonAPIHandler.getCategoryMethod().toUpperCase() == Constants.REQUEST_CATEGORY_UPDATE && primaryKeys.size > 0) {
				let error: { [key: string]: any } = {};
				error.field = memberName;
				error.type = requestInstance.constructor.name;
				error.keys = Array.from(primaryKeys.keys()).toString();
				if (instanceNumber != null) {
					error.instance_number = instanceNumber;
				}
				throw new SDKException(Constants.MANDATORY_VALUE_ERROR, Constants.PRIMARY_KEY_ERROR, error);
			}
		} else if (lookUp && this.commonAPIHandler.getCategoryMethod().toUpperCase() == Constants.REQUEST_CATEGORY_UPDATE) {
			if (primaryKeys.size > 0) {
				let error: { [key: string]: any } = {};
				error.field = memberName;
				error.type = requestInstance.constructor.name;
				error.keys = Array.from(primaryKeys.keys()).toString();
				if (instanceNumber != null) {
					error.instance_number = instanceNumber;
				}
				throw new SDKException(Constants.MANDATORY_VALUE_ERROR, Constants.PRIMARY_KEY_ERROR, error);
			}
		}
		return true;
	}

	// isRecordRequest
	private async isRecordRequest(recordInstance: any, classDetail: { [key: string]: any }, instanceNumber: number | null, memberDetail: { [key: string]: any } | null): Promise<any> {
		var lookUp: boolean = false;
		var skipMandatory: boolean = false;
		var classMemberName: string | null = null;
		if (memberDetail != null) {
			lookUp = (memberDetail.hasOwnProperty(Constants.LOOKUP) ? memberDetail[Constants.LOOKUP] : false);
			skipMandatory = (memberDetail.hasOwnProperty(Constants.SKIP_MANDATORY) ? memberDetail[Constants.SKIP_MANDATORY] : false);
			classMemberName = await this.buildName(memberDetail[Constants.NAME]).catch((err) => {throw err;});
		}
		var requestJSON: { [key: string]: any } = {};
		var moduleDetail: { [key: string]: any } = {};
		let moduleAPIName = this.commonAPIHandler.getModuleAPIName();
		if (moduleAPIName !== null) {// entry
			this.commonAPIHandler.setModuleAPIName(null);
			moduleDetail = await this.getModuleDetailFromUserSpecJSON(moduleAPIName).catch((err) => {throw err;});
		} else {// inner case
			moduleDetail = classDetail;
			classDetail = Initializer.jsonDetails[Constants.RECORD_NAMESPACE];
		}// class detail must contain record structure at this point
		let keyValues: Map<string, any> = new Map<string, any>();
		let uniqueValues: Map<string, any[]> = new Map<string, any[]>();
		keyValues = Reflect.get(recordInstance, Constants.KEY_VALUES);
		let keyModified: Map<string, number> = new Map<string, number>();
		keyModified = Reflect.get(recordInstance, Constants.KEY_MODIFIED);
		let requiredKeys: Map<string, boolean> = new Map<string, boolean>();
		let primaryKeys: Map<string, boolean> = new Map<string, boolean>();
		if (!skipMandatory) {
			for (let keyName of Object.keys(moduleDetail)) {
				const keyDetail = moduleDetail[keyName];
				let name = keyDetail[Constants.NAME];
				if (keyDetail.hasOwnProperty(Constants.REQUIRED) && keyDetail[Constants.REQUIRED] == true) {
					requiredKeys.set(name, true);
				}
				if (keyDetail.hasOwnProperty(Constants.PRIMARY) && keyDetail[Constants.PRIMARY] == true) {
					primaryKeys.set(name, true);
				}
			}
			for (let keyName of Object.keys(classDetail)) {
				const keyDetail = classDetail[keyName];
				if(keyDetail != null && keyDetail.hasOwnProperty(Constants.NAME)) {
					let name = keyDetail[Constants.NAME];
					if (keyDetail.hasOwnProperty(Constants.REQUIRED) && keyDetail[Constants.REQUIRED] == true) {
						requiredKeys.set(name, true);
					}
					if (keyDetail.hasOwnProperty(Constants.PRIMARY) && keyDetail[Constants.PRIMARY] == true) {
						primaryKeys.set(name, true);
					}
				}
			}
		}
		for (let keyName of Array.from(keyModified.keys())) {
			if (keyModified.get(keyName) != 1) {
				continue;
			}
			let keyDetail: { [key: string]: any } = {};
			let keyValue: any = keyValues.has(keyName) ? keyValues.get(keyName) : null;
			let jsonValue = null;
			if (keyValue != null) {
				requiredKeys.delete(keyName);
				primaryKeys.delete(keyName);
			}
			let memberName: string = await this.buildName(keyName).catch((err) => {throw err;});
			var customHandling : boolean = false;
			if (moduleDetail != null && Object.keys(moduleDetail).length > 0 && (moduleDetail.hasOwnProperty(keyName) || moduleDetail.hasOwnProperty(memberName))) {
				if (moduleDetail.hasOwnProperty(keyName)) {
					keyDetail = moduleDetail[keyName];// incase of user spec json
				} else {
					keyDetail = moduleDetail[memberName];// json details
				}
			} else if (classDetail.hasOwnProperty(memberName)) {
				keyDetail = classDetail[memberName];
			} else
			{
				customHandling = true;
			}
			if (keyValue != null) {
				if (keyDetail != null && Object.keys(keyDetail).length > 0) {
					if ((keyDetail.hasOwnProperty(Constants.READ_ONLY) && (keyDetail[Constants.READ_ONLY] == true || keyDetail[Constants.READ_ONLY] == 'true')) || !keyDetail.hasOwnProperty(Constants.NAME)) { // read only or no keyName
						continue;
					}
					if (await this.valueChecker(recordInstance.constructor.name, memberName, keyDetail, keyValue, uniqueValues, instanceNumber).catch((err) => {throw err;})) {
						jsonValue = await this.setData(keyDetail, keyValue).catch((err) => {throw err;});
					}
				} else {
					if (keyDetail == null || Object.keys(keyDetail).length == 0) {
						keyDetail = {};
						customHandling = true;
					}
					if (customHandling && !(Array.isArray(keyValue)) && !(keyValue instanceof Map) && !(keyValue instanceof Choice)) {
						let key = await this.keyINJSONDetails(keyValue.constructor.name).catch((err) => {throw err;});
						if (keyValue instanceof Date) {
							if (keyValue.getHours() == 0 && keyValue.getMinutes() == 0 && keyValue.getSeconds() == 0) {
								jsonValue = await DatatypeConverter.postConvert(keyValue, "date");
							}
							else {
								jsonValue = await DatatypeConverter.postConvert(keyValue, "datetime");
							}
						}
						if (Constants.PRIMITIVE_TYPES.includes(typeof keyValue)) {
							keyDetail[Constants.TYPE] = typeof keyValue;
							jsonValue = await this.setData(keyDetail, keyValue).catch((err) => {throw err;});
						} else if (key != null) {
							keyDetail[Constants.STRUCTURE_NAME] = key;
							keyDetail[Constants.NAME] = keyName;
							keyDetail[Constants.TYPE] = key;
							jsonValue = await this.setData(keyDetail, keyValue).catch((err) => {throw err;});
						}
					}
					else {
						if (customHandling && keyValue.constructor.name == Constants.ARRAY_KEY && keyValue.length > 0) {
							let key1 = await this.keyINJSONDetails(keyValue[0].constructor.name).catch((err) => {throw err;});
							if (key1 != null) {
								keyDetail[Constants.STRUCTURE_NAME] = key1;
								keyDetail[Constants.NAME] = keyName;
								keyDetail[Constants.TYPE] = key1;
								jsonValue = await this.setJSONArray(keyValue, keyDetail);
							} else {
								jsonValue = await this.redirectorForObjectToJSON(keyValue).catch((err) => {throw err;});
							}
						} else {
							jsonValue = await this.redirectorForObjectToJSON(keyValue).catch((err) => {throw err;});
						}
					}
				}
			} else {
				jsonValue = null;
			}
			requestJSON[keyName] = jsonValue;
		}
		if (skipMandatory || this.checkException(classMemberName, recordInstance, instanceNumber, lookUp, requiredKeys, primaryKeys, new Map())) {
			return requestJSON;
		}
		return requestJSON;
	}
	private async keyINJSONDetails(className : string) {
		let jsondetails = Initializer.jsonDetails;
		for (var key in jsondetails) {
			let arr = key.split("/");
			let fileName = arr[arr.length-1];
			fileName = fileName.split("_").join("");
			if (fileName.toLowerCase() == className.toLowerCase()) {
				return key;
			}
		}
		return null;
	}
	private async setData(memberDetail: { [key: string]: any }, fieldValue: any): Promise<any> {
		if (fieldValue != null) {
			let type = memberDetail[Constants.TYPE].toString();
			return await this.setDataValue(type, memberDetail, fieldValue).catch((err) => { throw err; });
		}
		return null;
	}

	private async setDataValue(type: string, memberDetail: { [key: string]: any }, fieldValue : any): Promise<any> {
		if (type.toLowerCase() == Constants.LIST_NAMESPACE.toLowerCase()) {
			return await this.setJSONArray(fieldValue, memberDetail).catch((err) => { throw err; });
		} else if (type.toLowerCase() == Constants.MAP_NAMESPACE.toLowerCase()) {
			return await this.setJSONObject(fieldValue, memberDetail).catch((err) => { throw err; });
		} else if (type == Constants.CHOICE_NAMESPACE || (memberDetail.hasOwnProperty(Constants.STRUCTURE_NAME) && memberDetail[Constants.STRUCTURE_NAME] == Constants.CHOICE_NAMESPACE)) {
			return ((fieldValue as Choice<any>).getValue());
		} else if (memberDetail.hasOwnProperty(Constants.STRUCTURE_NAME) && memberDetail.hasOwnProperty(Constants.MODULE)) {
			return await this.isRecordRequest(fieldValue, await this.getModuleDetailFromUserSpecJSON(memberDetail[Constants.MODULE]).catch((err) => { throw err; }), null, memberDetail).catch((err) => { throw err; });
		} else if (memberDetail.hasOwnProperty(Constants.STRUCTURE_NAME)) {
			return await this.formRequest(fieldValue, memberDetail[Constants.STRUCTURE_NAME], null, memberDetail).catch((err) => { throw err; });
		} else {
			return await DatatypeConverter.postConvert(fieldValue, type.toLowerCase());
		}
	}

	private async setJSONObject(fieldValue: any, memberDetail: { [key: string]: any } | null): Promise<object> {
		let jsonObject: { [key: string]: any } = {};
		let requestObject: Map<string, any> = fieldValue;
		if (Array.from(requestObject.keys()).length > 0) {
			if (memberDetail == null || (memberDetail != null && !memberDetail.hasOwnProperty(Constants.KEYS))) {
				for (let key of Array.from(requestObject.keys())) {
					jsonObject[key] = await this.redirectorForObjectToJSON(requestObject.get(key)).catch((err) => { throw err; });
				}
			} else {
				if (memberDetail !== null && memberDetail.hasOwnProperty(Constants.KEYS)) {
					var keysDetail = memberDetail[Constants.KEYS];
					for (let keyIndex = 0; keyIndex < keysDetail.length; keyIndex++) {
						let keyDetail = keysDetail[keyIndex];
						let keyName = keyDetail[Constants.NAME];
						let keyValue = null;
						if (requestObject.has(keyName) && requestObject.get(keyName) != null) {
							keyValue = await this.setData(keyDetail, requestObject.get(keyName)).catch((err) => { throw err; });
							jsonObject[keyName] = keyValue;
						}
					}
				}
			}
		}
		return jsonObject;
	}

	private async setJSONArray(fieldValue: any, memberDetail: { [key: string]: any } | null): Promise<any[]> {
		let jsonArray: any[] = [];
		let requestObjects: Array<any> = fieldValue;
		if (requestObjects.length > 0) {
			if (memberDetail == null || (memberDetail != null && !memberDetail.hasOwnProperty(Constants.STRUCTURE_NAME))) {
				if(memberDetail != null && memberDetail.hasOwnProperty(Constants.SUB_TYPE)) {
					let subType = memberDetail[Constants.SUB_TYPE];
					let type = subType[Constants.TYPE];
					if (type == Constants.CHOICE_NAMESPACE) {
						for (let request of requestObjects) {
							jsonArray.push(((request as Choice<any>).getValue()));
						}
					} else {
						for (let request of requestObjects) {
							jsonArray.push(await this.setDataValue(type, memberDetail, request));
						}
					}
				} else {
					for (let request of requestObjects) {
						jsonArray.push(await this.redirectorForObjectToJSON(request).catch((err) => { throw err; }));
					}
				}
			} else {
				let pack = memberDetail[Constants.STRUCTURE_NAME].toString();
				if (pack == Constants.CHOICE_NAMESPACE) {
					for (let request of requestObjects) {
						jsonArray.push(((request as Choice<any>).getValue()));
					}
				} else if (memberDetail.hasOwnProperty(Constants.MODULE) && memberDetail[Constants.MODULE] != null) {
					let instanceCount = 0;
					for (let request of requestObjects) {
						jsonArray.push(await this.isRecordRequest(request, await this.getModuleDetailFromUserSpecJSON(memberDetail[Constants.MODULE]).catch((err) => { throw err; }), instanceCount++, memberDetail));
					}
				} else {
					let instanceCount = 0;
					for (let request of requestObjects) {
						jsonArray.push(await this.formRequest(request, pack, instanceCount++, memberDetail));
					}
				}
			}
		}
		return jsonArray;
	}

	private async redirectorForObjectToJSON(request: any): Promise<any> {
		if (Array.isArray(request)) {
			return await this.setJSONArray(request, null).catch((err) => { throw err; });
		} else if (request instanceof Map) {
			return await this.setJSONObject(request, null).catch((err) => { throw err; });
		} else if (request instanceof Choice) {
			return request.getValue();
		} else {
			return request;
		}
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

	public async getWrappedResponse(response: any, pack: string): Promise<(object|null)[] | null> {
		if (response.body.length != 0) {
			var responseJson = JSON.parse(response.body);
			return [await this.getResponse(responseJson, pack).catch((err) => {
				throw err;
			}), responseJson];
		}
		return null;
	}

	public async getResponse(responseJson: any, packageName: string): Promise<object | null> {
		var instance = null;
		if (responseJson == null || responseJson == "" || responseJson.length == 0) {
			return instance;
		}
		var classDetail: { [key: string]: any } = Initializer.jsonDetails[packageName];
		var instance: any = null;
		if (classDetail.hasOwnProperty(Constants.INTERFACE) && classDetail[Constants.INTERFACE]) {
			let classes = classDetail[Constants.CLASSES];
			instance = await this.findMatch(classes, responseJson).catch((err) => { throw err; });// findmatch returns instance(calls getresponse() recursively)
		} else {
			let ClassName = (await import("../../".concat(packageName))).MasterModel;
			instance = new ClassName();
			if (instance instanceof Record) {// if record -> based on response json data will be assigned to field Values
				let moduleAPIName: string | null = this.commonAPIHandler.getModuleAPIName();
				instance = await this.isRecordResponse(responseJson, classDetail, packageName).catch((err) => { throw err; });
				this.commonAPIHandler.setModuleAPIName(moduleAPIName);
			}
			else {
				instance = await this.notRecordResponse(instance, responseJson, classDetail).catch((err) => { throw err; });
			}
		}
		return instance;
	}

	public async moduleToClass(moduleName : string) : Promise<string> {
		let className = moduleName;
		if (moduleName.includes("_")) {
			className = '';
			let moduleSplit : Array<string>= moduleName.split("_");
			for (let eachName in moduleSplit) {
				eachName = eachName.charAt(0).toUpperCase() + eachName.slice(1);
				className = className + eachName;
			}
		} else {
			className = moduleName.charAt(0).toUpperCase() + className.slice(1);
		}
		return className;
	}

	private async notRecordResponse(instance: any, responseJSON: any, classDetail: { [key: string]: any }): Promise<any> {
		for (let memberName in classDetail) {
			let keyDetail: { [key: string]: any } = classDetail[memberName];
			let keyName: string = keyDetail.hasOwnProperty(Constants.NAME) ? keyDetail[Constants.NAME] : null;// api-name of the member
			if (keyName != null && responseJSON.hasOwnProperty(keyName) && responseJSON[keyName] !== null) {
				let keyData = responseJSON[keyName];
				let memberValue = await this.getData(keyData, keyDetail).catch((err) => { throw err; });
				Reflect.set(instance, memberName, memberValue);
			}
		}
		return instance;
	}

	private async isRecordResponse(responseJson: any, classDetail: { [key: string]: any }, pack: string): Promise<any> {
		let className = (await import("../../" + pack)).MasterModel;
		let recordInstance = new className();
		let moduleAPIName: string | null = this.commonAPIHandler.getModuleAPIName();
		let moduleDetail: { [key: string]: any } = {};
		if (moduleAPIName != null) {// entry
			this.commonAPIHandler.setModuleAPIName(null);
			moduleDetail = await this.getModuleDetailFromUserSpecJSON(moduleAPIName).catch((err) => { throw err; });
		}
		for (let key in classDetail) {
			if (moduleDetail == null) {
				moduleDetail = {};
			}
			moduleDetail[key] = classDetail[key];
		}
		var recordDetail: { [key: string]: any } = Initializer.jsonDetails[Constants.RECORD_NAMESPACE];
		var keyValues: Map<string, any> = new Map<string, any>();
		for (let keyName in responseJson) {
			let memberName: string = await this.buildName(keyName).catch((err) => { throw err; });
			let keyDetail: { [key: string]: any } = {};
			if (moduleDetail != null && Object.keys(moduleDetail).length > 0 && (moduleDetail.hasOwnProperty(keyName) || moduleDetail.hasOwnProperty(memberName))) {
				if (moduleDetail.hasOwnProperty(keyName)) {
					keyDetail = moduleDetail[keyName];
				} else {
					keyDetail = moduleDetail[memberName];
				}
			} else if (recordDetail.hasOwnProperty(memberName)) {
				keyDetail = recordDetail[memberName];
			}
			let keyValue = null;
			let keyData = responseJson[keyName];
			if (keyDetail != null && Object.keys(keyDetail).length > 0) {
				keyName = keyDetail[Constants.NAME];
				keyValue = await this.getData(keyData, keyDetail).catch((err) => { throw err; });
			} else {// if not key detail
				keyValue = await this.redirectorForJSONToObject(keyData).catch((err) => { throw err; });
			}
			keyValues.set(keyName, keyValue);
		}
		Reflect.set(recordInstance, Constants.KEY_VALUES, keyValues);
		return recordInstance;
	}

	private async getData(keyData: any, memberDetail: { [key: string]: any }): Promise<any> {
		let memberValue: any = null;
		if (keyData !== null) {
			let type = memberDetail[Constants.TYPE].toString();
			memberValue = await this.getDataValue(type, keyData, memberDetail).catch((err) => { throw err; });
		}
		return memberValue;
	}
	async getDataValue(type: string, keyData: any, memberDetail: { [key: string]: any }) {
		let memberValue = null;
		if (type.toLowerCase() == Constants.LIST_NAMESPACE.toLowerCase()) {
			memberValue = await this.getCollectionsData(keyData, memberDetail).catch((err) => { throw err; });
		} else if (type.toLowerCase() == Constants.MAP_NAMESPACE.toLowerCase()) {
			memberValue = await this.getMapData(keyData, memberDetail).catch((err) => { throw err; });
		} else if (type == Constants.CHOICE_NAMESPACE || (memberDetail.hasOwnProperty(Constants.STRUCTURE_NAME) && memberDetail[Constants.STRUCTURE_NAME] == Constants.CHOICE_NAMESPACE)) {
			let Choice = (await import(Constants.CHOICE_PATH)).MasterModel;
			memberValue = new Choice(keyData);
		} else if (memberDetail.hasOwnProperty(Constants.STRUCTURE_NAME) && memberDetail.hasOwnProperty(Constants.MODULE)) {
			memberValue = await this.isRecordResponse(keyData, await this.getModuleDetailFromUserSpecJSON(memberDetail[Constants.MODULE]).catch((err) => { throw err; }), memberDetail[Constants.STRUCTURE_NAME]).catch((err) => { throw err; });
		} else if (memberDetail.hasOwnProperty(Constants.STRUCTURE_NAME)) {
			memberValue = await this.getResponse(keyData, memberDetail[Constants.STRUCTURE_NAME]).catch((err) => { throw err; });
		} else {
			memberValue = await DatatypeConverter.preConvert(keyData, type.toLowerCase());
		}
		return memberValue;
	}

	private async getMapData(response: any, memberDetail: { [key: string]: any } | null): Promise<Map<string, any>> {
		var mapInstance: Map<string, any> = new Map<string, any>();
		if (Object.keys(response).length > 0) {
			if (memberDetail == null || (memberDetail != null && !memberDetail.hasOwnProperty(Constants.KEYS))) {
				for (let key in response) {
					mapInstance.set(key, await this.redirectorForJSONToObject(response[key]).catch((err) => { throw err; }));
				}
			} else {// member must have keys
				if (memberDetail.hasOwnProperty(Constants.KEYS)) {
					var keysDetail: { [key: string]: any } = memberDetail[Constants.KEYS];
					for (let keyIndex = 0; keyIndex < keysDetail.length; keyIndex++) {
						var keyDetail: { [key: string]: any } = keysDetail[keyIndex];
						var keyName: string = keyDetail[Constants.NAME];
						var keyValue: any = null;
						if (response.hasOwnProperty(keyName) && response[keyName] != null) {
							keyValue = await this.getData(response[keyName], keyDetail).catch((err) => { throw err; });
							mapInstance.set(keyName, keyValue);
						}
					}
				}
			}
		}
		return mapInstance;
	}

	private async getCollectionsData(responses: any[], memberDetail: { [key: string]: any } | null): Promise<any[]> {
		var values: Array<any> = new Array<any>();
		if (responses.length > 0) {
			if (memberDetail == null || (memberDetail != null && !memberDetail.hasOwnProperty(Constants.STRUCTURE_NAME))) {
				if(memberDetail != null && memberDetail.hasOwnProperty(Constants.SUB_TYPE)){
					let subType = memberDetail[Constants.SUB_TYPE];
					let type = subType[Constants.TYPE];
					if (type == Constants.CHOICE_NAMESPACE) {
						for (let response of responses) {
							let choiceClass = (await import(Constants.CHOICE_PATH + ".js")).MasterModel;
              				let choiceInstance = new choiceClass(response);
              				values.push(choiceInstance);
						}
					} else {
            			for (let response of responses) {
              				values.push(await this.getDataValue(type, response, memberDetail).catch((err) => { throw err; }));
            			}
					}
				} else {
					for (let response of responses) {
						values.push(await this.redirectorForJSONToObject(response).catch((err) => { throw err; }));
					}
				}
			} else {// need to have structure Name in memberDetail
				var pack = memberDetail[Constants.STRUCTURE_NAME];
				if (pack == Constants.CHOICE_NAMESPACE) {
					for (let response of responses) {
						let choiceClass = (await import(Constants.CHOICE_PATH)).MasterModel;
						let choiceInstance = new choiceClass(response);
						values.push(choiceInstance);
					}
				} else if (memberDetail.hasOwnProperty(Constants.MODULE) && memberDetail[Constants.MODULE] != null) {
					for (let response of responses) {
						values.push(await this.isRecordResponse(response, await this.getModuleDetailFromUserSpecJSON(memberDetail[Constants.MODULE]).catch((err) => { throw err; }), pack).catch((err) => { throw err; }));
					}
				} else {
					for (let response of responses) {
						values.push(await this.getResponse(response, pack).catch((err) => { throw err; }));
					}
				}
			}
		}
		return values;
	}

	private async getModuleDetailFromUserSpecJSON(module: string) {
		var recordFieldDetailsPath = join(await Converter.getEncodedFileName().catch((err) => { throw err; }));
		var moduleDetailFromUserSpecJSON = Initializer.getJSON(recordFieldDetailsPath);
		var moduleDetail = await Utility.getJSONObject(moduleDetailFromUserSpecJSON, module).catch((err) => { throw err; });
		if (moduleDetail != null && Object.keys(moduleDetail).length == 0) {
			try {
				delete moduleDetailFromUserSpecJSON[module.toLowerCase()];
				writeFileSync(recordFieldDetailsPath, JSON.stringify(moduleDetailFromUserSpecJSON))
			} catch (e) {
				throw e;
			}
		}
		return moduleDetail;
	}

	private async redirectorForJSONToObject(keyData: any): Promise<any> {
		let type = Object.prototype.toString.call(keyData);
		if (type == Constants.OBJECT_TYPE) {
			return await this.getMapData(keyData, null).catch((err) => { throw err; });
		}
		else if (type == Constants.ARRAY_TYPE) {
			return await this.getCollectionsData(keyData, null).catch((err) => { throw err; });
		}
		else {
			return keyData;
		}
	}

	private async findMatch(classes: string[], responseJson: any) {
		let pack = "";
		let ratio = 0;
		for (let className of classes) {
			var matchRatio: number = await this.findRatio(className, responseJson).catch((err) => { throw err; });
			if (matchRatio == 1.0) {
				pack = className;
				ratio = 1;
				break;
			} else if (matchRatio > ratio) {
				ratio = matchRatio;
				pack = className;
			}
		}
		return this.getResponse(responseJson, pack).catch((err) => { throw err; });
	}

	private findRatio(className: string, responseJson: any): Promise<number> {
		var classDetail: { [key: string]: any } = Initializer.jsonDetails[className];
		var totalPoints: number = Array.from(Object.keys(classDetail)).length;
		var matches: number = 0;
		if (totalPoints == 0) {
			return Promise.resolve(0);
		}
		else {
			for (let memberName in classDetail) {
				var memberDetail = classDetail[memberName];
				var keyName = memberDetail.hasOwnProperty(Constants.NAME) ? memberDetail[Constants.NAME] : null;
				if (keyName != null && responseJson.hasOwnProperty(keyName) && responseJson[keyName] != null) {// key not empty
					var keyData = responseJson[keyName];
					let type = Object.prototype.toString.call(keyData);
					let structureName = memberDetail.hasOwnProperty(Constants.STRUCTURE_NAME) ? memberDetail[Constants.STRUCTURE_NAME] : null;
					if (type == Constants.OBJECT_TYPE) {
						type = Constants.MAP_TYPE;
					}
					if (Constants.TYPE_VS_DATATYPE.has(memberDetail[Constants.TYPE].toLowerCase()) && Constants.TYPE_VS_DATATYPE.get(memberDetail[Constants.TYPE].toLowerCase()) == type) {
						matches++;
					} else if (keyName.toLowerCase() == Constants.COUNT && memberDetail[Constants.TYPE].toLowerCase() == Constants.LONG_NAMESPACE.toLowerCase() && type == Constants.NUMBER_TYPE) {
						matches++;
					} else if (memberDetail[Constants.TYPE] == Constants.CHOICE_NAMESPACE) {
						let values = memberDetail[Constants.VALUES];
						for (let value in values) {
							if (keyData == values[value]) {
								matches++;
								break;
							}
						}
					}
					if (structureName != null && structureName == memberDetail[Constants.TYPE]) {
						if (memberDetail.hasOwnProperty(Constants.VALUES)) {
							let values = memberDetail[Constants.VALUES];
							for (let value in values) {
								if (keyData == values[value]) {
									matches++;
									break;
								}
							}
						} else {
							matches++;
						}
					}
				}
			}
		}
		return Promise.resolve(matches / totalPoints);
	}

	private async buildName(memberName: string): Promise<string> {
		let name = memberName.split("_");
		var index = 0;
		if (name.length == 0) {
			index = 1;
		}
		var sdkName = name[0];
		if (sdkName.length != 0 && name[0].length != 0) {
			sdkName = sdkName[0].toLowerCase() + sdkName.slice(1);
		}
		index = 1;
		for (var nameIndex = index; nameIndex < name.length; nameIndex++) {
			var fieldName = name[nameIndex];
			var firstLetterUppercase = "";
			if (fieldName.length > 0) {
				firstLetterUppercase = fieldName[0].toUpperCase() + fieldName.slice(1);
			}
			sdkName = sdkName.concat(firstLetterUppercase);
		}
		return sdkName;
	}
}