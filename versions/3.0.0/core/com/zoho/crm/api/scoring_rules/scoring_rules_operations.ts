import {Param} from "../../../../../../routes/param";
import {ParameterMap} from "../../../../../../routes/parameter_map";
import {ActionHandler} from "./action_handler";
import {BodyWrapper} from "./body_wrapper";
import {LayoutRequestWrapper} from "./layout_request_wrapper";
import {ResponseHandler} from "./response_handler";
import {RoleRequestWrapper} from "./role_request_wrapper";
import {SDKException} from "../exception/sdk_exception";
import {APIResponse} from "../../../../../../routes/controllers/api_response";
import {Choice} from "../../../../../../utils/util/choice";
import {CommonAPIHandler} from "../../../../../../routes/middlewares/common_api_handler";
import { Constants } from "../../../../../../utils/util/constants";

class ScoringRulesOperations{
	/**
	 * The method to create scoring rules
	 * @param request An instance of BodyWrapper
	 * @returns An instance of APIResponse<ActionHandler>
	 * @throws SDKException
	 */
	public async createScoringRules(request: BodyWrapper): Promise<APIResponse<ActionHandler>>	{
		let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
		let apiPath: string = '';
		apiPath = apiPath.concat("/crm/v8/settings/automation/scoring_rules");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_POST);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_CREATE);
		handlerInstance.setContentType("application/json");
		handlerInstance.setRequest(request);
		handlerInstance.setMandatoryChecker(true);
		let ActionHandler = require.resolve("./action_handler");
		return handlerInstance.apiCall<ActionHandler>(ActionHandler, "application/json");

	}

	/**
	 * The method to get scoring rules
	 * @param paramInstance An instance of ParameterMap
	 * @returns An instance of APIResponse<ResponseHandler>
	 * @throws SDKException
	 */
	public async getScoringRules(paramInstance?: ParameterMap): Promise<APIResponse<ResponseHandler>>	{
		let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
		let apiPath: string = '';
		apiPath = apiPath.concat("/crm/v8/settings/automation/scoring_rules");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
		handlerInstance.setParam(paramInstance);
		let ResponseHandler = require.resolve("./response_handler");
		return handlerInstance.apiCall<ResponseHandler>(ResponseHandler, "application/json");

	}

	/**
	 * The method to update scoring rules
	 * @param request An instance of BodyWrapper
	 * @returns An instance of APIResponse<ActionHandler>
	 * @throws SDKException
	 */
	public async updateScoringRules(request: BodyWrapper): Promise<APIResponse<ActionHandler>>	{
		let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
		let apiPath: string = '';
		apiPath = apiPath.concat("/crm/v8/settings/automation/scoring_rules");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_PUT);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_UPDATE);
		handlerInstance.setContentType("application/json");
		handlerInstance.setRequest(request);
		handlerInstance.setMandatoryChecker(true);
		let ActionHandler = require.resolve("./action_handler");
		return handlerInstance.apiCall<ActionHandler>(ActionHandler, "application/json");

	}

	/**
	 * The method to delete scoring rules
	 * @param paramInstance An instance of ParameterMap
	 * @returns An instance of APIResponse<ActionHandler>
	 * @throws SDKException
	 */
	public async deleteScoringRules(paramInstance?: ParameterMap): Promise<APIResponse<ActionHandler>>	{
		let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
		let apiPath: string = '';
		apiPath = apiPath.concat("/crm/v8/settings/automation/scoring_rules");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_DELETE);
		handlerInstance.setCategoryMethod(Constants.REQUEST_METHOD_DELETE);
		handlerInstance.setParam(paramInstance);
		let ActionHandler = require.resolve("./action_handler");
		return handlerInstance.apiCall<ActionHandler>(ActionHandler, "application/json");

	}

	/**
	 * The method to update scoring rule
	 * @param id A BigInt representing the id
	 * @param request An instance of BodyWrapper
	 * @returns An instance of APIResponse<ActionHandler>
	 * @throws SDKException
	 */
	public async updateScoringRule(id: bigint, request: BodyWrapper): Promise<APIResponse<ActionHandler>>	{
		let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
		let apiPath: string = '';
		apiPath = apiPath.concat("/crm/v8/settings/automation/scoring_rules/");
		apiPath = apiPath.concat(id.toString());
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_PUT);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_UPDATE);
		handlerInstance.setContentType("application/json");
		handlerInstance.setRequest(request);
		let ActionHandler = require.resolve("./action_handler");
		return handlerInstance.apiCall<ActionHandler>(ActionHandler, "application/json");

	}

	/**
	 * The method to get scoring rule
	 * @param id A BigInt representing the id
	 * @param paramInstance An instance of ParameterMap
	 * @returns An instance of APIResponse<ResponseHandler>
	 * @throws SDKException
	 */
	public async getScoringRule(id: bigint, paramInstance?: ParameterMap): Promise<APIResponse<ResponseHandler>>	{
		let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
		let apiPath: string = '';
		apiPath = apiPath.concat("/crm/v8/settings/automation/scoring_rules/");
		apiPath = apiPath.concat(id.toString());
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
		handlerInstance.setParam(paramInstance);
		let ResponseHandler = require.resolve("./response_handler");
		return handlerInstance.apiCall<ResponseHandler>(ResponseHandler, "application/json");

	}

	/**
	 * The method to delete scoring rule
	 * @param id A BigInt representing the id
	 * @returns An instance of APIResponse<ActionHandler>
	 * @throws SDKException
	 */
	public async deleteScoringRule(id: bigint): Promise<APIResponse<ActionHandler>>	{
		let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
		let apiPath: string = '';
		apiPath = apiPath.concat("/crm/v8/settings/automation/scoring_rules/");
		apiPath = apiPath.concat(id.toString());
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_DELETE);
		handlerInstance.setCategoryMethod(Constants.REQUEST_METHOD_DELETE);
		let ActionHandler = require.resolve("./action_handler");
		return handlerInstance.apiCall<ActionHandler>(ActionHandler, "application/json");

	}

	/**
	 * The method to activate scoring rule
	 * @param id A BigInt representing the id
	 * @returns An instance of APIResponse<ActionHandler>
	 * @throws SDKException
	 */
	public async activateScoringRule(id: bigint): Promise<APIResponse<ActionHandler>>	{
		let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
		let apiPath: string = '';
		apiPath = apiPath.concat("/crm/v8/settings/automation/scoring_rules/");
		apiPath = apiPath.concat(id.toString());
		apiPath = apiPath.concat("/actions/activate");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_PUT);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_ACTION);
		let ActionHandler = require.resolve("./action_handler");
		return handlerInstance.apiCall<ActionHandler>(ActionHandler, "application/json");

	}

	/**
	 * The method to deactivate scoring rule
	 * @param id A BigInt representing the id
	 * @returns An instance of APIResponse<ActionHandler>
	 * @throws SDKException
	 */
	public async deactivateScoringRule(id: bigint): Promise<APIResponse<ActionHandler>>	{
		let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
		let apiPath: string = '';
		apiPath = apiPath.concat("/crm/v8/settings/automation/scoring_rules/");
		apiPath = apiPath.concat(id.toString());
		apiPath = apiPath.concat("/actions/activate");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_DELETE);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_ACTION);
		let ActionHandler = require.resolve("./action_handler");
		return handlerInstance.apiCall<ActionHandler>(ActionHandler, "application/json");

	}

	/**
	 * The method to clone scoring rule
	 * @param id A BigInt representing the id
	 * @returns An instance of APIResponse<ActionHandler>
	 * @throws SDKException
	 */
	public async cloneScoringRule(id: bigint): Promise<APIResponse<ActionHandler>>	{
		let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
		let apiPath: string = '';
		apiPath = apiPath.concat("/crm/v8/settings/automation/scoring_rules/");
		apiPath = apiPath.concat(id.toString());
		apiPath = apiPath.concat("/actions/clone");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_POST);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_ACTION);
		let ActionHandler = require.resolve("./action_handler");
		return handlerInstance.apiCall<ActionHandler>(ActionHandler, "application/json");

	}

	/**
	 * The method to scoring rule execution using layout id
	 * @param module A String representing the module
	 * @param request An instance of LayoutRequestWrapper
	 * @returns An instance of APIResponse<ActionHandler>
	 * @throws SDKException
	 */
	public async scoringRuleExecutionUsingLayoutId(module: string, request: LayoutRequestWrapper): Promise<APIResponse<ActionHandler>>	{
		let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
		let apiPath: string = '';
		apiPath = apiPath.concat("/crm/v8/");
		apiPath = apiPath.concat(module.toString());
		apiPath = apiPath.concat("/actions/run_scoring_rules");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_PUT);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_ACTION);
		handlerInstance.setContentType("application/json");
		handlerInstance.setRequest(request);
		let ActionHandler = require.resolve("./action_handler");
		return handlerInstance.apiCall<ActionHandler>(ActionHandler, "application/json");

	}

	/**
	 * The method to scoring rule execution using rule ids
	 * @param module A String representing the module
	 * @param request An instance of RoleRequestWrapper
	 * @returns An instance of APIResponse<ActionHandler>
	 * @throws SDKException
	 */
	public async scoringRuleExecutionUsingRuleIds(module: string, request: RoleRequestWrapper): Promise<APIResponse<ActionHandler>>	{
		let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
		let apiPath: string = '';
		apiPath = apiPath.concat("/crm/v8/");
		apiPath = apiPath.concat(module.toString());
		apiPath = apiPath.concat("/actions/run_scoring_rules");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_PUT);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_ACTION);
		handlerInstance.setContentType("application/json");
		handlerInstance.setRequest(request);
		let ActionHandler = require.resolve("./action_handler");
		return handlerInstance.apiCall<ActionHandler>(ActionHandler, "application/json");

	}

}
class GetScoringRulesParam{

