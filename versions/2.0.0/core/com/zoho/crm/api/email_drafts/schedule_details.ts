import {Model} from "../../../../../../utils/util/model";
import {MomentZone} from "moment-timezone";

class ScheduleDetails implements Model{

	private time: Date;
	private timezone: MomentZone|null;
	private source: string;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the time
	 * @returns An instance of Date
	 */
	public getTime(): Date	{
		return this.time;

	}

	/**
	 * The method to set the value to time
	 * @param time An instance of Date
	 */
	public setTime(time: Date): void	{
		this.time = time;
		this.keyModified.set("time", 1);

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
	 * The method to get the source
	 * @returns A String representing the source
	 */
	public getSource(): string	{
		return this.source;

	}

	/**
	 * The method to set the value to source
	 * @param source A String representing the source
	 */
	public setSource(source: string): void	{
		this.source = source;
		this.keyModified.set("source", 1);

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
	ScheduleDetails as MasterModel,
	ScheduleDetails as ScheduleDetails
}
