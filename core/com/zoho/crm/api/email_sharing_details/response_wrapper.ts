import {EmailSharings} from "./email_sharings";
import {ResponseHandler} from "./response_handler";
import {Model} from "../../../../../../utils/util/model";

class ResponseWrapper implements Model, ResponseHandler{

	private emailssharingdetails: Array<EmailSharings>;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the emailssharingdetails
	 * @returns An Array representing the emailssharingdetails
	 */
	public getEmailssharingdetails(): Array<EmailSharings>	{
		return this.emailssharingdetails;

	}

	/**
	 * The method to set the value to emailssharingdetails
	 * @param emailssharingdetails An Array representing the emailssharingdetails
	 */
	public setEmailssharingdetails(emailssharingdetails: Array<EmailSharings>): void	{
		this.emailssharingdetails = emailssharingdetails;
		this.keyModified.set("__emails_sharing_details", 1);

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
