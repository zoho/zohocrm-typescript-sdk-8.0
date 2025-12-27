import {MasterRecordFields} from "./master_record_fields";
import {MergeData} from "./merge_data";
import {Model} from "../../../../../../utils/util/model";

class Merge implements Model{

	private jobId: bigint;
	private status: string;
	private data: Array<MergeData>;
	private masterRecordFields: Array<MasterRecordFields>;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the jobId
	 * @returns A BigInt representing the jobId
	 */
	public getJobId(): bigint	{
		return this.jobId;

	}

	/**
	 * The method to set the value to jobId
	 * @param jobId A BigInt representing the jobId
	 */
	public setJobId(jobId: bigint): void	{
		this.jobId = jobId;
		this.keyModified.set("job_id", 1);

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
	 * The method to get the data
	 * @returns An Array representing the data
	 */
	public getData(): Array<MergeData>	{
		return this.data;

	}

	/**
	 * The method to set the value to data
	 * @param data An Array representing the data
	 */
	public setData(data: Array<MergeData>): void	{
		this.data = data;
		this.keyModified.set("data", 1);

	}

	/**
	 * The method to get the masterRecordFields
	 * @returns An Array representing the masterRecordFields
	 */
	public getMasterRecordFields(): Array<MasterRecordFields>	{
		return this.masterRecordFields;

	}

	/**
	 * The method to set the value to masterRecordFields
	 * @param masterRecordFields An Array representing the masterRecordFields
	 */
	public setMasterRecordFields(masterRecordFields: Array<MasterRecordFields>): void	{
		this.masterRecordFields = masterRecordFields;
		this.keyModified.set("master_record_fields", 1);

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
	Merge as MasterModel,
	Merge as Merge
}
