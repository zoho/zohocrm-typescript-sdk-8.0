import {AssociatedGroup} from "./associated_group";
import {Info} from "./info";
import {ResponseHandler} from "./response_handler";
import {Model} from "../../../../../../utils/util/model";

class AssociatedGroupsWrapper implements Model, ResponseHandler{

	private userGroups: Array<AssociatedGroup>;
	private info: Info;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the userGroups
	 * @returns An Array representing the userGroups
	 */
	public getUserGroups(): Array<AssociatedGroup>	{
		return this.userGroups;

	}

	/**
	 * The method to set the value to userGroups
	 * @param userGroups An Array representing the userGroups
	 */
	public setUserGroups(userGroups: Array<AssociatedGroup>): void	{
		this.userGroups = userGroups;
		this.keyModified.set("user_groups", 1);

	}

	/**
	 * The method to get the info
	 * @returns An instance of Info
	 */
	public getInfo(): Info	{
		return this.info;

	}

	/**
	 * The method to set the value to info
	 * @param info An instance of Info
	 */
	public setInfo(info: Info): void	{
		this.info = info;
		this.keyModified.set("info", 1);

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
	AssociatedGroupsWrapper as MasterModel,
	AssociatedGroupsWrapper as AssociatedGroupsWrapper
}
