import {Attachments} from "./attachments";
import {From} from "./from";
import {LinkedRecord} from "./linked_record";
import {To} from "./to";
import {Choice} from "../../../../../../utils/util/choice";
import {Model} from "../../../../../../utils/util/model";

class AssociateEmail implements Model{

	private from: From;
	private to: Array<To>;
	private cc: Array<To>;
	private bcc: Array<To>;
	private attachments: Array<Attachments>;
	private content: string;
	private mailFormat: Choice<string>;
	private subject: string;
	private originalMessageId: string;
	private sent: boolean;
	private dateTime: Date;
	private linkedRecord: LinkedRecord;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the from
	 * @returns An instance of From
	 */
	public getFrom(): From	{
		return this.from;

	}

	/**
	 * The method to set the value to from
	 * @param from An instance of From
	 */
	public setFrom(from: From): void	{
		this.from = from;
		this.keyModified.set("from", 1);

	}

	/**
	 * The method to get the to
	 * @returns An Array representing the to
	 */
	public getTo(): Array<To>	{
		return this.to;

	}

	/**
	 * The method to set the value to to
	 * @param to An Array representing the to
	 */
	public setTo(to: Array<To>): void	{
		this.to = to;
		this.keyModified.set("to", 1);

	}

	/**
	 * The method to get the cc
	 * @returns An Array representing the cc
	 */
	public getCc(): Array<To>	{
		return this.cc;

	}

	/**
	 * The method to set the value to cc
	 * @param cc An Array representing the cc
	 */
	public setCc(cc: Array<To>): void	{
		this.cc = cc;
		this.keyModified.set("cc", 1);

	}

	/**
	 * The method to get the bcc
	 * @returns An Array representing the bcc
	 */
	public getBcc(): Array<To>	{
		return this.bcc;

	}

	/**
	 * The method to set the value to bcc
	 * @param bcc An Array representing the bcc
	 */
	public setBcc(bcc: Array<To>): void	{
		this.bcc = bcc;
		this.keyModified.set("bcc", 1);

	}

	/**
	 * The method to get the attachments
	 * @returns An Array representing the attachments
	 */
	public getAttachments(): Array<Attachments>	{
		return this.attachments;

	}

	/**
	 * The method to set the value to attachments
	 * @param attachments An Array representing the attachments
	 */
	public setAttachments(attachments: Array<Attachments>): void	{
		this.attachments = attachments;
		this.keyModified.set("attachments", 1);

	}

	/**
	 * The method to get the content
	 * @returns A String representing the content
	 */
	public getContent(): string	{
		return this.content;

	}

	/**
	 * The method to set the value to content
	 * @param content A String representing the content
	 */
	public setContent(content: string): void	{
		this.content = content;
		this.keyModified.set("content", 1);

	}

	/**
	 * The method to get the mailFormat
	 * @returns An instance of Choice<string>
	 */
	public getMailFormat(): Choice<string>	{
		return this.mailFormat;

	}

	/**
	 * The method to set the value to mailFormat
	 * @param mailFormat An instance of Choice<string>
	 */
	public setMailFormat(mailFormat: Choice<string>): void	{
		this.mailFormat = mailFormat;
		this.keyModified.set("mail_format", 1);

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
	 * The method to get the originalMessageId
	 * @returns A String representing the originalMessageId
	 */
	public getOriginalMessageId(): string	{
		return this.originalMessageId;

	}

	/**
	 * The method to set the value to originalMessageId
	 * @param originalMessageId A String representing the originalMessageId
	 */
	public setOriginalMessageId(originalMessageId: string): void	{
		this.originalMessageId = originalMessageId;
		this.keyModified.set("original_message_id", 1);

	}

	/**
	 * The method to get the sent
	 * @returns A Boolean representing the sent
	 */
	public getSent(): boolean	{
		return this.sent;

	}

	/**
	 * The method to set the value to sent
	 * @param sent A Boolean representing the sent
	 */
	public setSent(sent: boolean): void	{
		this.sent = sent;
		this.keyModified.set("sent", 1);

	}

	/**
	 * The method to get the dateTime
	 * @returns An instance of Date
	 */
	public getDateTime(): Date	{
		return this.dateTime;

	}

	/**
	 * The method to set the value to dateTime
	 * @param dateTime An instance of Date
	 */
	public setDateTime(dateTime: Date): void	{
		this.dateTime = dateTime;
		this.keyModified.set("date_time", 1);

	}

	/**
	 * The method to get the linkedRecord
	 * @returns An instance of LinkedRecord
	 */
	public getLinkedRecord(): LinkedRecord	{
		return this.linkedRecord;

	}

	/**
	 * The method to set the value to linkedRecord
	 * @param linkedRecord An instance of LinkedRecord
	 */
	public setLinkedRecord(linkedRecord: LinkedRecord): void	{
		this.linkedRecord = linkedRecord;
		this.keyModified.set("linked_record", 1);

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
	AssociateEmail as MasterModel,
	AssociateEmail as AssociateEmail
}
