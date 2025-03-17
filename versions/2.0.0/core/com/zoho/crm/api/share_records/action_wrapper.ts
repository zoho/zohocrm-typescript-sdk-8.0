import {ActionHandler} from "./action_handler";
import {ActionResponse} from "./action_response";
import {Model} from "../../../../../../utils/util/model";

class ActionWrapper implements Model, ActionHandler{

	private share: Array<ActionResponse>;
	private notify: boolean;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the share
	 * @returns An Array representing the share
	 */
	public getShare(): Array<ActionResponse>	{
		return this.share;

	}

	/**
	 * The method to set the value to share
	 * @param share An Array representing the share
	 */
	public setShare(share: Array<ActionResponse>): void	{
		this.share = share;
		this.keyModified.set("share", 1);

	}

	/**
	 * The method to get the notify
	 * @returns A Boolean representing the notify
	 */
	public getNotify(): boolean	{
		return this.notify;

	}

	/**
	 * The method to set the value to notify
	 * @param notify A Boolean representing the notify
	 */
	public setNotify(notify: boolean): void	{
		this.notify = notify;
		this.keyModified.set("notify", 1);

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
	ActionWrapper as MasterModel,
	ActionWrapper as ActionWrapper
}
