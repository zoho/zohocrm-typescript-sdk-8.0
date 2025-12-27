import {ResponseHandler} from "./response_handler";
import {ShareRecord} from "./share_record";
import {Users} from "../users/users";
import {Model} from "../../../../../../utils/util/model";

class ResponseWrapper implements Model, ResponseHandler{

	private share: Array<ShareRecord>;
	private shareableUser: Array<Users>;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the share
	 * @returns An Array representing the share
	 */
	public getShare(): Array<ShareRecord>	{
		return this.share;

	}

	/**
	 * The method to set the value to share
	 * @param share An Array representing the share
	 */
	public setShare(share: Array<ShareRecord>): void	{
		this.share = share;
		this.keyModified.set("share", 1);

	}

	/**
	 * The method to get the shareableUser
	 * @returns An Array representing the shareableUser
	 */
	public getShareableUser(): Array<Users>	{
		return this.shareableUser;

	}

	/**
	 * The method to set the value to shareableUser
	 * @param shareableUser An Array representing the shareableUser
	 */
	public setShareableUser(shareableUser: Array<Users>): void	{
		this.shareableUser = shareableUser;
		this.keyModified.set("shareable_user", 1);

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
	ResponseWrapper as MasterModel,
	ResponseWrapper as ResponseWrapper
}
