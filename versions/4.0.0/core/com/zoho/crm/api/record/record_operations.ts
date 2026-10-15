import {Header} from "../../../../../../routes/header";
import {HeaderMap} from "../../../../../../routes/header_map";
import {Param} from "../../../../../../routes/param";
import {ParameterMap} from "../../../../../../routes/parameter_map";
import {ActionHandler} from "./action_handler";
import {BodyWrapper} from "./body_wrapper";
import {CountHandler} from "./count_handler";
import {DeletedRecordsHandler} from "./deleted_records_handler";
import {DownloadHandler} from "./download_handler";
import {FileBodyWrapper} from "./file_body_wrapper";
import {FileHandler} from "./file_handler";
import {MassUpdateActionHandler} from "./mass_update_action_handler";
import {MassUpdateBodyWrapper} from "./mass_update_body_wrapper";
import {MassUpdateResponseHandler} from "./mass_update_response_handler";
import {ResponseHandler} from "./response_handler";
import {SDKException} from "../exception/sdk_exception";
import {APIResponse} from "../../../../../../routes/controllers/api_response";
import {CommonAPIHandler} from "../../../../../../routes/middlewares/common_api_handler";
import {Utility} from "../../../../../../utils/util/utility";
import { Constants } from "../../../../../../utils/util/constants";

class RecordOperations{

	private moduleAPIName: string;
	/**
	 * Creates an instance of RecordOperations with the given parameters
	 * @param moduleAPIName A String representing the moduleAPIName
	 */
	constructor(moduleAPIName: string){
		this.moduleAPIName = moduleAPIName;

	}

	/**
	 * The method to get record
	 * @param id A BigInt representing the id
	 * @param paramInstance An instance of ParameterMap
	 * @param headerInstance An instance of HeaderMap
	 * @returns An instance of APIResponse<ResponseHandler>
	 * @throws SDKException
	 */
	public async getRecord(id: bigint, paramInstance?: ParameterMap, headerInstance?: HeaderMap): Promise<APIResponse<ResponseHandler>>	{
		let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
		let apiPath: string = '';
		apiPath = apiPath.concat("/crm/v8/");
		apiPath = apiPath.concat(this.moduleAPIName.toString());
		apiPath = apiPath.concat("/");
		apiPath = apiPath.concat(id.toString());
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
		handlerInstance.setParam(paramInstance);
		handlerInstance.setHeader(headerInstance);
		handlerInstance.setModuleAPIName(this.moduleAPIName);
		await Utility.getFields(this.moduleAPIName, handlerInstance).catch(err => { throw err; });
		let ResponseHandler = require.resolve("./response_handler");
		return handlerInstance.apiCall<ResponseHandler>(ResponseHandler, "application/json");

	}

