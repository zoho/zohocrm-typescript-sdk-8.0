import {MassDelete} from "./mass_delete";
import {Model} from "../../../../../../utils/util/model";

class BodyWrapper implements Model{

	private massDelete: Array<MassDelete>;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the massDelete
	 * @returns An Array representing the massDelete
	 */
	public getMassDelete(): Array<MassDelete>	{
		return this.massDelete;

	}

	/**
	 * The method to set the value to massDelete
	 * @param massDelete An Array representing the massDelete
	 */
	public setMassDelete(massDelete: Array<MassDelete>): void	{
		this.massDelete = massDelete;
		this.keyModified.set("mass_delete", 1);

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
	BodyWrapper as MasterModel,
	BodyWrapper as BodyWrapper
}
