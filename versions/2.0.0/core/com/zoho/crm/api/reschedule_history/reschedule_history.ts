import {AppointmentName} from "./appointment_name";
import {Approval} from "./approval";
import {User} from "./user";
import {Model} from "../../../../../../utils/util/model";

class RescheduleHistory implements Model{

	private currencySymbol: string;
	private rescheduledTo: Date;
	private reviewProcess: boolean;
	private rescheduleReason: string;
	private sharingPermission: string;
	private name: string;
	private modifiedBy: User;
	private review: boolean;
	private rescheduledBy: User;
	private state: string;
	private canvasId: string;
	private processFlow: boolean;
	private id: bigint;
	private rescheduledTime: Date;
	private ziaVisions: boolean;
	private approved: boolean;
	private modifiedTime: Date;
	private approval: Approval;
	private createdTime: Date;
	private rescheduledFrom: Date;
	private appointmentName: AppointmentName;
	private editable: boolean;
	private orchestration: boolean;
	private inMerge: boolean;
	private createdBy: User;
	private approvalState: string;
	private rescheduleNote: string;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the currencySymbol
	 * @returns A String representing the currencySymbol
	 */
	public getCurrencySymbol(): string	{
		return this.currencySymbol;

	}

	/**
	 * The method to set the value to currencySymbol
	 * @param currencySymbol A String representing the currencySymbol
	 */
	public setCurrencySymbol(currencySymbol: string): void	{
		this.currencySymbol = currencySymbol;
		this.keyModified.set("$currency_symbol", 1);

	}

	/**
	 * The method to get the rescheduledTo
	 * @returns An instance of Date
	 */
	public getRescheduledTo(): Date	{
		return this.rescheduledTo;

	}

	/**
	 * The method to set the value to rescheduledTo
	 * @param rescheduledTo An instance of Date
	 */
	public setRescheduledTo(rescheduledTo: Date): void	{
		this.rescheduledTo = rescheduledTo;
		this.keyModified.set("Rescheduled_To", 1);

	}

	/**
	 * The method to get the reviewProcess
	 * @returns A Boolean representing the reviewProcess
	 */
	public getReviewProcess(): boolean	{
		return this.reviewProcess;

	}

	/**
	 * The method to set the value to reviewProcess
	 * @param reviewProcess A Boolean representing the reviewProcess
	 */
	public setReviewProcess(reviewProcess: boolean): void	{
		this.reviewProcess = reviewProcess;
		this.keyModified.set("$review_process", 1);

	}

	/**
	 * The method to get the rescheduleReason
	 * @returns A String representing the rescheduleReason
	 */
	public getRescheduleReason(): string	{
		return this.rescheduleReason;

	}

	/**
	 * The method to set the value to rescheduleReason
	 * @param rescheduleReason A String representing the rescheduleReason
	 */
	public setRescheduleReason(rescheduleReason: string): void	{
		this.rescheduleReason = rescheduleReason;
		this.keyModified.set("Reschedule_Reason", 1);

	}

	/**
	 * The method to get the sharingPermission
	 * @returns A String representing the sharingPermission
	 */
	public getSharingPermission(): string	{
		return this.sharingPermission;

	}

	/**
	 * The method to set the value to sharingPermission
	 * @param sharingPermission A String representing the sharingPermission
	 */
	public setSharingPermission(sharingPermission: string): void	{
		this.sharingPermission = sharingPermission;
		this.keyModified.set("$sharing_permission", 1);

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
		this.keyModified.set("Name", 1);

	}

	/**
	 * The method to get the modifiedBy
	 * @returns An instance of User
	 */
	public getModifiedBy(): User	{
		return this.modifiedBy;

	}

	/**
	 * The method to set the value to modifiedBy
	 * @param modifiedBy An instance of User
	 */
	public setModifiedBy(modifiedBy: User): void	{
		this.modifiedBy = modifiedBy;
		this.keyModified.set("Modified_By", 1);

	}

	/**
	 * The method to get the review
	 * @returns A Boolean representing the review
	 */
	public getReview(): boolean	{
		return this.review;

	}

	/**
	 * The method to set the value to review
	 * @param review A Boolean representing the review
	 */
	public setReview(review: boolean): void	{
		this.review = review;
		this.keyModified.set("$review", 1);

	}

	/**
	 * The method to get the rescheduledBy
	 * @returns An instance of User
	 */
	public getRescheduledBy(): User	{
		return this.rescheduledBy;

	}

	/**
	 * The method to set the value to rescheduledBy
	 * @param rescheduledBy An instance of User
	 */
	public setRescheduledBy(rescheduledBy: User): void	{
		this.rescheduledBy = rescheduledBy;
		this.keyModified.set("Rescheduled_By", 1);

	}

	/**
	 * The method to get the state
	 * @returns A String representing the state
	 */
	public getState(): string	{
		return this.state;

	}

	/**
	 * The method to set the value to state
	 * @param state A String representing the state
	 */
	public setState(state: string): void	{
		this.state = state;
		this.keyModified.set("$state", 1);

	}

	/**
	 * The method to get the canvasId
	 * @returns A String representing the canvasId
	 */
	public getCanvasId(): string	{
		return this.canvasId;

	}

	/**
	 * The method to set the value to canvasId
	 * @param canvasId A String representing the canvasId
	 */
	public setCanvasId(canvasId: string): void	{
		this.canvasId = canvasId;
		this.keyModified.set("$canvas_id", 1);

	}

	/**
	 * The method to get the processFlow
	 * @returns A Boolean representing the processFlow
	 */
	public getProcessFlow(): boolean	{
		return this.processFlow;

	}