	/**
	 * The method to update record
	 * @param id A BigInt representing the id
	 * @param request An instance of BodyWrapper
	 * @param headerInstance An instance of HeaderMap
	 * @returns An instance of APIResponse<ActionHandler>
	 * @throws SDKException
	 */
	public async updateRecord(id: bigint, request: BodyWrapper, headerInstance?: HeaderMap): Promise<APIResponse<ActionHandler>>	{
		let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
		let apiPath: string = '';
		apiPath = apiPath.concat("/crm/v8/");
		apiPath = apiPath.concat(this.moduleAPIName.toString());
		apiPath = apiPath.concat("/");
		apiPath = apiPath.concat(id.toString());
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_PUT);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_UPDATE);
		handlerInstance.setContentType("application/json");
		handlerInstance.setRequest(request);
		handlerInstance.setMandatoryChecker(true);
		handlerInstance.setHeader(headerInstance);
		handlerInstance.setModuleAPIName(this.moduleAPIName);
		await Utility.getFields(this.moduleAPIName, handlerInstance).catch(err => { throw err; });
		let ActionHandler = require.resolve("./action_handler");
		return handlerInstance.apiCall<ActionHandler>(ActionHandler, "application/json");

	}

	/**
	 * The method to delete record
	 * @param id A BigInt representing the id
	 * @param paramInstance An instance of ParameterMap
	 * @param headerInstance An instance of HeaderMap
	 * @returns An instance of APIResponse<ActionHandler>
	 * @throws SDKException
	 */
	public async deleteRecord(id: bigint, paramInstance?: ParameterMap, headerInstance?: HeaderMap): Promise<APIResponse<ActionHandler>>	{
		let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
		let apiPath: string = '';
		apiPath = apiPath.concat("/crm/v8/");
		apiPath = apiPath.concat(this.moduleAPIName.toString());
		apiPath = apiPath.concat("/");
		apiPath = apiPath.concat(id.toString());
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_DELETE);
		handlerInstance.setCategoryMethod(Constants.REQUEST_METHOD_DELETE);
		handlerInstance.setParam(paramInstance);
		handlerInstance.setHeader(headerInstance);
		await Utility.getFields(this.moduleAPIName, handlerInstance).catch(err => { throw err; });
		let ActionHandler = require.resolve("./action_handler");
		return handlerInstance.apiCall<ActionHandler>(ActionHandler, "application/json");

	}

	/**
	 * The method to get records
	 * @param paramInstance An instance of ParameterMap
	 * @param headerInstance An instance of HeaderMap
	 * @returns An instance of APIResponse<ResponseHandler>
	 * @throws SDKException
	 */
	public async getRecords(paramInstance?: ParameterMap, headerInstance?: HeaderMap): Promise<APIResponse<ResponseHandler>>	{
		let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
		let apiPath: string = '';
		apiPath = apiPath.concat("/crm/v8/");
		apiPath = apiPath.concat(this.moduleAPIName.toString());
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
		handlerInstance.setParam(paramInstance);
		handlerInstance.setHeader(headerInstance);
		handlerInstance.setModuleAPIName(this.moduleAPIName);
		await Utility.getFields(this.moduleAPIName, handlerInstance).catch(err => { throw err; });
		let ResponseHandler = require.resolve("./response_handler");
		return handlerInstance.apiCall<ResponseHandler>(ResponseHandler, "application/json");

	}

	/**
	 * The method to create records
	 * @param request An instance of BodyWrapper
	 * @param headerInstance An instance of HeaderMap
	 * @returns An instance of APIResponse<ActionHandler>
	 * @throws SDKException
	 */
	public async createRecords(request: BodyWrapper, headerInstance?: HeaderMap): Promise<APIResponse<ActionHandler>>	{
		let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
		let apiPath: string = '';
		apiPath = apiPath.concat("/crm/v8/");
		apiPath = apiPath.concat(this.moduleAPIName.toString());
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_POST);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_CREATE);
		handlerInstance.setContentType("application/json");
		handlerInstance.setRequest(request);
		handlerInstance.setHeader(headerInstance);
		handlerInstance.setModuleAPIName(this.moduleAPIName);
		await Utility.getFields(this.moduleAPIName, handlerInstance).catch(err => { throw err; });
		let ActionHandler = require.resolve("./action_handler");
		return handlerInstance.apiCall<ActionHandler>(ActionHandler, "application/json");

	}

	/**
	 * The method to update records
	 * @param request An instance of BodyWrapper
	 * @param headerInstance An instance of HeaderMap
	 * @returns An instance of APIResponse<ActionHandler>
	 * @throws SDKException
	 */
	public async updateRecords(request: BodyWrapper, headerInstance?: HeaderMap): Promise<APIResponse<ActionHandler>>	{
		let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
		let apiPath: string = '';
		apiPath = apiPath.concat("/crm/v8/");
		apiPath = apiPath.concat(this.moduleAPIName.toString());
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_PUT);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_UPDATE);
		handlerInstance.setContentType("application/json");
		handlerInstance.setRequest(request);
		handlerInstance.setHeader(headerInstance);
		handlerInstance.setModuleAPIName(this.moduleAPIName);
		await Utility.getFields(this.moduleAPIName, handlerInstance).catch(err => { throw err; });
		let ActionHandler = require.resolve("./action_handler");
		return handlerInstance.apiCall<ActionHandler>(ActionHandler, "application/json");

	}

	/**
	 * The method to delete records
	 * @param paramInstance An instance of ParameterMap
	 * @param headerInstance An instance of HeaderMap
	 * @returns An instance of APIResponse<ActionHandler>
	 * @throws SDKException
	 */
	public async deleteRecords(paramInstance?: ParameterMap, headerInstance?: HeaderMap): Promise<APIResponse<ActionHandler>>	{
		let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
		let apiPath: string = '';
		apiPath = apiPath.concat("/crm/v8/");
		apiPath = apiPath.concat(this.moduleAPIName.toString());
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_DELETE);
		handlerInstance.setCategoryMethod(Constants.REQUEST_METHOD_DELETE);
		handlerInstance.setParam(paramInstance);
		handlerInstance.setHeader(headerInstance);
		await Utility.getFields(this.moduleAPIName, handlerInstance).catch(err => { throw err; });
		let ActionHandler = require.resolve("./action_handler");
		return handlerInstance.apiCall<ActionHandler>(ActionHandler, "application/json");

	}

	/**
	 * The method to upsert records
	 * @param request An instance of BodyWrapper
	 * @param headerInstance An instance of HeaderMap
	 * @returns An instance of APIResponse<ActionHandler>
	 * @throws SDKException
	 */
	public async upsertRecords(request: BodyWrapper, headerInstance?: HeaderMap): Promise<APIResponse<ActionHandler>>	{
		let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
		let apiPath: string = '';
		apiPath = apiPath.concat("/crm/v8/");
		apiPath = apiPath.concat(this.moduleAPIName.toString());
		apiPath = apiPath.concat("/upsert");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_POST);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_ACTION);
		handlerInstance.setContentType("application/json");
		handlerInstance.setRequest(request);
		handlerInstance.setHeader(headerInstance);
		handlerInstance.setModuleAPIName(this.moduleAPIName);
		await Utility.getFields(this.moduleAPIName, handlerInstance).catch(err => { throw err; });
		let ActionHandler = require.resolve("./action_handler");
		return handlerInstance.apiCall<ActionHandler>(ActionHandler, "application/json");

	}

	/**
	 * The method to get deleted records
	 * @param paramInstance An instance of ParameterMap
	 * @param headerInstance An instance of HeaderMap
	 * @returns An instance of APIResponse<DeletedRecordsHandler>
	 * @throws SDKException
	 */
	public async getDeletedRecords(paramInstance?: ParameterMap, headerInstance?: HeaderMap): Promise<APIResponse<DeletedRecordsHandler>>	{
		let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
		let apiPath: string = '';
		apiPath = apiPath.concat("/crm/v8/");
		apiPath = apiPath.concat(this.moduleAPIName.toString());
		apiPath = apiPath.concat("/deleted");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
		handlerInstance.setParam(paramInstance);
		handlerInstance.setHeader(headerInstance);
		await Utility.getFields(this.moduleAPIName, handlerInstance).catch(err => { throw err; });
		let DeletedRecordsHandler = require.resolve("./deleted_records_handler");
		return handlerInstance.apiCall<DeletedRecordsHandler>(DeletedRecordsHandler, "application/json");

	}

	/**
	 * The method to search records
	 * @param paramInstance An instance of ParameterMap
	 * @param headerInstance An instance of HeaderMap
	 * @returns An instance of APIResponse<ResponseHandler>
	 * @throws SDKException
	 */
	public async searchRecords(paramInstance?: ParameterMap, headerInstance?: HeaderMap): Promise<APIResponse<ResponseHandler>>	{
		let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
		let apiPath: string = '';
		apiPath = apiPath.concat("/crm/v8/");
		apiPath = apiPath.concat(this.moduleAPIName.toString());
		apiPath = apiPath.concat("/search");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
		handlerInstance.setParam(paramInstance);
		handlerInstance.setHeader(headerInstance);
		handlerInstance.setModuleAPIName(this.moduleAPIName);
		await Utility.getFields(this.moduleAPIName, handlerInstance).catch(err => { throw err; });
		let ResponseHandler = require.resolve("./response_handler");
		return handlerInstance.apiCall<ResponseHandler>(ResponseHandler, "application/json");

	}

	/**
	 * The method to get photo
	 * @param id A BigInt representing the id
	 * @returns An instance of APIResponse<DownloadHandler>
	 * @throws SDKException
	 */
	public async getPhoto(id: bigint): Promise<APIResponse<DownloadHandler>>	{
		let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
		let apiPath: string = '';
		apiPath = apiPath.concat("/crm/v8/");
		apiPath = apiPath.concat(this.moduleAPIName.toString());
		apiPath = apiPath.concat("/");
		apiPath = apiPath.concat(id.toString());
		apiPath = apiPath.concat("/photo");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
		await Utility.getFields(this.moduleAPIName, handlerInstance).catch(err => { throw err; });
		let DownloadHandler = require.resolve("./download_handler");
		return handlerInstance.apiCall<DownloadHandler>(DownloadHandler, "application/x-download");

	}

	/**
	 * The method to upload photo
	 * @param id A BigInt representing the id
	 * @param request An instance of FileBodyWrapper
	 * @param paramInstance An instance of ParameterMap
	 * @returns An instance of APIResponse<FileHandler>
	 * @throws SDKException
	 */
	public async uploadPhoto(id: bigint, request: FileBodyWrapper, paramInstance?: ParameterMap): Promise<APIResponse<FileHandler>>	{
		let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
		let apiPath: string = '';
		apiPath = apiPath.concat("/crm/v8/");
		apiPath = apiPath.concat(this.moduleAPIName.toString());
		apiPath = apiPath.concat("/");
		apiPath = apiPath.concat(id.toString());
		apiPath = apiPath.concat("/photo");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_POST);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_CREATE);
		handlerInstance.setContentType("multipart/form-data");
		handlerInstance.setRequest(request);
		handlerInstance.setMandatoryChecker(true);
		handlerInstance.setParam(paramInstance);
		await Utility.getFields(this.moduleAPIName, handlerInstance).catch(err => { throw err; });
		await Utility.verifyPhotoSupport(this.moduleAPIName).catch(err => { throw err; });
		let FileHandler = require.resolve("./file_handler");
		return handlerInstance.apiCall<FileHandler>(FileHandler, "application/json");

	}

	/**
	 * The method to delete photo
	 * @param id A BigInt representing the id
	 * @returns An instance of APIResponse<FileHandler>
	 * @throws SDKException
	 */
	public async deletePhoto(id: bigint): Promise<APIResponse<FileHandler>>	{
		let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
		let apiPath: string = '';
		apiPath = apiPath.concat("/crm/v8/");
		apiPath = apiPath.concat(this.moduleAPIName.toString());
		apiPath = apiPath.concat("/");
		apiPath = apiPath.concat(id.toString());
		apiPath = apiPath.concat("/photo");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_DELETE);
		handlerInstance.setCategoryMethod(Constants.REQUEST_METHOD_DELETE);
		await Utility.getFields(this.moduleAPIName, handlerInstance).catch(err => { throw err; });
		let FileHandler = require.resolve("./file_handler");
		return handlerInstance.apiCall<FileHandler>(FileHandler, "application/json");

	}

	/**
	 * The method to mass update records
	 * @param request An instance of MassUpdateBodyWrapper
	 * @returns An instance of APIResponse<MassUpdateActionHandler>
	 * @throws SDKException
	 */
	public async massUpdateRecords(request: MassUpdateBodyWrapper): Promise<APIResponse<MassUpdateActionHandler>>	{
		let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
		let apiPath: string = '';
		apiPath = apiPath.concat("/crm/v8/");
		apiPath = apiPath.concat(this.moduleAPIName.toString());
		apiPath = apiPath.concat("/actions/mass_update");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_POST);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_UPDATE);
		handlerInstance.setContentType("application/json");
		handlerInstance.setRequest(request);
		handlerInstance.setMandatoryChecker(true);
		handlerInstance.setModuleAPIName(this.moduleAPIName);
		await Utility.getFields(this.moduleAPIName, handlerInstance).catch(err => { throw err; });
		let MassUpdateActionHandler = require.resolve("./mass_update_action_handler");
		return handlerInstance.apiCall<MassUpdateActionHandler>(MassUpdateActionHandler, "application/json");

	}

	/**
	 * The method to get mass update status
	 * @param paramInstance An instance of ParameterMap
	 * @returns An instance of APIResponse<MassUpdateResponseHandler>
	 * @throws SDKException
	 */
	public async getMassUpdateStatus(paramInstance?: ParameterMap): Promise<APIResponse<MassUpdateResponseHandler>>	{
		let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
		let apiPath: string = '';
		apiPath = apiPath.concat("/crm/v8/");
		apiPath = apiPath.concat(this.moduleAPIName.toString());
		apiPath = apiPath.concat("/actions/mass_update");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
		handlerInstance.setParam(paramInstance);
		await Utility.getFields(this.moduleAPIName, handlerInstance).catch(err => { throw err; });
		let MassUpdateResponseHandler = require.resolve("./mass_update_response_handler");
		return handlerInstance.apiCall<MassUpdateResponseHandler>(MassUpdateResponseHandler, "application/json");

	}

	/**
	 * The method to assign territories to multiple records
	 * @param request An instance of BodyWrapper
	 * @returns An instance of APIResponse<ActionHandler>
	 * @throws SDKException
	 */
	public async assignTerritoriesToMultipleRecords(request: BodyWrapper): Promise<APIResponse<ActionHandler>>	{
		let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
		let apiPath: string = '';
		apiPath = apiPath.concat("/crm/v8/");
		apiPath = apiPath.concat(this.moduleAPIName.toString());
		apiPath = apiPath.concat("/actions/assign_territories");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_POST);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_UPDATE);
		handlerInstance.setContentType("application/json");
		handlerInstance.setRequest(request);
		handlerInstance.setMandatoryChecker(true);
		handlerInstance.setModuleAPIName(this.moduleAPIName);
		await Utility.getFields(this.moduleAPIName, handlerInstance).catch(err => { throw err; });
		let ActionHandler = require.resolve("./action_handler");
		return handlerInstance.apiCall<ActionHandler>(ActionHandler, "application/json");

	}

	/**
	 * The method to assign territory to record
	 * @param id A BigInt representing the id
	 * @param request An instance of BodyWrapper
	 * @returns An instance of APIResponse<ActionHandler>
	 * @throws SDKException
	 */
	public async assignTerritoryToRecord(id: bigint, request: BodyWrapper): Promise<APIResponse<ActionHandler>>	{
		let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
		let apiPath: string = '';
		apiPath = apiPath.concat("/crm/v8/");
		apiPath = apiPath.concat(this.moduleAPIName.toString());
		apiPath = apiPath.concat("/");
		apiPath = apiPath.concat(id.toString());
		apiPath = apiPath.concat("/actions/assign_territories");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_POST);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_UPDATE);
		handlerInstance.setContentType("application/json");
		handlerInstance.setRequest(request);
		handlerInstance.setMandatoryChecker(true);
		handlerInstance.setModuleAPIName(this.moduleAPIName);
		await Utility.getFields(this.moduleAPIName, handlerInstance).catch(err => { throw err; });
		let ActionHandler = require.resolve("./action_handler");
		return handlerInstance.apiCall<ActionHandler>(ActionHandler, "application/json");

	}

	/**
	 * The method to remove territories from multiple records
	 * @param request An instance of BodyWrapper
	 * @returns An instance of APIResponse<ActionHandler>
	 * @throws SDKException
	 */
	public async removeTerritoriesFromMultipleRecords(request: BodyWrapper): Promise<APIResponse<ActionHandler>>	{
		let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
		let apiPath: string = '';
		apiPath = apiPath.concat("/crm/v8/");
		apiPath = apiPath.concat(this.moduleAPIName.toString());
		apiPath = apiPath.concat("/actions/remove_territories");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_POST);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_UPDATE);
		handlerInstance.setContentType("application/json");
		handlerInstance.setRequest(request);
		handlerInstance.setMandatoryChecker(true);
		handlerInstance.setModuleAPIName(this.moduleAPIName);
		await Utility.getFields(this.moduleAPIName, handlerInstance).catch(err => { throw err; });
		let ActionHandler = require.resolve("./action_handler");
		return handlerInstance.apiCall<ActionHandler>(ActionHandler, "application/json");

	}

	/**
	 * The method to remove territories from record
	 * @param id A BigInt representing the id
	 * @param request An instance of BodyWrapper
	 * @returns An instance of APIResponse<ActionHandler>
	 * @throws SDKException
	 */
	public async removeTerritoriesFromRecord(id: bigint, request: BodyWrapper): Promise<APIResponse<ActionHandler>>	{
		let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
		let apiPath: string = '';
		apiPath = apiPath.concat("/crm/v8/");
		apiPath = apiPath.concat(this.moduleAPIName.toString());
		apiPath = apiPath.concat("/");
		apiPath = apiPath.concat(id.toString());
		apiPath = apiPath.concat("/actions/remove_territories");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_POST);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_UPDATE);
		handlerInstance.setContentType("application/json");
		handlerInstance.setRequest(request);
		handlerInstance.setMandatoryChecker(true);
		handlerInstance.setModuleAPIName(this.moduleAPIName);
		await Utility.getFields(this.moduleAPIName, handlerInstance).catch(err => { throw err; });
		let ActionHandler = require.resolve("./action_handler");
		return handlerInstance.apiCall<ActionHandler>(ActionHandler, "application/json");

	}

	/**
	 * The method to record count
	 * @param paramInstance An instance of ParameterMap
	 * @returns An instance of APIResponse<CountHandler>
	 * @throws SDKException
	 */
	public async recordCount(paramInstance?: ParameterMap): Promise<APIResponse<CountHandler>>	{
		let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
		let apiPath: string = '';
		apiPath = apiPath.concat("/crm/v8/");
		apiPath = apiPath.concat(this.moduleAPIName.toString());
		apiPath = apiPath.concat("/actions/count");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
		handlerInstance.setParam(paramInstance);
		let CountHandler = require.resolve("./count_handler");
		return handlerInstance.apiCall<CountHandler>(CountHandler, "application/json");

	}

	/**
	 * The method to get record using external id
	 * @param externalFieldValue A String representing the externalFieldValue
	 * @param paramInstance An instance of ParameterMap
	 * @param headerInstance An instance of HeaderMap
	 * @returns An instance of APIResponse<ResponseHandler>
	 * @throws SDKException
	 */
	public async getRecordUsingExternalId(externalFieldValue: string, paramInstance?: ParameterMap, headerInstance?: HeaderMap): Promise<APIResponse<ResponseHandler>>	{
		let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
		let apiPath: string = '';
		apiPath = apiPath.concat("/crm/v8/");
		apiPath = apiPath.concat(this.moduleAPIName.toString());
		apiPath = apiPath.concat("/");
		apiPath = apiPath.concat(externalFieldValue.toString());
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
		handlerInstance.setParam(paramInstance);
		handlerInstance.setHeader(headerInstance);
		handlerInstance.setModuleAPIName(this.moduleAPIName);
		await Utility.getFields(this.moduleAPIName, handlerInstance).catch(err => { throw err; });
		let ResponseHandler = require.resolve("./response_handler");
		return handlerInstance.apiCall<ResponseHandler>(ResponseHandler, "application/json");

	}

	/**
	 * The method to update record using external id
	 * @param externalFieldValue A String representing the externalFieldValue
	 * @param request An instance of BodyWrapper
	 * @param headerInstance An instance of HeaderMap
	 * @returns An instance of APIResponse<ActionHandler>
	 * @throws SDKException
	 */
	public async updateRecordUsingExternalId(externalFieldValue: string, request: BodyWrapper, headerInstance?: HeaderMap): Promise<APIResponse<ActionHandler>>	{
		let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
		let apiPath: string = '';
		apiPath = apiPath.concat("/crm/v8/");
		apiPath = apiPath.concat(this.moduleAPIName.toString());
		apiPath = apiPath.concat("/");
		apiPath = apiPath.concat(externalFieldValue.toString());
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_PUT);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_UPDATE);
		handlerInstance.setContentType("application/json");
		handlerInstance.setRequest(request);
		handlerInstance.setMandatoryChecker(true);
		handlerInstance.setHeader(headerInstance);
		handlerInstance.setModuleAPIName(this.moduleAPIName);
		await Utility.getFields(this.moduleAPIName, handlerInstance).catch(err => { throw err; });
		let ActionHandler = require.resolve("./action_handler");
		return handlerInstance.apiCall<ActionHandler>(ActionHandler, "application/json");

	}

	/**
	 * The method to delete record using external id
	 * @param externalFieldValue A String representing the externalFieldValue
	 * @param paramInstance An instance of ParameterMap
	 * @param headerInstance An instance of HeaderMap
	 * @returns An instance of APIResponse<ActionHandler>
	 * @throws SDKException
	 */
	public async deleteRecordUsingExternalId(externalFieldValue: string, paramInstance?: ParameterMap, headerInstance?: HeaderMap): Promise<APIResponse<ActionHandler>>	{
		let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
		let apiPath: string = '';
		apiPath = apiPath.concat("/crm/v8/");
		apiPath = apiPath.concat(this.moduleAPIName.toString());
		apiPath = apiPath.concat("/");
		apiPath = apiPath.concat(externalFieldValue.toString());
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_DELETE);
		handlerInstance.setCategoryMethod(Constants.REQUEST_METHOD_DELETE);
		handlerInstance.setParam(paramInstance);
		handlerInstance.setHeader(headerInstance);
		await Utility.getFields(this.moduleAPIName, handlerInstance).catch(err => { throw err; });
		let ActionHandler = require.resolve("./action_handler");
		return handlerInstance.apiCall<ActionHandler>(ActionHandler, "application/json");

	}

	/**
	 * The method to get full data for rich text
	 * @param id A BigInt representing the id
	 * @param paramInstance An instance of ParameterMap
	 * @returns An instance of APIResponse<ResponseHandler>
	 * @throws SDKException
	 */
	public async getFullDataForRichText(id: bigint, paramInstance?: ParameterMap): Promise<APIResponse<ResponseHandler>>	{
		let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
		let apiPath: string = '';
		apiPath = apiPath.concat("/crm/v8/");
		apiPath = apiPath.concat(this.moduleAPIName.toString());
		apiPath = apiPath.concat("/");
		apiPath = apiPath.concat(id.toString());
		apiPath = apiPath.concat("/actions/fetch_full_data");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
		handlerInstance.setParam(paramInstance);
		await Utility.getFields(this.moduleAPIName, handlerInstance).catch(err => { throw err; });
		let ResponseHandler = require.resolve("./response_handler");
		return handlerInstance.apiCall<ResponseHandler>(ResponseHandler, "application/json");

	}

	/**
	 * The method to get rich text records
	 * @param paramInstance An instance of ParameterMap
	 * @returns An instance of APIResponse<ResponseHandler>
	 * @throws SDKException
	 */
	public async getRichTextRecords(paramInstance?: ParameterMap): Promise<APIResponse<ResponseHandler>>	{
		let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
		let apiPath: string = '';
		apiPath = apiPath.concat("/crm/v8/");
		apiPath = apiPath.concat(this.moduleAPIName.toString());
		apiPath = apiPath.concat("/actions/fetch_full_data");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
		handlerInstance.setParam(paramInstance);
		handlerInstance.setModuleAPIName(this.moduleAPIName);
		await Utility.getFields(this.moduleAPIName, handlerInstance).catch(err => { throw err; });
		let ResponseHandler = require.resolve("./response_handler");
		return handlerInstance.apiCall<ResponseHandler>(ResponseHandler, "application/json");

	}

	/**
	 * The method to clone record
	 * @param id A BigInt representing the id
	 * @returns An instance of APIResponse<ActionHandler>
	 * @throws SDKException
	 */
	public async cloneRecord(id: bigint): Promise<APIResponse<ActionHandler>>	{
		let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
		let apiPath: string = '';
		apiPath = apiPath.concat("/crm/v8/");
		apiPath = apiPath.concat(this.moduleAPIName.toString());
		apiPath = apiPath.concat("/");
		apiPath = apiPath.concat(id.toString());
		apiPath = apiPath.concat("/actions/clone");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_POST);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_CREATE);
		handlerInstance.setMandatoryChecker(true);
		handlerInstance.setModuleAPIName(this.moduleAPIName);
		await Utility.getFields(this.moduleAPIName, handlerInstance).catch(err => { throw err; });
		let ActionHandler = require.resolve("./action_handler");
		return handlerInstance.apiCall<ActionHandler>(ActionHandler, "application/json");

	}

}
class GetRecordParam{

