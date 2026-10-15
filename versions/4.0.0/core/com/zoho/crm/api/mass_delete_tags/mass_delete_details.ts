import {StatusActionResponse} from "./status_action_response";
import {Choice} from "../../../../../../utils/util/choice";
import {Model} from "../../../../../../utils/util/model";

class MassDeleteDetails implements Model, StatusActionResponse{

	private jobId: bigint;
	private totalCount: number;
	private failedCount: number;
	private deletedCount: number;
	private status: Choice<string>;
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
	 * The method to get the totalCount
	 * @returns A number representing the totalCount
	 */
	public getTotalCount(): number	{
		return this.totalCount;

	}

	/**
	 * The method to set the value to totalCount
	 * @param totalCount A number representing the totalCount
	 */
	public setTotalCount(totalCount: number): void	{
		this.totalCount = totalCount;
		this.keyModified.set("total_count", 1);

	}

	/**
	 * The method to get the failedCount
	 * @returns A number representing the failedCount
	 */
	public getFailedCount(): number	{
		return this.failedCount;

	}

	/**
	 * The method to set the value to failedCount
	 * @param failedCount A number representing the failedCount
	 */
	public setFailedCount(failedCount: number): void	{
		this.failedCount = failedCount;
		this.keyModified.set("failed_count", 1);

	}

	/**
	 * The method to get the deletedCount
	 * @returns A number representing the deletedCount
	 */
	public getDeletedCount(): number	{
		return this.deletedCount;

	}

	/**
	 * The method to set the value to deletedCount
	 * @param deletedCount A number representing the deletedCount
	 */
	public setDeletedCount(deletedCount: number): void	{
		this.deletedCount = deletedCount;
		this.keyModified.set("deleted_count", 1);

	}

	/**
	 * The method to get the status
	 * @returns An instance of Choice<string>
	 */
	public getStatus(): Choice<string>	{
		return this.status;

	}

	/**
	 * The method to set the value to status
	 * @param status An instance of Choice<string>
	 */
	public setStatus(status: Choice<string>): void	{
		this.status = status;
		this.keyModified.set("status", 1);

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
	MassDeleteDetails as MasterModel,
	MassDeleteDetails as MassDeleteDetails
}
