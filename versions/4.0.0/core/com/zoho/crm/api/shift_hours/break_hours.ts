import {BreakCustomTiming} from "./break_custom_timing";
import {Model} from "../../../../../../utils/util/model";

class BreakHours implements Model{

	private breakDays: Array<string>;
	private sameAsEveryday: boolean;
	private dailyTiming: Array<Date>;
	private customTiming: Array<BreakCustomTiming>;
	private id: bigint;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the breakDays
	 * @returns An Array representing the breakDays
	 */
	public getBreakDays(): Array<string>	{
		return this.breakDays;

	}

	/**
	 * The method to set the value to breakDays
	 * @param breakDays An Array representing the breakDays
	 */
	public setBreakDays(breakDays: Array<string>): void	{
		this.breakDays = breakDays;
		this.keyModified.set("break_days", 1);

	}

	/**
	 * The method to get the sameAsEveryday
	 * @returns A Boolean representing the sameAsEveryday
	 */
	public getSameAsEveryday(): boolean	{
		return this.sameAsEveryday;

	}

	/**
	 * The method to set the value to sameAsEveryday
	 * @param sameAsEveryday A Boolean representing the sameAsEveryday
	 */
	public setSameAsEveryday(sameAsEveryday: boolean): void	{
		this.sameAsEveryday = sameAsEveryday;
		this.keyModified.set("same_as_everyday", 1);

	}

	/**
	 * The method to get the dailyTiming
	 * @returns An Array representing the dailyTiming
	 */
	public getDailyTiming(): Array<Date>	{
		return this.dailyTiming;

	}

	/**
	 * The method to set the value to dailyTiming
	 * @param dailyTiming An Array representing the dailyTiming
	 */
	public setDailyTiming(dailyTiming: Array<Date>): void	{
		this.dailyTiming = dailyTiming;
		this.keyModified.set("daily_timing", 1);

	}

	/**
	 * The method to get the customTiming
	 * @returns An Array representing the customTiming
	 */
	public getCustomTiming(): Array<BreakCustomTiming>	{
		return this.customTiming;

	}

	/**
	 * The method to set the value to customTiming
	 * @param customTiming An Array representing the customTiming
	 */
	public setCustomTiming(customTiming: Array<BreakCustomTiming>): void	{
		this.customTiming = customTiming;
		this.keyModified.set("custom_timing", 1);

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
	BreakHours as MasterModel,
	BreakHours as BreakHours
}
