import {AllowedFieldMap} from "./allowed_field_map";
import {Model} from "../../../../../../utils/util/model";

class ResponseWrapper implements Model{

	private allowedFieldMappings: AllowedFieldMap;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the allowedFieldMappings
	 * @returns An instance of AllowedFieldMap
	 */
	public getAllowedFieldMappings(): AllowedFieldMap	{
		return this.allowedFieldMappings;

	}

	/**
	 * The method to set the value to allowedFieldMappings
	 * @param allowedFieldMappings An instance of AllowedFieldMap
	 */
	public setAllowedFieldMappings(allowedFieldMappings: AllowedFieldMap): void	{
		this.allowedFieldMappings = allowedFieldMappings;
		this.keyModified.set("allowed_field_mappings", 1);

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
	ResponseWrapper as MasterModel,
	ResponseWrapper as ResponseWrapper
}
