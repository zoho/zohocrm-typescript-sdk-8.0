import {Model} from "../../../../../../utils/util/model";

class External implements Model{

	private show: boolean;
	private type: string;
	private allowMultipleConfig: boolean;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the show
	 * @returns A Boolean representing the show
	 */
	public getShow(): boolean	{
		return this.show;

	}

	/**
	 * The method to set the value to show
	 * @param show A Boolean representing the show
	 */
	public setShow(show: boolean): void	{
		this.show = show;
		this.keyModified.set("show", 1);

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
	 * The method to get the allowMultipleConfig
	 * @returns A Boolean representing the allowMultipleConfig
	 */
	public getAllowMultipleConfig(): boolean	{
		return this.allowMultipleConfig;

	}

	/**
	 * The method to set the value to allowMultipleConfig
	 * @param allowMultipleConfig A Boolean representing the allowMultipleConfig
	 */
	public setAllowMultipleConfig(allowMultipleConfig: boolean): void	{
		this.allowMultipleConfig = allowMultipleConfig;
		this.keyModified.set("allow_multiple_config", 1);

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
	External as MasterModel,
	External as External
}