	public static APPROVED: Param<string> = new Param<string>("approved", "com.zoho.crm.api.Record.GetRecordParam");
	public static CONVERTED: Param<string> = new Param<string>("converted", "com.zoho.crm.api.Record.GetRecordParam");
	public static CVID: Param<string> = new Param<string>("cvid", "com.zoho.crm.api.Record.GetRecordParam");
	public static UID: Param<string> = new Param<string>("uid", "com.zoho.crm.api.Record.GetRecordParam");
	public static FIELDS: Param<string> = new Param<string>("fields", "com.zoho.crm.api.Record.GetRecordParam");
	public static STARTDATETIME: Param<Date> = new Param<Date>("startDateTime", "com.zoho.crm.api.Record.GetRecordParam");
	public static ENDDATETIME: Param<Date> = new Param<Date>("endDateTime", "com.zoho.crm.api.Record.GetRecordParam");
	public static TERRITORY_ID: Param<string> = new Param<string>("territory_id", "com.zoho.crm.api.Record.GetRecordParam");
	public static INCLUDE_CHILD: Param<string> = new Param<string>("include_child", "com.zoho.crm.api.Record.GetRecordParam");
	public static ON_DEMAND_PROPERTIES: Param<string> = new Param<string>("on_demand_properties", "com.zoho.crm.api.Record.GetRecordParam");
}

