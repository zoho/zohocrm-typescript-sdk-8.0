import {Model} from "../../../../../../utils/util/model";

class LineTax implements Model{

	private percentage: number;
	private name: string;
	private id: bigint;
	private value: number;
	private displayName: string;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the percentage
	 * @returns A Float representing the percentage
	 */
	public getPercentage(): number	{
		return this.percentage;

	}

	/**
	 * The method to set the value to percentage
	 * @param percentage A Float representing the percentage
	 */
	public setPercentage(percentage: number): void	{
		this.percentage = percentage;
		this.keyModified.set("percentage", 1);

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
	 * The method to get the value
	 * @returns A Float representing the value
	 */
	public getValue(): number	{
		return this.value;

	}

	/**
	 * The method to set the value to value
	 * @param value A Float representing the value
	 */
	public setValue(value: number): void	{
		this.value = value;
		this.keyModified.set("value", 1);

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
	LineTax as MasterModel,
	LineTax as LineTax
}
