import {Model} from "../../../../../../utils/util/model";

class Territory implements Model{

	private id: bigint;
	private includeChild: boolean;
	private keyModified: Map<string, number> = new Map<string, number>();
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
	 * The method to get the includeChild
	 * @returns A Boolean representing the includeChild
	 */
	public getIncludeChild(): boolean	{
		return this.includeChild;

	}

	/**
	 * The method to set the value to includeChild
	 * @param includeChild A Boolean representing the includeChild
	 */
	public setIncludeChild(includeChild: boolean): void	{
		this.includeChild = includeChild;
		this.keyModified.set("include_child", 1);

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
	Territory as MasterModel,
	Territory as Territory
}
