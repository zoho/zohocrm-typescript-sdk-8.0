import {EmailDrafts} from "./email_drafts";
import {Model} from "../../../../../../utils/util/model";

class BodyWrapper implements Model{

	private emaildrafts: Array<EmailDrafts>;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the emaildrafts
	 * @returns An Array representing the emaildrafts
	 */
	public getEmaildrafts(): Array<EmailDrafts>	{
		return this.emaildrafts;

	}

	/**
	 * The method to set the value to emaildrafts
	 * @param emaildrafts An Array representing the emaildrafts
	 */
	public setEmaildrafts(emaildrafts: Array<EmailDrafts>): void	{
		this.emaildrafts = emaildrafts;
		this.keyModified.set("__email_drafts", 1);

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
	BodyWrapper as MasterModel,
	BodyWrapper as BodyWrapper
}
