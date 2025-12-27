import {Model} from "../../../../../../utils/util/model";

class Digest implements Model{

	private recordId: bigint;
	private type: string;
	private module: string;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the recordId
	 * @returns A BigInt representing the recordId
	 */
	public getRecordId(): bigint	{
		return this.recordId;

	}

	/**
	 * The method to set the value to recordId
	 * @param recordId A BigInt representing the recordId
	 */
	public setRecordId(recordId: bigint): void	{
		this.recordId = recordId;
		this.keyModified.set("record_id", 1);

	}

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
	 * The method to get the module
	 * @returns A String representing the module
	 */
	public getModule(): string	{
		return this.module;

	}

	/**
	 * The method to set the value to module
	 * @param module A String representing the module
	 */
	public setModule(module: string): void	{
		this.module = module;
		this.keyModified.set("module", 1);

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
	Digest as MasterModel,
	Digest as Digest
}
