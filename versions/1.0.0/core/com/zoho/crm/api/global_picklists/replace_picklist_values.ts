import {ReplacePicklistValue} from "./replace_picklist_value";
import {Model} from "../../../../../../utils/util/model";

class ReplacePicklistValues implements Model{

	private newValue: ReplacePicklistValue;
	private oldValue: ReplacePicklistValue;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the newValue
	 * @returns An instance of ReplacePicklistValue
	 */
	public getNewValue(): ReplacePicklistValue	{
		return this.newValue;

	}

	/**
	 * The method to set the value to newValue
	 * @param newValue An instance of ReplacePicklistValue
	 */
	public setNewValue(newValue: ReplacePicklistValue): void	{
		this.newValue = newValue;
		this.keyModified.set("new_value", 1);

	}

	/**
	 * The method to get the oldValue
	 * @returns An instance of ReplacePicklistValue
	 */
	public getOldValue(): ReplacePicklistValue	{
		return this.oldValue;

	}

	/**
	 * The method to set the value to oldValue
	 * @param oldValue An instance of ReplacePicklistValue
	 */
	public setOldValue(oldValue: ReplacePicklistValue): void	{
		this.oldValue = oldValue;
		this.keyModified.set("old_value", 1);

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
	ReplacePicklistValues as MasterModel,
	ReplacePicklistValues as ReplacePicklistValues
}
