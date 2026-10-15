import {Apps} from "./apps";
import {Model} from "../../../../../../utils/util/model";

class Wrapper implements Model{

	private privacyConfigurableApps: Array<Apps>;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the privacyConfigurableApps
	 * @returns An Array representing the privacyConfigurableApps
	 */
	public getPrivacyConfigurableApps(): Array<Apps>	{
		return this.privacyConfigurableApps;

	}

	/**
	 * The method to set the value to privacyConfigurableApps
	 * @param privacyConfigurableApps An Array representing the privacyConfigurableApps
	 */
	public setPrivacyConfigurableApps(privacyConfigurableApps: Array<Apps>): void	{
		this.privacyConfigurableApps = privacyConfigurableApps;
		this.keyModified.set("privacy_configurable_apps", 1);

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
	Wrapper as MasterModel,
	Wrapper as Wrapper
}
