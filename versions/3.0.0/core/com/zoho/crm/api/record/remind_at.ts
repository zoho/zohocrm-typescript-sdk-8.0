import {Model} from "../../../../../../utils/util/model";

class RemindAt implements Model{

	private alarm: string;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the alarm
	 * @returns A String representing the alarm
	 */
	public getAlarm(): string	{
		return this.alarm;

	}

	/**
	 * The method to set the value to alarm
	 * @param alarm A String representing the alarm
	 */
	public setAlarm(alarm: string): void	{
		this.alarm = alarm;
		this.keyModified.set("ALARM", 1);

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
	RemindAt as MasterModel,
	RemindAt as RemindAt
}
