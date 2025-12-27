import {Digest} from "./digest";
import {Model} from "../../../../../../utils/util/model";

class BodyWrapper implements Model{

	private digest: Array<Digest>;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the digest
	 * @returns An Array representing the digest
	 */
	public getDigest(): Array<Digest>	{
		return this.digest;

	}

	/**
	 * The method to set the value to digest
	 * @param digest An Array representing the digest
	 */
	public setDigest(digest: Array<Digest>): void	{
		this.digest = digest;
		this.keyModified.set("__digest", 1);

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
