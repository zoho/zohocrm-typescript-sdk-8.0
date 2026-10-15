import {Config} from "./config";
import {Preference} from "./preference";
import {Model} from "../../../../../../utils/util/model";

class PrivacyPreference implements Model{

	private preference: Preference;
	private config: Config;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the preference
	 * @returns An instance of Preference
	 */
	public getPreference(): Preference	{
		return this.preference;

	}

	/**
	 * The method to set the value to preference
	 * @param preference An instance of Preference
	 */
	public setPreference(preference: Preference): void	{
		this.preference = preference;
		this.keyModified.set("preference", 1);

	}

	/**
	 * The method to get the config
	 * @returns An instance of Config
	 */
	public getConfig(): Config	{
		return this.config;

	}

	/**
	 * The method to set the value to config
	 * @param config An instance of Config
	 */
	public setConfig(config: Config): void	{
		this.config = config;
		this.keyModified.set("config", 1);

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
	PrivacyPreference as MasterModel,
	PrivacyPreference as PrivacyPreference
}
