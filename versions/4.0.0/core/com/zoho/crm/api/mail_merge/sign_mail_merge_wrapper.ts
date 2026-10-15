import {SignMailMerge} from "./sign_mail_merge";
import {Model} from "../../../../../../utils/util/model";

class SignMailMergeWrapper implements Model{

	private signMailMerge: Array<SignMailMerge>;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the signMailMerge
	 * @returns An Array representing the signMailMerge
	 */
	public getSignMailMerge(): Array<SignMailMerge>	{
		return this.signMailMerge;

	}

	/**
	 * The method to set the value to signMailMerge
	 * @param signMailMerge An Array representing the signMailMerge
	 */
	public setSignMailMerge(signMailMerge: Array<SignMailMerge>): void	{
		this.signMailMerge = signMailMerge;
		this.keyModified.set("sign_mail_merge", 1);

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
	SignMailMergeWrapper as MasterModel,
	SignMailMergeWrapper as SignMailMergeWrapper
}
