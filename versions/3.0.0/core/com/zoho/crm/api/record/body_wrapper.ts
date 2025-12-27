import {ApplyFeatureExecution} from "./apply_feature_execution";
import {Record} from "./record";
import {SkipFeatureExecution} from "./skip_feature_execution";
import {Model} from "../../../../../../utils/util/model";

class BodyWrapper implements Model{

	private data: Array<Record>;
	private trigger: Array<string>;
	private process: Array<string>;
	private duplicateCheckFields: Array<string>;
	private wfTrigger: string;
	private larId: string;
	private applyFeatureExecution: Array<ApplyFeatureExecution>;
	private applyValidationRule: string;
	private applyFunctionValidationRule: string;
	private skipFeatureExecution: Array<SkipFeatureExecution>;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the data
	 * @returns An Array representing the data
	 */
	public getData(): Array<Record>	{
		return this.data;

	}

	/**
	 * The method to set the value to data
	 * @param data An Array representing the data
	 */
	public setData(data: Array<Record>): void	{
		this.data = data;
		this.keyModified.set("data", 1);

	}

	/**
	 * The method to get the trigger
	 * @returns An Array representing the trigger
	 */
	public getTrigger(): Array<string>	{
		return this.trigger;

	}

	/**
	 * The method to set the value to trigger
	 * @param trigger An Array representing the trigger
	 */
	public setTrigger(trigger: Array<string>): void	{
		this.trigger = trigger;
		this.keyModified.set("trigger", 1);

	}

	/**
	 * The method to get the process
	 * @returns An Array representing the process
	 */
	public getProcess(): Array<string>	{
		return this.process;

	}

	/**
	 * The method to set the value to process
	 * @param process An Array representing the process
	 */
	public setProcess(process: Array<string>): void	{
		this.process = process;
		this.keyModified.set("process", 1);

	}

	/**
	 * The method to get the duplicateCheckFields
	 * @returns An Array representing the duplicateCheckFields
	 */
	public getDuplicateCheckFields(): Array<string>	{
		return this.duplicateCheckFields;

	}

	/**
	 * The method to set the value to duplicateCheckFields
	 * @param duplicateCheckFields An Array representing the duplicateCheckFields
	 */
	public setDuplicateCheckFields(duplicateCheckFields: Array<string>): void	{
		this.duplicateCheckFields = duplicateCheckFields;
		this.keyModified.set("duplicate_check_fields", 1);

	}

	/**
	 * The method to get the wfTrigger
	 * @returns A String representing the wfTrigger
	 */
	public getWfTrigger(): string	{
		return this.wfTrigger;

	}

	/**
	 * The method to set the value to wfTrigger
	 * @param wfTrigger A String representing the wfTrigger
	 */
	public setWfTrigger(wfTrigger: string): void	{
		this.wfTrigger = wfTrigger;
		this.keyModified.set("wf_trigger", 1);

	}

	/**
	 * The method to get the larId
	 * @returns A String representing the larId
	 */
	public getLarId(): string	{
		return this.larId;

	}

	/**
	 * The method to set the value to larId
	 * @param larId A String representing the larId
	 */
	public setLarId(larId: string): void	{
		this.larId = larId;
		this.keyModified.set("lar_id", 1);

	}

	/**
	 * The method to get the applyFeatureExecution
	 * @returns An Array representing the applyFeatureExecution
	 */
	public getApplyFeatureExecution(): Array<ApplyFeatureExecution>	{
		return this.applyFeatureExecution;

	}

	/**
	 * The method to set the value to applyFeatureExecution
	 * @param applyFeatureExecution An Array representing the applyFeatureExecution
	 */
	public setApplyFeatureExecution(applyFeatureExecution: Array<ApplyFeatureExecution>): void	{
		this.applyFeatureExecution = applyFeatureExecution;
		this.keyModified.set("apply_feature_execution", 1);

	}

	/**
	 * The method to get the applyValidationRule
	 * @returns A String representing the applyValidationRule
	 */
	public getApplyValidationRule(): string	{
		return this.applyValidationRule;

	}

	/**
	 * The method to set the value to applyValidationRule
	 * @param applyValidationRule A String representing the applyValidationRule
	 */
	public setApplyValidationRule(applyValidationRule: string): void	{
		this.applyValidationRule = applyValidationRule;
		this.keyModified.set("apply_validation_rule", 1);

	}

	/**
	 * The method to get the applyFunctionValidationRule
	 * @returns A String representing the applyFunctionValidationRule
	 */
	public getApplyFunctionValidationRule(): string	{
		return this.applyFunctionValidationRule;

	}

	/**
	 * The method to set the value to applyFunctionValidationRule
	 * @param applyFunctionValidationRule A String representing the applyFunctionValidationRule
	 */
	public setApplyFunctionValidationRule(applyFunctionValidationRule: string): void	{
		this.applyFunctionValidationRule = applyFunctionValidationRule;
		this.keyModified.set("apply_function_validation_rule", 1);

	}

	/**
	 * The method to get the skipFeatureExecution
	 * @returns An Array representing the skipFeatureExecution
	 */
	public getSkipFeatureExecution(): Array<SkipFeatureExecution>	{
		return this.skipFeatureExecution;

	}

	/**
	 * The method to set the value to skipFeatureExecution
	 * @param skipFeatureExecution An Array representing the skipFeatureExecution
	 */
	public setSkipFeatureExecution(skipFeatureExecution: Array<SkipFeatureExecution>): void	{
		this.skipFeatureExecution = skipFeatureExecution;
		this.keyModified.set("skip_feature_execution", 1);

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
	BodyWrapper as MasterModel,
	BodyWrapper as BodyWrapper
}