	/**
	 * The method to set the value to processFlow
	 * @param processFlow A Boolean representing the processFlow
	 */
	public setProcessFlow(processFlow: boolean): void	{
		this.processFlow = processFlow;
		this.keyModified.set("$process_flow", 1);

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
	 * The method to get the rescheduledTime
	 * @returns An instance of Date
	 */
	public getRescheduledTime(): Date	{
		return this.rescheduledTime;

	}

	/**
	 * The method to set the value to rescheduledTime
	 * @param rescheduledTime An instance of Date
	 */
	public setRescheduledTime(rescheduledTime: Date): void	{
		this.rescheduledTime = rescheduledTime;
		this.keyModified.set("Rescheduled_Time", 1);

	}

	/**
	 * The method to get the ziaVisions
	 * @returns A Boolean representing the ziaVisions
	 */
	public getZiaVisions(): boolean	{
		return this.ziaVisions;

	}

	/**
	 * The method to set the value to ziaVisions
	 * @param ziaVisions A Boolean representing the ziaVisions
	 */
	public setZiaVisions(ziaVisions: boolean): void	{
		this.ziaVisions = ziaVisions;
		this.keyModified.set("$zia_visions", 1);

	}

	/**
	 * The method to get the approved
	 * @returns A Boolean representing the approved
	 */
	public getApproved(): boolean	{
		return this.approved;

	}

	/**
	 * The method to set the value to approved
	 * @param approved A Boolean representing the approved
	 */
	public setApproved(approved: boolean): void	{
		this.approved = approved;
		this.keyModified.set("$approved", 1);

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
		this.keyModified.set("Modified_Time", 1);

	}

	/**
	 * The method to get the approval
	 * @returns An instance of Approval
	 */
	public getApproval(): Approval	{
		return this.approval;

	}

	/**
	 * The method to set the value to approval
	 * @param approval An instance of Approval
	 */
	public setApproval(approval: Approval): void	{
		this.approval = approval;
		this.keyModified.set("$approval", 1);

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
		this.keyModified.set("Created_Time", 1);

	}

	/**
	 * The method to get the rescheduledFrom
	 * @returns An instance of Date
	 */
	public getRescheduledFrom(): Date	{
		return this.rescheduledFrom;

	}

	/**
	 * The method to set the value to rescheduledFrom
	 * @param rescheduledFrom An instance of Date
	 */
	public setRescheduledFrom(rescheduledFrom: Date): void	{
		this.rescheduledFrom = rescheduledFrom;
		this.keyModified.set("Rescheduled_From", 1);

	}

	/**
	 * The method to get the appointmentName
	 * @returns An instance of AppointmentName
	 */
	public getAppointmentName(): AppointmentName	{
		return this.appointmentName;

	}

	/**
	 * The method to set the value to appointmentName
	 * @param appointmentName An instance of AppointmentName
	 */
	public setAppointmentName(appointmentName: AppointmentName): void	{
		this.appointmentName = appointmentName;
		this.keyModified.set("Appointment_Name", 1);

	}

	/**
	 * The method to get the editable
	 * @returns A Boolean representing the editable
	 */
	public getEditable(): boolean	{
		return this.editable;

	}

	/**
	 * The method to set the value to editable
	 * @param editable A Boolean representing the editable
	 */
	public setEditable(editable: boolean): void	{
		this.editable = editable;
		this.keyModified.set("$editable", 1);

	}

	/**
	 * The method to get the orchestration
	 * @returns A Boolean representing the orchestration
	 */
	public getOrchestration(): boolean	{
		return this.orchestration;

	}

	/**
	 * The method to set the value to orchestration
	 * @param orchestration A Boolean representing the orchestration
	 */
	public setOrchestration(orchestration: boolean): void	{
		this.orchestration = orchestration;
		this.keyModified.set("$orchestration", 1);

	}

	/**
	 * The method to get the inMerge
	 * @returns A Boolean representing the inMerge
	 */
	public getInMerge(): boolean	{
		return this.inMerge;

	}

	/**
	 * The method to set the value to inMerge
	 * @param inMerge A Boolean representing the inMerge
	 */
	public setInMerge(inMerge: boolean): void	{
		this.inMerge = inMerge;
		this.keyModified.set("$in_merge", 1);

	}

	/**
	 * The method to get the createdBy
	 * @returns An instance of User
	 */
	public getCreatedBy(): User	{
		return this.createdBy;

	}

	/**
	 * The method to set the value to createdBy
	 * @param createdBy An instance of User
	 */
	public setCreatedBy(createdBy: User): void	{
		this.createdBy = createdBy;
		this.keyModified.set("Created_By", 1);

	}

	/**
	 * The method to get the approvalState
	 * @returns A String representing the approvalState
	 */
	public getApprovalState(): string	{
		return this.approvalState;

	}

	/**
	 * The method to set the value to approvalState
	 * @param approvalState A String representing the approvalState
	 */
	public setApprovalState(approvalState: string): void	{
		this.approvalState = approvalState;
		this.keyModified.set("$approval_state", 1);

	}

	/**
	 * The method to get the rescheduleNote
	 * @returns A String representing the rescheduleNote
	 */
	public getRescheduleNote(): string	{
		return this.rescheduleNote;

	}

	/**
	 * The method to set the value to rescheduleNote
	 * @param rescheduleNote A String representing the rescheduleNote
	 */
	public setRescheduleNote(rescheduleNote: string): void	{
		this.rescheduleNote = rescheduleNote;
		this.keyModified.set("Reschedule_Note", 1);

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
	RescheduleHistory as MasterModel,
	RescheduleHistory as RescheduleHistory
}
