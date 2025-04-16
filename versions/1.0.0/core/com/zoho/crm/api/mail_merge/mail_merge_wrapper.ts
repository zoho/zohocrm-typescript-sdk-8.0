import {MailMerge} from "./mail_merge";
import {Model} from "../../../../../../utils/util/model";

class MailMergeWrapper implements Model{

	private sendMailMerge: Array<MailMerge>;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the sendMailMerge
	 * @returns An Array representing the sendMailMerge
	 */
	public getSendMailMerge(): Array<MailMerge>	{
		return this.sendMailMerge;

	}

	/**
	 * The method to set the value to sendMailMerge
	 * @param sendMailMerge An Array representing the sendMailMerge
	 */
	public setSendMailMerge(sendMailMerge: Array<MailMerge>): void	{
		this.sendMailMerge = sendMailMerge;
		this.keyModified.set("send_mail_merge", 1);

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
	MailMergeWrapper as MasterModel,
	MailMergeWrapper as MailMergeWrapper
}
