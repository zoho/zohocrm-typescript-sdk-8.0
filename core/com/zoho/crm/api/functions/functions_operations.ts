import {BodyWrapper} from "./body_wrapper";
import {FileBodyWrapper} from "./file_body_wrapper";
import {ResponseWrapper} from "./response_wrapper";
import {Header} from "../../../../../../routes/header";
import {HeaderMap} from "../../../../../../routes/header_map";
import {Param} from "../../../../../../routes/param";
import {ParameterMap} from "../../../../../../routes/parameter_map";
import {SDKException} from "../exception/sdk_exception";
import {APIResponse} from "../../../../../../routes/controllers/api_response";
import {CommonAPIHandler} from "../../../../../../routes/middlewares/common_api_handler";
import { Constants } from "../../../../../../utils/util/constants";

class FunctionsOperations{

	private authType?: string;
	private functionName: string;
	private arguments1?: Map<string, any>;
	/**
	 * Creates an instance of FunctionsOperations with the given parameters
	 * @param functionName A String representing the functionName
	 * @param authType A String representing the authType
	 * @param arguments1 A Map representing the arguments1
	 */
	constructor(functionName: string, authType?: string, arguments1?: Map<string, any>){
		this.functionName = functionName;
		this.authType = authType;
		this.arguments1 = arguments1;

	}

	/**
	 * The method to execute function using request body
	 * @param request An instance of BodyWrapper
	 * @param paramInstance An instance of ParameterMap
	 * @param headerInstance An instance of HeaderMap
	 * @returns An instance of APIResponse<ResponseWrapper>
	 * @throws SDKException
	 */
	public async executeFunctionUsingRequestBody(request: BodyWrapper, paramInstance?: ParameterMap, headerInstance?: HeaderMap): Promise<APIResponse<ResponseWrapper>>	{
		let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
		let apiPath: string = '';
		apiPath = apiPath.concat("/crm/v8/functions/");
		apiPath = apiPath.concat(this.functionName.toString());
		apiPath = apiPath.concat("/actions/execute");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_POST);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_CREATE);
		handlerInstance.setContentType("application/json");
		handlerInstance.setRequest(request);
		handlerInstance.setMandatoryChecker(true);
		await handlerInstance.addParam(new Param<string>("auth_type", "com.zoho.crm.api.Functions.ExecuteFunctionUsingRequestBodyParam"), this.authType).catch(err => { throw err; });
		await handlerInstance.addParam(new Param<Map<string, any>>("arguments", "com.zoho.crm.api.Functions.ExecuteFunctionUsingRequestBodyParam"), this.arguments1).catch(err => { throw err; });
		handlerInstance.setParam(paramInstance);
		handlerInstance.setHeader(headerInstance);
		let ResponseWrapper = require.resolve("./response_wrapper");
		return handlerInstance.apiCall<ResponseWrapper>(ResponseWrapper, "application/json");

	}

	/**
	 * The method to execute function using parameters
	 * @param paramInstance An instance of ParameterMap
	 * @param headerInstance An instance of HeaderMap
	 * @returns An instance of APIResponse<ResponseWrapper>
	 * @throws SDKException
	 */
	public async executeFunctionUsingParameters(paramInstance?: ParameterMap, headerInstance?: HeaderMap): Promise<APIResponse<ResponseWrapper>>	{
		let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
		let apiPath: string = '';
		apiPath = apiPath.concat("/crm/v8/functions/");
		apiPath = apiPath.concat(this.functionName.toString());
		apiPath = apiPath.concat("/actions/execute");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
		await handlerInstance.addParam(new Param<string>("auth_type", "com.zoho.crm.api.Functions.ExecuteFunctionUsingParametersParam"), this.authType).catch(err => { throw err; });
		await handlerInstance.addParam(new Param<Map<string, any>>("arguments", "com.zoho.crm.api.Functions.ExecuteFunctionUsingParametersParam"), this.arguments1).catch(err => { throw err; });
		handlerInstance.setParam(paramInstance);
		handlerInstance.setHeader(headerInstance);
		let ResponseWrapper = require.resolve("./response_wrapper");
		return handlerInstance.apiCall<ResponseWrapper>(ResponseWrapper, "application/json");

	}

	/**
	 * The method to execute function using file
	 * @param request An instance of FileBodyWrapper
	 * @param paramInstance An instance of ParameterMap
	 * @param headerInstance An instance of HeaderMap
	 * @returns An instance of APIResponse<ResponseWrapper>
	 * @throws SDKException
	 */
	public async executeFunctionUsingFile(request: FileBodyWrapper, paramInstance?: ParameterMap, headerInstance?: HeaderMap): Promise<APIResponse<ResponseWrapper>>	{
		let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
		let apiPath: string = '';
		apiPath = apiPath.concat("/crm/v8/functions/");
		apiPath = apiPath.concat(this.functionName.toString());
		apiPath = apiPath.concat("/actions/execute");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_POST);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_CREATE);
		handlerInstance.setContentType("multipart/form-data");
		handlerInstance.setRequest(request);
		handlerInstance.setMandatoryChecker(true);
		await handlerInstance.addParam(new Param<string>("auth_type", "com.zoho.crm.api.Functions.ExecuteFunctionUsingFileParam"), this.authType).catch(err => { throw err; });
		await handlerInstance.addParam(new Param<Map<string, any>>("arguments", "com.zoho.crm.api.Functions.ExecuteFunctionUsingFileParam"), this.arguments1).catch(err => { throw err; });
		handlerInstance.setParam(paramInstance);
		handlerInstance.setHeader(headerInstance);
		let ResponseWrapper = require.resolve("./response_wrapper");
		return handlerInstance.apiCall<ResponseWrapper>(ResponseWrapper, "application/json");

	}

}
class ExecuteFunctionUsingRequestBodyParam{

