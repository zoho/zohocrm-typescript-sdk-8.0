import {Modules} from "../modules/modules";
import {Profile} from "../profiles/profile";
import {MinifiedUser} from "../users/minified_user";
import {Container} from "./container";
import {ExemptedPortalUserType} from "./exempted_portal_user_type";
import {PortalUserType} from "./portal_user_type";
import {Model} from "../../../../../../utils/util/model";

class Wizard implements Model{

	private createdTime: Date;
	private modifiedTime: Date;
	private module: Modules;
	private name: string;
	private modifiedBy: MinifiedUser;
	private profiles: Array<Profile>;
	private active: boolean;
	private containers: Array<Container>;
	private id: bigint;
	private createdBy: MinifiedUser;
	private portalUserTypes: Array<PortalUserType>;
	private exemptedPortalUserTypes: Array<ExemptedPortalUserType>;
	private parentWizard: Wizard;
	private draft: boolean;
	private keyModified: Map<string, number> = new Map<string, number>();
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
	 * The method to get the module
	 * @returns An instance of Modules
	 */
	public getModule(): Modules	{
		return this.module;

	}

	/**
	 * The method to set the value to module
	 * @param module An instance of Modules
	 */
	public setModule(module: Modules): void	{
		this.module = module;
		this.keyModified.set("module", 1);

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
	public getProfiles(): Array<Profile>	{
		return this.profiles;

	}

	/**
	 * The method to set the value to profiles
	 * @param profiles An Array representing the profiles
	 */
	public setProfiles(profiles: Array<Profile>): void	{
		this.profiles = profiles;
		this.keyModified.set("profiles", 1);

	}

	/**
	 * The method to get the active
	 * @returns A Boolean representing the active
	 */
	public getActive(): boolean	{
		return this.active;

	}

	/**
	 * The method to set the value to active
	 * @param active A Boolean representing the active
	 */
	public setActive(active: boolean): void	{
		this.active = active;
		this.keyModified.set("active", 1);

	}

	/**
	 * The method to get the containers
	 * @returns An Array representing the containers
	 */
	public getContainers(): Array<Container>	{
		return this.containers;

	}

	/**
	 * The method to set the value to containers
	 * @param containers An Array representing the containers
	 */
	public setContainers(containers: Array<Container>): void	{
		this.containers = containers;
		this.keyModified.set("containers", 1);

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
	 * The method to get the portalUserTypes
	 * @returns An Array representing the portalUserTypes
	 */
	public getPortalUserTypes(): Array<PortalUserType>	{
		return this.portalUserTypes;

	}

	/**
	 * The method to set the value to portalUserTypes
	 * @param portalUserTypes An Array representing the portalUserTypes
	 */
	public setPortalUserTypes(portalUserTypes: Array<PortalUserType>): void	{
		this.portalUserTypes = portalUserTypes;
		this.keyModified.set("portal_user_types", 1);

	}

	/**
	 * The method to get the exemptedPortalUserTypes
	 * @returns An Array representing the exemptedPortalUserTypes
	 */
	public getExemptedPortalUserTypes(): Array<ExemptedPortalUserType>	{
		return this.exemptedPortalUserTypes;

	}

	/**
	 * The method to set the value to exemptedPortalUserTypes
	 * @param exemptedPortalUserTypes An Array representing the exemptedPortalUserTypes
	 */
	public setExemptedPortalUserTypes(exemptedPortalUserTypes: Array<ExemptedPortalUserType>): void	{
		this.exemptedPortalUserTypes = exemptedPortalUserTypes;
		this.keyModified.set("exempted_portal_user_types", 1);

	}

	/**
	 * The method to get the parentWizard
	 * @returns An instance of Wizard
	 */
	public getParentWizard(): Wizard	{
		return this.parentWizard;

	}

	/**
	 * The method to set the value to parentWizard
	 * @param parentWizard An instance of Wizard
	 */
	public setParentWizard(parentWizard: Wizard): void	{
		this.parentWizard = parentWizard;
		this.keyModified.set("parent_wizard", 1);

	}

	/**
	 * The method to get the draft
	 * @returns A Boolean representing the draft
	 */
	public getDraft(): boolean	{
		return this.draft;

	}

	/**
	 * The method to set the value to draft
	 * @param draft A Boolean representing the draft
	 */
	public setDraft(draft: boolean): void	{
		this.draft = draft;
		this.keyModified.set("draft", 1);

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
	Wizard as MasterModel,
	Wizard as Wizard
}
