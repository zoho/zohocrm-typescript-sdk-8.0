import {Module} from "./module";
import {Model} from "../../../../../../utils/util/model";

class RulesSummary implements Model{

	private module: Module;
	private ruleComputationStatus: boolean;
	private ruleCount: number;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the module
	 * @returns An instance of Module
	 */
	public getModule(): Module	{
		return this.module;

	}

	/**
	 * The method to set the value to module
	 * @param module An instance of Module
	 */
	public setModule(module: Module): void	{
		this.module = module;
		this.keyModified.set("module", 1);

	}

	/**
	 * The method to get the ruleComputationStatus
	 * @returns A Boolean representing the ruleComputationStatus
	 */
	public getRuleComputationStatus(): boolean	{
		return this.ruleComputationStatus;

	}

	/**
	 * The method to set the value to ruleComputationStatus
	 * @param ruleComputationStatus A Boolean representing the ruleComputationStatus
	 */
	public setRuleComputationStatus(ruleComputationStatus: boolean): void	{
		this.ruleComputationStatus = ruleComputationStatus;
		this.keyModified.set("rule_computation_status", 1);

	}

	/**
	 * The method to get the ruleCount
	 * @returns A number representing the ruleCount
	 */
	public getRuleCount(): number	{
		return this.ruleCount;

	}

	/**
	 * The method to set the value to ruleCount
	 * @param ruleCount A number representing the ruleCount
	 */
	public setRuleCount(ruleCount: number): void	{
		this.ruleCount = ruleCount;
		this.keyModified.set("rule_count", 1);

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
	RulesSummary as MasterModel,
	RulesSummary as RulesSummary
}
