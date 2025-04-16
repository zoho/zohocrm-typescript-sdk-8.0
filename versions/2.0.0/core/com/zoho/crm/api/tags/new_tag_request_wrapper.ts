import {Tag} from "./tag";
import {Model} from "../../../../../../utils/util/model";

class NewTagRequestWrapper implements Model{

	private tags: Array<Tag>;
	private overWrite: boolean;
	private ids: Array<bigint>;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the tags
	 * @returns An Array representing the tags
	 */
	public getTags(): Array<Tag>	{
		return this.tags;

	}

	/**
	 * The method to set the value to tags
	 * @param tags An Array representing the tags
	 */
	public setTags(tags: Array<Tag>): void	{
		this.tags = tags;
		this.keyModified.set("tags", 1);

	}

	/**
	 * The method to get the overWrite
	 * @returns A Boolean representing the overWrite
	 */
	public getOverWrite(): boolean	{
		return this.overWrite;

	}

	/**
	 * The method to set the value to overWrite
	 * @param overWrite A Boolean representing the overWrite
	 */
	public setOverWrite(overWrite: boolean): void	{
		this.overWrite = overWrite;
		this.keyModified.set("over_write", 1);

	}

	/**
	 * The method to get the ids
	 * @returns An Array representing the ids
	 */
	public getIds(): Array<bigint>	{
		return this.ids;

	}

	/**
	 * The method to set the value to ids
	 * @param ids An Array representing the ids
	 */
	public setIds(ids: Array<bigint>): void	{
		this.ids = ids;
		this.keyModified.set("ids", 1);

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
	NewTagRequestWrapper as MasterModel,
	NewTagRequestWrapper as NewTagRequestWrapper
}
