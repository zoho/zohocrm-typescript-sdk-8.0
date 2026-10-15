import {DealLayoutMapping} from "./deal_layout_mapping";
import {MinifiedLayout} from "./minified_layout";
import {Model} from "../../../../../../utils/util/model";

class ConvertMapping implements Model{

	private contacts: MinifiedLayout;
	private deals: DealLayoutMapping;
	private accounts: MinifiedLayout;
	private invoices: MinifiedLayout;
	private salesorders: MinifiedLayout;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the contacts
	 * @returns An instance of MinifiedLayout
	 */
	public getContacts(): MinifiedLayout	{
		return this.contacts;

	}

	/**
	 * The method to set the value to contacts
	 * @param contacts An instance of MinifiedLayout
	 */
	public setContacts(contacts: MinifiedLayout): void	{
		this.contacts = contacts;
		this.keyModified.set("Contacts", 1);

	}

	/**
	 * The method to get the deals
	 * @returns An instance of DealLayoutMapping
	 */
	public getDeals(): DealLayoutMapping	{
		return this.deals;

	}

	/**
	 * The method to set the value to deals
	 * @param deals An instance of DealLayoutMapping
	 */
	public setDeals(deals: DealLayoutMapping): void	{
		this.deals = deals;
		this.keyModified.set("Deals", 1);

	}

	/**
	 * The method to get the accounts
	 * @returns An instance of MinifiedLayout
	 */
	public getAccounts(): MinifiedLayout	{
		return this.accounts;

	}

	/**
	 * The method to set the value to accounts
	 * @param accounts An instance of MinifiedLayout
	 */
	public setAccounts(accounts: MinifiedLayout): void	{
		this.accounts = accounts;
		this.keyModified.set("Accounts", 1);

	}

	/**
	 * The method to get the invoices
	 * @returns An instance of MinifiedLayout
	 */
	public getInvoices(): MinifiedLayout	{
		return this.invoices;

	}

	/**
	 * The method to set the value to invoices
	 * @param invoices An instance of MinifiedLayout
	 */
	public setInvoices(invoices: MinifiedLayout): void	{
		this.invoices = invoices;
		this.keyModified.set("Invoices", 1);

	}

	/**
	 * The method to get the salesorders
	 * @returns An instance of MinifiedLayout
	 */
	public getSalesorders(): MinifiedLayout	{
		return this.salesorders;

	}

	/**
	 * The method to set the value to salesorders
	 * @param salesorders An instance of MinifiedLayout
	 */
	public setSalesorders(salesorders: MinifiedLayout): void	{
		this.salesorders = salesorders;
		this.keyModified.set("SalesOrders", 1);

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
	ConvertMapping as MasterModel,
	ConvertMapping as ConvertMapping
}
