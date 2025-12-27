import {ActionResponse} from "./action_response";
import {BodyWrapper} from "./body_wrapper";
import {ResponseHandler} from "./response_handler";
import {Param} from "../../../../../../routes/param";
import {ParameterMap} from "../../../../../../routes/parameter_map";
import {SDKException} from "../exception/sdk_exception";
import {APIResponse} from "../../../../../../routes/controllers/api_response";
import {CommonAPIHandler} from "../../../../../../routes/middlewares/common_api_handler";
import {Utility} from "../../../../../../utils/util/utility";
import { Constants } from "../../../../../../utils/util/constants";

class MassConvertOperations{
	/**
	 * The method to mass convert
	 * @param request An instance of BodyWrapper
	 * @returns An instance of APIResponse<ActionResponse>
	 * @throws SDKException
	 */
	public async massConvert(request: BodyWrapper): Promise<APIResponse<ActionResponse>>	{
		let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
		let apiPath: string = '';
		apiPath = apiPath.concat("/crm/v8/Leads/actions/mass_convert");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_POST);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_CREATE);
		handlerInstance.setContentType("application/json");
		handlerInstance.setRequest(request);
		handlerInstance.setMandatoryChecker(true);
		handlerInstance.setModuleAPIName("Deals");
		await Utility.getFields("Deals", handlerInstance).catch(err => { throw err; });
		let ActionResponse = require.resolve("./action_response");
		return handlerInstance.apiCall<ActionResponse>(ActionResponse, "application/json");

	}

	/**
	 * The method to get job status
	 * @param paramInstance An instance of ParameterMap
	 * @returns An instance of APIResponse<ResponseHandler>
	 * @throws SDKException
	 */
	public async getJobStatus(paramInstance?: ParameterMap): Promise<APIResponse<ResponseHandler>>	{
		let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
		let apiPath: string = '';
		apiPath = apiPath.concat("/crm/v8/Leads/actions/mass_convert");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_ACTION);
		handlerInstance.setParam(paramInstance);
		let ResponseHandler = require.resolve("./response_handler");
		return handlerInstance.apiCall<ResponseHandler>(ResponseHandler, "application/json");

	}

}
class GetJobStatusParam{

	public static JOB_ID: Param<bigint> = new Param<bigint>("job_id", "com.zoho.crm.api.MassConvert.GetJobStatusParam");
}

export {
	GetJobStatusParam as GetJobStatusParam,
	MassConvertOperations as MasterModel,
	MassConvertOperations as MassConvertOperations
}
