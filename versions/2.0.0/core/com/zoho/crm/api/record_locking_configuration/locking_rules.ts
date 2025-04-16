import {Criteria} from "./criteria";
import {Model} from "../../../../../../utils/util/model";

class LockingRules implements Model{

	private name: string;
	private id: bigint;
	private lockExistingRecords: boolean;
	private criteria: Criteria;
	private delete1: boolean;
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
	 * The method to get the lockExistingRecords
	 * @returns A Boolean representing the lockExistingRecords
	 */
	public getLockExistingRecords(): boolean	{
		return this.lockExistingRecords;

	}

	/**
	 * The method to set the value to lockExistingRecords
	 * @param lockExistingRecords A Boolean representing the lockExistingRecords
	 */
	public setLockExistingRecords(lockExistingRecords: boolean): void	{
		this.lockExistingRecords = lockExistingRecords;
		this.keyModified.set("lock_existing_records", 1);

	}

	/**
	 * The method to get the criteria
	 * @returns An instance of Criteria
	 */
	public getCriteria(): Criteria	{
		return this.criteria;

	}

	/**
	 * The method to set the value to criteria
	 * @param criteria An instance of Criteria
	 */
	public setCriteria(criteria: Criteria): void	{
		this.criteria = criteria;
		this.keyModified.set("criteria", 1);

	}

	/**
	 * The method to get the delete
	 * @returns A Boolean representing the delete1
	 */
	public getDelete(): boolean	{
		return this.delete1;

	}

	/**
	 * The method to set the value to delete
	 * @param delete1 A Boolean representing the delete1
	 */
	public setDelete(delete1: boolean): void	{
		this.delete1 = delete1;
		this.keyModified.set("_delete", 1);

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
	LockingRules as MasterModel,
	LockingRules as LockingRules
}
