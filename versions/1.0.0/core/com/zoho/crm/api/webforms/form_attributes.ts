import {FontAttributes} from "./font_attributes";
import {Model} from "../../../../../../utils/util/model";

class FormAttributes implements Model{

	private color: string;
	private width: number;
	private fontAttributes: FontAttributes;
	private align: string;
	private displayFormName: string;
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
	 * The method to get the width
	 * @returns A number representing the width
	 */
	public getWidth(): number	{
		return this.width;

	}

	/**
	 * The method to set the value to width
	 * @param width A number representing the width
	 */
	public setWidth(width: number): void	{
		this.width = width;
		this.keyModified.set("width", 1);

	}

	/**
	 * The method to get the fontAttributes
	 * @returns An instance of FontAttributes
	 */
	public getFontAttributes(): FontAttributes	{
		return this.fontAttributes;

	}

	/**
	 * The method to set the value to fontAttributes
	 * @param fontAttributes An instance of FontAttributes
	 */
	public setFontAttributes(fontAttributes: FontAttributes): void	{
		this.fontAttributes = fontAttributes;
		this.keyModified.set("font_attributes", 1);

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
	 * The method to get the displayFormName
	 * @returns A String representing the displayFormName
	 */
	public getDisplayFormName(): string	{
		return this.displayFormName;

	}

	/**
	 * The method to set the value to displayFormName
	 * @param displayFormName A String representing the displayFormName
	 */
	public setDisplayFormName(displayFormName: string): void	{
		this.displayFormName = displayFormName;
		this.keyModified.set("display_form_name", 1);

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
	FormAttributes as MasterModel,
	FormAttributes as FormAttributes
}
