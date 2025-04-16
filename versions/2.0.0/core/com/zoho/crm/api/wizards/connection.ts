import {Button} from "./button";
import {Screen} from "./screen";
import {Model} from "../../../../../../utils/util/model";

class Connection implements Model{

	private sourceButton: Button;
	private targetScreen: Screen;
	private id: bigint;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the sourceButton
	 * @returns An instance of Button
	 */
	public getSourceButton(): Button	{
		return this.sourceButton;

	}

	/**
	 * The method to set the value to sourceButton
	 * @param sourceButton An instance of Button
	 */
	public setSourceButton(sourceButton: Button): void	{
		this.sourceButton = sourceButton;
		this.keyModified.set("source_button", 1);

	}

	/**
	 * The method to get the targetScreen
	 * @returns An instance of Screen
	 */
	public getTargetScreen(): Screen	{
		return this.targetScreen;

	}

	/**
	 * The method to set the value to targetScreen
	 * @param targetScreen An instance of Screen
	 */
	public setTargetScreen(targetScreen: Screen): void	{
		this.targetScreen = targetScreen;
		this.keyModified.set("target_screen", 1);

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
	Connection as MasterModel,
	Connection as Connection
}
