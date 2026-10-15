import {Param} from "../../../../../../routes/param";
import {ParameterMap} from "../../../../../../routes/parameter_map";
import {ResponseHandler} from "./response_handler";
import {SDKException} from "../exception/sdk_exception";
import {APIResponse} from "../../../../../../routes/controllers/api_response";
import {Choice} from "../../../../../../utils/util/choice";
import {CommonAPIHandler} from "../../../../../../routes/middlewares/common_api_handler";
import { Constants } from "../../../../../../utils/util/constants";

class TimelinesOperations{
	/**
	 * The method to get timelines
	 * @param module A String representing the module
	 * @param recordId A String representing the recordId
	 * @param paramInstance An instance of ParameterMap
	 * @returns An instance of APIResponse<ResponseHandler>
	 * @throws SDKException
	 */
	public async getTimelines(module: string, recordId: string, paramInstance?: ParameterMap): Promise<APIResponse<ResponseHandler>>	{
		let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
		let apiPath: string = '';
		apiPath = apiPath.concat("/crm/v8/");
		apiPath = apiPath.concat(module.toString());
		apiPath = apiPath.concat("/");
		apiPath = apiPath.concat(recordId.toString());
		apiPath = apiPath.concat("/__timeline");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
		handlerInstance.setParam(paramInstance);
		let ResponseHandler = require.resolve("./response_handler");
		return handlerInstance.apiCall<ResponseHandler>(ResponseHandler, "application/json");

	}

}
class GetTimelinesParam{

	public static INCLUDE_INNER_DETAILS: Param<Choice<string>> = new Param<Choice<string>>("include_inner_details", "com.zoho.crm.api.Timelines.GetTimelinesParam");
	public static SORT_BY: Param<string> = new Param<string>("sort_by", "com.zoho.crm.api.Timelines.GetTimelinesParam");
	public static SORT_ORDER: Param<Choice<string>> = new Param<Choice<string>>("sort_order", "com.zoho.crm.api.Timelines.GetTimelinesParam");
	public static INCLUDE_TIMELINE_TYPE: Param<string> = new Param<string>("include_timeline_type", "com.zoho.crm.api.Timelines.GetTimelinesParam");
	public static INCLUDE: Param<Choice<string>> = new Param<Choice<string>>("include", "com.zoho.crm.api.Timelines.GetTimelinesParam");
	public static FILTERS: Param<string> = new Param<string>("filters", "com.zoho.crm.api.Timelines.GetTimelinesParam");
	public static PER_PAGE: Param<string> = new Param<string>("per_page", "com.zoho.crm.api.Timelines.GetTimelinesParam");
	public static PAGE: Param<string> = new Param<string>("page", "com.zoho.crm.api.Timelines.GetTimelinesParam");
	public static PAGE_TOKEN: Param<string> = new Param<string>("page_token", "com.zoho.crm.api.Timelines.GetTimelinesParam");
}

export {
	TimelinesOperations as MasterModel,
	TimelinesOperations as TimelinesOperations,
	GetTimelinesParam as GetTimelinesParam
}
