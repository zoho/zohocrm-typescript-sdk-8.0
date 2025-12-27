import {Model} from "../../../../../../utils/util/model";

class ShiftCount implements Model{

	private totalShiftWithUser: number;
	private totalShift: number;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the totalShiftWithUser
	 * @returns A number representing the totalShiftWithUser
	 */
	public getTotalShiftWithUser(): number	{
		return this.totalShiftWithUser;

	}

	/**
	 * The method to set the value to totalShiftWithUser
	 * @param totalShiftWithUser A number representing the totalShiftWithUser
	 */
	public setTotalShiftWithUser(totalShiftWithUser: number): void	{
		this.totalShiftWithUser = totalShiftWithUser;
		this.keyModified.set("total_shift_with_user", 1);

	}

	/**
	 * The method to get the totalShift
	 * @returns A number representing the totalShift
	 */
	public getTotalShift(): number	{
		return this.totalShift;

	}

	/**
	 * The method to set the value to totalShift
	 * @param totalShift A number representing the totalShift
	 */
	public setTotalShift(totalShift: number): void	{
		this.totalShift = totalShift;
		this.keyModified.set("total_shift", 1);

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
	ShiftCount as MasterModel,
	ShiftCount as ShiftCount
}
