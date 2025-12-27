import {ReplaceActionHandler} from "./replace_action_handler";
import {ReplaceActionResponse} from "./replace_action_response";
import {Model} from "../../../../../../utils/util/model";

class ReplaceActionWrapper implements Model, ReplaceActionHandler{

	private replacePicklistValues: Array<ReplaceActionResponse>;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the replacePicklistValues
	 * @returns An Array representing the replacePicklistValues
	 */
	public getReplacePicklistValues(): Array<ReplaceActionResponse>	{
		return this.replacePicklistValues;

	}

	/**
	 * The method to set the value to replacePicklistValues
	 * @param replacePicklistValues An Array representing the replacePicklistValues
	 */
	public setReplacePicklistValues(replacePicklistValues: Array<ReplaceActionResponse>): void	{
		this.replacePicklistValues = replacePicklistValues;
		this.keyModified.set("replace_picklist_values", 1);

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
	ReplaceActionWrapper as MasterModel,
	ReplaceActionWrapper as ReplaceActionWrapper
}
