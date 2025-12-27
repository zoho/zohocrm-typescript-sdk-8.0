import {ActionHandler} from "./action_handler";
import {ActionResponse} from "./action_response";
import {Feature} from "./feature";
import {ResponseHandler} from "./response_handler";
import {Choice} from "../../../../../../utils/util/choice";
import {Model} from "../../../../../../utils/util/model";

class APIException implements Model, ActionResponse, ResponseHandler, ActionHandler{

	private status: Choice<string>;
	private code: Choice<string>;
	private message: Choice<string>;
	private details: Map<string, any>;
	private keyModified: Map<string, number> = new Map<string, number>();
	private apiName: string;
	private jsonPath: string;
	private features: Array<Feature>;
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
	 * The method to get the apiName
	 * @returns A String representing the apiName
	 */
	public getAPIName(): string	{
		return this.apiName;

	}

	/**
	 * The method to set the value to apiName
	 * @param apiName A String representing the apiName
	 */
	public setAPIName(apiName: string): void	{
		this.apiName = apiName;
		this.keyModified.set("api_name", 1);

	}

	/**
	 * The method to get the jsonPath
	 * @returns A String representing the jsonPath
	 */
	public getJsonPath(): string	{
		return this.jsonPath;

	}

	/**
	 * The method to set the value to jsonPath
	 * @param jsonPath A String representing the jsonPath
	 */
	public setJsonPath(jsonPath: string): void	{
		this.jsonPath = jsonPath;
		this.keyModified.set("json_path", 1);

	}

	/**
	 * The method to get the features
	 * @returns An Array representing the features
	 */
	public getFeatures(): Array<Feature>	{
		return this.features;

	}

	/**
	 * The method to set the value to features
	 * @param features An Array representing the features
	 */
	public setFeatures(features: Array<Feature>): void	{
		this.features = features;
		this.keyModified.set("features", 1);

	}

}
export {
	APIException as MasterModel,
	APIException as APIException
}
