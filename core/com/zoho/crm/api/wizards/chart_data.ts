import {ButtonBackground} from "./button_background";
import {Connection} from "./connection";
import {Node} from "./node";
import {Model} from "../../../../../../utils/util/model";

class ChartData implements Model{

	private nodes: Array<Node>;
	private connections: Array<Connection>;
	private colorPalette: ButtonBackground;
	private canvasWidth: number;
	private canvasHeight: number;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the nodes
	 * @returns An Array representing the nodes
	 */
	public getNodes(): Array<Node>	{
		return this.nodes;

	}

	/**
	 * The method to set the value to nodes
	 * @param nodes An Array representing the nodes
	 */
	public setNodes(nodes: Array<Node>): void	{
		this.nodes = nodes;
		this.keyModified.set("nodes", 1);

	}

	/**
	 * The method to get the connections
	 * @returns An Array representing the connections
	 */
	public getConnections(): Array<Connection>	{
		return this.connections;

	}

	/**
	 * The method to set the value to connections
	 * @param connections An Array representing the connections
	 */
	public setConnections(connections: Array<Connection>): void	{
		this.connections = connections;
		this.keyModified.set("connections", 1);

	}

	/**
	 * The method to get the colorPalette
	 * @returns An instance of ButtonBackground
	 */
	public getColorPalette(): ButtonBackground	{
		return this.colorPalette;

	}

	/**
	 * The method to set the value to colorPalette
	 * @param colorPalette An instance of ButtonBackground
	 */
	public setColorPalette(colorPalette: ButtonBackground): void	{
		this.colorPalette = colorPalette;
		this.keyModified.set("color_palette", 1);

	}

	/**
	 * The method to get the canvasWidth
	 * @returns A number representing the canvasWidth
	 */
	public getCanvasWidth(): number	{
		return this.canvasWidth;

	}

	/**
	 * The method to set the value to canvasWidth
	 * @param canvasWidth A number representing the canvasWidth
	 */
	public setCanvasWidth(canvasWidth: number): void	{
		this.canvasWidth = canvasWidth;
		this.keyModified.set("canvas_width", 1);

	}

	/**
	 * The method to get the canvasHeight
	 * @returns A number representing the canvasHeight
	 */
	public getCanvasHeight(): number	{
		return this.canvasHeight;

	}

	/**
	 * The method to set the value to canvasHeight
	 * @param canvasHeight A number representing the canvasHeight
	 */
	public setCanvasHeight(canvasHeight: number): void	{
		this.canvasHeight = canvasHeight;
		this.keyModified.set("canvas_height", 1);

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
	ChartData as MasterModel,
	ChartData as ChartData
}
