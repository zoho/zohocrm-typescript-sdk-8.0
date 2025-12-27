import {ModuleMap} from "./module_map";
import {Model} from "../../../../../../utils/util/model";

class LinkedRecord implements Model{

	private module: ModuleMap;
	private id: bigint;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the module
	 * @returns An instance of ModuleMap
	 */
	public getModule(): ModuleMap	{
		return this.module;

	}

	/**
	 * The method to set the value to module
	 * @param module An instance of ModuleMap
	 */
	public setModule(module: ModuleMap): void	{
		this.module = module;
		this.keyModified.set("module", 1);

	}

	/**
	 * The method to get the id
	 * @returns A BigInt representing the id
	 */
	public getId(): bigint	{
		return this.id;

	}

	/**
	 * The method to set the value to id
	 * @param id A BigInt representing the id
	 */
	public setId(id: bigint): void	{
		this.id = id;
		this.keyModified.set("id", 1);

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
	LinkedRecord as MasterModel,
	LinkedRecord as LinkedRecord
}
