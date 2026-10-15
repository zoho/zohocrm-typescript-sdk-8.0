import {ActionHandler} from "./action_handler";
import {ActionResponse} from "./action_response";
import {Model} from "../../../../../../utils/util/model";

class ActionWrapper implements Model, ActionHandler{

	private servicePreferences: ActionResponse;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the servicePreferences
	 * @returns An instance of ActionResponse
	 */
	public getServicePreferences(): ActionResponse	{
		return this.servicePreferences;

	}

	/**
	 * The method to set the value to servicePreferences
	 * @param servicePreferences An instance of ActionResponse
	 */
	public setServicePreferences(servicePreferences: ActionResponse): void	{
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
	ActionWrapper as MasterModel,
	ActionWrapper as ActionWrapper
}
