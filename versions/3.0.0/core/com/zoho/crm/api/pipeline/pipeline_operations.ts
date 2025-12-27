import {Param} from "../../../../../../routes/param";
import {ActionHandler} from "./action_handler";
import {BodyWrapper} from "./body_wrapper";
import {DPipelineWrapper} from "./d_pipeline_wrapper";
import {ResponseHandler} from "./response_handler";
import {TransferPipelineActionHandler} from "./transfer_pipeline_action_handler";
import {TransferPipelineWrapper} from "./transfer_pipeline_wrapper";
import {SDKException} from "../exception/sdk_exception";
import {APIResponse} from "../../../../../../routes/controllers/api_response";
import {CommonAPIHandler} from "../../../../../../routes/middlewares/common_api_handler";
import { Constants } from "../../../../../../utils/util/constants";

class PipelineOperations{

	private layoutId?: bigint;
	/**
	 * Creates an instance of PipelineOperations with the given parameters
	 * @param layoutId A BigInt representing the layoutId
	 */
	constructor(layoutId?: bigint){
		this.layoutId = layoutId;

	}

	/**
	 * The method to get pipelines
	 * @returns An instance of APIResponse<ResponseHandler>
	 * @throws SDKException
	 */
	public async getPipelines(): Promise<APIResponse<ResponseHandler>>	{
		let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
		let apiPath: string = '';
		apiPath = apiPath.concat("/crm/v8/settings/pipeline");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
		await handlerInstance.addParam(new Param<bigint>("layout_id", "com.zoho.crm.api.Pipeline.GetPipelinesParam"), this.layoutId).catch(err => { throw err; });
		let ResponseHandler = require.resolve("./response_handler");
		return handlerInstance.apiCall<ResponseHandler>(ResponseHandler, "application/json");

	}

