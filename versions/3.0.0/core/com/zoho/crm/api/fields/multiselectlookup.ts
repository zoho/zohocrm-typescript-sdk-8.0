import {ConnectedDetails} from "./connected_details";
import {LinkingDetails} from "./linking_details";
import {LookupRelatedList} from "./lookup_related_list";
import {Model} from "../../../../../../utils/util/model";

class Multiselectlookup implements Model{

	private linkingDetails: LinkingDetails;
	private connectedDetails: ConnectedDetails;
	private relatedList: LookupRelatedList;
	private recordAccess: boolean;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the linkingDetails
	 * @returns An instance of LinkingDetails
	 */
	public getLinkingDetails(): LinkingDetails	{
		return this.linkingDetails;

	}

	/**
	 * The method to set the value to linkingDetails
	 * @param linkingDetails An instance of LinkingDetails
	 */
	public setLinkingDetails(linkingDetails: LinkingDetails): void	{
		this.linkingDetails = linkingDetails;
		this.keyModified.set("linking_details", 1);

	}

	/**
	 * The method to get the connectedDetails
	 * @returns An instance of ConnectedDetails
	 */
	public getConnectedDetails(): ConnectedDetails	{
		return this.connectedDetails;

	}

	/**
	 * The method to set the value to connectedDetails
	 * @param connectedDetails An instance of ConnectedDetails
	 */
	public setConnectedDetails(connectedDetails: ConnectedDetails): void	{
		this.connectedDetails = connectedDetails;
		this.keyModified.set("connected_details", 1);

	}

	/**
	 * The method to get the relatedList
	 * @returns An instance of LookupRelatedList
	 */
	public getRelatedList(): LookupRelatedList	{
		return this.relatedList;

	}

	/**
	 * The method to set the value to relatedList
	 * @param relatedList An instance of LookupRelatedList
	 */
	public setRelatedList(relatedList: LookupRelatedList): void	{
		this.relatedList = relatedList;
		this.keyModified.set("related_list", 1);

	}

	/**
	 * The method to get the recordAccess
	 * @returns A Boolean representing the recordAccess
	 */
	public getRecordAccess(): boolean	{
		return this.recordAccess;

	}

	/**
	 * The method to set the value to recordAccess
	 * @param recordAccess A Boolean representing the recordAccess
	 */
	public setRecordAccess(recordAccess: boolean): void	{
		this.recordAccess = recordAccess;
		this.keyModified.set("record_access", 1);

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
	Multiselectlookup as MasterModel,
	Multiselectlookup as Multiselectlookup
}
