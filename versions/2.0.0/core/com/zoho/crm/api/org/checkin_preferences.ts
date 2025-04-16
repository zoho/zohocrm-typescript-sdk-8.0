import {Model} from "../../../../../../utils/util/model";

class CheckinPreferences implements Model{

	private restrictedEventTypes: string;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the restrictedEventTypes
	 * @returns A String representing the restrictedEventTypes
	 */
	public getRestrictedEventTypes(): string	{
		return this.restrictedEventTypes;

	}

	/**
	 * The method to set the value to restrictedEventTypes
	 * @param restrictedEventTypes A String representing the restrictedEventTypes
	 */
	public setRestrictedEventTypes(restrictedEventTypes: string): void	{
		this.restrictedEventTypes = restrictedEventTypes;
		this.keyModified.set("restricted_event_types", 1);

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
	CheckinPreferences as MasterModel,
	CheckinPreferences as CheckinPreferences
}
