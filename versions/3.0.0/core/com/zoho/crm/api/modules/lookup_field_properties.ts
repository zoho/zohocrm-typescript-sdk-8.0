import {LookupField} from "./lookup_field";
import {Model} from "../../../../../../utils/util/model";

class LookupFieldProperties implements Model{

	private fields: Array<LookupField>;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the fields
	 * @returns An Array representing the fields
	 */
	public getFields(): Array<LookupField>	{
		return this.fields;

	}

	/**
	 * The method to set the value to fields
	 * @param fields An Array representing the fields
	 */
	public setFields(fields: Array<LookupField>): void	{
		this.fields = fields;
		this.keyModified.set("fields", 1);

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
	LookupFieldProperties as MasterModel,
	LookupFieldProperties as LookupFieldProperties
}
