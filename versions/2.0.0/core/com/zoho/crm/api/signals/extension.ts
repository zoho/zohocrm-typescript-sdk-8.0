import {Model} from "../../../../../../utils/util/model";

class Extension implements Model{

	private displayLabel: string;
	private namespace: string;
	private id: bigint;
	private type: number;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the displayLabel
	 * @returns A String representing the displayLabel
	 */
	public getDisplayLabel(): string	{
		return this.displayLabel;

	}

	/**
	 * The method to set the value to displayLabel
	 * @param displayLabel A String representing the displayLabel
	 */
	public setDisplayLabel(displayLabel: string): void	{
		this.displayLabel = displayLabel;
		this.keyModified.set("display_label", 1);

	}

	/**
	 * The method to get the namespace
	 * @returns A String representing the namespace
	 */
	public getNamespace(): string	{
		return this.namespace;

	}

	/**
	 * The method to set the value to namespace
	 * @param namespace A String representing the namespace
	 */
	public setNamespace(namespace: string): void	{
		this.namespace = namespace;
		this.keyModified.set("namespace", 1);

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
	 * The method to get the type
	 * @returns A number representing the type
	 */
	public getType(): number	{
		return this.type;

	}

	/**
	 * The method to set the value to type
	 * @param type A number representing the type
	 */
	public setType(type: number): void	{
		this.type = type;
		this.keyModified.set("type", 1);

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
	Extension as MasterModel,
	Extension as Extension
}
