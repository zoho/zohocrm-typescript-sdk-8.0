import {ResponseHandler} from "./response_handler";
import {Param} from "../../../../../../routes/param";
import {ParameterMap} from "../../../../../../routes/parameter_map";
import {SDKException} from "../exception/sdk_exception";
import {APIResponse} from "../../../../../../routes/controllers/api_response";
import {CommonAPIHandler} from "../../../../../../routes/middlewares/common_api_handler";
import { Constants } from "../../../../../../utils/util/constants";

class EmailTemplatesOperations{
	/**
	 * The method to get email templates
	 * @param paramInstance An instance of ParameterMap
	 * @returns An instance of APIResponse<ResponseHandler>
	 * @throws SDKException
	 */
	public async getEmailTemplates(paramInstance?: ParameterMap): Promise<APIResponse<ResponseHandler>>	{
		let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
		let apiPath: string = '';
		apiPath = apiPath.concat("/crm/v8/settings/email_templates");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
		handlerInstance.setParam(paramInstance);
		let ResponseHandler = require.resolve("./response_handler");
		return handlerInstance.apiCall<ResponseHandler>(ResponseHandler, "application/json");

	}

	/**
	 * The method to get email template
	 * @param template A BigInt representing the template
	 * @returns An instance of APIResponse<ResponseHandler>
	 * @throws SDKException
	 */
	public async getEmailTemplate(template: bigint): Promise<APIResponse<ResponseHandler>>	{
		let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
		let apiPath: string = '';
		apiPath = apiPath.concat("/crm/v8/settings/email_templates/");
		apiPath = apiPath.concat(template.toString());
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
		let ResponseHandler = require.resolve("./response_handler");
		return handlerInstance.apiCall<ResponseHandler>(ResponseHandler, "application/json");

	}

}
class GetEmailTemplatesParam{

	public static MODULE: Param<string> = new Param<string>("module", "com.zoho.crm.api.EmailTemplates.GetEmailTemplatesParam");
	public static CATEGORY: Param<string> = new Param<string>("category", "com.zoho.crm.api.EmailTemplates.GetEmailTemplatesParam");
	public static SORT_BY: Param<string> = new Param<string>("sort_by", "com.zoho.crm.api.EmailTemplates.GetEmailTemplatesParam");
	public static SORT_ORDER: Param<string> = new Param<string>("sort_order", "com.zoho.crm.api.EmailTemplates.GetEmailTemplatesParam");
	public static FILTERS: Param<string> = new Param<string>("filters", "com.zoho.crm.api.EmailTemplates.GetEmailTemplatesParam");
}

export {
	EmailTemplatesOperations as MasterModel,
	EmailTemplatesOperations as EmailTemplatesOperations,
	GetEmailTemplatesParam as GetEmailTemplatesParam
}
