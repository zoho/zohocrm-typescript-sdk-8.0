import {ActionHandler} from "./action_handler";
import {BodyWrapper} from "./body_wrapper";
import {ResponseHandler} from "./response_handler";
import {Param} from "../../../../../../routes/param";
import {ParameterMap} from "../../../../../../routes/parameter_map";
import {SDKException} from "../exception/sdk_exception";
import {APIResponse} from "../../../../../../routes/controllers/api_response";
import {Choice} from "../../../../../../utils/util/choice";
import {CommonAPIHandler} from "../../../../../../routes/middlewares/common_api_handler";
import { Constants } from "../../../../../../utils/util/constants";

class FieldsOperations{
	/**
	 * The method to get fields
	 * @param paramInstance An instance of ParameterMap
	 * @returns An instance of APIResponse<ResponseHandler>
	 * @throws SDKException
	 */
	public async getFields(paramInstance?: ParameterMap): Promise<APIResponse<ResponseHandler>>	{
		let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
		let apiPath: string = '';
		apiPath = apiPath.concat("/crm/v8/settings/fields");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
		handlerInstance.setParam(paramInstance);
		let ResponseHandler = require.resolve("./response_handler");
		return handlerInstance.apiCall<ResponseHandler>(ResponseHandler, "application/json");

	}

	/**
	 * The method to create field
	 * @param request An instance of BodyWrapper
	 * @param paramInstance An instance of ParameterMap
	 * @returns An instance of APIResponse<ActionHandler>
	 * @throws SDKException
	 */
	public async createField(request: BodyWrapper, paramInstance?: ParameterMap): Promise<APIResponse<ActionHandler>>	{
		let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
		let apiPath: string = '';
		apiPath = apiPath.concat("/crm/v8/settings/fields");
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
	 * The method to update fields
	 * @param request An instance of BodyWrapper
	 * @param paramInstance An instance of ParameterMap
	 * @returns An instance of APIResponse<ActionHandler>
	 * @throws SDKException
	 */
	public async updateFields(request: BodyWrapper, paramInstance?: ParameterMap): Promise<APIResponse<ActionHandler>>	{
		let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
		let apiPath: string = '';
		apiPath = apiPath.concat("/crm/v8/settings/fields");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_PATCH);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_UPDATE);
		handlerInstance.setContentType("application/json");
		handlerInstance.setRequest(request);
		handlerInstance.setMandatoryChecker(true);
		handlerInstance.setParam(paramInstance);
		let ActionHandler = require.resolve("./action_handler");
		return handlerInstance.apiCall<ActionHandler>(ActionHandler, "application/json");

	}

	/**
	 * The method to get field
	 * @param field A BigInt representing the field
	 * @param paramInstance An instance of ParameterMap
	 * @returns An instance of APIResponse<ResponseHandler>
	 * @throws SDKException
	 */
	public async getField(field: bigint, paramInstance?: ParameterMap): Promise<APIResponse<ResponseHandler>>	{
		let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
		let apiPath: string = '';
		apiPath = apiPath.concat("/crm/v8/settings/fields/");
		apiPath = apiPath.concat(field.toString());
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
		handlerInstance.setParam(paramInstance);
		let ResponseHandler = require.resolve("./response_handler");
		return handlerInstance.apiCall<ResponseHandler>(ResponseHandler, "application/json");

	}

	/**
	 * The method to update field
	 * @param field A BigInt representing the field
	 * @param request An instance of BodyWrapper
	 * @param paramInstance An instance of ParameterMap
	 * @returns An instance of APIResponse<ActionHandler>
	 * @throws SDKException
	 */
	public async updateField(field: bigint, request: BodyWrapper, paramInstance?: ParameterMap): Promise<APIResponse<ActionHandler>>	{
		let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
		let apiPath: string = '';
		apiPath = apiPath.concat("/crm/v8/settings/fields/");
		apiPath = apiPath.concat(field.toString());
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_PATCH);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_UPDATE);
		handlerInstance.setContentType("application/json");
		handlerInstance.setRequest(request);
		handlerInstance.setMandatoryChecker(true);
		handlerInstance.setParam(paramInstance);
		let ActionHandler = require.resolve("./action_handler");
		return handlerInstance.apiCall<ActionHandler>(ActionHandler, "application/json");

	}

	/**
	 * The method to delete field
	 * @param field A BigInt representing the field
	 * @param paramInstance An instance of ParameterMap
	 * @returns An instance of APIResponse<ActionHandler>
	 * @throws SDKException
	 */
	public async deleteField(field: bigint, paramInstance?: ParameterMap): Promise<APIResponse<ActionHandler>>	{
		let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
		let apiPath: string = '';
		apiPath = apiPath.concat("/crm/v8/settings/fields/");
		apiPath = apiPath.concat(field.toString());
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_DELETE);
		handlerInstance.setCategoryMethod(Constants.REQUEST_METHOD_DELETE);
		handlerInstance.setParam(paramInstance);
		let ActionHandler = require.resolve("./action_handler");
		return handlerInstance.apiCall<ActionHandler>(ActionHandler, "application/json");

	}

}
class GetFieldsParam{

	public static MODULE: Param<string> = new Param<string>("module", "com.zoho.crm.api.Fields.GetFieldsParam");
	public static DATA_TYPE: Param<string> = new Param<string>("data_type", "com.zoho.crm.api.Fields.GetFieldsParam");
	public static TYPE: Param<Choice<string>> = new Param<Choice<string>>("type", "com.zoho.crm.api.Fields.GetFieldsParam");
	public static INCLUDE: Param<string> = new Param<string>("include", "com.zoho.crm.api.Fields.GetFieldsParam");
	public static FEATURE_NAME: Param<string> = new Param<string>("feature_name", "com.zoho.crm.api.Fields.GetFieldsParam");
	public static COMPONENT: Param<string> = new Param<string>("component", "com.zoho.crm.api.Fields.GetFieldsParam");
	public static LAYOUT_ID: Param<bigint> = new Param<bigint>("layout_id", "com.zoho.crm.api.Fields.GetFieldsParam");
}

class GetFieldsHeader{

}

class CreateFieldParam{

	public static MODULE: Param<string> = new Param<string>("module", "com.zoho.crm.api.Fields.CreateFieldParam");
}

class UpdateFieldsParam{

	public static MODULE: Param<string> = new Param<string>("module", "com.zoho.crm.api.Fields.UpdateFieldsParam");
}

class GetFieldParam{

	public static MODULE: Param<string> = new Param<string>("module", "com.zoho.crm.api.Fields.GetFieldParam");
	public static INCLUDE: Param<string> = new Param<string>("include", "com.zoho.crm.api.Fields.GetFieldParam");
}

class GetFieldHeader{

}

class UpdateFieldParam{

	public static MODULE: Param<string> = new Param<string>("module", "com.zoho.crm.api.Fields.UpdateFieldParam");
}

class DeleteFieldParam{

	public static MODULE: Param<string> = new Param<string>("module", "com.zoho.crm.api.Fields.DeleteFieldParam");
}

export {
	GetFieldsParam as GetFieldsParam,
	GetFieldsHeader as GetFieldsHeader,
	GetFieldHeader as GetFieldHeader,
	CreateFieldParam as CreateFieldParam,
	UpdateFieldParam as UpdateFieldParam,
	GetFieldParam as GetFieldParam,
	DeleteFieldParam as DeleteFieldParam,
	FieldsOperations as MasterModel,
	FieldsOperations as FieldsOperations,
	UpdateFieldsParam as UpdateFieldsParam
}
