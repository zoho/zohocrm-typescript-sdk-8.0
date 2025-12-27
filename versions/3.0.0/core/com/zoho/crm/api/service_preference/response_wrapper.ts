import {ResponseHandler} from "./response_handler";
import {ServicePreference} from "./service_preference";
import {Model} from "../../../../../../utils/util/model";

class ResponseWrapper implements Model, ResponseHandler{

	private servicePreferences: ServicePreference;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the servicePreferences
	 * @returns An instance of ServicePreference
	 */
	public getServicePreferences(): ServicePreference	{
		return this.servicePreferences;

	}

	/**
	 * The method to set the value to servicePreferences
	 * @param servicePreferences An instance of ServicePreference
	 */
	public setServicePreferences(servicePreferences: ServicePreference): void	{
		this.servicePreferences = servicePreferences;
		this.keyModified.set("service_preferences", 1);

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
