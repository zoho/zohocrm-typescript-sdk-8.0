import {Record} from "../record/record";
import {LockedForS} from "./locked_for_s";
import {Tag} from "../tags/tag";
import {MinifiedUser} from "../users/minified_user";
import {Choice} from "../../../../../../utils/util/choice";
import {Model} from "../../../../../../utils/util/model";

class RecordLock extends Record implements Model{

	/**
	 * The method to get the lockSourceS
	 * @returns An instance of Choice<string>
	 */
	public getLockSourceS(): Choice<string>	{
		return this.getKeyValue("lock_source__s");

	}

	/**
	 * The method to set the value to lockSourceS
	 * @param lockSourceS An instance of Choice<string>
	 */
	public setLockSourceS(lockSourceS: Choice<string>): void	{
		this.addKeyValue("lock_source__s", lockSourceS);

	}

	/**
	 * The method to get the lockedByS
	 * @returns An instance of MinifiedUser
	 */
	public getLockedByS(): MinifiedUser	{
		return this.getKeyValue("locked_by__s");

	}

	/**
	 * The method to set the value to lockedByS
	 * @param lockedByS An instance of MinifiedUser
	 */
	public setLockedByS(lockedByS: MinifiedUser): void	{
		this.addKeyValue("locked_by__s", lockedByS);

	}

	/**
	 * The method to get the lockedForS
	 * @returns An instance of LockedForS
	 */
	public getLockedForS(): LockedForS	{
		return this.getKeyValue("locked_for_s");

	}

	/**
	 * The method to set the value to lockedForS
	 * @param lockedForS An instance of LockedForS
	 */
	public setLockedForS(lockedForS: LockedForS): void	{
		this.addKeyValue("locked_for_s", lockedForS);

	}

	/**
	 * The method to get the lockedReasonS
	 * @returns A String representing the lockedReasonS
	 */
	public getLockedReasonS(): string	{
		return this.getKeyValue("locked_reason__s");

	}

	/**
	 * The method to set the value to lockedReasonS
	 * @param lockedReasonS A String representing the lockedReasonS
	 */
	public setLockedReasonS(lockedReasonS: string): void	{
		this.addKeyValue("locked_reason__s", lockedReasonS);

	}

	/**
	 * The method to get the lockedTimeS
	 * @returns A String representing the lockedTimeS
	 */
	public getLockedTimeS(): string	{
		return this.getKeyValue("Locked_time__s");

	}

	/**
	 * The method to set the value to lockedTimeS
	 * @param lockedTimeS A String representing the lockedTimeS
	 */
	public setLockedTimeS(lockedTimeS: string): void	{
		this.addKeyValue("Locked_time__s", lockedTimeS);

	}

	/**
	 * The method to get the recordLockingConfigurationIdS
	 * @returns A BigInt representing the recordLockingConfigurationIdS
	 */
	public getRecordLockingConfigurationIdS(): bigint	{
		return this.getKeyValue("record_locking_configuration_id__s");

	}

	/**
	 * The method to set the value to recordLockingConfigurationIdS
	 * @param recordLockingConfigurationIdS A BigInt representing the recordLockingConfigurationIdS
	 */
	public setRecordLockingConfigurationIdS(recordLockingConfigurationIdS: bigint): void	{
		this.addKeyValue("record_locking_configuration_id__s", recordLockingConfigurationIdS);

	}

	/**
	 * The method to get the recordLockingRuleIdS
	 * @returns A BigInt representing the recordLockingRuleIdS
	 */
	public getRecordLockingRuleIdS(): bigint	{
		return this.getKeyValue("record_locking_rule_id__s");

	}

	/**
	 * The method to set the value to recordLockingRuleIdS
	 * @param recordLockingRuleIdS A BigInt representing the recordLockingRuleIdS
	 */
	public setRecordLockingRuleIdS(recordLockingRuleIdS: bigint): void	{
		this.addKeyValue("record_locking_rule_id__s", recordLockingRuleIdS);

	}

	/**
	 * The method to get the id
	 * @returns A BigInt representing the id
	 */
	public getId(): bigint	{
		return this.getKeyValue("id");

	}

	/**
	 * The method to set the value to id
	 * @param id A BigInt representing the id
	 */
	public setId(id: bigint): void	{
		this.addKeyValue("id", id);

	}

	/**
	 * The method to get the createdBy
	 * @returns An instance of MinifiedUser
	 */
	public getCreatedBy(): MinifiedUser	{
		return this.getKeyValue("Created_By");

	}

	/**
	 * The method to set the value to createdBy
	 * @param createdBy An instance of MinifiedUser
	 */
	public setCreatedBy(createdBy: MinifiedUser): void	{
		this.addKeyValue("Created_By", createdBy);

	}

	/**
	 * The method to get the createdTime
	 * @returns An instance of Date
	 */
	public getCreatedTime(): Date	{
		return this.getKeyValue("Created_Time");

	}

	/**
	 * The method to set the value to createdTime
	 * @param createdTime An instance of Date
	 */
	public setCreatedTime(createdTime: Date): void	{
		this.addKeyValue("Created_Time", createdTime);

	}

	/**
	 * The method to get the modifiedBy
	 * @returns An instance of MinifiedUser
	 */
	public getModifiedBy(): MinifiedUser	{
		return this.getKeyValue("Modified_By");

	}

	/**
	 * The method to set the value to modifiedBy
	 * @param modifiedBy An instance of MinifiedUser
	 */
	public setModifiedBy(modifiedBy: MinifiedUser): void	{
		this.addKeyValue("Modified_By", modifiedBy);

	}

	/**
	 * The method to get the modifiedTime
	 * @returns An instance of Date
	 */
	public getModifiedTime(): Date	{
		return this.getKeyValue("Modified_Time");

	}

	/**
	 * The method to set the value to modifiedTime
	 * @param modifiedTime An instance of Date
	 */
	public setModifiedTime(modifiedTime: Date): void	{
		this.addKeyValue("Modified_Time", modifiedTime);

	}

	/**
	 * The method to get the tag
	 * @returns An Array representing the tag
	 */
	public getTag(): Array<Tag>	{
		return this.getKeyValue("Tag");

	}

	/**
	 * The method to set the value to tag
	 * @param tag An Array representing the tag
	 */
	public setTag(tag: Array<Tag>): void	{
		this.addKeyValue("Tag", tag);

	}

	/**
	 * The method to get the name
	 * @returns A String representing the name
	 */
	public getName(): string	{
		return this.getKeyValue("name");

	}

	/**
	 * The method to set the value to name
	 * @param name A String representing the name
	 */
	public setName(name: string): void	{
		this.addKeyValue("name", name);

	}

}
export {
	RecordLock as MasterModel,
	RecordLock as RecordLock
}
