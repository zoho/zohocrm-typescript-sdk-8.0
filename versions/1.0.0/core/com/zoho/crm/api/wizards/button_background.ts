import {Model} from "../../../../../../utils/util/model";

class ButtonBackground implements Model{

	private buttonBackground: Array<string>;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the buttonBackground
	 * @returns An Array representing the buttonBackground
	 */
	public getButtonBackground(): Array<string>	{
		return this.buttonBackground;

	}

	/**
	 * The method to set the value to buttonBackground
	 * @param buttonBackground An Array representing the buttonBackground
	 */
	public setButtonBackground(buttonBackground: Array<string>): void	{
		this.buttonBackground = buttonBackground;
		this.keyModified.set("button_background", 1);

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
	ButtonBackground as MasterModel,
	ButtonBackground as ButtonBackground
}
