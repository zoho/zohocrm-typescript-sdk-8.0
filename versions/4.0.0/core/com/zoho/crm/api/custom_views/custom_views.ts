import {Criteria} from "./criteria";
import {Fields} from "./fields";
import {Owner} from "./owner";
import {SharedTo} from "./shared_to";
import {SortBy} from "./sort_by";
import {Choice} from "../../../../../../utils/util/choice";
import {Model} from "../../../../../../utils/util/model";

class CustomViews implements Model{

	private displayValue: string;
	private systemName: string;
	private category: string;
	private createdTime: Date;
	private modifiedTime: Date;
	private lastAccessedTime: Date;
	private name: string;
	private createdBy: Owner;
	private modifiedBy: Owner;
	private module: Owner;
	private criteria: Criteria;
	private default1: boolean;
	private systemDefined: boolean;
	private locked: boolean;
	private favorite: number;
	private offline: boolean;
	private accessType: Choice<string>;
	private sharedTo: Array<SharedTo>;
	private fields: Array<Fields>;
	private sortBy: SortBy;
	private sortOrder: Choice<string>;
	private id: bigint;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the displayValue
	 * @returns A String representing the displayValue
	 */
	public getDisplayValue(): string	{
		return this.displayValue;

	}

	/**
	 * The method to set the value to displayValue
	 * @param displayValue A String representing the displayValue
	 */
	public setDisplayValue(displayValue: string): void	{
		this.displayValue = displayValue;
		this.keyModified.set("display_value", 1);

	}

	/**
	 * The method to get the systemName
	 * @returns A String representing the systemName
	 */
	public getSystemName(): string	{
		return this.systemName;

	}

	/**
	 * The method to set the value to systemName
	 * @param systemName A String representing the systemName
	 */
	public setSystemName(systemName: string): void	{
		this.systemName = systemName;
		this.keyModified.set("system_name", 1);

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
	 * The method to get the lastAccessedTime
	 * @returns An instance of Date
	 */
	public getLastAccessedTime(): Date	{
		return this.lastAccessedTime;

	}

	/**
	 * The method to set the value to lastAccessedTime
	 * @param lastAccessedTime An instance of Date
	 */
	public setLastAccessedTime(lastAccessedTime: Date): void	{
		this.lastAccessedTime = lastAccessedTime;
		this.keyModified.set("last_accessed_time", 1);

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
	 * The method to get the createdBy
	 * @returns An instance of Owner
	 */
	public getCreatedBy(): Owner	{
		return this.createdBy;

	}

	/**
	 * The method to set the value to createdBy
	 * @param createdBy An instance of Owner
	 */
	public setCreatedBy(createdBy: Owner): void	{
		this.createdBy = createdBy;
		this.keyModified.set("created_by", 1);

	}

	/**
	 * The method to get the modifiedBy
	 * @returns An instance of Owner
	 */
	public getModifiedBy(): Owner	{
		return this.modifiedBy;

	}

	/**
	 * The method to set the value to modifiedBy
	 * @param modifiedBy An instance of Owner
	 */
	public setModifiedBy(modifiedBy: Owner): void	{
		this.modifiedBy = modifiedBy;
		this.keyModified.set("modified_by", 1);

	}

	/**
	 * The method to get the module
	 * @returns An instance of Owner
	 */
	public getModule(): Owner	{
		return this.module;

	}

	/**
	 * The method to set the value to module
	 * @param module An instance of Owner
	 */
	public setModule(module: Owner): void	{
		this.module = module;
		this.keyModified.set("module", 1);

	}

	/**
	 * The method to get the criteria
	 * @returns An instance of Criteria
	 */
	public getCriteria(): Criteria	{
		return this.criteria;

	}

	/**
	 * The method to set the value to criteria
	 * @param criteria An instance of Criteria
	 */
	public setCriteria(criteria: Criteria): void	{
		this.criteria = criteria;
		this.keyModified.set("criteria", 1);

	}

	/**
	 * The method to get the default
	 * @returns A Boolean representing the default1
	 */
	public getDefault(): boolean	{
		return this.default1;

	}

	/**
	 * The method to set the value to default
	 * @param default1 A Boolean representing the default1
	 */
	public setDefault(default1: boolean): void	{
		this.default1 = default1;
		this.keyModified.set("default", 1);

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
	 * The method to get the locked
	 * @returns A Boolean representing the locked
	 */
	public getLocked(): boolean	{
		return this.locked;

	}

	/**
	 * The method to set the value to locked
	 * @param locked A Boolean representing the locked
	 */
	public setLocked(locked: boolean): void	{
		this.locked = locked;
		this.keyModified.set("locked", 1);

	}

	/**
	 * The method to get the favorite
	 * @returns A number representing the favorite
	 */
	public getFavorite(): number	{
		return this.favorite;

	}

	/**
	 * The method to set the value to favorite
	 * @param favorite A number representing the favorite
	 */
	public setFavorite(favorite: number): void	{
		this.favorite = favorite;
		this.keyModified.set("favorite", 1);

	}

	/**
	 * The method to get the offline
	 * @returns A Boolean representing the offline
	 */
	public getOffline(): boolean	{
		return this.offline;

	}

	/**
	 * The method to set the value to offline
	 * @param offline A Boolean representing the offline
	 */
	public setOffline(offline: boolean): void	{
		this.offline = offline;
		this.keyModified.set("offline", 1);

	}

	/**
	 * The method to get the accessType
	 * @returns An instance of Choice<string>
	 */
	public getAccessType(): Choice<string>	{
		return this.accessType;

	}

	/**
	 * The method to set the value to accessType
	 * @param accessType An instance of Choice<string>
	 */
	public setAccessType(accessType: Choice<string>): void	{
		this.accessType = accessType;
		this.keyModified.set("access_type", 1);

	}

	/**
	 * The method to get the sharedTo
	 * @returns An Array representing the sharedTo
	 */
	public getSharedTo(): Array<SharedTo>	{
		return this.sharedTo;

	}

	/**
	 * The method to set the value to sharedTo
	 * @param sharedTo An Array representing the sharedTo
	 */
	public setSharedTo(sharedTo: Array<SharedTo>): void	{
		this.sharedTo = sharedTo;
		this.keyModified.set("shared_to", 1);

	}

	/**
	 * The method to get the fields
	 * @returns An Array representing the fields
	 */
	public getFields(): Array<Fields>	{
		return this.fields;

	}

	/**
	 * The method to set the value to fields
	 * @param fields An Array representing the fields
	 */
	public setFields(fields: Array<Fields>): void	{
		this.fields = fields;
		this.keyModified.set("fields", 1);

	}

	/**
	 * The method to get the sortBy
	 * @returns An instance of SortBy
	 */
	public getSortBy(): SortBy	{
		return this.sortBy;

	}

	/**
	 * The method to set the value to sortBy
	 * @param sortBy An instance of SortBy
	 */
	public setSortBy(sortBy: SortBy): void	{
		this.sortBy = sortBy;
		this.keyModified.set("sort_by", 1);

	}

	/**
	 * The method to get the sortOrder
	 * @returns An instance of Choice<string>
	 */
	public getSortOrder(): Choice<string>	{
		return this.sortOrder;

	}

	/**
	 * The method to set the value to sortOrder
	 * @param sortOrder An instance of Choice<string>
	 */
	public setSortOrder(sortOrder: Choice<string>): void	{
		this.sortOrder = sortOrder;
		this.keyModified.set("sort_order", 1);

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
	CustomViews as MasterModel,
	CustomViews as CustomViews
}
