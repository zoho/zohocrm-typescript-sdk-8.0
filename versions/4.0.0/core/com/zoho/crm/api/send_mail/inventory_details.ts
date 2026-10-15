import {InventoryTemplate} from "./inventory_template";
import {Model} from "../../../../../../utils/util/model";

class InventoryDetails implements Model{

	private inventoryTemplate: InventoryTemplate;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the inventoryTemplate
	 * @returns An instance of InventoryTemplate
	 */
	public getInventoryTemplate(): InventoryTemplate	{
		return this.inventoryTemplate;

	}

	/**
	 * The method to set the value to inventoryTemplate
	 * @param inventoryTemplate An instance of InventoryTemplate
	 */
	public setInventoryTemplate(inventoryTemplate: InventoryTemplate): void	{
		this.inventoryTemplate = inventoryTemplate;
		this.keyModified.set("inventory_template", 1);

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
	InventoryDetails as MasterModel,
	InventoryDetails as InventoryDetails
}
