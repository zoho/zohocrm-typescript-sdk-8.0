import {Choice} from "../../../../../../utils/util/choice";
import {Model} from "../../../../../../utils/util/model";

class ScrapyFeedback implements Model{

	private enrichId: Choice<string>;
	private type: Choice<string>;
	private feedback: Choice<string>;
	private comment: string;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the enrichId
	 * @returns An instance of Choice<string>
	 */
	public getEnrichId(): Choice<string>	{
		return this.enrichId;

	}

	/**
	 * The method to set the value to enrichId
	 * @param enrichId An instance of Choice<string>
	 */
	public setEnrichId(enrichId: Choice<string>): void	{
		this.enrichId = enrichId;
		this.keyModified.set("enrich_id", 1);

	}

	/**
	 * The method to get the type
	 * @returns An instance of Choice<string>
	 */
	public getType(): Choice<string>	{
		return this.type;

	}

	/**
	 * The method to set the value to type
	 * @param type An instance of Choice<string>
	 */
	public setType(type: Choice<string>): void	{
		this.type = type;
		this.keyModified.set("type", 1);

	}

	/**
	 * The method to get the feedback
	 * @returns An instance of Choice<string>
	 */
	public getFeedback(): Choice<string>	{
		return this.feedback;

	}

	/**
	 * The method to set the value to feedback
	 * @param feedback An instance of Choice<string>
	 */
	public setFeedback(feedback: Choice<string>): void	{
		this.feedback = feedback;
		this.keyModified.set("feedback", 1);

	}

	/**
	 * The method to get the comment
	 * @returns A String representing the comment
	 */
	public getComment(): string	{
		return this.comment;

	}

	/**
	 * The method to set the value to comment
	 * @param comment A String representing the comment
	 */
	public setComment(comment: string): void	{
		this.comment = comment;
		this.keyModified.set("comment", 1);

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
	ScrapyFeedback as MasterModel,
	ScrapyFeedback as ScrapyFeedback
}
