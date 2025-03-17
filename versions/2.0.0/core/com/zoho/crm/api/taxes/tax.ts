import {Model} from "../../../../../../utils/util/model";

class Tax implements Model{

	private displayLabel: string;
	private sequenceNumber: number;
	private name: string;
	private id: bigint;
	private value: number;
	private delete1: boolean;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the displayLabel
	 * @returns A String representing the displayLabel
	 */
	public getDisplayLabel(): string	{
		return this.displayLabel;

	}

	/**
	 * The method to set the value to displayLabel
	 * @param displayLabel A String representing the displayLabel
	 */
	public setDisplayLabel(displayLabel: string): void	{
		this.displayLabel = displayLabel;
		this.keyModified.set("display_label", 1);

	}

	/**
	 * The method to get the sequenceNumber
	 * @returns A number representing the sequenceNumber
	 */
	public getSequenceNumber(): number	{
		return this.sequenceNumber;

	}

	/**
	 * The method to set the value to sequenceNumber
	 * @param sequenceNumber A number representing the sequenceNumber
	 */
	public setSequenceNumber(sequenceNumber: number): void	{
		this.sequenceNumber = sequenceNumber;
		this.keyModified.set("sequence_number", 1);

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
	Tax as MasterModel,
	Tax as Tax
}
