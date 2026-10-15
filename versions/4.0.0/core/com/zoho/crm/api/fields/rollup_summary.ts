import {Expression} from "./expression";
import {MinifiedModule} from "../modules/minified_module";
import {RelatedList} from "../related_lists/related_list";
import {Model} from "../../../../../../utils/util/model";

class RollupSummary implements Model{

	private returnType: string;
	private expression: Expression;
	private basedOnModule: MinifiedModule;
	private relatedList: RelatedList;
	private rollupBasedOn: string;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the returnType
	 * @returns A String representing the returnType
	 */
	public getReturnType(): string	{
		return this.returnType;

	}

	/**
	 * The method to set the value to returnType
	 * @param returnType A String representing the returnType
	 */
	public setReturnType(returnType: string): void	{
		this.returnType = returnType;
		this.keyModified.set("return_type", 1);

	}

	/**
	 * The method to get the expression
	 * @returns An instance of Expression
	 */
	public getExpression(): Expression	{
		return this.expression;

	}

	/**
	 * The method to set the value to expression
	 * @param expression An instance of Expression
	 */
	public setExpression(expression: Expression): void	{
		this.expression = expression;
		this.keyModified.set("expression", 1);

	}

	/**
	 * The method to get the basedOnModule
	 * @returns An instance of MinifiedModule
	 */
	public getBasedOnModule(): MinifiedModule	{
		return this.basedOnModule;

	}

	/**
	 * The method to set the value to basedOnModule
	 * @param basedOnModule An instance of MinifiedModule
	 */
	public setBasedOnModule(basedOnModule: MinifiedModule): void	{
		this.basedOnModule = basedOnModule;
		this.keyModified.set("based_on_module", 1);

	}

	/**
	 * The method to get the relatedList
	 * @returns An instance of RelatedList
	 */
	public getRelatedList(): RelatedList	{
		return this.relatedList;

	}

	/**
	 * The method to set the value to relatedList
	 * @param relatedList An instance of RelatedList
	 */
	public setRelatedList(relatedList: RelatedList): void	{
		this.relatedList = relatedList;
		this.keyModified.set("related_list", 1);

	}

	/**
	 * The method to get the rollupBasedOn
	 * @returns A String representing the rollupBasedOn
	 */
	public getRollupBasedOn(): string	{
		return this.rollupBasedOn;

	}

	/**
	 * The method to set the value to rollupBasedOn
	 * @param rollupBasedOn A String representing the rollupBasedOn
	 */
	public setRollupBasedOn(rollupBasedOn: string): void	{
		this.rollupBasedOn = rollupBasedOn;
		this.keyModified.set("rollup_based_on", 1);

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
	RollupSummary as MasterModel,
	RollupSummary as RollupSummary
}
