import {ZiaPeopleEnrichment} from "./zia_people_enrichment";
import {Model} from "../../../../../../utils/util/model";

class BodyWrapper implements Model{

	private ziaPeopleEnrichment: Array<ZiaPeopleEnrichment>;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the ziaPeopleEnrichment
	 * @returns An Array representing the ziaPeopleEnrichment
	 */
	public getZiaPeopleEnrichment(): Array<ZiaPeopleEnrichment>	{
		return this.ziaPeopleEnrichment;

	}

	/**
	 * The method to set the value to ziaPeopleEnrichment
	 * @param ziaPeopleEnrichment An Array representing the ziaPeopleEnrichment
	 */
	public setZiaPeopleEnrichment(ziaPeopleEnrichment: Array<ZiaPeopleEnrichment>): void	{
		this.ziaPeopleEnrichment = ziaPeopleEnrichment;
		this.keyModified.set("__zia_people_enrichment", 1);

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
