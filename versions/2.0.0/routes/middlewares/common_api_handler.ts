import { SDKException } from "../../core/com/zoho/crm/api/exception/sdk_exception";
import { Constants } from "../../utils/util/constants";
import { APIHTTPConnector } from "../controllers/api_http_connector";
import { Header } from "../header";
import { HeaderMap } from "../header_map";
import { Initializer } from "../initializer";
import { Param } from "../param";
import { ParameterMap } from "../parameter_map";
import * as Logger from "winston";
import * as path from "path";
import * as os from "os";
import { APIResponse } from "../controllers/api_response";
import { JSONConverter } from "../../utils/util/json_converter";
import { XMLConverter } from "../../utils/util/xml_converter";
import { FormDataConverter } from "../../utils/util/form_data_converter";
import { Downloader } from "../../utils/util/downloader";
import { Converter } from "../../utils/util/converter";
import { IncomingHttpHeaders } from "http";

/**
* This class is to process the API request and its response.
* Construct the objects that are to be sent as parameters or in the request body with the API.
* The Request parameter, header and body objects are constructed here.
* Process the response JSON and converts it to relevant objects in the library.
*/
class CommonAPIHandler {
	private apiPath: string;
	private param: ParameterMap = new ParameterMap();
	private headers: HeaderMap = new HeaderMap();
	private request: any;
	private httpMethod: string;
	private moduleAPIName: string | null = null;
	private contentType: string;
	private categoryMethod: string;
	private mandatoryChecker: boolean | null = null;

	/**
	 * This is a setter method to set an API request content type.
	 * @param {string} contentType - A String containing the API request content type.
	 */
	public setContentType(contentType: string) {
		this.contentType = contentType;
	}

	/**
	 * This is a setter method to set the API request URL.
	 * @param {string} apiPath - A String containing the API request URL.
	 */
	public setAPIPath(apiPath: string) {
		this.apiPath = apiPath;
	}

	/**
	 * This method is to add an API request parameter.
	 * @param {Param} paramInstance - A Param instance containing the API request parameter.
	 * @param {object} paramValue - An object containing the API request parameter value.
	 * @throws {SDKException}
	 */
	public async addParam<T>(paramInstance: Param<T>, paramValue: T) {
		if (paramValue === undefined || paramValue === null) {
			return;
		}
		if (this.param === null || this.param === undefined) {
			this.param = new ParameterMap();
		}
		await this.param.add(paramInstance, paramValue);
	}

	/**
	 * This method is to add an API request header.
	 * @param {Header} headerInstance - A Header instance containing the API request header.
	 * @param {object} headerValue - An object containing the API request header value.
	 * @throws {SDKException}
	 */
	public async addHeader<T>(headerInstance: Header<T>, headerValue: T) {
		if (headerValue === undefined || headerValue === null) {
			return;
		}
		if (this.headers === null || this.headers === undefined) {
			this.headers = new HeaderMap();
		}
		await this.headers.add(headerInstance, headerValue);
	}

	/**
	 * This is a setter method to set the API request parameter map.
	 * @param {ParameterMap} param - A ParameterMap class instance containing the API request parameter.
	 */
	public setParam(param: ParameterMap | undefined | null) {
		if (param == undefined || param == null) {
			return;
		}
		if (this.param.getParameterMap() != null && this.param.getParameterMap().size > 0) {
			param.getParameterMap().forEach((value: string, key: string) => {
				if (value !== undefined) {
					this.param.getParameterMap().set(key, value);
				}
			});
		} else {
			this.param = param;
		}
	}

	/**
	 * This is a getter method to get the Zoho CRM module API name.
	 * @returns A String representing the Zoho CRM module API name.
	 */
	public getModuleAPIName(): string | null {
		return this.moduleAPIName;
	}

	/**
	 * This is a setter method to set the Zoho CRM module API name.
	 * @param {string} moduleAPIName - A String containing the Zoho CRM module API name.
	 */
	public setModuleAPIName(moduleAPIName: string | null) {
		this.moduleAPIName = moduleAPIName;
	}

	/**
	 * This is a setter method to set the API request header map.
	 * @param {HeaderMap} header - A HeaderMap class instance containing the API request header.
	 */
	public setHeader(header: HeaderMap | undefined | null) {
		if (header === undefined || header === null) {
			return;
		}
		if (this.headers.getHeaderMap() != null && this.headers.getHeaderMap().size > 0) {
			header.getHeaderMap().forEach((value: string, key: string) => {
				if (value !== undefined) {
					this.headers.getHeaderMap().set(key, value);
				}
			});
		} else {
			this.headers = header;
		}
	}

	/**
	 * This is a setter method to set the API request body object.
	 * @param {object} request - An Object containing the API request body object.
	 */
	public setRequest(request: any) {
		this.request = request;
	}

