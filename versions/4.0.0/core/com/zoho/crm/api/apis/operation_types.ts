import {Model} from "../../../../../../utils/util/model";

class OperationTypes implements Model{

	private method: string;
	private oauthScope: string;
	private maxCredits: number;
	private minCredits: number;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the method
	 * @returns A String representing the method
	 */
	public getMethod(): string	{
		return this.method;

	}

	/**
	 * The method to set the value to method
	 * @param method A String representing the method
	 */
	public setMethod(method: string): void	{
		this.method = method;
		this.keyModified.set("method", 1);

	}

	/**
	 * The method to get the oauthScope
	 * @returns A String representing the oauthScope
	 */
	public getOauthScope(): string	{
		return this.oauthScope;

	}

	/**
	 * The method to set the value to oauthScope
	 * @param oauthScope A String representing the oauthScope
	 */
	public setOauthScope(oauthScope: string): void	{
		this.oauthScope = oauthScope;
		this.keyModified.set("oauth_scope", 1);

	}

	/**
	 * The method to get the maxCredits
	 * @returns A number representing the maxCredits
	 */
	public getMaxCredits(): number	{
		return this.maxCredits;

	}

	/**
	 * The method to set the value to maxCredits
	 * @param maxCredits A number representing the maxCredits
	 */
	public setMaxCredits(maxCredits: number): void	{
		this.maxCredits = maxCredits;
		this.keyModified.set("max_credits", 1);

	}

	/**
	 * The method to get the minCredits
	 * @returns A number representing the minCredits
	 */
	public getMinCredits(): number	{
		return this.minCredits;

	}

	/**
	 * The method to set the value to minCredits
	 * @param minCredits A number representing the minCredits
	 */
	public setMinCredits(minCredits: number): void	{
		this.minCredits = minCredits;
		this.keyModified.set("min_credits", 1);

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
	OperationTypes as MasterModel,
	OperationTypes as OperationTypes
}
