import {CallBack} from "./call_back";
import {Resource} from "./resource";
import {Choice} from "../../../../../../utils/util/choice";
import {Model} from "../../../../../../utils/util/model";

class RequestWrapper implements Model{

	private characterEncoding: string;
	private operation: Choice<string>;
	private callback: CallBack;
	private resource: Array<Resource>;
	private ignoreEmpty: boolean;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the characterEncoding
	 * @returns A String representing the characterEncoding
	 */
	public getCharacterEncoding(): string	{
		return this.characterEncoding;

	}

	/**
	 * The method to set the value to characterEncoding
	 * @param characterEncoding A String representing the characterEncoding
	 */
	public setCharacterEncoding(characterEncoding: string): void	{
		this.characterEncoding = characterEncoding;
		this.keyModified.set("character_encoding", 1);

	}

	/**
	 * The method to get the operation
	 * @returns An instance of Choice<string>
	 */
	public getOperation(): Choice<string>	{
		return this.operation;

	}

	/**
	 * The method to set the value to operation
	 * @param operation An instance of Choice<string>
	 */
	public setOperation(operation: Choice<string>): void	{
		this.operation = operation;
		this.keyModified.set("operation", 1);

	}

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
	 * The method to get the resource
	 * @returns An Array representing the resource
	 */
	public getResource(): Array<Resource>	{
		return this.resource;

	}

	/**
	 * The method to set the value to resource
	 * @param resource An Array representing the resource
	 */
	public setResource(resource: Array<Resource>): void	{
		this.resource = resource;
		this.keyModified.set("resource", 1);

	}

	/**
	 * The method to get the ignoreEmpty
	 * @returns A Boolean representing the ignoreEmpty
	 */
	public getIgnoreEmpty(): boolean	{
		return this.ignoreEmpty;

	}

	/**
	 * The method to set the value to ignoreEmpty
	 * @param ignoreEmpty A Boolean representing the ignoreEmpty
	 */
	public setIgnoreEmpty(ignoreEmpty: boolean): void	{
		this.ignoreEmpty = ignoreEmpty;
		this.keyModified.set("ignore_empty", 1);

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
	RequestWrapper as MasterModel,
	RequestWrapper as RequestWrapper
}
