import {Field} from "./field";
import {Model} from "../../../../../../utils/util/model";

class Criteria implements Model{

	private groupOperator: string;
	private group: Array<Criteria>;
	private comparator: string;
	private field: Field;
	private value: any;
	private type: string;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the groupOperator
	 * @returns A String representing the groupOperator
	 */
	public getGroupOperator(): string	{
		return this.groupOperator;

	}

	/**
	 * The method to set the value to groupOperator
	 * @param groupOperator A String representing the groupOperator
	 */
	public setGroupOperator(groupOperator: string): void	{
		this.groupOperator = groupOperator;
		this.keyModified.set("group_operator", 1);

	}

	/**
	 * The method to get the group
	 * @returns An Array representing the group
	 */
	public getGroup(): Array<Criteria>	{
		return this.group;

	}

	/**
	 * The method to set the value to group
	 * @param group An Array representing the group
	 */
	public setGroup(group: Array<Criteria>): void	{
		this.group = group;
		this.keyModified.set("group", 1);

	}

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
	 * The method to get the type
	 * @returns A String representing the type
	 */
	public getType(): string	{
		return this.type;

	}

	/**
	 * The method to set the value to type
	 * @param type A String representing the type
	 */
	public setType(type: string): void	{
		this.type = type;
		this.keyModified.set("type", 1);

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
	Criteria as MasterModel,
	Criteria as Criteria
}
