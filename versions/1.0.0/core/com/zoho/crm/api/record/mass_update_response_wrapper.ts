import {MassUpdateResponse} from "./mass_update_response";
import {MassUpdateResponseHandler} from "./mass_update_response_handler";
import {Model} from "../../../../../../utils/util/model";

class MassUpdateResponseWrapper implements Model, MassUpdateResponseHandler{

	private data: Array<MassUpdateResponse>;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the data
	 * @returns An Array representing the data
	 */
	public getData(): Array<MassUpdateResponse>	{
		return this.data;

	}

	/**
	 * The method to set the value to data
	 * @param data An Array representing the data
	 */
	public setData(data: Array<MassUpdateResponse>): void	{
		this.data = data;
		this.keyModified.set("data", 1);

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
	MassUpdateResponseWrapper as MasterModel,
	MassUpdateResponseWrapper as MassUpdateResponseWrapper
}
