import {History} from "./history";
import {Info} from "./info";
import {ResponseHandler} from "./response_handler";
import {Model} from "../../../../../../utils/util/model";

class HistoryWrapper implements Model, ResponseHandler{

	private history: Array<History>;
	private info: Info;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the history
	 * @returns An Array representing the history
	 */
	public getHistory(): Array<History>	{
		return this.history;

	}

	/**
	 * The method to set the value to history
	 * @param history An Array representing the history
	 */
	public setHistory(history: Array<History>): void	{
		this.history = history;
		this.keyModified.set("history", 1);

	}

	/**
	 * The method to get the info
	 * @returns An instance of Info
	 */
	public getInfo(): Info	{
		return this.info;

	}

	/**
	 * The method to set the value to info
	 * @param info An instance of Info
	 */
	public setInfo(info: Info): void	{
		this.info = info;
		this.keyModified.set("info", 1);

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
	HistoryWrapper as MasterModel,
	HistoryWrapper as HistoryWrapper
}
