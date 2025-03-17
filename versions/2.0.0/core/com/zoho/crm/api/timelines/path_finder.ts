import {State} from "./state";
import {Model} from "../../../../../../utils/util/model";

class PathFinder implements Model{

	private processEntry: boolean;
	private processExit: boolean;
	private state: State;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the processEntry
	 * @returns A Boolean representing the processEntry
	 */
	public getProcessEntry(): boolean	{
		return this.processEntry;

	}

	/**
	 * The method to set the value to processEntry
	 * @param processEntry A Boolean representing the processEntry
	 */
	public setProcessEntry(processEntry: boolean): void	{
		this.processEntry = processEntry;
		this.keyModified.set("process_entry", 1);

	}

	/**
	 * The method to get the processExit
	 * @returns A Boolean representing the processExit
	 */
	public getProcessExit(): boolean	{
		return this.processExit;

	}

	/**
	 * The method to set the value to processExit
	 * @param processExit A Boolean representing the processExit
	 */
	public setProcessExit(processExit: boolean): void	{
		this.processExit = processExit;
		this.keyModified.set("process_exit", 1);

	}

	/**
	 * The method to get the state
	 * @returns An instance of State
	 */
	public getState(): State	{
		return this.state;

	}

	/**
	 * The method to set the value to state
	 * @param state An instance of State
	 */
	public setState(state: State): void	{
		this.state = state;
		this.keyModified.set("state", 1);

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
	PathFinder as MasterModel,
	PathFinder as PathFinder
}
