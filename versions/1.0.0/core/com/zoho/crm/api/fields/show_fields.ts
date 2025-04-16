import {MinifiedField} from "./minified_field";
import {Model} from "../../../../../../utils/util/model";

class ShowFields implements Model{

	private showData: boolean;
	private field: MinifiedField;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the showData
	 * @returns A Boolean representing the showData
	 */
	public getShowData(): boolean	{
		return this.showData;

	}

	/**
	 * The method to set the value to showData
	 * @param showData A Boolean representing the showData
	 */
	public setShowData(showData: boolean): void	{
		this.showData = showData;
		this.keyModified.set("show_data", 1);

	}

	/**
	 * The method to get the field
	 * @returns An instance of MinifiedField
	 */
	public getField(): MinifiedField	{
		return this.field;

	}

	/**
	 * The method to set the value to field
	 * @param field An instance of MinifiedField
	 */
	public setField(field: MinifiedField): void	{
		this.field = field;
		this.keyModified.set("field", 1);

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
	ShowFields as MasterModel,
	ShowFields as ShowFields
}
