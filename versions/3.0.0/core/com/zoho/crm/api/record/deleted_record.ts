import {MinifiedUser} from "../users/minified_user";
import {Model} from "../../../../../../utils/util/model";

class DeletedRecord implements Model{

	private deletedBy: MinifiedUser;
	private id: bigint;
	private displayName: string;
	private type: string;
	private createdBy: MinifiedUser;
	private deletedTime: Date;
	private keyModified: Map<string, number> = new Map<string, number>();
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
	 * The method to get the id
	 * @returns A BigInt representing the id
	 */
	public getId(): bigint	{
		return this.id;

	}

	/**
	 * The method to set the value to id
	 * @param id A BigInt representing the id
	 */
	public setId(id: bigint): void	{
		this.id = id;
		this.keyModified.set("id", 1);

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
	 * The method to get the createdBy
	 * @returns An instance of MinifiedUser
	 */
	public getCreatedBy(): MinifiedUser	{
		return this.createdBy;

	}

	/**
	 * The method to set the value to createdBy
	 * @param createdBy An instance of MinifiedUser
	 */
	public setCreatedBy(createdBy: MinifiedUser): void	{
		this.createdBy = createdBy;
		this.keyModified.set("created_by", 1);

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
	DeletedRecord as MasterModel,
	DeletedRecord as DeletedRecord
}
