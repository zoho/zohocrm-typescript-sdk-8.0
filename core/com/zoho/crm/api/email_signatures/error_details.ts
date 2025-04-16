import {RangeStructure} from "./range_structure";
import {Model} from "../../../../../../utils/util/model";

class ErrorDetails implements Model{

	private apiName: string;
	private jsonPath: string;
	private supportedValues: Array<any>;
	private range: RangeStructure;
	private paramName: string;
	private regex: string;
	private expectedDataType: string;
	private keyModified: Map<string, number> = new Map<string, number>();
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
	 * The method to get the jsonPath
	 * @returns A String representing the jsonPath
	 */
	public getJsonPath(): string	{
		return this.jsonPath;

	}

	/**
	 * The method to set the value to jsonPath
	 * @param jsonPath A String representing the jsonPath
	 */
	public setJsonPath(jsonPath: string): void	{
		this.jsonPath = jsonPath;
		this.keyModified.set("json_path", 1);

	}

	/**
	 * The method to get the supportedValues
	 * @returns An Array representing the supportedValues
	 */
	public getSupportedValues(): Array<any>	{
		return this.supportedValues;

	}

	/**
	 * The method to set the value to supportedValues
	 * @param supportedValues An Array representing the supportedValues
	 */
	public setSupportedValues(supportedValues: Array<any>): void	{
		this.supportedValues = supportedValues;
		this.keyModified.set("supported_values", 1);

	}

	/**
	 * The method to get the range
	 * @returns An instance of RangeStructure
	 */
	public getRange(): RangeStructure	{
		return this.range;

	}

	/**
	 * The method to set the value to range
	 * @param range An instance of RangeStructure
	 */
	public setRange(range: RangeStructure): void	{
		this.range = range;
		this.keyModified.set("range", 1);

	}

	/**
	 * The method to get the paramName
	 * @returns A String representing the paramName
	 */
	public getParamName(): string	{
		return this.paramName;

	}

	/**
	 * The method to set the value to paramName
	 * @param paramName A String representing the paramName
	 */
	public setParamName(paramName: string): void	{
		this.paramName = paramName;
		this.keyModified.set("param_name", 1);

	}

	/**
	 * The method to get the regex
	 * @returns A String representing the regex
	 */
	public getRegex(): string	{
		return this.regex;

	}

	/**
	 * The method to set the value to regex
	 * @param regex A String representing the regex
	 */
	public setRegex(regex: string): void	{
		this.regex = regex;
		this.keyModified.set("regex", 1);

	}

	/**
	 * The method to get the expectedDataType
	 * @returns A String representing the expectedDataType
	 */
	public getExpectedDataType(): string	{
		return this.expectedDataType;

	}

	/**
	 * The method to set the value to expectedDataType
	 * @param expectedDataType A String representing the expectedDataType
	 */
	public setExpectedDataType(expectedDataType: string): void	{
		this.expectedDataType = expectedDataType;
		this.keyModified.set("expected_data_type", 1);

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
	ErrorDetails as MasterModel,
	ErrorDetails as ErrorDetails
}
