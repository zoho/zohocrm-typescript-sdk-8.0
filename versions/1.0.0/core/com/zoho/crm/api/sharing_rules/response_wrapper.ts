import {Info} from "./info";
import {ResponseHandler} from "./response_handler";
import {SharingRules} from "./sharing_rules";
import {Model} from "../../../../../../utils/util/model";

class ResponseWrapper implements Model, ResponseHandler{

	private sharingRules: Array<SharingRules>;
	private info: Info;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the sharingRules
	 * @returns An Array representing the sharingRules
	 */
	public getSharingRules(): Array<SharingRules>	{
		return this.sharingRules;

	}

	/**
	 * The method to set the value to sharingRules
	 * @param sharingRules An Array representing the sharingRules
	 */
	public setSharingRules(sharingRules: Array<SharingRules>): void	{
		this.sharingRules = sharingRules;
		this.keyModified.set("sharing_rules", 1);

	}

	/**
	 * The method to get the info
	 * @returns An instance of Info
	 */
	public getInfo(): Info	{
		return this.info;

	}

	/**
	 * The method to set the value to info
	 * @param info An instance of Info
	 */
	public setInfo(info: Info): void	{
		this.info = info;
		this.keyModified.set("info", 1);

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
