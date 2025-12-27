import {PinFields} from "./pin_fields";
import {Model} from "../../../../../../utils/util/model";

class PinUnpinFields implements Model{

	private fields: Array<PinFields>;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the fields
	 * @returns An Array representing the fields
	 */
	public getFields(): Array<PinFields>	{
		return this.fields;

	}

	/**
	 * The method to set the value to fields
	 * @param fields An Array representing the fields
	 */
	public setFields(fields: Array<PinFields>): void	{
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
	PinUnpinFields as MasterModel,
	PinUnpinFields as PinUnpinFields
}
