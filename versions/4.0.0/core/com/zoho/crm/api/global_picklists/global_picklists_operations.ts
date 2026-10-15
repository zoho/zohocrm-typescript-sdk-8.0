import {ActionHandler} from "./action_handler";
import {AssociationsResponseHandler} from "./associations_response_handler";
import {BodyWrapper} from "./body_wrapper";
import {PickListValuesAssociationsResponseHandler} from "./pick_list_values_associations_response_handler";
import {ReplaceActionHandler} from "./replace_action_handler";
import {ReplaceBodyWrapper} from "./replace_body_wrapper";
import {ReplacedResponseHandler} from "./replaced_response_handler";
import {ResponseHandler} from "./response_handler";
import {Param} from "../../../../../../routes/param";
import {ParameterMap} from "../../../../../../routes/parameter_map";
import {SDKException} from "../exception/sdk_exception";
import {APIResponse} from "../../../../../../routes/controllers/api_response";
import {CommonAPIHandler} from "../../../../../../routes/middlewares/common_api_handler";
import { Constants } from "../../../../../../utils/util/constants";

class GlobalPicklistsOperations{
	/**
	 * The method to get global picklists
	 * @param paramInstance An instance of ParameterMap
	 * @returns An instance of APIResponse<ResponseHandler>
	 * @throws SDKException
	 */
	public async getGlobalPicklists(paramInstance?: ParameterMap): Promise<APIResponse<ResponseHandler>>	{
		let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
		let apiPath: string = '';
		apiPath = apiPath.concat("/crm/v8/settings/global_picklists");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
		handlerInstance.setParam(paramInstance);
		let ResponseHandler = require.resolve("./response_handler");
		return handlerInstance.apiCall<ResponseHandler>(ResponseHandler, "application/json");

	}

