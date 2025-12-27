import {ValueDetails} from "./value_details";
import {Model} from "../../../../../../utils/util/model";

class PropertyDetails implements Model{

	private name: string;
	private values: Array<ValueDetails>;
	private dataType: string;
	private properties: Array<PropertyDetails>;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the name
	 * @returns A String representing the name
	 */
	public getName(): string	{
		return this.name;

	}

	/**
	 * The method to set the value to name
	 * @param name A String representing the name
	 */
	public setName(name: string): void	{
		this.name = name;
		this.keyModified.set("name", 1);

	}

	/**
	 * The method to get the values
	 * @returns An Array representing the values
	 */
	public getValues(): Array<ValueDetails>	{
		return this.values;

	}

	/**
	 * The method to set the value to values
	 * @param values An Array representing the values
	 */
	public setValues(values: Array<ValueDetails>): void	{
		this.values = values;
		this.keyModified.set("values", 1);

	}

	/**
	 * The method to get the dataType
	 * @returns A String representing the dataType
	 */
	public getDataType(): string	{
		return this.dataType;

	}

	/**
	 * The method to set the value to dataType
	 * @param dataType A String representing the dataType
	 */
	public setDataType(dataType: string): void	{
		this.dataType = dataType;
		this.keyModified.set("data_type", 1);

	}

	/**
	 * The method to get the properties
	 * @returns An Array representing the properties
	 */
	public getProperties(): Array<PropertyDetails>	{
		return this.properties;

	}

	/**
	 * The method to set the value to properties
	 * @param properties An Array representing the properties
	 */
	public setProperties(properties: Array<PropertyDetails>): void	{
		this.properties = properties;
		this.keyModified.set("properties", 1);

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
	PropertyDetails as MasterModel,
	PropertyDetails as PropertyDetails
}
