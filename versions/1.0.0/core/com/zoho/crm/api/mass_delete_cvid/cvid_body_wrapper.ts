import {Territory} from "./territory";
import {Model} from "../../../../../../utils/util/model";

class CvidBodyWrapper implements Model{

	private cvid: bigint;
	private territory: Territory;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the cvid
	 * @returns A BigInt representing the cvid
	 */
	public getCvid(): bigint	{
		return this.cvid;

	}

	/**
	 * The method to set the value to cvid
	 * @param cvid A BigInt representing the cvid
	 */
	public setCvid(cvid: bigint): void	{
		this.cvid = cvid;
		this.keyModified.set("cvid", 1);

	}

	/**
	 * The method to get the territory
	 * @returns An instance of Territory
	 */
	public getTerritory(): Territory	{
		return this.territory;

	}

	/**
	 * The method to set the value to territory
	 * @param territory An instance of Territory
	 */
	public setTerritory(territory: Territory): void	{
		this.territory = territory;
		this.keyModified.set("territory", 1);

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
	CvidBodyWrapper as MasterModel,
	CvidBodyWrapper as CvidBodyWrapper
}
