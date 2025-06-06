import {Model} from "../../../../../../utils/util/model";

class UnenrollProperty implements Model{

	private endDate: string;
	private type: string;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the endDate
	 * @returns A String representing the endDate
	 */
	public getEndDate(): string	{
		return this.endDate;

	}

	/**
	 * The method to set the value to endDate
	 * @param endDate A String representing the endDate
	 */
	public setEndDate(endDate: string): void	{
		this.endDate = endDate;
		this.keyModified.set("end_date", 1);

	}

	/**
	 * The method to get the type
	 * @returns A String representing the type
	 */
	public getType(): string	{
		return this.type;

	}

	/**
	 * The method to set the value to type
	 * @param type A String representing the type
	 */
	public setType(type: string): void	{
		this.type = type;
		this.keyModified.set("type", 1);

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
	UnenrollProperty as MasterModel,
	UnenrollProperty as UnenrollProperty
}
