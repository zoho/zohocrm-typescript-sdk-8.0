import {DoubleOptinEmailTemplate} from "./double_optin_email_template";
import {Model} from "../../../../../../utils/util/model";

class DoubleOptinDetails implements Model{

	private emailTemplate: DoubleOptinEmailTemplate;
	private confirmPageContent: string;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the emailTemplate
	 * @returns An instance of DoubleOptinEmailTemplate
	 */
	public getEmailTemplate(): DoubleOptinEmailTemplate	{
		return this.emailTemplate;

	}

	/**
	 * The method to set the value to emailTemplate
	 * @param emailTemplate An instance of DoubleOptinEmailTemplate
	 */
	public setEmailTemplate(emailTemplate: DoubleOptinEmailTemplate): void	{
		this.emailTemplate = emailTemplate;
		this.keyModified.set("email_template", 1);

	}

	/**
	 * The method to get the confirmPageContent
	 * @returns A String representing the confirmPageContent
	 */
	public getConfirmPageContent(): string	{
		return this.confirmPageContent;

	}

	/**
	 * The method to set the value to confirmPageContent
	 * @param confirmPageContent A String representing the confirmPageContent
	 */
	public setConfirmPageContent(confirmPageContent: string): void	{
		this.confirmPageContent = confirmPageContent;
		this.keyModified.set("confirm_page_content", 1);

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
	DoubleOptinDetails as MasterModel,
	DoubleOptinDetails as DoubleOptinDetails
}
