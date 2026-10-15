import {Model} from "../../../../../../utils/util/model";

class AnalyticsCall implements Model{

	private createdCallsCount: number;
	private cancelledCallsCount: number;
	private failedCallsCount: number;
	private completedCallsCount: number;
	private scheduledCallsCount: number;
	private callsCount: number;
	private overdueCallsCount: number;
	private missedCallsCount: number;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the createdCallsCount
	 * @returns A number representing the createdCallsCount
	 */
	public getCreatedCallsCount(): number	{
		return this.createdCallsCount;

	}

	/**
	 * The method to set the value to createdCallsCount
	 * @param createdCallsCount A number representing the createdCallsCount
	 */
	public setCreatedCallsCount(createdCallsCount: number): void	{
		this.createdCallsCount = createdCallsCount;
		this.keyModified.set("created_calls_count", 1);

	}

	/**
	 * The method to get the cancelledCallsCount
	 * @returns A number representing the cancelledCallsCount
	 */
	public getCancelledCallsCount(): number	{
		return this.cancelledCallsCount;

	}

	/**
	 * The method to set the value to cancelledCallsCount
	 * @param cancelledCallsCount A number representing the cancelledCallsCount
	 */
	public setCancelledCallsCount(cancelledCallsCount: number): void	{
		this.cancelledCallsCount = cancelledCallsCount;
		this.keyModified.set("cancelled_calls_count", 1);

	}

	/**
	 * The method to get the failedCallsCount
	 * @returns A number representing the failedCallsCount
	 */
	public getFailedCallsCount(): number	{
		return this.failedCallsCount;

	}

	/**
	 * The method to set the value to failedCallsCount
	 * @param failedCallsCount A number representing the failedCallsCount
	 */
	public setFailedCallsCount(failedCallsCount: number): void	{
		this.failedCallsCount = failedCallsCount;
		this.keyModified.set("failed_calls_count", 1);

	}

	/**
	 * The method to get the completedCallsCount
	 * @returns A number representing the completedCallsCount
	 */
	public getCompletedCallsCount(): number	{
		return this.completedCallsCount;

	}

	/**
	 * The method to set the value to completedCallsCount
	 * @param completedCallsCount A number representing the completedCallsCount
	 */
	public setCompletedCallsCount(completedCallsCount: number): void	{
		this.completedCallsCount = completedCallsCount;
		this.keyModified.set("completed_calls_count", 1);

	}

	/**
	 * The method to get the scheduledCallsCount
	 * @returns A number representing the scheduledCallsCount
	 */
	public getScheduledCallsCount(): number	{
		return this.scheduledCallsCount;

	}

	/**
	 * The method to set the value to scheduledCallsCount
	 * @param scheduledCallsCount A number representing the scheduledCallsCount
	 */
	public setScheduledCallsCount(scheduledCallsCount: number): void	{
		this.scheduledCallsCount = scheduledCallsCount;
		this.keyModified.set("scheduled_calls_count", 1);

	}

	/**
	 * The method to get the callsCount
	 * @returns A number representing the callsCount
	 */
	public getCallsCount(): number	{
		return this.callsCount;

	}

	/**
	 * The method to set the value to callsCount
	 * @param callsCount A number representing the callsCount
	 */
	public setCallsCount(callsCount: number): void	{
		this.callsCount = callsCount;
		this.keyModified.set("calls_count", 1);

	}

	/**
	 * The method to get the overdueCallsCount
	 * @returns A number representing the overdueCallsCount
	 */
	public getOverdueCallsCount(): number	{
		return this.overdueCallsCount;

	}

	/**
	 * The method to set the value to overdueCallsCount
	 * @param overdueCallsCount A number representing the overdueCallsCount
	 */
	public setOverdueCallsCount(overdueCallsCount: number): void	{
		this.overdueCallsCount = overdueCallsCount;
		this.keyModified.set("overdue_calls_count", 1);

	}

	/**
	 * The method to get the missedCallsCount
	 * @returns A number representing the missedCallsCount
	 */
	public getMissedCallsCount(): number	{
		return this.missedCallsCount;

	}

	/**
	 * The method to set the value to missedCallsCount
	 * @param missedCallsCount A number representing the missedCallsCount
	 */
	public setMissedCallsCount(missedCallsCount: number): void	{
		this.missedCallsCount = missedCallsCount;
		this.keyModified.set("missed_calls_count", 1);

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
	AnalyticsCall as MasterModel,
	AnalyticsCall as AnalyticsCall
}
