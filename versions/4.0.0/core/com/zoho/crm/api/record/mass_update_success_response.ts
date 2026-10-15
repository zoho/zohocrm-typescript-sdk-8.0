import {MassUpdateActionResponse} from "./mass_update_action_response";
import {Choice} from "../../../../../../utils/util/choice";
import {Model} from "../../../../../../utils/util/model";

class MassUpdateSuccessResponse implements Model, MassUpdateActionResponse{

	private status: Choice<string>;
	private code: Choice<string>;
	private message: Choice<string>;
	private details: Map<string, any>;
	private keyModified: Map<string, number> = new Map<string, number>();
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

}
export {
	MassUpdateSuccessResponse as MasterModel,
	MassUpdateSuccessResponse as MassUpdateSuccessResponse
}
