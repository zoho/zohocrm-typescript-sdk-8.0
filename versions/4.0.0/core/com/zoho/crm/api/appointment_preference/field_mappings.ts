import {Field} from "./field";
import {Choice} from "../../../../../../utils/util/choice";
import {Model} from "../../../../../../utils/util/model";

class FieldMappings implements Model{

	private type: Choice<string>;
	private value: string;
	private field: Field;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the type
	 * @returns An instance of Choice<string>
	 */
	public getType(): Choice<string>	{
		return this.type;

	}

	/**
	 * The method to set the value to type
	 * @param type An instance of Choice<string>
	 */
	public setType(type: Choice<string>): void	{
		this.type = type;
		this.keyModified.set("type", 1);

	}

	/**
	 * The method to get the value
	 * @returns A String representing the value
	 */
	public getValue(): string	{
		return this.value;

	}

	/**
	 * The method to set the value to value
	 * @param value A String representing the value
	 */
	public setValue(value: string): void	{
		this.value = value;
		this.keyModified.set("value", 1);

	}

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
