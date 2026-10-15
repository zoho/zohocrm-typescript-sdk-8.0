import {Model} from "../../../../../../utils/util/model";

class TimeRange implements Model{

	private from: string;
	private to: string;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the from
	 * @returns A String representing the from
	 */
	public getFrom(): string	{
		return this.from;

	}

	/**
	 * The method to set the value to from
	 * @param from A String representing the from
	 */
	public setFrom(from: string): void	{
		this.from = from;
		this.keyModified.set("From", 1);

	}

	/**
	 * The method to get the to
	 * @returns A String representing the to
	 */
	public getTo(): string	{
		return this.to;

	}

	/**
	 * The method to set the value to to
	 * @param to A String representing the to
	 */
	public setTo(to: string): void	{
		this.to = to;
		this.keyModified.set("To", 1);

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
	TimeRange as MasterModel,
	TimeRange as TimeRange
}
