import {Field} from "./field";
import {NextTransition} from "./next_transition";
import {Record} from "../record/record";
import {Model} from "../../../../../../utils/util/model";

class Transition implements Model{

	private type: string;
	private executionTime: Date;
	private sequence: number;
	private nextTransitions: Array<NextTransition>;
	private parentTransition: Transition;
	private percentPartialSave: number;
	private data: Record;
	private nextFieldValue: string;
	private textColorCode: string;
	private name: string;
	private criteriaMatched: boolean;
	private id: bigint;
	private fields: Array<Field>;
	private colorCode: string;
	private criteriaMessage: string;
	private keyModified: Map<string, number> = new Map<string, number>();
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
	 * The method to get the executionTime
	 * @returns An instance of Date
	 */
	public getExecutionTime(): Date	{
		return this.executionTime;

	}

	/**
	 * The method to set the value to executionTime
	 * @param executionTime An instance of Date
	 */
	public setExecutionTime(executionTime: Date): void	{
		this.executionTime = executionTime;
		this.keyModified.set("execution_time", 1);

	}

	/**
	 * The method to get the sequence
	 * @returns A number representing the sequence
	 */
	public getSequence(): number	{
		return this.sequence;

	}

	/**
	 * The method to set the value to sequence
	 * @param sequence A number representing the sequence
	 */
	public setSequence(sequence: number): void	{
		this.sequence = sequence;
		this.keyModified.set("sequence", 1);

	}

	/**
	 * The method to get the nextTransitions
	 * @returns An Array representing the nextTransitions
	 */
	public getNextTransitions(): Array<NextTransition>	{
		return this.nextTransitions;

	}

	/**
	 * The method to set the value to nextTransitions
	 * @param nextTransitions An Array representing the nextTransitions
	 */
	public setNextTransitions(nextTransitions: Array<NextTransition>): void	{
		this.nextTransitions = nextTransitions;
		this.keyModified.set("next_transitions", 1);

	}

	/**
	 * The method to get the parentTransition
	 * @returns An instance of Transition
	 */
	public getParentTransition(): Transition	{
		return this.parentTransition;

	}

	/**
	 * The method to set the value to parentTransition
	 * @param parentTransition An instance of Transition
	 */
	public setParentTransition(parentTransition: Transition): void	{
		this.parentTransition = parentTransition;
		this.keyModified.set("parent_transition", 1);

	}

	/**
	 * The method to get the percentPartialSave
	 * @returns A Float representing the percentPartialSave
	 */
	public getPercentPartialSave(): number	{
		return this.percentPartialSave;

	}

	/**
	 * The method to set the value to percentPartialSave
	 * @param percentPartialSave A Float representing the percentPartialSave
	 */
	public setPercentPartialSave(percentPartialSave: number): void	{
		this.percentPartialSave = percentPartialSave;
		this.keyModified.set("percent_partial_save", 1);

	}

	/**
	 * The method to get the data
	 * @returns An instance of Record
	 */
	public getData(): Record	{
		return this.data;

	}

	/**
	 * The method to set the value to data
	 * @param data An instance of Record
	 */
	public setData(data: Record): void	{
		this.data = data;
		this.keyModified.set("data", 1);

	}

	/**
	 * The method to get the nextFieldValue
	 * @returns A String representing the nextFieldValue
	 */
	public getNextFieldValue(): string	{
		return this.nextFieldValue;

	}

	/**
	 * The method to set the value to nextFieldValue
	 * @param nextFieldValue A String representing the nextFieldValue
	 */
	public setNextFieldValue(nextFieldValue: string): void	{
		this.nextFieldValue = nextFieldValue;
		this.keyModified.set("next_field_value", 1);

	}

	/**
	 * The method to get the textColorCode
	 * @returns A String representing the textColorCode
	 */
	public getTextColorCode(): string	{
		return this.textColorCode;

	}

	/**
	 * The method to set the value to textColorCode
	 * @param textColorCode A String representing the textColorCode
	 */
	public setTextColorCode(textColorCode: string): void	{
		this.textColorCode = textColorCode;
		this.keyModified.set("text_color_code", 1);

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
	 * The method to get the criteriaMatched
	 * @returns A Boolean representing the criteriaMatched
	 */
	public getCriteriaMatched(): boolean	{
		return this.criteriaMatched;

	}

	/**
	 * The method to set the value to criteriaMatched
	 * @param criteriaMatched A Boolean representing the criteriaMatched
	 */
	public setCriteriaMatched(criteriaMatched: boolean): void	{
		this.criteriaMatched = criteriaMatched;
		this.keyModified.set("criteria_matched", 1);

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
	 * The method to get the fields
	 * @returns An Array representing the fields
	 */
	public getFields(): Array<Field>	{
		return this.fields;

	}

	/**
	 * The method to set the value to fields
	 * @param fields An Array representing the fields
	 */
	public setFields(fields: Array<Field>): void	{
		this.fields = fields;
		this.keyModified.set("fields", 1);

	}

	/**
	 * The method to get the colorCode
	 * @returns A String representing the colorCode
	 */
	public getColorCode(): string	{
		return this.colorCode;

	}

	/**
	 * The method to set the value to colorCode
	 * @param colorCode A String representing the colorCode
	 */
	public setColorCode(colorCode: string): void	{
		this.colorCode = colorCode;
		this.keyModified.set("color_code", 1);

	}

	/**
	 * The method to get the criteriaMessage
	 * @returns A String representing the criteriaMessage
	 */
	public getCriteriaMessage(): string	{
		return this.criteriaMessage;

	}

	/**
	 * The method to set the value to criteriaMessage
	 * @param criteriaMessage A String representing the criteriaMessage
	 */
	public setCriteriaMessage(criteriaMessage: string): void	{
		this.criteriaMessage = criteriaMessage;
		this.keyModified.set("criteria_message", 1);

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
	Transition as MasterModel,
	Transition as Transition
}
