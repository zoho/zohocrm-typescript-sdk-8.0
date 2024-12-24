import {ParentId} from "./parent_id";
import {MinifiedUser} from "../users/minified_user";
import {Model} from "../../../../../../utils/util/model";

class Attachment implements Model{

	private owner: MinifiedUser;
	private modifiedBy: MinifiedUser;
	private createdBy: MinifiedUser;
	private parentId: ParentId;
	private sharingPermission: string;
	private attachmentType: number;
	private id: bigint;
	private modifiedTime: Date;
	private createdTime: Date;
	private fileName: string;
	private size: string;
	private editable: boolean;
	private fileId: string;
	private type: string;
	private seModule: string;
	private state: string;
	private linkUrl: string;
	private keyModified: Map<string, number> = new Map<string, number>();
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
	 * The method to get the attachmentType
	 * @returns A number representing the attachmentType
	 */
	public getAttachmentType(): number	{
		return this.attachmentType;

	}

	/**
	 * The method to set the value to attachmentType
	 * @param attachmentType A number representing the attachmentType
	 */
	public setAttachmentType(attachmentType: number): void	{
		this.attachmentType = attachmentType;
		this.keyModified.set("$attachment_type", 1);

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
	 * The method to get the fileName
	 * @returns A String representing the fileName
	 */
	public getFileName(): string	{
		return this.fileName;

	}

	/**
	 * The method to set the value to fileName
	 * @param fileName A String representing the fileName
	 */
	public setFileName(fileName: string): void	{
		this.fileName = fileName;
		this.keyModified.set("File_Name", 1);

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
		this.keyModified.set("Size", 1);

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
	 * The method to get the fileId
	 * @returns A String representing the fileId
	 */
	public getFileId(): string	{
		return this.fileId;

	}

	/**
	 * The method to set the value to fileId
	 * @param fileId A String representing the fileId
	 */
	public setFileId(fileId: string): void	{
		this.fileId = fileId;
		this.keyModified.set("$file_id", 1);

	}

	/**
	 * The method to get the type
	 * @returns A String representing the type
	 */
	public getType(): string	{
		return this.type;

	}

	/**
	 * The method to set the value to type
	 * @param type A String representing the type
	 */
	public setType(type: string): void	{
		this.type = type;
		this.keyModified.set("$type", 1);

	}

	/**
	 * The method to get the seModule
	 * @returns A String representing the seModule
	 */
	public getSeModule(): string	{
		return this.seModule;

	}

	/**
	 * The method to set the value to seModule
	 * @param seModule A String representing the seModule
	 */
	public setSeModule(seModule: string): void	{
		this.seModule = seModule;
		this.keyModified.set("$se_module", 1);

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
	 * The method to get the linkUrl
	 * @returns A String representing the linkUrl
	 */
	public getLinkUrl(): string	{
		return this.linkUrl;

	}

	/**
	 * The method to set the value to linkUrl
	 * @param linkUrl A String representing the linkUrl
	 */
	public setLinkUrl(linkUrl: string): void	{
		this.linkUrl = linkUrl;
		this.keyModified.set("$link_url", 1);

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
	Attachment as MasterModel,
	Attachment as Attachment
}
