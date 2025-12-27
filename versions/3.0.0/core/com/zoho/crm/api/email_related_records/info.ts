import {Model} from "../../../../../../utils/util/model";

class Info implements Model{

	private count: number;
	private nextIndex: string;
	private prevIndex: string;
	private perPage: number;
	private moreRecords: boolean;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the count
	 * @returns A number representing the count
	 */
	public getCount(): number	{
		return this.count;

	}

	/**
	 * The method to set the value to count
	 * @param count A number representing the count
	 */
	public setCount(count: number): void	{
		this.count = count;
		this.keyModified.set("count", 1);

	}

	/**
	 * The method to get the nextIndex
	 * @returns A String representing the nextIndex
	 */
	public getNextIndex(): string	{
		return this.nextIndex;

	}

	/**
	 * The method to set the value to nextIndex
	 * @param nextIndex A String representing the nextIndex
	 */
	public setNextIndex(nextIndex: string): void	{
		this.nextIndex = nextIndex;
		this.keyModified.set("next_index", 1);

	}

	/**
	 * The method to get the prevIndex
	 * @returns A String representing the prevIndex
	 */
	public getPrevIndex(): string	{
		return this.prevIndex;

	}

	/**
	 * The method to set the value to prevIndex
	 * @param prevIndex A String representing the prevIndex
	 */
	public setPrevIndex(prevIndex: string): void	{
		this.prevIndex = prevIndex;
		this.keyModified.set("prev_index", 1);

	}

	/**
	 * The method to get the perPage
	 * @returns A number representing the perPage
	 */
	public getPerPage(): number	{
		return this.perPage;

	}

	/**
	 * The method to set the value to perPage
	 * @param perPage A number representing the perPage
	 */
	public setPerPage(perPage: number): void	{
		this.perPage = perPage;
		this.keyModified.set("per_page", 1);

	}

	/**
	 * The method to get the moreRecords
	 * @returns A Boolean representing the moreRecords
	 */
	public getMoreRecords(): boolean	{
		return this.moreRecords;

	}

	/**
	 * The method to set the value to moreRecords
	 * @param moreRecords A Boolean representing the moreRecords
	 */
	public setMoreRecords(moreRecords: boolean): void	{
		this.moreRecords = moreRecords;
		this.keyModified.set("more_records", 1);

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
	Info as MasterModel,
	Info as Info
}
