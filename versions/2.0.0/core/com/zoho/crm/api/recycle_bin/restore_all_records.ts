import {Choice} from "../../../../../../utils/util/choice";
import {Model} from "../../../../../../utils/util/model";

class RestoreAllRecords implements Model{

	private restoreAllRecords: Choice<boolean>;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the restoreAllRecords
	 * @returns An instance of Choice<boolean>
	 */
	public getRestoreAllRecords(): Choice<boolean>	{
		return this.restoreAllRecords;

	}

	/**
	 * The method to set the value to restoreAllRecords
	 * @param restoreAllRecords An instance of Choice<boolean>
	 */
	public setRestoreAllRecords(restoreAllRecords: Choice<boolean>): void	{
		this.restoreAllRecords = restoreAllRecords;
		this.keyModified.set("restore_all_records", 1);

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
	RestoreAllRecords as MasterModel,
	RestoreAllRecords as RestoreAllRecords
}
