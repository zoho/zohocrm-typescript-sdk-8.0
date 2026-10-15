import {ForecastCategory} from "./forecast_category";
import {Model} from "../../../../../../utils/util/model";

class Maps implements Model{

	private displayValue: string;
	private sequenceNumber: number;
	private forecastCategory: ForecastCategory;
	private delete1: boolean;
	private actualValue: string;
	private id: bigint;
	private colourCode: string;
	private forecastType: string;
	private keyModified: Map<string, number> = new Map<string, number>();
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
	Maps as MasterModel,
	Maps as Maps
}
