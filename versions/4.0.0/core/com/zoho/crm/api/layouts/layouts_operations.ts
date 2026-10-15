import {ActionHandler} from "./action_handler";
import {BodyWrapper} from "./body_wrapper";
import {ResponseHandler} from "./response_handler";
import {Param} from "../../../../../../routes/param";
import {ParameterMap} from "../../../../../../routes/parameter_map";
import {SDKException} from "../exception/sdk_exception";
import {APIResponse} from "../../../../../../routes/controllers/api_response";
import {CommonAPIHandler} from "../../../../../../routes/middlewares/common_api_handler";
import { Constants } from "../../../../../../utils/util/constants";

class LayoutsOperations{
	/**
	 * The method to get layouts
	 * @param paramInstance An instance of ParameterMap
	 * @returns An instance of APIResponse<ResponseHandler>
	 * @throws SDKException
	 */
	public async getLayouts(paramInstance?: ParameterMap): Promise<APIResponse<ResponseHandler>>	{
		let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
		let apiPath: string = '';
		apiPath = apiPath.concat("/crm/v8/settings/layouts");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
		handlerInstance.setParam(paramInstance);
		let ResponseHandler = require.resolve("./response_handler");
		return handlerInstance.apiCall<ResponseHandler>(ResponseHandler, "application/json");

	}

	/**
	 * The method to get layout
	 * @param id A BigInt representing the id
	 * @param paramInstance An instance of ParameterMap
	 * @returns An instance of APIResponse<ResponseHandler>
	 * @throws SDKException
	 */
	public async getLayout(id: bigint, paramInstance?: ParameterMap): Promise<APIResponse<ResponseHandler>>	{
		let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
		let apiPath: string = '';
		apiPath = apiPath.concat("/crm/v8/settings/layouts/");
		apiPath = apiPath.concat(id.toString());
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
		handlerInstance.setParam(paramInstance);
		let ResponseHandler = require.resolve("./response_handler");
		return handlerInstance.apiCall<ResponseHandler>(ResponseHandler, "application/json");

	}

	/**
	 * The method to update custom layout
	 * @param id A BigInt representing the id
	 * @param request An instance of BodyWrapper
	 * @param paramInstance An instance of ParameterMap
	 * @returns An instance of APIResponse<ActionHandler>
	 * @throws SDKException
	 */
	public async updateCustomLayout(id: bigint, request: BodyWrapper, paramInstance?: ParameterMap): Promise<APIResponse<ActionHandler>>	{
		let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
		let apiPath: string = '';
		apiPath = apiPath.concat("/crm/v8/settings/layouts/");
		apiPath = apiPath.concat(id.toString());
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_PATCH);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_UPDATE);
		handlerInstance.setContentType("application/json");
		handlerInstance.setRequest(request);
		handlerInstance.setParam(paramInstance);
		let ActionHandler = require.resolve("./action_handler");
		return handlerInstance.apiCall<ActionHandler>(ActionHandler, "application/json");

	}

	/**
	 * The method to delete custom layout
	 * @param id A BigInt representing the id
	 * @param paramInstance An instance of ParameterMap
	 * @returns An instance of APIResponse<ActionHandler>
	 * @throws SDKException
	 */
	public async deleteCustomLayout(id: bigint, paramInstance?: ParameterMap): Promise<APIResponse<ActionHandler>>	{
		let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
		let apiPath: string = '';
		apiPath = apiPath.concat("/crm/v8/settings/layouts/");
		apiPath = apiPath.concat(id.toString());
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_DELETE);
		handlerInstance.setCategoryMethod(Constants.REQUEST_METHOD_DELETE);
		handlerInstance.setParam(paramInstance);
		let ActionHandler = require.resolve("./action_handler");
		return handlerInstance.apiCall<ActionHandler>(ActionHandler, "application/json");

	}

	/**
	 * The method to activate custom layout
	 * @param id A BigInt representing the id
	 * @param request An instance of BodyWrapper
	 * @param paramInstance An instance of ParameterMap
	 * @returns An instance of APIResponse<ActionHandler>
	 * @throws SDKException
	 */
	public async activateCustomLayout(id: bigint, request: BodyWrapper, paramInstance?: ParameterMap): Promise<APIResponse<ActionHandler>>	{
		let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
		let apiPath: string = '';
		apiPath = apiPath.concat("/crm/v8/settings/layouts/");
		apiPath = apiPath.concat(id.toString());
		apiPath = apiPath.concat("/actions/activate");
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
	 * The method to deactivate custom layout
	 * @param id A BigInt representing the id
	 * @param paramInstance An instance of ParameterMap
	 * @returns An instance of APIResponse<ActionHandler>
	 * @throws SDKException
	 */
	public async deactivateCustomLayout(id: bigint, paramInstance?: ParameterMap): Promise<APIResponse<ActionHandler>>	{
		let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
		let apiPath: string = '';
		apiPath = apiPath.concat("/crm/v8/settings/layouts/");
		apiPath = apiPath.concat(id.toString());
		apiPath = apiPath.concat("/actions/activate");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_DELETE);
		handlerInstance.setCategoryMethod(Constants.REQUEST_METHOD_DELETE);
		handlerInstance.setParam(paramInstance);
		let ActionHandler = require.resolve("./action_handler");
		return handlerInstance.apiCall<ActionHandler>(ActionHandler, "application/json");

	}

}
class GetLayoutsParam{

	public static MODULE: Param<string> = new Param<string>("module", "com.zoho.crm.api.Layouts.GetLayoutsParam");
}

class GetLayoutsHeader{

}

class GetLayoutParam{

	public static MODULE: Param<string> = new Param<string>("module", "com.zoho.crm.api.Layouts.GetLayoutParam");
}

class GetLayoutHeader{

}

class UpdateCustomLayoutParam{

	public static MODULE: Param<string> = new Param<string>("module", "com.zoho.crm.api.Layouts.UpdateCustomLayoutParam");
}

class DeleteCustomLayoutParam{

	public static MODULE: Param<string> = new Param<string>("module", "com.zoho.crm.api.Layouts.DeleteCustomLayoutParam");
	public static TRANSFER_TO: Param<string> = new Param<string>("transfer_to", "com.zoho.crm.api.Layouts.DeleteCustomLayoutParam");
}

class ActivateCustomLayoutParam{

	public static MODULE: Param<string> = new Param<string>("module", "com.zoho.crm.api.Layouts.ActivateCustomLayoutParam");
}

class DeactivateCustomLayoutParam{

	public static TRANSFER_TO: Param<string> = new Param<string>("transfer_to", "com.zoho.crm.api.Layouts.DeactivateCustomLayoutParam");
	public static MODULE: Param<string> = new Param<string>("module", "com.zoho.crm.api.Layouts.DeactivateCustomLayoutParam");
}

export {
	GetLayoutsHeader as GetLayoutsHeader,
	ActivateCustomLayoutParam as ActivateCustomLayoutParam,
	DeactivateCustomLayoutParam as DeactivateCustomLayoutParam,
	LayoutsOperations as MasterModel,
	LayoutsOperations as LayoutsOperations,
	GetLayoutsParam as GetLayoutsParam,
	GetLayoutParam as GetLayoutParam,
	GetLayoutHeader as GetLayoutHeader,
	UpdateCustomLayoutParam as UpdateCustomLayoutParam,
	DeleteCustomLayoutParam as DeleteCustomLayoutParam
}
