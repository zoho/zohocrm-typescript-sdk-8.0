import {Model} from "../../../../../../utils/util/model";

class AnalyticsTask implements Model{

	private openTasksCount: number;
	private failedTasksCount: number;
	private subject: string;
	private completedTasksCount: number;
	private createdTasksCount: number;
	private tasksCount: number;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the openTasksCount
	 * @returns A number representing the openTasksCount
	 */
	public getOpenTasksCount(): number	{
		return this.openTasksCount;

	}

	/**
	 * The method to set the value to openTasksCount
	 * @param openTasksCount A number representing the openTasksCount
	 */
	public setOpenTasksCount(openTasksCount: number): void	{
		this.openTasksCount = openTasksCount;
		this.keyModified.set("open_tasks_count", 1);

	}

	/**
	 * The method to get the failedTasksCount
	 * @returns A number representing the failedTasksCount
	 */
	public getFailedTasksCount(): number	{
		return this.failedTasksCount;

	}

	/**
	 * The method to set the value to failedTasksCount
	 * @param failedTasksCount A number representing the failedTasksCount
	 */
	public setFailedTasksCount(failedTasksCount: number): void	{
		this.failedTasksCount = failedTasksCount;
		this.keyModified.set("failed_tasks_count", 1);

	}

	/**
	 * The method to get the subject
	 * @returns A String representing the subject
	 */
	public getSubject(): string	{
		return this.subject;

	}

	/**
	 * The method to set the value to subject
	 * @param subject A String representing the subject
	 */
	public setSubject(subject: string): void	{
		this.subject = subject;
		this.keyModified.set("subject", 1);

	}

	/**
	 * The method to get the completedTasksCount
	 * @returns A number representing the completedTasksCount
	 */
	public getCompletedTasksCount(): number	{
		return this.completedTasksCount;

	}

	/**
	 * The method to set the value to completedTasksCount
	 * @param completedTasksCount A number representing the completedTasksCount
	 */
	public setCompletedTasksCount(completedTasksCount: number): void	{
		this.completedTasksCount = completedTasksCount;
		this.keyModified.set("completed_tasks_count", 1);

	}

	/**
	 * The method to get the createdTasksCount
	 * @returns A number representing the createdTasksCount
	 */
	public getCreatedTasksCount(): number	{
		return this.createdTasksCount;

	}

	/**
	 * The method to set the value to createdTasksCount
	 * @param createdTasksCount A number representing the createdTasksCount
	 */
	public setCreatedTasksCount(createdTasksCount: number): void	{
		this.createdTasksCount = createdTasksCount;
		this.keyModified.set("created_tasks_count", 1);

	}

	/**
	 * The method to get the tasksCount
	 * @returns A number representing the tasksCount
	 */
	public getTasksCount(): number	{
		return this.tasksCount;

	}

	/**
	 * The method to set the value to tasksCount
	 * @param tasksCount A number representing the tasksCount
	 */
	public setTasksCount(tasksCount: number): void	{
		this.tasksCount = tasksCount;
		this.keyModified.set("tasks_count", 1);

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
	AnalyticsTask as MasterModel,
	AnalyticsTask as AnalyticsTask
}
