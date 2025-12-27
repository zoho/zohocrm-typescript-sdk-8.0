import {Field} from "./field";
import {Layout} from "./layout";
import {Module} from "./module";
import {Model} from "../../../../../../utils/util/model";

class Association implements Model{

	private field: Field;
	private module: Module;
	private layouts: Array<Layout>;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the field
	 * @returns An instance of Field
	 */
	public getField(): Field	{
		return this.field;

	}

	/**
	 * The method to set the value to field
	 * @param field An instance of Field
	 */
	public setField(field: Field): void	{
		this.field = field;
		this.keyModified.set("field", 1);

	}

	/**
	 * The method to get the module
	 * @returns An instance of Module
	 */
	public getModule(): Module	{
		return this.module;

	}

	/**
	 * The method to set the value to module
	 * @param module An instance of Module
	 */
	public setModule(module: Module): void	{
		this.module = module;
		this.keyModified.set("module", 1);

	}

	/**
	 * The method to get the layouts
	 * @returns An Array representing the layouts
	 */
	public getLayouts(): Array<Layout>	{
		return this.layouts;

	}

	/**
	 * The method to set the value to layouts
	 * @param layouts An Array representing the layouts
	 */
	public setLayouts(layouts: Array<Layout>): void	{
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
	Association as MasterModel,
	Association as Association
}
