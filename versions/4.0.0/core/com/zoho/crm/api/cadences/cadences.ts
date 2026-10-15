import {CustomView} from "./custom_view";
import {ExecutionDetail} from "./execution_detail";
import {Module} from "./module";
import {Summary} from "./summary";
import {User} from "./user";
import {Model} from "../../../../../../utils/util/model";

class Cadences implements Model{

	private summary: Summary;
	private createdTime: string;
	private module: Module;
	private active: boolean;
	private executionDetails: ExecutionDetail;
	private published: boolean;
	private type: string;
	private createdBy: User;
	private modifiedTime: string;
	private name: string;
	private modifiedBy: User;
	private id: bigint;
	private customView: CustomView;
	private status: string;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the summary
	 * @returns An instance of Summary
	 */
	public getSummary(): Summary	{
		return this.summary;

	}

	/**
	 * The method to set the value to summary
	 * @param summary An instance of Summary
	 */
	public setSummary(summary: Summary): void	{
		this.summary = summary;
		this.keyModified.set("summary", 1);

	}

	/**
	 * The method to get the createdTime
	 * @returns A String representing the createdTime
	 */
	public getCreatedTime(): string	{
		return this.createdTime;

	}

	/**
	 * The method to set the value to createdTime
	 * @param createdTime A String representing the createdTime
	 */
	public setCreatedTime(createdTime: string): void	{
		this.createdTime = createdTime;
		this.keyModified.set("created_time", 1);

	}

	/**
	 * The method to get the module
	 * @returns An instance of Module
	 */
	public getModule(): Module	{
		return this.module;

	}

	/**
	 * The method to set the value to module
	 * @param module An instance of Module
	 */
	public setModule(module: Module): void	{
		this.module = module;
		this.keyModified.set("module", 1);

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
	 * The method to get the executionDetails
	 * @returns An instance of ExecutionDetail
	 */
	public getExecutionDetails(): ExecutionDetail	{
		return this.executionDetails;

	}

	/**
	 * The method to set the value to executionDetails
	 * @param executionDetails An instance of ExecutionDetail
	 */
	public setExecutionDetails(executionDetails: ExecutionDetail): void	{
		this.executionDetails = executionDetails;
		this.keyModified.set("execution_details", 1);

	}

	/**
	 * The method to get the published
	 * @returns A Boolean representing the published
	 */
	public getPublished(): boolean	{
		return this.published;

	}

	/**
	 * The method to set the value to published
	 * @param published A Boolean representing the published
	 */
	public setPublished(published: boolean): void	{
		this.published = published;
		this.keyModified.set("published", 1);

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
		this.keyModified.set("type", 1);

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
	 * The method to get the modifiedTime
	 * @returns A String representing the modifiedTime
	 */
	public getModifiedTime(): string	{
		return this.modifiedTime;

	}

	/**
	 * The method to set the value to modifiedTime
	 * @param modifiedTime A String representing the modifiedTime
	 */
	public setModifiedTime(modifiedTime: string): void	{
		this.modifiedTime = modifiedTime;
		this.keyModified.set("modified_time", 1);

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
	 * The method to get the customView
	 * @returns An instance of CustomView
	 */
	public getCustomView(): CustomView	{
		return this.customView;

	}

	/**
	 * The method to set the value to customView
	 * @param customView An instance of CustomView
	 */
	public setCustomView(customView: CustomView): void	{
		this.customView = customView;
		this.keyModified.set("custom_view", 1);

	}

	/**
	 * The method to get the status
	 * @returns A String representing the status
	 */
	public getStatus(): string	{
		return this.status;

	}

	/**
	 * The method to set the value to status
	 * @param status A String representing the status
	 */
	public setStatus(status: string): void	{
		this.status = status;
		this.keyModified.set("status", 1);

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
	Cadences as MasterModel,
	Cadences as Cadences
}
