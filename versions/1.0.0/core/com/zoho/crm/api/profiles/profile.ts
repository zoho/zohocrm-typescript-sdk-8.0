import {DefaultView} from "./default_view";
import {PermissionDetail} from "./permission_detail";
import {Section} from "./section";
import {MinifiedUser} from "../users/minified_user";
import {Choice} from "../../../../../../utils/util/choice";
import {Model} from "../../../../../../utils/util/model";

class Profile implements Model{

	private defaultview: DefaultView;
	private name: string;
	private description: string;
	private id: bigint;
	private default1: boolean;
	private delete1: boolean;
	private permissionType: string;
	private custom: boolean;
	private displayLabel: string;
	private type: Choice<string>;
	private permissionsDetails: Array<PermissionDetail>;
	private sections: Array<Section>;
	private createdTime: Date;
	private modifiedTime: Date;
	private modifiedBy: MinifiedUser;
	private category: boolean;
	private createdBy: MinifiedUser;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the defaultview
	 * @returns An instance of DefaultView
	 */
	public getDefaultview(): DefaultView	{
		return this.defaultview;

	}

	/**
	 * The method to set the value to defaultview
	 * @param defaultview An instance of DefaultView
	 */
	public setDefaultview(defaultview: DefaultView): void	{
		this.defaultview = defaultview;
		this.keyModified.set("_default_view", 1);

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
	 * The method to get the default
	 * @returns A Boolean representing the default1
	 */
	public getDefault(): boolean	{
		return this.default1;

	}

	/**
	 * The method to set the value to default
	 * @param default1 A Boolean representing the default1
	 */
	public setDefault(default1: boolean): void	{
		this.default1 = default1;
		this.keyModified.set("default", 1);

	}

	/**
	 * The method to get the delete
	 * @returns A Boolean representing the delete1
	 */
	public getDelete(): boolean	{
		return this.delete1;

	}

	/**
	 * The method to set the value to delete
	 * @param delete1 A Boolean representing the delete1
	 */
	public setDelete(delete1: boolean): void	{
		this.delete1 = delete1;
		this.keyModified.set("_delete", 1);

	}

	/**
	 * The method to get the permissionType
	 * @returns A String representing the permissionType
	 */
	public getPermissionType(): string	{
		return this.permissionType;

	}

	/**
	 * The method to set the value to permissionType
	 * @param permissionType A String representing the permissionType
	 */
	public setPermissionType(permissionType: string): void	{
		this.permissionType = permissionType;
		this.keyModified.set("permission_type", 1);

	}

	/**
	 * The method to get the custom
	 * @returns A Boolean representing the custom
	 */
	public getCustom(): boolean	{
		return this.custom;

	}

	/**
	 * The method to set the value to custom
	 * @param custom A Boolean representing the custom
	 */
	public setCustom(custom: boolean): void	{
		this.custom = custom;
		this.keyModified.set("custom", 1);

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
	 * The method to get the type
	 * @returns An instance of Choice<string>
	 */
	public getType(): Choice<string>	{
		return this.type;

	}

	/**
	 * The method to set the value to type
	 * @param type An instance of Choice<string>
	 */
	public setType(type: Choice<string>): void	{
		this.type = type;
		this.keyModified.set("type", 1);

	}

	/**
	 * The method to get the permissionsDetails
	 * @returns An Array representing the permissionsDetails
	 */
	public getPermissionsDetails(): Array<PermissionDetail>	{
		return this.permissionsDetails;

	}

	/**
	 * The method to set the value to permissionsDetails
	 * @param permissionsDetails An Array representing the permissionsDetails
	 */
	public setPermissionsDetails(permissionsDetails: Array<PermissionDetail>): void	{
		this.permissionsDetails = permissionsDetails;
		this.keyModified.set("permissions_details", 1);

	}

	/**
	 * The method to get the sections
	 * @returns An Array representing the sections
	 */
	public getSections(): Array<Section>	{
		return this.sections;

	}

	/**
	 * The method to set the value to sections
	 * @param sections An Array representing the sections
	 */
	public setSections(sections: Array<Section>): void	{
		this.sections = sections;
		this.keyModified.set("sections", 1);

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
	 * The method to get the category
	 * @returns A Boolean representing the category
	 */
	public getCategory(): boolean	{
		return this.category;

	}

	/**
	 * The method to set the value to category
	 * @param category A Boolean representing the category
	 */
	public setCategory(category: boolean): void	{
		this.category = category;
		this.keyModified.set("category", 1);

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
	Profile as MasterModel,
	Profile as Profile
}
