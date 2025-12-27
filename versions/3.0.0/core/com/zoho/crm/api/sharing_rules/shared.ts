import {Resource} from "./resource";
import {Choice} from "../../../../../../utils/util/choice";
import {Model} from "../../../../../../utils/util/model";

class Shared implements Model{

	private resource: Resource;
	private subordinates: boolean;
	private type: Choice<string>;
	private keyModified: Map<string, number> = new Map<string, number>();
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
	 * The method to get the subordinates
	 * @returns A Boolean representing the subordinates
	 */
	public getSubordinates(): boolean	{
		return this.subordinates;

	}

	/**
	 * The method to set the value to subordinates
	 * @param subordinates A Boolean representing the subordinates
	 */
	public setSubordinates(subordinates: boolean): void	{
		this.subordinates = subordinates;
		this.keyModified.set("subordinates", 1);

	}

	/**
	 * The method to get the type
	 * @returns An instance of Choice<string>
	 */
	public getType(): Choice<string>	{
		return this.type;

	}

	/**
	 * The method to set the value to type
	 * @param type An instance of Choice<string>
	 */
	public setType(type: Choice<string>): void	{
		this.type = type;
		this.keyModified.set("type", 1);

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
	Shared as MasterModel,
	Shared as Shared
}
