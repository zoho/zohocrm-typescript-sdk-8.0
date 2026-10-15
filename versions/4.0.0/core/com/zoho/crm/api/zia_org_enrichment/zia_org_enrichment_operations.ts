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

class ZiaOrgEnrichmentOperations{
	/**
	 * The method to get zia org enrichments
	 * @param paramInstance An instance of ParameterMap
	 * @returns An instance of APIResponse<ResponseHandler>
	 * @throws SDKException
	 */
	public async getZiaOrgEnrichments(paramInstance?: ParameterMap): Promise<APIResponse<ResponseHandler>>	{
		let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
		let apiPath: string = '';
		apiPath = apiPath.concat("/crm/v8/__zia_org_enrichment");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
		handlerInstance.setParam(paramInstance);
		let ResponseHandler = require.resolve("./response_handler");
		return handlerInstance.apiCall<ResponseHandler>(ResponseHandler, "application/json");

	}

	/**
	 * The method to create zia org enrichment
	 * @param request An instance of BodyWrapper
	 * @param paramInstance An instance of ParameterMap
	 * @returns An instance of APIResponse<ActionHandler>
	 * @throws SDKException
	 */
	public async createZiaOrgEnrichment(request: BodyWrapper, paramInstance?: ParameterMap): Promise<APIResponse<ActionHandler>>	{
		let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
		let apiPath: string = '';
		apiPath = apiPath.concat("/crm/v8/__zia_org_enrichment");
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
	 * The method to get zia org enrichment
	 * @param ziaOrgEnrichmentId A BigInt representing the ziaOrgEnrichmentId
	 * @returns An instance of APIResponse<ResponseHandler>
	 * @throws SDKException
	 */
	public async getZiaOrgEnrichment(ziaOrgEnrichmentId: bigint): Promise<APIResponse<ResponseHandler>>	{
		let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
		let apiPath: string = '';
		apiPath = apiPath.concat("/crm/v8/__zia_org_enrichment/");
		apiPath = apiPath.concat(ziaOrgEnrichmentId.toString());
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
		let ResponseHandler = require.resolve("./response_handler");
		return handlerInstance.apiCall<ResponseHandler>(ResponseHandler, "application/json");

	}

}
class GetZiaOrgEnrichmentsParam{

	public static STATUS: Param<Choice<string>> = new Param<Choice<string>>("status", "com.zoho.crm.api.ZiaOrgEnrichment.GetZiaOrgEnrichmentsParam");
	public static SORT_ORDER: Param<string> = new Param<string>("sort_order", "com.zoho.crm.api.ZiaOrgEnrichment.GetZiaOrgEnrichmentsParam");
	public static SORT_BY: Param<string> = new Param<string>("sort_by", "com.zoho.crm.api.ZiaOrgEnrichment.GetZiaOrgEnrichmentsParam");
	public static PAGE: Param<number> = new Param<number>("page", "com.zoho.crm.api.ZiaOrgEnrichment.GetZiaOrgEnrichmentsParam");
	public static PER_PAGE: Param<number> = new Param<number>("per_page", "com.zoho.crm.api.ZiaOrgEnrichment.GetZiaOrgEnrichmentsParam");
}

class CreateZiaOrgEnrichmentParam{

	public static MODULE: Param<string> = new Param<string>("module", "com.zoho.crm.api.ZiaOrgEnrichment.CreateZiaOrgEnrichmentParam");
	public static RECORD_ID: Param<bigint> = new Param<bigint>("record_id", "com.zoho.crm.api.ZiaOrgEnrichment.CreateZiaOrgEnrichmentParam");
}

export {
	GetZiaOrgEnrichmentsParam as GetZiaOrgEnrichmentsParam,
	CreateZiaOrgEnrichmentParam as CreateZiaOrgEnrichmentParam,
	ZiaOrgEnrichmentOperations as MasterModel,
	ZiaOrgEnrichmentOperations as ZiaOrgEnrichmentOperations
}
