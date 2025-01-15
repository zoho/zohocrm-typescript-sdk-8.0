import {Model} from "../../../../../../utils/util/model";

class Formula implements Model{

	private returnType: string;
	private assumeDefault: boolean;
	private expression: string;
	private dynamic: boolean;
	private stopComputeConditionally: boolean;
	private stopComputeExpression: string;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the returnType
	 * @returns A String representing the returnType
	 */
	public getReturnType(): string	{
		return this.returnType;

	}

	/**
	 * The method to set the value to returnType
	 * @param returnType A String representing the returnType
	 */
	public setReturnType(returnType: string): void	{
		this.returnType = returnType;
		this.keyModified.set("return_type", 1);

	}

	/**
	 * The method to get the assumeDefault
	 * @returns A Boolean representing the assumeDefault
	 */
	public getAssumeDefault(): boolean	{
		return this.assumeDefault;

	}

	/**
	 * The method to set the value to assumeDefault
	 * @param assumeDefault A Boolean representing the assumeDefault
	 */
	public setAssumeDefault(assumeDefault: boolean): void	{
		this.assumeDefault = assumeDefault;
		this.keyModified.set("assume_default", 1);

	}

	/**
	 * The method to get the expression
	 * @returns A String representing the expression
	 */
	public getExpression(): string	{
		return this.expression;

	}

	/**
	 * The method to set the value to expression
	 * @param expression A String representing the expression
	 */
	public setExpression(expression: string): void	{
		this.expression = expression;
		this.keyModified.set("expression", 1);

	}

	/**
	 * The method to get the dynamic
	 * @returns A Boolean representing the dynamic
	 */
	public getDynamic(): boolean	{
		return this.dynamic;

	}

	/**
	 * The method to set the value to dynamic
	 * @param dynamic A Boolean representing the dynamic
	 */
	public setDynamic(dynamic: boolean): void	{
		this.dynamic = dynamic;
		this.keyModified.set("dynamic", 1);

	}

	/**
	 * The method to get the stopComputeConditionally
	 * @returns A Boolean representing the stopComputeConditionally
	 */
	public getStopComputeConditionally(): boolean	{
		return this.stopComputeConditionally;

	}

	/**
	 * The method to set the value to stopComputeConditionally
	 * @param stopComputeConditionally A Boolean representing the stopComputeConditionally
	 */
	public setStopComputeConditionally(stopComputeConditionally: boolean): void	{
		this.stopComputeConditionally = stopComputeConditionally;
		this.keyModified.set("stop_compute_conditionally", 1);

	}

	/**
	 * The method to get the stopComputeExpression
	 * @returns A String representing the stopComputeExpression
	 */
	public getStopComputeExpression(): string	{
		return this.stopComputeExpression;

	}

	/**
	 * The method to set the value to stopComputeExpression
	 * @param stopComputeExpression A String representing the stopComputeExpression
	 */
	public setStopComputeExpression(stopComputeExpression: string): void	{
		this.stopComputeExpression = stopComputeExpression;
		this.keyModified.set("stop_compute_expression", 1);

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
	Formula as MasterModel,
	Formula as Formula
}
