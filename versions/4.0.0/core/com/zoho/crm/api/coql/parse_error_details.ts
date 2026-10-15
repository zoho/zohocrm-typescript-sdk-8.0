import {DetailsWrapper} from "./details_wrapper";
import {Model} from "../../../../../../utils/util/model";

class ParseErrorDetails implements Model, DetailsWrapper{

	private line: number;
	private column: number;
	private near: string;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the line
	 * @returns A number representing the line
	 */
	public getLine(): number	{
		return this.line;

	}

	/**
	 * The method to set the value to line
	 * @param line A number representing the line
	 */
	public setLine(line: number): void	{
		this.line = line;
		this.keyModified.set("line", 1);

	}

	/**
	 * The method to get the column
	 * @returns A number representing the column
	 */
	public getColumn(): number	{
		return this.column;

	}

	/**
	 * The method to set the value to column
	 * @param column A number representing the column
	 */
	public setColumn(column: number): void	{
		this.column = column;
		this.keyModified.set("column", 1);

	}

	/**
	 * The method to get the near
	 * @returns A String representing the near
	 */
	public getNear(): string	{
		return this.near;

	}

	/**
	 * The method to set the value to near
	 * @param near A String representing the near
	 */
	public setNear(near: string): void	{
		this.near = near;
		this.keyModified.set("near", 1);

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
	ParseErrorDetails as MasterModel,
	ParseErrorDetails as ParseErrorDetails
}
