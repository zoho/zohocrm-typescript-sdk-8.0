import {CurrentField} from "./current_field";
import {MappedField} from "./mapped_field";
import {Model} from "../../../../../../utils/util/model";

class FieldMappings implements Model{

	private currentField: CurrentField;
	private mappedField: MappedField;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the currentField
	 * @returns An instance of CurrentField
	 */
	public getCurrentField(): CurrentField	{
		return this.currentField;

	}

	/**
	 * The method to set the value to currentField
	 * @param currentField An instance of CurrentField
	 */
	public setCurrentField(currentField: CurrentField): void	{
		this.currentField = currentField;
		this.keyModified.set("current_field", 1);

	}

	/**
	 * The method to get the mappedField
	 * @returns An instance of MappedField
	 */
	public getMappedField(): MappedField	{
		return this.mappedField;

	}

	/**
	 * The method to set the value to mappedField
	 * @param mappedField An instance of MappedField
	 */
	public setMappedField(mappedField: MappedField): void	{
		this.mappedField = mappedField;
		this.keyModified.set("mapped_field", 1);

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
	FieldMappings as MasterModel,
	FieldMappings as FieldMappings
}
