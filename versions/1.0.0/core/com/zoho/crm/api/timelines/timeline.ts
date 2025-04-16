import {AutomationDetail} from "./automation_detail";
import {FieldHistory} from "./field_history";
import {NameIdStructure} from "./name_id_structure";
import {Record} from "./record";
import {RelatedRecord} from "./related_record";
import {Model} from "../../../../../../utils/util/model";

class Timeline implements Model{

	private auditedTime: Date;
	private action: string;
	private id: bigint;
	private source: string;
	private extension: string;
	private type: string;
	private doneBy: NameIdStructure;
	private relatedRecord: RelatedRecord;
	private automationDetails: AutomationDetail;
	private record: Record;
	private fieldHistory: Array<FieldHistory>;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the auditedTime
	 * @returns An instance of Date
	 */
	public getAuditedTime(): Date	{
		return this.auditedTime;

	}

	/**
	 * The method to set the value to auditedTime
	 * @param auditedTime An instance of Date
	 */
	public setAuditedTime(auditedTime: Date): void	{
		this.auditedTime = auditedTime;
		this.keyModified.set("audited_time", 1);

	}

	/**
	 * The method to get the action
	 * @returns A String representing the action
	 */
	public getAction(): string	{
		return this.action;

	}

	/**
	 * The method to set the value to action
	 * @param action A String representing the action
	 */
	public setAction(action: string): void	{
		this.action = action;
		this.keyModified.set("action", 1);

	}

	/**
	 * The method to get the id
	 * @returns A BigInt representing the id
	 */
	public getId(): bigint	{
		return this.id;

	}

	/**
	 * The method to set the value to id
	 * @param id A BigInt representing the id
	 */
	public setId(id: bigint): void	{
		this.id = id;
		this.keyModified.set("id", 1);

	}

	/**
	 * The method to get the source
	 * @returns A String representing the source
	 */
	public getSource(): string	{
		return this.source;

	}

	/**
	 * The method to set the value to source
	 * @param source A String representing the source
	 */
	public setSource(source: string): void	{
		this.source = source;
		this.keyModified.set("source", 1);

	}

	/**
	 * The method to get the extension
	 * @returns A String representing the extension
	 */
	public getExtension(): string	{
		return this.extension;

	}

	/**
	 * The method to set the value to extension
	 * @param extension A String representing the extension
	 */
	public setExtension(extension: string): void	{
		this.extension = extension;
		this.keyModified.set("extension", 1);

	}

	/**
	 * The method to get the type
	 * @returns A String representing the type
	 */
	public getType(): string	{
		return this.type;

	}

	/**
	 * The method to set the value to type
	 * @param type A String representing the type
	 */
	public setType(type: string): void	{
		this.type = type;
		this.keyModified.set("type", 1);

	}

	/**
	 * The method to get the doneBy
	 * @returns An instance of NameIdStructure
	 */
	public getDoneBy(): NameIdStructure	{
		return this.doneBy;

	}

	/**
	 * The method to set the value to doneBy
	 * @param doneBy An instance of NameIdStructure
	 */
	public setDoneBy(doneBy: NameIdStructure): void	{
		this.doneBy = doneBy;
		this.keyModified.set("done_by", 1);

	}

	/**
	 * The method to get the relatedRecord
	 * @returns An instance of RelatedRecord
	 */
	public getRelatedRecord(): RelatedRecord	{
		return this.relatedRecord;

	}

	/**
	 * The method to set the value to relatedRecord
	 * @param relatedRecord An instance of RelatedRecord
	 */
	public setRelatedRecord(relatedRecord: RelatedRecord): void	{
		this.relatedRecord = relatedRecord;
		this.keyModified.set("related_record", 1);

	}

	/**
	 * The method to get the automationDetails
	 * @returns An instance of AutomationDetail
	 */
	public getAutomationDetails(): AutomationDetail	{
		return this.automationDetails;

	}

	/**
	 * The method to set the value to automationDetails
	 * @param automationDetails An instance of AutomationDetail
	 */
	public setAutomationDetails(automationDetails: AutomationDetail): void	{
		this.automationDetails = automationDetails;
		this.keyModified.set("automation_details", 1);

	}

	/**
	 * The method to get the record
	 * @returns An instance of Record
	 */
	public getRecord(): Record	{
		return this.record;

	}

	/**
	 * The method to set the value to record
	 * @param record An instance of Record
	 */
	public setRecord(record: Record): void	{
		this.record = record;
		this.keyModified.set("record", 1);

	}

	/**
	 * The method to get the fieldHistory
	 * @returns An Array representing the fieldHistory
	 */
	public getFieldHistory(): Array<FieldHistory>	{
		return this.fieldHistory;

	}

	/**
	 * The method to set the value to fieldHistory
	 * @param fieldHistory An Array representing the fieldHistory
	 */
	public setFieldHistory(fieldHistory: Array<FieldHistory>): void	{
		this.fieldHistory = fieldHistory;
		this.keyModified.set("field_history", 1);

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
	Timeline as MasterModel,
	Timeline as Timeline
}
