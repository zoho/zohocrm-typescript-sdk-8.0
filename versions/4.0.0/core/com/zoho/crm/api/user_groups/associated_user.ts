import {UserGroup} from "./user_group";
import {Model} from "../../../../../../utils/util/model";

class AssociatedUser implements Model{

	private userGroup: UserGroup;
	private count: number;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the userGroup
	 * @returns An instance of UserGroup
	 */
	public getUserGroup(): UserGroup	{
		return this.userGroup;

	}

	/**
	 * The method to set the value to userGroup
	 * @param userGroup An instance of UserGroup
	 */
	public setUserGroup(userGroup: UserGroup): void	{
		this.userGroup = userGroup;
		this.keyModified.set("user_group", 1);

	}

	/**
	 * The method to get the count
	 * @returns A number representing the count
	 */
	public getCount(): number	{
		return this.count;

	}

	/**
	 * The method to set the value to count
	 * @param count A number representing the count
	 */
	public setCount(count: number): void	{
		this.count = count;
		this.keyModified.set("count", 1);

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
	AssociatedUser as MasterModel,
	AssociatedUser as AssociatedUser
}
