import {Address} from "./address";
import {Choice} from "../../../../../../utils/util/choice";
import {Model} from "../../../../../../utils/util/model";

class Signers implements Model{

	private recipientName: string;
	private actionType: Choice<string>;
	private recipient: Address;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the recipientName
	 * @returns A String representing the recipientName
	 */
	public getRecipientName(): string	{
		return this.recipientName;

	}

	/**
	 * The method to set the value to recipientName
	 * @param recipientName A String representing the recipientName
	 */
	public setRecipientName(recipientName: string): void	{
		this.recipientName = recipientName;
		this.keyModified.set("recipient_name", 1);

	}

	/**
	 * The method to get the actionType
	 * @returns An instance of Choice<string>
	 */
	public getActionType(): Choice<string>	{
		return this.actionType;

	}

	/**
	 * The method to set the value to actionType
	 * @param actionType An instance of Choice<string>
	 */
	public setActionType(actionType: Choice<string>): void	{
		this.actionType = actionType;
		this.keyModified.set("action_type", 1);

	}

	/**
	 * The method to get the recipient
	 * @returns An instance of Address
	 */
	public getRecipient(): Address	{
		return this.recipient;

	}

	/**
	 * The method to set the value to recipient
	 * @param recipient An instance of Address
	 */
	public setRecipient(recipient: Address): void	{
		this.recipient = recipient;
		this.keyModified.set("recipient", 1);

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
	Signers as MasterModel,
	Signers as Signers
}
