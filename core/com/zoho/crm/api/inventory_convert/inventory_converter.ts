import {ConvertTo} from "./convert_to";
import {Model} from "../../../../../../utils/util/model";

class InventoryConverter implements Model{

	private convertTo: Array<ConvertTo>;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the convertTo
	 * @returns An Array representing the convertTo
	 */
	public getConvertTo(): Array<ConvertTo>	{
		return this.convertTo;

	}

	/**
	 * The method to set the value to convertTo
	 * @param convertTo An Array representing the convertTo
	 */
	public setConvertTo(convertTo: Array<ConvertTo>): void	{
		this.convertTo = convertTo;
		this.keyModified.set("convert_to", 1);

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
	InventoryConverter as MasterModel,
	InventoryConverter as InventoryConverter
}