class GetRecordHeader{

	public static IF_MODIFIED_SINCE: Header<Date> = new Header<Date>("If-Modified-Since", "com.zoho.crm.api.Record.GetRecordHeader");
	public static X_EXTERNAL: Header<string> = new Header<string>("X-EXTERNAL", "com.zoho.crm.api.Record.GetRecordHeader");
}

class UpdateRecordHeader{

	public static X_EXTERNAL: Header<string> = new Header<string>("X-EXTERNAL", "com.zoho.crm.api.Record.UpdateRecordHeader");
}

class DeleteRecordParam{

	public static WF_TRIGGER: Param<boolean> = new Param<boolean>("wf_trigger", "com.zoho.crm.api.Record.DeleteRecordParam");
}

class DeleteRecordHeader{

	public static X_EXTERNAL: Header<string> = new Header<string>("X-EXTERNAL", "com.zoho.crm.api.Record.DeleteRecordHeader");
}

class GetRecordsParam{

	public static APPROVED: Param<string> = new Param<string>("approved", "com.zoho.crm.api.Record.GetRecordsParam");
	public static CONVERTED: Param<string> = new Param<string>("converted", "com.zoho.crm.api.Record.GetRecordsParam");
	public static CVID: Param<string> = new Param<string>("cvid", "com.zoho.crm.api.Record.GetRecordsParam");
	public static IDS: Param<string> = new Param<string>("ids", "com.zoho.crm.api.Record.GetRecordsParam");
	public static UID: Param<string> = new Param<string>("uid", "com.zoho.crm.api.Record.GetRecordsParam");
	public static FIELDS: Param<string> = new Param<string>("fields", "com.zoho.crm.api.Record.GetRecordsParam");
	public static SORT_BY: Param<string> = new Param<string>("sort_by", "com.zoho.crm.api.Record.GetRecordsParam");
	public static SORT_ORDER: Param<string> = new Param<string>("sort_order", "com.zoho.crm.api.Record.GetRecordsParam");
	public static PAGE: Param<number> = new Param<number>("page", "com.zoho.crm.api.Record.GetRecordsParam");
	public static PER_PAGE: Param<number> = new Param<number>("per_page", "com.zoho.crm.api.Record.GetRecordsParam");
	public static STARTDATETIME: Param<Date> = new Param<Date>("startDateTime", "com.zoho.crm.api.Record.GetRecordsParam");
	public static ENDDATETIME: Param<Date> = new Param<Date>("endDateTime", "com.zoho.crm.api.Record.GetRecordsParam");
	public static TERRITORY_ID: Param<string> = new Param<string>("territory_id", "com.zoho.crm.api.Record.GetRecordsParam");
	public static INCLUDE_CHILD: Param<string> = new Param<string>("include_child", "com.zoho.crm.api.Record.GetRecordsParam");
	public static PAGE_TOKEN: Param<string> = new Param<string>("page_token", "com.zoho.crm.api.Record.GetRecordsParam");
}

