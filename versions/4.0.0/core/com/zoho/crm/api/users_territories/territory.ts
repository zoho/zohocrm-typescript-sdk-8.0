import {Manager} from "./manager";
import {Model} from "../../../../../../utils/util/model";

class Territory implements Model{

	private id: bigint;
	private manager: Manager;
	private reportingTo: Manager;
	private name: string;
	private keyModified: Map<string, number> = new Map<string, number>();
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
	 * The method to get the manager
	 * @returns An instance of Manager
	 */
	public getManager(): Manager	{
		return this.manager;

	}

	/**
	 * The method to set the value to manager
	 * @param manager An instance of Manager
	 */
	public setManager(manager: Manager): void	{
		this.manager = manager;
		this.keyModified.set("Manager", 1);

	}

	/**
	 * The method to get the reportingTo
	 * @returns An instance of Manager
	 */
	public getReportingTo(): Manager	{
		return this.reportingTo;

	}

	/**
	 * The method to set the value to reportingTo
	 * @param reportingTo An instance of Manager
	 */
	public setReportingTo(reportingTo: Manager): void	{
		this.reportingTo = reportingTo;
		this.keyModified.set("Reporting_To", 1);

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
