import {RecordActionHandler} from "./record_action_handler";
import {RecordActionResponse} from "./record_action_response";
import {Model} from "../../../../../../utils/util/model";

class RecordActionWrapper implements Model, RecordActionHandler{

	private data: Array<RecordActionResponse>;
	private wfScheduler: boolean;
	private successCount: string;
	private lockedCount: string;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the data
	 * @returns An Array representing the data
	 */
	public getData(): Array<RecordActionResponse>	{
		return this.data;

	}

	/**
	 * The method to set the value to data
	 * @param data An Array representing the data
	 */
	public setData(data: Array<RecordActionResponse>): void	{
		this.data = data;
		this.keyModified.set("data", 1);

	}

	/**
	 * The method to get the wfScheduler
	 * @returns A Boolean representing the wfScheduler
	 */
	public getWfScheduler(): boolean	{
		return this.wfScheduler;

	}

	/**
	 * The method to set the value to wfScheduler
	 * @param wfScheduler A Boolean representing the wfScheduler
	 */
	public setWfScheduler(wfScheduler: boolean): void	{
		this.wfScheduler = wfScheduler;
		this.keyModified.set("wf_scheduler", 1);

	}

	/**
	 * The method to get the successCount
	 * @returns A String representing the successCount
	 */
	public getSuccessCount(): string	{
		return this.successCount;

	}

	/**
	 * The method to set the value to successCount
	 * @param successCount A String representing the successCount
	 */
	public setSuccessCount(successCount: string): void	{
		this.successCount = successCount;
		this.keyModified.set("success_count", 1);

	}

	/**
	 * The method to get the lockedCount
	 * @returns A String representing the lockedCount
	 */
	public getLockedCount(): string	{
		return this.lockedCount;

	}

	/**
	 * The method to set the value to lockedCount
	 * @param lockedCount A String representing the lockedCount
	 */
	public setLockedCount(lockedCount: string): void	{
		this.lockedCount = lockedCount;
		this.keyModified.set("locked_count", 1);

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
	RecordActionWrapper as MasterModel,
	RecordActionWrapper as RecordActionWrapper
}
