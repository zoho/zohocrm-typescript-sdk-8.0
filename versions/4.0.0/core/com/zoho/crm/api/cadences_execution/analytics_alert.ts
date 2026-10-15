import {Model} from "../../../../../../utils/util/model";

class AnalyticsAlert implements Model{

	private emailCount: number;
	private clikedEmailCount: number;
	private bouncedEmailCount: number;
	private repliedEmailCount: number;
	private emailSpamCount: number;
	private sentEmailCount: number;
	private unsentEmailCount: number;
	private openedEmailCount: number;
	private unsubscribedEmailCount: number;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the emailCount
	 * @returns A number representing the emailCount
	 */
	public getEmailCount(): number	{
		return this.emailCount;

	}

	/**
	 * The method to set the value to emailCount
	 * @param emailCount A number representing the emailCount
	 */
	public setEmailCount(emailCount: number): void	{
		this.emailCount = emailCount;
		this.keyModified.set("email_count", 1);

	}

	/**
	 * The method to get the clikedEmailCount
	 * @returns A number representing the clikedEmailCount
	 */
	public getClikedEmailCount(): number	{
		return this.clikedEmailCount;

	}

	/**
	 * The method to set the value to clikedEmailCount
	 * @param clikedEmailCount A number representing the clikedEmailCount
	 */
	public setClikedEmailCount(clikedEmailCount: number): void	{
		this.clikedEmailCount = clikedEmailCount;
		this.keyModified.set("cliked_email_count", 1);

	}

	/**
	 * The method to get the bouncedEmailCount
	 * @returns A number representing the bouncedEmailCount
	 */
	public getBouncedEmailCount(): number	{
		return this.bouncedEmailCount;

	}

	/**
	 * The method to set the value to bouncedEmailCount
	 * @param bouncedEmailCount A number representing the bouncedEmailCount
	 */
	public setBouncedEmailCount(bouncedEmailCount: number): void	{
		this.bouncedEmailCount = bouncedEmailCount;
		this.keyModified.set("bounced_email_count", 1);

	}

	/**
	 * The method to get the repliedEmailCount
	 * @returns A number representing the repliedEmailCount
	 */
	public getRepliedEmailCount(): number	{
		return this.repliedEmailCount;

	}

	/**
	 * The method to set the value to repliedEmailCount
	 * @param repliedEmailCount A number representing the repliedEmailCount
	 */
	public setRepliedEmailCount(repliedEmailCount: number): void	{
		this.repliedEmailCount = repliedEmailCount;
		this.keyModified.set("replied_email_count", 1);

	}

	/**
	 * The method to get the emailSpamCount
	 * @returns A number representing the emailSpamCount
	 */
	public getEmailSpamCount(): number	{
		return this.emailSpamCount;

	}

	/**
	 * The method to set the value to emailSpamCount
	 * @param emailSpamCount A number representing the emailSpamCount
	 */
	public setEmailSpamCount(emailSpamCount: number): void	{
		this.emailSpamCount = emailSpamCount;
		this.keyModified.set("email_spam_count", 1);

	}

	/**
	 * The method to get the sentEmailCount
	 * @returns A number representing the sentEmailCount
	 */
	public getSentEmailCount(): number	{
		return this.sentEmailCount;

	}

	/**
	 * The method to set the value to sentEmailCount
	 * @param sentEmailCount A number representing the sentEmailCount
	 */
	public setSentEmailCount(sentEmailCount: number): void	{
		this.sentEmailCount = sentEmailCount;
		this.keyModified.set("sent_email_count", 1);

	}

	/**
	 * The method to get the unsentEmailCount
	 * @returns A number representing the unsentEmailCount
	 */
	public getUnsentEmailCount(): number	{
		return this.unsentEmailCount;

	}

	/**
	 * The method to set the value to unsentEmailCount
	 * @param unsentEmailCount A number representing the unsentEmailCount
	 */
	public setUnsentEmailCount(unsentEmailCount: number): void	{
		this.unsentEmailCount = unsentEmailCount;
		this.keyModified.set("unsent_email_count", 1);

	}

	/**
	 * The method to get the openedEmailCount
	 * @returns A number representing the openedEmailCount
	 */
	public getOpenedEmailCount(): number	{
		return this.openedEmailCount;

	}

	/**
	 * The method to set the value to openedEmailCount
	 * @param openedEmailCount A number representing the openedEmailCount
	 */
	public setOpenedEmailCount(openedEmailCount: number): void	{
		this.openedEmailCount = openedEmailCount;
		this.keyModified.set("opened_email_count", 1);

	}

	/**
	 * The method to get the unsubscribedEmailCount
	 * @returns A number representing the unsubscribedEmailCount
	 */
	public getUnsubscribedEmailCount(): number	{
		return this.unsubscribedEmailCount;

	}

	/**
	 * The method to set the value to unsubscribedEmailCount
	 * @param unsubscribedEmailCount A number representing the unsubscribedEmailCount
	 */
	public setUnsubscribedEmailCount(unsubscribedEmailCount: number): void	{
		this.unsubscribedEmailCount = unsubscribedEmailCount;
		this.keyModified.set("unsubscribed_email_count", 1);

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
	AnalyticsAlert as MasterModel,
	AnalyticsAlert as AnalyticsAlert
}
