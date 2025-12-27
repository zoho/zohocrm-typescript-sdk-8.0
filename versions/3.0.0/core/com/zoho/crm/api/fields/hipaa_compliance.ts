import {Model} from "../../../../../../utils/util/model";

class HipaaCompliance implements Model{

	private restrictedInExport: boolean;
	private restricted: boolean;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the restrictedInExport
	 * @returns A Boolean representing the restrictedInExport
	 */
	public getRestrictedInExport(): boolean	{
		return this.restrictedInExport;

	}

	/**
	 * The method to set the value to restrictedInExport
	 * @param restrictedInExport A Boolean representing the restrictedInExport
	 */
	public setRestrictedInExport(restrictedInExport: boolean): void	{
		this.restrictedInExport = restrictedInExport;
		this.keyModified.set("restricted_in_export", 1);

	}

	/**
	 * The method to get the restricted
	 * @returns A Boolean representing the restricted
	 */
	public getRestricted(): boolean	{
		return this.restricted;

	}

	/**
	 * The method to set the value to restricted
	 * @param restricted A Boolean representing the restricted
	 */
	public setRestricted(restricted: boolean): void	{
		this.restricted = restricted;
		this.keyModified.set("restricted", 1);

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
	HipaaCompliance as MasterModel,
	HipaaCompliance as HipaaCompliance
}
