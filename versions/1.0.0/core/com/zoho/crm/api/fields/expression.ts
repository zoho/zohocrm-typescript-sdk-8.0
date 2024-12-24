import {FunctionParameter} from "./function_parameter";
import {RollupCriteria} from "./rollup_criteria";
import {Model} from "../../../../../../utils/util/model";

class Expression implements Model{

	private functionParameters: Array<FunctionParameter>;
	private criteria: RollupCriteria;
	private function1: string;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the functionParameters
	 * @returns An Array representing the functionParameters
	 */
	public getFunctionParameters(): Array<FunctionParameter>	{
		return this.functionParameters;

	}

	/**
	 * The method to set the value to functionParameters
	 * @param functionParameters An Array representing the functionParameters
	 */
	public setFunctionParameters(functionParameters: Array<FunctionParameter>): void	{
		this.functionParameters = functionParameters;
		this.keyModified.set("function_parameters", 1);

	}

	/**
	 * The method to get the criteria
	 * @returns An instance of RollupCriteria
	 */
	public getCriteria(): RollupCriteria	{
		return this.criteria;

	}

	/**
	 * The method to set the value to criteria
	 * @param criteria An instance of RollupCriteria
	 */
	public setCriteria(criteria: RollupCriteria): void	{
		this.criteria = criteria;
		this.keyModified.set("criteria", 1);

	}

	/**
	 * The method to get the function
	 * @returns A String representing the function1
	 */
	public getFunction(): string	{
		return this.function1;

	}

	/**
	 * The method to set the value to function
	 * @param function1 A String representing the function1
	 */
	public setFunction(function1: string): void	{
		this.function1 = function1;
		this.keyModified.set("function", 1);

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
	Expression as MasterModel,
	Expression as Expression
}
