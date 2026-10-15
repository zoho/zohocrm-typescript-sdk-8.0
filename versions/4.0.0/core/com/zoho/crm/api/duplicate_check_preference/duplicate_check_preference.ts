import {TypeConfiguration} from "./type_configuration";
import {Choice} from "../../../../../../utils/util/choice";
import {Model} from "../../../../../../utils/util/model";

class DuplicateCheckPreference implements Model{

	private type: Choice<string>;
	private typeConfigurations: Array<TypeConfiguration>;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the type
	 * @returns An instance of Choice<string>
	 */
	public getType(): Choice<string>	{
		return this.type;

	}

	/**
	 * The method to set the value to type
	 * @param type An instance of Choice<string>
	 */
	public setType(type: Choice<string>): void	{
		this.type = type;
		this.keyModified.set("type", 1);

	}

	/**
	 * The method to get the typeConfigurations
	 * @returns An Array representing the typeConfigurations
	 */
	public getTypeConfigurations(): Array<TypeConfiguration>	{
		return this.typeConfigurations;

	}

	/**
	 * The method to set the value to typeConfigurations
	 * @param typeConfigurations An Array representing the typeConfigurations
	 */
	public setTypeConfigurations(typeConfigurations: Array<TypeConfiguration>): void	{
		this.typeConfigurations = typeConfigurations;
		this.keyModified.set("type_configurations", 1);

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
	DuplicateCheckPreference as MasterModel,
	DuplicateCheckPreference as DuplicateCheckPreference
}
