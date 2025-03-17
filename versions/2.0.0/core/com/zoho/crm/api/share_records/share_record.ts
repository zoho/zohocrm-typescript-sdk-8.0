import {SharedThrough} from "./shared_through";
import {Users} from "../users/users";
import {Choice} from "../../../../../../utils/util/choice";
import {Model} from "../../../../../../utils/util/model";

class ShareRecord implements Model{

	private sharedWith: Users;
	private shareRelatedRecords: boolean;
	private sharedThrough: SharedThrough;
	private sharedTime: Date;
	private permission: string;
	private sharedBy: Users;
	private user: Users;
	private type: Choice<string>;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the sharedWith
	 * @returns An instance of Users
	 */
	public getSharedWith(): Users	{
		return this.sharedWith;

	}

	/**
	 * The method to set the value to sharedWith
	 * @param sharedWith An instance of Users
	 */
	public setSharedWith(sharedWith: Users): void	{
		this.sharedWith = sharedWith;
		this.keyModified.set("shared_with", 1);

	}

	/**
	 * The method to get the shareRelatedRecords
	 * @returns A Boolean representing the shareRelatedRecords
	 */
	public getShareRelatedRecords(): boolean	{
		return this.shareRelatedRecords;

	}

	/**
	 * The method to set the value to shareRelatedRecords
	 * @param shareRelatedRecords A Boolean representing the shareRelatedRecords
	 */
	public setShareRelatedRecords(shareRelatedRecords: boolean): void	{
		this.shareRelatedRecords = shareRelatedRecords;
		this.keyModified.set("share_related_records", 1);

	}

	/**
	 * The method to get the sharedThrough
	 * @returns An instance of SharedThrough
	 */
	public getSharedThrough(): SharedThrough	{
		return this.sharedThrough;

	}

	/**
	 * The method to set the value to sharedThrough
	 * @param sharedThrough An instance of SharedThrough
	 */
	public setSharedThrough(sharedThrough: SharedThrough): void	{
		this.sharedThrough = sharedThrough;
		this.keyModified.set("shared_through", 1);

	}

	/**
	 * The method to get the sharedTime
	 * @returns An instance of Date
	 */
	public getSharedTime(): Date	{
		return this.sharedTime;

	}

	/**
	 * The method to set the value to sharedTime
	 * @param sharedTime An instance of Date
	 */
	public setSharedTime(sharedTime: Date): void	{
		this.sharedTime = sharedTime;
		this.keyModified.set("shared_time", 1);

	}

	/**
	 * The method to get the permission
	 * @returns A String representing the permission
	 */
	public getPermission(): string	{
		return this.permission;

	}

	/**
	 * The method to set the value to permission
	 * @param permission A String representing the permission
	 */
	public setPermission(permission: string): void	{
		this.permission = permission;
		this.keyModified.set("permission", 1);

	}

	/**
	 * The method to get the sharedBy
	 * @returns An instance of Users
	 */
	public getSharedBy(): Users	{
		return this.sharedBy;

	}

	/**
	 * The method to set the value to sharedBy
	 * @param sharedBy An instance of Users
	 */
	public setSharedBy(sharedBy: Users): void	{
		this.sharedBy = sharedBy;
		this.keyModified.set("shared_by", 1);

	}

	/**
	 * The method to get the user
	 * @returns An instance of Users
	 */
	public getUser(): Users	{
		return this.user;

	}

	/**
	 * The method to set the value to user
	 * @param user An instance of Users
	 */
	public setUser(user: Users): void	{
		this.user = user;
		this.keyModified.set("user", 1);

	}

	/**
	 * The method to get the type
	 * @returns An instance of Choice<string>
	 */
	public getType(): Choice<string>	{
		return this.type;

	}

	/**
	 * The method to set the value to type
	 * @param type An instance of Choice<string>
	 */
	public setType(type: Choice<string>): void	{
		this.type = type;
		this.keyModified.set("type", 1);

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
	ShareRecord as MasterModel,
	ShareRecord as ShareRecord
}
