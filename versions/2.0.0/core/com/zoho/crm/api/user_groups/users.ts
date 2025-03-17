import {Model} from "../../../../../../utils/util/model";

class Users implements Model{

	private inactive: number;
	private deleted: number;
	private active: number;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the inactive
	 * @returns A number representing the inactive
	 */
	public getInactive(): number	{
		return this.inactive;

	}

	/**
	 * The method to set the value to inactive
	 * @param inactive A number representing the inactive
	 */
	public setInactive(inactive: number): void	{
		this.inactive = inactive;
		this.keyModified.set("inactive", 1);

	}

	/**
	 * The method to get the deleted
	 * @returns A number representing the deleted
	 */
	public getDeleted(): number	{
		return this.deleted;

	}

	/**
	 * The method to set the value to deleted
	 * @param deleted A number representing the deleted
	 */
	public setDeleted(deleted: number): void	{
		this.deleted = deleted;
		this.keyModified.set("deleted", 1);

	}

	/**
	 * The method to get the active
	 * @returns A number representing the active
	 */
	public getActive(): number	{
		return this.active;

	}

	/**
	 * The method to set the value to active
	 * @param active A number representing the active
	 */
	public setActive(active: number): void	{
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
	Users as MasterModel,
	Users as Users
}
