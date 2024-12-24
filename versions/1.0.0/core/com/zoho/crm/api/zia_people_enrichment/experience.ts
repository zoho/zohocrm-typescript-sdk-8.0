import {Model} from "../../../../../../utils/util/model";

class Experience implements Model{

	private endDate: string;
	private companyName: string;
	private title: string;
	private startDate: string;
	private primary: boolean;
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
	 * The method to get the companyName
	 * @returns A String representing the companyName
	 */
	public getCompanyName(): string	{
		return this.companyName;

	}

	/**
	 * The method to set the value to companyName
	 * @param companyName A String representing the companyName
	 */
	public setCompanyName(companyName: string): void	{
		this.companyName = companyName;
		this.keyModified.set("company_name", 1);

	}

	/**
	 * The method to get the title
	 * @returns A String representing the title
	 */
	public getTitle(): string	{
		return this.title;

	}

	/**
	 * The method to set the value to title
	 * @param title A String representing the title
	 */
	public setTitle(title: string): void	{
		this.title = title;
		this.keyModified.set("title", 1);

	}

	/**
	 * The method to get the startDate
	 * @returns A String representing the startDate
	 */
	public getStartDate(): string	{
		return this.startDate;

	}

	/**
	 * The method to set the value to startDate
	 * @param startDate A String representing the startDate
	 */
	public setStartDate(startDate: string): void	{
		this.startDate = startDate;
		this.keyModified.set("start_date", 1);

	}

	/**
	 * The method to get the primary
	 * @returns A Boolean representing the primary
	 */
	public getPrimary(): boolean	{
		return this.primary;

	}

	/**
	 * The method to set the value to primary
	 * @param primary A Boolean representing the primary
	 */
	public setPrimary(primary: boolean): void	{
		this.primary = primary;
		this.keyModified.set("primary", 1);

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
	Experience as MasterModel,
	Experience as Experience
}
