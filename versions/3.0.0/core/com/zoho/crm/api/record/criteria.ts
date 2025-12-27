import {Choice} from "../../../../../../utils/util/choice";
import {Model} from "../../../../../../utils/util/model";

class Criteria implements Model{

	private comparator: Choice<string>;
	private field: string;
	private value: any;
	private groupOperator: Choice<string>;
	private group: Array<Criteria>;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the comparator
	 * @returns An instance of Choice<string>
	 */
	public getComparator(): Choice<string>	{
		return this.comparator;

	}

	/**
	 * The method to set the value to comparator
	 * @param comparator An instance of Choice<string>
	 */
	public setComparator(comparator: Choice<string>): void	{
		this.comparator = comparator;
		this.keyModified.set("comparator", 1);

	}

	/**
	 * The method to get the field
	 * @returns A String representing the field
	 */
	public getField(): string	{
		return this.field;

	}

	/**
	 * The method to set the value to field
	 * @param field A String representing the field
	 */
	public setField(field: string): void	{
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
	 * The method to get the groupOperator
	 * @returns An instance of Choice<string>
	 */
	public getGroupOperator(): Choice<string>	{
		return this.groupOperator;

	}

	/**
	 * The method to set the value to groupOperator
	 * @param groupOperator An instance of Choice<string>
	 */
	public setGroupOperator(groupOperator: Choice<string>): void	{
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
