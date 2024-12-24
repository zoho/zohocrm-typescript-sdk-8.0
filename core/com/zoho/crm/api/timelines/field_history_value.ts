import {Model} from "../../../../../../utils/util/model";

class FieldHistoryValue implements Model{

	private new1: string;
	private old: string;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the new
	 * @returns A String representing the new1
	 */
	public getNew(): string	{
		return this.new1;

	}

	/**
	 * The method to set the value to new
	 * @param new1 A String representing the new1
	 */
	public setNew(new1: string): void	{
		this.new1 = new1;
		this.keyModified.set("new", 1);

	}

	/**
	 * The method to get the old
	 * @returns A String representing the old
	 */
	public getOld(): string	{
		return this.old;

	}

	/**
	 * The method to set the value to old
	 * @param old A String representing the old
	 */
	public setOld(old: string): void	{
		this.old = old;
		this.keyModified.set("old", 1);

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
	FieldHistoryValue as MasterModel,
	FieldHistoryValue as FieldHistoryValue
}
