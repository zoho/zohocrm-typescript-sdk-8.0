import {Requester} from "./requester";
import {Model} from "../../../../../../utils/util/model";

class Backup implements Model{

	private rrule: string;
	private id: bigint;
	private startDate: Date;
	private scheduledDate: Date;
	private status: string;
	private requester: Requester;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the rrule
	 * @returns A String representing the rrule
	 */
	public getRrule(): string	{
		return this.rrule;

	}

	/**
	 * The method to set the value to rrule
	 * @param rrule A String representing the rrule
	 */
	public setRrule(rrule: string): void	{
		this.rrule = rrule;
		this.keyModified.set("rrule", 1);

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
	 * The method to get the startDate
	 * @returns An instance of Date
	 */
	public getStartDate(): Date	{
		return this.startDate;

	}

	/**
	 * The method to set the value to startDate
	 * @param startDate An instance of Date
	 */
	public setStartDate(startDate: Date): void	{
		this.startDate = startDate;
		this.keyModified.set("start_date", 1);

	}

	/**
	 * The method to get the scheduledDate
	 * @returns An instance of Date
	 */
	public getScheduledDate(): Date	{
		return this.scheduledDate;

	}

	/**
	 * The method to set the value to scheduledDate
	 * @param scheduledDate An instance of Date
	 */
	public setScheduledDate(scheduledDate: Date): void	{
		this.scheduledDate = scheduledDate;
		this.keyModified.set("scheduled_date", 1);

	}

	/**
	 * The method to get the status
	 * @returns A String representing the status
	 */
	public getStatus(): string	{
		return this.status;

	}

	/**
	 * The method to set the value to status
	 * @param status A String representing the status
	 */
	public setStatus(status: string): void	{
		this.status = status;
		this.keyModified.set("status", 1);

	}

	/**
	 * The method to get the requester
	 * @returns An instance of Requester
	 */
	public getRequester(): Requester	{
		return this.requester;

	}

	/**
	 * The method to set the value to requester
	 * @param requester An instance of Requester
	 */
	public setRequester(requester: Requester): void	{
		this.requester = requester;
		this.keyModified.set("requester", 1);

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
	Backup as MasterModel,
	Backup as Backup
}
