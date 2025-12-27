import {ResponseHandler} from "./response_handler";
import {SourcesCount} from "./sources_count";
import {Model} from "../../../../../../utils/util/model";

class SourcesCountWrapper implements Model, ResponseHandler{

	private sourcesCount: Array<SourcesCount>;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the sourcesCount
	 * @returns An Array representing the sourcesCount
	 */
	public getSourcesCount(): Array<SourcesCount>	{
		return this.sourcesCount;

	}

	/**
	 * The method to set the value to sourcesCount
	 * @param sourcesCount An Array representing the sourcesCount
	 */
	public setSourcesCount(sourcesCount: Array<SourcesCount>): void	{
		this.sourcesCount = sourcesCount;
		this.keyModified.set("sources_count", 1);

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
	SourcesCountWrapper as MasterModel,
	SourcesCountWrapper as SourcesCountWrapper
}
