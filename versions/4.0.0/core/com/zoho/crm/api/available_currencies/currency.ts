import {Model} from "../../../../../../utils/util/model";

class Currency implements Model{

	private displayValue: string;
	private decimalSeparator: string;
	private symbol: string;
	private thousandSeparator: string;
	private displayName: string;
	private isoCode: string;
	private decimalPlaces: string;
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
	 * The method to get the decimalSeparator
	 * @returns A String representing the decimalSeparator
	 */
	public getDecimalSeparator(): string	{
		return this.decimalSeparator;

	}

	/**
	 * The method to set the value to decimalSeparator
	 * @param decimalSeparator A String representing the decimalSeparator
	 */
	public setDecimalSeparator(decimalSeparator: string): void	{
		this.decimalSeparator = decimalSeparator;
		this.keyModified.set("decimal_separator", 1);

	}

	/**
	 * The method to get the symbol
	 * @returns A String representing the symbol
	 */
	public getSymbol(): string	{
		return this.symbol;

	}

	/**
	 * The method to set the value to symbol
	 * @param symbol A String representing the symbol
	 */
	public setSymbol(symbol: string): void	{
		this.symbol = symbol;
		this.keyModified.set("symbol", 1);

	}

	/**
	 * The method to get the thousandSeparator
	 * @returns A String representing the thousandSeparator
	 */
	public getThousandSeparator(): string	{
		return this.thousandSeparator;

	}

	/**
	 * The method to set the value to thousandSeparator
	 * @param thousandSeparator A String representing the thousandSeparator
	 */
	public setThousandSeparator(thousandSeparator: string): void	{
		this.thousandSeparator = thousandSeparator;
		this.keyModified.set("thousand_separator", 1);

	}

	/**
	 * The method to get the displayName
	 * @returns A String representing the displayName
	 */
	public getDisplayName(): string	{
		return this.displayName;

	}

	/**
	 * The method to set the value to displayName
	 * @param displayName A String representing the displayName
	 */
	public setDisplayName(displayName: string): void	{
		this.displayName = displayName;
		this.keyModified.set("display_name", 1);

	}

	/**
	 * The method to get the isoCode
	 * @returns A String representing the isoCode
	 */
	public getIsoCode(): string	{
		return this.isoCode;

	}

	/**
	 * The method to set the value to isoCode
	 * @param isoCode A String representing the isoCode
	 */
	public setIsoCode(isoCode: string): void	{
		this.isoCode = isoCode;
		this.keyModified.set("iso_code", 1);

	}

	/**
	 * The method to get the decimalPlaces
	 * @returns A String representing the decimalPlaces
	 */
	public getDecimalPlaces(): string	{
		return this.decimalPlaces;

	}

	/**
	 * The method to set the value to decimalPlaces
	 * @param decimalPlaces A String representing the decimalPlaces
	 */
	public setDecimalPlaces(decimalPlaces: string): void	{
		this.decimalPlaces = decimalPlaces;
		this.keyModified.set("decimal_places", 1);

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
	Currency as MasterModel,
	Currency as Currency
}
