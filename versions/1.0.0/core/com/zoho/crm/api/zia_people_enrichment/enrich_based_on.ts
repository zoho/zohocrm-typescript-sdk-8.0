import {Company} from "./company";
import {Social} from "./social";
import {Model} from "../../../../../../utils/util/model";

class EnrichBasedOn implements Model{

	private social: Social;
	private name: string;
	private company: Company;
	private email: string;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the social
	 * @returns An instance of Social
	 */
	public getSocial(): Social	{
		return this.social;

	}

	/**
	 * The method to set the value to social
	 * @param social An instance of Social
	 */
	public setSocial(social: Social): void	{
		this.social = social;
		this.keyModified.set("social", 1);

	}

	/**
	 * The method to get the name
	 * @returns A String representing the name
	 */
	public getName(): string	{
		return this.name;

	}

	/**
	 * The method to set the value to name
	 * @param name A String representing the name
	 */
	public setName(name: string): void	{
		this.name = name;
		this.keyModified.set("name", 1);

	}

	/**
	 * The method to get the company
	 * @returns An instance of Company
	 */
	public getCompany(): Company	{
		return this.company;

	}

	/**
	 * The method to set the value to company
	 * @param company An instance of Company
	 */
	public setCompany(company: Company): void	{
		this.company = company;
		this.keyModified.set("company", 1);

	}

	/**
	 * The method to get the email
	 * @returns A String representing the email
	 */
	public getEmail(): string	{
		return this.email;

	}

	/**
	 * The method to set the value to email
	 * @param email A String representing the email
	 */
	public setEmail(email: string): void	{
		this.email = email;
		this.keyModified.set("email", 1);

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
	EnrichBasedOn as MasterModel,
	EnrichBasedOn as EnrichBasedOn
}
