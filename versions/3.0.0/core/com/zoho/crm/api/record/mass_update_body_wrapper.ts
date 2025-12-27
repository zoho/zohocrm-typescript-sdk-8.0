import {Criteria} from "./criteria";
import {MassUpdateTerritory} from "./mass_update_territory";
import {Record} from "./record";
import {Model} from "../../../../../../utils/util/model";

class MassUpdateBodyWrapper implements Model{

	private data: Array<Record>;
	private cvid: string;
	private ids: Array<string>;
	private territory: MassUpdateTerritory;
	private overWrite: boolean;
	private criteria: Array<Criteria>;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the data
	 * @returns An Array representing the data
	 */
	public getData(): Array<Record>	{
		return this.data;

	}

	/**
	 * The method to set the value to data
	 * @param data An Array representing the data
	 */
	public setData(data: Array<Record>): void	{
		this.data = data;
		this.keyModified.set("data", 1);

	}

	/**
	 * The method to get the cvid
	 * @returns A String representing the cvid
	 */
	public getCvid(): string	{
		return this.cvid;

	}

	/**
	 * The method to set the value to cvid
	 * @param cvid A String representing the cvid
	 */
	public setCvid(cvid: string): void	{
		this.cvid = cvid;
		this.keyModified.set("cvid", 1);

	}

	/**
	 * The method to get the ids
	 * @returns An Array representing the ids
	 */
	public getIds(): Array<string>	{
		return this.ids;

	}

	/**
	 * The method to set the value to ids
	 * @param ids An Array representing the ids
	 */
	public setIds(ids: Array<string>): void	{
		this.ids = ids;
		this.keyModified.set("ids", 1);

	}

	/**
	 * The method to get the territory
	 * @returns An instance of MassUpdateTerritory
	 */
	public getTerritory(): MassUpdateTerritory	{
		return this.territory;

	}

	/**
	 * The method to set the value to territory
	 * @param territory An instance of MassUpdateTerritory
	 */
	public setTerritory(territory: MassUpdateTerritory): void	{
		this.territory = territory;
		this.keyModified.set("territory", 1);

	}

	/**
	 * The method to get the overWrite
	 * @returns A Boolean representing the overWrite
	 */
	public getOverWrite(): boolean	{
		return this.overWrite;

	}

	/**
	 * The method to set the value to overWrite
	 * @param overWrite A Boolean representing the overWrite
	 */
	public setOverWrite(overWrite: boolean): void	{
		this.overWrite = overWrite;
		this.keyModified.set("over_write", 1);

	}

	/**
	 * The method to get the criteria
	 * @returns An Array representing the criteria
	 */
	public getCriteria(): Array<Criteria>	{
		return this.criteria;

	}

	/**
	 * The method to set the value to criteria
	 * @param criteria An Array representing the criteria
	 */
	public setCriteria(criteria: Array<Criteria>): void	{
		this.criteria = criteria;
		this.keyModified.set("criteria", 1);

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
	MassUpdateBodyWrapper as MasterModel,
	MassUpdateBodyWrapper as MassUpdateBodyWrapper
}
