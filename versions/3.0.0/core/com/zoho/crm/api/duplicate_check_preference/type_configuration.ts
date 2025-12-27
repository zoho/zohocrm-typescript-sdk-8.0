import {FieldMappings} from "./field_mappings";
import {MappedModule} from "./mapped_module";
import {Model} from "../../../../../../utils/util/model";

class TypeConfiguration implements Model{

	private fieldMappings: Array<FieldMappings>;
	private mappedModule: MappedModule;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the fieldMappings
	 * @returns An Array representing the fieldMappings
	 */
	public getFieldMappings(): Array<FieldMappings>	{
		return this.fieldMappings;

	}

	/**
	 * The method to set the value to fieldMappings
	 * @param fieldMappings An Array representing the fieldMappings
	 */
	public setFieldMappings(fieldMappings: Array<FieldMappings>): void	{
		this.fieldMappings = fieldMappings;
		this.keyModified.set("field_mappings", 1);

	}

	/**
	 * The method to get the mappedModule
	 * @returns An instance of MappedModule
	 */
	public getMappedModule(): MappedModule	{
		return this.mappedModule;

	}

	/**
	 * The method to set the value to mappedModule
	 * @param mappedModule An instance of MappedModule
	 */
	public setMappedModule(mappedModule: MappedModule): void	{
		this.mappedModule = mappedModule;
		this.keyModified.set("mapped_module", 1);

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
	TypeConfiguration as MasterModel,
	TypeConfiguration as TypeConfiguration
}
