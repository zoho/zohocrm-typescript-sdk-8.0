import {Category} from "./category";
import {Model} from "../../../../../../utils/util/model";

class CategoryOthers implements Model, Category{

	private displayLabel: string;
	private permissionsDetails: Array<string>;
	private name: string;
	private keyModified: Map<string, number> = new Map<string, number>();
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
	 * The method to get the permissionsDetails
	 * @returns An Array representing the permissionsDetails
	 */
	public getPermissionsDetails(): Array<string>	{
		return this.permissionsDetails;

	}

	/**
	 * The method to set the value to permissionsDetails
	 * @param permissionsDetails An Array representing the permissionsDetails
	 */
	public setPermissionsDetails(permissionsDetails: Array<string>): void	{
		this.permissionsDetails = permissionsDetails;
		this.keyModified.set("permissions_details", 1);

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
	CategoryOthers as MasterModel,
	CategoryOthers as CategoryOthers
}
