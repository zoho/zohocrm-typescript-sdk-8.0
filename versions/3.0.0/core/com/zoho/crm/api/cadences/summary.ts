import {Model} from "../../../../../../utils/util/model";

class Summary implements Model{

	private taskFollowUpCount: number;
	private callFollowUpCount: number;
	private emailFollowUpCount: number;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the taskFollowUpCount
	 * @returns A number representing the taskFollowUpCount
	 */
	public getTaskFollowUpCount(): number	{
		return this.taskFollowUpCount;

	}

	/**
	 * The method to set the value to taskFollowUpCount
	 * @param taskFollowUpCount A number representing the taskFollowUpCount
	 */
	public setTaskFollowUpCount(taskFollowUpCount: number): void	{
		this.taskFollowUpCount = taskFollowUpCount;
		this.keyModified.set("task_follow_up_count", 1);

	}

	/**
	 * The method to get the callFollowUpCount
	 * @returns A number representing the callFollowUpCount
	 */
	public getCallFollowUpCount(): number	{
		return this.callFollowUpCount;

	}

	/**
	 * The method to set the value to callFollowUpCount
	 * @param callFollowUpCount A number representing the callFollowUpCount
	 */
	public setCallFollowUpCount(callFollowUpCount: number): void	{
		this.callFollowUpCount = callFollowUpCount;
		this.keyModified.set("call_follow_up_count", 1);

	}

	/**
	 * The method to get the emailFollowUpCount
	 * @returns A number representing the emailFollowUpCount
	 */
	public getEmailFollowUpCount(): number	{
		return this.emailFollowUpCount;

	}

	/**
	 * The method to set the value to emailFollowUpCount
	 * @param emailFollowUpCount A number representing the emailFollowUpCount
	 */
	public setEmailFollowUpCount(emailFollowUpCount: number): void	{
		this.emailFollowUpCount = emailFollowUpCount;
		this.keyModified.set("email_follow_up_count", 1);

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
	Summary as MasterModel,
	Summary as Summary
}
