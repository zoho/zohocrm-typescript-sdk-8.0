import {Record} from "../record/record";
import {Model} from "../../../../../../utils/util/model";

class BodyWrapper implements Model{

	private data: Array<Record>;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the data
	 * @returns An Array representing the data
	 */
	public getData(): Array<Record>	{
		return this.data;

	}

	/**
	 * The method to set the value to data
	 * @param data An Array representing the data
	 */
	public setData(data: Array<Record>): void	{
		this.data = data;
		this.keyModified.set("data", 1);

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
	BodyWrapper as MasterModel,
	BodyWrapper as BodyWrapper
}
