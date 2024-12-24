import {HistoryTrackingModule} from "./history_tracking_module";
import {MinifiedModule} from "../modules/minified_module";
import {Model} from "../../../../../../utils/util/model";

class HistoryTracking implements Model{

	private module: HistoryTrackingModule;
	private durationConfiguredField: MinifiedModule;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the module
	 * @returns An instance of HistoryTrackingModule
	 */
	public getModule(): HistoryTrackingModule	{
		return this.module;

	}

	/**
	 * The method to set the value to module
	 * @param module An instance of HistoryTrackingModule
	 */
	public setModule(module: HistoryTrackingModule): void	{
		this.module = module;
		this.keyModified.set("module", 1);

	}

	/**
	 * The method to get the durationConfiguredField
	 * @returns An instance of MinifiedModule
	 */
	public getDurationConfiguredField(): MinifiedModule	{
		return this.durationConfiguredField;

	}

	/**
	 * The method to set the value to durationConfiguredField
	 * @param durationConfiguredField An instance of MinifiedModule
	 */
	public setDurationConfiguredField(durationConfiguredField: MinifiedModule): void	{
		this.durationConfiguredField = durationConfiguredField;
		this.keyModified.set("duration_configured_field", 1);

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
	HistoryTracking as MasterModel,
	HistoryTracking as HistoryTracking
}
