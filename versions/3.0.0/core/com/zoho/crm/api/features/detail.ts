import {Limit} from "./limit";
import {Model} from "../../../../../../utils/util/model";

class Detail implements Model{

	private availableCount: Limit;
	private limits: Limit;
	private usedCount: Limit;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the availableCount
	 * @returns An instance of Limit
	 */
	public getAvailableCount(): Limit	{
		return this.availableCount;

	}

	/**
	 * The method to set the value to availableCount
	 * @param availableCount An instance of Limit
	 */
	public setAvailableCount(availableCount: Limit): void	{
		this.availableCount = availableCount;
		this.keyModified.set("available_count", 1);

	}

	/**
	 * The method to get the limits
	 * @returns An instance of Limit
	 */
	public getLimits(): Limit	{
		return this.limits;

	}

	/**
	 * The method to set the value to limits
	 * @param limits An instance of Limit
	 */
	public setLimits(limits: Limit): void	{
		this.limits = limits;
		this.keyModified.set("limits", 1);

	}

	/**
	 * The method to get the usedCount
	 * @returns An instance of Limit
	 */
	public getUsedCount(): Limit	{
		return this.usedCount;

	}

	/**
	 * The method to set the value to usedCount
	 * @param usedCount An instance of Limit
	 */
	public setUsedCount(usedCount: Limit): void	{
		this.usedCount = usedCount;
		this.keyModified.set("used_count", 1);

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
	Detail as MasterModel,
	Detail as Detail
}
