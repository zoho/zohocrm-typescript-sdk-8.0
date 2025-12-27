import {Field} from "./field";
import {Tag} from "../tags/tag";
import {MinifiedUser} from "../users/minified_user";
import {Model} from "../../../../../../utils/util/model";

class Record implements Model{

	protected keyValues: Map<string, any> = new Map<string, any>();
	protected keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the id
	 * @returns A BigInt representing the id
	 */
	public getId(): bigint	{
		return this.getKeyValue("id");

	}

	/**
	 * The method to set the value to id
	 * @param id A BigInt representing the id
	 */
	public setId(id: bigint): void	{
		this.addKeyValue("id", id);

	}

	/**
	 * The method to get the createdBy
	 * @returns An instance of MinifiedUser
	 */
	public getCreatedBy(): MinifiedUser	{
		return this.getKeyValue("Created_By");

	}

	/**
	 * The method to set the value to createdBy
	 * @param createdBy An instance of MinifiedUser
	 */
	public setCreatedBy(createdBy: MinifiedUser): void	{
		this.addKeyValue("Created_By", createdBy);

	}

	/**
	 * The method to get the createdTime
	 * @returns An instance of Date
	 */
	public getCreatedTime(): Date	{
		return this.getKeyValue("Created_Time");

	}

	/**
	 * The method to set the value to createdTime
	 * @param createdTime An instance of Date
	 */
	public setCreatedTime(createdTime: Date): void	{
		this.addKeyValue("Created_Time", createdTime);

	}

	/**
	 * The method to get the modifiedBy
	 * @returns An instance of MinifiedUser
	 */
	public getModifiedBy(): MinifiedUser	{
		return this.getKeyValue("Modified_By");

	}

	/**
	 * The method to set the value to modifiedBy
	 * @param modifiedBy An instance of MinifiedUser
	 */
	public setModifiedBy(modifiedBy: MinifiedUser): void	{
		this.addKeyValue("Modified_By", modifiedBy);

	}

	/**
	 * The method to get the modifiedTime
	 * @returns An instance of Date
	 */
	public getModifiedTime(): Date	{
		return this.getKeyValue("Modified_Time");

	}

	/**
	 * The method to set the value to modifiedTime
	 * @param modifiedTime An instance of Date
	 */
	public setModifiedTime(modifiedTime: Date): void	{
		this.addKeyValue("Modified_Time", modifiedTime);

	}

	/**
	 * The method to get the tag
	 * @returns An Array representing the tag
	 */
	public getTag(): Array<Tag>	{
		return this.getKeyValue("Tag");

	}

	/**
	 * The method to set the value to tag
	 * @param tag An Array representing the tag
	 */
	public setTag(tag: Array<Tag>): void	{
		this.addKeyValue("Tag", tag);

	}

	/**
	 * The method to get the name
	 * @returns A String representing the name
	 */
	public getName(): string	{
		return this.getKeyValue("name");

	}

	/**
	 * The method to set the value to name
	 * @param name A String representing the name
	 */
	public setName(name: string): void	{
		this.addKeyValue("name", name);

	}

	/**
	 * The method to add field value
	 * @param <T> T containing the specified type
	 * @param field An instance of Field<T>
	 * @param value T
	 */
	public addFieldValue<T>(field: Field<T>, value: T): void	{
		this.addKeyValue(field.getAPIName(), value);

	}

	/**
	 * The method to add key value
	 * @param apiName A String representing the apiName
	 * @param value An Object representing the value
	 */
	public addKeyValue(apiName: string, value: any): void	{
		this.keyValues.set(apiName, value);
		this.keyModified.set(apiName, 1);

	}

	/**
	 * The method to get key value
	 * @param apiName A String representing the apiName
	 * @returns An Object representing the keyValue
	 */
	public getKeyValue(apiName: string): any	{
		if(this.keyValues.has(apiName))	{
			return this.keyValues.get(apiName);
		}
		return null;

	}

	/**
	 * The method to get key values
	 * @returns A Map representing the keyValues
	 */
	public getKeyValues(): Map<string, any>	{
		return this.keyValues;

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
	Record as MasterModel,
	Record as Record
}
