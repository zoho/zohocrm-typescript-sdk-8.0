import {Param} from "../../../../../../routes/param";
import {ParameterMap} from "../../../../../../routes/parameter_map";
import {ActionHandler} from "./action_handler";
import {BodyWrapper} from "./body_wrapper";
import {FiltersBody} from "./filters_body";
import {ResponseHandler} from "./response_handler";
import {SummaryResponseHandler} from "./summary_response_handler";
import {SDKException} from "../exception/sdk_exception";
import {APIResponse} from "../../../../../../routes/controllers/api_response";
import {CommonAPIHandler} from "../../../../../../routes/middlewares/common_api_handler";
import { Constants } from "../../../../../../utils/util/constants";

class SharingRulesOperations{

	private module?: string;
	/**
	 * Creates an instance of SharingRulesOperations with the given parameters
	 * @param module A String representing the module
	 */
	constructor(module?: string){
		this.module = module;

	}

	/**
	 * The method to get sharing rules
	 * @param paramInstance An instance of ParameterMap
	 * @returns An instance of APIResponse<ResponseHandler>
	 * @throws SDKException
	 */
	public async getSharingRules(paramInstance?: ParameterMap): Promise<APIResponse<ResponseHandler>>	{
		let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
		let apiPath: string = '';
		apiPath = apiPath.concat("/crm/v8/settings/data_sharing/rules");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
		await handlerInstance.addParam(new Param<string>("module", "com.zoho.crm.api.SharingRules.GetSharingRulesParam"), this.module).catch(err => { throw err; });
		handlerInstance.setParam(paramInstance);
		let ResponseHandler = require.resolve("./response_handler");
		return handlerInstance.apiCall<ResponseHandler>(ResponseHandler, "application/json");

	}

