import {QueryDetails} from "./query_details";
import {ShowFields} from "./show_fields";
import {MinifiedModule} from "../modules/minified_module";
import {Model} from "../../../../../../utils/util/model";

class Lookup implements Model{

	protected displayLabel: string;
	protected apiName: string;
	protected queryDetails: QueryDetails;
	protected module: MinifiedModule;
	protected id: bigint;
	protected revalidateFilterDuringEdit: boolean;
	protected showFields: Array<ShowFields>;
	protected keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the displayLabel
	 * @returns A String representing the displayLabel
	 */
	public getDisplayLabel(): string	{
		return this.displayLabel;

	}

	/**
	 * The method to set the value to displayLabel
	 * @param displayLabel A String representing the displayLabel
	 */
	public setDisplayLabel(displayLabel: string): void	{
		this.displayLabel = displayLabel;
		this.keyModified.set("display_label", 1);

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
	 * The method to get the queryDetails
	 * @returns An instance of QueryDetails
	 */
	public getQueryDetails(): QueryDetails	{
		return this.queryDetails;

	}

	/**
	 * The method to set the value to queryDetails
	 * @param queryDetails An instance of QueryDetails
	 */
	public setQueryDetails(queryDetails: QueryDetails): void	{
		this.queryDetails = queryDetails;
		this.keyModified.set("query_details", 1);

	}

	/**
	 * The method to get the module
	 * @returns An instance of MinifiedModule
	 */
	public getModule(): MinifiedModule	{
		return this.module;

	}

	/**
	 * The method to set the value to module
	 * @param module An instance of MinifiedModule
	 */
	public setModule(module: MinifiedModule): void	{
		this.module = module;
		this.keyModified.set("module", 1);

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
	 * The method to get the revalidateFilterDuringEdit
	 * @returns A Boolean representing the revalidateFilterDuringEdit
	 */
	public getRevalidateFilterDuringEdit(): boolean	{
		return this.revalidateFilterDuringEdit;

	}

	/**
	 * The method to set the value to revalidateFilterDuringEdit
	 * @param revalidateFilterDuringEdit A Boolean representing the revalidateFilterDuringEdit
	 */
	public setRevalidateFilterDuringEdit(revalidateFilterDuringEdit: boolean): void	{
		this.revalidateFilterDuringEdit = revalidateFilterDuringEdit;
		this.keyModified.set("revalidate_filter_during_edit", 1);

	}

	/**
	 * The method to get the showFields
	 * @returns An Array representing the showFields
	 */
	public getShowFields(): Array<ShowFields>	{
		return this.showFields;

	}

	/**
	 * The method to set the value to showFields
	 * @param showFields An Array representing the showFields
	 */
	public setShowFields(showFields: Array<ShowFields>): void	{
		this.showFields = showFields;
		this.keyModified.set("show_fields", 1);

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
	Lookup as MasterModel,
	Lookup as Lookup
}
