import {DataEnrichment} from "./data_enrichment";
import {Model} from "../../../../../../utils/util/model";

class BodyWrapper implements Model{

	private dataEnrichment: Array<DataEnrichment>;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the dataEnrichment
	 * @returns An Array representing the dataEnrichment
	 */
	public getDataEnrichment(): Array<DataEnrichment>	{
		return this.dataEnrichment;

	}

	/**
	 * The method to set the value to dataEnrichment
	 * @param dataEnrichment An Array representing the dataEnrichment
	 */
	public setDataEnrichment(dataEnrichment: Array<DataEnrichment>): void	{
		this.dataEnrichment = dataEnrichment;
		this.keyModified.set("data_enrichment", 1);

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
