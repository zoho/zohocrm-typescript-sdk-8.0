import {Model} from "../../../../../../utils/util/model";

class ButtonAttributes implements Model{

	private color: string;
	private name: string;
	private align: string;
	private borderRadiusPx: string;
	private keyModified: Map<string, number> = new Map<string, number>();
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
	 * The method to get the name
	 * @returns A String representing the name
	 */
	public getName(): string	{
		return this.name;

	}

	/**
	 * The method to set the value to name
	 * @param name A String representing the name
	 */
	public setName(name: string): void	{
		this.name = name;
		this.keyModified.set("name", 1);

	}

	/**
	 * The method to get the align
	 * @returns A String representing the align
	 */
	public getAlign(): string	{
		return this.align;

	}

	/**
	 * The method to set the value to align
	 * @param align A String representing the align
	 */
	public setAlign(align: string): void	{
		this.align = align;
		this.keyModified.set("align", 1);

	}

	/**
	 * The method to get the borderRadiusPx
	 * @returns A String representing the borderRadiusPx
	 */
	public getBorderRadiusPx(): string	{
		return this.borderRadiusPx;

	}

	/**
	 * The method to set the value to borderRadiusPx
	 * @param borderRadiusPx A String representing the borderRadiusPx
	 */
	public setBorderRadiusPx(borderRadiusPx: string): void	{
		this.borderRadiusPx = borderRadiusPx;
		this.keyModified.set("border_radius_px", 1);

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
	ButtonAttributes as MasterModel,
	ButtonAttributes as ButtonAttributes
}
