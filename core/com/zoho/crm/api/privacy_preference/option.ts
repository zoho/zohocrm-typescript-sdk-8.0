import {Model} from "../../../../../../utils/util/model";

class Option implements Model{

	private name: string;
	private tooltip: string;
	private type: string;
	private suboptions: Array<string>;
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
	 * The method to get the suboptions
	 * @returns An Array representing the suboptions
	 */
	public getSuboptions(): Array<string>	{
		return this.suboptions;

	}

	/**
	 * The method to set the value to suboptions
	 * @param suboptions An Array representing the suboptions
	 */
	public setSuboptions(suboptions: Array<string>): void	{
		this.suboptions = suboptions;
		this.keyModified.set("suboptions", 1);

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
	Option as MasterModel,
	Option as Option
}
