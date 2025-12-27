import {Criteria} from "./criteria";
import {Model} from "../../../../../../utils/util/model";

class FiltersBody implements Model{

	private filters: Array<Criteria>;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the filters
	 * @returns An Array representing the filters
	 */
	public getFilters(): Array<Criteria>	{
		return this.filters;

	}

	/**
	 * The method to set the value to filters
	 * @param filters An Array representing the filters
	 */
	public setFilters(filters: Array<Criteria>): void	{
		this.filters = filters;
		this.keyModified.set("filters", 1);

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
	FiltersBody as MasterModel,
	FiltersBody as FiltersBody
}
