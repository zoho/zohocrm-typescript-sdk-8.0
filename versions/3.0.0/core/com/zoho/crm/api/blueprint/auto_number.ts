import {Model} from "../../../../../../utils/util/model";

class AutoNumber implements Model{

	private prefix: string;
	private suffix: string;
	private startNumber: number;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the prefix
	 * @returns A String representing the prefix
	 */
	public getPrefix(): string	{
		return this.prefix;

	}

	/**
	 * The method to set the value to prefix
	 * @param prefix A String representing the prefix
	 */
	public setPrefix(prefix: string): void	{
		this.prefix = prefix;
		this.keyModified.set("prefix", 1);

	}

	/**
	 * The method to get the suffix
	 * @returns A String representing the suffix
	 */
	public getSuffix(): string	{
		return this.suffix;

	}

	/**
	 * The method to set the value to suffix
	 * @param suffix A String representing the suffix
	 */
	public setSuffix(suffix: string): void	{
		this.suffix = suffix;
		this.keyModified.set("suffix", 1);

	}

	/**
	 * The method to get the startNumber
	 * @returns A number representing the startNumber
	 */
	public getStartNumber(): number	{
		return this.startNumber;

	}

	/**
	 * The method to set the value to startNumber
	 * @param startNumber A number representing the startNumber
	 */
	public setStartNumber(startNumber: number): void	{
		this.startNumber = startNumber;
		this.keyModified.set("start_number", 1);

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
	AutoNumber as MasterModel,
	AutoNumber as AutoNumber
}
