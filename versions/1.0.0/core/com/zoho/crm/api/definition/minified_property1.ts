import {Model} from "../../../../../../utils/util/model";

class MinifiedProperty1 implements Model{

	private readOnly: boolean;
	private apiName: string;
	private dataType: string;
	private length: number;
	private required: boolean;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the readOnly
	 * @returns A Boolean representing the readOnly
	 */
	public getReadOnly(): boolean	{
		return this.readOnly;

	}

	/**
	 * The method to set the value to readOnly
	 * @param readOnly A Boolean representing the readOnly
	 */
	public setReadOnly(readOnly: boolean): void	{
		this.readOnly = readOnly;
		this.keyModified.set("read_only", 1);

	}

	/**
	 * The method to get the apiName
	 * @returns A String representing the apiName
	 */
	public getAPIName(): string	{
		return this.apiName;

	}

	/**
	 * The method to set the value to apiName
	 * @param apiName A String representing the apiName
	 */
	public setAPIName(apiName: string): void	{
		this.apiName = apiName;
		this.keyModified.set("api_name", 1);

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
	 * The method to get the length
	 * @returns A number representing the length
	 */
	public getLength(): number	{
		return this.length;

	}

	/**
	 * The method to set the value to length
	 * @param length A number representing the length
	 */
	public setLength(length: number): void	{
		this.length = length;
		this.keyModified.set("length", 1);

	}

	/**
	 * The method to get the required
	 * @returns A Boolean representing the required
	 */
	public getRequired(): boolean	{
		return this.required;

	}

	/**
	 * The method to set the value to required
	 * @param required A Boolean representing the required
	 */
	public setRequired(required: boolean): void	{
		this.required = required;
		this.keyModified.set("required", 1);

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
	MinifiedProperty1 as MasterModel,
	MinifiedProperty1 as MinifiedProperty1
}
