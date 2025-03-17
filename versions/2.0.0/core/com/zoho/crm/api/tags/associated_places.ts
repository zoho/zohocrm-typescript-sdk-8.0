import {Model} from "../../../../../../utils/util/model";

class AssociatedPlaces implements Model{

	private type: string;
	private resources: Array<string>;
	private keyModified: Map<string, number> = new Map<string, number>();
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
	 * The method to get the resources
	 * @returns An Array representing the resources
	 */
	public getResources(): Array<string>	{
		return this.resources;

	}

	/**
	 * The method to set the value to resources
	 * @param resources An Array representing the resources
	 */
	public setResources(resources: Array<string>): void	{
		this.resources = resources;
		this.keyModified.set("resources", 1);

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
	AssociatedPlaces as MasterModel,
	AssociatedPlaces as AssociatedPlaces
}