class GetRecordsHeader{

	public static IF_MODIFIED_SINCE: Header<Date> = new Header<Date>("If-Modified-Since", "com.zoho.crm.api.Record.GetRecordsHeader");
	public static X_EXTERNAL: Header<string> = new Header<string>("X-EXTERNAL", "com.zoho.crm.api.Record.GetRecordsHeader");
}

class CreateRecordsHeader{

	public static X_EXTERNAL: Header<string> = new Header<string>("X-EXTERNAL", "com.zoho.crm.api.Record.CreateRecordsHeader");
}

class UpdateRecordsHeader{

	public static X_EXTERNAL: Header<string> = new Header<string>("X-EXTERNAL", "com.zoho.crm.api.Record.UpdateRecordsHeader");
}

class DeleteRecordsParam{

	public static IDS: Param<string> = new Param<string>("ids", "com.zoho.crm.api.Record.DeleteRecordsParam");
	public static WF_TRIGGER: Param<boolean> = new Param<boolean>("wf_trigger", "com.zoho.crm.api.Record.DeleteRecordsParam");
}

class DeleteRecordsHeader{

	public static X_EXTERNAL: Header<string> = new Header<string>("X-EXTERNAL", "com.zoho.crm.api.Record.DeleteRecordsHeader");
}

class UpsertRecordsHeader{

