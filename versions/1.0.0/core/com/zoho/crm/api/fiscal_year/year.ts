import {Choice} from "../../../../../../utils/util/choice";
import {Model} from "../../../../../../utils/util/model";

class Year implements Model{

	private startMonth: Choice<string>;
	private displayBasedOn: Choice<string>;
	private id: bigint;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the startMonth
	 * @returns An instance of Choice<string>
	 */
	public getStartMonth(): Choice<string>	{
		return this.startMonth;

	}

	/**
	 * The method to set the value to startMonth
	 * @param startMonth An instance of Choice<string>
	 */
	public setStartMonth(startMonth: Choice<string>): void	{
		this.startMonth = startMonth;
		this.keyModified.set("start_month", 1);

	}

	/**
	 * The method to get the displayBasedOn
	 * @returns An instance of Choice<string>
	 */
	public getDisplayBasedOn(): Choice<string>	{
		return this.displayBasedOn;

	}

	/**
	 * The method to set the value to displayBasedOn
	 * @param displayBasedOn An instance of Choice<string>
	 */
	public setDisplayBasedOn(displayBasedOn: Choice<string>): void	{
		this.displayBasedOn = displayBasedOn;
		this.keyModified.set("display_based_on", 1);

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
	Year as MasterModel,
	Year as Year
}
