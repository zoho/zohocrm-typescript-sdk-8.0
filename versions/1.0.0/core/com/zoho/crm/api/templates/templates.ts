import {Folder} from "./folder";
import {Model} from "../../../../../../utils/util/model";

class Templates implements Model{

	private folder: Folder;
	private modifiedBy: Folder;
	private module: string;
	private modifiedTime: Date;
	private subject: string;
	private name: string;
	private consentLinked: boolean;
	private favourite: boolean;
	private attachmentPresent: boolean;
	private id: bigint;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the folder
	 * @returns An instance of Folder
	 */
	public getFolder(): Folder	{
		return this.folder;

	}

	/**
	 * The method to set the value to folder
	 * @param folder An instance of Folder
	 */
	public setFolder(folder: Folder): void	{
		this.folder = folder;
		this.keyModified.set("folder", 1);

	}

	/**
	 * The method to get the modifiedBy
	 * @returns An instance of Folder
	 */
	public getModifiedBy(): Folder	{
		return this.modifiedBy;

	}

	/**
	 * The method to set the value to modifiedBy
	 * @param modifiedBy An instance of Folder
	 */
	public setModifiedBy(modifiedBy: Folder): void	{
		this.modifiedBy = modifiedBy;
		this.keyModified.set("modified_by", 1);

	}

	/**
	 * The method to get the module
	 * @returns A String representing the module
	 */
	public getModule(): string	{
		return this.module;

	}

	/**
	 * The method to set the value to module
	 * @param module A String representing the module
	 */
	public setModule(module: string): void	{
		this.module = module;
		this.keyModified.set("module", 1);

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
	 * The method to get the subject
	 * @returns A String representing the subject
	 */
	public getSubject(): string	{
		return this.subject;

	}

	/**
	 * The method to set the value to subject
	 * @param subject A String representing the subject
	 */
	public setSubject(subject: string): void	{
		this.subject = subject;
		this.keyModified.set("subject", 1);

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
	 * The method to get the consentLinked
	 * @returns A Boolean representing the consentLinked
	 */
	public getConsentLinked(): boolean	{
		return this.consentLinked;

	}

	/**
	 * The method to set the value to consentLinked
	 * @param consentLinked A Boolean representing the consentLinked
	 */
	public setConsentLinked(consentLinked: boolean): void	{
		this.consentLinked = consentLinked;
		this.keyModified.set("consent_linked", 1);

	}

	/**
	 * The method to get the favourite
	 * @returns A Boolean representing the favourite
	 */
	public getFavourite(): boolean	{
		return this.favourite;

	}

	/**
	 * The method to set the value to favourite
	 * @param favourite A Boolean representing the favourite
	 */
	public setFavourite(favourite: boolean): void	{
		this.favourite = favourite;
		this.keyModified.set("favourite", 1);

	}

	/**
	 * The method to get the attachmentPresent
	 * @returns A Boolean representing the attachmentPresent
	 */
	public getAttachmentPresent(): boolean	{
		return this.attachmentPresent;

	}

	/**
	 * The method to set the value to attachmentPresent
	 * @param attachmentPresent A Boolean representing the attachmentPresent
	 */
	public setAttachmentPresent(attachmentPresent: boolean): void	{
		this.attachmentPresent = attachmentPresent;
		this.keyModified.set("attachment_present", 1);

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
	Templates as MasterModel,
	Templates as Templates
}
