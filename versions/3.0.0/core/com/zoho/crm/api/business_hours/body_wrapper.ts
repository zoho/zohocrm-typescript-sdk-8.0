import {BusinessHours} from "./business_hours";
import {Model} from "../../../../../../utils/util/model";

class BodyWrapper implements Model{

	private businessHours: BusinessHours;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the businessHours
	 * @returns An instance of BusinessHours
	 */
	public getBusinessHours(): BusinessHours	{
		return this.businessHours;

	}

	/**
	 * The method to set the value to businessHours
	 * @param businessHours An instance of BusinessHours
	 */
	public setBusinessHours(businessHours: BusinessHours): void	{
		this.businessHours = businessHours;
		this.keyModified.set("business_hours", 1);

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
	BodyWrapper as MasterModel,
	BodyWrapper as BodyWrapper
}
