import {Module} from "./module";
import {Choice} from "../../../../../../utils/util/choice";
import {Model} from "../../../../../../utils/util/model";

class DataSharing implements Model{

	private shareType: Choice<string>;
	private publicInPortals: boolean;
	private module: Module;
	private ruleComputationRunning: boolean;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the shareType
	 * @returns An instance of Choice<string>
	 */
	public getShareType(): Choice<string>	{
		return this.shareType;

	}

	/**
	 * The method to set the value to shareType
	 * @param shareType An instance of Choice<string>
	 */
	public setShareType(shareType: Choice<string>): void	{
		this.shareType = shareType;
		this.keyModified.set("share_type", 1);

	}

	/**
	 * The method to get the publicInPortals
	 * @returns A Boolean representing the publicInPortals
	 */
	public getPublicInPortals(): boolean	{
		return this.publicInPortals;

	}

	/**
	 * The method to set the value to publicInPortals
	 * @param publicInPortals A Boolean representing the publicInPortals
	 */
	public setPublicInPortals(publicInPortals: boolean): void	{
		this.publicInPortals = publicInPortals;
		this.keyModified.set("public_in_portals", 1);

	}

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
	 * The method to get the ruleComputationRunning
	 * @returns A Boolean representing the ruleComputationRunning
	 */
	public getRuleComputationRunning(): boolean	{
		return this.ruleComputationRunning;

	}

	/**
	 * The method to set the value to ruleComputationRunning
	 * @param ruleComputationRunning A Boolean representing the ruleComputationRunning
	 */
	public setRuleComputationRunning(ruleComputationRunning: boolean): void	{
		this.ruleComputationRunning = ruleComputationRunning;
		this.keyModified.set("rule_computation_running", 1);

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
	DataSharing as MasterModel,
	DataSharing as DataSharing
}
