import {DeletedAssociatedTerritories} from "./deleted_associated_territories";
import {Info} from "./info";
import {Model} from "../../../../../../utils/util/model";

class DeletedAssociatedWrapper implements Model{

	private territories: Array<DeletedAssociatedTerritories>;
	private info: Info;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the territories
	 * @returns An Array representing the territories
	 */
	public getTerritories(): Array<DeletedAssociatedTerritories>	{
		return this.territories;

	}

	/**
	 * The method to set the value to territories
	 * @param territories An Array representing the territories
	 */
	public setTerritories(territories: Array<DeletedAssociatedTerritories>): void	{
		this.territories = territories;
		this.keyModified.set("territories", 1);

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
	DeletedAssociatedWrapper as MasterModel,
	DeletedAssociatedWrapper as DeletedAssociatedWrapper
}
