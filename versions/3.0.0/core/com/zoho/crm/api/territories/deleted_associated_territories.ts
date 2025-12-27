import {MinifiedUser} from "../users/minified_user";
import {Model} from "../../../../../../utils/util/model";

class DeletedAssociatedTerritories implements Model{

	private name: string;
	private id: string;
	private deletedTime: Date;
	private deletedBy: MinifiedUser;
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
	 * The method to get the id
	 * @returns A String representing the id
	 */
	public getId(): string	{
		return this.id;

	}

	/**
	 * The method to set the value to id
	 * @param id A String representing the id
	 */
	public setId(id: string): void	{
		this.id = id;
		this.keyModified.set("id", 1);

	}

	/**
	 * The method to get the deletedTime
	 * @returns An instance of Date
	 */
	public getDeletedTime(): Date	{
		return this.deletedTime;

	}

	/**
	 * The method to set the value to deletedTime
	 * @param deletedTime An instance of Date
	 */
	public setDeletedTime(deletedTime: Date): void	{
		this.deletedTime = deletedTime;
		this.keyModified.set("deleted_time", 1);

	}

	/**
	 * The method to get the deletedBy
	 * @returns An instance of MinifiedUser
	 */
	public getDeletedBy(): MinifiedUser	{
		return this.deletedBy;

	}

	/**
	 * The method to set the value to deletedBy
	 * @param deletedBy An instance of MinifiedUser
	 */
	public setDeletedBy(deletedBy: MinifiedUser): void	{
		this.deletedBy = deletedBy;
		this.keyModified.set("deleted_by", 1);

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
	DeletedAssociatedTerritories as MasterModel,
	DeletedAssociatedTerritories as DeletedAssociatedTerritories
}
