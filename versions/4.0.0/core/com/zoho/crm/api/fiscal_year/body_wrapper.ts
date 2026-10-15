import {Year} from "./year";
import {Model} from "../../../../../../utils/util/model";

class BodyWrapper implements Model{

	private fiscalYear: Year;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the fiscalYear
	 * @returns An instance of Year
	 */
	public getFiscalYear(): Year	{
		return this.fiscalYear;

	}

	/**
	 * The method to set the value to fiscalYear
	 * @param fiscalYear An instance of Year
	 */
	public setFiscalYear(fiscalYear: Year): void	{
		this.fiscalYear = fiscalYear;
		this.keyModified.set("fiscal_year", 1);

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
	BodyWrapper as MasterModel,
	BodyWrapper as BodyWrapper
}
