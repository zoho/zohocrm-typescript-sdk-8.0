import {Fields} from "../fields/fields";
import {Profile} from "../profiles/profile";
import {Segment} from "./segment";
import {Model} from "../../../../../../utils/util/model";

class Actions implements Model{

	private id: bigint;
	private type: string;
	private segment: Segment;
	private fields: Fields;
	private field: Fields;
	private value: any;
	private exemptedProfiles: Array<Profile>;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the id
	 * @returns A BigInt representing the id
	 */
	public getId(): bigint	{
		return this.id;

	}

	/**
	 * The method to set the value to id
	 * @param id A BigInt representing the id
	 */
	public setId(id: bigint): void	{
		this.id = id;
		this.keyModified.set("id", 1);

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
	 * The method to get the segment
	 * @returns An instance of Segment
	 */
	public getSegment(): Segment	{
		return this.segment;

	}

	/**
	 * The method to set the value to segment
	 * @param segment An instance of Segment
	 */
	public setSegment(segment: Segment): void	{
		this.segment = segment;
		this.keyModified.set("segment", 1);

	}

	/**
	 * The method to get the fields
	 * @returns An instance of Fields
	 */
	public getFields(): Fields	{
		return this.fields;

	}

	/**
	 * The method to set the value to fields
	 * @param fields An instance of Fields
	 */
	public setFields(fields: Fields): void	{
		this.fields = fields;
		this.keyModified.set("fields", 1);

	}

	/**
	 * The method to get the field
	 * @returns An instance of Fields
	 */
	public getField(): Fields	{
		return this.field;

	}

	/**
	 * The method to set the value to field
	 * @param field An instance of Fields
	 */
	public setField(field: Fields): void	{
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
	 * The method to get the exemptedProfiles
	 * @returns An Array representing the exemptedProfiles
	 */
	public getExemptedProfiles(): Array<Profile>	{
		return this.exemptedProfiles;

	}

	/**
	 * The method to set the value to exemptedProfiles
	 * @param exemptedProfiles An Array representing the exemptedProfiles
	 */
	public setExemptedProfiles(exemptedProfiles: Array<Profile>): void	{
		this.exemptedProfiles = exemptedProfiles;
		this.keyModified.set("exempted_profiles", 1);

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
	Actions as MasterModel,
	Actions as Actions
}
