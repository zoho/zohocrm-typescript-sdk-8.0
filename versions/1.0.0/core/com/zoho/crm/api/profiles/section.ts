import {Category} from "./category";
import {Model} from "../../../../../../utils/util/model";

class Section implements Model{

	private name: string;
	private categories: Array<Category>;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the name
	 * @returns A String representing the name
	 */
	public getName(): string	{
		return this.name;

	}

	/**
	 * The method to set the value to name
	 * @param name A String representing the name
	 */
	public setName(name: string): void	{
		this.name = name;
		this.keyModified.set("name", 1);

	}

	/**
	 * The method to get the categories
	 * @returns An Array representing the categories
	 */
	public getCategories(): Array<Category>	{
		return this.categories;

	}

	/**
	 * The method to set the value to categories
	 * @param categories An Array representing the categories
	 */
	public setCategories(categories: Array<Category>): void	{
		this.categories = categories;
		this.keyModified.set("categories", 1);

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
	Section as MasterModel,
	Section as Section
}
