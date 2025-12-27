import {Model} from "../../../../../../utils/util/model";

class Comment implements Model{

	private commentedBy: string;
	private commentedTime: Date;
	private commentContent: string;
	private id: bigint;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the commentedBy
	 * @returns A String representing the commentedBy
	 */
	public getCommentedBy(): string	{
		return this.commentedBy;

	}

	/**
	 * The method to set the value to commentedBy
	 * @param commentedBy A String representing the commentedBy
	 */
	public setCommentedBy(commentedBy: string): void	{
		this.commentedBy = commentedBy;
		this.keyModified.set("commented_by", 1);

	}

	/**
	 * The method to get the commentedTime
	 * @returns An instance of Date
	 */
	public getCommentedTime(): Date	{
		return this.commentedTime;

	}

	/**
	 * The method to set the value to commentedTime
	 * @param commentedTime An instance of Date
	 */
	public setCommentedTime(commentedTime: Date): void	{
		this.commentedTime = commentedTime;
		this.keyModified.set("commented_time", 1);

	}

	/**
	 * The method to get the commentContent
	 * @returns A String representing the commentContent
	 */
	public getCommentContent(): string	{
		return this.commentContent;

	}

	/**
	 * The method to set the value to commentContent
	 * @param commentContent A String representing the commentContent
	 */
	public setCommentContent(commentContent: string): void	{
		this.commentContent = commentContent;
		this.keyModified.set("comment_content", 1);

	}

	/**
	 * The method to get the id
	 * @returns A BigInt representing the id
	 */
	public getId(): bigint	{
		return this.id;

	}

	/**
	 * The method to set the value to id
	 * @param id A BigInt representing the id
	 */
	public setId(id: bigint): void	{
		this.id = id;
		this.keyModified.set("id", 1);

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
	Comment as MasterModel,
	Comment as Comment
}
