import {AssociationResponse} from "./association_response";
import {ResponseHandler} from "./response_handler";
import {Model} from "../../../../../../utils/util/model";

class AssociationWrapper implements Model, ResponseHandler{

	private associations: Array<AssociationResponse>;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the associations
	 * @returns An Array representing the associations
	 */
	public getAssociations(): Array<AssociationResponse>	{
		return this.associations;

	}

	/**
	 * The method to set the value to associations
	 * @param associations An Array representing the associations
	 */
	public setAssociations(associations: Array<AssociationResponse>): void	{
		this.associations = associations;
		this.keyModified.set("associations", 1);

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
	AssociationWrapper as MasterModel,
	AssociationWrapper as AssociationWrapper
}
