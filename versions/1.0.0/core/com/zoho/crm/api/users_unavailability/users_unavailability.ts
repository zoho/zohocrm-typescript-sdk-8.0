import {User} from "./user";
import {Model} from "../../../../../../utils/util/model";

class UsersUnavailability implements Model{

	private service: string;
	private title: string;
	private allDay: boolean;
	private tpCalendarId: string;
	private tpEventId: string;
	private comments: string;
	private from: Date;
	private id: bigint;
	private to: Date;
	private user: User;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the service
	 * @returns A String representing the service
	 */
	public getService(): string	{
		return this.service;

	}

	/**
	 * The method to set the value to service
	 * @param service A String representing the service
	 */
	public setService(service: string): void	{
		this.service = service;
		this.keyModified.set("service", 1);

	}

	/**
	 * The method to get the title
	 * @returns A String representing the title
	 */
	public getTitle(): string	{
		return this.title;

	}

	/**
	 * The method to set the value to title
	 * @param title A String representing the title
	 */
	public setTitle(title: string): void	{
		this.title = title;
		this.keyModified.set("title", 1);

	}

	/**
	 * The method to get the allDay
	 * @returns A Boolean representing the allDay
	 */
	public getAllDay(): boolean	{
		return this.allDay;

	}

	/**
	 * The method to set the value to allDay
	 * @param allDay A Boolean representing the allDay
	 */
	public setAllDay(allDay: boolean): void	{
		this.allDay = allDay;
		this.keyModified.set("all_day", 1);

	}

	/**
	 * The method to get the tpCalendarId
	 * @returns A String representing the tpCalendarId
	 */
	public getTpCalendarId(): string	{
		return this.tpCalendarId;

	}

	/**
	 * The method to set the value to tpCalendarId
	 * @param tpCalendarId A String representing the tpCalendarId
	 */
	public setTpCalendarId(tpCalendarId: string): void	{
		this.tpCalendarId = tpCalendarId;
		this.keyModified.set("tp_calendar_id", 1);

	}

	/**
	 * The method to get the tpEventId
	 * @returns A String representing the tpEventId
	 */
	public getTpEventId(): string	{
		return this.tpEventId;

	}

	/**
	 * The method to set the value to tpEventId
	 * @param tpEventId A String representing the tpEventId
	 */
	public setTpEventId(tpEventId: string): void	{
		this.tpEventId = tpEventId;
		this.keyModified.set("tp_event_id", 1);

	}

	/**
	 * The method to get the comments
	 * @returns A String representing the comments
	 */
	public getComments(): string	{
		return this.comments;

	}

	/**
	 * The method to set the value to comments
	 * @param comments A String representing the comments
	 */
	public setComments(comments: string): void	{
		this.comments = comments;
		this.keyModified.set("comments", 1);

	}

	/**
	 * The method to get the from
	 * @returns An instance of Date
	 */
	public getFrom(): Date	{
		return this.from;

	}

	/**
	 * The method to set the value to from
	 * @param from An instance of Date
	 */
	public setFrom(from: Date): void	{
		this.from = from;
		this.keyModified.set("from", 1);

	}

	/**
	 * The method to get the id
	 * @returns A BigInt representing the id
	 */
	public getId(): bigint	{
		return this.id;

	}

	/**
	 * The method to set the value to id
	 * @param id A BigInt representing the id
	 */
	public setId(id: bigint): void	{
		this.id = id;
		this.keyModified.set("id", 1);

	}

	/**
	 * The method to get the to
	 * @returns An instance of Date
	 */
	public getTo(): Date	{
		return this.to;

	}

	/**
	 * The method to set the value to to
	 * @param to An instance of Date
	 */
	public setTo(to: Date): void	{
		this.to = to;
		this.keyModified.set("to", 1);

	}

	/**
	 * The method to get the user
	 * @returns An instance of User
	 */
	public getUser(): User	{
		return this.user;

	}

	/**
	 * The method to set the value to user
	 * @param user An instance of User
	 */
	public setUser(user: User): void	{
		this.user = user;
		this.keyModified.set("user", 1);

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
	UsersUnavailability as MasterModel,
	UsersUnavailability as UsersUnavailability
}
