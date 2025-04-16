import {ActionResponse} from "./action_response";
import {BodyWrapper} from "./body_wrapper";
import {ResponseHandler} from "./response_handler";
import {Param} from "../../../../../../routes/param";
import {ParameterMap} from "../../../../../../routes/parameter_map";
import {SDKException} from "../exception/sdk_exception";
import {APIResponse} from "../../../../../../routes/controllers/api_response";
import {CommonAPIHandler} from "../../../../../../routes/middlewares/common_api_handler";
import { Constants } from "../../../../../../utils/util/constants";

class InventoryMassConvertOperations{

	private moduleAPIName: string;
	/**
	 * Creates an instance of InventoryMassConvertOperations with the given parameters
	 * @param moduleAPIName A String representing the moduleAPIName
	 */
	constructor(moduleAPIName: string){
		this.moduleAPIName = moduleAPIName;

	}

	/**
	 * The method to mass inventory convert
	 * @param request An instance of BodyWrapper
	 * @returns An instance of APIResponse<ActionResponse>
	 * @throws SDKException
	 */
	public async massInventoryConvert(request: BodyWrapper): Promise<APIResponse<ActionResponse>>	{
		let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
		let apiPath: string = '';
		apiPath = apiPath.concat("/crm/v8/");
		apiPath = apiPath.concat(this.moduleAPIName.toString());
		apiPath = apiPath.concat("/actions/mass_convert");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_POST);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_CREATE);
		handlerInstance.setContentType("application/json");
		handlerInstance.setRequest(request);
		handlerInstance.setMandatoryChecker(true);
		let ActionResponse = require.resolve("./action_response");
		return handlerInstance.apiCall<ActionResponse>(ActionResponse, "application/json");

	}

	/**
	 * The method to get scheduled jobs details
	 * @param paramInstance An instance of ParameterMap
	 * @returns An instance of APIResponse<ResponseHandler>
	 * @throws SDKException
	 */
	public async getScheduledJobsDetails(paramInstance?: ParameterMap): Promise<APIResponse<ResponseHandler>>	{
		let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
		let apiPath: string = '';
		apiPath = apiPath.concat("/crm/v8/");
		apiPath = apiPath.concat(this.moduleAPIName.toString());
		apiPath = apiPath.concat("/actions/mass_convert");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_ACTION);
		handlerInstance.setParam(paramInstance);
		let ResponseHandler = require.resolve("./response_handler");
		return handlerInstance.apiCall<ResponseHandler>(ResponseHandler, "application/json");

	}

}
class GetScheduledJobsDetailsParam{

	public static JOB_ID: Param<bigint> = new Param<bigint>("job_id", "com.zoho.crm.api.InventoryMassConvert.GetScheduledJobsDetailsParam");
}

export {
	GetScheduledJobsDetailsParam as GetScheduledJobsDetailsParam,
	InventoryMassConvertOperations as MasterModel,
	InventoryMassConvertOperations as InventoryMassConvertOperations
}
