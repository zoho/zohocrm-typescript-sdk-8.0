import {ActionHandler} from "./action_handler";
import {FileBodyWrapper} from "./file_body_wrapper";
import {ResponseHandler} from "./response_handler";
import {Param} from "../../../../../../routes/param";
import {ParameterMap} from "../../../../../../routes/parameter_map";
import {SDKException} from "../exception/sdk_exception";
import {APIResponse} from "../../../../../../routes/controllers/api_response";
import {CommonAPIHandler} from "../../../../../../routes/middlewares/common_api_handler";
import { Constants } from "../../../../../../utils/util/constants";

class AttachmentsOperations{
	/**
	 * The method to upload attachments
	 * @param recordId A BigInt representing the recordId
	 * @param module A String representing the module
	 * @param request An instance of FileBodyWrapper
	 * @returns An instance of APIResponse<ActionHandler>
	 * @throws SDKException
	 */
	public async uploadAttachments(recordId: bigint, module: string, request: FileBodyWrapper): Promise<APIResponse<ActionHandler>>	{
		let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
		let apiPath: string = '';
		apiPath = apiPath.concat("/crm/v8/");
		apiPath = apiPath.concat(module.toString());
		apiPath = apiPath.concat("/");
		apiPath = apiPath.concat(recordId.toString());
		apiPath = apiPath.concat("/Attachments");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_POST);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_CREATE);
		handlerInstance.setContentType("multipart/form-data");
		handlerInstance.setRequest(request);
		handlerInstance.setMandatoryChecker(true);
		let ActionHandler = require.resolve("./action_handler");
		return handlerInstance.apiCall<ActionHandler>(ActionHandler, "application/json");

	}

	/**
	 * The method to get attachments
	 * @param recordId A BigInt representing the recordId
	 * @param module A String representing the module
	 * @param paramInstance An instance of ParameterMap
	 * @returns An instance of APIResponse<ResponseHandler>
	 * @throws SDKException
	 */
	public async getAttachments(recordId: bigint, module: string, paramInstance?: ParameterMap): Promise<APIResponse<ResponseHandler>>	{
		let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
		let apiPath: string = '';
		apiPath = apiPath.concat("/crm/v8/");
		apiPath = apiPath.concat(module.toString());
		apiPath = apiPath.concat("/");
		apiPath = apiPath.concat(recordId.toString());
		apiPath = apiPath.concat("/Attachments");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
		handlerInstance.setParam(paramInstance);
		let ResponseHandler = require.resolve("./response_handler");
		return handlerInstance.apiCall<ResponseHandler>(ResponseHandler, "application/json");

	}

	/**
	 * The method to upload url attachments
	 * @param recordId A BigInt representing the recordId
	 * @param module A String representing the module
	 * @param paramInstance An instance of ParameterMap
	 * @returns An instance of APIResponse<ActionHandler>
	 * @throws SDKException
	 */
	public async uploadUrlAttachments(recordId: bigint, module: string, paramInstance?: ParameterMap): Promise<APIResponse<ActionHandler>>	{
		let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
		let apiPath: string = '';
		apiPath = apiPath.concat("/crm/v8/");
		apiPath = apiPath.concat(module.toString());
		apiPath = apiPath.concat("/");
		apiPath = apiPath.concat(recordId.toString());
		apiPath = apiPath.concat("/Attachments");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_POST);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_ACTION);
		handlerInstance.setParam(paramInstance);
		let ActionHandler = require.resolve("./action_handler");
		return handlerInstance.apiCall<ActionHandler>(ActionHandler, "application/json");

	}

	/**
	 * The method to delete attachments
	 * @param recordId A BigInt representing the recordId
	 * @param module A String representing the module
	 * @param paramInstance An instance of ParameterMap
	 * @returns An instance of APIResponse<ActionHandler>
	 * @throws SDKException
	 */
	public async deleteAttachments(recordId: bigint, module: string, paramInstance?: ParameterMap): Promise<APIResponse<ActionHandler>>	{
		let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
		let apiPath: string = '';
		apiPath = apiPath.concat("/crm/v8/");
		apiPath = apiPath.concat(module.toString());
		apiPath = apiPath.concat("/");
		apiPath = apiPath.concat(recordId.toString());
		apiPath = apiPath.concat("/Attachments");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_DELETE);
		handlerInstance.setCategoryMethod(Constants.REQUEST_METHOD_DELETE);
		handlerInstance.setParam(paramInstance);
		let ActionHandler = require.resolve("./action_handler");
		return handlerInstance.apiCall<ActionHandler>(ActionHandler, "application/json");

	}

	/**
	 * The method to get attachment
	 * @param id A BigInt representing the id
	 * @param recordId A BigInt representing the recordId
	 * @param module A String representing the module
	 * @returns An instance of APIResponse<ResponseHandler>
	 * @throws SDKException
	 */
	public async getAttachment(id: bigint, recordId: bigint, module: string): Promise<APIResponse<ResponseHandler>>	{
		let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
		let apiPath: string = '';
		apiPath = apiPath.concat("/crm/v8/");
		apiPath = apiPath.concat(module.toString());
		apiPath = apiPath.concat("/");
		apiPath = apiPath.concat(recordId.toString());
		apiPath = apiPath.concat("/Attachments/");
		apiPath = apiPath.concat(id.toString());
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
		let ResponseHandler = require.resolve("./response_handler");
		return handlerInstance.apiCall<ResponseHandler>(ResponseHandler, "image/png");

	}

	/**
	 * The method to delete attachment
	 * @param id A BigInt representing the id
	 * @param recordId A BigInt representing the recordId
	 * @param module A String representing the module
	 * @returns An instance of APIResponse<ActionHandler>
	 * @throws SDKException
	 */
	public async deleteAttachment(id: bigint, recordId: bigint, module: string): Promise<APIResponse<ActionHandler>>	{
		let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
		let apiPath: string = '';
		apiPath = apiPath.concat("/crm/v8/");
		apiPath = apiPath.concat(module.toString());
		apiPath = apiPath.concat("/");
		apiPath = apiPath.concat(recordId.toString());
		apiPath = apiPath.concat("/Attachments/");
		apiPath = apiPath.concat(id.toString());
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_DELETE);
		handlerInstance.setCategoryMethod(Constants.REQUEST_METHOD_DELETE);
		let ActionHandler = require.resolve("./action_handler");
		return handlerInstance.apiCall<ActionHandler>(ActionHandler, "application/json");

	}

}
class GetAttachmentsParam{

