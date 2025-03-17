import {Model} from "../../../../../../utils/util/model";

class Industry implements Model{

	private name: string;
	private description: string;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the name
	 * @returns A String representing the name
	 */
	public getName(): string	{
		return this.name;

	}

	/**
	 * The method to set the value to name
	 * @param name A String representing the name
	 */
	public setName(name: string): void	{
		this.name = name;
		this.keyModified.set("name", 1);

	}

	/**
	 * The method to get the description
	 * @returns A String representing the description
	 */
	public getDescription(): string	{
		return this.description;

	}

	/**
	 * The method to set the value to description
	 * @param description A String representing the description
	 */
	public setDescription(description: string): void	{
		this.description = description;
		this.keyModified.set("description", 1);

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
	Industry as MasterModel,
	Industry as Industry
}
