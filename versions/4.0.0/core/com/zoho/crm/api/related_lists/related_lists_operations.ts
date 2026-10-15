import {Param} from "../../../../../../routes/param";
import {ParameterMap} from "../../../../../../routes/parameter_map";
import {ResponseHandler} from "./response_handler";
import {SDKException} from "../exception/sdk_exception";
import {APIResponse} from "../../../../../../routes/controllers/api_response";
import {CommonAPIHandler} from "../../../../../../routes/middlewares/common_api_handler";
import { Constants } from "../../../../../../utils/util/constants";

class RelatedListsOperations{

	private layoutId?: bigint;
	/**
	 * Creates an instance of RelatedListsOperations with the given parameters
	 * @param layoutId A BigInt representing the layoutId
	 */
	constructor(layoutId?: bigint){
		this.layoutId = layoutId;

	}

	/**
	 * The method to get related lists
	 * @param paramInstance An instance of ParameterMap
	 * @returns An instance of APIResponse<ResponseHandler>
	 * @throws SDKException
	 */
	public async getRelatedLists(paramInstance?: ParameterMap): Promise<APIResponse<ResponseHandler>>	{
		let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
		let apiPath: string = '';
		apiPath = apiPath.concat("/crm/v8/settings/related_lists");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
		await handlerInstance.addParam(new Param<bigint>("layout_id", "com.zoho.crm.api.RelatedLists.GetRelatedListsParam"), this.layoutId).catch(err => { throw err; });
		handlerInstance.setParam(paramInstance);
		let ResponseHandler = require.resolve("./response_handler");
		return handlerInstance.apiCall<ResponseHandler>(ResponseHandler, "application/json");

	}

	/**
	 * The method to get related list
	 * @param id A BigInt representing the id
	 * @param paramInstance An instance of ParameterMap
	 * @returns An instance of APIResponse<ResponseHandler>
	 * @throws SDKException
	 */
	public async getRelatedList(id: bigint, paramInstance?: ParameterMap): Promise<APIResponse<ResponseHandler>>	{
		let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
		let apiPath: string = '';
		apiPath = apiPath.concat("/crm/v8/settings/related_lists/");
		apiPath = apiPath.concat(id.toString());
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
		await handlerInstance.addParam(new Param<bigint>("layout_id", "com.zoho.crm.api.RelatedLists.GetRelatedListParam"), this.layoutId).catch(err => { throw err; });
		handlerInstance.setParam(paramInstance);
		let ResponseHandler = require.resolve("./response_handler");
		return handlerInstance.apiCall<ResponseHandler>(ResponseHandler, "application/json");

	}

}
class GetRelatedListsParam{

	public static MODULE: Param<string> = new Param<string>("module", "com.zoho.crm.api.RelatedLists.GetRelatedListsParam");
}

class GetRelatedListParam{

	public static MODULE: Param<string> = new Param<string>("module", "com.zoho.crm.api.RelatedLists.GetRelatedListParam");
}

export {
	GetRelatedListsParam as GetRelatedListsParam,
	RelatedListsOperations as MasterModel,
	RelatedListsOperations as RelatedListsOperations,
	GetRelatedListParam as GetRelatedListParam
}
