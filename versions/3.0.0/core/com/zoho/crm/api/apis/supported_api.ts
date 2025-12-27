import {OperationTypes} from "./operation_types";
import {Model} from "../../../../../../utils/util/model";

class SupportedAPI implements Model{

	private path: string;
	private operationTypes: Array<OperationTypes>;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the path
	 * @returns A String representing the path
	 */
	public getPath(): string	{
		return this.path;

	}

	/**
	 * The method to set the value to path
	 * @param path A String representing the path
	 */
	public setPath(path: string): void	{
		this.path = path;
		this.keyModified.set("path", 1);

	}

	/**
	 * The method to get the operationTypes
	 * @returns An Array representing the operationTypes
	 */
	public getOperationTypes(): Array<OperationTypes>	{
		return this.operationTypes;

	}

	/**
	 * The method to set the value to operationTypes
	 * @param operationTypes An Array representing the operationTypes
	 */
	public setOperationTypes(operationTypes: Array<OperationTypes>): void	{
		this.operationTypes = operationTypes;
		this.keyModified.set("operation_types", 1);

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
	SupportedAPI as MasterModel,
	SupportedAPI as SupportedAPI
}
