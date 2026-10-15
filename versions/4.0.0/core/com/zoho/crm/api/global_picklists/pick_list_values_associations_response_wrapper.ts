import {PickListValuesAssociation} from "./pick_list_values_association";
import {PickListValuesAssociationsResponseHandler} from "./pick_list_values_associations_response_handler";
import {Model} from "../../../../../../utils/util/model";

class PickListValuesAssociationsResponseWrapper implements Model, PickListValuesAssociationsResponseHandler{

	private pickListValuesAssociations: Array<PickListValuesAssociation>;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the pickListValuesAssociations
	 * @returns An Array representing the pickListValuesAssociations
	 */
	public getPickListValuesAssociations(): Array<PickListValuesAssociation>	{
		return this.pickListValuesAssociations;

	}

	/**
	 * The method to set the value to pickListValuesAssociations
	 * @param pickListValuesAssociations An Array representing the pickListValuesAssociations
	 */
	public setPickListValuesAssociations(pickListValuesAssociations: Array<PickListValuesAssociation>): void	{
		this.pickListValuesAssociations = pickListValuesAssociations;
		this.keyModified.set("pick_list_values_associations", 1);

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
	PickListValuesAssociationsResponseWrapper as MasterModel,
	PickListValuesAssociationsResponseWrapper as PickListValuesAssociationsResponseWrapper
}
