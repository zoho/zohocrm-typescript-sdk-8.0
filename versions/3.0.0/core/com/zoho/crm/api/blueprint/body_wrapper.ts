import {BluePrint} from "./blue_print";
import {Model} from "../../../../../../utils/util/model";

class BodyWrapper implements Model{

	private blueprint: Array<BluePrint>;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the blueprint
	 * @returns An Array representing the blueprint
	 */
	public getBlueprint(): Array<BluePrint>	{
		return this.blueprint;

	}

	/**
	 * The method to set the value to blueprint
	 * @param blueprint An Array representing the blueprint
	 */
	public setBlueprint(blueprint: Array<BluePrint>): void	{
		this.blueprint = blueprint;
		this.keyModified.set("blueprint", 1);

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
