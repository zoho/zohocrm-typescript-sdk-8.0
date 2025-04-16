import {Resource} from "./resource";
import {Model} from "../../../../../../utils/util/model";

class Element implements Model{

	private type: string;
	private resource: Resource;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the type
	 * @returns A String representing the type
	 */
	public getType(): string	{
		return this.type;

	}

	/**
	 * The method to set the value to type
	 * @param type A String representing the type
	 */
	public setType(type: string): void	{
		this.type = type;
		this.keyModified.set("type", 1);

	}

	/**
	 * The method to get the resource
	 * @returns An instance of Resource
	 */
	public getResource(): Resource	{
		return this.resource;

	}

	/**
	 * The method to set the value to resource
	 * @param resource An instance of Resource
	 */
	public setResource(resource: Resource): void	{
		this.resource = resource;
		this.keyModified.set("resource", 1);

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
	Element as MasterModel,
	Element as Element
}
