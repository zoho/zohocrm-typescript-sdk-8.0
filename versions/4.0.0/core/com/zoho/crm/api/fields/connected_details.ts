import {LinkingModule} from "./linking_module";
import {LookupField} from "./lookup_field";
import {LookupLayout} from "./lookup_layout";
import {Model} from "../../../../../../utils/util/model";

class ConnectedDetails implements Model{

	private module: LinkingModule;
	private field: LookupField;
	private layouts: Array<LookupLayout>;
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
	 * The method to get the field
	 * @returns An instance of LookupField
	 */
	public getField(): LookupField	{
		return this.field;

	}

	/**
	 * The method to set the value to field
	 * @param field An instance of LookupField
	 */
	public setField(field: LookupField): void	{
		this.field = field;
		this.keyModified.set("field", 1);

	}

	/**
	 * The method to get the layouts
	 * @returns An Array representing the layouts
	 */
	public getLayouts(): Array<LookupLayout>	{
		return this.layouts;

	}

	/**
	 * The method to set the value to layouts
	 * @param layouts An Array representing the layouts
	 */
	public setLayouts(layouts: Array<LookupLayout>): void	{
		this.layouts = layouts;
		this.keyModified.set("layouts", 1);

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
	ConnectedDetails as MasterModel,
	ConnectedDetails as ConnectedDetails
}
