import {PickListValues} from "./pick_list_values";
import {MinifiedUser} from "../users/minified_user";
import {Model} from "../../../../../../utils/util/model";

class Picklist implements Model{

	private displayLabel: string;
	private createdTime: Date;
	private modifiedTime: Date;
	private id: bigint;
	private apiName: string;
	private actualLabel: string;
	private description: string;
	private modifiedBy: MinifiedUser;
	private createdBy: MinifiedUser;
	private presence: boolean;
	private pickListValuesSortedLexically: boolean;
	private pickListValues: Array<PickListValues>;
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
	 * The method to get the createdTime
	 * @returns An instance of Date
	 */
	public getCreatedTime(): Date	{
		return this.createdTime;

	}

	/**
	 * The method to set the value to createdTime
	 * @param createdTime An instance of Date
	 */
	public setCreatedTime(createdTime: Date): void	{
		this.createdTime = createdTime;
		this.keyModified.set("created_time", 1);

	}

	/**
	 * The method to get the modifiedTime
	 * @returns An instance of Date
	 */
	public getModifiedTime(): Date	{
		return this.modifiedTime;

	}

	/**
	 * The method to set the value to modifiedTime
	 * @param modifiedTime An instance of Date
	 */
	public setModifiedTime(modifiedTime: Date): void	{
		this.modifiedTime = modifiedTime;
		this.keyModified.set("modified_time", 1);

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
	 * The method to get the actualLabel
	 * @returns A String representing the actualLabel
	 */
	public getActualLabel(): string	{
		return this.actualLabel;

	}

	/**
	 * The method to set the value to actualLabel
	 * @param actualLabel A String representing the actualLabel
	 */
	public setActualLabel(actualLabel: string): void	{
		this.actualLabel = actualLabel;
		this.keyModified.set("actual_label", 1);

	}

	/**
	 * The method to get the description
	 * @returns A String representing the description
	 */
	public getDescription(): string	{
		return this.description;

	}

	/**
	 * The method to set the value to description
	 * @param description A String representing the description
	 */
	public setDescription(description: string): void	{
		this.description = description;
		this.keyModified.set("description", 1);

	}

	/**
	 * The method to get the modifiedBy
	 * @returns An instance of MinifiedUser
	 */
	public getModifiedBy(): MinifiedUser	{
		return this.modifiedBy;

	}

	/**
	 * The method to set the value to modifiedBy
	 * @param modifiedBy An instance of MinifiedUser
	 */
	public setModifiedBy(modifiedBy: MinifiedUser): void	{
		this.modifiedBy = modifiedBy;
		this.keyModified.set("modified_by", 1);

	}

	/**
	 * The method to get the createdBy
	 * @returns An instance of MinifiedUser
	 */
	public getCreatedBy(): MinifiedUser	{
		return this.createdBy;

	}

	/**
	 * The method to set the value to createdBy
	 * @param createdBy An instance of MinifiedUser
	 */
	public setCreatedBy(createdBy: MinifiedUser): void	{
		this.createdBy = createdBy;
		this.keyModified.set("created_by", 1);

	}

	/**
	 * The method to get the presence
	 * @returns A Boolean representing the presence
	 */
	public getPresence(): boolean	{
		return this.presence;

	}

	/**
	 * The method to set the value to presence
	 * @param presence A Boolean representing the presence
	 */
	public setPresence(presence: boolean): void	{
		this.presence = presence;
		this.keyModified.set("presence", 1);

	}

	/**
	 * The method to get the pickListValuesSortedLexically
	 * @returns A Boolean representing the pickListValuesSortedLexically
	 */
	public getPickListValuesSortedLexically(): boolean	{
		return this.pickListValuesSortedLexically;

	}

	/**
	 * The method to set the value to pickListValuesSortedLexically
	 * @param pickListValuesSortedLexically A Boolean representing the pickListValuesSortedLexically
	 */
	public setPickListValuesSortedLexically(pickListValuesSortedLexically: boolean): void	{
		this.pickListValuesSortedLexically = pickListValuesSortedLexically;
		this.keyModified.set("pick_list_values_sorted_lexically", 1);

	}

	/**
	 * The method to get the pickListValues
	 * @returns An Array representing the pickListValues
	 */
	public getPickListValues(): Array<PickListValues>	{
		return this.pickListValues;

	}

	/**
	 * The method to set the value to pickListValues
	 * @param pickListValues An Array representing the pickListValues
	 */
	public setPickListValues(pickListValues: Array<PickListValues>): void	{
		this.pickListValues = pickListValues;
		this.keyModified.set("pick_list_values", 1);

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
	Picklist as MasterModel,
	Picklist as Picklist
}
