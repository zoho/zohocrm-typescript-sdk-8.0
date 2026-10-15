import {Layouts} from "./layouts";
import {ResponseHandler} from "./response_handler";
import {Model} from "../../../../../../utils/util/model";

class ResponseWrapper implements Model, ResponseHandler{

	private layouts: Array<Layouts>;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the layouts
	 * @returns An Array representing the layouts
	 */
	public getLayouts(): Array<Layouts>	{
		return this.layouts;

	}

	/**
	 * The method to set the value to layouts
	 * @param layouts An Array representing the layouts
	 */
	public setLayouts(layouts: Array<Layouts>): void	{
		this.layouts = layouts;
		this.keyModified.set("layouts", 1);

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
