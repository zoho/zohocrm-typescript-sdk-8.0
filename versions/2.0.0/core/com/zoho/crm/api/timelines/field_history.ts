import {FieldHistoryValue} from "./field_history_value";
import {PicklistDetail} from "./picklist_detail";
import {Model} from "../../../../../../utils/util/model";

class FieldHistory implements Model{

	private dataType: string;
	private enableColourCode: boolean;
	private pickListValues: Array<PicklistDetail>;
	private fieldLabel: string;
	private apiName: string;
	private id: bigint;
	private value: FieldHistoryValue;
	private keyModified: Map<string, number> = new Map<string, number>();
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
	 * The method to get the enableColourCode
	 * @returns A Boolean representing the enableColourCode
	 */
	public getEnableColourCode(): boolean	{
		return this.enableColourCode;

	}

	/**
	 * The method to set the value to enableColourCode
	 * @param enableColourCode A Boolean representing the enableColourCode
	 */
	public setEnableColourCode(enableColourCode: boolean): void	{
		this.enableColourCode = enableColourCode;
		this.keyModified.set("enable_colour_code", 1);

	}

	/**
	 * The method to get the pickListValues
	 * @returns An Array representing the pickListValues
	 */
	public getPickListValues(): Array<PicklistDetail>	{
		return this.pickListValues;

	}

	/**
	 * The method to set the value to pickListValues
	 * @param pickListValues An Array representing the pickListValues
	 */
	public setPickListValues(pickListValues: Array<PicklistDetail>): void	{
		this.pickListValues = pickListValues;
		this.keyModified.set("pick_list_values", 1);

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
	 * The method to get the value
	 * @returns An instance of FieldHistoryValue
	 */
	public getValue(): FieldHistoryValue	{
		return this.value;

	}

	/**
	 * The method to set the value to value
	 * @param value An instance of FieldHistoryValue
	 */
	public setValue(value: FieldHistoryValue): void	{
		this.value = value;
		this.keyModified.set("_value", 1);

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
	FieldHistory as MasterModel,
	FieldHistory as FieldHistory
}
