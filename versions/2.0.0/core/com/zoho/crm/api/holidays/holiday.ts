import {ShiftHour} from "./shift_hour";
import {Model} from "../../../../../../utils/util/model";

class Holiday implements Model{

	private year: number;
	private name: string;
	private date: Date;
	private type: string;
	private id: bigint;
	private shiftHour: ShiftHour;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the year
	 * @returns A number representing the year
	 */
	public getYear(): number	{
		return this.year;

	}

	/**
	 * The method to set the value to year
	 * @param year A number representing the year
	 */
	public setYear(year: number): void	{
		this.year = year;
		this.keyModified.set("year", 1);

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
	 * The method to get the date
	 * @returns An instance of Date
	 */
	public getDate(): Date	{
		return this.date;

	}

	/**
	 * The method to set the value to date
	 * @param date An instance of Date
	 */
	public setDate(date: Date): void	{
		this.date = date;
		this.keyModified.set("date", 1);

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
	 * The method to get the shiftHour
	 * @returns An instance of ShiftHour
	 */
	public getShiftHour(): ShiftHour	{
		return this.shiftHour;

	}

	/**
	 * The method to set the value to shiftHour
	 * @param shiftHour An instance of ShiftHour
	 */
	public setShiftHour(shiftHour: ShiftHour): void	{
		this.shiftHour = shiftHour;
		this.keyModified.set("shift_hour", 1);

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
	Holiday as MasterModel,
	Holiday as Holiday
}
