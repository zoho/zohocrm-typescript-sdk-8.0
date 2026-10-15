import {CountHandler} from "./count_handler";
import {Model} from "../../../../../../utils/util/model";

class CountWrapper implements Model, CountHandler{

	private count: bigint;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the count
	 * @returns A BigInt representing the count
	 */
	public getCount(): bigint	{
		return this.count;

	}

	/**
	 * The method to set the value to count
	 * @param count A BigInt representing the count
	 */
	public setCount(count: bigint): void	{
		this.count = count;
		this.keyModified.set("count", 1);

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
	CountWrapper as MasterModel,
	CountWrapper as CountWrapper
}
