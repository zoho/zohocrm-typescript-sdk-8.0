import {Attachments} from "./attachments";
import {InventoryDetails} from "./inventory_details";
import {ScheduleDetails} from "./schedule_details";
import {Template} from "./template";
import {To} from "./to";
import {Model} from "../../../../../../utils/util/model";

class EmailDrafts implements Model{

	private id: string;
	private modifiedTime: Date;
	private createdTime: Date;
	private from: string;
	private to: Array<To>;
	private replyTo: string;
	private cc: Array<To>;
	private bcc: Array<To>;
	private template: Template;
	private inventoryDetails: InventoryDetails;
	private attachments: Array<Attachments>;
	private scheduleDetails: ScheduleDetails;
	private richText: boolean;
	private emailOptOut: boolean;
	private subject: string;
	private content: string;
	private summary: string;
	private keyModified: Map<string, number> = new Map<string, number>();
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
	 * The method to get the modifiedTime
	 * @returns An instance of Date
	 */
	public getModifiedTime(): Date	{
		return this.modifiedTime;

	}

	/**
	 * The method to set the value to modifiedTime
	 * @param modifiedTime An instance of Date
	 */
	public setModifiedTime(modifiedTime: Date): void	{
		this.modifiedTime = modifiedTime;
		this.keyModified.set("modified_time", 1);

	}

	/**
	 * The method to get the createdTime
	 * @returns An instance of Date
	 */
	public getCreatedTime(): Date	{
		return this.createdTime;

	}

	/**
	 * The method to set the value to createdTime
	 * @param createdTime An instance of Date
	 */
	public setCreatedTime(createdTime: Date): void	{
		this.createdTime = createdTime;
		this.keyModified.set("created_time", 1);

	}

	/**
	 * The method to get the from
	 * @returns A String representing the from
	 */
	public getFrom(): string	{
		return this.from;

	}

	/**
	 * The method to set the value to from
	 * @param from A String representing the from
	 */
	public setFrom(from: string): void	{
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
	 * The method to get the replyTo
	 * @returns A String representing the replyTo
	 */
	public getReplyTo(): string	{
		return this.replyTo;

	}

	/**
	 * The method to set the value to replyTo
	 * @param replyTo A String representing the replyTo
	 */
	public setReplyTo(replyTo: string): void	{
		this.replyTo = replyTo;
		this.keyModified.set("reply_to", 1);

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
	 * The method to get the template
	 * @returns An instance of Template
	 */
	public getTemplate(): Template	{
		return this.template;

	}

	/**
	 * The method to set the value to template
	 * @param template An instance of Template
	 */
	public setTemplate(template: Template): void	{
		this.template = template;
		this.keyModified.set("template", 1);

	}

	/**
	 * The method to get the inventoryDetails
	 * @returns An instance of InventoryDetails
	 */
	public getInventoryDetails(): InventoryDetails	{
		return this.inventoryDetails;

	}

	/**
	 * The method to set the value to inventoryDetails
	 * @param inventoryDetails An instance of InventoryDetails
	 */
	public setInventoryDetails(inventoryDetails: InventoryDetails): void	{
		this.inventoryDetails = inventoryDetails;
		this.keyModified.set("inventory_details", 1);

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
	 * The method to get the scheduleDetails
	 * @returns An instance of ScheduleDetails
	 */
	public getScheduleDetails(): ScheduleDetails	{
		return this.scheduleDetails;

	}

	/**
	 * The method to set the value to scheduleDetails
	 * @param scheduleDetails An instance of ScheduleDetails
	 */
	public setScheduleDetails(scheduleDetails: ScheduleDetails): void	{
		this.scheduleDetails = scheduleDetails;
		this.keyModified.set("schedule_details", 1);

	}

	/**
	 * The method to get the richText
	 * @returns A Boolean representing the richText
	 */
	public getRichText(): boolean	{
		return this.richText;

	}

	/**
	 * The method to set the value to richText
	 * @param richText A Boolean representing the richText
	 */
	public setRichText(richText: boolean): void	{
		this.richText = richText;
		this.keyModified.set("rich_text", 1);

	}

	/**
	 * The method to get the emailOptOut
	 * @returns A Boolean representing the emailOptOut
	 */
	public getEmailOptOut(): boolean	{
		return this.emailOptOut;

	}

	/**
	 * The method to set the value to emailOptOut
	 * @param emailOptOut A Boolean representing the emailOptOut
	 */
	public setEmailOptOut(emailOptOut: boolean): void	{
		this.emailOptOut = emailOptOut;
		this.keyModified.set("email_opt_out", 1);

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
	 * The method to get the summary
	 * @returns A String representing the summary
	 */
	public getSummary(): string	{
		return this.summary;

	}

	/**
	 * The method to set the value to summary
	 * @param summary A String representing the summary
	 */
	public setSummary(summary: string): void	{
		this.summary = summary;
		this.keyModified.set("summary", 1);

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
	EmailDrafts as MasterModel,
	EmailDrafts as EmailDrafts
}
