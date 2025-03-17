import {Model} from "../../../../../../utils/util/model";

class Stages implements Model{

	private from: bigint;
	private to: bigint;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the from
	 * @returns A BigInt representing the from
	 */
	public getFrom(): bigint	{
		return this.from;

	}

	/**
	 * The method to set the value to from
	 * @param from A BigInt representing the from
	 */
	public setFrom(from: bigint): void	{
		this.from = from;
		this.keyModified.set("from", 1);

	}

	/**
	 * The method to get the to
	 * @returns A BigInt representing the to
	 */
	public getTo(): bigint	{
		return this.to;

	}

	/**
	 * The method to set the value to to
	 * @param to A BigInt representing the to
	 */
	public setTo(to: bigint): void	{
		this.to = to;
		this.keyModified.set("to", 1);

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
	Stages as MasterModel,
	Stages as Stages
}
