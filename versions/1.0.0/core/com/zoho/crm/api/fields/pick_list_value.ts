import {ForecastCategory} from "./forecast_category";
import {Maps} from "./maps";
import {Choice} from "../../../../../../utils/util/choice";
import {Model} from "../../../../../../utils/util/model";

class PickListValue implements Model{

	private colourCode: string;
	private actualValue: string;
	private type: Choice<string>;
	private id: bigint;
	private sequenceNumber: number;
	private displayValue: string;
	private referenceValue: string;
	private dealCategory: string;
	private probability: number;
	private forecastCategory: ForecastCategory;
	private expectedDataType: string;
	private sysRefName: string;
	private forecastType: string;
	private maps: Array<Maps>;
	private delete1: boolean;
	private showValue: boolean;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the colourCode
	 * @returns A String representing the colourCode
	 */
	public getColourCode(): string	{
		return this.colourCode;

	}

	/**
	 * The method to set the value to colourCode
	 * @param colourCode A String representing the colourCode
	 */
	public setColourCode(colourCode: string): void	{
		this.colourCode = colourCode;
		this.keyModified.set("colour_code", 1);

	}

	/**
	 * The method to get the actualValue
	 * @returns A String representing the actualValue
	 */
	public getActualValue(): string	{
		return this.actualValue;

	}

	/**
	 * The method to set the value to actualValue
	 * @param actualValue A String representing the actualValue
	 */
	public setActualValue(actualValue: string): void	{
		this.actualValue = actualValue;
		this.keyModified.set("actual_value", 1);

	}

	/**
	 * The method to get the type
	 * @returns An instance of Choice<string>
	 */
	public getType(): Choice<string>	{
		return this.type;

	}

	/**
	 * The method to set the value to type
	 * @param type An instance of Choice<string>
	 */
	public setType(type: Choice<string>): void	{
		this.type = type;
		this.keyModified.set("type", 1);

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
	 * The method to get the sequenceNumber
	 * @returns A number representing the sequenceNumber
	 */
	public getSequenceNumber(): number	{
		return this.sequenceNumber;

	}

	/**
	 * The method to set the value to sequenceNumber
	 * @param sequenceNumber A number representing the sequenceNumber
	 */
	public setSequenceNumber(sequenceNumber: number): void	{
		this.sequenceNumber = sequenceNumber;
		this.keyModified.set("sequence_number", 1);

	}

	/**
	 * The method to get the displayValue
	 * @returns A String representing the displayValue
	 */
	public getDisplayValue(): string	{
		return this.displayValue;

	}

	/**
	 * The method to set the value to displayValue
	 * @param displayValue A String representing the displayValue
	 */
	public setDisplayValue(displayValue: string): void	{
		this.displayValue = displayValue;
		this.keyModified.set("display_value", 1);

	}

	/**
	 * The method to get the referenceValue
	 * @returns A String representing the referenceValue
	 */
	public getReferenceValue(): string	{
		return this.referenceValue;

	}

	/**
	 * The method to set the value to referenceValue
	 * @param referenceValue A String representing the referenceValue
	 */
	public setReferenceValue(referenceValue: string): void	{
		this.referenceValue = referenceValue;
		this.keyModified.set("reference_value", 1);

	}

	/**
	 * The method to get the dealCategory
	 * @returns A String representing the dealCategory
	 */
	public getDealCategory(): string	{
		return this.dealCategory;

	}

	/**
	 * The method to set the value to dealCategory
	 * @param dealCategory A String representing the dealCategory
	 */
	public setDealCategory(dealCategory: string): void	{
		this.dealCategory = dealCategory;
		this.keyModified.set("deal_category", 1);

	}

	/**
	 * The method to get the probability
	 * @returns A number representing the probability
	 */
	public getProbability(): number	{
		return this.probability;

	}

	/**
	 * The method to set the value to probability
	 * @param probability A number representing the probability
	 */
	public setProbability(probability: number): void	{
		this.probability = probability;
		this.keyModified.set("probability", 1);

	}

	/**
	 * The method to get the forecastCategory
	 * @returns An instance of ForecastCategory
	 */
	public getForecastCategory(): ForecastCategory	{
		return this.forecastCategory;

	}

	/**
	 * The method to set the value to forecastCategory
	 * @param forecastCategory An instance of ForecastCategory
	 */
	public setForecastCategory(forecastCategory: ForecastCategory): void	{
		this.forecastCategory = forecastCategory;
		this.keyModified.set("forecast_category", 1);

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
	 * The method to get the sysRefName
	 * @returns A String representing the sysRefName
	 */
	public getSysRefName(): string	{
		return this.sysRefName;

	}

	/**
	 * The method to set the value to sysRefName
	 * @param sysRefName A String representing the sysRefName
	 */
	public setSysRefName(sysRefName: string): void	{
		this.sysRefName = sysRefName;
		this.keyModified.set("sys_ref_name", 1);

	}

	/**
	 * The method to get the forecastType
	 * @returns A String representing the forecastType
	 */
	public getForecastType(): string	{
		return this.forecastType;

	}

	/**
	 * The method to set the value to forecastType
	 * @param forecastType A String representing the forecastType
	 */
	public setForecastType(forecastType: string): void	{
		this.forecastType = forecastType;
		this.keyModified.set("forecast_type", 1);

	}

	/**
	 * The method to get the maps
	 * @returns An Array representing the maps
	 */
	public getMaps(): Array<Maps>	{
		return this.maps;

	}

	/**
	 * The method to set the value to maps
	 * @param maps An Array representing the maps
	 */
	public setMaps(maps: Array<Maps>): void	{
		this.maps = maps;
		this.keyModified.set("maps", 1);

	}

	/**
	 * The method to get the delete
	 * @returns A Boolean representing the delete1
	 */
	public getDelete(): boolean	{
		return this.delete1;

	}

	/**
	 * The method to set the value to delete
	 * @param delete1 A Boolean representing the delete1
	 */
	public setDelete(delete1: boolean): void	{
		this.delete1 = delete1;
		this.keyModified.set("_delete", 1);

	}

	/**
	 * The method to get the showValue
	 * @returns A Boolean representing the showValue
	 */
	public getShowValue(): boolean	{
		return this.showValue;

	}

	/**
	 * The method to set the value to showValue
	 * @param showValue A Boolean representing the showValue
	 */
	public setShowValue(showValue: boolean): void	{
		this.showValue = showValue;
		this.keyModified.set("show_value", 1);

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
	PickListValue as MasterModel,
	PickListValue as PickListValue
}
