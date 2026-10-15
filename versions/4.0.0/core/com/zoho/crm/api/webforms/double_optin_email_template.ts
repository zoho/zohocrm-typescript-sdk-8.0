import {FromAddress} from "./from_address";
import {Model} from "../../../../../../utils/util/model";

class DoubleOptinEmailTemplate implements Model{

	private fromAddress: FromAddress;
	private content: string;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the fromAddress
	 * @returns An instance of FromAddress
	 */
	public getFromAddress(): FromAddress	{
		return this.fromAddress;

	}

	/**
	 * The method to set the value to fromAddress
	 * @param fromAddress An instance of FromAddress
	 */
	public setFromAddress(fromAddress: FromAddress): void	{
		this.fromAddress = fromAddress;
		this.keyModified.set("from_address", 1);

	}

	/**
	 * The method to get the content
	 * @returns A String representing the content
	 */
	public getContent(): string	{
		return this.content;

	}

	/**
	 * The method to set the value to content
	 * @param content A String representing the content
	 */
	public setContent(content: string): void	{
		this.content = content;
		this.keyModified.set("content", 1);

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
	DoubleOptinEmailTemplate as MasterModel,
	DoubleOptinEmailTemplate as DoubleOptinEmailTemplate
}
