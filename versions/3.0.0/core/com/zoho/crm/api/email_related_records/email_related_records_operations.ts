import {Criteria} from "./criteria";
import {ResponseHandler} from "./response_handler";
import {Param} from "../../../../../../routes/param";
import {ParameterMap} from "../../../../../../routes/parameter_map";
import {SDKException} from "../exception/sdk_exception";
import {APIResponse} from "../../../../../../routes/controllers/api_response";
import {CommonAPIHandler} from "../../../../../../routes/middlewares/common_api_handler";
import { Constants } from "../../../../../../utils/util/constants";

class EmailRelatedRecordsOperations{

	private moduleName: string;
	private recordId: bigint;
	private type?: string;
	private ownerId?: bigint;
	/**
	 * Creates an instance of EmailRelatedRecordsOperations with the given parameters
	 * @param recordId A BigInt representing the recordId
	 * @param moduleName A String representing the moduleName
	 * @param type A String representing the type
	 * @param ownerId A BigInt representing the ownerId
	 */
	constructor(recordId: bigint, moduleName: string, type?: string, ownerId?: bigint){
		this.recordId = recordId;
		this.moduleName = moduleName;
		this.type = type;
		this.ownerId = ownerId;

	}

	/**
	 * The method to get emails related records
	 * @param paramInstance An instance of ParameterMap
	 * @returns An instance of APIResponse<ResponseHandler>
	 * @throws SDKException
	 */
	public async getEmailsRelatedRecords(paramInstance?: ParameterMap): Promise<APIResponse<ResponseHandler>>	{
		let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
		let apiPath: string = '';
		apiPath = apiPath.concat("/crm/v8/");
		apiPath = apiPath.concat(this.moduleName.toString());
		apiPath = apiPath.concat("/");
		apiPath = apiPath.concat(this.recordId.toString());
		apiPath = apiPath.concat("/Emails");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
		await handlerInstance.addParam(new Param<string>("type", "com.zoho.crm.api.EmailRelatedRecords.GetEmailsRelatedRecordsParam"), this.type).catch(err => { throw err; });
		await handlerInstance.addParam(new Param<bigint>("owner_id", "com.zoho.crm.api.EmailRelatedRecords.GetEmailsRelatedRecordsParam"), this.ownerId).catch(err => { throw err; });
		handlerInstance.setParam(paramInstance);
		let ResponseHandler = require.resolve("./response_handler");
		return handlerInstance.apiCall<ResponseHandler>(ResponseHandler, "application/json");

	}

	/**
	 * The method to get emails related record
	 * @param messageId A String representing the messageId
	 * @returns An instance of APIResponse<ResponseHandler>
	 * @throws SDKException
	 */
	public async getEmailsRelatedRecord(messageId: string): Promise<APIResponse<ResponseHandler>>	{
		let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
		let apiPath: string = '';
		apiPath = apiPath.concat("/crm/v8/");
		apiPath = apiPath.concat(this.moduleName.toString());
		apiPath = apiPath.concat("/");
		apiPath = apiPath.concat(this.recordId.toString());
		apiPath = apiPath.concat("/Emails/");
		apiPath = apiPath.concat(messageId.toString());
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
		await handlerInstance.addParam(new Param<string>("type", "com.zoho.crm.api.EmailRelatedRecords.GetEmailsRelatedRecordParam"), this.type).catch(err => { throw err; });
		await handlerInstance.addParam(new Param<bigint>("owner_id", "com.zoho.crm.api.EmailRelatedRecords.GetEmailsRelatedRecordParam"), this.ownerId).catch(err => { throw err; });
		let ResponseHandler = require.resolve("./response_handler");
		return handlerInstance.apiCall<ResponseHandler>(ResponseHandler, "application/json");

	}

}
class GetEmailsRelatedRecordsParam{

	public static FILTER: Param<Criteria> = new Param<Criteria>("filter", "com.zoho.crm.api.EmailRelatedRecords.GetEmailsRelatedRecordsParam");
	public static INDEX: Param<string> = new Param<string>("index", "com.zoho.crm.api.EmailRelatedRecords.GetEmailsRelatedRecordsParam");
}

class GetEmailsRelatedRecordParam{

}

export {
	GetEmailsRelatedRecordsParam as GetEmailsRelatedRecordsParam,
	GetEmailsRelatedRecordParam as GetEmailsRelatedRecordParam,
	EmailRelatedRecordsOperations as MasterModel,
	EmailRelatedRecordsOperations as EmailRelatedRecordsOperations
}
