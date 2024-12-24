import {ResponseHandler} from "./response_handler";
import {Param} from "../../../../../../routes/param";
import {SDKException} from "../exception/sdk_exception";
import {APIResponse} from "../../../../../../routes/controllers/api_response";
import {CommonAPIHandler} from "../../../../../../routes/middlewares/common_api_handler";
import { Constants } from "../../../../../../utils/util/constants";

class APIsOperations{

	private filters?: string;
	/**
	 * Creates an instance of ApisOperations with the given parameters
	 * @param filters A String representing the filters
	 */
	constructor(filters?: string){
		this.filters = filters;

	}

	/**
	 * The method to get supported api
	 * @returns An instance of APIResponse<ResponseHandler>
	 * @throws SDKException
	 */
	public async getSupportedAPI(): Promise<APIResponse<ResponseHandler>>	{
		let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
		let apiPath: string = '';
		apiPath = apiPath.concat("/crm/v8/__apis");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
		await handlerInstance.addParam(new Param<string>("filters", "com.zoho.crm.api.Apis.GetSupportedAPIParam"), this.filters).catch(err => { throw err; });
		let ResponseHandler = require.resolve("./response_handler");
		return handlerInstance.apiCall<ResponseHandler>(ResponseHandler, "application/json");

	}

}
class GetSupportedAPIParam{

}

export {
	APIsOperations as MasterModel,
	APIsOperations as APIsOperations,
	GetSupportedAPIParam as GetSupportedAPIParam
}
