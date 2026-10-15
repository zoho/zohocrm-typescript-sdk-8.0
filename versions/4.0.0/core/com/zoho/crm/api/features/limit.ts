import {Model} from "../../../../../../utils/util/model";

class Limit implements Model{

	private total: number;
	private editionLimit: number;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the total
	 * @returns A number representing the total
	 */
	public getTotal(): number	{
		return this.total;

	}

	/**
	 * The method to set the value to total
	 * @param total A number representing the total
	 */
	public setTotal(total: number): void	{
		this.total = total;
		this.keyModified.set("total", 1);

	}

	/**
	 * The method to get the editionLimit
	 * @returns A number representing the editionLimit
	 */
	public getEditionLimit(): number	{
		return this.editionLimit;

	}

	/**
	 * The method to set the value to editionLimit
	 * @param editionLimit A number representing the editionLimit
	 */
	public setEditionLimit(editionLimit: number): void	{
		this.editionLimit = editionLimit;
		this.keyModified.set("edition_limit", 1);

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
	Limit as MasterModel,
	Limit as Limit
}
