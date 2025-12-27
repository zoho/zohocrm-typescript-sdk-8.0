import {Model} from "../../../../../../utils/util/model";

class Info implements Model{

	private licenseLimit: number;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the licenseLimit
	 * @returns A number representing the licenseLimit
	 */
	public getLicenseLimit(): number	{
		return this.licenseLimit;

	}

	/**
	 * The method to set the value to licenseLimit
	 * @param licenseLimit A number representing the licenseLimit
	 */
	public setLicenseLimit(licenseLimit: number): void	{
		this.licenseLimit = licenseLimit;
		this.keyModified.set("license_limit", 1);

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
	Info as MasterModel,
	Info as Info
}
