import {Portals} from "./portals";
import {ResponseHandler} from "./response_handler";
import {Model} from "../../../../../../utils/util/model";

class ResponseWrapper implements Model, ResponseHandler{

	private portals: Array<Portals>;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the portals
	 * @returns An Array representing the portals
	 */
	public getPortals(): Array<Portals>	{
		return this.portals;

	}

	/**
	 * The method to set the value to portals
	 * @param portals An Array representing the portals
	 */
	public setPortals(portals: Array<Portals>): void	{
		this.portals = portals;
		this.keyModified.set("portals", 1);

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
	ResponseWrapper as MasterModel,
	ResponseWrapper as ResponseWrapper
}
