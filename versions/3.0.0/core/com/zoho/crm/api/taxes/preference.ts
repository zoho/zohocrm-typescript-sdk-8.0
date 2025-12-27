import {Model} from "../../../../../../utils/util/model";

class Preference implements Model{

	private autoPopulateTax: boolean;
	private modifyTaxRates: boolean;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the autoPopulateTax
	 * @returns A Boolean representing the autoPopulateTax
	 */
	public getAutoPopulateTax(): boolean	{
		return this.autoPopulateTax;

	}

	/**
	 * The method to set the value to autoPopulateTax
	 * @param autoPopulateTax A Boolean representing the autoPopulateTax
	 */
	public setAutoPopulateTax(autoPopulateTax: boolean): void	{
		this.autoPopulateTax = autoPopulateTax;
		this.keyModified.set("auto_populate_tax", 1);

	}

	/**
	 * The method to get the modifyTaxRates
	 * @returns A Boolean representing the modifyTaxRates
	 */
	public getModifyTaxRates(): boolean	{
		return this.modifyTaxRates;

	}

	/**
	 * The method to set the value to modifyTaxRates
	 * @param modifyTaxRates A Boolean representing the modifyTaxRates
	 */
	public setModifyTaxRates(modifyTaxRates: boolean): void	{
		this.modifyTaxRates = modifyTaxRates;
		this.keyModified.set("modify_tax_rates", 1);

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
	Preference as MasterModel,
	Preference as Preference
}
