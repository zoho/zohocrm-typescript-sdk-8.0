import {AutoResponseRule} from "./auto_response_rule";
import {FromAddress} from "./from_address";
import {Model} from "../../../../../../utils/util/model";

class AcknowledgeVisitor implements Model{

	private replyToAddress: FromAddress;
	private templateName: string;
	private autoResponseRule: AutoResponseRule;
	private templateId: string;
	private fromAddress: FromAddress;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the replyToAddress
	 * @returns An instance of FromAddress
	 */
	public getReplyToAddress(): FromAddress	{
		return this.replyToAddress;

	}

	/**
	 * The method to set the value to replyToAddress
	 * @param replyToAddress An instance of FromAddress
	 */
	public setReplyToAddress(replyToAddress: FromAddress): void	{
		this.replyToAddress = replyToAddress;
		this.keyModified.set("reply_to_address", 1);

	}

	/**
	 * The method to get the templateName
	 * @returns A String representing the templateName
	 */
	public getTemplateName(): string	{
		return this.templateName;

	}

	/**
	 * The method to set the value to templateName
	 * @param templateName A String representing the templateName
	 */
	public setTemplateName(templateName: string): void	{
		this.templateName = templateName;
		this.keyModified.set("template_name", 1);

	}

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
	 * @returns A String representing the templateId
	 */
	public getTemplateId(): string	{
		return this.templateId;

	}

	/**
	 * The method to set the value to templateId
	 * @param templateId A String representing the templateId
	 */
	public setTemplateId(templateId: string): void	{
		this.templateId = templateId;
		this.keyModified.set("template_id", 1);

	}

	/**
	 * The method to get the fromAddress
	 * @returns An instance of FromAddress
	 */
	public getFromAddress(): FromAddress	{
		return this.fromAddress;

	}

	/**
	 * The method to set the value to fromAddress
	 * @param fromAddress An instance of FromAddress
	 */
	public setFromAddress(fromAddress: FromAddress): void	{
		this.fromAddress = fromAddress;
		this.keyModified.set("from_address", 1);

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
