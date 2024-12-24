import {AssociatedUser} from "./associated_user";
import {Info} from "./info";
import {ResponseHandler} from "./response_handler";
import {Model} from "../../../../../../utils/util/model";

class AssociatedUserCount implements Model, ResponseHandler{

	private associatedUsersCount: Array<AssociatedUser>;
	private info: Info;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the associatedUsersCount
	 * @returns An Array representing the associatedUsersCount
	 */
	public getAssociatedUsersCount(): Array<AssociatedUser>	{
		return this.associatedUsersCount;

	}

	/**
	 * The method to set the value to associatedUsersCount
	 * @param associatedUsersCount An Array representing the associatedUsersCount
	 */
	public setAssociatedUsersCount(associatedUsersCount: Array<AssociatedUser>): void	{
		this.associatedUsersCount = associatedUsersCount;
		this.keyModified.set("associated_users_count", 1);

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
	AssociatedUserCount as MasterModel,
	AssociatedUserCount as AssociatedUserCount
}
