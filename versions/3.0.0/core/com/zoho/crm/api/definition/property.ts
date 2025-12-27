import {MinifiedProperty} from "./minified_property";
import {Model} from "../../../../../../utils/util/model";

class Property implements Model{

	private displayLabel: string;
	private allowedValues: Array<any>;
	private uiType: number;
	private regex: string;
	private readOnly: boolean;
	private apiName: string;
	private fieldLabel: string;
	private dataType: string;
	private length: number;
	private availableInUserLayout: boolean;
	private required: boolean;
	private properties: Array<MinifiedProperty>;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the displayLabel
	 * @returns A String representing the displayLabel
	 */
	public getDisplayLabel(): string	{
		return this.displayLabel;

	}

	/**
	 * The method to set the value to displayLabel
	 * @param displayLabel A String representing the displayLabel
	 */
	public setDisplayLabel(displayLabel: string): void	{
		this.displayLabel = displayLabel;
		this.keyModified.set("display_label", 1);

	}

	/**
	 * The method to get the allowedValues
	 * @returns An Array representing the allowedValues
	 */
	public getAllowedValues(): Array<any>	{
		return this.allowedValues;

	}

	/**
	 * The method to set the value to allowedValues
	 * @param allowedValues An Array representing the allowedValues
	 */
	public setAllowedValues(allowedValues: Array<any>): void	{
		this.allowedValues = allowedValues;
		this.keyModified.set("allowed_values", 1);

	}

	/**
	 * The method to get the uiType
	 * @returns A number representing the uiType
	 */
	public getUiType(): number	{
		return this.uiType;

	}

	/**
	 * The method to set the value to uiType
	 * @param uiType A number representing the uiType
	 */
	public setUiType(uiType: number): void	{
		this.uiType = uiType;
		this.keyModified.set("ui_type", 1);

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
	 * The method to get the fieldLabel
	 * @returns A String representing the fieldLabel
	 */
	public getFieldLabel(): string	{
		return this.fieldLabel;

	}

	/**
	 * The method to set the value to fieldLabel
	 * @param fieldLabel A String representing the fieldLabel
	 */
	public setFieldLabel(fieldLabel: string): void	{
		this.fieldLabel = fieldLabel;
		this.keyModified.set("field_label", 1);

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
	 * The method to get the availableInUserLayout
	 * @returns A Boolean representing the availableInUserLayout
	 */
	public getAvailableInUserLayout(): boolean	{
		return this.availableInUserLayout;

	}

	/**
	 * The method to set the value to availableInUserLayout
	 * @param availableInUserLayout A Boolean representing the availableInUserLayout
	 */
	public setAvailableInUserLayout(availableInUserLayout: boolean): void	{
		this.availableInUserLayout = availableInUserLayout;
		this.keyModified.set("available_in_user_layout", 1);

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
	 * The method to get the properties
	 * @returns An Array representing the properties
	 */
	public getProperties(): Array<MinifiedProperty>	{
		return this.properties;

	}

	/**
	 * The method to set the value to properties
	 * @param properties An Array representing the properties
	 */
	public setProperties(properties: Array<MinifiedProperty>): void	{
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
	Property as MasterModel,
	Property as Property
}
