import {Actions} from "./actions";
import {Criteria} from "./criteria";
import {Choice} from "../../../../../../utils/util/choice";
import {Model} from "../../../../../../utils/util/model";

class ConditionalRules implements Model{

	private queryId: bigint;
	private executeOn: Choice<string>;
	private criteria: Criteria;
	private actions: Array<Actions>;
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
	 * The method to get the executeOn
	 * @returns An instance of Choice<string>
	 */
	public getExecuteOn(): Choice<string>	{
		return this.executeOn;

	}

	/**
	 * The method to set the value to executeOn
	 * @param executeOn An instance of Choice<string>
	 */
	public setExecuteOn(executeOn: Choice<string>): void	{
		this.executeOn = executeOn;
		this.keyModified.set("execute_on", 1);

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
	 * The method to get the actions
	 * @returns An Array representing the actions
	 */
	public getActions(): Array<Actions>	{
		return this.actions;

	}

	/**
	 * The method to set the value to actions
	 * @param actions An Array representing the actions
	 */
	public setActions(actions: Array<Actions>): void	{
		this.actions = actions;
		this.keyModified.set("actions", 1);

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
	ConditionalRules as MasterModel,
	ConditionalRules as ConditionalRules
}
