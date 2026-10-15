import {Fields} from "./fields";
import {Filters} from "./filters";
import {Layouts} from "./layouts";
import {Permissions} from "./permissions";
import {Views} from "./views";
import {Model} from "../../../../../../utils/util/model";

class Modules implements Model{

	private id: bigint;
	private pluralLabel: string;
	private sharedType: string;
	private apiName: string;
	private filters: Array<Filters>;
	private fields: Array<Fields>;
	private layouts: Array<Layouts>;
	private views: Views;
	private permissions: Permissions;
	private keyModified: Map<string, number> = new Map<string, number>();
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
	 * The method to get the pluralLabel
	 * @returns A String representing the pluralLabel
	 */
	public getPluralLabel(): string	{
		return this.pluralLabel;

	}

	/**
	 * The method to set the value to pluralLabel
	 * @param pluralLabel A String representing the pluralLabel
	 */
	public setPluralLabel(pluralLabel: string): void	{
		this.pluralLabel = pluralLabel;
		this.keyModified.set("plural_label", 1);

	}

	/**
	 * The method to get the sharedType
	 * @returns A String representing the sharedType
	 */
	public getSharedType(): string	{
		return this.sharedType;

	}

	/**
	 * The method to set the value to sharedType
	 * @param sharedType A String representing the sharedType
	 */
	public setSharedType(sharedType: string): void	{
		this.sharedType = sharedType;
		this.keyModified.set("shared_type", 1);

	}

	/**
	 * The method to get the apiName
	 * @returns A String representing the apiName
	 */
	public getAPIName(): string	{
		return this.apiName;

	}

	/**
	 * The method to set the value to apiName
	 * @param apiName A String representing the apiName
	 */
	public setAPIName(apiName: string): void	{
		this.apiName = apiName;
		this.keyModified.set("api_name", 1);

	}

	/**
	 * The method to get the filters
	 * @returns An Array representing the filters
	 */
	public getFilters(): Array<Filters>	{
		return this.filters;

	}

	/**
	 * The method to set the value to filters
	 * @param filters An Array representing the filters
	 */
	public setFilters(filters: Array<Filters>): void	{
		this.filters = filters;
		this.keyModified.set("filters", 1);

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
	 * The method to get the layouts
	 * @returns An Array representing the layouts
	 */
	public getLayouts(): Array<Layouts>	{
		return this.layouts;

	}

	/**
	 * The method to set the value to layouts
	 * @param layouts An Array representing the layouts
	 */
	public setLayouts(layouts: Array<Layouts>): void	{
		this.layouts = layouts;
		this.keyModified.set("layouts", 1);

	}

	/**
	 * The method to get the views
	 * @returns An instance of Views
	 */
	public getViews(): Views	{
		return this.views;

	}

	/**
	 * The method to set the value to views
	 * @param views An instance of Views
	 */
	public setViews(views: Views): void	{
		this.views = views;
		this.keyModified.set("views", 1);

	}

	/**
	 * The method to get the permissions
	 * @returns An instance of Permissions
	 */
	public getPermissions(): Permissions	{
		return this.permissions;

	}

	/**
	 * The method to set the value to permissions
	 * @param permissions An instance of Permissions
	 */
	public setPermissions(permissions: Permissions): void	{
		this.permissions = permissions;
		this.keyModified.set("permissions", 1);

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
	Modules as MasterModel,
	Modules as Modules
}
