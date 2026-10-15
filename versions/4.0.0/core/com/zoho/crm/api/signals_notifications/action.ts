import {Model} from "../../../../../../utils/util/model";

class Action implements Model{

	private type: string;
	private openIn: string;
	private displayName: string;
	private url: string;
	private keyModified: Map<string, number> = new Map<string, number>();
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
	 * The method to get the openIn
	 * @returns A String representing the openIn
	 */
	public getOpenIn(): string	{
		return this.openIn;

	}

	/**
	 * The method to set the value to openIn
	 * @param openIn A String representing the openIn
	 */
	public setOpenIn(openIn: string): void	{
		this.openIn = openIn;
		this.keyModified.set("open_in", 1);

	}

	/**
	 * The method to get the displayName
	 * @returns A String representing the displayName
	 */
	public getDisplayName(): string	{
		return this.displayName;

	}

	/**
	 * The method to set the value to displayName
	 * @param displayName A String representing the displayName
	 */
	public setDisplayName(displayName: string): void	{
		this.displayName = displayName;
		this.keyModified.set("display_name", 1);

	}

	/**
	 * The method to get the url
	 * @returns A String representing the url
	 */
	public getUrl(): string	{
		return this.url;

	}

	/**
	 * The method to set the value to url
	 * @param url A String representing the url
	 */
	public setUrl(url: string): void	{
		this.url = url;
		this.keyModified.set("url", 1);

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
	Action as MasterModel,
	Action as Action
}
