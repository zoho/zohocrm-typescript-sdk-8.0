import {ReplacedResponseHandler} from "./replaced_response_handler";
import {ReplacedValue} from "./replaced_value";
import {Model} from "../../../../../../utils/util/model";

class ReplacedResponseWrapper implements Model, ReplacedResponseHandler{

	private replacedValues: Array<ReplacedValue>;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the replacedValues
	 * @returns An Array representing the replacedValues
	 */
	public getReplacedValues(): Array<ReplacedValue>	{
		return this.replacedValues;

	}

	/**
	 * The method to set the value to replacedValues
	 * @param replacedValues An Array representing the replacedValues
	 */
	public setReplacedValues(replacedValues: Array<ReplacedValue>): void	{
		this.replacedValues = replacedValues;
		this.keyModified.set("replaced_values", 1);

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
	ReplacedResponseWrapper as MasterModel,
	ReplacedResponseWrapper as ReplacedResponseWrapper
}
