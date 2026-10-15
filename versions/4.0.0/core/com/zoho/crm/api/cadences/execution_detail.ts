import {ExecuteEvery} from "./execute_every";
import {UnenrollProperty} from "./unenroll_property";
import {Model} from "../../../../../../utils/util/model";

class ExecutionDetail implements Model{

	private unenrollProperties: UnenrollProperty;
	private endDate: string;
	private automaticUnenroll: boolean;
	private type: string;
	private executeEvery: ExecuteEvery;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the unenrollProperties
	 * @returns An instance of UnenrollProperty
	 */
	public getUnenrollProperties(): UnenrollProperty	{
		return this.unenrollProperties;

	}

	/**
	 * The method to set the value to unenrollProperties
	 * @param unenrollProperties An instance of UnenrollProperty
	 */
	public setUnenrollProperties(unenrollProperties: UnenrollProperty): void	{
		this.unenrollProperties = unenrollProperties;
		this.keyModified.set("unenroll_properties", 1);

	}

	/**
	 * The method to get the endDate
	 * @returns A String representing the endDate
	 */
	public getEndDate(): string	{
		return this.endDate;

	}

	/**
	 * The method to set the value to endDate
	 * @param endDate A String representing the endDate
	 */
	public setEndDate(endDate: string): void	{
		this.endDate = endDate;
		this.keyModified.set("end_date", 1);

	}

	/**
	 * The method to get the automaticUnenroll
	 * @returns A Boolean representing the automaticUnenroll
	 */
	public getAutomaticUnenroll(): boolean	{
		return this.automaticUnenroll;

	}

	/**
	 * The method to set the value to automaticUnenroll
	 * @param automaticUnenroll A Boolean representing the automaticUnenroll
	 */
	public setAutomaticUnenroll(automaticUnenroll: boolean): void	{
		this.automaticUnenroll = automaticUnenroll;
		this.keyModified.set("automatic_unenroll", 1);

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
	 * The method to get the executeEvery
	 * @returns An instance of ExecuteEvery
	 */
	public getExecuteEvery(): ExecuteEvery	{
		return this.executeEvery;

	}

	/**
	 * The method to set the value to executeEvery
	 * @param executeEvery An instance of ExecuteEvery
	 */
	public setExecuteEvery(executeEvery: ExecuteEvery): void	{
		this.executeEvery = executeEvery;
		this.keyModified.set("execute_every", 1);

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
	ExecutionDetail as MasterModel,
	ExecutionDetail as ExecutionDetail
}
