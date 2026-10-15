import {Model} from "../../../../../../utils/util/model";

class Currency implements Model{

	private roundingOption: string;
	private precision: number;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the roundingOption
	 * @returns A String representing the roundingOption
	 */
	public getRoundingOption(): string	{
		return this.roundingOption;

	}

	/**
	 * The method to set the value to roundingOption
	 * @param roundingOption A String representing the roundingOption
	 */
	public setRoundingOption(roundingOption: string): void	{
		this.roundingOption = roundingOption;
		this.keyModified.set("rounding_option", 1);

	}

	/**
	 * The method to get the precision
	 * @returns A number representing the precision
	 */
	public getPrecision(): number	{
		return this.precision;

	}

	/**
	 * The method to set the value to precision
	 * @param precision A number representing the precision
	 */
	public setPrecision(precision: number): void	{
		this.precision = precision;
		this.keyModified.set("precision", 1);

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
