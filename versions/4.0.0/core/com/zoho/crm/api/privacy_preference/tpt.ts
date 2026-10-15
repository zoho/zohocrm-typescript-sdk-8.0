import {Model} from "../../../../../../utils/util/model";

class Tpt implements Model{

	private isenabled: string;
	private name: string;
	private issupported: string;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the isenabled
	 * @returns A String representing the isenabled
	 */
	public getIsenabled(): string	{
		return this.isenabled;

	}

	/**
	 * The method to set the value to isenabled
	 * @param isenabled A String representing the isenabled
	 */
	public setIsenabled(isenabled: string): void	{
		this.isenabled = isenabled;
		this.keyModified.set("isEnabled", 1);

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
	 * The method to get the issupported
	 * @returns A String representing the issupported
	 */
	public getIssupported(): string	{
		return this.issupported;

	}

	/**
	 * The method to set the value to issupported
	 * @param issupported A String representing the issupported
	 */
	public setIssupported(issupported: string): void	{
		this.issupported = issupported;
		this.keyModified.set("isSupported", 1);

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
	Tpt as MasterModel,
	Tpt as Tpt
}