	public static FIELDS: Param<string> = new Param<string>("fields", "com.zoho.crm.api.Attachments.GetAttachmentsParam");
	public static IDS: Param<string> = new Param<string>("ids", "com.zoho.crm.api.Attachments.GetAttachmentsParam");
	public static PAGE: Param<number> = new Param<number>("page", "com.zoho.crm.api.Attachments.GetAttachmentsParam");
	public static PER_PAGE: Param<number> = new Param<number>("per_page", "com.zoho.crm.api.Attachments.GetAttachmentsParam");
	public static PAGE_TOKEN: Param<string> = new Param<string>("page_token", "com.zoho.crm.api.Attachments.GetAttachmentsParam");
}

class UploadUrlAttachmentsParam{

	public static ATTACHMENTURL: Param<string> = new Param<string>("attachmentUrl", "com.zoho.crm.api.Attachments.UploadUrlAttachmentsParam");
	public static TITLE: Param<string> = new Param<string>("title", "com.zoho.crm.api.Attachments.UploadUrlAttachmentsParam");
}

class DeleteAttachmentsParam{

	public static IDS: Param<string> = new Param<string>("ids", "com.zoho.crm.api.Attachments.DeleteAttachmentsParam");
}

export {
	AttachmentsOperations as MasterModel,
	AttachmentsOperations as AttachmentsOperations,
	DeleteAttachmentsParam as DeleteAttachmentsParam,
	GetAttachmentsParam as GetAttachmentsParam,
	UploadUrlAttachmentsParam as UploadUrlAttachmentsParam
}
