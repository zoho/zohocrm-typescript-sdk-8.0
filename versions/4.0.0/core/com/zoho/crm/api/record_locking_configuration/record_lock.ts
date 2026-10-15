import {MinifiedField} from "../fields/minified_field";
import {LockExcludedProfile} from "./lock_excluded_profile";
import {LockingRules} from "./locking_rules";
import {RestrictedCustomButton} from "./restricted_custom_button";
import {MinifiedUser} from "../users/minified_user";
import {Choice} from "../../../../../../utils/util/choice";
import {Model} from "../../../../../../utils/util/model";

class RecordLock implements Model{

	private createdTime: Date;
	private lockedFor: string;
	private excludedFields: Array<MinifiedField>;
	private createdBy: MinifiedUser;
	private featureType: string;
	private lockingRules: Array<LockingRules>;
	private restrictedActions: Array<string>;
	private lockForPortalUsers: boolean;
	private modifiedTime: Date;
	private restrictedCommunications: Array<string>;
	private systemDefined: boolean;
	private modifiedBy: MinifiedUser;
	private id: bigint;
	private lockType: Choice<string>;
	private restrictedCustomButtons: Array<RestrictedCustomButton>;
	private lockExcludedProfiles: Array<LockExcludedProfile>;
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
	 * The method to get the lockedFor
	 * @returns A String representing the lockedFor
	 */
	public getLockedFor(): string	{
		return this.lockedFor;

	}

	/**
	 * The method to set the value to lockedFor
	 * @param lockedFor A String representing the lockedFor
	 */
	public setLockedFor(lockedFor: string): void	{
		this.lockedFor = lockedFor;
		this.keyModified.set("locked_for", 1);

	}

	/**
	 * The method to get the excludedFields
	 * @returns An Array representing the excludedFields
	 */
	public getExcludedFields(): Array<MinifiedField>	{
		return this.excludedFields;

	}

	/**
	 * The method to set the value to excludedFields
	 * @param excludedFields An Array representing the excludedFields
	 */
	public setExcludedFields(excludedFields: Array<MinifiedField>): void	{
		this.excludedFields = excludedFields;
		this.keyModified.set("excluded_fields", 1);

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
	 * The method to get the featureType
	 * @returns A String representing the featureType
	 */
	public getFeatureType(): string	{
		return this.featureType;

	}

	/**
	 * The method to set the value to featureType
	 * @param featureType A String representing the featureType
	 */
	public setFeatureType(featureType: string): void	{
		this.featureType = featureType;
		this.keyModified.set("feature_type", 1);

	}

	/**
	 * The method to get the lockingRules
	 * @returns An Array representing the lockingRules
	 */
	public getLockingRules(): Array<LockingRules>	{
		return this.lockingRules;

	}

	/**
	 * The method to set the value to lockingRules
	 * @param lockingRules An Array representing the lockingRules
	 */
	public setLockingRules(lockingRules: Array<LockingRules>): void	{
		this.lockingRules = lockingRules;
		this.keyModified.set("locking_rules", 1);

	}

	/**
	 * The method to get the restrictedActions
	 * @returns An Array representing the restrictedActions
	 */
	public getRestrictedActions(): Array<string>	{
		return this.restrictedActions;

	}

	/**
	 * The method to set the value to restrictedActions
	 * @param restrictedActions An Array representing the restrictedActions
	 */
	public setRestrictedActions(restrictedActions: Array<string>): void	{
		this.restrictedActions = restrictedActions;
		this.keyModified.set("restricted_actions", 1);

	}

	/**
	 * The method to get the lockForPortalUsers
	 * @returns A Boolean representing the lockForPortalUsers
	 */
	public getLockForPortalUsers(): boolean	{
		return this.lockForPortalUsers;

	}

	/**
	 * The method to set the value to lockForPortalUsers
	 * @param lockForPortalUsers A Boolean representing the lockForPortalUsers
	 */
	public setLockForPortalUsers(lockForPortalUsers: boolean): void	{
		this.lockForPortalUsers = lockForPortalUsers;
		this.keyModified.set("lock_for_portal_users", 1);

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
	 * The method to get the restrictedCommunications
	 * @returns An Array representing the restrictedCommunications
	 */
	public getRestrictedCommunications(): Array<string>	{
		return this.restrictedCommunications;

	}

	/**
	 * The method to set the value to restrictedCommunications
	 * @param restrictedCommunications An Array representing the restrictedCommunications
	 */
	public setRestrictedCommunications(restrictedCommunications: Array<string>): void	{
		this.restrictedCommunications = restrictedCommunications;
		this.keyModified.set("restricted_communications", 1);

	}

	/**
	 * The method to get the systemDefined
	 * @returns A Boolean representing the systemDefined
	 */
	public getSystemDefined(): boolean	{
		return this.systemDefined;

	}

	/**
	 * The method to set the value to systemDefined
	 * @param systemDefined A Boolean representing the systemDefined
	 */
	public setSystemDefined(systemDefined: boolean): void	{
		this.systemDefined = systemDefined;
		this.keyModified.set("system_defined", 1);

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
	 * The method to get the lockType
	 * @returns An instance of Choice<string>
	 */
	public getLockType(): Choice<string>	{
		return this.lockType;

	}

	/**
	 * The method to set the value to lockType
	 * @param lockType An instance of Choice<string>
	 */
	public setLockType(lockType: Choice<string>): void	{
		this.lockType = lockType;
		this.keyModified.set("lock_type", 1);

	}

	/**
	 * The method to get the restrictedCustomButtons
	 * @returns An Array representing the restrictedCustomButtons
	 */
	public getRestrictedCustomButtons(): Array<RestrictedCustomButton>	{
		return this.restrictedCustomButtons;

	}

	/**
	 * The method to set the value to restrictedCustomButtons
	 * @param restrictedCustomButtons An Array representing the restrictedCustomButtons
	 */
	public setRestrictedCustomButtons(restrictedCustomButtons: Array<RestrictedCustomButton>): void	{
		this.restrictedCustomButtons = restrictedCustomButtons;
		this.keyModified.set("restricted_custom_buttons", 1);

	}

	/**
	 * The method to get the lockExcludedProfiles
	 * @returns An Array representing the lockExcludedProfiles
	 */
	public getLockExcludedProfiles(): Array<LockExcludedProfile>	{
		return this.lockExcludedProfiles;

	}

	/**
	 * The method to set the value to lockExcludedProfiles
	 * @param lockExcludedProfiles An Array representing the lockExcludedProfiles
	 */
	public setLockExcludedProfiles(lockExcludedProfiles: Array<LockExcludedProfile>): void	{
		this.lockExcludedProfiles = lockExcludedProfiles;
		this.keyModified.set("lock_excluded_profiles", 1);

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
	RecordLock as MasterModel,
	RecordLock as RecordLock
}
