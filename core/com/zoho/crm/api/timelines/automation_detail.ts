import {NameIdStructure} from "./name_id_structure";
import {PathFinder} from "./path_finder";
import {Model} from "../../../../../../utils/util/model";

class AutomationDetail implements Model{

	private type: string;
	private rule: NameIdStructure;
	private pathfinder: PathFinder;
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
	 * The method to get the rule
	 * @returns An instance of NameIdStructure
	 */
	public getRule(): NameIdStructure	{
		return this.rule;

	}

	/**
	 * The method to set the value to rule
	 * @param rule An instance of NameIdStructure
	 */
	public setRule(rule: NameIdStructure): void	{
		this.rule = rule;
		this.keyModified.set("rule", 1);

	}

	/**
	 * The method to get the pathfinder
	 * @returns An instance of PathFinder
	 */
	public getPathfinder(): PathFinder	{
		return this.pathfinder;

	}

	/**
	 * The method to set the value to pathfinder
	 * @param pathfinder An instance of PathFinder
	 */
	public setPathfinder(pathfinder: PathFinder): void	{
		this.pathfinder = pathfinder;
		this.keyModified.set("pathfinder", 1);

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
	AutomationDetail as MasterModel,
	AutomationDetail as AutomationDetail
}
