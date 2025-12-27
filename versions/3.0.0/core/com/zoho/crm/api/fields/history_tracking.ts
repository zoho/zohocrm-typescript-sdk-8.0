import {HistoryTrackingModule} from "./history_tracking_module";
import {MinifiedField} from "./minified_field";
import {MinifiedModule} from "../modules/minified_module";
import {Choice} from "../../../../../../utils/util/choice";
import {Model} from "../../../../../../utils/util/model";

class HistoryTracking implements Model{

	private relatedListName: string;
	private durationConfiguration: Choice<string>;
	private followedFields: Array<MinifiedField>;
	private module: HistoryTrackingModule;
	private durationConfiguredField: MinifiedModule;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the relatedListName
	 * @returns A String representing the relatedListName
	 */
	public getRelatedListName(): string	{
		return this.relatedListName;

	}

	/**
	 * The method to set the value to relatedListName
	 * @param relatedListName A String representing the relatedListName
	 */
	public setRelatedListName(relatedListName: string): void	{
		this.relatedListName = relatedListName;
		this.keyModified.set("related_list_name", 1);

	}

	/**
	 * The method to get the durationConfiguration
	 * @returns An instance of Choice<string>
	 */
	public getDurationConfiguration(): Choice<string>	{
		return this.durationConfiguration;

	}

	/**
	 * The method to set the value to durationConfiguration
	 * @param durationConfiguration An instance of Choice<string>
	 */
	public setDurationConfiguration(durationConfiguration: Choice<string>): void	{
		this.durationConfiguration = durationConfiguration;
		this.keyModified.set("duration_configuration", 1);

	}

	/**
	 * The method to get the followedFields
	 * @returns An Array representing the followedFields
	 */
	public getFollowedFields(): Array<MinifiedField>	{
		return this.followedFields;

	}

	/**
	 * The method to set the value to followedFields
	 * @param followedFields An Array representing the followedFields
	 */
	public setFollowedFields(followedFields: Array<MinifiedField>): void	{
		this.followedFields = followedFields;
		this.keyModified.set("followed_fields", 1);

	}

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
