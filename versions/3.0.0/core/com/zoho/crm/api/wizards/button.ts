import {Criteria} from "./criteria";
import {Message} from "./message";
import {Screen} from "./screen";
import {Transition} from "./transition";
import {Model} from "../../../../../../utils/util/model";

class Button implements Model{

	private id: bigint;
	private sequenceNumber: number;
	private displayLabel: string;
	private criteria: Criteria;
	private targetScreen: Screen;
	private type: string;
	private message: Message;
	private color: string;
	private shape: string;
	private backgroundColor: string;
	private visibility: string;
	private resource: any;
	private transition: Transition;
	private category: string;
	private referenceId: string;
	private keyModified: Map<string, number> = new Map<string, number>();
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
	 * The method to get the criteria
	 * @returns An instance of Criteria
	 */
	public getCriteria(): Criteria	{
		return this.criteria;

	}

	/**
	 * The method to set the value to criteria
	 * @param criteria An instance of Criteria
	 */
	public setCriteria(criteria: Criteria): void	{
		this.criteria = criteria;
		this.keyModified.set("criteria", 1);

	}

	/**
	 * The method to get the targetScreen
	 * @returns An instance of Screen
	 */
	public getTargetScreen(): Screen	{
		return this.targetScreen;

	}

	/**
	 * The method to set the value to targetScreen
	 * @param targetScreen An instance of Screen
	 */
	public setTargetScreen(targetScreen: Screen): void	{
		this.targetScreen = targetScreen;
		this.keyModified.set("target_screen", 1);

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
	 * The method to get the message
	 * @returns An instance of Message
	 */
	public getMessage(): Message	{
		return this.message;

	}

	/**
	 * The method to set the value to message
	 * @param message An instance of Message
	 */
	public setMessage(message: Message): void	{
		this.message = message;
		this.keyModified.set("message", 1);

	}

	/**
	 * The method to get the color
	 * @returns A String representing the color
	 */
	public getColor(): string	{
		return this.color;

	}

	/**
	 * The method to set the value to color
	 * @param color A String representing the color
	 */
	public setColor(color: string): void	{
		this.color = color;
		this.keyModified.set("color", 1);

	}

	/**
	 * The method to get the shape
	 * @returns A String representing the shape
	 */
	public getShape(): string	{
		return this.shape;

	}

	/**
	 * The method to set the value to shape
	 * @param shape A String representing the shape
	 */
	public setShape(shape: string): void	{
		this.shape = shape;
		this.keyModified.set("shape", 1);

	}

	/**
	 * The method to get the backgroundColor
	 * @returns A String representing the backgroundColor
	 */
	public getBackgroundColor(): string	{
		return this.backgroundColor;

	}

	/**
	 * The method to set the value to backgroundColor
	 * @param backgroundColor A String representing the backgroundColor
	 */
	public setBackgroundColor(backgroundColor: string): void	{
		this.backgroundColor = backgroundColor;
		this.keyModified.set("background_color", 1);

	}

	/**
	 * The method to get the visibility
	 * @returns A String representing the visibility
	 */
	public getVisibility(): string	{
		return this.visibility;

	}

	/**
	 * The method to set the value to visibility
	 * @param visibility A String representing the visibility
	 */
	public setVisibility(visibility: string): void	{
		this.visibility = visibility;
		this.keyModified.set("visibility", 1);

	}

	/**
	 * The method to get the resource
	 * @returns An Object representing the resource
	 */
	public getResource(): any	{
		return this.resource;

	}

	/**
	 * The method to set the value to resource
	 * @param resource An Object representing the resource
	 */
	public setResource(resource: any): void	{
		this.resource = resource;
		this.keyModified.set("resource", 1);

	}

	/**
	 * The method to get the transition
	 * @returns An instance of Transition
	 */
	public getTransition(): Transition	{
		return this.transition;

	}

	/**
	 * The method to set the value to transition
	 * @param transition An instance of Transition
	 */
	public setTransition(transition: Transition): void	{
		this.transition = transition;
		this.keyModified.set("transition", 1);

	}

	/**
	 * The method to get the category
	 * @returns A String representing the category
	 */
	public getCategory(): string	{
		return this.category;

	}

	/**
	 * The method to set the value to category
	 * @param category A String representing the category
	 */
	public setCategory(category: string): void	{
		this.category = category;
		this.keyModified.set("category", 1);

	}

	/**
	 * The method to get the referenceId
	 * @returns A String representing the referenceId
	 */
	public getReferenceId(): string	{
		return this.referenceId;

	}

	/**
	 * The method to set the value to referenceId
	 * @param referenceId A String representing the referenceId
	 */
	public setReferenceId(referenceId: string): void	{
		this.referenceId = referenceId;
		this.keyModified.set("reference_id", 1);

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
	Button as MasterModel,
	Button as Button
}