	/**
	 * The method to create sharing rules
	 * @param request An instance of BodyWrapper
	 * @returns An instance of APIResponse<ActionHandler>
	 * @throws SDKException
	 */
	public async createSharingRules(request: BodyWrapper): Promise<APIResponse<ActionHandler>>	{
		let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
		let apiPath: string = '';
		apiPath = apiPath.concat("/crm/v8/settings/data_sharing/rules");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_POST);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_CREATE);
		handlerInstance.setContentType("application/json");
		handlerInstance.setRequest(request);
		handlerInstance.setMandatoryChecker(true);
		await handlerInstance.addParam(new Param<string>("module", "com.zoho.crm.api.SharingRules.CreateSharingRulesParam"), this.module).catch(err => { throw err; });
		let ActionHandler = require.resolve("./action_handler");
		return handlerInstance.apiCall<ActionHandler>(ActionHandler, "application/json");

	}

	/**
	 * The method to update sharing rules
	 * @param request An instance of BodyWrapper
	 * @returns An instance of APIResponse<ActionHandler>
	 * @throws SDKException
	 */
	public async updateSharingRules(request: BodyWrapper): Promise<APIResponse<ActionHandler>>	{
		let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
		let apiPath: string = '';
		apiPath = apiPath.concat("/crm/v8/settings/data_sharing/rules");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_PUT);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_UPDATE);
		handlerInstance.setContentType("application/json");
		handlerInstance.setRequest(request);
		handlerInstance.setMandatoryChecker(true);
		await handlerInstance.addParam(new Param<string>("module", "com.zoho.crm.api.SharingRules.UpdateSharingRulesParam"), this.module).catch(err => { throw err; });
		let ActionHandler = require.resolve("./action_handler");
		return handlerInstance.apiCall<ActionHandler>(ActionHandler, "application/json");

	}

	/**
	 * The method to get sharing rule
	 * @param id A BigInt representing the id
	 * @returns An instance of APIResponse<ResponseHandler>
	 * @throws SDKException
	 */
	public async getSharingRule(id: bigint): Promise<APIResponse<ResponseHandler>>	{
		let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
		let apiPath: string = '';
		apiPath = apiPath.concat("/crm/v8/settings/data_sharing/rules/");
		apiPath = apiPath.concat(id.toString());
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
		await handlerInstance.addParam(new Param<string>("module", "com.zoho.crm.api.SharingRules.GetSharingRuleParam"), this.module).catch(err => { throw err; });
		let ResponseHandler = require.resolve("./response_handler");
		return handlerInstance.apiCall<ResponseHandler>(ResponseHandler, "application/json");

	}

	/**
	 * The method to update sharing rule
	 * @param id A BigInt representing the id
	 * @param request An instance of BodyWrapper
	 * @returns An instance of APIResponse<ActionHandler>
	 * @throws SDKException
	 */
	public async updateSharingRule(id: bigint, request: BodyWrapper): Promise<APIResponse<ActionHandler>>	{
		let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
		let apiPath: string = '';
		apiPath = apiPath.concat("/crm/v8/settings/data_sharing/rules/");
		apiPath = apiPath.concat(id.toString());
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_PUT);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_UPDATE);
		handlerInstance.setContentType("application/json");
		handlerInstance.setRequest(request);
		await handlerInstance.addParam(new Param<string>("module", "com.zoho.crm.api.SharingRules.UpdateSharingRuleParam"), this.module).catch(err => { throw err; });
		let ActionHandler = require.resolve("./action_handler");
		return handlerInstance.apiCall<ActionHandler>(ActionHandler, "application/json");

	}

	/**
	 * The method to delete sharing rule
	 * @param id A BigInt representing the id
	 * @returns An instance of APIResponse<ActionHandler>
	 * @throws SDKException
	 */
	public async deleteSharingRule(id: bigint): Promise<APIResponse<ActionHandler>>	{
		let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
		let apiPath: string = '';
		apiPath = apiPath.concat("/crm/v8/settings/data_sharing/rules/");
		apiPath = apiPath.concat(id.toString());
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_DELETE);
		handlerInstance.setCategoryMethod(Constants.REQUEST_METHOD_DELETE);
		await handlerInstance.addParam(new Param<string>("module", "com.zoho.crm.api.SharingRules.DeleteSharingRuleParam"), this.module).catch(err => { throw err; });
		let ActionHandler = require.resolve("./action_handler");
		return handlerInstance.apiCall<ActionHandler>(ActionHandler, "application/json");

	}

	/**
	 * The method to search sharing rules
	 * @param request An instance of FiltersBody
	 * @param paramInstance An instance of ParameterMap
	 * @returns An instance of APIResponse<ResponseHandler>
	 * @throws SDKException
	 */
	public async searchSharingRules(request: FiltersBody, paramInstance?: ParameterMap): Promise<APIResponse<ResponseHandler>>	{
		let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
		let apiPath: string = '';
		apiPath = apiPath.concat("/crm/v8/settings/data_sharing/rules/search");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_POST);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_ACTION);
		handlerInstance.setContentType("application/json");
		handlerInstance.setRequest(request);
		await handlerInstance.addParam(new Param<string>("module", "com.zoho.crm.api.SharingRules.SearchSharingRulesParam"), this.module).catch(err => { throw err; });
		handlerInstance.setParam(paramInstance);
		let ResponseHandler = require.resolve("./response_handler");
		return handlerInstance.apiCall<ResponseHandler>(ResponseHandler, "application/json");

	}

	/**
	 * The method to deactivate sharing rule
	 * @param id A BigInt representing the id
	 * @returns An instance of APIResponse<ActionHandler>
	 * @throws SDKException
	 */
	public async deactivateSharingRule(id: bigint): Promise<APIResponse<ActionHandler>>	{
		let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
		let apiPath: string = '';
		apiPath = apiPath.concat("/crm/v8/settings/data_sharing/rules/");
		apiPath = apiPath.concat(id.toString());
		apiPath = apiPath.concat("/actions/activate");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_DELETE);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_ACTION);
		await handlerInstance.addParam(new Param<string>("module", "com.zoho.crm.api.SharingRules.DeactivateSharingRuleParam"), this.module).catch(err => { throw err; });
		let ActionHandler = require.resolve("./action_handler");
		return handlerInstance.apiCall<ActionHandler>(ActionHandler, "application/json");

	}

	/**
	 * The method to activate sharing rule
	 * @param id A BigInt representing the id
	 * @returns An instance of APIResponse<ActionHandler>
	 * @throws SDKException
	 */
	public async activateSharingRule(id: bigint): Promise<APIResponse<ActionHandler>>	{
		let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
		let apiPath: string = '';
		apiPath = apiPath.concat("/crm/v8/settings/data_sharing/rules/");
		apiPath = apiPath.concat(id.toString());
		apiPath = apiPath.concat("/actions/activate");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_PUT);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_ACTION);
		await handlerInstance.addParam(new Param<string>("module", "com.zoho.crm.api.SharingRules.ActivateSharingRuleParam"), this.module).catch(err => { throw err; });
		let ActionHandler = require.resolve("./action_handler");
		return handlerInstance.apiCall<ActionHandler>(ActionHandler, "application/json");

	}

	/**
	 * The method to get sharing rule summary
	 * @returns An instance of APIResponse<SummaryResponseHandler>
	 * @throws SDKException
	 */
	public async getSharingRuleSummary(): Promise<APIResponse<SummaryResponseHandler>>	{
		let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
		let apiPath: string = '';
		apiPath = apiPath.concat("/crm/v8/settings/data_sharing/rules/actions/summary");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
		await handlerInstance.addParam(new Param<string>("module", "com.zoho.crm.api.SharingRules.GetSharingRuleSummaryParam"), this.module).catch(err => { throw err; });
		let SummaryResponseHandler = require.resolve("./summary_response_handler");
		return handlerInstance.apiCall<SummaryResponseHandler>(SummaryResponseHandler, "application/json");

	}

	/**
	 * The method to search sharing rules summary
	 * @param request An instance of FiltersBody
	 * @returns An instance of APIResponse<SummaryResponseHandler>
	 * @throws SDKException
	 */
	public async searchSharingRulesSummary(request: FiltersBody): Promise<APIResponse<SummaryResponseHandler>>	{
		let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
		let apiPath: string = '';
		apiPath = apiPath.concat("/crm/v8/settings/data_sharing/rules/actions/summary");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_POST);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_ACTION);
		handlerInstance.setContentType("application/json");
		handlerInstance.setRequest(request);
		await handlerInstance.addParam(new Param<string>("module", "com.zoho.crm.api.SharingRules.SearchSharingRulesSummaryParam"), this.module).catch(err => { throw err; });
		let SummaryResponseHandler = require.resolve("./summary_response_handler");
		return handlerInstance.apiCall<SummaryResponseHandler>(SummaryResponseHandler, "application/json");

	}

	/**
	 * The method to rerun sharing rules
	 * @returns An instance of APIResponse<ActionHandler>
	 * @throws SDKException
	 */
	public async rerunSharingRules(): Promise<APIResponse<ActionHandler>>	{
		let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
		let apiPath: string = '';
		apiPath = apiPath.concat("/crm/v8/settings/data_sharing/rules/actions/run");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_POST);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_ACTION);
		await handlerInstance.addParam(new Param<string>("module", "com.zoho.crm.api.SharingRules.RerunSharingRulesParam"), this.module).catch(err => { throw err; });
		let ActionHandler = require.resolve("./action_handler");
		return handlerInstance.apiCall<ActionHandler>(ActionHandler, "application/json");

	}

}
class GetSharingRulesParam{

