import {Model} from "../../../../../../utils/util/model";

class Signature implements Model{

	private mode: number;
	private sign: string;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the mode
	 * @returns A number representing the mode
	 */
	public getMode(): number	{
		return this.mode;

	}

	/**
	 * The method to set the value to mode
	 * @param mode A number representing the mode
	 */
	public setMode(mode: number): void	{
		this.mode = mode;
		this.keyModified.set("mode", 1);

	}

	/**
	 * The method to get the sign
	 * @returns A String representing the sign
	 */
	public getSign(): string	{
		return this.sign;

	}

	/**
	 * The method to set the value to sign
	 * @param sign A String representing the sign
	 */
	public setSign(sign: string): void	{
		this.sign = sign;
		this.keyModified.set("sign", 1);

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
	Signature as MasterModel,
	Signature as Signature
}
