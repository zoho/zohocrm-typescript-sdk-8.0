import {Model} from "../../../../../../utils/util/model";

class BodyWrapper implements Model{

	private selectQuery: string;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the selectQuery
	 * @returns A String representing the selectQuery
	 */
	public getSelectQuery(): string	{
		return this.selectQuery;

	}

	/**
	 * The method to set the value to selectQuery
	 * @param selectQuery A String representing the selectQuery
	 */
	public setSelectQuery(selectQuery: string): void	{
		this.selectQuery = selectQuery;
		this.keyModified.set("select_query", 1);

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
