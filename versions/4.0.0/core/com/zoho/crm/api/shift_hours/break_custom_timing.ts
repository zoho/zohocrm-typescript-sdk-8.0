import {Model} from "../../../../../../utils/util/model";

class BreakCustomTiming implements Model{

	private days: string;
	private breakTiming: Array<Date>;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the days
	 * @returns A String representing the days
	 */
	public getDays(): string	{
		return this.days;

	}

	/**
	 * The method to set the value to days
	 * @param days A String representing the days
	 */
	public setDays(days: string): void	{
		this.days = days;
		this.keyModified.set("days", 1);

	}

	/**
	 * The method to get the breakTiming
	 * @returns An Array representing the breakTiming
	 */
	public getBreakTiming(): Array<Date>	{
		return this.breakTiming;

	}

	/**
	 * The method to set the value to breakTiming
	 * @param breakTiming An Array representing the breakTiming
	 */
	public setBreakTiming(breakTiming: Array<Date>): void	{
		this.breakTiming = breakTiming;
		this.keyModified.set("break_timing", 1);

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
	BreakCustomTiming as MasterModel,
	BreakCustomTiming as BreakCustomTiming
}
