import {Model} from "../../../../../../utils/util/model";

class CurrentPicklist implements Model{

	private colourCode: string;
	private id: string;
	private value: string;
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
	 * The method to get the id
	 * @returns A String representing the id
	 */
	public getId(): string	{
		return this.id;

	}

	/**
	 * The method to set the value to id
	 * @param id A String representing the id
	 */
	public setId(id: string): void	{
		this.id = id;
		this.keyModified.set("id", 1);

	}

	/**
	 * The method to get the value
	 * @returns A String representing the value
	 */
	public getValue(): string	{
		return this.value;

	}

	/**
	 * The method to set the value to value
	 * @param value A String representing the value
	 */
	public setValue(value: string): void	{
		this.value = value;
		this.keyModified.set("value", 1);

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
	CurrentPicklist as MasterModel,
	CurrentPicklist as CurrentPicklist
}