	public static PAGE: Param<number> = new Param<number>("page", "com.zoho.crm.api.SharingRules.GetSharingRulesParam");
	public static PER_PAGE: Param<number> = new Param<number>("per_page", "com.zoho.crm.api.SharingRules.GetSharingRulesParam");
}

class CreateSharingRulesParam{

}

class UpdateSharingRulesParam{

}

class GetSharingRuleParam{

}

class UpdateSharingRuleParam{

}

class DeleteSharingRuleParam{

}

class SearchSharingRulesParam{

	public static PAGE: Param<number> = new Param<number>("page", "com.zoho.crm.api.SharingRules.SearchSharingRulesParam");
	public static PER_PAGE: Param<number> = new Param<number>("per_page", "com.zoho.crm.api.SharingRules.SearchSharingRulesParam");
}

class DeactivateSharingRuleParam{

}

class ActivateSharingRuleParam{

}

class GetSharingRuleSummaryParam{

}

class SearchSharingRulesSummaryParam{

}

class RerunSharingRulesParam{

}

export {
	GetSharingRulesParam as GetSharingRulesParam,
	GetSharingRuleParam as GetSharingRuleParam,
	SharingRulesOperations as MasterModel,
	SharingRulesOperations as SharingRulesOperations,
	DeactivateSharingRuleParam as DeactivateSharingRuleParam,
	UpdateSharingRuleParam as UpdateSharingRuleParam,
	SearchSharingRulesParam as SearchSharingRulesParam,
	CreateSharingRulesParam as CreateSharingRulesParam,
	SearchSharingRulesSummaryParam as SearchSharingRulesSummaryParam,
	RerunSharingRulesParam as RerunSharingRulesParam,
	ActivateSharingRuleParam as ActivateSharingRuleParam,
	GetSharingRuleSummaryParam as GetSharingRuleSummaryParam,
	UpdateSharingRulesParam as UpdateSharingRulesParam,
	DeleteSharingRuleParam as DeleteSharingRuleParam
}
