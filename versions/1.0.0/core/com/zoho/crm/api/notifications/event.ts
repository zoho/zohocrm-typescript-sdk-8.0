import {NotificationCondition} from "./notification_condition";
import {Model} from "../../../../../../utils/util/model";

class Event implements Model{

	protected resourceName: string;
	protected channelExpiry: Date;
	protected resourceId: bigint;
	protected resourceUri: string;
	protected channelId: string;
	protected notificationCondition: Array<NotificationCondition>;
	protected keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the resourceName
	 * @returns A String representing the resourceName
	 */
	public getResourceName(): string	{
		return this.resourceName;

	}

	/**
	 * The method to set the value to resourceName
	 * @param resourceName A String representing the resourceName
	 */
	public setResourceName(resourceName: string): void	{
		this.resourceName = resourceName;
		this.keyModified.set("resource_name", 1);

	}

	/**
	 * The method to get the channelExpiry
	 * @returns An instance of Date
	 */
	public getChannelExpiry(): Date	{
		return this.channelExpiry;

	}

	/**
	 * The method to set the value to channelExpiry
	 * @param channelExpiry An instance of Date
	 */
	public setChannelExpiry(channelExpiry: Date): void	{
		this.channelExpiry = channelExpiry;
		this.keyModified.set("channel_expiry", 1);

	}

	/**
	 * The method to get the resourceId
	 * @returns A BigInt representing the resourceId
	 */
	public getResourceId(): bigint	{
		return this.resourceId;

	}

	/**
	 * The method to set the value to resourceId
	 * @param resourceId A BigInt representing the resourceId
	 */
	public setResourceId(resourceId: bigint): void	{
		this.resourceId = resourceId;
		this.keyModified.set("resource_id", 1);

	}

	/**
	 * The method to get the resourceUri
	 * @returns A String representing the resourceUri
	 */
	public getResourceUri(): string	{
		return this.resourceUri;

	}

	/**
	 * The method to set the value to resourceUri
	 * @param resourceUri A String representing the resourceUri
	 */
	public setResourceUri(resourceUri: string): void	{
		this.resourceUri = resourceUri;
		this.keyModified.set("resource_uri", 1);

	}

	/**
	 * The method to get the channelId
	 * @returns A String representing the channelId
	 */
	public getChannelId(): string	{
		return this.channelId;

	}

	/**
	 * The method to set the value to channelId
	 * @param channelId A String representing the channelId
	 */
	public setChannelId(channelId: string): void	{
		this.channelId = channelId;
		this.keyModified.set("channel_id", 1);

	}

	/**
	 * The method to get the notificationCondition
	 * @returns An Array representing the notificationCondition
	 */
	public getNotificationCondition(): Array<NotificationCondition>	{
		return this.notificationCondition;

	}

	/**
	 * The method to set the value to notificationCondition
	 * @param notificationCondition An Array representing the notificationCondition
	 */
	public setNotificationCondition(notificationCondition: Array<NotificationCondition>): void	{
		this.notificationCondition = notificationCondition;
		this.keyModified.set("notification_condition", 1);

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
	Event as MasterModel,
	Event as Event
}
