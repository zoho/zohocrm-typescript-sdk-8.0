import {Field} from "./field";
import {Model} from "../../../../../../utils/util/model";

class PreferenceFieldMatch implements Model{

	private field: Field;
	private matchedLeadValue: string;
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
	 * The method to get the matchedLeadValue
	 * @returns A String representing the matchedLeadValue
	 */
	public getMatchedLeadValue(): string	{
		return this.matchedLeadValue;

	}

	/**
	 * The method to set the value to matchedLeadValue
	 * @param matchedLeadValue A String representing the matchedLeadValue
	 */
	public setMatchedLeadValue(matchedLeadValue: string): void	{
		this.matchedLeadValue = matchedLeadValue;
		this.keyModified.set("matched_lead_value", 1);

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
	PreferenceFieldMatch as MasterModel,
	PreferenceFieldMatch as PreferenceFieldMatch
}
