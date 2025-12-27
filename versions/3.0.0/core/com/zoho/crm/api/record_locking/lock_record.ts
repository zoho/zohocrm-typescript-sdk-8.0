import {Model} from "../../../../../../utils/util/model";

class LockRecord implements Model{

	private lockedReasonS: string;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the lockedReasonS
	 * @returns A String representing the lockedReasonS
	 */
	public getLockedReasonS(): string	{
		return this.lockedReasonS;

	}

	/**
	 * The method to set the value to lockedReasonS
	 * @param lockedReasonS A String representing the lockedReasonS
	 */
	public setLockedReasonS(lockedReasonS: string): void	{
		this.lockedReasonS = lockedReasonS;
		this.keyModified.set("Locked_Reason__s", 1);

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
	LockRecord as MasterModel,
	LockRecord as LockRecord
}
