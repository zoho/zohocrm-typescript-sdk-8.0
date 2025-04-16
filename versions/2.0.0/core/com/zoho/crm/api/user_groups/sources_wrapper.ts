import {Info} from "./info";
import {ResponseHandler} from "./response_handler";
import {Sources} from "./sources";
import {Model} from "../../../../../../utils/util/model";

class SourcesWrapper implements Model, ResponseHandler{

	private sources: Array<Sources>;
	private info: Info;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the sources
	 * @returns An Array representing the sources
	 */
	public getSources(): Array<Sources>	{
		return this.sources;

	}

	/**
	 * The method to set the value to sources
	 * @param sources An Array representing the sources
	 */
	public setSources(sources: Array<Sources>): void	{
		this.sources = sources;
		this.keyModified.set("sources", 1);

	}

	/**
	 * The method to get the info
	 * @returns An instance of Info
	 */
	public getInfo(): Info	{
		return this.info;

	}

	/**
	 * The method to set the value to info
	 * @param info An instance of Info
	 */
	public setInfo(info: Info): void	{
		this.info = info;
		this.keyModified.set("info", 1);

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
	SourcesWrapper as MasterModel,
	SourcesWrapper as SourcesWrapper
}
