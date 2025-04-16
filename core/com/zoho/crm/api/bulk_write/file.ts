import {Choice} from "../../../../../../utils/util/choice";
import {Model} from "../../../../../../utils/util/model";

class File implements Model{

	private status: Choice<string>;
	private name: string;
	private addedCount: number;
	private skippedCount: number;
	private updatedCount: number;
	private totalCount: number;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the status
	 * @returns An instance of Choice<string>
	 */
	public getStatus(): Choice<string>	{
		return this.status;

	}

	/**
	 * The method to set the value to status
	 * @param status An instance of Choice<string>
	 */
	public setStatus(status: Choice<string>): void	{
		this.status = status;
		this.keyModified.set("status", 1);

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
	 * The method to get the addedCount
	 * @returns A number representing the addedCount
	 */
	public getAddedCount(): number	{
		return this.addedCount;

	}

	/**
	 * The method to set the value to addedCount
	 * @param addedCount A number representing the addedCount
	 */
	public setAddedCount(addedCount: number): void	{
		this.addedCount = addedCount;
		this.keyModified.set("added_count", 1);

	}

	/**
	 * The method to get the skippedCount
	 * @returns A number representing the skippedCount
	 */
	public getSkippedCount(): number	{
		return this.skippedCount;

	}

	/**
	 * The method to set the value to skippedCount
	 * @param skippedCount A number representing the skippedCount
	 */
	public setSkippedCount(skippedCount: number): void	{
		this.skippedCount = skippedCount;
		this.keyModified.set("skipped_count", 1);

	}

	/**
	 * The method to get the updatedCount
	 * @returns A number representing the updatedCount
	 */
	public getUpdatedCount(): number	{
		return this.updatedCount;

	}

	/**
	 * The method to set the value to updatedCount
	 * @param updatedCount A number representing the updatedCount
	 */
	public setUpdatedCount(updatedCount: number): void	{
		this.updatedCount = updatedCount;
		this.keyModified.set("updated_count", 1);

	}

	/**
	 * The method to get the totalCount
	 * @returns A number representing the totalCount
	 */
	public getTotalCount(): number	{
		return this.totalCount;

	}

	/**
	 * The method to set the value to totalCount
	 * @param totalCount A number representing the totalCount
	 */
	public setTotalCount(totalCount: number): void	{
		this.totalCount = totalCount;
		this.keyModified.set("total_count", 1);

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
	File as MasterModel,
	File as File
}
