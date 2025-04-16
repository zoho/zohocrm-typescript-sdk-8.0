import {Templates} from "./templates";
import {Model} from "../../../../../../utils/util/model";

class Wrapper implements Model{

	private templates: Array<Templates>;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the templates
	 * @returns An Array representing the templates
	 */
	public getTemplates(): Array<Templates>	{
		return this.templates;

	}

	/**
	 * The method to set the value to templates
	 * @param templates An Array representing the templates
	 */
	public setTemplates(templates: Array<Templates>): void	{
		this.templates = templates;
		this.keyModified.set("templates", 1);

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
	Wrapper as MasterModel,
	Wrapper as Wrapper
}
