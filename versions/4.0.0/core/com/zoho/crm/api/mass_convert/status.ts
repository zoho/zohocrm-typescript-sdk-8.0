import {Model} from "../../../../../../utils/util/model";

class Status implements Model{

	private status: string;
	private failedCount: number;
	private notConvertedCount: number;
	private totalCount: number;
	private convertedCount: number;
	private keyModified: Map<string, number> = new Map<string, number>();
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
	 * The method to get the notConvertedCount
	 * @returns A number representing the notConvertedCount
	 */
	public getNotConvertedCount(): number	{
		return this.notConvertedCount;

	}

	/**
	 * The method to set the value to notConvertedCount
	 * @param notConvertedCount A number representing the notConvertedCount
	 */
	public setNotConvertedCount(notConvertedCount: number): void	{
		this.notConvertedCount = notConvertedCount;
		this.keyModified.set("Not_Converted_Count", 1);

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
	 * The method to get the convertedCount
	 * @returns A number representing the convertedCount
	 */
	public getConvertedCount(): number	{
		return this.convertedCount;

	}

	/**
	 * The method to set the value to convertedCount
	 * @param convertedCount A number representing the convertedCount
	 */
	public setConvertedCount(convertedCount: number): void	{
		this.convertedCount = convertedCount;
		this.keyModified.set("Converted_Count", 1);

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
	Status as MasterModel,
	Status as Status
}
