import {BreakHoursCustomTiming} from "./break_hours_custom_timing";
import {Choice} from "../../../../../../utils/util/choice";
import {Model} from "../../../../../../utils/util/model";

class BusinessHours implements Model{

	private weekStartsOn: Choice<string>;
	private type: Choice<string>;
	private id: bigint;
	private businessDays: Array<Choice<string>>;
	private sameAsEveryday: boolean;
	private dailyTiming: Array<string>;
	private customTiming: Array<BreakHoursCustomTiming>;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the weekStartsOn
	 * @returns An instance of Choice<string>
	 */
	public getWeekStartsOn(): Choice<string>	{
		return this.weekStartsOn;

	}

	/**
	 * The method to set the value to weekStartsOn
	 * @param weekStartsOn An instance of Choice<string>
	 */
	public setWeekStartsOn(weekStartsOn: Choice<string>): void	{
		this.weekStartsOn = weekStartsOn;
		this.keyModified.set("week_starts_on", 1);

	}

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
	 * The method to get the businessDays
	 * @returns An Array representing the businessDays
	 */
	public getBusinessDays(): Array<Choice<string>>	{
		return this.businessDays;

	}

	/**
	 * The method to set the value to businessDays
	 * @param businessDays An Array representing the businessDays
	 */
	public setBusinessDays(businessDays: Array<Choice<string>>): void	{
		this.businessDays = businessDays;
		this.keyModified.set("business_days", 1);

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
	public getDailyTiming(): Array<string>	{
		return this.dailyTiming;

	}

	/**
	 * The method to set the value to dailyTiming
	 * @param dailyTiming An Array representing the dailyTiming
	 */
	public setDailyTiming(dailyTiming: Array<string>): void	{
		this.dailyTiming = dailyTiming;
		this.keyModified.set("daily_timing", 1);

	}

	/**
	 * The method to get the customTiming
	 * @returns An Array representing the customTiming
	 */
	public getCustomTiming(): Array<BreakHoursCustomTiming>	{
		return this.customTiming;

	}

	/**
	 * The method to set the value to customTiming
	 * @param customTiming An Array representing the customTiming
	 */
	public setCustomTiming(customTiming: Array<BreakHoursCustomTiming>): void	{
		this.customTiming = customTiming;
		this.keyModified.set("custom_timing", 1);

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
	BusinessHours as MasterModel,
	BusinessHours as BusinessHours
}
