import {MinifiedField} from "./minified_field";
import {Model} from "../../../../../../utils/util/model";

class RollupCriteria implements Model{

	private comparator: string;
	private field: MinifiedField;
	private value: any;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the comparator
	 * @returns A String representing the comparator
	 */
	public getComparator(): string	{
		return this.comparator;

	}

	/**
	 * The method to set the value to comparator
	 * @param comparator A String representing the comparator
	 */
	public setComparator(comparator: string): void	{
		this.comparator = comparator;
		this.keyModified.set("comparator", 1);

	}

	/**
	 * The method to get the field
	 * @returns An instance of MinifiedField
	 */
	public getField(): MinifiedField	{
		return this.field;

	}

	/**
	 * The method to set the value to field
	 * @param field An instance of MinifiedField
	 */
	public setField(field: MinifiedField): void	{
		this.field = field;
		this.keyModified.set("field", 1);

	}

	/**
	 * The method to get the value
	 * @returns An Object representing the value
	 */
	public getValue(): any	{
		return this.value;

	}

	/**
	 * The method to set the value to value
	 * @param value An Object representing the value
	 */
	public setValue(value: any): void	{
		this.value = value;
		this.keyModified.set("value", 1);

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
	RollupCriteria as MasterModel,
	RollupCriteria as RollupCriteria
}
