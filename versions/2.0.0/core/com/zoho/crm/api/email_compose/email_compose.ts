import {DefaultFromAddress} from "./default_from_address";
import {DefaultReplytoAddress} from "./default_replyto_address";
import {Font} from "./font";
import {Choice} from "../../../../../../utils/util/choice";
import {Model} from "../../../../../../utils/util/model";

class EmailCompose implements Model{

	private defaultFromAddress: DefaultFromAddress;
	private defaultReplytoAddress: DefaultReplytoAddress;
	private font: Font;
	private type: Choice<string>;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the defaultFromAddress
	 * @returns An instance of DefaultFromAddress
	 */
	public getDefaultFromAddress(): DefaultFromAddress	{
		return this.defaultFromAddress;

	}

	/**
	 * The method to set the value to defaultFromAddress
	 * @param defaultFromAddress An instance of DefaultFromAddress
	 */
	public setDefaultFromAddress(defaultFromAddress: DefaultFromAddress): void	{
		this.defaultFromAddress = defaultFromAddress;
		this.keyModified.set("default_from_address", 1);

	}

	/**
	 * The method to get the defaultReplytoAddress
	 * @returns An instance of DefaultReplytoAddress
	 */
	public getDefaultReplytoAddress(): DefaultReplytoAddress	{
		return this.defaultReplytoAddress;

	}

	/**
	 * The method to set the value to defaultReplytoAddress
	 * @param defaultReplytoAddress An instance of DefaultReplytoAddress
	 */
	public setDefaultReplytoAddress(defaultReplytoAddress: DefaultReplytoAddress): void	{
		this.defaultReplytoAddress = defaultReplytoAddress;
		this.keyModified.set("default_replyto_address", 1);

	}

	/**
	 * The method to get the font
	 * @returns An instance of Font
	 */
	public getFont(): Font	{
		return this.font;

	}

	/**
	 * The method to set the value to font
	 * @param font An instance of Font
	 */
	public setFont(font: Font): void	{
		this.font = font;
		this.keyModified.set("font", 1);

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
	EmailCompose as MasterModel,
	EmailCompose as EmailCompose
}
