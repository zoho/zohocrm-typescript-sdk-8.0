import {LookupField} from "./lookup_field";
import {Model} from "../../../../../../utils/util/model";

class AssociationDetails implements Model{

	private lookupField: LookupField;
	private relatedField: LookupField;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the lookupField
	 * @returns An instance of LookupField
	 */
	public getLookupField(): LookupField	{
		return this.lookupField;

	}

	/**
	 * The method to set the value to lookupField
	 * @param lookupField An instance of LookupField
	 */
	public setLookupField(lookupField: LookupField): void	{
		this.lookupField = lookupField;
		this.keyModified.set("lookup_field", 1);

	}

	/**
	 * The method to get the relatedField
	 * @returns An instance of LookupField
	 */
	public getRelatedField(): LookupField	{
		return this.relatedField;

	}

	/**
	 * The method to set the value to relatedField
	 * @param relatedField An instance of LookupField
	 */
	public setRelatedField(relatedField: LookupField): void	{
		this.relatedField = relatedField;
		this.keyModified.set("related_field", 1);

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
	AssociationDetails as MasterModel,
	AssociationDetails as AssociationDetails
}
