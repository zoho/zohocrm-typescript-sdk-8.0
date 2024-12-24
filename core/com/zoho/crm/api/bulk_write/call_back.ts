import {Choice} from "../../../../../../utils/util/choice";
import {Model} from "../../../../../../utils/util/model";

class CallBack implements Model{

	private url: string;
	private method: Choice<string>;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the url
	 * @returns A String representing the url
	 */
	public getUrl(): string	{
		return this.url;

	}

	/**
	 * The method to set the value to url
	 * @param url A String representing the url
	 */
	public setUrl(url: string): void	{
		this.url = url;
		this.keyModified.set("url", 1);

	}

	/**
	 * The method to get the method
	 * @returns An instance of Choice<string>
	 */
	public getMethod(): Choice<string>	{
		return this.method;

	}

	/**
	 * The method to set the value to method
	 * @param method An instance of Choice<string>
	 */
	public setMethod(method: Choice<string>): void	{
		this.method = method;
		this.keyModified.set("method", 1);

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
	CallBack as MasterModel,
	CallBack as CallBack
}
