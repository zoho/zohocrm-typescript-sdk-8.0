import {Extension} from "./extension";
import {FeatureAvailability} from "./feature_availability";
import {Model} from "../../../../../../utils/util/model";

class Signals implements Model{

	private displayLabel: string;
	private namespace: string;
	private chatEnabled: boolean;
	private enabled: boolean;
	private id: bigint;
	private featureAvailability: FeatureAvailability;
	private extension: Extension;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the displayLabel
	 * @returns A String representing the displayLabel
	 */
	public getDisplayLabel(): string	{
		return this.displayLabel;

	}

	/**
	 * The method to set the value to displayLabel
	 * @param displayLabel A String representing the displayLabel
	 */
	public setDisplayLabel(displayLabel: string): void	{
		this.displayLabel = displayLabel;
		this.keyModified.set("display_label", 1);

	}

	/**
	 * The method to get the namespace
	 * @returns A String representing the namespace
	 */
	public getNamespace(): string	{
		return this.namespace;

	}

	/**
	 * The method to set the value to namespace
	 * @param namespace A String representing the namespace
	 */
	public setNamespace(namespace: string): void	{
		this.namespace = namespace;
		this.keyModified.set("namespace", 1);

	}

	/**
	 * The method to get the chatEnabled
	 * @returns A Boolean representing the chatEnabled
	 */
	public getChatEnabled(): boolean	{
		return this.chatEnabled;

	}

	/**
	 * The method to set the value to chatEnabled
	 * @param chatEnabled A Boolean representing the chatEnabled
	 */
	public setChatEnabled(chatEnabled: boolean): void	{
		this.chatEnabled = chatEnabled;
		this.keyModified.set("chat_enabled", 1);

	}

	/**
	 * The method to get the enabled
	 * @returns A Boolean representing the enabled
	 */
	public getEnabled(): boolean	{
		return this.enabled;

	}

	/**
	 * The method to set the value to enabled
	 * @param enabled A Boolean representing the enabled
	 */
	public setEnabled(enabled: boolean): void	{
		this.enabled = enabled;
		this.keyModified.set("enabled", 1);

	}

	/**
	 * The method to get the id
	 * @returns A BigInt representing the id
	 */
	public getId(): bigint	{
		return this.id;

	}

	/**
	 * The method to set the value to id
	 * @param id A BigInt representing the id
	 */
	public setId(id: bigint): void	{
		this.id = id;
		this.keyModified.set("id", 1);

	}

	/**
	 * The method to get the featureAvailability
	 * @returns An instance of FeatureAvailability
	 */
	public getFeatureAvailability(): FeatureAvailability	{
		return this.featureAvailability;

	}

	/**
	 * The method to set the value to featureAvailability
	 * @param featureAvailability An instance of FeatureAvailability
	 */
	public setFeatureAvailability(featureAvailability: FeatureAvailability): void	{
		this.featureAvailability = featureAvailability;
		this.keyModified.set("feature_availability", 1);

	}

	/**
	 * The method to get the extension
	 * @returns An instance of Extension
	 */
	public getExtension(): Extension	{
		return this.extension;

	}

	/**
	 * The method to set the value to extension
	 * @param extension An instance of Extension
	 */
	public setExtension(extension: Extension): void	{
		this.extension = extension;
		this.keyModified.set("extension", 1);

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
	Signals as MasterModel,
	Signals as Signals
}
