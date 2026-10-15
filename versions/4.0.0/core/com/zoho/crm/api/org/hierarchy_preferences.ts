import {Choice} from "../../../../../../utils/util/choice";
import {Model} from "../../../../../../utils/util/model";

class HierarchyPreferences implements Model{

	private type: Choice<string>;
	private strictlyReporting: boolean;
	private keyModified: Map<string, number> = new Map<string, number>();
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
	 * The method to get the strictlyReporting
	 * @returns A Boolean representing the strictlyReporting
	 */
	public getStrictlyReporting(): boolean	{
		return this.strictlyReporting;

	}

	/**
	 * The method to set the value to strictlyReporting
	 * @param strictlyReporting A Boolean representing the strictlyReporting
	 */
	public setStrictlyReporting(strictlyReporting: boolean): void	{
		this.strictlyReporting = strictlyReporting;
		this.keyModified.set("strictly_reporting", 1);

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
	HierarchyPreferences as MasterModel,
	HierarchyPreferences as HierarchyPreferences
}
