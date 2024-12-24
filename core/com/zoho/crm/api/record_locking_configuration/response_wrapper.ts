import {RecordLock} from "./record_lock";
import {ResponseHandler} from "./response_handler";
import {Model} from "../../../../../../utils/util/model";

class ResponseWrapper implements Model, ResponseHandler{

	private recordLockingConfigurations: Array<RecordLock>;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the recordLockingConfigurations
	 * @returns An Array representing the recordLockingConfigurations
	 */
	public getRecordLockingConfigurations(): Array<RecordLock>	{
		return this.recordLockingConfigurations;

	}

	/**
	 * The method to set the value to recordLockingConfigurations
	 * @param recordLockingConfigurations An Array representing the recordLockingConfigurations
	 */
	public setRecordLockingConfigurations(recordLockingConfigurations: Array<RecordLock>): void	{
		this.recordLockingConfigurations = recordLockingConfigurations;
		this.keyModified.set("record_locking_configurations", 1);

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
