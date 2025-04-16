import {PickListValue} from "./pick_list_value";
import {Model} from "../../../../../../utils/util/model";

class Maps implements Model{

	private apiName: string;
	private pickListValues: Array<PickListValue>;
	private keyModified: Map<string, number> = new Map<string, number>();
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
	 * The method to get the pickListValues
	 * @returns An Array representing the pickListValues
	 */
	public getPickListValues(): Array<PickListValue>	{
		return this.pickListValues;

	}

	/**
	 * The method to set the value to pickListValues
	 * @param pickListValues An Array representing the pickListValues
	 */
	public setPickListValues(pickListValues: Array<PickListValue>): void	{
		this.pickListValues = pickListValues;
		this.keyModified.set("pick_list_values", 1);

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
	Maps as MasterModel,
	Maps as Maps
}
