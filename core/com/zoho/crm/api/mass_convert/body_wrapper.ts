import {AssignTo} from "./assign_to";
import {MoveAttachmentsTo} from "./move_attachments_to";
import {PortalUserType} from "./portal_user_type";
import {RelatedModule} from "./related_module";
import {Record} from "../record/record";
import {Model} from "../../../../../../utils/util/model";

class BodyWrapper implements Model{

	private deals: Record;
	private moveAttachmentsTo: MoveAttachmentsTo;
	private assignTo: AssignTo;
	private carryOverTags: Array<MoveAttachmentsTo>;
	private relatedModules: Array<RelatedModule>;
	private portalUserType: PortalUserType;
	private ids: Array<bigint>;
	private applyAssignmentThreshold: boolean;
	private keyModified: Map<string, number> = new Map<string, number>();
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
	 * The method to get the assignTo
	 * @returns An instance of AssignTo
	 */
	public getAssignTo(): AssignTo	{
		return this.assignTo;

	}

	/**
	 * The method to set the value to assignTo
	 * @param assignTo An instance of AssignTo
	 */
	public setAssignTo(assignTo: AssignTo): void	{
		this.assignTo = assignTo;
		this.keyModified.set("assign_to", 1);

	}

	/**
	 * The method to get the carryOverTags
	 * @returns An Array representing the carryOverTags
	 */
	public getCarryOverTags(): Array<MoveAttachmentsTo>	{
		return this.carryOverTags;

	}

	/**
	 * The method to set the value to carryOverTags
	 * @param carryOverTags An Array representing the carryOverTags
	 */
	public setCarryOverTags(carryOverTags: Array<MoveAttachmentsTo>): void	{
		this.carryOverTags = carryOverTags;
		this.keyModified.set("carry_over_tags", 1);

	}

	/**
	 * The method to get the relatedModules
	 * @returns An Array representing the relatedModules
	 */
	public getRelatedModules(): Array<RelatedModule>	{
		return this.relatedModules;

	}

	/**
	 * The method to set the value to relatedModules
	 * @param relatedModules An Array representing the relatedModules
	 */
	public setRelatedModules(relatedModules: Array<RelatedModule>): void	{
		this.relatedModules = relatedModules;
		this.keyModified.set("related_modules", 1);

	}

	/**
	 * The method to get the portalUserType
	 * @returns An instance of PortalUserType
	 */
	public getPortalUserType(): PortalUserType	{
		return this.portalUserType;

	}

	/**
	 * The method to set the value to portalUserType
	 * @param portalUserType An instance of PortalUserType
	 */
	public setPortalUserType(portalUserType: PortalUserType): void	{
		this.portalUserType = portalUserType;
		this.keyModified.set("portal_user_type", 1);

	}

	/**
	 * The method to get the ids
	 * @returns An Array representing the ids
	 */
	public getIds(): Array<bigint>	{
		return this.ids;

	}

	/**
	 * The method to set the value to ids
	 * @param ids An Array representing the ids
	 */
	public setIds(ids: Array<bigint>): void	{
		this.ids = ids;
		this.keyModified.set("ids", 1);

	}

	/**
	 * The method to get the applyAssignmentThreshold
	 * @returns A Boolean representing the applyAssignmentThreshold
	 */
	public getApplyAssignmentThreshold(): boolean	{
		return this.applyAssignmentThreshold;

	}

	/**
	 * The method to set the value to applyAssignmentThreshold
	 * @param applyAssignmentThreshold A Boolean representing the applyAssignmentThreshold
	 */
	public setApplyAssignmentThreshold(applyAssignmentThreshold: boolean): void	{
		this.applyAssignmentThreshold = applyAssignmentThreshold;
		this.keyModified.set("apply_assignment_threshold", 1);

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
	BodyWrapper as MasterModel,
	BodyWrapper as BodyWrapper
}
