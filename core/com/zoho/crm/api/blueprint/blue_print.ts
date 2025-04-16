import {ProcessInfo} from "./process_info";
import {Transition} from "./transition";
import {Record} from "../record/record";
import {Model} from "../../../../../../utils/util/model";

class BluePrint implements Model{

	private transitionId: string;
	private data: Record;
	private processInfo: ProcessInfo;
	private transitions: Array<Transition>;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the transitionId
	 * @returns A String representing the transitionId
	 */
	public getTransitionId(): string	{
		return this.transitionId;

	}

	/**
	 * The method to set the value to transitionId
	 * @param transitionId A String representing the transitionId
	 */
	public setTransitionId(transitionId: string): void	{
		this.transitionId = transitionId;
		this.keyModified.set("transition_id", 1);

	}

	/**
	 * The method to get the data
	 * @returns An instance of Record
	 */
	public getData(): Record	{
		return this.data;

	}

	/**
	 * The method to set the value to data
	 * @param data An instance of Record
	 */
	public setData(data: Record): void	{
		this.data = data;
		this.keyModified.set("data", 1);

	}

	/**
	 * The method to get the processInfo
	 * @returns An instance of ProcessInfo
	 */
	public getProcessInfo(): ProcessInfo	{
		return this.processInfo;

	}

	/**
	 * The method to set the value to processInfo
	 * @param processInfo An instance of ProcessInfo
	 */
	public setProcessInfo(processInfo: ProcessInfo): void	{
		this.processInfo = processInfo;
		this.keyModified.set("process_info", 1);

	}

	/**
	 * The method to get the transitions
	 * @returns An Array representing the transitions
	 */
	public getTransitions(): Array<Transition>	{
		return this.transitions;

	}

	/**
	 * The method to set the value to transitions
	 * @param transitions An Array representing the transitions
	 */
	public setTransitions(transitions: Array<Transition>): void	{
		this.transitions = transitions;
		this.keyModified.set("transitions", 1);

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
	BluePrint as MasterModel,
	BluePrint as BluePrint
}
