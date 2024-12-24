import {MinifiedModule} from "../modules/minified_module";
import {Model} from "../../../../../../utils/util/model";

class Multiselectlookup implements Model{

	private displayLabel: string;
	private linkingModule: MinifiedModule;
	private connectedModule: MinifiedModule;
	private lookupApiname: string;
	private apiName: string;
	private connectedfieldApiname: string;
	private connectedlookupApiname: string;
	private id: bigint;
	private recordAccess: boolean;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the displayLabel
	 * @returns A String representing the displayLabel
	 */
	public getDisplayLabel(): string	{
		return this.displayLabel;

	}

	/**
	 * The method to set the value to displayLabel
	 * @param displayLabel A String representing the displayLabel
	 */
	public setDisplayLabel(displayLabel: string): void	{
		this.displayLabel = displayLabel;
		this.keyModified.set("display_label", 1);

	}

	/**
	 * The method to get the linkingModule
	 * @returns An instance of MinifiedModule
	 */
	public getLinkingModule(): MinifiedModule	{
		return this.linkingModule;

	}

	/**
	 * The method to set the value to linkingModule
	 * @param linkingModule An instance of MinifiedModule
	 */
	public setLinkingModule(linkingModule: MinifiedModule): void	{
		this.linkingModule = linkingModule;
		this.keyModified.set("linking_module", 1);

	}

	/**
	 * The method to get the connectedModule
	 * @returns An instance of MinifiedModule
	 */
	public getConnectedModule(): MinifiedModule	{
		return this.connectedModule;

	}

	/**
	 * The method to set the value to connectedModule
	 * @param connectedModule An instance of MinifiedModule
	 */
	public setConnectedModule(connectedModule: MinifiedModule): void	{
		this.connectedModule = connectedModule;
		this.keyModified.set("connected_module", 1);

	}

	/**
	 * The method to get the lookupApiname
	 * @returns A String representing the lookupApiname
	 */
	public getLookupApiname(): string	{
		return this.lookupApiname;

	}

	/**
	 * The method to set the value to lookupApiname
	 * @param lookupApiname A String representing the lookupApiname
	 */
	public setLookupApiname(lookupApiname: string): void	{
		this.lookupApiname = lookupApiname;
		this.keyModified.set("lookup_apiname", 1);

	}

	/**
	 * The method to get the apiName
	 * @returns A String representing the apiName
	 */
	public getAPIName(): string	{
		return this.apiName;

	}

	/**
	 * The method to set the value to apiName
	 * @param apiName A String representing the apiName
	 */
	public setAPIName(apiName: string): void	{
		this.apiName = apiName;
		this.keyModified.set("api_name", 1);

	}

	/**
	 * The method to get the connectedfieldApiname
	 * @returns A String representing the connectedfieldApiname
	 */
	public getConnectedfieldApiname(): string	{
		return this.connectedfieldApiname;

	}

	/**
	 * The method to set the value to connectedfieldApiname
	 * @param connectedfieldApiname A String representing the connectedfieldApiname
	 */
	public setConnectedfieldApiname(connectedfieldApiname: string): void	{
		this.connectedfieldApiname = connectedfieldApiname;
		this.keyModified.set("connectedfield_apiname", 1);

	}

	/**
	 * The method to get the connectedlookupApiname
	 * @returns A String representing the connectedlookupApiname
	 */
	public getConnectedlookupApiname(): string	{
		return this.connectedlookupApiname;

	}

	/**
	 * The method to set the value to connectedlookupApiname
	 * @param connectedlookupApiname A String representing the connectedlookupApiname
	 */
	public setConnectedlookupApiname(connectedlookupApiname: string): void	{
		this.connectedlookupApiname = connectedlookupApiname;
		this.keyModified.set("connectedlookup_apiname", 1);

	}

	/**
	 * The method to get the id
	 * @returns A BigInt representing the id
	 */
	public getId(): bigint	{
		return this.id;

	}

	/**
	 * The method to set the value to id
	 * @param id A BigInt representing the id
	 */
	public setId(id: bigint): void	{
		this.id = id;
		this.keyModified.set("id", 1);

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
