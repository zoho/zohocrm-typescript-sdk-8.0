import {Action} from "./action";
import {ParentFollowUp} from "./parent_follow_up";
import {Model} from "../../../../../../utils/util/model";

class Analytics implements Model{

	private analytics: Map<string, any>;
	private parentFollowUp: ParentFollowUp;
	private action: Action;
	private id: bigint;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the analytics
	 * @returns A Map representing the analytics
	 */
	public getAnalytics(): Map<string, any>	{
		return this.analytics;

	}

	/**
	 * The method to set the value to analytics
	 * @param analytics A Map representing the analytics
	 */
	public setAnalytics(analytics: Map<string, any>): void	{
		this.analytics = analytics;
		this.keyModified.set("analytics", 1);

	}

	/**
	 * The method to get the parentFollowUp
	 * @returns An instance of ParentFollowUp
	 */
	public getParentFollowUp(): ParentFollowUp	{
		return this.parentFollowUp;

	}

	/**
	 * The method to set the value to parentFollowUp
	 * @param parentFollowUp An instance of ParentFollowUp
	 */
	public setParentFollowUp(parentFollowUp: ParentFollowUp): void	{
		this.parentFollowUp = parentFollowUp;
		this.keyModified.set("parent_follow_up", 1);

	}

	/**
	 * The method to get the action
	 * @returns An instance of Action
	 */
	public getAction(): Action	{
		return this.action;

	}

	/**
	 * The method to set the value to action
	 * @param action An instance of Action
	 */
	public setAction(action: Action): void	{
		this.action = action;
		this.keyModified.set("action", 1);

	}

	/**
	 * The method to get the id
	 * @returns A BigInt representing the id
	 */
	public getId(): bigint	{
		return this.id;

	}

	/**
	 * The method to set the value to id
	 * @param id A BigInt representing the id
	 */
	public setId(id: bigint): void	{
		this.id = id;
		this.keyModified.set("id", 1);

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
	Analytics as MasterModel,
	Analytics as Analytics
}
