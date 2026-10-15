import {Model} from "../../../../../../utils/util/model";

class OperationType implements Model{

	private webUpdate: boolean;
	private apiCreate: boolean;
	private webCreate: boolean;
	private apiUpdate: boolean;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the webUpdate
	 * @returns A Boolean representing the webUpdate
	 */
	public getWebUpdate(): boolean	{
		return this.webUpdate;

	}

	/**
	 * The method to set the value to webUpdate
	 * @param webUpdate A Boolean representing the webUpdate
	 */
	public setWebUpdate(webUpdate: boolean): void	{
		this.webUpdate = webUpdate;
		this.keyModified.set("web_update", 1);

	}

	/**
	 * The method to get the apiCreate
	 * @returns A Boolean representing the apiCreate
	 */
	public getAPICreate(): boolean	{
		return this.apiCreate;

	}

	/**
	 * The method to set the value to apiCreate
	 * @param apiCreate A Boolean representing the apiCreate
	 */
	public setAPICreate(apiCreate: boolean): void	{
		this.apiCreate = apiCreate;
		this.keyModified.set("api_create", 1);

	}

	/**
	 * The method to get the webCreate
	 * @returns A Boolean representing the webCreate
	 */
	public getWebCreate(): boolean	{
		return this.webCreate;

	}

	/**
	 * The method to set the value to webCreate
	 * @param webCreate A Boolean representing the webCreate
	 */
	public setWebCreate(webCreate: boolean): void	{
		this.webCreate = webCreate;
		this.keyModified.set("web_create", 1);

	}

	/**
	 * The method to get the apiUpdate
	 * @returns A Boolean representing the apiUpdate
	 */
	public getAPIUpdate(): boolean	{
		return this.apiUpdate;

	}

	/**
	 * The method to set the value to apiUpdate
	 * @param apiUpdate A Boolean representing the apiUpdate
	 */
	public setAPIUpdate(apiUpdate: boolean): void	{
		this.apiUpdate = apiUpdate;
		this.keyModified.set("api_update", 1);

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
	OperationType as MasterModel,
	OperationType as OperationType
}
