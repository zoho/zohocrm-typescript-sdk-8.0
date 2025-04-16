import {BreakHours} from "./break_hours";
import {Holidays} from "./holidays";
import {ShiftCustomTiming} from "./shift_custom_timing";
import {Users} from "./users";
import {Model} from "../../../../../../utils/util/model";
import {MomentZone} from "moment-timezone";

class ShiftHours implements Model{

	private sameAsEveryday: boolean;
	private shiftDays: Array<string>;
	private dailyTiming: Array<Date>;
	private customTiming: Array<ShiftCustomTiming>;
	private id: bigint;
	private breakHours: Array<BreakHours>;
	private users: Array<Users>;
	private holidays: Array<Holidays>;
	private usersCount: number;
	private timezone: MomentZone|null;
	private name: string;
	private keyModified: Map<string, number> = new Map<string, number>();
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
	 * The method to get the shiftDays
	 * @returns An Array representing the shiftDays
	 */
	public getShiftDays(): Array<string>	{
		return this.shiftDays;

	}

	/**
	 * The method to set the value to shiftDays
	 * @param shiftDays An Array representing the shiftDays
	 */
	public setShiftDays(shiftDays: Array<string>): void	{
		this.shiftDays = shiftDays;
		this.keyModified.set("shift_days", 1);

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
	public getCustomTiming(): Array<ShiftCustomTiming>	{
		return this.customTiming;

	}

	/**
	 * The method to set the value to customTiming
	 * @param customTiming An Array representing the customTiming
	 */
	public setCustomTiming(customTiming: Array<ShiftCustomTiming>): void	{
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
	 * The method to get the breakHours
	 * @returns An Array representing the breakHours
	 */
	public getBreakHours(): Array<BreakHours>	{
		return this.breakHours;

	}

	/**
	 * The method to set the value to breakHours
	 * @param breakHours An Array representing the breakHours
	 */
	public setBreakHours(breakHours: Array<BreakHours>): void	{
		this.breakHours = breakHours;
		this.keyModified.set("break_hours", 1);

	}

	/**
	 * The method to get the users
	 * @returns An Array representing the users
	 */
	public getUsers(): Array<Users>	{
		return this.users;

	}

	/**
	 * The method to set the value to users
	 * @param users An Array representing the users
	 */
	public setUsers(users: Array<Users>): void	{
		this.users = users;
		this.keyModified.set("users", 1);

	}

	/**
	 * The method to get the holidays
	 * @returns An Array representing the holidays
	 */
	public getHolidays(): Array<Holidays>	{
		return this.holidays;

	}

	/**
	 * The method to set the value to holidays
	 * @param holidays An Array representing the holidays
	 */
	public setHolidays(holidays: Array<Holidays>): void	{
		this.holidays = holidays;
		this.keyModified.set("holidays", 1);

	}

	/**
	 * The method to get the usersCount
	 * @returns A number representing the usersCount
	 */
	public getUsersCount(): number	{
		return this.usersCount;

	}

	/**
	 * The method to set the value to usersCount
	 * @param usersCount A number representing the usersCount
	 */
	public setUsersCount(usersCount: number): void	{
		this.usersCount = usersCount;
		this.keyModified.set("users_count", 1);

	}

	/**
	 * The method to get the timezone
	 * @returns An instance of MomentZone|null
	 */
	public getTimezone(): MomentZone|null	{
		return this.timezone;

	}

	/**
	 * The method to set the value to timezone
	 * @param timezone An instance of MomentZone|null
	 */
	public setTimezone(timezone: MomentZone|null): void	{
		this.timezone = timezone;
		this.keyModified.set("timezone", 1);

	}

	/**
	 * The method to get the name
	 * @returns A String representing the name
	 */
	public getName(): string	{
		return this.name;

	}

	/**
	 * The method to set the value to name
	 * @param name A String representing the name
	 */
	public setName(name: string): void	{
		this.name = name;
		this.keyModified.set("name", 1);

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
	ShiftHours as MasterModel,
	ShiftHours as ShiftHours
}
