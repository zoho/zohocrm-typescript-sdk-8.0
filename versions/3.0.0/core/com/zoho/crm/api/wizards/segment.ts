import {Fields} from "../fields/fields";
import {Button} from "./button";
import {Element} from "./element";
import {Model} from "../../../../../../utils/util/model";

class Segment implements Model{

	private sequenceNumber: number;
	private displayLabel: string;
	private columnCount: number;
	private id: bigint;
	private type: string;
	private fields: Array<Fields>;
	private buttons: Array<Button>;
	private elements: Array<Element>;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the sequenceNumber
	 * @returns A number representing the sequenceNumber
	 */
	public getSequenceNumber(): number	{
		return this.sequenceNumber;

	}

	/**
	 * The method to set the value to sequenceNumber
	 * @param sequenceNumber A number representing the sequenceNumber
	 */
	public setSequenceNumber(sequenceNumber: number): void	{
		this.sequenceNumber = sequenceNumber;
		this.keyModified.set("sequence_number", 1);

	}

	/**
	 * The method to get the displayLabel
	 * @returns A String representing the displayLabel
	 */
	public getDisplayLabel(): string	{
		return this.displayLabel;

	}

	/**
	 * The method to set the value to displayLabel
	 * @param displayLabel A String representing the displayLabel
	 */
	public setDisplayLabel(displayLabel: string): void	{
		this.displayLabel = displayLabel;
		this.keyModified.set("display_label", 1);

	}

	/**
	 * The method to get the columnCount
	 * @returns A number representing the columnCount
	 */
	public getColumnCount(): number	{
		return this.columnCount;

	}

	/**
	 * The method to set the value to columnCount
	 * @param columnCount A number representing the columnCount
	 */
	public setColumnCount(columnCount: number): void	{
		this.columnCount = columnCount;
		this.keyModified.set("column_count", 1);

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
	 * The method to get the fields
	 * @returns An Array representing the fields
	 */
	public getFields(): Array<Fields>	{
		return this.fields;

	}

	/**
	 * The method to set the value to fields
	 * @param fields An Array representing the fields
	 */
	public setFields(fields: Array<Fields>): void	{
		this.fields = fields;
		this.keyModified.set("fields", 1);

	}

	/**
	 * The method to get the buttons
	 * @returns An Array representing the buttons
	 */
	public getButtons(): Array<Button>	{
		return this.buttons;

	}

	/**
	 * The method to set the value to buttons
	 * @param buttons An Array representing the buttons
	 */
	public setButtons(buttons: Array<Button>): void	{
		this.buttons = buttons;
		this.keyModified.set("buttons", 1);

	}

	/**
	 * The method to get the elements
	 * @returns An Array representing the elements
	 */
	public getElements(): Array<Element>	{
		return this.elements;

	}

	/**
	 * The method to set the value to elements
	 * @param elements An Array representing the elements
	 */
	public setElements(elements: Array<Element>): void	{
		this.elements = elements;
		this.keyModified.set("elements", 1);

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
	Segment as MasterModel,
	Segment as Segment
}
