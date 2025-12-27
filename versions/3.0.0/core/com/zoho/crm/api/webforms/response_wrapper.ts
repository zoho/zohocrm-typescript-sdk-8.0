import {ResponseHandler} from "./response_handler";
import {WebForm} from "./web_form";
import {Model} from "../../../../../../utils/util/model";

class ResponseWrapper implements Model, ResponseHandler{

	private webforms: Array<WebForm>;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the webforms
	 * @returns An Array representing the webforms
	 */
	public getWebforms(): Array<WebForm>	{
		return this.webforms;

	}

	/**
	 * The method to set the value to webforms
	 * @param webforms An Array representing the webforms
	 */
	public setWebforms(webforms: Array<WebForm>): void	{
		this.webforms = webforms;
		this.keyModified.set("webforms", 1);

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
