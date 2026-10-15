import {ShareFromUser} from "./share_from_user";
import {Model} from "../../../../../../utils/util/model";

class EmailSharings implements Model{

	private shareFromUsers: Array<ShareFromUser>;
	private availableTypes: Array<string>;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the shareFromUsers
	 * @returns An Array representing the shareFromUsers
	 */
	public getShareFromUsers(): Array<ShareFromUser>	{
		return this.shareFromUsers;

	}

	/**
	 * The method to set the value to shareFromUsers
	 * @param shareFromUsers An Array representing the shareFromUsers
	 */
	public setShareFromUsers(shareFromUsers: Array<ShareFromUser>): void	{
		this.shareFromUsers = shareFromUsers;
		this.keyModified.set("share_from_users", 1);

	}

	/**
	 * The method to get the availableTypes
	 * @returns An Array representing the availableTypes
	 */
	public getAvailableTypes(): Array<string>	{
		return this.availableTypes;

	}

	/**
	 * The method to set the value to availableTypes
	 * @param availableTypes An Array representing the availableTypes
	 */
	public setAvailableTypes(availableTypes: Array<string>): void	{
		this.availableTypes = availableTypes;
		this.keyModified.set("available_types", 1);

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
	EmailSharings as MasterModel,
	EmailSharings as EmailSharings
}
