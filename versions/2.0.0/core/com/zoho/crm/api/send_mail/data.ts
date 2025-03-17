import {Attachment} from "./attachment";
import {Cc} from "./cc";
import {DataSubjectRequest} from "./data_subject_request";
import {From} from "./from";
import {InReplyTo} from "./in_reply_to";
import {InventoryDetails} from "./inventory_details";
import {LinkedRecord} from "./linked_record";
import {Template} from "./template";
import {To} from "./to";
import {Choice} from "../../../../../../utils/util/choice";
import {Model} from "../../../../../../utils/util/model";

class Data implements Model{

	private from: From;
	private to: Array<To>;
	private cc: Array<Cc>;
	private bcc: Array<Cc>;
	private replyTo: To;
	private orgEmail: boolean;
	private scheduledTime: Date;
	private mailFormat: Choice<string>;
	private consentEmail: boolean;
	private content: string;
	private subject: string;
	private inReplyTo: InReplyTo;
	private template: Template;
	private inventoryDetails: InventoryDetails;
	private dataSubjectRequest: DataSubjectRequest;
	private attachments: Array<Attachment>;
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
	public getCc(): Array<Cc>	{
		return this.cc;

	}

	/**
	 * The method to set the value to cc
	 * @param cc An Array representing the cc
	 */
	public setCc(cc: Array<Cc>): void	{
		this.cc = cc;
		this.keyModified.set("cc", 1);

	}

	/**
	 * The method to get the bcc
	 * @returns An Array representing the bcc
	 */
	public getBcc(): Array<Cc>	{
		return this.bcc;

	}

	/**
	 * The method to set the value to bcc
	 * @param bcc An Array representing the bcc
	 */
	public setBcc(bcc: Array<Cc>): void	{
		this.bcc = bcc;
		this.keyModified.set("bcc", 1);

	}

	/**
	 * The method to get the replyTo
	 * @returns An instance of To
	 */
	public getReplyTo(): To	{
		return this.replyTo;

	}

	/**
	 * The method to set the value to replyTo
	 * @param replyTo An instance of To
	 */
	public setReplyTo(replyTo: To): void	{
		this.replyTo = replyTo;
		this.keyModified.set("reply_to", 1);

	}

	/**
	 * The method to get the orgEmail
	 * @returns A Boolean representing the orgEmail
	 */
	public getOrgEmail(): boolean	{
		return this.orgEmail;

	}

	/**
	 * The method to set the value to orgEmail
	 * @param orgEmail A Boolean representing the orgEmail
	 */
	public setOrgEmail(orgEmail: boolean): void	{
		this.orgEmail = orgEmail;
		this.keyModified.set("org_email", 1);

	}

	/**
	 * The method to get the scheduledTime
	 * @returns An instance of Date
	 */
	public getScheduledTime(): Date	{
		return this.scheduledTime;

	}

	/**
	 * The method to set the value to scheduledTime
	 * @param scheduledTime An instance of Date
	 */
	public setScheduledTime(scheduledTime: Date): void	{
		this.scheduledTime = scheduledTime;
		this.keyModified.set("scheduled_time", 1);

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
	 * The method to get the consentEmail
	 * @returns A Boolean representing the consentEmail
	 */
	public getConsentEmail(): boolean	{
		return this.consentEmail;

	}

	/**
	 * The method to set the value to consentEmail
	 * @param consentEmail A Boolean representing the consentEmail
	 */
	public setConsentEmail(consentEmail: boolean): void	{
		this.consentEmail = consentEmail;
		this.keyModified.set("consent_email", 1);

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
	 * The method to get the inReplyTo
	 * @returns An instance of InReplyTo
	 */
	public getInReplyTo(): InReplyTo	{
		return this.inReplyTo;

	}

	/**
	 * The method to set the value to inReplyTo
	 * @param inReplyTo An instance of InReplyTo
	 */
	public setInReplyTo(inReplyTo: InReplyTo): void	{
		this.inReplyTo = inReplyTo;
		this.keyModified.set("in_reply_to", 1);

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
	 * The method to get the dataSubjectRequest
	 * @returns An instance of DataSubjectRequest
	 */
	public getDataSubjectRequest(): DataSubjectRequest	{
		return this.dataSubjectRequest;

	}

	/**
	 * The method to set the value to dataSubjectRequest
	 * @param dataSubjectRequest An instance of DataSubjectRequest
	 */
	public setDataSubjectRequest(dataSubjectRequest: DataSubjectRequest): void	{
		this.dataSubjectRequest = dataSubjectRequest;
		this.keyModified.set("data_subject_request", 1);

	}

	/**
	 * The method to get the attachments
	 * @returns An Array representing the attachments
	 */
	public getAttachments(): Array<Attachment>	{
		return this.attachments;

	}

	/**
	 * The method to set the value to attachments
	 * @param attachments An Array representing the attachments
	 */
	public setAttachments(attachments: Array<Attachment>): void	{
		this.attachments = attachments;
		this.keyModified.set("attachments", 1);

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
	Data as MasterModel,
	Data as Data
}