	/**
	 * The method to create global picklist
	 * @param request An instance of BodyWrapper
	 * @returns An instance of APIResponse<ActionHandler>
	 * @throws SDKException
	 */
	public async createGlobalPicklist(request: BodyWrapper): Promise<APIResponse<ActionHandler>>	{
		let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
		let apiPath: string = '';
		apiPath = apiPath.concat("/crm/v8/settings/global_picklists");
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
	 * The method to update global picklists
	 * @param request An instance of BodyWrapper
	 * @returns An instance of APIResponse<ActionHandler>
	 * @throws SDKException
	 */
	public async updateGlobalPicklists(request: BodyWrapper): Promise<APIResponse<ActionHandler>>	{
		let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
		let apiPath: string = '';
		apiPath = apiPath.concat("/crm/v8/settings/global_picklists");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_PATCH);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_UPDATE);
		handlerInstance.setContentType("application/json");
		handlerInstance.setRequest(request);
		handlerInstance.setMandatoryChecker(true);
		let ActionHandler = require.resolve("./action_handler");
		return handlerInstance.apiCall<ActionHandler>(ActionHandler, "application/json");

	}

	/**
	 * The method to delete global picklists
	 * @param paramInstance An instance of ParameterMap
	 * @returns An instance of APIResponse<ActionHandler>
	 * @throws SDKException
	 */
	public async deleteGlobalPicklists(paramInstance?: ParameterMap): Promise<APIResponse<ActionHandler>>	{
		let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
		let apiPath: string = '';
		apiPath = apiPath.concat("/crm/v8/settings/global_picklists");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_DELETE);
		handlerInstance.setCategoryMethod(Constants.REQUEST_METHOD_DELETE);
		handlerInstance.setParam(paramInstance);
		let ActionHandler = require.resolve("./action_handler");
		return handlerInstance.apiCall<ActionHandler>(ActionHandler, "application/json");

	}

	/**
	 * The method to get global picklist
	 * @param id A BigInt representing the id
	 * @param paramInstance An instance of ParameterMap
	 * @returns An instance of APIResponse<ResponseHandler>
	 * @throws SDKException
	 */
	public async getGlobalPicklist(id: bigint, paramInstance?: ParameterMap): Promise<APIResponse<ResponseHandler>>	{
		let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
		let apiPath: string = '';
		apiPath = apiPath.concat("/crm/v8/settings/global_picklists/");
		apiPath = apiPath.concat(id.toString());
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
		handlerInstance.setParam(paramInstance);
		let ResponseHandler = require.resolve("./response_handler");
		return handlerInstance.apiCall<ResponseHandler>(ResponseHandler, "application/json");

	}

	/**
	 * The method to update global picklist
	 * @param id A BigInt representing the id
	 * @param request An instance of BodyWrapper
	 * @returns An instance of APIResponse<ActionHandler>
	 * @throws SDKException
	 */
	public async updateGlobalPicklist(id: bigint, request: BodyWrapper): Promise<APIResponse<ActionHandler>>	{
		let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
		let apiPath: string = '';
		apiPath = apiPath.concat("/crm/v8/settings/global_picklists/");
		apiPath = apiPath.concat(id.toString());
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_PATCH);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_UPDATE);
		handlerInstance.setContentType("application/json");
		handlerInstance.setRequest(request);
		let ActionHandler = require.resolve("./action_handler");
		return handlerInstance.apiCall<ActionHandler>(ActionHandler, "application/json");

	}

	/**
	 * The method to delete global picklist
	 * @param id A BigInt representing the id
	 * @returns An instance of APIResponse<ActionHandler>
	 * @throws SDKException
	 */
	public async deleteGlobalPicklist(id: bigint): Promise<APIResponse<ActionHandler>>	{
		let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
		let apiPath: string = '';
		apiPath = apiPath.concat("/crm/v8/settings/global_picklists/");
		apiPath = apiPath.concat(id.toString());
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_DELETE);
		handlerInstance.setCategoryMethod(Constants.REQUEST_METHOD_DELETE);
		let ActionHandler = require.resolve("./action_handler");
		return handlerInstance.apiCall<ActionHandler>(ActionHandler, "application/json");

	}

	/**
	 * The method to replace picklist values
	 * @param id A BigInt representing the id
	 * @param request An instance of ReplaceBodyWrapper
	 * @returns An instance of APIResponse<ReplaceActionHandler>
	 * @throws SDKException
	 */
	public async replacePicklistValues(id: bigint, request: ReplaceBodyWrapper): Promise<APIResponse<ReplaceActionHandler>>	{
		let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
		let apiPath: string = '';
		apiPath = apiPath.concat("/crm/v8/settings/global_picklists/");
		apiPath = apiPath.concat(id.toString());
		apiPath = apiPath.concat("/actions/replace_picklist_values");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_POST);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_ACTION);
		handlerInstance.setContentType("application/json");
		handlerInstance.setRequest(request);
		let ReplaceActionHandler = require.resolve("./replace_action_handler");
		return handlerInstance.apiCall<ReplaceActionHandler>(ReplaceActionHandler, "application/json");

	}

	/**
	 * The method to get replace values
	 * @param id A BigInt representing the id
	 * @returns An instance of APIResponse<ReplacedResponseHandler>
	 * @throws SDKException
	 */
	public async getReplaceValues(id: bigint): Promise<APIResponse<ReplacedResponseHandler>>	{
		let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
		let apiPath: string = '';
		apiPath = apiPath.concat("/crm/v8/settings/global_picklists/");
		apiPath = apiPath.concat(id.toString());
		apiPath = apiPath.concat("/actions/replaced_values");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_ACTION);
		let ReplacedResponseHandler = require.resolve("./replaced_response_handler");
		return handlerInstance.apiCall<ReplacedResponseHandler>(ReplacedResponseHandler, "application/json");

	}

	/**
	 * The method to get associations
	 * @param id A BigInt representing the id
	 * @param paramInstance An instance of ParameterMap
	 * @returns An instance of APIResponse<AssociationsResponseHandler>
	 * @throws SDKException
	 */
	public async getAssociations(id: bigint, paramInstance?: ParameterMap): Promise<APIResponse<AssociationsResponseHandler>>	{
		let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
		let apiPath: string = '';
		apiPath = apiPath.concat("/crm/v8/settings/global_picklists/");
		apiPath = apiPath.concat(id.toString());
		apiPath = apiPath.concat("/actions/associations");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_ACTION);
		handlerInstance.setParam(paramInstance);
		let AssociationsResponseHandler = require.resolve("./associations_response_handler");
		return handlerInstance.apiCall<AssociationsResponseHandler>(AssociationsResponseHandler, "application/json");

	}

	/**
	 * The method to get pick list value associations
	 * @param id A BigInt representing the id
	 * @param paramInstance An instance of ParameterMap
	 * @returns An instance of APIResponse<PickListValuesAssociationsResponseHandler>
	 * @throws SDKException
	 */
	public async getPickListValueAssociations(id: bigint, paramInstance?: ParameterMap): Promise<APIResponse<PickListValuesAssociationsResponseHandler>>	{
		let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
		let apiPath: string = '';
		apiPath = apiPath.concat("/crm/v8/settings/global_picklists/");
		apiPath = apiPath.concat(id.toString());
		apiPath = apiPath.concat("/actions/pick_list_values_associations");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_ACTION);
		handlerInstance.setParam(paramInstance);
		let PickListValuesAssociationsResponseHandler = require.resolve("./pick_list_values_associations_response_handler");
		return handlerInstance.apiCall<PickListValuesAssociationsResponseHandler>(PickListValuesAssociationsResponseHandler, "application/json");

	}

}
class GetGlobalPicklistsParam{

