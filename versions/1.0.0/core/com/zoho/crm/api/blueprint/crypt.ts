import {Model} from "../../../../../../utils/util/model";

class Crypt implements Model{

	private mode: string;
	private column: string;
	private table: string;
	private status: number;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the mode
	 * @returns A String representing the mode
	 */
	public getMode(): string	{
		return this.mode;

	}

	/**
	 * The method to set the value to mode
	 * @param mode A String representing the mode
	 */
	public setMode(mode: string): void	{
		this.mode = mode;
		this.keyModified.set("mode", 1);

	}

	/**
	 * The method to get the column
	 * @returns A String representing the column
	 */
	public getColumn(): string	{
		return this.column;

	}

	/**
	 * The method to set the value to column
	 * @param column A String representing the column
	 */
	public setColumn(column: string): void	{
		this.column = column;
		this.keyModified.set("column", 1);

	}

	/**
	 * The method to get the table
	 * @returns A String representing the table
	 */
	public getTable(): string	{
		return this.table;

	}

	/**
	 * The method to set the value to table
	 * @param table A String representing the table
	 */
	public setTable(table: string): void	{
		this.table = table;
		this.keyModified.set("table", 1);

	}

	/**
	 * The method to get the status
	 * @returns A number representing the status
	 */
	public getStatus(): number	{
		return this.status;

	}

	/**
	 * The method to set the value to status
	 * @param status A number representing the status
	 */
	public setStatus(status: number): void	{
		this.status = status;
		this.keyModified.set("status", 1);

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
	Crypt as MasterModel,
	Crypt as Crypt
}
