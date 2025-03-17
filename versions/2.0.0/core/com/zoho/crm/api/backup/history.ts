import {Requester} from "./requester";
import {Model} from "../../../../../../utils/util/model";

class History implements Model{

	private id: bigint;
	private logTime: Date;
	private action: string;
	private repeatType: string;
	private count: number;
	private fileName: string;
	private state: string;
	private doneBy: Requester;
	private keyModified: Map<string, number> = new Map<string, number>();
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
	 * The method to get the logTime
	 * @returns An instance of Date
	 */
	public getLogTime(): Date	{
		return this.logTime;

	}

	/**
	 * The method to set the value to logTime
	 * @param logTime An instance of Date
	 */
	public setLogTime(logTime: Date): void	{
		this.logTime = logTime;
		this.keyModified.set("log_time", 1);

	}

	/**
	 * The method to get the action
	 * @returns A String representing the action
	 */
	public getAction(): string	{
		return this.action;

	}

	/**
	 * The method to set the value to action
	 * @param action A String representing the action
	 */
	public setAction(action: string): void	{
		this.action = action;
		this.keyModified.set("action", 1);

	}

	/**
	 * The method to get the repeatType
	 * @returns A String representing the repeatType
	 */
	public getRepeatType(): string	{
		return this.repeatType;

	}

	/**
	 * The method to set the value to repeatType
	 * @param repeatType A String representing the repeatType
	 */
	public setRepeatType(repeatType: string): void	{
		this.repeatType = repeatType;
		this.keyModified.set("repeat_type", 1);

	}

	/**
	 * The method to get the count
	 * @returns A number representing the count
	 */
	public getCount(): number	{
		return this.count;

	}

	/**
	 * The method to set the value to count
	 * @param count A number representing the count
	 */
	public setCount(count: number): void	{
		this.count = count;
		this.keyModified.set("count", 1);

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
	 * The method to get the state
	 * @returns A String representing the state
	 */
	public getState(): string	{
		return this.state;

	}

	/**
	 * The method to set the value to state
	 * @param state A String representing the state
	 */
	public setState(state: string): void	{
		this.state = state;
		this.keyModified.set("state", 1);

	}

	/**
	 * The method to get the doneBy
	 * @returns An instance of Requester
	 */
	public getDoneBy(): Requester	{
		return this.doneBy;

	}

	/**
	 * The method to set the value to doneBy
	 * @param doneBy An instance of Requester
	 */
	public setDoneBy(doneBy: Requester): void	{
		this.doneBy = doneBy;
		this.keyModified.set("done_by", 1);

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
	History as MasterModel,
	History as History
}
