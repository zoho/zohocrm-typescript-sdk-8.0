import {Owner} from "./owner";
import {Model} from "../../../../../../utils/util/model";

class InReplyTo implements Model{

	private messageId: string;
	private owner: Owner;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the messageId
	 * @returns A String representing the messageId
	 */
	public getMessageId(): string	{
		return this.messageId;

	}

	/**
	 * The method to set the value to messageId
	 * @param messageId A String representing the messageId
	 */
	public setMessageId(messageId: string): void	{
		this.messageId = messageId;
		this.keyModified.set("message_id", 1);

	}

	/**
	 * The method to get the owner
	 * @returns An instance of Owner
	 */
	public getOwner(): Owner	{
		return this.owner;

	}

	/**
	 * The method to set the value to owner
	 * @param owner An instance of Owner
	 */
	public setOwner(owner: Owner): void	{
		this.owner = owner;
		this.keyModified.set("owner", 1);

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
	InReplyTo as MasterModel,
	InReplyTo as InReplyTo
}
