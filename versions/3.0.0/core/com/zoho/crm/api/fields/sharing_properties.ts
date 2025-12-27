import {Choice} from "../../../../../../utils/util/choice";
import {Model} from "../../../../../../utils/util/model";

class SharingProperties implements Model{

	private schedulerStatus: string;
	private sharePreferenceEnabled: boolean;
	private sharePermission: Choice<string>;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the schedulerStatus
	 * @returns A String representing the schedulerStatus
	 */
	public getSchedulerStatus(): string	{
		return this.schedulerStatus;

	}

	/**
	 * The method to set the value to schedulerStatus
	 * @param schedulerStatus A String representing the schedulerStatus
	 */
	public setSchedulerStatus(schedulerStatus: string): void	{
		this.schedulerStatus = schedulerStatus;
		this.keyModified.set("scheduler_status", 1);

	}

	/**
	 * The method to get the sharePreferenceEnabled
	 * @returns A Boolean representing the sharePreferenceEnabled
	 */
	public getSharePreferenceEnabled(): boolean	{
		return this.sharePreferenceEnabled;

	}

	/**
	 * The method to set the value to sharePreferenceEnabled
	 * @param sharePreferenceEnabled A Boolean representing the sharePreferenceEnabled
	 */
	public setSharePreferenceEnabled(sharePreferenceEnabled: boolean): void	{
		this.sharePreferenceEnabled = sharePreferenceEnabled;
		this.keyModified.set("share_preference_enabled", 1);

	}

	/**
	 * The method to get the sharePermission
	 * @returns An instance of Choice<string>
	 */
	public getSharePermission(): Choice<string>	{
		return this.sharePermission;

	}

	/**
	 * The method to set the value to sharePermission
	 * @param sharePermission An instance of Choice<string>
	 */
	public setSharePermission(sharePermission: Choice<string>): void	{
		this.sharePermission = sharePermission;
		this.keyModified.set("share_permission", 1);

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
	SharingProperties as MasterModel,
	SharingProperties as SharingProperties
}
