import {ActionHandler} from "./action_handler";
import {BodyWrapper} from "./body_wrapper";
import {ResponseHandler} from "./response_handler";
import {Param} from "../../../../../../routes/param";
import {ParameterMap} from "../../../../../../routes/parameter_map";
import {SDKException} from "../exception/sdk_exception";
import {APIResponse} from "../../../../../../routes/controllers/api_response";
import {CommonAPIHandler} from "../../../../../../routes/middlewares/common_api_handler";
import {Utility} from "../../../../../../utils/util/utility";
import { Constants } from "../../../../../../utils/util/constants";

class DealContactRolesOperations{
	/**
	 * The method to get associated contact roles
	 * @param deal A BigInt representing the deal
	 * @param paramInstance An instance of ParameterMap
	 * @returns An instance of APIResponse<ResponseHandler>
	 * @throws SDKException
	 */
	public async getAssociatedContactRoles(deal: bigint, paramInstance?: ParameterMap): Promise<APIResponse<ResponseHandler>>	{
		let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
		let apiPath: string = '';
		apiPath = apiPath.concat("/crm/v8/Deals/");
		apiPath = apiPath.concat(deal.toString());
		apiPath = apiPath.concat("/Contact_Roles");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
		handlerInstance.setParam(paramInstance);
		handlerInstance.setModuleAPIName("Contacts");
		await Utility.getFields("Contacts", handlerInstance).catch(err => { throw err; });
		let ResponseHandler = require.resolve("./response_handler");
		return handlerInstance.apiCall<ResponseHandler>(ResponseHandler, "application/json");

	}

	/**
	 * The method to delete associated contact roles
	 * @param deal A BigInt representing the deal
	 * @param paramInstance An instance of ParameterMap
	 * @returns An instance of APIResponse<ActionHandler>
	 * @throws SDKException
	 */
	public async deleteAssociatedContactRoles(deal: bigint, paramInstance?: ParameterMap): Promise<APIResponse<ActionHandler>>	{
		let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
		let apiPath: string = '';
		apiPath = apiPath.concat("/crm/v8/Deals/");
		apiPath = apiPath.concat(deal.toString());
		apiPath = apiPath.concat("/Contact_Roles");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_DELETE);
		handlerInstance.setCategoryMethod(Constants.REQUEST_METHOD_DELETE);
		handlerInstance.setParam(paramInstance);
		let ActionHandler = require.resolve("./action_handler");
		return handlerInstance.apiCall<ActionHandler>(ActionHandler, "application/json");

	}

	/**
	 * The method to get associated contact roles specific to contact
	 * @param contact A BigInt representing the contact
	 * @param deal A BigInt representing the deal
	 * @returns An instance of APIResponse<ResponseHandler>
	 * @throws SDKException
	 */
	public async getAssociatedContactRolesSpecificToContact(contact: bigint, deal: bigint): Promise<APIResponse<ResponseHandler>>	{
		let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
		let apiPath: string = '';
		apiPath = apiPath.concat("/crm/v8/Deals/");
		apiPath = apiPath.concat(deal.toString());
		apiPath = apiPath.concat("/Contact_Roles/");
		apiPath = apiPath.concat(contact.toString());
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
		handlerInstance.setModuleAPIName("Contacts");
		await Utility.getFields("Contacts", handlerInstance).catch(err => { throw err; });
		let ResponseHandler = require.resolve("./response_handler");
		return handlerInstance.apiCall<ResponseHandler>(ResponseHandler, "application/json");

	}

	/**
	 * The method to associate contact role to deal
	 * @param contact A BigInt representing the contact
	 * @param deal A BigInt representing the deal
	 * @param request An instance of BodyWrapper
	 * @returns An instance of APIResponse<ActionHandler>
	 * @throws SDKException
	 */
	public async associateContactRoleToDeal(contact: bigint, deal: bigint, request: BodyWrapper): Promise<APIResponse<ActionHandler>>	{
		let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
		let apiPath: string = '';
		apiPath = apiPath.concat("/crm/v8/Deals/");
		apiPath = apiPath.concat(deal.toString());
		apiPath = apiPath.concat("/Contact_Roles/");
		apiPath = apiPath.concat(contact.toString());
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_PUT);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_UPDATE);
		handlerInstance.setContentType("application/json");
		handlerInstance.setRequest(request);
		handlerInstance.setMandatoryChecker(true);
		let ActionHandler = require.resolve("./action_handler");
		return handlerInstance.apiCall<ActionHandler>(ActionHandler, "application/json");

	}

	/**
	 * The method to delete contact role relation
	 * @param contact A BigInt representing the contact
	 * @param deal A BigInt representing the deal
	 * @returns An instance of APIResponse<ActionHandler>
	 * @throws SDKException
	 */
	public async deleteContactRoleRelation(contact: bigint, deal: bigint): Promise<APIResponse<ActionHandler>>	{
		let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
		let apiPath: string = '';
		apiPath = apiPath.concat("/crm/v8/Deals/");
		apiPath = apiPath.concat(deal.toString());
		apiPath = apiPath.concat("/Contact_Roles/");
		apiPath = apiPath.concat(contact.toString());
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_DELETE);
		handlerInstance.setCategoryMethod(Constants.REQUEST_METHOD_DELETE);
		let ActionHandler = require.resolve("./action_handler");
		return handlerInstance.apiCall<ActionHandler>(ActionHandler, "application/json");

	}

}
class GetAssociatedContactRolesParam{

	public static IDS: Param<string> = new Param<string>("ids", "com.zoho.crm.api.DealContactRoles.GetAssociatedContactRolesParam");
	public static FIELDS: Param<string> = new Param<string>("fields", "com.zoho.crm.api.DealContactRoles.GetAssociatedContactRolesParam");
}

class DeleteAssociatedContactRolesParam{

	public static IDS: Param<string> = new Param<string>("ids", "com.zoho.crm.api.DealContactRoles.DeleteAssociatedContactRolesParam");
}

export {
	GetAssociatedContactRolesParam as GetAssociatedContactRolesParam,
	DealContactRolesOperations as MasterModel,
	DealContactRolesOperations as DealContactRolesOperations,
	DeleteAssociatedContactRolesParam as DeleteAssociatedContactRolesParam
}
