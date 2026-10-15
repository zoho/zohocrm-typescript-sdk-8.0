import {PreferenceFieldMatchedValue} from "./preference_field_matched_value";
import {Modules} from "../modules/modules";
import {Record} from "../record/record";
import {Model} from "../../../../../../utils/util/model";

class ConversionOptions implements Model{

	private modulePreference: Modules;
	private contacts: Array<Record>;
	private deals: Array<Record>;
	private accounts: Array<Record>;
	private preferenceFieldMatchedValue: PreferenceFieldMatchedValue;
	private modulesWithMultipleLayouts: Array<Modules>;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the modulePreference
	 * @returns An instance of Modules
	 */
	public getModulePreference(): Modules	{
		return this.modulePreference;

	}

	/**
	 * The method to set the value to modulePreference
	 * @param modulePreference An instance of Modules
	 */
	public setModulePreference(modulePreference: Modules): void	{
		this.modulePreference = modulePreference;
		this.keyModified.set("module_preference", 1);

	}

	/**
	 * The method to get the contacts
	 * @returns An Array representing the contacts
	 */
	public getContacts(): Array<Record>	{
		return this.contacts;

	}

	/**
	 * The method to set the value to contacts
	 * @param contacts An Array representing the contacts
	 */
	public setContacts(contacts: Array<Record>): void	{
		this.contacts = contacts;
		this.keyModified.set("Contacts", 1);

	}

	/**
	 * The method to get the deals
	 * @returns An Array representing the deals
	 */
	public getDeals(): Array<Record>	{
		return this.deals;

	}

	/**
	 * The method to set the value to deals
	 * @param deals An Array representing the deals
	 */
	public setDeals(deals: Array<Record>): void	{
		this.deals = deals;
		this.keyModified.set("Deals", 1);

	}

	/**
	 * The method to get the accounts
	 * @returns An Array representing the accounts
	 */
	public getAccounts(): Array<Record>	{
		return this.accounts;

	}

	/**
	 * The method to set the value to accounts
	 * @param accounts An Array representing the accounts
	 */
	public setAccounts(accounts: Array<Record>): void	{
		this.accounts = accounts;
		this.keyModified.set("Accounts", 1);

	}

	/**
	 * The method to get the preferenceFieldMatchedValue
	 * @returns An instance of PreferenceFieldMatchedValue
	 */
	public getPreferenceFieldMatchedValue(): PreferenceFieldMatchedValue	{
		return this.preferenceFieldMatchedValue;

	}

	/**
	 * The method to set the value to preferenceFieldMatchedValue
	 * @param preferenceFieldMatchedValue An instance of PreferenceFieldMatchedValue
	 */
	public setPreferenceFieldMatchedValue(preferenceFieldMatchedValue: PreferenceFieldMatchedValue): void	{
		this.preferenceFieldMatchedValue = preferenceFieldMatchedValue;
		this.keyModified.set("preference_field_matched_value", 1);

	}

	/**
	 * The method to get the modulesWithMultipleLayouts
	 * @returns An Array representing the modulesWithMultipleLayouts
	 */
	public getModulesWithMultipleLayouts(): Array<Modules>	{
		return this.modulesWithMultipleLayouts;

	}

	/**
	 * The method to set the value to modulesWithMultipleLayouts
	 * @param modulesWithMultipleLayouts An Array representing the modulesWithMultipleLayouts
	 */
	public setModulesWithMultipleLayouts(modulesWithMultipleLayouts: Array<Modules>): void	{
		this.modulesWithMultipleLayouts = modulesWithMultipleLayouts;
		this.keyModified.set("modules_with_multiple_layouts", 1);

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
	ConversionOptions as MasterModel,
	ConversionOptions as ConversionOptions
}
