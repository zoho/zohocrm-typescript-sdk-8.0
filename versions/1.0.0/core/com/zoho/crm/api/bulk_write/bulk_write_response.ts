import {CallBack} from "./call_back";
import {Resource} from "./resource";
import {ResponseWrapper} from "./response_wrapper";
import {Result} from "./result";
import {MinifiedUser} from "../users/minified_user";
import {Model} from "../../../../../../utils/util/model";

class BulkWriteResponse implements Model, ResponseWrapper{

	private status: string;
	private characterEncoding: string;
	private resource: Array<Resource>;
	private id: string;
	private result: Result;
	private createdBy: MinifiedUser;
	private operation: string;
	private createdTime: Date;
	private callback: CallBack;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the status
	 * @returns A String representing the status
	 */
	public getStatus(): string	{
		return this.status;

	}

	/**
	 * The method to set the value to status
	 * @param status A String representing the status
	 */
	public setStatus(status: string): void	{
		this.status = status;
		this.keyModified.set("status", 1);

	}

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
	 * The method to get the id
	 * @returns A String representing the id
	 */
	public getId(): string	{
		return this.id;

	}

	/**
	 * The method to set the value to id
	 * @param id A String representing the id
	 */
	public setId(id: string): void	{
		this.id = id;
		this.keyModified.set("id", 1);

	}

	/**
	 * The method to get the result
	 * @returns An instance of Result
	 */
	public getResult(): Result	{
		return this.result;

	}

	/**
	 * The method to set the value to result
	 * @param result An instance of Result
	 */
	public setResult(result: Result): void	{
		this.result = result;
		this.keyModified.set("result", 1);

	}

	/**
	 * The method to get the createdBy
	 * @returns An instance of MinifiedUser
	 */
	public getCreatedBy(): MinifiedUser	{
		return this.createdBy;

	}

	/**
	 * The method to set the value to createdBy
	 * @param createdBy An instance of MinifiedUser
	 */
	public setCreatedBy(createdBy: MinifiedUser): void	{
		this.createdBy = createdBy;
		this.keyModified.set("created_by", 1);

	}

	/**
	 * The method to get the operation
	 * @returns A String representing the operation
	 */
	public getOperation(): string	{
		return this.operation;

	}

	/**
	 * The method to set the value to operation
	 * @param operation A String representing the operation
	 */
	public setOperation(operation: string): void	{
		this.operation = operation;
		this.keyModified.set("operation", 1);

	}

	/**
	 * The method to get the createdTime
	 * @returns An instance of Date
	 */
	public getCreatedTime(): Date	{
		return this.createdTime;

	}

	/**
	 * The method to set the value to createdTime
	 * @param createdTime An instance of Date
	 */
	public setCreatedTime(createdTime: Date): void	{
		this.createdTime = createdTime;
		this.keyModified.set("created_time", 1);

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
	BulkWriteResponse as MasterModel,
	BulkWriteResponse as BulkWriteResponse
}
