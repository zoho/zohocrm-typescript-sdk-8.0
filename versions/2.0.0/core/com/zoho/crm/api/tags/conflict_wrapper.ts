import {Model} from "../../../../../../utils/util/model";

class ConflictWrapper implements Model{

	private conflictId: string;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the conflictId
	 * @returns A String representing the conflictId
	 */
	public getConflictId(): string	{
		return this.conflictId;

	}

	/**
	 * The method to set the value to conflictId
	 * @param conflictId A String representing the conflictId
	 */
	public setConflictId(conflictId: string): void	{
		this.conflictId = conflictId;
		this.keyModified.set("conflict_id", 1);

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
	ConflictWrapper as MasterModel,
	ConflictWrapper as ConflictWrapper
}
