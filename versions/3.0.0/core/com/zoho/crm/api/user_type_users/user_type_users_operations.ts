import {Param} from "../../../../../../routes/param";
import {ParameterMap} from "../../../../../../routes/parameter_map";
import {ActionHandler} from "./action_handler";
import {ResponseHandler} from "./response_handler";
import {StatusActionHandler} from "./status_action_handler";
import {SDKException} from "../exception/sdk_exception";
import {APIResponse} from "../../../../../../routes/controllers/api_response";
import {CommonAPIHandler} from "../../../../../../routes/middlewares/common_api_handler";
import { Constants } from "../../../../../../utils/util/constants";

class UserTypeUsersOperations{

	private portalName: string;
	private userTypeId: bigint;
	/**
	 * Creates an instance of UserTypeUsersOperations with the given parameters
	 * @param userTypeId A BigInt representing the userTypeId
	 * @param portalName A String representing the portalName
	 */
	constructor(userTypeId: bigint, portalName: string){
		this.userTypeId = userTypeId;
		this.portalName = portalName;

	}

	/**
	 * The method to get users of user type
	 * @param paramInstance An instance of ParameterMap
	 * @returns An instance of APIResponse<ResponseHandler>
	 * @throws SDKException
	 */
	public async getUsersOfUserType(paramInstance?: ParameterMap): Promise<APIResponse<ResponseHandler>>	{
		let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
		let apiPath: string = '';
		apiPath = apiPath.concat("/crm/v8/settings/portals/");
		apiPath = apiPath.concat(this.portalName.toString());
		apiPath = apiPath.concat("/user_type/");
		apiPath = apiPath.concat(this.userTypeId.toString());
		apiPath = apiPath.concat("/users");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
		handlerInstance.setParam(paramInstance);
		let ResponseHandler = require.resolve("./response_handler");
		return handlerInstance.apiCall<ResponseHandler>(ResponseHandler, "application/json");

	}

	/**
	 * The method to delete user from the portal
	 * @param paramInstance An instance of ParameterMap
	 * @returns An instance of APIResponse<ActionHandler>
	 * @throws SDKException
	 */
	public async deleteUserFromThePortal(paramInstance?: ParameterMap): Promise<APIResponse<ActionHandler>>	{
		let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
		let apiPath: string = '';
		apiPath = apiPath.concat("/crm/v8/settings/portals/");
		apiPath = apiPath.concat(this.portalName.toString());
		apiPath = apiPath.concat("/user_type/");
		apiPath = apiPath.concat(this.userTypeId.toString());
		apiPath = apiPath.concat("/users");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_DELETE);
		handlerInstance.setCategoryMethod(Constants.REQUEST_METHOD_DELETE);
		handlerInstance.setParam(paramInstance);
		let ActionHandler = require.resolve("./action_handler");
		return handlerInstance.apiCall<ActionHandler>(ActionHandler, "application/json");

	}

	/**
	 * The method to transfer users of a user type
	 * @param paramInstance An instance of ParameterMap
	 * @returns An instance of APIResponse<ActionHandler>
	 * @throws SDKException
	 */
	public async transferUsersOfAUserType(paramInstance?: ParameterMap): Promise<APIResponse<ActionHandler>>	{
		let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
		let apiPath: string = '';
		apiPath = apiPath.concat("/crm/v8/settings/portals/");
		apiPath = apiPath.concat(this.portalName.toString());
		apiPath = apiPath.concat("/user_type/");
		apiPath = apiPath.concat(this.userTypeId.toString());
		apiPath = apiPath.concat("/users/action/transfer");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_POST);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_CREATE);
		handlerInstance.setMandatoryChecker(true);
		handlerInstance.setParam(paramInstance);
		let ActionHandler = require.resolve("./action_handler");
		return handlerInstance.apiCall<ActionHandler>(ActionHandler, "application/json");

	}

	/**
	 * The method to change users status
	 * @param userId A BigInt representing the userId
	 * @param paramInstance An instance of ParameterMap
	 * @returns An instance of APIResponse<StatusActionHandler>
	 * @throws SDKException
	 */
	public async changeUsersStatus(userId: bigint, paramInstance?: ParameterMap): Promise<APIResponse<StatusActionHandler>>	{
		let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
		let apiPath: string = '';
		apiPath = apiPath.concat("/crm/v8/settings/portals/");
		apiPath = apiPath.concat(this.portalName.toString());
		apiPath = apiPath.concat("/user_type/");
		apiPath = apiPath.concat(this.userTypeId.toString());
		apiPath = apiPath.concat("/users/");
		apiPath = apiPath.concat(userId.toString());
		apiPath = apiPath.concat("/actions/change_status");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_PUT);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_UPDATE);
		handlerInstance.setMandatoryChecker(true);
		handlerInstance.setParam(paramInstance);
		let StatusActionHandler = require.resolve("./status_action_handler");
		return handlerInstance.apiCall<StatusActionHandler>(StatusActionHandler, "application/json");

	}

}
class GetUsersOfUserTypeParam{

	public static FILTERS: Param<string> = new Param<string>("filters", "com.zoho.crm.api.UserTypeUsers.GetUsersOfUserTypeParam");
	public static TYPE: Param<string> = new Param<string>("type", "com.zoho.crm.api.UserTypeUsers.GetUsersOfUserTypeParam");
}

class DeleteUserFromThePortalParam{

	public static PERSONALITY_IDS: Param<string> = new Param<string>("personality_ids", "com.zoho.crm.api.UserTypeUsers.DeleteUserFromThePortalParam");
}

class TransferUsersOfAUserTypeParam{

	public static PERSONALITY_IDS: Param<string> = new Param<string>("personality_ids", "com.zoho.crm.api.UserTypeUsers.TransferUsersOfAUserTypeParam");
	public static TRANSFER_TO: Param<string> = new Param<string>("transfer_To", "com.zoho.crm.api.UserTypeUsers.TransferUsersOfAUserTypeParam");
}

class ChangeUsersStatusParam{

	public static ACTIVE: Param<boolean> = new Param<boolean>("active", "com.zoho.crm.api.UserTypeUsers.ChangeUsersStatusParam");
}

export {
	GetUsersOfUserTypeParam as GetUsersOfUserTypeParam,
	TransferUsersOfAUserTypeParam as TransferUsersOfAUserTypeParam,
	ChangeUsersStatusParam as ChangeUsersStatusParam,
	DeleteUserFromThePortalParam as DeleteUserFromThePortalParam,
	UserTypeUsersOperations as MasterModel,
	UserTypeUsersOperations as UserTypeUsersOperations
}
