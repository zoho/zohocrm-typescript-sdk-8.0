import {Attachments} from "./attachments";
import {LinkedRecord} from "./linked_record";
import {Status} from "./status";
import {UserDetails} from "./user_details";
import {MinifiedUser} from "../users/minified_user";
import {Choice} from "../../../../../../utils/util/choice";
import {Model} from "../../../../../../utils/util/model";

class Email implements Model{

	private attachments: Array<Attachments>;
	private threadId: string;
	private cc: Array<UserDetails>;
	private summary: string;
	private owner: MinifiedUser;
	private read: boolean;
	private content: string;
	private sent: boolean;
	private subject: string;
	private activityInfo: any;
	private intent: Choice<string>;
	private sentimentInfo: Choice<string>;
	private messageId: string;
	private source: string;
	private linkedRecord: LinkedRecord;
	private sentTime: string;
	private emotion: string;
	private from: UserDetails;
	private to: Array<UserDetails>;
	private time: Date;
	private status: Array<Status>;
	private hasAttachment: boolean;
	private hasThreadAttachment: boolean;
	private editable: boolean;
	private mailFormat: string;
	private replyTo: UserDetails;
	private keyModified: Map<string, number> = new Map<string, number>();
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
	 * The method to get the threadId
	 * @returns A String representing the threadId
	 */
	public getThreadId(): string	{
		return this.threadId;

	}

	/**
	 * The method to set the value to threadId
	 * @param threadId A String representing the threadId
	 */
	public setThreadId(threadId: string): void	{
		this.threadId = threadId;
		this.keyModified.set("thread_id", 1);

	}

	/**
	 * The method to get the cc
	 * @returns An Array representing the cc
	 */
	public getCc(): Array<UserDetails>	{
		return this.cc;

	}

