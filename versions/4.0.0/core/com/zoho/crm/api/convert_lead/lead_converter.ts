import {CarryOverTags} from "./carry_over_tags";
import {MoveAttachmentsTo} from "./move_attachments_to";
import {Record} from "../record/record";
import {MinifiedUser} from "../users/minified_user";
import {Choice} from "../../../../../../utils/util/choice";
import {Model} from "../../../../../../utils/util/model";

class LeadConverter implements Model{

	private overwrite: boolean;
	private notifyLeadOwner: boolean;
	private notifyNewEntityOwner: boolean;
	private moveAttachmentsTo: MoveAttachmentsTo;
	private accounts: Record;
	private contacts: Record;
	private assignTo: MinifiedUser;
	private deals: Record;
	private addToExistingRecord: Choice<boolean>;
	private carryOverTags: CarryOverTags;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the overwrite
	 * @returns A Boolean representing the overwrite
	 */
	public getOverwrite(): boolean	{
		return this.overwrite;

	}

	/**
	 * The method to set the value to overwrite
	 * @param overwrite A Boolean representing the overwrite
	 */
	public setOverwrite(overwrite: boolean): void	{
		this.overwrite = overwrite;
		this.keyModified.set("overwrite", 1);

	}

	/**
	 * The method to get the notifyLeadOwner
	 * @returns A Boolean representing the notifyLeadOwner
	 */
	public getNotifyLeadOwner(): boolean	{
		return this.notifyLeadOwner;

	}

	/**
	 * The method to set the value to notifyLeadOwner
	 * @param notifyLeadOwner A Boolean representing the notifyLeadOwner
	 */
	public setNotifyLeadOwner(notifyLeadOwner: boolean): void	{
		this.notifyLeadOwner = notifyLeadOwner;
		this.keyModified.set("notify_lead_owner", 1);

	}

	/**
	 * The method to get the notifyNewEntityOwner
	 * @returns A Boolean representing the notifyNewEntityOwner
	 */
	public getNotifyNewEntityOwner(): boolean	{
		return this.notifyNewEntityOwner;

	}

	/**
	 * The method to set the value to notifyNewEntityOwner
	 * @param notifyNewEntityOwner A Boolean representing the notifyNewEntityOwner
	 */
	public setNotifyNewEntityOwner(notifyNewEntityOwner: boolean): void	{
		this.notifyNewEntityOwner = notifyNewEntityOwner;
		this.keyModified.set("notify_new_entity_owner", 1);

	}

	/**
	 * The method to get the moveAttachmentsTo
	 * @returns An instance of MoveAttachmentsTo
	 */
	public getMoveAttachmentsTo(): MoveAttachmentsTo	{
		return this.moveAttachmentsTo;

	}

	/**
	 * The method to set the value to moveAttachmentsTo
	 * @param moveAttachmentsTo An instance of MoveAttachmentsTo
	 */
	public setMoveAttachmentsTo(moveAttachmentsTo: MoveAttachmentsTo): void	{
		this.moveAttachmentsTo = moveAttachmentsTo;
		this.keyModified.set("move_attachments_to", 1);

	}

	/**
	 * The method to get the accounts
	 * @returns An instance of Record
	 */
	public getAccounts(): Record	{
		return this.accounts;

	}

	/**
	 * The method to set the value to accounts
	 * @param accounts An instance of Record
	 */
	public setAccounts(accounts: Record): void	{
		this.accounts = accounts;
		this.keyModified.set("Accounts", 1);

	}

	/**
	 * The method to get the contacts
	 * @returns An instance of Record
	 */
	public getContacts(): Record	{
		return this.contacts;

	}

	/**
	 * The method to set the value to contacts
	 * @param contacts An instance of Record
	 */
	public setContacts(contacts: Record): void	{
		this.contacts = contacts;
		this.keyModified.set("Contacts", 1);

	}

	/**
	 * The method to get the assignTo
	 * @returns An instance of MinifiedUser
	 */
	public getAssignTo(): MinifiedUser	{
		return this.assignTo;

	}

	/**
	 * The method to set the value to assignTo
	 * @param assignTo An instance of MinifiedUser
	 */
	public setAssignTo(assignTo: MinifiedUser): void	{
		this.assignTo = assignTo;
		this.keyModified.set("assign_to", 1);

	}

	/**
	 * The method to get the deals
	 * @returns An instance of Record
	 */
	public getDeals(): Record	{
		return this.deals;

	}

	/**
	 * The method to set the value to deals
	 * @param deals An instance of Record
	 */
	public setDeals(deals: Record): void	{
		this.deals = deals;
		this.keyModified.set("Deals", 1);

	}

	/**
	 * The method to get the addToExistingRecord
	 * @returns An instance of Choice<boolean>
	 */
	public getAddToExistingRecord(): Choice<boolean>	{
		return this.addToExistingRecord;

	}

	/**
	 * The method to set the value to addToExistingRecord
	 * @param addToExistingRecord An instance of Choice<boolean>
	 */
	public setAddToExistingRecord(addToExistingRecord: Choice<boolean>): void	{
		this.addToExistingRecord = addToExistingRecord;
		this.keyModified.set("add_to_existing_record", 1);

	}

	/**
	 * The method to get the carryOverTags
	 * @returns An instance of CarryOverTags
	 */
	public getCarryOverTags(): CarryOverTags	{
		return this.carryOverTags;

	}

	/**
	 * The method to set the value to carryOverTags
	 * @param carryOverTags An instance of CarryOverTags
	 */
	public setCarryOverTags(carryOverTags: CarryOverTags): void	{
		this.carryOverTags = carryOverTags;
		this.keyModified.set("carry_over_tags", 1);

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
	LeadConverter as MasterModel,
	LeadConverter as LeadConverter
}
