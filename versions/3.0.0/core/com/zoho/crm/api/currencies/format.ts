import {Choice} from "../../../../../../utils/util/choice";
import {Model} from "../../../../../../utils/util/model";

class Format implements Model{

	private decimalSeparator: Choice<string>;
	private thousandSeparator: Choice<string>;
	private decimalPlaces: Choice<string>;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the decimalSeparator
	 * @returns An instance of Choice<string>
	 */
	public getDecimalSeparator(): Choice<string>	{
		return this.decimalSeparator;

	}

	/**
	 * The method to set the value to decimalSeparator
	 * @param decimalSeparator An instance of Choice<string>
	 */
	public setDecimalSeparator(decimalSeparator: Choice<string>): void	{
		this.decimalSeparator = decimalSeparator;
		this.keyModified.set("decimal_separator", 1);

	}

	/**
	 * The method to get the thousandSeparator
	 * @returns An instance of Choice<string>
	 */
	public getThousandSeparator(): Choice<string>	{
		return this.thousandSeparator;

	}

	/**
	 * The method to set the value to thousandSeparator
	 * @param thousandSeparator An instance of Choice<string>
	 */
	public setThousandSeparator(thousandSeparator: Choice<string>): void	{
		this.thousandSeparator = thousandSeparator;
		this.keyModified.set("thousand_separator", 1);

	}

	/**
	 * The method to get the decimalPlaces
	 * @returns An instance of Choice<string>
	 */
	public getDecimalPlaces(): Choice<string>	{
		return this.decimalPlaces;

	}

	/**
	 * The method to set the value to decimalPlaces
	 * @param decimalPlaces An instance of Choice<string>
	 */
	public setDecimalPlaces(decimalPlaces: Choice<string>): void	{
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
	Format as MasterModel,
	Format as Format
}
