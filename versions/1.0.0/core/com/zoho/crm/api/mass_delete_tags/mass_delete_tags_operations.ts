import {ActionResponse} from "./action_response";
import {BodyWrapper} from "./body_wrapper";
import {StatusResponseHandler} from "./status_response_handler";
import {Param} from "../../../../../../routes/param";
import {ParameterMap} from "../../../../../../routes/parameter_map";
import {SDKException} from "../exception/sdk_exception";
import {APIResponse} from "../../../../../../routes/controllers/api_response";
import {CommonAPIHandler} from "../../../../../../routes/middlewares/common_api_handler";
import { Constants } from "../../../../../../utils/util/constants";

class MassDeleteTagsOperations{
	/**
	 * The method to mass delete tags
	 * @param request An instance of BodyWrapper
	 * @returns An instance of APIResponse<ActionResponse>
	 * @throws SDKException
	 */
	public async massDeleteTags(request: BodyWrapper): Promise<APIResponse<ActionResponse>>	{
		let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
		let apiPath: string = '';
		apiPath = apiPath.concat("/crm/v8/settings/tags/actions/mass_delete");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_POST);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_ACTION);
		handlerInstance.setContentType("application/json");
		handlerInstance.setRequest(request);
		let ActionResponse = require.resolve("./action_response");
		return handlerInstance.apiCall<ActionResponse>(ActionResponse, "application/json");

	}

	/**
	 * The method to get status
	 * @param paramInstance An instance of ParameterMap
	 * @returns An instance of APIResponse<StatusResponseHandler>
	 * @throws SDKException
	 */
	public async getStatus(paramInstance?: ParameterMap): Promise<APIResponse<StatusResponseHandler>>	{
		let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
		let apiPath: string = '';
		apiPath = apiPath.concat("/crm/v8/settings/tags/actions/mass_delete");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
		handlerInstance.setParam(paramInstance);
		let StatusResponseHandler = require.resolve("./status_response_handler");
		return handlerInstance.apiCall<StatusResponseHandler>(StatusResponseHandler, "application/json");

	}

}
class GetStatusParam{

	public static JOB_ID: Param<string> = new Param<string>("job_id", "com.zoho.crm.api.MassDeleteTags.GetStatusParam");
}

export {
	GetStatusParam as GetStatusParam,
	MassDeleteTagsOperations as MasterModel,
	MassDeleteTagsOperations as MassDeleteTagsOperations
}
