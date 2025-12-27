import {Delete} from "./delete";
import {Model} from "../../../../../../utils/util/model";

class DPipeline implements Model{

	private delete1: Delete;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the delete
	 * @returns An instance of Delete
	 */
	public getDelete(): Delete	{
		return this.delete1;

	}

	/**
	 * The method to set the value to delete
	 * @param delete1 An instance of Delete
	 */
	public setDelete(delete1: Delete): void	{
		this.delete1 = delete1;
		this.keyModified.set("_delete", 1);

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
	DPipeline as MasterModel,
	DPipeline as DPipeline
}
