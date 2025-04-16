import {ResponseHandler} from "./response_handler";
import {Urls} from "./urls";
import {Model} from "../../../../../../utils/util/model";

class UrlsWrapper implements Model, ResponseHandler{

	private urls: Urls;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the urls
	 * @returns An instance of Urls
	 */
	public getUrls(): Urls	{
		return this.urls;

	}

	/**
	 * The method to set the value to urls
	 * @param urls An instance of Urls
	 */
	public setUrls(urls: Urls): void	{
		this.urls = urls;
		this.keyModified.set("urls", 1);

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
	UrlsWrapper as MasterModel,
	UrlsWrapper as UrlsWrapper
}
