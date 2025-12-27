import {Model} from "../../../../../../utils/util/model";

class Private implements Model{

	private restricted: boolean;
	private type: string;
	private export1: boolean;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the restricted
	 * @returns A Boolean representing the restricted
	 */
	public getRestricted(): boolean	{
		return this.restricted;

	}

	/**
	 * The method to set the value to restricted
	 * @param restricted A Boolean representing the restricted
	 */
	public setRestricted(restricted: boolean): void	{
		this.restricted = restricted;
		this.keyModified.set("restricted", 1);

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
	 * The method to get the export
	 * @returns A Boolean representing the export1
	 */
	public getExport(): boolean	{
		return this.export1;

	}

	/**
	 * The method to set the value to export
	 * @param export1 A Boolean representing the export1
	 */
	public setExport(export1: boolean): void	{
		this.export1 = export1;
		this.keyModified.set("export", 1);

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
	Private as MasterModel,
	Private as Private
}
