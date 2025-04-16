import {MinifiedLayout} from "./minified_layout";
import {Model} from "../../../../../../utils/util/model";

class SectionSubformField implements Model{

	private module: string;
	private id: string;
	private layout: MinifiedLayout;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the module
	 * @returns A String representing the module
	 */
	public getModule(): string	{
		return this.module;

	}

	/**
	 * The method to set the value to module
	 * @param module A String representing the module
	 */
	public setModule(module: string): void	{
		this.module = module;
		this.keyModified.set("module", 1);

	}

	/**
	 * The method to get the id
	 * @returns A String representing the id
	 */
	public getId(): string	{
		return this.id;

	}

	/**
	 * The method to set the value to id
	 * @param id A String representing the id
	 */
	public setId(id: string): void	{
		this.id = id;
		this.keyModified.set("id", 1);

	}

	/**
	 * The method to get the layout
	 * @returns An instance of MinifiedLayout
	 */
	public getLayout(): MinifiedLayout	{
		return this.layout;

	}

	/**
	 * The method to set the value to layout
	 * @param layout An instance of MinifiedLayout
	 */
	public setLayout(layout: MinifiedLayout): void	{
		this.layout = layout;
		this.keyModified.set("layout", 1);

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
	SectionSubformField as MasterModel,
	SectionSubformField as SectionSubformField
}
