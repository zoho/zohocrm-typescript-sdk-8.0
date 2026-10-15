import {MinifiedUser} from "../users/minified_user";
import {Model} from "../../../../../../utils/util/model";

class Territory implements Model{

	private assigned: string;
	private name: string;
	private id: bigint;
	private assignedTime: Date;
	private assignedBy: MinifiedUser;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the assigned
	 * @returns A String representing the assigned
	 */
	public getAssigned(): string	{
		return this.assigned;

	}

	/**
	 * The method to set the value to assigned
	 * @param assigned A String representing the assigned
	 */
	public setAssigned(assigned: string): void	{
		this.assigned = assigned;
		this.keyModified.set("$assigned", 1);

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
		this.keyModified.set("Name", 1);

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
	 * The method to get the assignedTime
	 * @returns An instance of Date
	 */
	public getAssignedTime(): Date	{
		return this.assignedTime;

	}

	/**
	 * The method to set the value to assignedTime
	 * @param assignedTime An instance of Date
	 */
	public setAssignedTime(assignedTime: Date): void	{
		this.assignedTime = assignedTime;
		this.keyModified.set("$assigned_time", 1);

	}

	/**
	 * The method to get the assignedBy
	 * @returns An instance of MinifiedUser
	 */
	public getAssignedBy(): MinifiedUser	{
		return this.assignedBy;

	}

	/**
	 * The method to set the value to assignedBy
	 * @param assignedBy An instance of MinifiedUser
	 */
	public setAssignedBy(assignedBy: MinifiedUser): void	{
		this.assignedBy = assignedBy;
		this.keyModified.set("$assigned_by", 1);

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
	Territory as MasterModel,
	Territory as Territory
}
