import {Model} from "../../../../../../utils/util/model";

class Escalation implements Model{

	private days: number;
	private status: string;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the days
	 * @returns A number representing the days
	 */
	public getDays(): number	{
		return this.days;

	}

	/**
	 * The method to set the value to days
	 * @param days A number representing the days
	 */
	public setDays(days: number): void	{
		this.days = days;
		this.keyModified.set("days", 1);

	}

	/**
	 * The method to get the status
	 * @returns A String representing the status
	 */
	public getStatus(): string	{
		return this.status;

	}

	/**
	 * The method to set the value to status
	 * @param status A String representing the status
	 */
	public setStatus(status: string): void	{
		this.status = status;
		this.keyModified.set("status", 1);

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
	Escalation as MasterModel,
	Escalation as Escalation
}
