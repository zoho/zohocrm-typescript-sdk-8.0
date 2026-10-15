import {CurrentPicklist} from "./current_picklist";
import {Escalation} from "./escalation";
import {Model} from "../../../../../../utils/util/model";

class ProcessInfo implements Model{

	private fieldId: bigint;
	private isContinuous: boolean;
	private apiName: string;
	private continuous: boolean;
	private fieldLabel: string;
	private name: string;
	private columnName: string;
	private fieldValue: string;
	private id: string;
	private fieldName: string;
	private escalation: Escalation;
	private currentPicklist: CurrentPicklist;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the fieldId
	 * @returns A BigInt representing the fieldId
	 */
	public getFieldId(): bigint	{
		return this.fieldId;

	}

	/**
	 * The method to set the value to fieldId
	 * @param fieldId A BigInt representing the fieldId
	 */
	public setFieldId(fieldId: bigint): void	{
		this.fieldId = fieldId;
		this.keyModified.set("field_id", 1);

	}

	/**
	 * The method to get the isContinuous
	 * @returns A Boolean representing the isContinuous
	 */
	public getIsContinuous(): boolean	{
		return this.isContinuous;

	}

	/**
	 * The method to set the value to isContinuous
	 * @param isContinuous A Boolean representing the isContinuous
	 */
	public setIsContinuous(isContinuous: boolean): void	{
		this.isContinuous = isContinuous;
		this.keyModified.set("is_continuous", 1);

	}

	/**
	 * The method to get the apiName
	 * @returns A String representing the apiName
	 */
	public getAPIName(): string	{
		return this.apiName;

	}

	/**
	 * The method to set the value to apiName
	 * @param apiName A String representing the apiName
	 */
	public setAPIName(apiName: string): void	{
		this.apiName = apiName;
		this.keyModified.set("api_name", 1);

	}

	/**
	 * The method to get the continuous
	 * @returns A Boolean representing the continuous
	 */
	public getContinuous(): boolean	{
		return this.continuous;

	}

	/**
	 * The method to set the value to continuous
	 * @param continuous A Boolean representing the continuous
	 */
	public setContinuous(continuous: boolean): void	{
		this.continuous = continuous;
		this.keyModified.set("continuous", 1);

	}

	/**
	 * The method to get the fieldLabel
	 * @returns A String representing the fieldLabel
	 */
	public getFieldLabel(): string	{
		return this.fieldLabel;

	}

	/**
	 * The method to set the value to fieldLabel
	 * @param fieldLabel A String representing the fieldLabel
	 */
	public setFieldLabel(fieldLabel: string): void	{
		this.fieldLabel = fieldLabel;
		this.keyModified.set("field_label", 1);

	}

	/**
	 * The method to get the name
	 * @returns A String representing the name
	 */
	public getName(): string	{
		return this.name;

	}

	/**
	 * The method to set the value to name
	 * @param name A String representing the name
	 */
	public setName(name: string): void	{
		this.name = name;
		this.keyModified.set("name", 1);

	}

	/**
	 * The method to get the columnName
	 * @returns A String representing the columnName
	 */
	public getColumnName(): string	{
		return this.columnName;

	}

	/**
	 * The method to set the value to columnName
	 * @param columnName A String representing the columnName
	 */
	public setColumnName(columnName: string): void	{
		this.columnName = columnName;
		this.keyModified.set("column_name", 1);

	}

	/**
	 * The method to get the fieldValue
	 * @returns A String representing the fieldValue
	 */
	public getFieldValue(): string	{
		return this.fieldValue;

	}

	/**
	 * The method to set the value to fieldValue
	 * @param fieldValue A String representing the fieldValue
	 */
	public setFieldValue(fieldValue: string): void	{
		this.fieldValue = fieldValue;
		this.keyModified.set("field_value", 1);

	}

	/**
	 * The method to get the id
	 * @returns A String representing the id
	 */
	public getId(): string	{
		return this.id;

	}

	/**
	 * The method to set the value to id
	 * @param id A String representing the id
	 */
	public setId(id: string): void	{
		this.id = id;
		this.keyModified.set("id", 1);

	}

	/**
	 * The method to get the fieldName
	 * @returns A String representing the fieldName
	 */
	public getFieldName(): string	{
		return this.fieldName;

	}

	/**
	 * The method to set the value to fieldName
	 * @param fieldName A String representing the fieldName
	 */
	public setFieldName(fieldName: string): void	{
		this.fieldName = fieldName;
		this.keyModified.set("field_name", 1);

	}

	/**
	 * The method to get the escalation
	 * @returns An instance of Escalation
	 */
	public getEscalation(): Escalation	{
		return this.escalation;

	}

	/**
	 * The method to set the value to escalation
	 * @param escalation An instance of Escalation
	 */
	public setEscalation(escalation: Escalation): void	{
		this.escalation = escalation;
		this.keyModified.set("escalation", 1);

	}

	/**
	 * The method to get the currentPicklist
	 * @returns An instance of CurrentPicklist
	 */
	public getCurrentPicklist(): CurrentPicklist	{
		return this.currentPicklist;

	}

	/**
	 * The method to set the value to currentPicklist
	 * @param currentPicklist An instance of CurrentPicklist
	 */
	public setCurrentPicklist(currentPicklist: CurrentPicklist): void	{
		this.currentPicklist = currentPicklist;
		this.keyModified.set("current_picklist", 1);

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
	ProcessInfo as MasterModel,
	ProcessInfo as ProcessInfo
}