	/**
	 * The method to create pipeline
	 * @param request An instance of BodyWrapper
	 * @returns An instance of APIResponse<ActionHandler>
	 * @throws SDKException
	 */
	public async createPipeline(request: BodyWrapper): Promise<APIResponse<ActionHandler>>	{
		let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
		let apiPath: string = '';
		apiPath = apiPath.concat("/crm/v8/settings/pipeline");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_POST);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_CREATE);
		handlerInstance.setContentType("application/json");
		handlerInstance.setRequest(request);
		handlerInstance.setMandatoryChecker(true);
		await handlerInstance.addParam(new Param<bigint>("layout_id", "com.zoho.crm.api.Pipeline.CreatePipelineParam"), this.layoutId).catch(err => { throw err; });
		let ActionHandler = require.resolve("./action_handler");
		return handlerInstance.apiCall<ActionHandler>(ActionHandler, "application/json");

	}

	/**
	 * The method to update pipelines
	 * @param request An instance of BodyWrapper
	 * @returns An instance of APIResponse<ActionHandler>
	 * @throws SDKException
	 */
	public async updatePipelines(request: BodyWrapper): Promise<APIResponse<ActionHandler>>	{
		let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
		let apiPath: string = '';
		apiPath = apiPath.concat("/crm/v8/settings/pipeline");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_PUT);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_UPDATE);
		handlerInstance.setContentType("application/json");
		handlerInstance.setRequest(request);
		handlerInstance.setMandatoryChecker(true);
		await handlerInstance.addParam(new Param<bigint>("layout_id", "com.zoho.crm.api.Pipeline.UpdatePipelinesParam"), this.layoutId).catch(err => { throw err; });
		let ActionHandler = require.resolve("./action_handler");
		return handlerInstance.apiCall<ActionHandler>(ActionHandler, "application/json");

	}

	/**
	 * The method to get pipeline
	 * @param id A BigInt representing the id
	 * @returns An instance of APIResponse<ResponseHandler>
	 * @throws SDKException
	 */
	public async getPipeline(id: bigint): Promise<APIResponse<ResponseHandler>>	{
		let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
		let apiPath: string = '';
		apiPath = apiPath.concat("/crm/v8/settings/pipeline/");
		apiPath = apiPath.concat(id.toString());
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
		await handlerInstance.addParam(new Param<bigint>("layout_id", "com.zoho.crm.api.Pipeline.GetPipelineParam"), this.layoutId).catch(err => { throw err; });
		let ResponseHandler = require.resolve("./response_handler");
		return handlerInstance.apiCall<ResponseHandler>(ResponseHandler, "application/json");

	}

	/**
	 * The method to update pipeline
	 * @param id A BigInt representing the id
	 * @param request An instance of BodyWrapper
	 * @returns An instance of APIResponse<ActionHandler>
	 * @throws SDKException
	 */
	public async updatePipeline(id: bigint, request: BodyWrapper): Promise<APIResponse<ActionHandler>>	{
		let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
		let apiPath: string = '';
		apiPath = apiPath.concat("/crm/v8/settings/pipeline/");
		apiPath = apiPath.concat(id.toString());
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_PUT);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_UPDATE);
		handlerInstance.setContentType("application/json");
		handlerInstance.setRequest(request);
		await handlerInstance.addParam(new Param<bigint>("layout_id", "com.zoho.crm.api.Pipeline.UpdatePipelineParam"), this.layoutId).catch(err => { throw err; });
		let ActionHandler = require.resolve("./action_handler");
		return handlerInstance.apiCall<ActionHandler>(ActionHandler, "application/json");

	}

	/**
	 * The method to delete pipeline
	 * @param id A BigInt representing the id
	 * @param request An instance of DPipelineWrapper
	 * @returns An instance of APIResponse<ActionHandler>
	 * @throws SDKException
	 */
	public async deletePipeline(id: bigint, request: DPipelineWrapper): Promise<APIResponse<ActionHandler>>	{
		let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
		let apiPath: string = '';
		apiPath = apiPath.concat("/crm/v8/settings/pipeline/");
		apiPath = apiPath.concat(id.toString());
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_PATCH);
		handlerInstance.setCategoryMethod(Constants.REQUEST_METHOD_DELETE);
		handlerInstance.setContentType("application/json");
		handlerInstance.setRequest(request);
		await handlerInstance.addParam(new Param<bigint>("layout_id", "com.zoho.crm.api.Pipeline.DeletePipelineParam"), this.layoutId).catch(err => { throw err; });
		let ActionHandler = require.resolve("./action_handler");
		return handlerInstance.apiCall<ActionHandler>(ActionHandler, "application/json");

	}

	/**
	 * The method to transfer pipelines
	 * @param request An instance of TransferPipelineWrapper
	 * @returns An instance of APIResponse<TransferPipelineActionHandler>
	 * @throws SDKException
	 */
	public async transferPipelines(request: TransferPipelineWrapper): Promise<APIResponse<TransferPipelineActionHandler>>	{
		let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
		let apiPath: string = '';
		apiPath = apiPath.concat("/crm/v8/settings/pipeline/actions/transfer");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_POST);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_ACTION);
		handlerInstance.setContentType("application/json");
		handlerInstance.setRequest(request);
		await handlerInstance.addParam(new Param<bigint>("layout_id", "com.zoho.crm.api.Pipeline.TransferPipelinesParam"), this.layoutId).catch(err => { throw err; });
		let TransferPipelineActionHandler = require.resolve("./transfer_pipeline_action_handler");
		return handlerInstance.apiCall<TransferPipelineActionHandler>(TransferPipelineActionHandler, "application/json");

	}

}
class GetPipelinesParam{

}

class CreatePipelineParam{

}

class UpdatePipelinesParam{

}

class GetPipelineParam{

}

class UpdatePipelineParam{

}

class DeletePipelineParam{

}

class TransferPipelinesParam{

}

export {
	DeletePipelineParam as DeletePipelineParam,
	TransferPipelinesParam as TransferPipelinesParam,
	GetPipelineParam as GetPipelineParam,
	GetPipelinesParam as GetPipelinesParam,
	PipelineOperations as MasterModel,
	PipelineOperations as PipelineOperations,
	UpdatePipelinesParam as UpdatePipelinesParam,
	UpdatePipelineParam as UpdatePipelineParam,
	CreatePipelineParam as CreatePipelineParam
}
