import {FromAddress} from "./from_address";
import {Choice} from "../../../../../../utils/util/choice";
import {Model} from "../../../../../../utils/util/model";

class EmailSignatures implements Model{

	private name: string;
	private from: Array<FromAddress>;
	private editorMode: Choice<string>;
	private id: bigint;
	private content: string;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the name
	 * @returns A String representing the name
	 */
	public getName(): string	{
		return this.name;

	}

	/**
	 * The method to set the value to name
	 * @param name A String representing the name
	 */
	public setName(name: string): void	{
		this.name = name;
		this.keyModified.set("name", 1);

	}

	/**
	 * The method to get the from
	 * @returns An Array representing the from
	 */
	public getFrom(): Array<FromAddress>	{
		return this.from;

	}

	/**
	 * The method to set the value to from
	 * @param from An Array representing the from
	 */
	public setFrom(from: Array<FromAddress>): void	{
		this.from = from;
		this.keyModified.set("from", 1);

	}

	/**
	 * The method to get the editorMode
	 * @returns An instance of Choice<string>
	 */
	public getEditorMode(): Choice<string>	{
		return this.editorMode;

	}

	/**
	 * The method to set the value to editorMode
	 * @param editorMode An instance of Choice<string>
	 */
	public setEditorMode(editorMode: Choice<string>): void	{
		this.editorMode = editorMode;
		this.keyModified.set("editor_mode", 1);

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
	EmailSignatures as MasterModel,
	EmailSignatures as EmailSignatures
}
