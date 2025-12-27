import {Model} from "../../../../../../utils/util/model";

class FontAttributes implements Model{

	private size: number;
	private color: string;
	private family: string;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the size
	 * @returns A number representing the size
	 */
	public getSize(): number	{
		return this.size;

	}

	/**
	 * The method to set the value to size
	 * @param size A number representing the size
	 */
	public setSize(size: number): void	{
		this.size = size;
		this.keyModified.set("size", 1);

	}

	/**
	 * The method to get the color
	 * @returns A String representing the color
	 */
	public getColor(): string	{
		return this.color;

	}

	/**
	 * The method to set the value to color
	 * @param color A String representing the color
	 */
	public setColor(color: string): void	{
		this.color = color;
		this.keyModified.set("color", 1);

	}

	/**
	 * The method to get the family
	 * @returns A String representing the family
	 */
	public getFamily(): string	{
		return this.family;

	}

	/**
	 * The method to set the value to family
	 * @param family A String representing the family
	 */
	public setFamily(family: string): void	{
		this.family = family;
		this.keyModified.set("family", 1);

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
	FontAttributes as MasterModel,
	FontAttributes as FontAttributes
}
