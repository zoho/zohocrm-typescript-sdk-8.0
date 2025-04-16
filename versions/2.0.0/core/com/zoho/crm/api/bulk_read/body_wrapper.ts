import {CallBack} from "./call_back";
import {Query} from "./query";
import {Choice} from "../../../../../../utils/util/choice";
import {Model} from "../../../../../../utils/util/model";

class BodyWrapper implements Model{

	private callback: CallBack;
	private query: Query;
	private fileType: Choice<string>;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the callback
	 * @returns An instance of CallBack
	 */
	public getCallback(): CallBack	{
		return this.callback;

	}

	/**
	 * The method to set the value to callback
	 * @param callback An instance of CallBack
	 */
	public setCallback(callback: CallBack): void	{
		this.callback = callback;
		this.keyModified.set("callback", 1);

	}

	/**
	 * The method to get the query
	 * @returns An instance of Query
	 */
	public getQuery(): Query	{
		return this.query;

	}

	/**
	 * The method to set the value to query
	 * @param query An instance of Query
	 */
	public setQuery(query: Query): void	{
		this.query = query;
		this.keyModified.set("query", 1);

	}

	/**
	 * The method to get the fileType
	 * @returns An instance of Choice<string>
	 */
	public getFileType(): Choice<string>	{
		return this.fileType;

	}

	/**
	 * The method to set the value to fileType
	 * @param fileType An instance of Choice<string>
	 */
	public setFileType(fileType: Choice<string>): void	{
		this.fileType = fileType;
		this.keyModified.set("file_type", 1);

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
	BodyWrapper as MasterModel,
	BodyWrapper as BodyWrapper
}
