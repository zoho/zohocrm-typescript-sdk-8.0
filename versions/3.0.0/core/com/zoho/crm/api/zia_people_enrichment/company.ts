import {Model} from "../../../../../../utils/util/model";

class Company implements Model{

	private website: string;
	private name: string;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the website
	 * @returns A String representing the website
	 */
	public getWebsite(): string	{
		return this.website;

	}

	/**
	 * The method to set the value to website
	 * @param website A String representing the website
	 */
	public setWebsite(website: string): void	{
		this.website = website;
		this.keyModified.set("website", 1);

	}

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
	Company as MasterModel,
	Company as Company
}
