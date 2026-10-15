import {ConditionalRules} from "./conditional_rules";
import {Segment} from "./segment";
import {Model} from "../../../../../../utils/util/model";

class Screen implements Model{

	private displayLabel: string;
	private apiName: string;
	private id: bigint;
	private referenceId: string;
	private conditionalRules: Array<ConditionalRules>;
	private segments: Array<Segment>;
	private keyModified: Map<string, number> = new Map<string, number>();
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
	 * The method to get the conditionalRules
	 * @returns An Array representing the conditionalRules
	 */
	public getConditionalRules(): Array<ConditionalRules>	{
		return this.conditionalRules;

	}

	/**
	 * The method to set the value to conditionalRules
	 * @param conditionalRules An Array representing the conditionalRules
	 */
	public setConditionalRules(conditionalRules: Array<ConditionalRules>): void	{
		this.conditionalRules = conditionalRules;
		this.keyModified.set("conditional_rules", 1);

	}

	/**
	 * The method to get the segments
	 * @returns An Array representing the segments
	 */
	public getSegments(): Array<Segment>	{
		return this.segments;

	}

	/**
	 * The method to set the value to segments
	 * @param segments An Array representing the segments
	 */
	public setSegments(segments: Array<Segment>): void	{
		this.segments = segments;
		this.keyModified.set("segments", 1);

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
	Screen as MasterModel,
	Screen as Screen
}
