import {ActionHandler} from "./action_handler";
import {ActionResponse} from "./action_response";
import {Model} from "../../../../../../utils/util/model";

class ActionWrapper implements Model, ActionHandler{

	private configurationOptions: Array<ActionResponse>;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the configurationOptions
	 * @returns An Array representing the configurationOptions
	 */
	public getConfigurationOptions(): Array<ActionResponse>	{
		return this.configurationOptions;

	}

	/**
	 * The method to set the value to configurationOptions
	 * @param configurationOptions An Array representing the configurationOptions
	 */
	public setConfigurationOptions(configurationOptions: Array<ActionResponse>): void	{
		this.configurationOptions = configurationOptions;
		this.keyModified.set("configuration_options", 1);

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
