import {Model} from "../../../../../../utils/util/model";

class SubformProperty implements Model{

	private pinnedColumn: boolean;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the pinnedColumn
	 * @returns A Boolean representing the pinnedColumn
	 */
	public getPinnedColumn(): boolean	{
		return this.pinnedColumn;

	}

	/**
	 * The method to set the value to pinnedColumn
	 * @param pinnedColumn A Boolean representing the pinnedColumn
	 */
	public setPinnedColumn(pinnedColumn: boolean): void	{
		this.pinnedColumn = pinnedColumn;
		this.keyModified.set("pinned_column", 1);

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
	SubformProperty as MasterModel,
	SubformProperty as SubformProperty
}
