import {Folder} from "./folder";
import {ModuleMap} from "./module_map";
import {User} from "./user";
import {Template} from "../send_mail/template";
import {Model} from "../../../../../../utils/util/model";

class InventoryTemplates implements Model, Template{

	protected createdTime: Date;
	protected modifiedTime: Date;
	protected lastUsageTime: Date;
	protected folder: Folder;
	protected module: ModuleMap;
	protected createdBy: User;
	protected modifiedBy: User;
	protected name: string;
	protected id: bigint;
	protected editorMode: string;
	protected category: string;
	protected favorite: boolean;
	protected content: string;
	protected active: boolean;
	protected mailContent: string;
	protected keyModified: Map<string, number> = new Map<string, number>();
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
	 * The method to get the lastUsageTime
	 * @returns An instance of Date
	 */
	public getLastUsageTime(): Date	{
		return this.lastUsageTime;

	}

	/**
	 * The method to set the value to lastUsageTime
	 * @param lastUsageTime An instance of Date
	 */
	public setLastUsageTime(lastUsageTime: Date): void	{
		this.lastUsageTime = lastUsageTime;
		this.keyModified.set("last_usage_time", 1);

	}

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
	 * The method to get the module
	 * @returns An instance of ModuleMap
	 */
	public getModule(): ModuleMap	{
		return this.module;

	}

	/**
	 * The method to set the value to module
	 * @param module An instance of ModuleMap
	 */
	public setModule(module: ModuleMap): void	{
		this.module = module;
		this.keyModified.set("module", 1);

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
		this.keyModified.set("created_by", 1);

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
		this.keyModified.set("modified_by", 1);

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
	 * The method to get the editorMode
	 * @returns A String representing the editorMode
	 */
	public getEditorMode(): string	{
		return this.editorMode;

	}

	/**
	 * The method to set the value to editorMode
	 * @param editorMode A String representing the editorMode
	 */
	public setEditorMode(editorMode: string): void	{
		this.editorMode = editorMode;
		this.keyModified.set("editor_mode", 1);

	}

	/**
	 * The method to get the category
	 * @returns A String representing the category
	 */
	public getCategory(): string	{
		return this.category;

	}

	/**
	 * The method to set the value to category
	 * @param category A String representing the category
	 */
	public setCategory(category: string): void	{
		this.category = category;
		this.keyModified.set("category", 1);

	}

	/**
	 * The method to get the favorite
	 * @returns A Boolean representing the favorite
	 */
	public getFavorite(): boolean	{
		return this.favorite;

	}

	/**
	 * The method to set the value to favorite
	 * @param favorite A Boolean representing the favorite
	 */
	public setFavorite(favorite: boolean): void	{
		this.favorite = favorite;
		this.keyModified.set("favorite", 1);

	}

	/**
	 * The method to get the content
	 * @returns A String representing the content
	 */
	public getContent(): string	{
		return this.content;

	}

	/**
	 * The method to set the value to content
	 * @param content A String representing the content
	 */
	public setContent(content: string): void	{
		this.content = content;
		this.keyModified.set("content", 1);

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
	 * The method to get the mailContent
	 * @returns A String representing the mailContent
	 */
	public getMailContent(): string	{
		return this.mailContent;

	}

	/**
	 * The method to set the value to mailContent
	 * @param mailContent A String representing the mailContent
	 */
	public setMailContent(mailContent: string): void	{
		this.mailContent = mailContent;
		this.keyModified.set("mail_content", 1);

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
	InventoryTemplates as MasterModel,
	InventoryTemplates as InventoryTemplates
}
