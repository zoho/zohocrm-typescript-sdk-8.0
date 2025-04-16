import {Attachment} from "../attachments/attachment";
import {ParentId} from "./parent_id";
import {MinifiedUser} from "../users/minified_user";
import {Model} from "../../../../../../utils/util/model";

class Note implements Model{

	private modifiedTime: Date;
	private attachments: Array<Attachment>;
	private owner: MinifiedUser;
	private createdTime: Date;
	private parentId: ParentId;
	private editable: boolean;
	private isSharedToClient: boolean;
	private sharingPermission: string;
	private modifiedBy: MinifiedUser;
	private size: string;
	private state: string;
	private voiceNote: boolean;
	private id: bigint;
	private createdBy: MinifiedUser;
	private noteTitle: string;
	private noteContent: string;
	private keyModified: Map<string, number> = new Map<string, number>();
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
	 * The method to get the attachments
	 * @returns An Array representing the attachments
	 */
	public getAttachments(): Array<Attachment>	{
		return this.attachments;

	}

	/**
	 * The method to set the value to attachments
	 * @param attachments An Array representing the attachments
	 */
	public setAttachments(attachments: Array<Attachment>): void	{
		this.attachments = attachments;
		this.keyModified.set("$attachments", 1);

	}

	/**
	 * The method to get the owner
	 * @returns An instance of MinifiedUser
	 */
	public getOwner(): MinifiedUser	{
		return this.owner;

	}

	/**
	 * The method to set the value to owner
	 * @param owner An instance of MinifiedUser
	 */
	public setOwner(owner: MinifiedUser): void	{
		this.owner = owner;
		this.keyModified.set("Owner", 1);

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
	 * The method to get the parentId
	 * @returns An instance of ParentId
	 */
	public getParentId(): ParentId	{
		return this.parentId;

	}

	/**
	 * The method to set the value to parentId
	 * @param parentId An instance of ParentId
	 */
	public setParentId(parentId: ParentId): void	{
		this.parentId = parentId;
		this.keyModified.set("Parent_Id", 1);

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
	 * The method to get the isSharedToClient
	 * @returns A Boolean representing the isSharedToClient
	 */
	public getIsSharedToClient(): boolean	{
		return this.isSharedToClient;

	}

	/**
	 * The method to set the value to isSharedToClient
	 * @param isSharedToClient A Boolean representing the isSharedToClient
	 */
	public setIsSharedToClient(isSharedToClient: boolean): void	{
		this.isSharedToClient = isSharedToClient;
		this.keyModified.set("$is_shared_to_client", 1);

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
		this.keyModified.set("Modified_By", 1);

	}

	/**
	 * The method to get the size
	 * @returns A String representing the size
	 */
	public getSize(): string	{
		return this.size;

	}

	/**
	 * The method to set the value to size
	 * @param size A String representing the size
	 */
	public setSize(size: string): void	{
		this.size = size;
		this.keyModified.set("$size", 1);

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
	 * The method to get the voiceNote
	 * @returns A Boolean representing the voiceNote
	 */
	public getVoiceNote(): boolean	{
		return this.voiceNote;

	}

	/**
	 * The method to set the value to voiceNote
	 * @param voiceNote A Boolean representing the voiceNote
	 */
	public setVoiceNote(voiceNote: boolean): void	{
		this.voiceNote = voiceNote;
		this.keyModified.set("$voice_note", 1);

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
		this.keyModified.set("Created_By", 1);

	}

	/**
	 * The method to get the noteTitle
	 * @returns A String representing the noteTitle
	 */
	public getNoteTitle(): string	{
		return this.noteTitle;

	}

	/**
	 * The method to set the value to noteTitle
	 * @param noteTitle A String representing the noteTitle
	 */
	public setNoteTitle(noteTitle: string): void	{
		this.noteTitle = noteTitle;
		this.keyModified.set("Note_Title", 1);

	}

	/**
	 * The method to get the noteContent
	 * @returns A String representing the noteContent
	 */
	public getNoteContent(): string	{
		return this.noteContent;

	}

	/**
	 * The method to set the value to noteContent
	 * @param noteContent A String representing the noteContent
	 */
	public setNoteContent(noteContent: string): void	{
		this.noteContent = noteContent;
		this.keyModified.set("Note_Content", 1);

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
	Note as MasterModel,
	Note as Note
}
