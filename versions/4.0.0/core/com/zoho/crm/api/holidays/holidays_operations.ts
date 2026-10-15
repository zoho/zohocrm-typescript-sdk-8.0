import {Header} from "../../../../../../routes/header";
import {ActionHandler} from "./action_handler";
import {BodyWrapper} from "./body_wrapper";
import {Holidays} from "./holidays";
import {ResponseHandler} from "./response_handler";
import {Param} from "../../../../../../routes/param";
import {ParameterMap} from "../../../../../../routes/parameter_map";
import {SDKException} from "../exception/sdk_exception";
import {APIResponse} from "../../../../../../routes/controllers/api_response";
import {Choice} from "../../../../../../utils/util/choice";
import {CommonAPIHandler} from "../../../../../../routes/middlewares/common_api_handler";
import { Constants } from "../../../../../../utils/util/constants";

class HolidaysOperations{

	private xCrmOrg?: string;
	/**
	 * Creates an instance of HolidaysOperations with the given parameters
	 * @param xCrmOrg A String representing the xCrmOrg
	 */
	constructor(xCrmOrg?: string){
		this.xCrmOrg = xCrmOrg;

	}

	/**
	 * The method to get holidays
	 * @param paramInstance An instance of ParameterMap
	 * @returns An instance of APIResponse<ResponseHandler>
	 * @throws SDKException
	 */
	public async getHolidays(paramInstance?: ParameterMap): Promise<APIResponse<ResponseHandler>>	{
		let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
		let apiPath: string = '';
		apiPath = apiPath.concat("/crm/v8/settings/holidays");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
		await handlerInstance.addHeader(new Header<string>("X-CRM-ORG", "com.zoho.crm.api.Holidays.GetHolidaysHeader"), this.xCrmOrg).catch(err => { throw err; });
		handlerInstance.setParam(paramInstance);
		let ResponseHandler = require.resolve("./response_handler");
		return handlerInstance.apiCall<ResponseHandler>(ResponseHandler, "application/json");

	}

