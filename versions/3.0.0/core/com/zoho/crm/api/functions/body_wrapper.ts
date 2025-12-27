import {Model} from "../../../../../../utils/util/model";

class BodyWrapper implements Model{

	private body: Map<string, any>;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the body
	 * @returns A Map representing the body
	 */
	public getBody(): Map<string, any>	{
		return this.body;

	}

	/**
	 * The method to set the value to body
	 * @param body A Map representing the body
	 */
	public setBody(body: Map<string, any>): void	{
		this.body = body;
		this.keyModified.set("body", 1);

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
	BodyWrapper as MasterModel,
	BodyWrapper as BodyWrapper
}