	public static X_EXTERNAL: Header<string> = new Header<string>("X-EXTERNAL", "com.zoho.crm.api.Record.UpsertRecordsHeader");
}

class GetDeletedRecordsParam{

	public static TYPE: Param<string> = new Param<string>("type", "com.zoho.crm.api.Record.GetDeletedRecordsParam");
	public static PAGE: Param<number> = new Param<number>("page", "com.zoho.crm.api.Record.GetDeletedRecordsParam");
	public static PER_PAGE: Param<number> = new Param<number>("per_page", "com.zoho.crm.api.Record.GetDeletedRecordsParam");
}

class GetDeletedRecordsHeader{

	public static IF_MODIFIED_SINCE: Header<Date> = new Header<Date>("If-Modified-Since", "com.zoho.crm.api.Record.GetDeletedRecordsHeader");
}

class SearchRecordsParam{

	public static CRITERIA: Param<string> = new Param<string>("criteria", "com.zoho.crm.api.Record.SearchRecordsParam");
	public static EMAIL: Param<string> = new Param<string>("email", "com.zoho.crm.api.Record.SearchRecordsParam");
	public static PHONE: Param<string> = new Param<string>("phone", "com.zoho.crm.api.Record.SearchRecordsParam");
	public static WORD: Param<string> = new Param<string>("word", "com.zoho.crm.api.Record.SearchRecordsParam");
	public static CONVERTED: Param<string> = new Param<string>("converted", "com.zoho.crm.api.Record.SearchRecordsParam");
	public static APPROVED: Param<string> = new Param<string>("approved", "com.zoho.crm.api.Record.SearchRecordsParam");
	public static PAGE: Param<number> = new Param<number>("page", "com.zoho.crm.api.Record.SearchRecordsParam");
	public static PER_PAGE: Param<number> = new Param<number>("per_page", "com.zoho.crm.api.Record.SearchRecordsParam");
	public static FIELDS: Param<string> = new Param<string>("fields", "com.zoho.crm.api.Record.SearchRecordsParam");
	public static CVID: Param<string> = new Param<string>("cvid", "com.zoho.crm.api.Record.SearchRecordsParam");
	public static TYPE: Param<string> = new Param<string>("type", "com.zoho.crm.api.Record.SearchRecordsParam");
}

