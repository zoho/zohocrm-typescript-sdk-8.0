import {RulesSummary} from "./rules_summary";
import {SummaryResponseHandler} from "./summary_response_handler";
import {Model} from "../../../../../../utils/util/model";

class SummaryResponseWrapper implements Model, SummaryResponseHandler{

	private sharingRulesSummary: Array<RulesSummary>;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the sharingRulesSummary
	 * @returns An Array representing the sharingRulesSummary
	 */
	public getSharingRulesSummary(): Array<RulesSummary>	{
		return this.sharingRulesSummary;

	}

	/**
	 * The method to set the value to sharingRulesSummary
	 * @param sharingRulesSummary An Array representing the sharingRulesSummary
	 */
	public setSharingRulesSummary(sharingRulesSummary: Array<RulesSummary>): void	{
		this.sharingRulesSummary = sharingRulesSummary;
		this.keyModified.set("sharing_rules_summary", 1);

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
	SummaryResponseWrapper as MasterModel,
	SummaryResponseWrapper as SummaryResponseWrapper
}
