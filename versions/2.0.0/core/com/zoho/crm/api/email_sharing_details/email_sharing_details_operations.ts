import {ResponseHandler} from "./response_handler";
import {SDKException} from "../exception/sdk_exception";
import {APIResponse} from "../../../../../../routes/controllers/api_response";
import {CommonAPIHandler} from "../../../../../../routes/middlewares/common_api_handler";
import { Constants } from "../../../../../../utils/util/constants";

class EmailSharingDetailsOperations{

	private module: string;
	private recordId: bigint;
	/**
	 * Creates an instance of EmailSharingDetailsOperations with the given parameters
	 * @param recordId A BigInt representing the recordId
	 * @param module A String representing the module
	 */
	constructor(recordId: bigint, module: string){
		this.recordId = recordId;
		this.module = module;

	}

	/**
	 * The method to get email sharing details
	 * @returns An instance of APIResponse<ResponseHandler>
	 * @throws SDKException
	 */
	public async getEmailSharingDetails(): Promise<APIResponse<ResponseHandler>>	{
		let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
		let apiPath: string = '';
		apiPath = apiPath.concat("/crm/v8/");
		apiPath = apiPath.concat(this.module.toString());
		apiPath = apiPath.concat("/");
		apiPath = apiPath.concat(this.recordId.toString());
		apiPath = apiPath.concat("/__emails_sharing_details");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
		let ResponseHandler = require.resolve("./response_handler");
		return handlerInstance.apiCall<ResponseHandler>(ResponseHandler, "application/json");

	}

}
export {
	EmailSharingDetailsOperations as MasterModel,
	EmailSharingDetailsOperations as EmailSharingDetailsOperations
}
