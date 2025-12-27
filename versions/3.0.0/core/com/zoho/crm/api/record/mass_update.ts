import {MassUpdateResponse} from "./mass_update_response";
import {Choice} from "../../../../../../utils/util/choice";
import {Model} from "../../../../../../utils/util/model";

class MassUpdate implements Model, MassUpdateResponse{

	private status: Choice<string>;
	private failedCount: number;
	private updatedCount: number;
	private notUpdatedCount: number;
	private totalCount: number;
	private keyModified: Map<string, number> = new Map<string, number>();
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
		this.keyModified.set("Status", 1);

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
		this.keyModified.set("Failed_Count", 1);

	}

	/**
	 * The method to get the updatedCount
	 * @returns A number representing the updatedCount
	 */
	public getUpdatedCount(): number	{
		return this.updatedCount;

	}

	/**
	 * The method to set the value to updatedCount
	 * @param updatedCount A number representing the updatedCount
	 */
	public setUpdatedCount(updatedCount: number): void	{
		this.updatedCount = updatedCount;
		this.keyModified.set("Updated_Count", 1);

	}

	/**
	 * The method to get the notUpdatedCount
	 * @returns A number representing the notUpdatedCount
	 */
	public getNotUpdatedCount(): number	{
		return this.notUpdatedCount;

	}

	/**
	 * The method to set the value to notUpdatedCount
	 * @param notUpdatedCount A number representing the notUpdatedCount
	 */
	public setNotUpdatedCount(notUpdatedCount: number): void	{
		this.notUpdatedCount = notUpdatedCount;
		this.keyModified.set("Not_Updated_Count", 1);

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
		this.keyModified.set("Total_Count", 1);

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
	MassUpdate as MasterModel,
	MassUpdate as MassUpdate
}
