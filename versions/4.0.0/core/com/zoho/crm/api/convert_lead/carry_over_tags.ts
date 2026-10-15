import {Model} from "../../../../../../utils/util/model";

class CarryOverTags implements Model{

	private contacts: Array<string>;
	private accounts: Array<string>;
	private deals: Array<string>;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the contacts
	 * @returns An Array representing the contacts
	 */
	public getContacts(): Array<string>	{
		return this.contacts;

	}

	/**
	 * The method to set the value to contacts
	 * @param contacts An Array representing the contacts
	 */
	public setContacts(contacts: Array<string>): void	{
		this.contacts = contacts;
		this.keyModified.set("Contacts", 1);

	}

	/**
	 * The method to get the accounts
	 * @returns An Array representing the accounts
	 */
	public getAccounts(): Array<string>	{
		return this.accounts;

	}

	/**
	 * The method to set the value to accounts
	 * @param accounts An Array representing the accounts
	 */
	public setAccounts(accounts: Array<string>): void	{
		this.accounts = accounts;
		this.keyModified.set("Accounts", 1);

	}

	/**
	 * The method to get the deals
	 * @returns An Array representing the deals
	 */
	public getDeals(): Array<string>	{
		return this.deals;

	}

	/**
	 * The method to set the value to deals
	 * @param deals An Array representing the deals
	 */
	public setDeals(deals: Array<string>): void	{
		this.deals = deals;
		this.keyModified.set("Deals", 1);

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
	CarryOverTags as MasterModel,
	CarryOverTags as CarryOverTags
}