class SearchRecordsHeader{

	public static X_EXTERNAL: Header<string> = new Header<string>("X-EXTERNAL", "com.zoho.crm.api.Record.SearchRecordsHeader");
}

class UploadPhotoParam{

	public static RESTRICT_TRIGGERS: Param<string> = new Param<string>("restrict_triggers", "com.zoho.crm.api.Record.UploadPhotoParam");
}

class GetMassUpdateStatusParam{

	public static JOB_ID: Param<string> = new Param<string>("job_id", "com.zoho.crm.api.Record.GetMassUpdateStatusParam");
}

class RecordCountParam{

	public static CVID: Param<string> = new Param<string>("cvid", "com.zoho.crm.api.Record.RecordCountParam");
	public static CRITERIA: Param<string> = new Param<string>("criteria", "com.zoho.crm.api.Record.RecordCountParam");
	public static EMAIL: Param<string> = new Param<string>("email", "com.zoho.crm.api.Record.RecordCountParam");
	public static PHONE: Param<string> = new Param<string>("phone", "com.zoho.crm.api.Record.RecordCountParam");
	public static WORD: Param<string> = new Param<string>("word", "com.zoho.crm.api.Record.RecordCountParam");
}

class GetRecordUsingExternalIDParam{

	public static APPROVED: Param<string> = new Param<string>("approved", "com.zoho.crm.api.Record.GetRecordUsingExternalIDParam");
	public static CONVERTED: Param<string> = new Param<string>("converted", "com.zoho.crm.api.Record.GetRecordUsingExternalIDParam");
	public static CVID: Param<string> = new Param<string>("cvid", "com.zoho.crm.api.Record.GetRecordUsingExternalIDParam");
	public static UID: Param<string> = new Param<string>("uid", "com.zoho.crm.api.Record.GetRecordUsingExternalIDParam");
	public static FIELDS: Param<string> = new Param<string>("fields", "com.zoho.crm.api.Record.GetRecordUsingExternalIDParam");
	public static STARTDATETIME: Param<Date> = new Param<Date>("startDateTime", "com.zoho.crm.api.Record.GetRecordUsingExternalIDParam");
	public static ENDDATETIME: Param<Date> = new Param<Date>("endDateTime", "com.zoho.crm.api.Record.GetRecordUsingExternalIDParam");
	public static TERRITORY_ID: Param<string> = new Param<string>("territory_id", "com.zoho.crm.api.Record.GetRecordUsingExternalIDParam");
	public static INCLUDE_CHILD: Param<string> = new Param<string>("include_child", "com.zoho.crm.api.Record.GetRecordUsingExternalIDParam");
}