	/**
	 * This is a setter method to set the HTTP API request method.
	 * @param {string} httpMethod - A String containing the HTTP API request method.
	 */
	public setHttpMethod(httpMethod: string) {
		this.httpMethod = httpMethod;
	}

	/**
	 * This method is used in constructing API request and response details. To make the Zoho CRM API calls.
	 * @param {string} className - A Class containing the method return type.
	 * @param {string} encodeType - A String containing the expected API response content type.
	 * @see APIHTTPConnector
	 * @returns {APIResponse} An instance of APIResponse representing the Zoho CRM API response
	 * @throws {SDKException}
	 */
	public async apiCall<T>(className: string, encodeType: string): Promise<APIResponse<T>> {
		let initializer = await Initializer.getInitializer().catch((err) => { throw err; });
		if (initializer == null) {
			throw new SDKException(Constants.SDK_UNINITIALIZATION_ERROR, Constants.SDK_UNINITIALIZATION_MESSAGE);
		}
		var connector = new APIHTTPConnector();
		try {
			await this.setAPIUrl(connector).catch((err) => { throw err; });
		} catch (error) {
			if (!(error instanceof SDKException)) {
				error = new SDKException(null, null, null, error);
			}
			Logger.error(Constants.SET_API_URL_EXCEPTION, error);
			throw error;
		}
		connector.setRequestMethod(this.httpMethod);
		connector.setContentType(this.contentType);
		if (this.headers != null && this.headers.getHeaderMap().size > 0) {
			connector.setHeaders(this.headers.getHeaderMap());
		}
		if (this.param != null && this.param.getParameterMap().size > 0) {
			connector.setParams(this.param.getParameterMap());
		}
		try {
			await initializer.getToken().authenticate(connector);
		} catch (error) {
			if (!(error instanceof SDKException)) {
				error = new SDKException(null, null, null, error);
			}
			Logger.error(Constants.AUTHENTICATION_EXCEPTION, error);
			throw error;
		}
		let baseName = className.replace(/\\/gm, '/').split('/')
		let fileName = path.basename(className).split('.').slice(0, -1).join('.');
		let index = baseName.indexOf(Constants.CORE);
		let packageNames = baseName.slice(index, baseName.length - 1);
		packageNames.push(fileName);
		var pack = packageNames.join("/");
		var converterInstance : Converter | null = null;
		if (this.contentType != null && Constants.IS_GENERATE_REQUEST_BODY.includes(this.httpMethod.toUpperCase())) {
			let requestObject = null;
			let baseName = pack.split("/");
			baseName.pop();
			try {
				converterInstance = this.getConverterClassInstance(this.contentType.toLowerCase())
				if (converterInstance !== null) {
					var classFileName = await converterInstance.getFileName(this.request.constructor.name).catch((err) => { throw err; });
					baseName.push(classFileName);
					requestObject = await converterInstance.formRequest(this.request, baseName.join("/"), null, null).catch((err) => { throw err; });
				}
			} catch (error) {
				if (!(error instanceof SDKException)) {
					error = new SDKException(null, null, null, error);
				}
				Logger.error(Constants.FORM_REQUEST_EXCEPTION, error);
				throw error;
			}
			if (requestObject !== null) {
				connector.setRequestBody(requestObject);
			}
		}
		try {
			connector.addHeader(Constants.ZOHO_SDK, os.platform() + "/" + os.release() + "/" + Constants.SDK_NAME + "/" + process.version + ":" + Constants.SDK_VERSION);
			let response = await connector.fireRequest(converterInstance).catch((err) => { throw err; });
			let headerMap = await this.getHeaders(response.headers).catch((err) => { throw err; });
			var returnObject = null;
			let responseJSON = null;
			if (response.headers.hasOwnProperty(Constants.CONTENT_TYPE_HEADER.toLowerCase())) {
				let contentTypeHeader: string | string[] | undefined = response.headers[Constants.CONTENT_TYPE_HEADER.toLowerCase()];
				if (contentTypeHeader !== undefined && !Array.isArray(contentTypeHeader)) {
					let contentType = contentTypeHeader.split(";")[0];
					converterInstance = this.getConverterClassInstance(contentType.toLowerCase());
					if (converterInstance !== null) {
						let responseObject : (object|null)[] | null = await converterInstance.getWrappedResponse(response, pack).catch((err) => { throw err; });
						if (responseObject != null) {
							if (responseObject[0] != null) {
								returnObject = responseObject[0];
							}
							if (responseObject.length == 2 && responseObject[1] != null) {
								responseJSON = responseObject[1];
							}
						}
					}
				}
			} else {
				Logger.info(Constants.API_ERROR_RESPONSE + response.statusCode.toString());
			}
			return new APIResponse<T>(headerMap, response.statusCode, returnObject, responseJSON);
		} catch (error) {
			if (!(error instanceof SDKException)) {
				error = new SDKException(null, null, null, error);
			}
			Logger.error(Constants.API_CALL_EXCEPTION, error);
			throw error;
		}
	}