	public static CUSTOM_FUNCTIONS_PARAM: Param<Map<string, any>> = new Param<Map<string, any>>("custom_functions_param", "com.zoho.crm.api.Functions.ExecuteFunctionUsingRequestBodyParam");
}

class ExecuteFunctionUsingRequestBodyHeader{

	public static CUSTOM_FUNCTIONS_HEADER: Header<Map<string, any>> = new Header<Map<string, any>>("custom_functions_header", "com.zoho.crm.api.Functions.ExecuteFunctionUsingRequestBodyHeader");
}

class ExecuteFunctionUsingParametersParam{

	public static GET_CUSTOM_FUNCTIONS_PARAM: Param<Map<string, any>> = new Param<Map<string, any>>("get_custom_functions_param", "com.zoho.crm.api.Functions.ExecuteFunctionUsingParametersParam");
}

class ExecuteFunctionUsingParametersHeader{

	public static GET_CUSTOM_FUNCTIONS_HEADER: Header<Map<string, any>> = new Header<Map<string, any>>("get_custom_functions_header", "com.zoho.crm.api.Functions.ExecuteFunctionUsingParametersHeader");
}

class ExecuteFunctionUsingFileParam{

	public static UPLOAD_FILE_PARAM: Param<Map<string, any>> = new Param<Map<string, any>>("upload_file_param", "com.zoho.crm.api.Functions.ExecuteFunctionUsingFileParam");
}

class ExecuteFunctionUsingFileHeader{

	public static UPLOAD_FILE_HEADER: Header<Map<string, any>> = new Header<Map<string, any>>("upload_file_header", "com.zoho.crm.api.Functions.ExecuteFunctionUsingFileHeader");
}

export {
	ExecuteFunctionUsingFileParam as ExecuteFunctionUsingFileParam,
	ExecuteFunctionUsingParametersHeader as ExecuteFunctionUsingParametersHeader,
	ExecuteFunctionUsingRequestBodyHeader as ExecuteFunctionUsingRequestBodyHeader,
	ExecuteFunctionUsingFileHeader as ExecuteFunctionUsingFileHeader,
	ExecuteFunctionUsingParametersParam as ExecuteFunctionUsingParametersParam,
	FunctionsOperations as MasterModel,
	FunctionsOperations as FunctionsOperations,
	ExecuteFunctionUsingRequestBodyParam as ExecuteFunctionUsingRequestBodyParam
}