	/**
	 * The method to set the value to cc
	 * @param cc An Array representing the cc
	 */
	public setCc(cc: Array<UserDetails>): void	{
		this.cc = cc;
		this.keyModified.set("cc", 1);

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
	 * The method to get the owner
	 * @returns An instance of MinifiedUser
	 */
	public getOwner(): MinifiedUser	{
		return this.owner;

	}

	/**
	 * The method to set the value to owner
	 * @param owner An instance of MinifiedUser
	 */
	public setOwner(owner: MinifiedUser): void	{
		this.owner = owner;
		this.keyModified.set("owner", 1);

	}

	/**
	 * The method to get the read
	 * @returns A Boolean representing the read
	 */
	public getRead(): boolean	{
		return this.read;

	}

	/**
	 * The method to set the value to read
	 * @param read A Boolean representing the read
	 */
	public setRead(read: boolean): void	{
		this.read = read;
		this.keyModified.set("read", 1);

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
	 * The method to get the activityInfo
	 * @returns An Object representing the activityInfo
	 */
	public getActivityInfo(): any	{
		return this.activityInfo;

	}

	/**
	 * The method to set the value to activityInfo
	 * @param activityInfo An Object representing the activityInfo
	 */
	public setActivityInfo(activityInfo: any): void	{
		this.activityInfo = activityInfo;
		this.keyModified.set("activity_info", 1);

	}

	/**
	 * The method to get the intent
	 * @returns An instance of Choice<string>
	 */
	public getIntent(): Choice<string>	{
		return this.intent;

	}

	/**
	 * The method to set the value to intent
	 * @param intent An instance of Choice<string>
	 */
	public setIntent(intent: Choice<string>): void	{
		this.intent = intent;
		this.keyModified.set("intent", 1);

	}

	/**
	 * The method to get the sentimentInfo
	 * @returns An instance of Choice<string>
	 */
	public getSentimentInfo(): Choice<string>	{
		return this.sentimentInfo;

	}

	/**
	 * The method to set the value to sentimentInfo
	 * @param sentimentInfo An instance of Choice<string>
	 */
	public setSentimentInfo(sentimentInfo: Choice<string>): void	{
		this.sentimentInfo = sentimentInfo;
		this.keyModified.set("sentiment_info", 1);

	}

	/**
	 * The method to get the messageId
	 * @returns A String representing the messageId
	 */
	public getMessageId(): string	{
		return this.messageId;

	}

	/**
	 * The method to set the value to messageId
	 * @param messageId A String representing the messageId
	 */
	public setMessageId(messageId: string): void	{
		this.messageId = messageId;
		this.keyModified.set("message_id", 1);

	}

	/**
	 * The method to get the source
	 * @returns A String representing the source
	 */
	public getSource(): string	{
		return this.source;

	}

	/**
	 * The method to set the value to source
	 * @param source A String representing the source
	 */
	public setSource(source: string): void	{
		this.source = source;
		this.keyModified.set("source", 1);

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
	 * The method to get the sentTime
	 * @returns A String representing the sentTime
	 */
	public getSentTime(): string	{
		return this.sentTime;

	}

	/**
	 * The method to set the value to sentTime
	 * @param sentTime A String representing the sentTime
	 */
	public setSentTime(sentTime: string): void	{
		this.sentTime = sentTime;
		this.keyModified.set("sent_time", 1);

	}

	/**
	 * The method to get the emotion
	 * @returns A String representing the emotion
	 */
	public getEmotion(): string	{
		return this.emotion;

	}

	/**
	 * The method to set the value to emotion
	 * @param emotion A String representing the emotion
	 */
	public setEmotion(emotion: string): void	{
		this.emotion = emotion;
		this.keyModified.set("emotion", 1);

	}

	/**
	 * The method to get the from
	 * @returns An instance of UserDetails
	 */
	public getFrom(): UserDetails	{
		return this.from;

	}

	/**
	 * The method to set the value to from
	 * @param from An instance of UserDetails
	 */
	public setFrom(from: UserDetails): void	{
		this.from = from;
		this.keyModified.set("from", 1);

	}

	/**
	 * The method to get the to
	 * @returns An Array representing the to
	 */
	public getTo(): Array<UserDetails>	{
		return this.to;

	}

	/**
	 * The method to set the value to to
	 * @param to An Array representing the to
	 */
	public setTo(to: Array<UserDetails>): void	{
		this.to = to;
		this.keyModified.set("to", 1);

	}

	/**
	 * The method to get the time
	 * @returns An instance of Date
	 */
	public getTime(): Date	{
		return this.time;

	}

	/**
	 * The method to set the value to time
	 * @param time An instance of Date
	 */
	public setTime(time: Date): void	{
		this.time = time;
		this.keyModified.set("time", 1);

	}

	/**
	 * The method to get the status
	 * @returns An Array representing the status
	 */
	public getStatus(): Array<Status>	{
		return this.status;

	}

	/**
	 * The method to set the value to status
	 * @param status An Array representing the status
	 */
	public setStatus(status: Array<Status>): void	{
		this.status = status;
		this.keyModified.set("status", 1);

	}

	/**
	 * The method to get the hasAttachment
	 * @returns A Boolean representing the hasAttachment
	 */
	public getHasAttachment(): boolean	{
		return this.hasAttachment;

	}

	/**
	 * The method to set the value to hasAttachment
	 * @param hasAttachment A Boolean representing the hasAttachment
	 */
	public setHasAttachment(hasAttachment: boolean): void	{
		this.hasAttachment = hasAttachment;
		this.keyModified.set("has_attachment", 1);

	}

	/**
	 * The method to get the hasThreadAttachment
	 * @returns A Boolean representing the hasThreadAttachment
	 */
	public getHasThreadAttachment(): boolean	{
		return this.hasThreadAttachment;

	}

	/**
	 * The method to set the value to hasThreadAttachment
	 * @param hasThreadAttachment A Boolean representing the hasThreadAttachment
	 */
	public setHasThreadAttachment(hasThreadAttachment: boolean): void	{
		this.hasThreadAttachment = hasThreadAttachment;
		this.keyModified.set("has_thread_attachment", 1);

	}

	/**
	 * The method to get the editable
	 * @returns A Boolean representing the editable
	 */
	public getEditable(): boolean	{
		return this.editable;

	}

	/**
	 * The method to set the value to editable
	 * @param editable A Boolean representing the editable
	 */
	public setEditable(editable: boolean): void	{
		this.editable = editable;
		this.keyModified.set("editable", 1);

	}

	/**
	 * The method to get the mailFormat
	 * @returns A String representing the mailFormat
	 */
	public getMailFormat(): string	{
		return this.mailFormat;

	}

	/**
	 * The method to set the value to mailFormat
	 * @param mailFormat A String representing the mailFormat
	 */
	public setMailFormat(mailFormat: string): void	{
		this.mailFormat = mailFormat;
		this.keyModified.set("mail_format", 1);

	}

	/**
	 * The method to get the replyTo
	 * @returns An instance of UserDetails
	 */
	public getReplyTo(): UserDetails	{
		return this.replyTo;

	}

	/**
	 * The method to set the value to replyTo
	 * @param replyTo An instance of UserDetails
	 */
	public setReplyTo(replyTo: UserDetails): void	{
		this.replyTo = replyTo;
		this.keyModified.set("reply_to", 1);

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
	Email as MasterModel,
	Email as Email
}
