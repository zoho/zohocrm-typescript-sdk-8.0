import {MailMergeTemplate} from "./mail_merge_template";
import {Signers} from "./signers";
import {Model} from "../../../../../../utils/util/model";

class SignMailMerge implements Model{

	private mailMergeTemplate: MailMergeTemplate;
	private signInOrder: boolean;
	private fileName: string;
	private signers: Array<Signers>;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the mailMergeTemplate
	 * @returns An instance of MailMergeTemplate
	 */
	public getMailMergeTemplate(): MailMergeTemplate	{
		return this.mailMergeTemplate;

	}

	/**
	 * The method to set the value to mailMergeTemplate
	 * @param mailMergeTemplate An instance of MailMergeTemplate
	 */
	public setMailMergeTemplate(mailMergeTemplate: MailMergeTemplate): void	{
		this.mailMergeTemplate = mailMergeTemplate;
		this.keyModified.set("mail_merge_template", 1);

	}

	/**
	 * The method to get the signInOrder
	 * @returns A Boolean representing the signInOrder
	 */
	public getSignInOrder(): boolean	{
		return this.signInOrder;

	}

	/**
	 * The method to set the value to signInOrder
	 * @param signInOrder A Boolean representing the signInOrder
	 */
	public setSignInOrder(signInOrder: boolean): void	{
		this.signInOrder = signInOrder;
		this.keyModified.set("sign_in_order", 1);

	}

	/**
	 * The method to get the fileName
	 * @returns A String representing the fileName
	 */
	public getFileName(): string	{
		return this.fileName;

	}

	/**
	 * The method to set the value to fileName
	 * @param fileName A String representing the fileName
	 */
	public setFileName(fileName: string): void	{
		this.fileName = fileName;
		this.keyModified.set("file_name", 1);

	}

	/**
	 * The method to get the signers
	 * @returns An Array representing the signers
	 */
	public getSigners(): Array<Signers>	{
		return this.signers;

	}

	/**
	 * The method to set the value to signers
	 * @param signers An Array representing the signers
	 */
	public setSigners(signers: Array<Signers>): void	{
		this.signers = signers;
		this.keyModified.set("signers", 1);

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
	SignMailMerge as MasterModel,
	SignMailMerge as SignMailMerge
}
