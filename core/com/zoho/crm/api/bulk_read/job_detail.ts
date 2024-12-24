import {Query} from "./query";
import {Result} from "./result";
import {MinifiedUser} from "../users/minified_user";
import {Choice} from "../../../../../../utils/util/choice";
import {Model} from "../../../../../../utils/util/model";

class JobDetail implements Model{

	private id: string;
	private operation: string;
	private state: Choice<string>;
	private query: Query;
	private createdBy: MinifiedUser;
	private createdTime: Date;
	private result: Result;
	private fileType: Choice<string>;
	private keyModified: Map<string, number> = new Map<string, number>();
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
	 * The method to get the state
	 * @returns An instance of Choice<string>
	 */
	public getState(): Choice<string>	{
		return this.state;

	}

	/**
	 * The method to set the value to state
	 * @param state An instance of Choice<string>
	 */
	public setState(state: Choice<string>): void	{
		this.state = state;
		this.keyModified.set("state", 1);

	}

	/**
	 * The method to get the query
	 * @returns An instance of Query
	 */
	public getQuery(): Query	{
		return this.query;

	}

	/**
	 * The method to set the value to query
	 * @param query An instance of Query
	 */
	public setQuery(query: Query): void	{
		this.query = query;
		this.keyModified.set("query", 1);

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
	 * The method to get the fileType
	 * @returns An instance of Choice<string>
	 */
	public getFileType(): Choice<string>	{
		return this.fileType;

	}

	/**
	 * The method to set the value to fileType
	 * @param fileType An instance of Choice<string>
	 */
	public setFileType(fileType: Choice<string>): void	{
		this.fileType = fileType;
		this.keyModified.set("file_type", 1);

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
	JobDetail as MasterModel,
	JobDetail as JobDetail
}
