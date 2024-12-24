import {Resources} from "./resources";
import {Model} from "../../../../../../utils/util/model";

class Features implements Model{

	private name: string;
	private resources: Array<Resources>;
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
	 * The method to get the resources
	 * @returns An Array representing the resources
	 */
	public getResources(): Array<Resources>	{
		return this.resources;

	}

	/**
	 * The method to set the value to resources
	 * @param resources An Array representing the resources
	 */
	public setResources(resources: Array<Resources>): void	{
		this.resources = resources;
		this.keyModified.set("resources", 1);

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
	Features as MasterModel,
	Features as Features
}
