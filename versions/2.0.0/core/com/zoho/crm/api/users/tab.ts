import {Choice} from "../../../../../../utils/util/choice";
import {Model} from "../../../../../../utils/util/model";

class Tab implements Model{

	private fontColor: Choice<string>;
	private background: Choice<string>;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the fontColor
	 * @returns An instance of Choice<string>
	 */
	public getFontColor(): Choice<string>	{
		return this.fontColor;

	}

	/**
	 * The method to set the value to fontColor
	 * @param fontColor An instance of Choice<string>
	 */
	public setFontColor(fontColor: Choice<string>): void	{
		this.fontColor = fontColor;
		this.keyModified.set("font_color", 1);

	}

	/**
	 * The method to get the background
	 * @returns An instance of Choice<string>
	 */
	public getBackground(): Choice<string>	{
		return this.background;

	}

	/**
	 * The method to set the value to background
	 * @param background An instance of Choice<string>
	 */
	public setBackground(background: Choice<string>): void	{
		this.background = background;
		this.keyModified.set("background", 1);

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
	Tab as MasterModel,
	Tab as Tab
}
