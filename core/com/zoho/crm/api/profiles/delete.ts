import {Model} from "../../../../../../utils/util/model";

class Delete implements Model{

	private permanent: boolean;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the permanent
	 * @returns A Boolean representing the permanent
	 */
	public getPermanent(): boolean	{
		return this.permanent;

	}

	/**
	 * The method to set the value to permanent
	 * @param permanent A Boolean representing the permanent
	 */
	public setPermanent(permanent: boolean): void	{
		this.permanent = permanent;
		this.keyModified.set("permanent", 1);

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
	Delete as MasterModel,
	Delete as Delete
}
