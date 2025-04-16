import {Assign} from "./assign";
import {Model} from "../../../../../../utils/util/model";

class GetUnassignBodyWrapper implements Model{

	private getUnassigned: Assign;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the getUnassigned
	 * @returns An instance of Assign
	 */
	public getGetUnassigned(): Assign	{
		return this.getUnassigned;

	}

	/**
	 * The method to set the value to getUnassigned
	 * @param getUnassigned An instance of Assign
	 */
	public setGetUnassigned(getUnassigned: Assign): void	{
		this.getUnassigned = getUnassigned;
		this.keyModified.set("get_unassigned", 1);

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
	GetUnassignBodyWrapper as MasterModel,
	GetUnassignBodyWrapper as GetUnassignBodyWrapper
}
