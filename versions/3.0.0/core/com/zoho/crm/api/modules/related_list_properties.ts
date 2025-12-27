import {MinifiedField} from "../fields/minified_field";
import {Model} from "../../../../../../utils/util/model";

class RelatedListProperties implements Model{

	private sortBy: MinifiedField;
	private fields: Array<string>;
	private sortOrder: string;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the sortBy
	 * @returns An instance of MinifiedField
	 */
	public getSortBy(): MinifiedField	{
		return this.sortBy;

	}

	/**
	 * The method to set the value to sortBy
	 * @param sortBy An instance of MinifiedField
	 */
	public setSortBy(sortBy: MinifiedField): void	{
		this.sortBy = sortBy;
		this.keyModified.set("sort_by", 1);

	}

	/**
	 * The method to get the fields
	 * @returns An Array representing the fields
	 */
	public getFields(): Array<string>	{
		return this.fields;

	}

	/**
	 * The method to set the value to fields
	 * @param fields An Array representing the fields
	 */
	public setFields(fields: Array<string>): void	{
		this.fields = fields;
		this.keyModified.set("fields", 1);

	}

	/**
	 * The method to get the sortOrder
	 * @returns A String representing the sortOrder
	 */
	public getSortOrder(): string	{
		return this.sortOrder;

	}

	/**
	 * The method to set the value to sortOrder
	 * @param sortOrder A String representing the sortOrder
	 */
	public setSortOrder(sortOrder: string): void	{
		this.sortOrder = sortOrder;
		this.keyModified.set("sort_order", 1);

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
	RelatedListProperties as MasterModel,
	RelatedListProperties as RelatedListProperties
}
