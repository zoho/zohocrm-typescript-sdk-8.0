import {DuplicateCheckPreference} from "./duplicate_check_preference";
import {ResponseHandler} from "./response_handler";
import {Model} from "../../../../../../utils/util/model";

class ResponseWrapper implements Model, ResponseHandler{

	private duplicateCheckPreference: DuplicateCheckPreference;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the duplicateCheckPreference
	 * @returns An instance of DuplicateCheckPreference
	 */
	public getDuplicateCheckPreference(): DuplicateCheckPreference	{
		return this.duplicateCheckPreference;

	}

	/**
	 * The method to set the value to duplicateCheckPreference
	 * @param duplicateCheckPreference An instance of DuplicateCheckPreference
	 */
	public setDuplicateCheckPreference(duplicateCheckPreference: DuplicateCheckPreference): void	{
		this.duplicateCheckPreference = duplicateCheckPreference;
		this.keyModified.set("duplicate_check_preference", 1);

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
