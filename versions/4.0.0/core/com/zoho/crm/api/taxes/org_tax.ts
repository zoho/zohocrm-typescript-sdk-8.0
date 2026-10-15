import {Preference} from "./preference";
import {Tax} from "./tax";
import {Model} from "../../../../../../utils/util/model";

class OrgTax implements Model{

	private taxes: Array<Tax>;
	private preference: Preference;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the taxes
	 * @returns An Array representing the taxes
	 */
	public getTaxes(): Array<Tax>	{
		return this.taxes;

	}

	/**
	 * The method to set the value to taxes
	 * @param taxes An Array representing the taxes
	 */
	public setTaxes(taxes: Array<Tax>): void	{
		this.taxes = taxes;
		this.keyModified.set("taxes", 1);

	}

	/**
	 * The method to get the preference
	 * @returns An instance of Preference
	 */
	public getPreference(): Preference	{
		return this.preference;

	}

	/**
	 * The method to set the value to preference
	 * @param preference An instance of Preference
	 */
	public setPreference(preference: Preference): void	{
		this.preference = preference;
		this.keyModified.set("preference", 1);

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
	OrgTax as MasterModel,
	OrgTax as OrgTax
}
