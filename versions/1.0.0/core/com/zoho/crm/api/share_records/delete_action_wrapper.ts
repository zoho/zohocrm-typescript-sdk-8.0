import {DeleteActionHandler} from "./delete_action_handler";
import {DeleteActionResponse} from "./delete_action_response";
import {Model} from "../../../../../../utils/util/model";

class DeleteActionWrapper implements Model, DeleteActionHandler{

	private share: DeleteActionResponse;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the share
	 * @returns An instance of DeleteActionResponse
	 */
	public getShare(): DeleteActionResponse	{
		return this.share;

	}

	/**
	 * The method to set the value to share
	 * @param share An instance of DeleteActionResponse
	 */
	public setShare(share: DeleteActionResponse): void	{
		this.share = share;
		this.keyModified.set("share", 1);

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
	DeleteActionWrapper as MasterModel,
	DeleteActionWrapper as DeleteActionWrapper
}