	/**
	 * The method to create holidays
	 * @param request An instance of BodyWrapper
	 * @returns An instance of APIResponse<ActionHandler>
	 * @throws SDKException
	 */
	public async createHolidays(request: BodyWrapper): Promise<APIResponse<ActionHandler>>	{
		let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
		let apiPath: string = '';
		apiPath = apiPath.concat("/crm/v8/settings/holidays");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_POST);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_CREATE);
		handlerInstance.setContentType("application/json");
		handlerInstance.setRequest(request);
		handlerInstance.setMandatoryChecker(true);
		await handlerInstance.addHeader(new Header<string>("X-CRM-ORG", "com.zoho.crm.api.Holidays.CreateHolidaysHeader"), this.xCrmOrg).catch(err => { throw err; });
		let ActionHandler = require.resolve("./action_handler");
		return handlerInstance.apiCall<ActionHandler>(ActionHandler, "application/json");

	}

	/**
	 * The method to update holidays
	 * @param request An instance of Holidays
	 * @returns An instance of APIResponse<ActionHandler>
	 * @throws SDKException
	 */
	public async updateHolidays(request: Holidays): Promise<APIResponse<ActionHandler>>	{
		let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
		let apiPath: string = '';
		apiPath = apiPath.concat("/crm/v8/settings/holidays");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_PUT);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_UPDATE);
		handlerInstance.setContentType("application/json");
		handlerInstance.setRequest(request);
		handlerInstance.setMandatoryChecker(true);
		await handlerInstance.addHeader(new Header<string>("X-CRM-ORG", "com.zoho.crm.api.Holidays.UpdateHolidaysHeader"), this.xCrmOrg).catch(err => { throw err; });
		let ActionHandler = require.resolve("./action_handler");
		return handlerInstance.apiCall<ActionHandler>(ActionHandler, "application/json");

	}

	/**
	 * The method to update holiday
	 * @param holidayId A BigInt representing the holidayId
	 * @param request An instance of Holidays
	 * @returns An instance of APIResponse<ActionHandler>
	 * @throws SDKException
	 */
	public async updateHoliday(holidayId: bigint, request: Holidays): Promise<APIResponse<ActionHandler>>	{
		let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
		let apiPath: string = '';
		apiPath = apiPath.concat("/crm/v8/settings/holidays/");
		apiPath = apiPath.concat(holidayId.toString());
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_PUT);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_UPDATE);
		handlerInstance.setContentType("application/json");
		handlerInstance.setRequest(request);
		handlerInstance.setMandatoryChecker(true);
		await handlerInstance.addHeader(new Header<string>("X-CRM-ORG", "com.zoho.crm.api.Holidays.UpdateHolidayHeader"), this.xCrmOrg).catch(err => { throw err; });
		let ActionHandler = require.resolve("./action_handler");
		return handlerInstance.apiCall<ActionHandler>(ActionHandler, "application/json");

	}

	/**
	 * The method to get holiday
	 * @param holidayId A BigInt representing the holidayId
	 * @returns An instance of APIResponse<ResponseHandler>
	 * @throws SDKException
	 */
	public async getHoliday(holidayId: bigint): Promise<APIResponse<ResponseHandler>>	{
		let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
		let apiPath: string = '';
		apiPath = apiPath.concat("/crm/v8/settings/holidays/");
		apiPath = apiPath.concat(holidayId.toString());
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
		await handlerInstance.addHeader(new Header<string>("X-CRM-ORG", "com.zoho.crm.api.Holidays.GetHolidayHeader"), this.xCrmOrg).catch(err => { throw err; });
		let ResponseHandler = require.resolve("./response_handler");
		return handlerInstance.apiCall<ResponseHandler>(ResponseHandler, "application/json");

	}

	/**
	 * The method to delete holiday
	 * @param holidayId A BigInt representing the holidayId
	 * @returns An instance of APIResponse<ActionHandler>
	 * @throws SDKException
	 */
	public async deleteHoliday(holidayId: bigint): Promise<APIResponse<ActionHandler>>	{
		let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
		let apiPath: string = '';
		apiPath = apiPath.concat("/crm/v8/settings/holidays/");
		apiPath = apiPath.concat(holidayId.toString());
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_DELETE);
		handlerInstance.setCategoryMethod(Constants.REQUEST_METHOD_DELETE);
		await handlerInstance.addHeader(new Header<string>("X-CRM-ORG", "com.zoho.crm.api.Holidays.DeleteHolidayHeader"), this.xCrmOrg).catch(err => { throw err; });
		let ActionHandler = require.resolve("./action_handler");
		return handlerInstance.apiCall<ActionHandler>(ActionHandler, "application/json");

	}

}
class GetHolidaysHeader{

}

class GetHolidaysParam{

	public static YEAR: Param<number> = new Param<number>("year", "com.zoho.crm.api.Holidays.GetHolidaysParam");
	public static TYPE: Param<Choice<string>> = new Param<Choice<string>>("type", "com.zoho.crm.api.Holidays.GetHolidaysParam");
	public static SHIFT_ID: Param<bigint> = new Param<bigint>("shift_id", "com.zoho.crm.api.Holidays.GetHolidaysParam");
}

class CreateHolidaysHeader{

}

class UpdateHolidaysHeader{

}

class UpdateHolidayHeader{

}

class GetHolidayHeader{

}

class DeleteHolidayHeader{

}

export {
	HolidaysOperations as MasterModel,
	HolidaysOperations as HolidaysOperations,
	CreateHolidaysHeader as CreateHolidaysHeader,
	GetHolidayHeader as GetHolidayHeader,
	GetHolidaysHeader as GetHolidaysHeader,
	UpdateHolidayHeader as UpdateHolidayHeader,
	GetHolidaysParam as GetHolidaysParam,
	UpdateHolidaysHeader as UpdateHolidaysHeader,
	DeleteHolidayHeader as DeleteHolidayHeader
}
