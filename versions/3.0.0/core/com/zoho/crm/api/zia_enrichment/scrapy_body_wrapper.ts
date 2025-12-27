import {ScrapyFeedback} from "./scrapy_feedback";
import {Model} from "../../../../../../utils/util/model";

class ScrapyBodyWrapper implements Model{

	private scrapyFeedback: ScrapyFeedback;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the scrapyFeedback
	 * @returns An instance of ScrapyFeedback
	 */
	public getScrapyFeedback(): ScrapyFeedback	{
		return this.scrapyFeedback;

	}

	/**
	 * The method to set the value to scrapyFeedback
	 * @param scrapyFeedback An instance of ScrapyFeedback
	 */
	public setScrapyFeedback(scrapyFeedback: ScrapyFeedback): void	{
		this.scrapyFeedback = scrapyFeedback;
		this.keyModified.set("scrapy_feedback", 1);

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
	ScrapyBodyWrapper as MasterModel,
	ScrapyBodyWrapper as ScrapyBodyWrapper
}
