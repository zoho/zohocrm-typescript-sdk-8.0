import {RelatedList} from "./related_list";
import {Model} from "../../../../../../utils/util/model";

class GetRelatedRecordCount implements Model{

	private relatedList: RelatedList;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the relatedList
	 * @returns An instance of RelatedList
	 */
	public getRelatedList(): RelatedList	{
		return this.relatedList;

	}

	/**
	 * The method to set the value to relatedList
	 * @param relatedList An instance of RelatedList
	 */
	public setRelatedList(relatedList: RelatedList): void	{
		this.relatedList = relatedList;
		this.keyModified.set("related_list", 1);

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
	GetRelatedRecordCount as MasterModel,
	GetRelatedRecordCount as GetRelatedRecordCount
}
