import {ActionResponse} from "./action_response";
import {ResponseHandler} from "./response_handler";
import {ResponseWrapper} from "./response_wrapper";
import {Choice} from "../../../../../../utils/util/choice";
import {Model} from "../../../../../../utils/util/model";

class APIException implements Model, ActionResponse, ResponseWrapper, ResponseHandler{

	private code: Choice<string>;
	private details: Map<string, any>;
	private message: Choice<string>;
	private status: Choice<string>;
	private keyModified: Map<string, number> = new Map<string, number>();
	private errorMessage: Choice<string>;
	private errorCode: number;
	private xError: Choice<string>;
	private info: Choice<string>;
	private xInfo: Choice<string>;
	private httpStatus: string;
	/**
	 * The method to get the code
	 * @returns An instance of Choice<string>
	 */
	public getCode(): Choice<string>	{
		return this.code;

	}

	/**
	 * The method to set the value to code
	 * @param code An instance of Choice<string>
	 */
	public setCode(code: Choice<string>): void	{
		this.code = code;
		this.keyModified.set("code", 1);

	}

	/**
	 * The method to get the details
	 * @returns A Map representing the details
	 */
	public getDetails(): Map<string, any>	{
		return this.details;

	}

	/**
	 * The method to set the value to details
	 * @param details A Map representing the details
	 */
	public setDetails(details: Map<string, any>): void	{
		this.details = details;
		this.keyModified.set("details", 1);

	}

	/**
	 * The method to get the message
	 * @returns An instance of Choice<string>
	 */
	public getMessage(): Choice<string>	{
		return this.message;

	}

	/**
	 * The method to set the value to message
	 * @param message An instance of Choice<string>
	 */
	public setMessage(message: Choice<string>): void	{
		this.message = message;
		this.keyModified.set("message", 1);

	}

	/**
	 * The method to get the status
	 * @returns An instance of Choice<string>
	 */
	public getStatus(): Choice<string>	{
		return this.status;

	}

	/**
	 * The method to set the value to status
	 * @param status An instance of Choice<string>
	 */
	public setStatus(status: Choice<string>): void	{
		this.status = status;
		this.keyModified.set("status", 1);

	}

	/**
	 * The method to check if the user has modified the given key
	 * @param key A String representing the key
	 * @returns A number representing the modification
	 */
	public isKeyModified(key: string): number | null | undefined	{
		if(this.keyModified.has(key))	{
			return this.keyModified.get(key);
		}
		return null;

	}

	/**
	 * The method to mark the given key as modified
	 * @param key A String representing the key
	 * @param modification A number representing the modification
	 */
	public setKeyModified(key: string, modification: number): void	{
		this.keyModified.set(key, modification);

	}

	/**
	 * The method to get the errorMessage
	 * @returns An instance of Choice<string>
	 */
	public getErrorMessage(): Choice<string>	{
		return this.errorMessage;

	}

	/**
	 * The method to set the value to errorMessage
	 * @param errorMessage An instance of Choice<string>
	 */
	public setErrorMessage(errorMessage: Choice<string>): void	{
		this.errorMessage = errorMessage;
		this.keyModified.set("ERROR_MESSAGE", 1);

	}

	/**
	 * The method to get the errorCode
	 * @returns A number representing the errorCode
	 */
	public getErrorCode(): number	{
		return this.errorCode;

	}

	/**
	 * The method to set the value to errorCode
	 * @param errorCode A number representing the errorCode
	 */
	public setErrorCode(errorCode: number): void	{
		this.errorCode = errorCode;
		this.keyModified.set("ERROR_CODE", 1);

	}

	/**
	 * The method to get the xError
	 * @returns An instance of Choice<string>
	 */
	public getXError(): Choice<string>	{
		return this.xError;

	}

	/**
	 * The method to set the value to xError
	 * @param xError An instance of Choice<string>
	 */
	public setXError(xError: Choice<string>): void	{
		this.xError = xError;
		this.keyModified.set("x-error", 1);

	}

	/**
	 * The method to get the info
	 * @returns An instance of Choice<string>
	 */
	public getInfo(): Choice<string>	{
		return this.info;

	}

	/**
	 * The method to set the value to info
	 * @param info An instance of Choice<string>
	 */
	public setInfo(info: Choice<string>): void	{
		this.info = info;
		this.keyModified.set("info", 1);

	}

	/**
	 * The method to get the xInfo
	 * @returns An instance of Choice<string>
	 */
	public getXInfo(): Choice<string>	{
		return this.xInfo;

	}

	/**
	 * The method to set the value to xInfo
	 * @param xInfo An instance of Choice<string>
	 */
	public setXInfo(xInfo: Choice<string>): void	{
		this.xInfo = xInfo;
		this.keyModified.set("x-info", 1);

	}

	/**
	 * The method to get the httpStatus
	 * @returns A String representing the httpStatus
	 */
	public getHttpStatus(): string	{
		return this.httpStatus;

	}

	/**
	 * The method to set the value to httpStatus
	 * @param httpStatus A String representing the httpStatus
	 */
	public setHttpStatus(httpStatus: string): void	{
		this.httpStatus = httpStatus;
		this.keyModified.set("http_status", 1);

	}

}
export {
	APIException as MasterModel,
	APIException as APIException
}
