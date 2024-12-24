import {Model} from "../../../../../../utils/util/model";

class Unique implements Model{

	private casesensitive: string;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the casesensitive
	 * @returns A String representing the casesensitive
	 */
	public getCasesensitive(): string	{
		return this.casesensitive;

	}

	/**
	 * The method to set the value to casesensitive
	 * @param casesensitive A String representing the casesensitive
	 */
	public setCasesensitive(casesensitive: string): void	{
		this.casesensitive = casesensitive;
		this.keyModified.set("casesensitive", 1);

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
	Unique as MasterModel,
	Unique as Unique
}
