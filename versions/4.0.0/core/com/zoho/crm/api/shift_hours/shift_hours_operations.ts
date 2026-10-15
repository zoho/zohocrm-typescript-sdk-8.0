import {Header} from "../../../../../../routes/header";
import {ActionHandler} from "./action_handler";
import {BodyWrapper} from "./body_wrapper";
import {ResponseHandler} from "./response_handler";
import {SDKException} from "../exception/sdk_exception";
import {APIResponse} from "../../../../../../routes/controllers/api_response";
import {CommonAPIHandler} from "../../../../../../routes/middlewares/common_api_handler";
import { Constants } from "../../../../../../utils/util/constants";

class ShiftHoursOperations{

	private xCrmOrg?: string;
	/**
	 * Creates an instance of ShiftHoursOperations with the given parameters
	 * @param xCrmOrg A String representing the xCrmOrg
	 */
	constructor(xCrmOrg?: string){
		this.xCrmOrg = xCrmOrg;

	}

	/**
	 * The method to get shift hours
	 * @returns An instance of APIResponse<ResponseHandler>
	 * @throws SDKException
	 */
	public async getShiftHours(): Promise<APIResponse<ResponseHandler>>	{
		let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
		let apiPath: string = '';
		apiPath = apiPath.concat("/crm/v8/settings/business_hours/shift_hours");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
		await handlerInstance.addHeader(new Header<string>("X-CRM-ORG", "com.zoho.crm.api.ShiftHours.GetShiftHoursHeader"), this.xCrmOrg).catch(err => { throw err; });
		let ResponseHandler = require.resolve("./response_handler");
		return handlerInstance.apiCall<ResponseHandler>(ResponseHandler, "application/json");

	}

	/**
	 * The method to create shifts hours
	 * @param request An instance of BodyWrapper
	 * @returns An instance of APIResponse<ActionHandler>
	 * @throws SDKException
	 */
	public async createShiftsHours(request: BodyWrapper): Promise<APIResponse<ActionHandler>>	{
		let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
		let apiPath: string = '';
		apiPath = apiPath.concat("/crm/v8/settings/business_hours/shift_hours");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_POST);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_CREATE);
		handlerInstance.setContentType("application/json");
		handlerInstance.setRequest(request);
		handlerInstance.setMandatoryChecker(true);
		await handlerInstance.addHeader(new Header<string>("X-CRM-ORG", "com.zoho.crm.api.ShiftHours.CreateShiftsHoursHeader"), this.xCrmOrg).catch(err => { throw err; });
		let ActionHandler = require.resolve("./action_handler");
		return handlerInstance.apiCall<ActionHandler>(ActionHandler, "application/json");

	}

	/**
	 * The method to update shift hours
	 * @param request An instance of BodyWrapper
	 * @returns An instance of APIResponse<ActionHandler>
	 * @throws SDKException
	 */
	public async updateShiftHours(request: BodyWrapper): Promise<APIResponse<ActionHandler>>	{
		let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
		let apiPath: string = '';
		apiPath = apiPath.concat("/crm/v8/settings/business_hours/shift_hours");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_PUT);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_UPDATE);
		handlerInstance.setContentType("application/json");
		handlerInstance.setRequest(request);
		handlerInstance.setMandatoryChecker(true);
		await handlerInstance.addHeader(new Header<string>("X-CRM-ORG", "com.zoho.crm.api.ShiftHours.UpdateShiftHoursHeader"), this.xCrmOrg).catch(err => { throw err; });
		let ActionHandler = require.resolve("./action_handler");
		return handlerInstance.apiCall<ActionHandler>(ActionHandler, "application/json");

	}

	/**
	 * The method to get shift hour
	 * @param shiftId A BigInt representing the shiftId
	 * @returns An instance of APIResponse<ResponseHandler>
	 * @throws SDKException
	 */
	public async getShiftHour(shiftId: bigint): Promise<APIResponse<ResponseHandler>>	{
		let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
		let apiPath: string = '';
		apiPath = apiPath.concat("/crm/v8/settings/business_hours/shift_hours/");
		apiPath = apiPath.concat(shiftId.toString());
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
		await handlerInstance.addHeader(new Header<string>("X-CRM-ORG", "com.zoho.crm.api.ShiftHours.GetShiftHourHeader"), this.xCrmOrg).catch(err => { throw err; });
		let ResponseHandler = require.resolve("./response_handler");
		return handlerInstance.apiCall<ResponseHandler>(ResponseHandler, "application/json");

	}

	/**
	 * The method to update shift hour
	 * @param shiftId A BigInt representing the shiftId
	 * @param request An instance of BodyWrapper
	 * @returns An instance of APIResponse<ActionHandler>
	 * @throws SDKException
	 */
	public async updateShiftHour(shiftId: bigint, request: BodyWrapper): Promise<APIResponse<ActionHandler>>	{
		let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
		let apiPath: string = '';
		apiPath = apiPath.concat("/crm/v8/settings/business_hours/shift_hours/");
		apiPath = apiPath.concat(shiftId.toString());
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_PUT);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_UPDATE);
		handlerInstance.setContentType("application/json");
		handlerInstance.setRequest(request);
		handlerInstance.setMandatoryChecker(true);
		await handlerInstance.addHeader(new Header<string>("X-CRM-ORG", "com.zoho.crm.api.ShiftHours.UpdateShiftHourHeader"), this.xCrmOrg).catch(err => { throw err; });
		let ActionHandler = require.resolve("./action_handler");
		return handlerInstance.apiCall<ActionHandler>(ActionHandler, "application/json");

	}

	/**
	 * The method to delete shift hour
	 * @param shiftId A BigInt representing the shiftId
	 * @returns An instance of APIResponse<ActionHandler>
	 * @throws SDKException
	 */
	public async deleteShiftHour(shiftId: bigint): Promise<APIResponse<ActionHandler>>	{
		let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
		let apiPath: string = '';
		apiPath = apiPath.concat("/crm/v8/settings/business_hours/shift_hours/");
		apiPath = apiPath.concat(shiftId.toString());
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_DELETE);
		handlerInstance.setCategoryMethod(Constants.REQUEST_METHOD_DELETE);
		await handlerInstance.addHeader(new Header<string>("X-CRM-ORG", "com.zoho.crm.api.ShiftHours.DeleteShiftHourHeader"), this.xCrmOrg).catch(err => { throw err; });
		let ActionHandler = require.resolve("./action_handler");
		return handlerInstance.apiCall<ActionHandler>(ActionHandler, "application/json");

	}

}
class GetShiftHoursHeader{

}

class CreateShiftsHoursHeader{

}

class UpdateShiftHoursHeader{

}

class GetShiftHourHeader{

}

class UpdateShiftHourHeader{

}

class DeleteShiftHourHeader{

}

export {
	ShiftHoursOperations as MasterModel,
	ShiftHoursOperations as ShiftHoursOperations,
	UpdateShiftHourHeader as UpdateShiftHourHeader,
	DeleteShiftHourHeader as DeleteShiftHourHeader,
	GetShiftHourHeader as GetShiftHourHeader,
	UpdateShiftHoursHeader as UpdateShiftHoursHeader,
	GetShiftHoursHeader as GetShiftHoursHeader,
	CreateShiftsHoursHeader as CreateShiftsHoursHeader
}
