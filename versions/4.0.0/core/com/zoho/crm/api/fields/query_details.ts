import {Criteria} from "./criteria";
import {Model} from "../../../../../../utils/util/model";

class QueryDetails implements Model{

	private queryId: bigint;
	private criteria: Criteria;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the queryId
	 * @returns A BigInt representing the queryId
	 */
	public getQueryId(): bigint	{
		return this.queryId;

	}

	/**
	 * The method to set the value to queryId
	 * @param queryId A BigInt representing the queryId
	 */
	public setQueryId(queryId: bigint): void	{
		this.queryId = queryId;
		this.keyModified.set("query_id", 1);

	}

	/**
	 * The method to get the criteria
	 * @returns An instance of Criteria
	 */
	public getCriteria(): Criteria	{
		return this.criteria;

	}

	/**
	 * The method to set the value to criteria
	 * @param criteria An instance of Criteria
	 */
	public setCriteria(criteria: Criteria): void	{
		this.criteria = criteria;
		this.keyModified.set("criteria", 1);

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
	QueryDetails as MasterModel,
	QueryDetails as QueryDetails
}
