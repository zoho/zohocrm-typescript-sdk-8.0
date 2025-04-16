import {EmailTemplate} from "./email_template";
import {Info} from "./info";
import {ResponseHandler} from "./response_handler";
import {Model} from "../../../../../../utils/util/model";

class ResponseWrapper implements Model, ResponseHandler{

	private emailTemplates: Array<EmailTemplate>;
	private info: Info;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the emailTemplates
	 * @returns An Array representing the emailTemplates
	 */
	public getEmailTemplates(): Array<EmailTemplate>	{
		return this.emailTemplates;

	}

	/**
	 * The method to set the value to emailTemplates
	 * @param emailTemplates An Array representing the emailTemplates
	 */
	public setEmailTemplates(emailTemplates: Array<EmailTemplate>): void	{
		this.emailTemplates = emailTemplates;
		this.keyModified.set("email_templates", 1);

	}

	/**
	 * The method to get the info
	 * @returns An instance of Info
	 */
	public getInfo(): Info	{
		return this.info;

	}

	/**
	 * The method to set the value to info
	 * @param info An instance of Info
	 */
	public setInfo(info: Info): void	{
		this.info = info;
		this.keyModified.set("info", 1);

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
	ResponseWrapper as MasterModel,
	ResponseWrapper as ResponseWrapper
}
