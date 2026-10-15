import {ResponseHandler} from "./response_handler";
import {Header} from "../../../../../../routes/header";
import {HeaderMap} from "../../../../../../routes/header_map";
import {Param} from "../../../../../../routes/param";
import {ParameterMap} from "../../../../../../routes/parameter_map";
import {SDKException} from "../exception/sdk_exception";
import {APIResponse} from "../../../../../../routes/controllers/api_response";
import {CommonAPIHandler} from "../../../../../../routes/middlewares/common_api_handler";
import { Constants } from "../../../../../../utils/util/constants";

class EntityScoresOperations{

	private fields?: string;
	private cvid?: string;
	/**
	 * Creates an instance of EntityScoresOperations with the given parameters
	 * @param fields A String representing the fields
	 * @param cvid A String representing the cvid
	 */
	constructor(fields?: string, cvid?: string){
		this.fields = fields;
		this.cvid = cvid;

	}

	/**
	 * The method to get entity score
	 * @param recordId A BigInt representing the recordId
	 * @returns An instance of APIResponse<ResponseHandler>
	 * @throws SDKException
	 */
	public async getEntityScore(recordId: bigint): Promise<APIResponse<ResponseHandler>>	{
		let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
		let apiPath: string = '';
		apiPath = apiPath.concat("/crm/v8/Entity_Scores__s/");
		apiPath = apiPath.concat(recordId.toString());
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
		await handlerInstance.addParam(new Param<string>("fields", "com.zoho.crm.api.EntityScores.GetEntityScoreParam"), this.fields).catch(err => { throw err; });
		await handlerInstance.addParam(new Param<string>("cvid", "com.zoho.crm.api.EntityScores.GetEntityScoreParam"), this.cvid).catch(err => { throw err; });
		let ResponseHandler = require.resolve("./response_handler");
		return handlerInstance.apiCall<ResponseHandler>(ResponseHandler, "application/json");

	}

	/**
	 * The method to get entity scores
	 * @param paramInstance An instance of ParameterMap
	 * @param headerInstance An instance of HeaderMap
	 * @returns An instance of APIResponse<ResponseHandler>
	 * @throws SDKException
	 */
	public async getEntityScores(paramInstance?: ParameterMap, headerInstance?: HeaderMap): Promise<APIResponse<ResponseHandler>>	{
		let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
		let apiPath: string = '';
		apiPath = apiPath.concat("/crm/v8/Entity_Scores__s");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
		await handlerInstance.addParam(new Param<string>("fields", "com.zoho.crm.api.EntityScores.GetEntityScoresParam"), this.fields).catch(err => { throw err; });
		await handlerInstance.addParam(new Param<string>("cvid", "com.zoho.crm.api.EntityScores.GetEntityScoresParam"), this.cvid).catch(err => { throw err; });
		handlerInstance.setParam(paramInstance);
		handlerInstance.setHeader(headerInstance);
		let ResponseHandler = require.resolve("./response_handler");
		return handlerInstance.apiCall<ResponseHandler>(ResponseHandler, "application/json");

	}

}
class GetEntityScoreParam{

}

class GetEntityScoresParam{

	public static IDS: Param<string> = new Param<string>("ids", "com.zoho.crm.api.EntityScores.GetEntityScoresParam");
	public static SORT_BY: Param<string> = new Param<string>("sort_by", "com.zoho.crm.api.EntityScores.GetEntityScoresParam");
	public static SORT_ORDER: Param<string> = new Param<string>("sort_order", "com.zoho.crm.api.EntityScores.GetEntityScoresParam");
	public static PAGE: Param<number> = new Param<number>("page", "com.zoho.crm.api.EntityScores.GetEntityScoresParam");
	public static PER_PAGE: Param<number> = new Param<number>("per_page", "com.zoho.crm.api.EntityScores.GetEntityScoresParam");
	public static PAGE_TOKEN: Param<string> = new Param<string>("page_token", "com.zoho.crm.api.EntityScores.GetEntityScoresParam");
}

class GetEntityScoresHeader{

	public static IF_MODIFIED_SINCE: Header<Date> = new Header<Date>("If-Modified-Since", "com.zoho.crm.api.EntityScores.GetEntityScoresHeader");
}

export {
	GetEntityScoresHeader as GetEntityScoresHeader,
	GetEntityScoreParam as GetEntityScoreParam,
	EntityScoresOperations as MasterModel,
	EntityScoresOperations as EntityScoresOperations,
	GetEntityScoresParam as GetEntityScoresParam
}