	private async getHeaders(headers: IncomingHttpHeaders): Promise<Map<string, string>> {
		let headerMap: Map<string, string | undefined | string[]> = new Map<string, string | undefined | string[]>();
		if (Object.keys(headers).length > 0) {
			for (let key in headers) {
				headerMap.set(key, headers[key]);
			}
		}
		return headerMap as Map<string, string>;
	}

	/**
	 * This method is used to get a Converter class instance.
	 * @param {string} encodeType - A String containing the API response content type.
	 * @returns A Converter class instance.
	 */
	public getConverterClassInstance(encodeType: string): Converter | null {
		var type: Converter | null = null;
		switch (encodeType) {
			case "application/json":
			case "application/ld+json":
				type = new JSONConverter(this);
				break;
			case "application/xml":
			case "text/xml":
				type = new XMLConverter(this);
				break;
			case "multipart/form-data":
				type = new FormDataConverter(this);
				break;
			case "text/plain":
			case "image/png":
			case "image/jpeg":
			case "image/gif":
			case "image/tiff":
			case "image/tif":
			case "image/svg+xml":
			case "image/bmp":
			case "image/webp":
			case "text/csv":
			case "text/html":
			case "text/css":
			case "text/javascript":
			case "text/calendar":
			case "application/x-download":
			case "application/zip":
			case "application/pdf":
			case "application/java-archive":
			case "application/javascript":
			case "application/octet-stream":
			case "application/xhtml+xml":
			case "application/x-bzip":
			case "application/msword":
			case "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
			case "application/gzip":
			case "application/x-httpd-php":
			case "application/vnd.ms-powerpoint":
			case "application/vnd.rar":
			case "application/x-sh":
			case "application/x-tar":
			case "application/vnd.ms-excel":
			case "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":
			case "application/x-7z-compressed":
			case "audio/mpeg":
			case "audio/x-ms-wma":
			case "audio/vnd.rn-realaudio":
			case "audio/x-wav":
			case "audio/3gpp":
			case "audio/3gpp2":
			case "video/mpeg":
			case "video/mp4":
			case "video/webm":
			case "video/3gpp":
			case "video/3gpp2":
			case "font/ttf":
				type = new Downloader(this);
				break;
		}
		return type;
	}

	private async setAPIUrl(connector: APIHTTPConnector) {
		var apiPath: string = "";
		let initializer = await Initializer.getInitializer();
		if (this.apiPath.includes(Constants.HTTP)) {
			if (this.apiPath.includes(Constants.CONTENT_API_URL)) {
				apiPath = apiPath.concat(initializer.getEnvironment().getFileUploadUrl());
				try {
					const myURL = new URL(this.apiPath);
					apiPath = apiPath.concat(myURL.pathname);
				} catch (error) {
					throw new SDKException(Constants.INVALID_URL_ERROR, null, null, error);
				}
			} else {
				if (this.apiPath.substring(0, 1) === "/") {
					this.apiPath = this.apiPath.substring(1);
				}
				apiPath = apiPath.concat(this.apiPath);
			}
		}
		else {
			apiPath = apiPath.concat(initializer.getEnvironment().getUrl());
			apiPath = apiPath.concat(this.apiPath);
		}
		connector.setUrl(apiPath);
	}

	/**
	 * This is a getter method to get mandatoryChecker
	 * @returns {Boolean} - A Boolean value representing mandatoryChecker
	 */
	public isMandatoryChecker(): boolean | null {
		return this.mandatoryChecker;
	}

	/**
	 * This is a setter method to set mandatoryChecker
	 * @param {Bool} mandatoryChecker - A Boolean value
	 */
	public setMandatoryChecker(mandatoryChecker: boolean | null) {
		this.mandatoryChecker = mandatoryChecker;
	}

	/**
	 * This is a getter method to get the HTTP API request method.
	 * @returns {string} A String containing the HTTP API request method.
	 */
	public getHttpMethod(): string {
		return this.httpMethod;
	}

	/**
	 * This is a getter method to get categoryMethod
	 * @returns {String} - A String value representing categoryMethod
	 */
	public getCategoryMethod(): string {
		return this.categoryMethod;
	}

	/**
	 * This is a setter method to set categoryMethod
	 * @param {String} categoryMethod - A String value representing categoryMethod
	 */
	public setCategoryMethod(categoryMethod: string) {
		this.categoryMethod = categoryMethod;
	}

	/**
	 * This is a getter method to get the API request URL.
	 * @returns {String} A String containing the API request URL.
	 */
	public getAPIPath(): string {
		return this.apiPath;
	}
}

export {
	CommonAPIHandler as CommonAPIHandler,
	CommonAPIHandler as MasterModel
}