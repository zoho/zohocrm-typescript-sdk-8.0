import {LinkingModule} from "./linking_module";
import {LookupField} from "./lookup_field";
import {Model} from "../../../../../../utils/util/model";

class LinkingDetails implements Model{

	private module: LinkingModule;
	private lookupField: LookupField;
	private connectedLookupField: LookupField;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the module
	 * @returns An instance of LinkingModule
	 */
	public getModule(): LinkingModule	{
		return this.module;

	}

	/**
	 * The method to set the value to module
	 * @param module An instance of LinkingModule
	 */
	public setModule(module: LinkingModule): void	{
		this.module = module;
		this.keyModified.set("module", 1);

	}

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
	 * The method to get the connectedLookupField
	 * @returns An instance of LookupField
	 */
	public getConnectedLookupField(): LookupField	{
		return this.connectedLookupField;

	}

	/**
	 * The method to set the value to connectedLookupField
	 * @param connectedLookupField An instance of LookupField
	 */
	public setConnectedLookupField(connectedLookupField: LookupField): void	{
		this.connectedLookupField = connectedLookupField;
		this.keyModified.set("connected_lookup_field", 1);

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
	LinkingDetails as MasterModel,
	LinkingDetails as LinkingDetails
}
