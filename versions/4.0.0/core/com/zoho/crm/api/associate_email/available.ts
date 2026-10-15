import {LinkedRecord} from "./linked_record";
import {Record} from "./record";
import {Model} from "../../../../../../utils/util/model";

class Available implements Model{

	private available: boolean;
	private record: Record;
	private linkedRecord: LinkedRecord;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the available
	 * @returns A Boolean representing the available
	 */
	public getAvailable(): boolean	{
		return this.available;

	}

	/**
	 * The method to set the value to available
	 * @param available A Boolean representing the available
	 */
	public setAvailable(available: boolean): void	{
		this.available = available;
		this.keyModified.set("available", 1);

	}

	/**
	 * The method to get the record
	 * @returns An instance of Record
	 */
	public getRecord(): Record	{
		return this.record;

	}

	/**
	 * The method to set the value to record
	 * @param record An instance of Record
	 */
	public setRecord(record: Record): void	{
		this.record = record;
		this.keyModified.set("record", 1);

	}

	/**
	 * The method to get the linkedRecord
	 * @returns An instance of LinkedRecord
	 */
	public getLinkedRecord(): LinkedRecord	{
		return this.linkedRecord;

	}

	/**
	 * The method to set the value to linkedRecord
	 * @param linkedRecord An instance of LinkedRecord
	 */
	public setLinkedRecord(linkedRecord: LinkedRecord): void	{
		this.linkedRecord = linkedRecord;
		this.keyModified.set("linked_record", 1);

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
	Available as MasterModel,
	Available as Available
}
