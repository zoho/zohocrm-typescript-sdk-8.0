import {BaseCurrency} from "./base_currency";
import {Model} from "../../../../../../utils/util/model";

class BaseCurrencyWrapper implements Model{

	private baseCurrency: BaseCurrency;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the baseCurrency
	 * @returns An instance of BaseCurrency
	 */
	public getBaseCurrency(): BaseCurrency	{
		return this.baseCurrency;

	}

	/**
	 * The method to set the value to baseCurrency
	 * @param baseCurrency An instance of BaseCurrency
	 */
	public setBaseCurrency(baseCurrency: BaseCurrency): void	{
		this.baseCurrency = baseCurrency;
		this.keyModified.set("base_currency", 1);

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
	BaseCurrencyWrapper as MasterModel,
	BaseCurrencyWrapper as BaseCurrencyWrapper
}
