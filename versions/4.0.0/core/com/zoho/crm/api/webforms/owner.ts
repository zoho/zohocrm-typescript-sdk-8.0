import {Model} from "../../../../../../utils/util/model";

class Owner implements Model{

	private name: string;
	private id: string;
	private systemMail: boolean;
	private emailTemplate: Map<string, any>;
	private keyModified: Map<string, number> = new Map<string, number>();
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
	 * The method to get the id
	 * @returns A String representing the id
	 */
	public getId(): string	{
		return this.id;

	}

	/**
	 * The method to set the value to id
	 * @param id A String representing the id
	 */
	public setId(id: string): void	{
		this.id = id;
		this.keyModified.set("id", 1);

	}

	/**
	 * The method to get the systemMail
	 * @returns A Boolean representing the systemMail
	 */
	public getSystemMail(): boolean	{
		return this.systemMail;

	}

	/**
	 * The method to set the value to systemMail
	 * @param systemMail A Boolean representing the systemMail
	 */
	public setSystemMail(systemMail: boolean): void	{
		this.systemMail = systemMail;
		this.keyModified.set("system_mail", 1);

	}

	/**
	 * The method to get the emailTemplate
	 * @returns A Map representing the emailTemplate
	 */
	public getEmailTemplate(): Map<string, any>	{
		return this.emailTemplate;

	}

	/**
	 * The method to set the value to emailTemplate
	 * @param emailTemplate A Map representing the emailTemplate
	 */
	public setEmailTemplate(emailTemplate: Map<string, any>): void	{
		this.emailTemplate = emailTemplate;
		this.keyModified.set("email_template", 1);

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
	Owner as MasterModel,
	Owner as Owner
}
