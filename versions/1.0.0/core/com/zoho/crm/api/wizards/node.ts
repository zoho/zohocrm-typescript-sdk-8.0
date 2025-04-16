import {Screen} from "./screen";
import {Model} from "../../../../../../utils/util/model";

class Node implements Model{

	private posY: number;
	private posX: number;
	private startNode: boolean;
	private screen: Screen;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the posY
	 * @returns A number representing the posY
	 */
	public getPosY(): number	{
		return this.posY;

	}

	/**
	 * The method to set the value to posY
	 * @param posY A number representing the posY
	 */
	public setPosY(posY: number): void	{
		this.posY = posY;
		this.keyModified.set("pos_y", 1);

	}

	/**
	 * The method to get the posX
	 * @returns A number representing the posX
	 */
	public getPosX(): number	{
		return this.posX;

	}

	/**
	 * The method to set the value to posX
	 * @param posX A number representing the posX
	 */
	public setPosX(posX: number): void	{
		this.posX = posX;
		this.keyModified.set("pos_x", 1);

	}

	/**
	 * The method to get the startNode
	 * @returns A Boolean representing the startNode
	 */
	public getStartNode(): boolean	{
		return this.startNode;

	}

	/**
	 * The method to set the value to startNode
	 * @param startNode A Boolean representing the startNode
	 */
	public setStartNode(startNode: boolean): void	{
		this.startNode = startNode;
		this.keyModified.set("start_node", 1);

	}

	/**
	 * The method to get the screen
	 * @returns An instance of Screen
	 */
	public getScreen(): Screen	{
		return this.screen;

	}

	/**
	 * The method to set the value to screen
	 * @param screen An instance of Screen
	 */
	public setScreen(screen: Screen): void	{
		this.screen = screen;
		this.keyModified.set("screen", 1);

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
	Node as MasterModel,
	Node as Node
}
