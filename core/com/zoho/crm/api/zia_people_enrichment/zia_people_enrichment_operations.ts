import {Param} from "../../../../../../routes/param";
import {ParameterMap} from "../../../../../../routes/parameter_map";
import {ActionHandler} from "./action_handler";
import {BodyWrapper} from "./body_wrapper";
import {ResponseHandler} from "./response_handler";
import {SDKException} from "../exception/sdk_exception";
import {APIResponse} from "../../../../../../routes/controllers/api_response";
import {Choice} from "../../../../../../utils/util/choice";
import {CommonAPIHandler} from "../../../../../../routes/middlewares/common_api_handler";
import { Constants } from "../../../../../../utils/util/constants";

class ZiaPeopleEnrichmentOperations{
	/**
	 * The method to get zia people enrichments
	 * @param paramInstance An instance of ParameterMap
	 * @returns An instance of APIResponse<ResponseHandler>
	 * @throws SDKException
	 */
	public async getZiaPeopleEnrichments(paramInstance?: ParameterMap): Promise<APIResponse<ResponseHandler>>	{
		let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
		let apiPath: string = '';
		apiPath = apiPath.concat("/crm/v8/__zia_people_enrichment");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
		handlerInstance.setParam(paramInstance);
		let ResponseHandler = require.resolve("./response_handler");
		return handlerInstance.apiCall<ResponseHandler>(ResponseHandler, "application/json");

	}

	/**
	 * The method to create zia people enrichment
	 * @param request An instance of BodyWrapper
	 * @param paramInstance An instance of ParameterMap
	 * @returns An instance of APIResponse<ActionHandler>
	 * @throws SDKException
	 */
	public async createZiaPeopleEnrichment(request: BodyWrapper, paramInstance?: ParameterMap): Promise<APIResponse<ActionHandler>>	{
		let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
		let apiPath: string = '';
		apiPath = apiPath.concat("/crm/v8/__zia_people_enrichment");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_POST);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_CREATE);
		handlerInstance.setContentType("application/json");
		handlerInstance.setRequest(request);
		handlerInstance.setMandatoryChecker(true);
		handlerInstance.setParam(paramInstance);
		let ActionHandler = require.resolve("./action_handler");
		return handlerInstance.apiCall<ActionHandler>(ActionHandler, "application/json");

	}

	/**
	 * The method to get zia people enrichment
	 * @param ziaPeopleEnrichmentId A BigInt representing the ziaPeopleEnrichmentId
	 * @returns An instance of APIResponse<ResponseHandler>
	 * @throws SDKException
	 */
	public async getZiaPeopleEnrichment(ziaPeopleEnrichmentId: bigint): Promise<APIResponse<ResponseHandler>>	{
		let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
		let apiPath: string = '';
		apiPath = apiPath.concat("/crm/v8/__zia_people_enrichment/");
		apiPath = apiPath.concat(ziaPeopleEnrichmentId.toString());
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
		let ResponseHandler = require.resolve("./response_handler");
		return handlerInstance.apiCall<ResponseHandler>(ResponseHandler, "application/json");

	}

}
class GetZiaPeopleEnrichmentsParam{

	public static STATUS: Param<Choice<string>> = new Param<Choice<string>>("status", "com.zoho.crm.api.ZiaPeopleEnrichment.GetZiaPeopleEnrichmentsParam");
	public static SORT_ORDER: Param<string> = new Param<string>("sort_order", "com.zoho.crm.api.ZiaPeopleEnrichment.GetZiaPeopleEnrichmentsParam");
	public static SORT_BY: Param<string> = new Param<string>("sort_by", "com.zoho.crm.api.ZiaPeopleEnrichment.GetZiaPeopleEnrichmentsParam");
	public static PAGE: Param<number> = new Param<number>("page", "com.zoho.crm.api.ZiaPeopleEnrichment.GetZiaPeopleEnrichmentsParam");
	public static PER_PAGE: Param<number> = new Param<number>("per_page", "com.zoho.crm.api.ZiaPeopleEnrichment.GetZiaPeopleEnrichmentsParam");
	public static COUNT: Param<number> = new Param<number>("count", "com.zoho.crm.api.ZiaPeopleEnrichment.GetZiaPeopleEnrichmentsParam");
}

class CreateZiaPeopleEnrichmentParam{

	public static MODULE: Param<string> = new Param<string>("module", "com.zoho.crm.api.ZiaPeopleEnrichment.CreateZiaPeopleEnrichmentParam");
	public static RECORD_ID: Param<bigint> = new Param<bigint>("record_id", "com.zoho.crm.api.ZiaPeopleEnrichment.CreateZiaPeopleEnrichmentParam");
}

export {
	ZiaPeopleEnrichmentOperations as MasterModel,
	ZiaPeopleEnrichmentOperations as ZiaPeopleEnrichmentOperations,
	CreateZiaPeopleEnrichmentParam as CreateZiaPeopleEnrichmentParam,
	GetZiaPeopleEnrichmentsParam as GetZiaPeopleEnrichmentsParam
}
