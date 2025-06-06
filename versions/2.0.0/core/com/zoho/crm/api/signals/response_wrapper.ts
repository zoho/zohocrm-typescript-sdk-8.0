import {ResponseHandler} from "./response_handler";
import {Signals} from "./signals";
import {Model} from "../../../../../../utils/util/model";

class ResponseWrapper implements Model, ResponseHandler{

	private signals: Array<Signals>;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the signals
	 * @returns An Array representing the signals
	 */
	public getSignals(): Array<Signals>	{
		return this.signals;

	}

	/**
	 * The method to set the value to signals
	 * @param signals An Array representing the signals
	 */
	public setSignals(signals: Array<Signals>): void	{
		this.signals = signals;
		this.keyModified.set("signals", 1);

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
	ResponseWrapper as MasterModel,
	ResponseWrapper as ResponseWrapper
}
