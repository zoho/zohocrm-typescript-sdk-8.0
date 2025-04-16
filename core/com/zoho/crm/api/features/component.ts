import {Detail} from "./detail";
import {Model} from "../../../../../../utils/util/model";

class Component implements Model{

	private apiName: string;
	private moduleSupported: boolean;
	private details: Detail;
	private featureLabel: string;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the apiName
	 * @returns A String representing the apiName
	 */
	public getAPIName(): string	{
		return this.apiName;

	}

	/**
	 * The method to set the value to apiName
	 * @param apiName A String representing the apiName
	 */
	public setAPIName(apiName: string): void	{
		this.apiName = apiName;
		this.keyModified.set("api_name", 1);

	}

	/**
	 * The method to get the moduleSupported
	 * @returns A Boolean representing the moduleSupported
	 */
	public getModuleSupported(): boolean	{
		return this.moduleSupported;

	}

	/**
	 * The method to set the value to moduleSupported
	 * @param moduleSupported A Boolean representing the moduleSupported
	 */
	public setModuleSupported(moduleSupported: boolean): void	{
		this.moduleSupported = moduleSupported;
		this.keyModified.set("module_supported", 1);

	}

	/**
	 * The method to get the details
	 * @returns An instance of Detail
	 */
	public getDetails(): Detail	{
		return this.details;

	}

	/**
	 * The method to set the value to details
	 * @param details An instance of Detail
	 */
	public setDetails(details: Detail): void	{
		this.details = details;
		this.keyModified.set("details", 1);

	}

	/**
	 * The method to get the featureLabel
	 * @returns A String representing the featureLabel
	 */
	public getFeatureLabel(): string	{
		return this.featureLabel;

	}

	/**
	 * The method to set the value to featureLabel
	 * @param featureLabel A String representing the featureLabel
	 */
	public setFeatureLabel(featureLabel: string): void	{
		this.featureLabel = featureLabel;
		this.keyModified.set("feature_label", 1);

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
	Component as MasterModel,
	Component as Component
}
