import {Modules} from "./modules";
import {Model} from "../../../../../../utils/util/model";

class HipaaCompliance implements Model{

	private enabled: boolean;
	private enabledForModules: Array<Modules>;
	private restrictToZohoApps: boolean;
	private restrictDataAccessThroughAPI: boolean;
	private restrictDataInExport: boolean;
	private restrictToThirdPartyApps: Array<string>;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the enabled
	 * @returns A Boolean representing the enabled
	 */
	public getEnabled(): boolean	{
		return this.enabled;

	}

	/**
	 * The method to set the value to enabled
	 * @param enabled A Boolean representing the enabled
	 */
	public setEnabled(enabled: boolean): void	{
		this.enabled = enabled;
		this.keyModified.set("enabled", 1);

	}

	/**
	 * The method to get the enabledForModules
	 * @returns An Array representing the enabledForModules
	 */
	public getEnabledForModules(): Array<Modules>	{
		return this.enabledForModules;

	}

	/**
	 * The method to set the value to enabledForModules
	 * @param enabledForModules An Array representing the enabledForModules
	 */
	public setEnabledForModules(enabledForModules: Array<Modules>): void	{
		this.enabledForModules = enabledForModules;
		this.keyModified.set("enabled_for_modules", 1);

	}

	/**
	 * The method to get the restrictToZohoApps
	 * @returns A Boolean representing the restrictToZohoApps
	 */
	public getRestrictToZohoApps(): boolean	{
		return this.restrictToZohoApps;

	}

	/**
	 * The method to set the value to restrictToZohoApps
	 * @param restrictToZohoApps A Boolean representing the restrictToZohoApps
	 */
	public setRestrictToZohoApps(restrictToZohoApps: boolean): void	{
		this.restrictToZohoApps = restrictToZohoApps;
		this.keyModified.set("restrict_to_zoho_apps", 1);

	}

	/**
	 * The method to get the restrictDataAccessThroughapi
	 * @returns A Boolean representing the restrictDataAccessThroughAPI
	 */
	public getRestrictDataAccessThroughAPI(): boolean	{
		return this.restrictDataAccessThroughAPI;

	}

	/**
	 * The method to set the value to restrictDataAccessThroughapi
	 * @param restrictDataAccessThroughAPI A Boolean representing the restrictDataAccessThroughAPI
	 */
	public setRestrictDataAccessThroughAPI(restrictDataAccessThroughAPI: boolean): void	{
		this.restrictDataAccessThroughAPI = restrictDataAccessThroughAPI;
		this.keyModified.set("restrict_data_access_through_api", 1);

	}

	/**
	 * The method to get the restrictDataInExport
	 * @returns A Boolean representing the restrictDataInExport
	 */
	public getRestrictDataInExport(): boolean	{
		return this.restrictDataInExport;

	}

	/**
	 * The method to set the value to restrictDataInExport
	 * @param restrictDataInExport A Boolean representing the restrictDataInExport
	 */
	public setRestrictDataInExport(restrictDataInExport: boolean): void	{
		this.restrictDataInExport = restrictDataInExport;
		this.keyModified.set("restrict_data_in_export", 1);

	}

	/**
	 * The method to get the restrictToThirdPartyApps
	 * @returns An Array representing the restrictToThirdPartyApps
	 */
	public getRestrictToThirdPartyApps(): Array<string>	{
		return this.restrictToThirdPartyApps;

	}

	/**
	 * The method to set the value to restrictToThirdPartyApps
	 * @param restrictToThirdPartyApps An Array representing the restrictToThirdPartyApps
	 */
	public setRestrictToThirdPartyApps(restrictToThirdPartyApps: Array<string>): void	{
		this.restrictToThirdPartyApps = restrictToThirdPartyApps;
		this.keyModified.set("restrict_to_third_party_apps", 1);

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
