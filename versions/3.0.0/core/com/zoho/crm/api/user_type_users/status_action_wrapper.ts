import {StatusActionHandler} from "./status_action_handler";
import {StatusActionResponse} from "./status_action_response";
import {Model} from "../../../../../../utils/util/model";

class StatusActionWrapper implements Model, StatusActionHandler{

	private changeStatus: Array<StatusActionResponse>;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the changeStatus
	 * @returns An Array representing the changeStatus
	 */
	public getChangeStatus(): Array<StatusActionResponse>	{
		return this.changeStatus;

	}

	/**
	 * The method to set the value to changeStatus
	 * @param changeStatus An Array representing the changeStatus
	 */
	public setChangeStatus(changeStatus: Array<StatusActionResponse>): void	{
		this.changeStatus = changeStatus;
		this.keyModified.set("change_status", 1);

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
	StatusActionWrapper as MasterModel,
	StatusActionWrapper as StatusActionWrapper
}
