import {Param} from "../../../../../../routes/param";
import {ParameterMap} from "../../../../../../routes/parameter_map";
import {ActionHandler} from "./action_handler";
import {BodyWrapper} from "./body_wrapper";
import {ResponseHandler} from "./response_handler";
import {SDKException} from "../exception/sdk_exception";
import {APIResponse} from "../../../../../../routes/controllers/api_response";
import {CommonAPIHandler} from "../../../../../../routes/middlewares/common_api_handler";
import { Constants } from "../../../../../../utils/util/constants";

class RecordLockingConfigurationOperations{

	private module?: string;
	/**
	 * Creates an instance of RecordLockingConfigurationOperations with the given parameters
	 * @param module A String representing the module
	 */
	constructor(module?: string){
		this.module = module;

	}

	/**
	 * The method to get record locking configurations
	 * @param paramInstance An instance of ParameterMap
	 * @returns An instance of APIResponse<ResponseHandler>
	 * @throws SDKException
	 */
	public async getRecordLockingConfigurations(paramInstance?: ParameterMap): Promise<APIResponse<ResponseHandler>>	{
		let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
		let apiPath: string = '';
		apiPath = apiPath.concat("/crm/v8/settings/record_locking_configurations");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
		await handlerInstance.addParam(new Param<string>("module", "com.zoho.crm.api.RecordLockingConfiguration.GetRecordLockingConfigurationsParam"), this.module).catch(err => { throw err; });
		handlerInstance.setParam(paramInstance);
		let ResponseHandler = require.resolve("./response_handler");
		return handlerInstance.apiCall<ResponseHandler>(ResponseHandler, "application/json");

	}

	/**
	 * The method to add record locking configuration
	 * @param request An instance of BodyWrapper
	 * @returns An instance of APIResponse<ActionHandler>
	 * @throws SDKException
	 */
	public async addRecordLockingConfiguration(request: BodyWrapper): Promise<APIResponse<ActionHandler>>	{
		let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
		let apiPath: string = '';
		apiPath = apiPath.concat("/crm/v8/settings/record_locking_configurations");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_POST);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_CREATE);
		handlerInstance.setContentType("application/json");
		handlerInstance.setRequest(request);
		handlerInstance.setMandatoryChecker(true);
		await handlerInstance.addParam(new Param<string>("module", "com.zoho.crm.api.RecordLockingConfiguration.AddRecordLockingConfigurationParam"), this.module).catch(err => { throw err; });
		let ActionHandler = require.resolve("./action_handler");
		return handlerInstance.apiCall<ActionHandler>(ActionHandler, "application/json");

	}

	/**
	 * The method to update record locking configurations
	 * @param request An instance of BodyWrapper
	 * @returns An instance of APIResponse<ActionHandler>
	 * @throws SDKException
	 */
	public async updateRecordLockingConfigurations(request: BodyWrapper): Promise<APIResponse<ActionHandler>>	{
		let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
		let apiPath: string = '';
		apiPath = apiPath.concat("/crm/v8/settings/record_locking_configurations");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_PUT);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_UPDATE);
		handlerInstance.setContentType("application/json");
		handlerInstance.setRequest(request);
		handlerInstance.setMandatoryChecker(true);
		await handlerInstance.addParam(new Param<string>("module", "com.zoho.crm.api.RecordLockingConfiguration.UpdateRecordLockingConfigurationsParam"), this.module).catch(err => { throw err; });
		let ActionHandler = require.resolve("./action_handler");
		return handlerInstance.apiCall<ActionHandler>(ActionHandler, "application/json");

	}

	/**
	 * The method to update record locking configuration
	 * @param recordLockingConfigId A BigInt representing the recordLockingConfigId
	 * @param request An instance of BodyWrapper
	 * @returns An instance of APIResponse<ActionHandler>
	 * @throws SDKException
	 */
	public async updateRecordLockingConfiguration(recordLockingConfigId: bigint, request: BodyWrapper): Promise<APIResponse<ActionHandler>>	{
		let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
		let apiPath: string = '';
		apiPath = apiPath.concat("/crm/v8/settings/record_locking_configurations/");
		apiPath = apiPath.concat(recordLockingConfigId.toString());
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_PUT);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_UPDATE);
		handlerInstance.setContentType("application/json");
		handlerInstance.setRequest(request);
		handlerInstance.setMandatoryChecker(true);
		await handlerInstance.addParam(new Param<string>("module", "com.zoho.crm.api.RecordLockingConfiguration.UpdateRecordLockingConfigurationParam"), this.module).catch(err => { throw err; });
		let ActionHandler = require.resolve("./action_handler");
		return handlerInstance.apiCall<ActionHandler>(ActionHandler, "application/json");

	}

	/**
	 * The method to delete record locking configuration
	 * @param recordLockingConfigId A BigInt representing the recordLockingConfigId
	 * @returns An instance of APIResponse<ActionHandler>
	 * @throws SDKException
	 */
	public async deleteRecordLockingConfiguration(recordLockingConfigId: bigint): Promise<APIResponse<ActionHandler>>	{
		let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
		let apiPath: string = '';
		apiPath = apiPath.concat("/crm/v8/settings/record_locking_configurations/");
		apiPath = apiPath.concat(recordLockingConfigId.toString());
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_DELETE);
		handlerInstance.setCategoryMethod(Constants.REQUEST_METHOD_DELETE);
		await handlerInstance.addParam(new Param<string>("module", "com.zoho.crm.api.RecordLockingConfiguration.DeleteRecordLockingConfigurationParam"), this.module).catch(err => { throw err; });
		let ActionHandler = require.resolve("./action_handler");
		return handlerInstance.apiCall<ActionHandler>(ActionHandler, "application/json");

	}

}
class GetRecordLockingConfigurationsParam{

	public static FEATURE_TYPE: Param<string> = new Param<string>("feature_type", "com.zoho.crm.api.RecordLockingConfiguration.GetRecordLockingConfigurationsParam");
}

class AddRecordLockingConfigurationParam{

}

class UpdateRecordLockingConfigurationsParam{

}

class UpdateRecordLockingConfigurationParam{

}

class DeleteRecordLockingConfigurationParam{

}

export {
	UpdateRecordLockingConfigurationsParam as UpdateRecordLockingConfigurationsParam,
	UpdateRecordLockingConfigurationParam as UpdateRecordLockingConfigurationParam,
	RecordLockingConfigurationOperations as MasterModel,
	RecordLockingConfigurationOperations as RecordLockingConfigurationOperations,
	GetRecordLockingConfigurationsParam as GetRecordLockingConfigurationsParam,
	AddRecordLockingConfigurationParam as AddRecordLockingConfigurationParam,
	DeleteRecordLockingConfigurationParam as DeleteRecordLockingConfigurationParam
}
