import {Template} from "./template";
import {Model} from "../../../../../../utils/util/model";

class Details implements Model{

	private name: string;
	private template: Template;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the name
	 * @returns A String representing the name
	 */
	public getName(): string	{
		return this.name;

	}

	/**
	 * The method to set the value to name
	 * @param name A String representing the name
	 */
	public setName(name: string): void	{
		this.name = name;
		this.keyModified.set("name", 1);

	}

	/**
	 * The method to get the template
	 * @returns An instance of Template
	 */
	public getTemplate(): Template	{
		return this.template;

	}

	/**
	 * The method to set the value to template
	 * @param template An instance of Template
	 */
	public setTemplate(template: Template): void	{
		this.template = template;
		this.keyModified.set("template", 1);

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
	Details as MasterModel,
	Details as Details
}
