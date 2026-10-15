import {Option} from "./option";
import {Model} from "../../../../../../utils/util/model";

class Section implements Model{

	private name: string;
	private tooltip: string;
	private showType: string;
	private title: string;
	private options: Array<Option>;
	private keyModified: Map<string, number> = new Map<string, number>();
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
	 * The method to get the tooltip
	 * @returns A String representing the tooltip
	 */
	public getTooltip(): string	{
		return this.tooltip;

	}

	/**
	 * The method to set the value to tooltip
	 * @param tooltip A String representing the tooltip
	 */
	public setTooltip(tooltip: string): void	{
		this.tooltip = tooltip;
		this.keyModified.set("tooltip", 1);

	}

	/**
	 * The method to get the showType
	 * @returns A String representing the showType
	 */
	public getShowType(): string	{
		return this.showType;

	}

	/**
	 * The method to set the value to showType
	 * @param showType A String representing the showType
	 */
	public setShowType(showType: string): void	{
		this.showType = showType;
		this.keyModified.set("show_type", 1);

	}

	/**
	 * The method to get the title
	 * @returns A String representing the title
	 */
	public getTitle(): string	{
		return this.title;

	}

	/**
	 * The method to set the value to title
	 * @param title A String representing the title
	 */
	public setTitle(title: string): void	{
		this.title = title;
		this.keyModified.set("title", 1);

	}

	/**
	 * The method to get the options
	 * @returns An Array representing the options
	 */
	public getOptions(): Array<Option>	{
		return this.options;

	}

	/**
	 * The method to set the value to options
	 * @param options An Array representing the options
	 */
	public setOptions(options: Array<Option>): void	{
		this.options = options;
		this.keyModified.set("options", 1);

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
	Section as MasterModel,
	Section as Section
}
