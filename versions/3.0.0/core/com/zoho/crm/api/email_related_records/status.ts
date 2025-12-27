import {Model} from "../../../../../../utils/util/model";

class Status implements Model{

	private firstOpen: Date;
	private count: string;
	private type: string;
	private lastOpen: Date;
	private bouncedTime: Date;
	private bouncedReason: string;
	private category: string;
	private subCategory: string;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the firstOpen
	 * @returns An instance of Date
	 */
	public getFirstOpen(): Date	{
		return this.firstOpen;

	}

	/**
	 * The method to set the value to firstOpen
	 * @param firstOpen An instance of Date
	 */
	public setFirstOpen(firstOpen: Date): void	{
		this.firstOpen = firstOpen;
		this.keyModified.set("first_open", 1);

	}

	/**
	 * The method to get the count
	 * @returns A String representing the count
	 */
	public getCount(): string	{
		return this.count;

	}

	/**
	 * The method to set the value to count
	 * @param count A String representing the count
	 */
	public setCount(count: string): void	{
		this.count = count;
		this.keyModified.set("count", 1);

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
	 * The method to get the lastOpen
	 * @returns An instance of Date
	 */
	public getLastOpen(): Date	{
		return this.lastOpen;

	}

	/**
	 * The method to set the value to lastOpen
	 * @param lastOpen An instance of Date
	 */
	public setLastOpen(lastOpen: Date): void	{
		this.lastOpen = lastOpen;
		this.keyModified.set("last_open", 1);

	}

	/**
	 * The method to get the bouncedTime
	 * @returns An instance of Date
	 */
	public getBouncedTime(): Date	{
		return this.bouncedTime;

	}

	/**
	 * The method to set the value to bouncedTime
	 * @param bouncedTime An instance of Date
	 */
	public setBouncedTime(bouncedTime: Date): void	{
		this.bouncedTime = bouncedTime;
		this.keyModified.set("bounced_time", 1);

	}

	/**
	 * The method to get the bouncedReason
	 * @returns A String representing the bouncedReason
	 */
	public getBouncedReason(): string	{
		return this.bouncedReason;

	}

	/**
	 * The method to set the value to bouncedReason
	 * @param bouncedReason A String representing the bouncedReason
	 */
	public setBouncedReason(bouncedReason: string): void	{
		this.bouncedReason = bouncedReason;
		this.keyModified.set("bounced_reason", 1);

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
	 * The method to get the subCategory
	 * @returns A String representing the subCategory
	 */
	public getSubCategory(): string	{
		return this.subCategory;

	}

	/**
	 * The method to set the value to subCategory
	 * @param subCategory A String representing the subCategory
	 */
	public setSubCategory(subCategory: string): void	{
		this.subCategory = subCategory;
		this.keyModified.set("sub_category", 1);

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
	Status as MasterModel,
	Status as Status
}