	public static MODULE: Param<string> = new Param<string>("module", "com.zoho.crm.api.ScoringRules.GetScoringRulesParam");
	public static LAYOUT_ID: Param<bigint> = new Param<bigint>("layout_id", "com.zoho.crm.api.ScoringRules.GetScoringRulesParam");
	public static ACTIVE: Param<Choice<boolean>> = new Param<Choice<boolean>>("active", "com.zoho.crm.api.ScoringRules.GetScoringRulesParam");
	public static NAME: Param<bigint> = new Param<bigint>("name", "com.zoho.crm.api.ScoringRules.GetScoringRulesParam");
	public static PAGE: Param<number> = new Param<number>("page", "com.zoho.crm.api.ScoringRules.GetScoringRulesParam");
	public static PER_PAGE: Param<number> = new Param<number>("per_page", "com.zoho.crm.api.ScoringRules.GetScoringRulesParam");
}

class DeleteScoringRulesParam{

	public static IDS: Param<string> = new Param<string>("ids", "com.zoho.crm.api.ScoringRules.DeleteScoringRulesParam");
}

class GetScoringRuleParam{

	public static LAYOUT_ID: Param<bigint> = new Param<bigint>("layout_id", "com.zoho.crm.api.ScoringRules.GetScoringRuleParam");
	public static ACTIVE: Param<Choice<boolean>> = new Param<Choice<boolean>>("active", "com.zoho.crm.api.ScoringRules.GetScoringRuleParam");
	public static NAME: Param<bigint> = new Param<bigint>("name", "com.zoho.crm.api.ScoringRules.GetScoringRuleParam");
}

export {
	ScoringRulesOperations as MasterModel,
	ScoringRulesOperations as ScoringRulesOperations,
	DeleteScoringRulesParam as DeleteScoringRulesParam,
	GetScoringRuleParam as GetScoringRuleParam,
	GetScoringRulesParam as GetScoringRulesParam
}
