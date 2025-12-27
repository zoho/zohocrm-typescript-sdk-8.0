import {ResponseHandler} from "./response_handler";
import {Param} from "../../../../../../routes/param";
import {SDKException} from "../exception/sdk_exception";
import {APIResponse} from "../../../../../../routes/controllers/api_response";
import {CommonAPIHandler} from "../../../../../../routes/middlewares/common_api_handler";
import { Constants } from "../../../../../../utils/util/constants";

class FieldAttachmentsOperations{

	private fieldsAttachmentId?: bigint;
	private recordId: bigint;
	private moduleAPIName: string;
	/**
	 * Creates an instance of FieldAttachmentsOperations with the given parameters
	 * @param moduleAPIName A String representing the moduleAPIName
	 * @param recordId A BigInt representing the recordId
	 * @param fieldsAttachmentId A BigInt representing the fieldsAttachmentId
	 */
	constructor(moduleAPIName: string, recordId: bigint, fieldsAttachmentId?: bigint){
		this.moduleAPIName = moduleAPIName;
		this.recordId = recordId;
		this.fieldsAttachmentId = fieldsAttachmentId;

	}

	/**
	 * The method to get field attachments
	 * @returns An instance of APIResponse<ResponseHandler>
	 * @throws SDKException
	 */
	public async getFieldAttachments(): Promise<APIResponse<ResponseHandler>>	{
		let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
		let apiPath: string = '';
		apiPath = apiPath.concat("/crm/v8/");
		apiPath = apiPath.concat(this.moduleAPIName.toString());
		apiPath = apiPath.concat("/");
		apiPath = apiPath.concat(this.recordId.toString());
		apiPath = apiPath.concat("/actions/download_fields_attachment");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
		await handlerInstance.addParam(new Param<bigint>("fields_attachment_id", "com.zoho.crm.api.FieldAttachments.GetFieldAttachmentsParam"), this.fieldsAttachmentId).catch(err => { throw err; });
		let ResponseHandler = require.resolve("./response_handler");
		return handlerInstance.apiCall<ResponseHandler>(ResponseHandler, "application/x-download");

	}

}
class GetFieldAttachmentsParam{

}

export {
	FieldAttachmentsOperations as MasterModel,
	FieldAttachmentsOperations as FieldAttachmentsOperations,
	GetFieldAttachmentsParam as GetFieldAttachmentsParam
}
