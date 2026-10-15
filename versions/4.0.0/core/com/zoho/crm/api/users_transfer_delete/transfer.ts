import {Model} from "../../../../../../utils/util/model";

class Transfer implements Model{

	private records: boolean;
	private assignment: boolean;
	private criteria: boolean;
	private id: bigint;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the records
	 * @returns A Boolean representing the records
	 */
	public getRecords(): boolean	{
		return this.records;

	}

	/**
	 * The method to set the value to records
	 * @param records A Boolean representing the records
	 */
	public setRecords(records: boolean): void	{
		this.records = records;
		this.keyModified.set("records", 1);

	}

	/**
	 * The method to get the assignment
	 * @returns A Boolean representing the assignment
	 */
	public getAssignment(): boolean	{
		return this.assignment;

	}

	/**
	 * The method to set the value to assignment
	 * @param assignment A Boolean representing the assignment
	 */
	public setAssignment(assignment: boolean): void	{
		this.assignment = assignment;
		this.keyModified.set("assignment", 1);

	}

	/**
	 * The method to get the criteria
	 * @returns A Boolean representing the criteria
	 */
	public getCriteria(): boolean	{
		return this.criteria;

	}

	/**
	 * The method to set the value to criteria
	 * @param criteria A Boolean representing the criteria
	 */
	public setCriteria(criteria: boolean): void	{
		this.criteria = criteria;
		this.keyModified.set("criteria", 1);

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
	Transfer as MasterModel,
	Transfer as Transfer
}
