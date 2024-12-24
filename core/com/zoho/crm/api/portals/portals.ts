import {Owner} from "./owner";
import {Model} from "../../../../../../utils/util/model";

class Portals implements Model{

	private createdTime: Date;
	private modifiedTime: Date;
	private modifiedBy: Owner;
	private createdBy: Owner;
	private zaid: string;
	private name: string;
	private active: boolean;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the createdTime
	 * @returns An instance of Date
	 */
	public getCreatedTime(): Date	{
		return this.createdTime;

	}

	/**
	 * The method to set the value to createdTime
	 * @param createdTime An instance of Date
	 */
	public setCreatedTime(createdTime: Date): void	{
		this.createdTime = createdTime;
		this.keyModified.set("created_time", 1);

	}

	/**
	 * The method to get the modifiedTime
	 * @returns An instance of Date
	 */
	public getModifiedTime(): Date	{
		return this.modifiedTime;

	}

	/**
	 * The method to set the value to modifiedTime
	 * @param modifiedTime An instance of Date
	 */
	public setModifiedTime(modifiedTime: Date): void	{
		this.modifiedTime = modifiedTime;
		this.keyModified.set("modified_time", 1);

	}

	/**
	 * The method to get the modifiedBy
	 * @returns An instance of Owner
	 */
	public getModifiedBy(): Owner	{
		return this.modifiedBy;

	}

	/**
	 * The method to set the value to modifiedBy
	 * @param modifiedBy An instance of Owner
	 */
	public setModifiedBy(modifiedBy: Owner): void	{
		this.modifiedBy = modifiedBy;
		this.keyModified.set("modified_by", 1);

	}

	/**
	 * The method to get the createdBy
	 * @returns An instance of Owner
	 */
	public getCreatedBy(): Owner	{
		return this.createdBy;

	}

	/**
	 * The method to set the value to createdBy
	 * @param createdBy An instance of Owner
	 */
	public setCreatedBy(createdBy: Owner): void	{
		this.createdBy = createdBy;
		this.keyModified.set("created_by", 1);

	}

	/**
	 * The method to get the zaid
	 * @returns A String representing the zaid
	 */
	public getZaid(): string	{
		return this.zaid;

	}

	/**
	 * The method to set the value to zaid
	 * @param zaid A String representing the zaid
	 */
	public setZaid(zaid: string): void	{
		this.zaid = zaid;
		this.keyModified.set("zaid", 1);

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
	 * The method to get the active
	 * @returns A Boolean representing the active
	 */
	public getActive(): boolean	{
		return this.active;

	}

	/**
	 * The method to set the value to active
	 * @param active A Boolean representing the active
	 */
	public setActive(active: boolean): void	{
		this.active = active;
		this.keyModified.set("active", 1);

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
	Portals as MasterModel,
	Portals as Portals
}
