import {Maps} from "./maps";
import {Model} from "../../../../../../utils/util/model";

class Pipeline implements Model{

	private displayValue: string;
	private default1: boolean;
	private maps: Array<Maps>;
	private actualValue: string;
	private id: bigint;
	private childAvailable: boolean;
	private parent: Pipeline;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the displayValue
	 * @returns A String representing the displayValue
	 */
	public getDisplayValue(): string	{
		return this.displayValue;

	}

	/**
	 * The method to set the value to displayValue
	 * @param displayValue A String representing the displayValue
	 */
	public setDisplayValue(displayValue: string): void	{
		this.displayValue = displayValue;
		this.keyModified.set("display_value", 1);

	}

	/**
	 * The method to get the default
	 * @returns A Boolean representing the default1
	 */
	public getDefault(): boolean	{
		return this.default1;

	}

	/**
	 * The method to set the value to default
	 * @param default1 A Boolean representing the default1
	 */
	public setDefault(default1: boolean): void	{
		this.default1 = default1;
		this.keyModified.set("default", 1);

	}

	/**
	 * The method to get the maps
	 * @returns An Array representing the maps
	 */
	public getMaps(): Array<Maps>	{
		return this.maps;

	}

	/**
	 * The method to set the value to maps
	 * @param maps An Array representing the maps
	 */
	public setMaps(maps: Array<Maps>): void	{
		this.maps = maps;
		this.keyModified.set("maps", 1);

	}

	/**
	 * The method to get the actualValue
	 * @returns A String representing the actualValue
	 */
	public getActualValue(): string	{
		return this.actualValue;

	}

	/**
	 * The method to set the value to actualValue
	 * @param actualValue A String representing the actualValue
	 */
	public setActualValue(actualValue: string): void	{
		this.actualValue = actualValue;
		this.keyModified.set("actual_value", 1);

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
	 * The method to get the childAvailable
	 * @returns A Boolean representing the childAvailable
	 */
	public getChildAvailable(): boolean	{
		return this.childAvailable;

	}

	/**
	 * The method to set the value to childAvailable
	 * @param childAvailable A Boolean representing the childAvailable
	 */
	public setChildAvailable(childAvailable: boolean): void	{
		this.childAvailable = childAvailable;
		this.keyModified.set("child_available", 1);

	}

	/**
	 * The method to get the parent
	 * @returns An instance of Pipeline
	 */
	public getParent(): Pipeline	{
		return this.parent;

	}

	/**
	 * The method to set the value to parent
	 * @param parent An instance of Pipeline
	 */
	public setParent(parent: Pipeline): void	{
		this.parent = parent;
		this.keyModified.set("parent", 1);

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
	Pipeline as MasterModel,
	Pipeline as Pipeline
}
