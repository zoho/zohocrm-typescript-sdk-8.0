import {DetailsWrapper} from "./details_wrapper";
import {Model} from "../../../../../../utils/util/model";

class ClauseDetails implements Model, DetailsWrapper{

	private clause: string;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the clause
	 * @returns A String representing the clause
	 */
	public getClause(): string	{
		return this.clause;

	}

	/**
	 * The method to set the value to clause
	 * @param clause A String representing the clause
	 */
	public setClause(clause: string): void	{
		this.clause = clause;
		this.keyModified.set("clause", 1);

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
	ClauseDetails as MasterModel,
	ClauseDetails as ClauseDetails
}
