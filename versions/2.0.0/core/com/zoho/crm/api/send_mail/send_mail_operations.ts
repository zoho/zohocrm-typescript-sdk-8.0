import {ActionHandler} from "./action_handler";
import {BodyWrapper} from "./body_wrapper";
import {SDKException} from "../exception/sdk_exception";
import {APIResponse} from "../../../../../../routes/controllers/api_response";
import {CommonAPIHandler} from "../../../../../../routes/middlewares/common_api_handler";
import { Constants } from "../../../../../../utils/util/constants";

class SendMailOperations{

	private modulename: string;
	private id: bigint;
	/**
	 * Creates an instance of SendMailOperations with the given parameters
	 * @param id A BigInt representing the id
	 * @param modulename A String representing the modulename
	 */
	constructor(id: bigint, modulename: string){
		this.id = id;
		this.modulename = modulename;

	}

	/**
	 * The method to send mail
	 * @param request An instance of BodyWrapper
	 * @returns An instance of APIResponse<ActionHandler>
	 * @throws SDKException
	 */
	public async sendMail(request: BodyWrapper): Promise<APIResponse<ActionHandler>>	{
		let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
		let apiPath: string = '';
		apiPath = apiPath.concat("/crm/v8/");
		apiPath = apiPath.concat(this.modulename.toString());
		apiPath = apiPath.concat("/");
		apiPath = apiPath.concat(this.id.toString());
		apiPath = apiPath.concat("/actions/send_mail");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_POST);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_CREATE);
		handlerInstance.setContentType("application/json");
		handlerInstance.setRequest(request);
		handlerInstance.setMandatoryChecker(true);
		let ActionHandler = require.resolve("./action_handler");
		return handlerInstance.apiCall<ActionHandler>(ActionHandler, "application/json");

	}

}
export {
	SendMailOperations as MasterModel,
	SendMailOperations as SendMailOperations
}
