import {ResponseHandler} from "./response_handler";
import {Param} from "../../../../../../routes/param";
import {SDKException} from "../exception/sdk_exception";
import {APIResponse} from "../../../../../../routes/controllers/api_response";
import {CommonAPIHandler} from "../../../../../../routes/middlewares/common_api_handler";
import { Constants } from "../../../../../../utils/util/constants";

class FromAddressesOperations{

	private userId?: string;
	/**
	 * Creates an instance of FromAddressesOperations with the given parameters
	 * @param userId A String representing the userId
	 */
	constructor(userId?: string){
		this.userId = userId;

	}

	/**
	 * The method to get from addresses
	 * @returns An instance of APIResponse<ResponseHandler>
	 * @throws SDKException
	 */
	public async getFromAddresses(): Promise<APIResponse<ResponseHandler>>	{
		let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
		let apiPath: string = '';
		apiPath = apiPath.concat("/crm/v8/settings/emails/actions/from_addresses");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
		await handlerInstance.addParam(new Param<string>("user_id", "com.zoho.crm.api.FromAddresses.GetFromAddressesParam"), this.userId).catch(err => { throw err; });
		let ResponseHandler = require.resolve("./response_handler");
		return handlerInstance.apiCall<ResponseHandler>(ResponseHandler, "application/json");

	}

}
class GetFromAddressesParam{

}

export {
	GetFromAddressesParam as GetFromAddressesParam,
	FromAddressesOperations as MasterModel,
	FromAddressesOperations as FromAddressesOperations
}
