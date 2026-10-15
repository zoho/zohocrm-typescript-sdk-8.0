import {Model} from "../../../../../../utils/util/model";

class Info implements Model{

	private count: number;
	private page: number;
	private perPage: number;
	private moreRecords: boolean;
	private previousPageToken: string;
	private pageTokenExpiry: string;
	private nextPageToken: string;
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
	 * The method to get the page
	 * @returns A number representing the page
	 */
	public getPage(): number	{
		return this.page;

	}

	/**
	 * The method to set the value to page
	 * @param page A number representing the page
	 */
	public setPage(page: number): void	{
		this.page = page;
		this.keyModified.set("page", 1);

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
	 * The method to get the previousPageToken
	 * @returns A String representing the previousPageToken
	 */
	public getPreviousPageToken(): string	{
		return this.previousPageToken;

	}

	/**
	 * The method to set the value to previousPageToken
	 * @param previousPageToken A String representing the previousPageToken
	 */
	public setPreviousPageToken(previousPageToken: string): void	{
		this.previousPageToken = previousPageToken;
		this.keyModified.set("previous_page_token", 1);

	}

	/**
	 * The method to get the pageTokenExpiry
	 * @returns A String representing the pageTokenExpiry
	 */
	public getPageTokenExpiry(): string	{
		return this.pageTokenExpiry;

	}

	/**
	 * The method to set the value to pageTokenExpiry
	 * @param pageTokenExpiry A String representing the pageTokenExpiry
	 */
	public setPageTokenExpiry(pageTokenExpiry: string): void	{
		this.pageTokenExpiry = pageTokenExpiry;
		this.keyModified.set("page_token_expiry", 1);

	}

	/**
	 * The method to get the nextPageToken
	 * @returns A String representing the nextPageToken
	 */
	public getNextPageToken(): string	{
		return this.nextPageToken;

	}

	/**
	 * The method to set the value to nextPageToken
	 * @param nextPageToken A String representing the nextPageToken
	 */
	public setNextPageToken(nextPageToken: string): void	{
		this.nextPageToken = nextPageToken;
		this.keyModified.set("next_page_token", 1);

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
