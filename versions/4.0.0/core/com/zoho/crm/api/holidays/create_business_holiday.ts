import {BodyWrapper} from "./body_wrapper";
import {BusinessHoliday} from "./business_holiday";
import {Model} from "../../../../../../utils/util/model";

class CreateBusinessHoliday implements Model, BodyWrapper{

	private holidays: Array<BusinessHoliday>;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the holidays
	 * @returns An Array representing the holidays
	 */
	public getHolidays(): Array<BusinessHoliday>	{
		return this.holidays;

	}

	/**
	 * The method to set the value to holidays
	 * @param holidays An Array representing the holidays
	 */
	public setHolidays(holidays: Array<BusinessHoliday>): void	{
		this.holidays = holidays;
		this.keyModified.set("holidays", 1);

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
	CreateBusinessHoliday as MasterModel,
	CreateBusinessHoliday as CreateBusinessHoliday
}
