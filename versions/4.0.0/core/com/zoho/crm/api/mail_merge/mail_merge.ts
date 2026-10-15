import {Address} from "./address";
import {MailMergeTemplate} from "./mail_merge_template";
import {Model} from "../../../../../../utils/util/model";

class MailMerge implements Model{

	private mailMergeTemplate: MailMergeTemplate;
	private fromAddress: Address;
	private toAddress: Array<Address>;
	private ccEmail: Array<Address>;
	private bccEmail: Array<Address>;
	private subject: string;
	private message: string;
	private type: string;
	private attachmentName: string;
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
	 * The method to get the fromAddress
	 * @returns An instance of Address
	 */
	public getFromAddress(): Address	{
		return this.fromAddress;

	}

	/**
	 * The method to set the value to fromAddress
	 * @param fromAddress An instance of Address
	 */
	public setFromAddress(fromAddress: Address): void	{
		this.fromAddress = fromAddress;
		this.keyModified.set("from_address", 1);

	}

	/**
	 * The method to get the toAddress
	 * @returns An Array representing the toAddress
	 */
	public getToAddress(): Array<Address>	{
		return this.toAddress;

	}

	/**
	 * The method to set the value to toAddress
	 * @param toAddress An Array representing the toAddress
	 */
	public setToAddress(toAddress: Array<Address>): void	{
		this.toAddress = toAddress;
		this.keyModified.set("to_address", 1);

	}

	/**
	 * The method to get the ccEmail
	 * @returns An Array representing the ccEmail
	 */
	public getCcEmail(): Array<Address>	{
		return this.ccEmail;

	}

	/**
	 * The method to set the value to ccEmail
	 * @param ccEmail An Array representing the ccEmail
	 */
	public setCcEmail(ccEmail: Array<Address>): void	{
		this.ccEmail = ccEmail;
		this.keyModified.set("cc_email", 1);

	}

	/**
	 * The method to get the bccEmail
	 * @returns An Array representing the bccEmail
	 */
	public getBccEmail(): Array<Address>	{
		return this.bccEmail;

	}

	/**
	 * The method to set the value to bccEmail
	 * @param bccEmail An Array representing the bccEmail
	 */
	public setBccEmail(bccEmail: Array<Address>): void	{
		this.bccEmail = bccEmail;
		this.keyModified.set("bcc_email", 1);

	}

	/**
	 * The method to get the subject
	 * @returns A String representing the subject
	 */
	public getSubject(): string	{
		return this.subject;

	}

	/**
	 * The method to set the value to subject
	 * @param subject A String representing the subject
	 */
	public setSubject(subject: string): void	{
		this.subject = subject;
		this.keyModified.set("subject", 1);

	}

	/**
	 * The method to get the message
	 * @returns A String representing the message
	 */
	public getMessage(): string	{
		return this.message;

	}

	/**
	 * The method to set the value to message
	 * @param message A String representing the message
	 */
	public setMessage(message: string): void	{
		this.message = message;
		this.keyModified.set("message", 1);

	}

	/**
	 * The method to get the type
	 * @returns A String representing the type
	 */
	public getType(): string	{
		return this.type;

	}

	/**
	 * The method to set the value to type
	 * @param type A String representing the type
	 */
	public setType(type: string): void	{
		this.type = type;
		this.keyModified.set("type", 1);

	}

	/**
	 * The method to get the attachmentName
	 * @returns A String representing the attachmentName
	 */
	public getAttachmentName(): string	{
		return this.attachmentName;

	}

	/**
	 * The method to set the value to attachmentName
	 * @param attachmentName A String representing the attachmentName
	 */
	public setAttachmentName(attachmentName: string): void	{
		this.attachmentName = attachmentName;
		this.keyModified.set("attachment_name", 1);

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
	MailMerge as MasterModel,
	MailMerge as MailMerge
}
