import {Tab} from "./tab";
import {Choice} from "../../../../../../utils/util/choice";
import {Model} from "../../../../../../utils/util/model";

class Theme implements Model{

	private normalTab: Tab;
	private selectedTab: Tab;
	private newBackground: string;
	private background: Choice<string>;
	private screen: Choice<string>;
	private type: string;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the normalTab
	 * @returns An instance of Tab
	 */
	public getNormalTab(): Tab	{
		return this.normalTab;

	}

	/**
	 * The method to set the value to normalTab
	 * @param normalTab An instance of Tab
	 */
	public setNormalTab(normalTab: Tab): void	{
		this.normalTab = normalTab;
		this.keyModified.set("normal_tab", 1);

	}

	/**
	 * The method to get the selectedTab
	 * @returns An instance of Tab
	 */
	public getSelectedTab(): Tab	{
		return this.selectedTab;

	}

	/**
	 * The method to set the value to selectedTab
	 * @param selectedTab An instance of Tab
	 */
	public setSelectedTab(selectedTab: Tab): void	{
		this.selectedTab = selectedTab;
		this.keyModified.set("selected_tab", 1);

	}

	/**
	 * The method to get the newBackground
	 * @returns A String representing the newBackground
	 */
	public getNewBackground(): string	{
		return this.newBackground;

	}

	/**
	 * The method to set the value to newBackground
	 * @param newBackground A String representing the newBackground
	 */
	public setNewBackground(newBackground: string): void	{
		this.newBackground = newBackground;
		this.keyModified.set("new_background", 1);

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
	 * The method to get the screen
	 * @returns An instance of Choice<string>
	 */
	public getScreen(): Choice<string>	{
		return this.screen;

	}

	/**
	 * The method to set the value to screen
	 * @param screen An instance of Choice<string>
	 */
	public setScreen(screen: Choice<string>): void	{
		this.screen = screen;
		this.keyModified.set("screen", 1);

	}

	/**
	 * The method to get the type
	 * @returns A String representing the type
	 */
	public getType(): string	{
		return this.type;

	}

	/**
	 * The method to set the value to type
	 * @param type A String representing the type
	 */
	public setType(type: string): void	{
		this.type = type;
		this.keyModified.set("type", 1);

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
	Theme as MasterModel,
	Theme as Theme
}
