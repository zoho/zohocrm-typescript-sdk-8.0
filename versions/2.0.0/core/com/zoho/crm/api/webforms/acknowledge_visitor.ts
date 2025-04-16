import {AutoResponseRule} from "./auto_response_rule";
import {Model} from "../../../../../../utils/util/model";

class AcknowledgeVisitor implements Model{

	private autoResponseRule: AutoResponseRule;
	private templateId: bigint;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the autoResponseRule
	 * @returns An instance of AutoResponseRule
	 */
	public getAutoResponseRule(): AutoResponseRule	{
		return this.autoResponseRule;

	}

	/**
	 * The method to set the value to autoResponseRule
	 * @param autoResponseRule An instance of AutoResponseRule
	 */
	public setAutoResponseRule(autoResponseRule: AutoResponseRule): void	{
		this.autoResponseRule = autoResponseRule;
		this.keyModified.set("auto_response_rule", 1);

	}

	/**
	 * The method to get the templateId
	 * @returns A BigInt representing the templateId
	 */
	public getTemplateId(): bigint	{
		return this.templateId;

	}

	/**
	 * The method to set the value to templateId
	 * @param templateId A BigInt representing the templateId
	 */
	public setTemplateId(templateId: bigint): void	{
		this.templateId = templateId;
		this.keyModified.set("template_id", 1);

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
	AcknowledgeVisitor as MasterModel,
	AcknowledgeVisitor as AcknowledgeVisitor
}
