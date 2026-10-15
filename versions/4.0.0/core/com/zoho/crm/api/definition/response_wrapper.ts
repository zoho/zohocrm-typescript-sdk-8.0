import {Definition} from "./definition";
import {Model} from "../../../../../../utils/util/model";

class ResponseWrapper implements Model{

	private definition: Definition;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the definition
	 * @returns An instance of Definition
	 */
	public getDefinition(): Definition	{
		return this.definition;

	}

	/**
	 * The method to set the value to definition
	 * @param definition An instance of Definition
	 */
	public setDefinition(definition: Definition): void	{
		this.definition = definition;
		this.keyModified.set("definition", 1);

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
	ResponseWrapper as MasterModel,
	ResponseWrapper as ResponseWrapper
}
