import {Model} from "../../../../../../utils/util/model";

class MinifiedModule implements Model{

	private apiName: string;
	private id: bigint;
	private moduleName: string;
	private module: string;
	private crypt: boolean;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the apiName
	 * @returns A String representing the apiName
	 */
	public getAPIName(): string	{
		return this.apiName;

	}

	/**
	 * The method to set the value to apiName
	 * @param apiName A String representing the apiName
	 */
	public setAPIName(apiName: string): void	{
		this.apiName = apiName;
		this.keyModified.set("api_name", 1);

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
	 * The method to get the moduleName
	 * @returns A String representing the moduleName
	 */
	public getModuleName(): string	{
		return this.moduleName;

	}

	/**
	 * The method to set the value to moduleName
	 * @param moduleName A String representing the moduleName
	 */
	public setModuleName(moduleName: string): void	{
		this.moduleName = moduleName;
		this.keyModified.set("module_name", 1);

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
	 * The method to get the crypt
	 * @returns A Boolean representing the crypt
	 */
	public getCrypt(): boolean	{
		return this.crypt;

	}

	/**
	 * The method to set the value to crypt
	 * @param crypt A Boolean representing the crypt
	 */
	public setCrypt(crypt: boolean): void	{
		this.crypt = crypt;
		this.keyModified.set("crypt", 1);

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
	MinifiedModule as MasterModel,
	MinifiedModule as MinifiedModule
}