class GetRecordUsingExternalIDHeader{

	public static IF_MODIFIED_SINCE: Header<Date> = new Header<Date>("If-Modified-Since", "com.zoho.crm.api.Record.GetRecordUsingExternalIDHeader");
	public static X_EXTERNAL: Header<string> = new Header<string>("X-EXTERNAL", "com.zoho.crm.api.Record.GetRecordUsingExternalIDHeader");
}

class UpdateRecordUsingExternalIDHeader{

	public static X_EXTERNAL: Header<string> = new Header<string>("X-EXTERNAL", "com.zoho.crm.api.Record.UpdateRecordUsingExternalIDHeader");
}

class DeleteRecordUsingExternalIDParam{

	public static WF_TRIGGER: Param<boolean> = new Param<boolean>("wf_trigger", "com.zoho.crm.api.Record.DeleteRecordUsingExternalIDParam");
}

class DeleteRecordUsingExternalIDHeader{

	public static X_EXTERNAL: Header<string> = new Header<string>("X-EXTERNAL", "com.zoho.crm.api.Record.DeleteRecordUsingExternalIDHeader");
}

class GetFullDataForRichTextParam{

	public static FIELDS: Param<string> = new Param<string>("fields", "com.zoho.crm.api.Record.GetFullDataForRichTextParam");
}

class GetRichTextRecordsParam{

	public static IDS: Param<string> = new Param<string>("ids", "com.zoho.crm.api.Record.GetRichTextRecordsParam");
	public static FIELDS: Param<string> = new Param<string>("fields", "com.zoho.crm.api.Record.GetRichTextRecordsParam");
}

export {
	DeleteRecordUsingExternalIDParam as DeleteRecordUsingExternalIDParam,
	GetRecordsHeader as GetRecordsHeader,
	GetRecordUsingExternalIDParam as GetRecordUsingExternalIDParam,
	UpdateRecordUsingExternalIDHeader as UpdateRecordUsingExternalIDHeader,
	GetMassUpdateStatusParam as GetMassUpdateStatusParam,
	UpdateRecordHeader as UpdateRecordHeader,
	UploadPhotoParam as UploadPhotoParam,
	SearchRecordsParam as SearchRecordsParam,
	SearchRecordsHeader as SearchRecordsHeader,
	DeleteRecordsParam as DeleteRecordsParam,
	DeleteRecordsHeader as DeleteRecordsHeader,
	RecordOperations as MasterModel,
	RecordOperations as RecordOperations,
	RecordCountParam as RecordCountParam,
	GetDeletedRecordsHeader as GetDeletedRecordsHeader,
	DeleteRecordUsingExternalIDHeader as DeleteRecordUsingExternalIDHeader,
	GetRecordUsingExternalIDHeader as GetRecordUsingExternalIDHeader,
	GetRecordParam as GetRecordParam,
	CreateRecordsHeader as CreateRecordsHeader,
	UpsertRecordsHeader as UpsertRecordsHeader,
	GetFullDataForRichTextParam as GetFullDataForRichTextParam,
	GetRecordHeader as GetRecordHeader,
	GetDeletedRecordsParam as GetDeletedRecordsParam,
	GetRecordsParam as GetRecordsParam,
	DeleteRecordParam as DeleteRecordParam,
	UpdateRecordsHeader as UpdateRecordsHeader,
	DeleteRecordHeader as DeleteRecordHeader,
	GetRichTextRecordsParam as GetRichTextRecordsParam
}
