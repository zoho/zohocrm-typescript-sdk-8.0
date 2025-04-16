import {ActionsAllowed} from "./actions_allowed";
import {ConvertMapping} from "./convert_mapping";
import {Profiles} from "./profiles";
import {Sections} from "./sections";
import {SubformProperty} from "./subform_property";
import {MinifiedUser} from "../users/minified_user";
import {Model} from "../../../../../../utils/util/model";

class Layouts implements Model{

	private displayType: number;
	private apiName: string;
	private hasMoreProfiles: boolean;
	private createdTime: Date;
	private modifiedTime: Date;
	private visible: boolean;
	private source: string;
	private id: bigint;
	private name: string;
	private displayLabel: string;
	private mode: string;
	private subformProperties: SubformProperty;
	private status: string;
	private showBusinessCard: boolean;
	private generatedType: string;
	private createdFor: MinifiedUser;
	private convertMapping: ConvertMapping;
	private modifiedBy: MinifiedUser;
	private profiles: Array<Profiles>;
	private createdBy: MinifiedUser;
	private sections: Array<Sections>;
	private actionsAllowed: ActionsAllowed;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the displayType
	 * @returns A number representing the displayType
	 */
	public getDisplayType(): number	{
		return this.displayType;

	}

	/**
	 * The method to set the value to displayType
	 * @param displayType A number representing the displayType
	 */
	public setDisplayType(displayType: number): void	{
		this.displayType = displayType;
		this.keyModified.set("display_type", 1);

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
	 * The method to get the hasMoreProfiles
	 * @returns A Boolean representing the hasMoreProfiles
	 */
	public getHasMoreProfiles(): boolean	{
		return this.hasMoreProfiles;

	}

	/**
	 * The method to set the value to hasMoreProfiles
	 * @param hasMoreProfiles A Boolean representing the hasMoreProfiles
	 */
	public setHasMoreProfiles(hasMoreProfiles: boolean): void	{
		this.hasMoreProfiles = hasMoreProfiles;
		this.keyModified.set("has_more_profiles", 1);

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
	 * The method to get the visible
	 * @returns A Boolean representing the visible
	 */
	public getVisible(): boolean	{
		return this.visible;

	}

	/**
	 * The method to set the value to visible
	 * @param visible A Boolean representing the visible
	 */
	public setVisible(visible: boolean): void	{
		this.visible = visible;
		this.keyModified.set("visible", 1);

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
	 * The method to get the mode
	 * @returns A String representing the mode
	 */
	public getMode(): string	{
		return this.mode;

	}

	/**
	 * The method to set the value to mode
	 * @param mode A String representing the mode
	 */
	public setMode(mode: string): void	{
		this.mode = mode;
		this.keyModified.set("mode", 1);

	}

	/**
	 * The method to get the subformProperties
	 * @returns An instance of SubformProperty
	 */
	public getSubformProperties(): SubformProperty	{
		return this.subformProperties;

	}

	/**
	 * The method to set the value to subformProperties
	 * @param subformProperties An instance of SubformProperty
	 */
	public setSubformProperties(subformProperties: SubformProperty): void	{
		this.subformProperties = subformProperties;
		this.keyModified.set("subform_properties", 1);

	}

	/**
	 * The method to get the status
	 * @returns A String representing the status
	 */
	public getStatus(): string	{
		return this.status;

	}

	/**
	 * The method to set the value to status
	 * @param status A String representing the status
	 */
	public setStatus(status: string): void	{
		this.status = status;
		this.keyModified.set("status", 1);

	}

	/**
	 * The method to get the showBusinessCard
	 * @returns A Boolean representing the showBusinessCard
	 */
	public getShowBusinessCard(): boolean	{
		return this.showBusinessCard;

	}

	/**
	 * The method to set the value to showBusinessCard
	 * @param showBusinessCard A Boolean representing the showBusinessCard
	 */
	public setShowBusinessCard(showBusinessCard: boolean): void	{
		this.showBusinessCard = showBusinessCard;
		this.keyModified.set("show_business_card", 1);

	}

	/**
	 * The method to get the generatedType
	 * @returns A String representing the generatedType
	 */
	public getGeneratedType(): string	{
		return this.generatedType;

	}

	/**
	 * The method to set the value to generatedType
	 * @param generatedType A String representing the generatedType
	 */
	public setGeneratedType(generatedType: string): void	{
		this.generatedType = generatedType;
		this.keyModified.set("generated_type", 1);

	}

	/**
	 * The method to get the createdFor
	 * @returns An instance of MinifiedUser
	 */
	public getCreatedFor(): MinifiedUser	{
		return this.createdFor;

	}

	/**
	 * The method to set the value to createdFor
	 * @param createdFor An instance of MinifiedUser
	 */
	public setCreatedFor(createdFor: MinifiedUser): void	{
		this.createdFor = createdFor;
		this.keyModified.set("created_for", 1);

	}

	/**
	 * The method to get the convertMapping
	 * @returns An instance of ConvertMapping
	 */
	public getConvertMapping(): ConvertMapping	{
		return this.convertMapping;

	}

	/**
	 * The method to set the value to convertMapping
	 * @param convertMapping An instance of ConvertMapping
	 */
	public setConvertMapping(convertMapping: ConvertMapping): void	{
		this.convertMapping = convertMapping;
		this.keyModified.set("convert_mapping", 1);

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
	 * The method to get the profiles
	 * @returns An Array representing the profiles
	 */
	public getProfiles(): Array<Profiles>	{
		return this.profiles;

	}

	/**
	 * The method to set the value to profiles
	 * @param profiles An Array representing the profiles
	 */
	public setProfiles(profiles: Array<Profiles>): void	{
		this.profiles = profiles;
		this.keyModified.set("profiles", 1);

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
	 * The method to get the sections
	 * @returns An Array representing the sections
	 */
	public getSections(): Array<Sections>	{
		return this.sections;

	}

	/**
	 * The method to set the value to sections
	 * @param sections An Array representing the sections
	 */
	public setSections(sections: Array<Sections>): void	{
		this.sections = sections;
		this.keyModified.set("sections", 1);

	}

	/**
	 * The method to get the actionsAllowed
	 * @returns An instance of ActionsAllowed
	 */
	public getActionsAllowed(): ActionsAllowed	{
		return this.actionsAllowed;

	}

	/**
	 * The method to set the value to actionsAllowed
	 * @param actionsAllowed An instance of ActionsAllowed
	 */
	public setActionsAllowed(actionsAllowed: ActionsAllowed): void	{
		this.actionsAllowed = actionsAllowed;
		this.keyModified.set("actions_allowed", 1);

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
	Layouts as MasterModel,
	Layouts as Layouts
}