	public static INCLUDE: Param<string> = new Param<string>("include", "com.zoho.crm.api.GlobalPicklists.GetGlobalPicklistsParam");
	public static INCLUDE_INNER_DETAILS: Param<string> = new Param<string>("include_inner_details", "com.zoho.crm.api.GlobalPicklists.GetGlobalPicklistsParam");
}

class DeleteGlobalPicklistsParam{

	public static IDS: Param<string> = new Param<string>("ids", "com.zoho.crm.api.GlobalPicklists.DeleteGlobalPicklistsParam");
}

class GetGlobalPicklistParam{

	public static INCLUDE: Param<string> = new Param<string>("include", "com.zoho.crm.api.GlobalPicklists.GetGlobalPicklistParam");
	public static INCLUDE_INNER_DETAILS: Param<string> = new Param<string>("include_inner_details", "com.zoho.crm.api.GlobalPicklists.GetGlobalPicklistParam");
}

class GetAssociationsParam{

	public static INCLUDE_INNER_DETAILS: Param<string> = new Param<string>("include_inner_details", "com.zoho.crm.api.GlobalPicklists.GetAssociationsParam");
	public static PAGE: Param<number> = new Param<number>("page", "com.zoho.crm.api.GlobalPicklists.GetAssociationsParam");
	public static PER_PAGE: Param<number> = new Param<number>("per_page", "com.zoho.crm.api.GlobalPicklists.GetAssociationsParam");
}

class GetPickListValueAssociationsParam{

	public static PICKLIST_VALUE_ID: Param<bigint> = new Param<bigint>("picklist_value_id", "com.zoho.crm.api.GlobalPicklists.GetPickListValueAssociationsParam");
}

export {
	GetPickListValueAssociationsParam as GetPickListValueAssociationsParam,
	GetGlobalPicklistParam as GetGlobalPicklistParam,
	DeleteGlobalPicklistsParam as DeleteGlobalPicklistsParam,
	GetAssociationsParam as GetAssociationsParam,
	GlobalPicklistsOperations as MasterModel,
	GlobalPicklistsOperations as GlobalPicklistsOperations,
	GetGlobalPicklistsParam as GetGlobalPicklistsParam
}
