import {Model} from "../../../../../../utils/util/model";

class BodyWrapper implements Model{

	private cadencesIds: Array<string>;
	private ids: Array<string>;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the cadencesIds
	 * @returns An Array representing the cadencesIds
	 */
	public getCadencesIds(): Array<string>	{
		return this.cadencesIds;

	}

	/**
	 * The method to set the value to cadencesIds
	 * @param cadencesIds An Array representing the cadencesIds
	 */
	public setCadencesIds(cadencesIds: Array<string>): void	{
		this.cadencesIds = cadencesIds;
		this.keyModified.set("cadences_ids", 1);

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
