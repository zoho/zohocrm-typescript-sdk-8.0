import {Model} from "../../../../../../utils/util/model";

class PermissionDetail implements Model{

	private id: string;
	private enabled: boolean;
	private name: string;
	private displayLabel: string;
	private customizable: boolean;
	private parentPermissions: Array<bigint>;
	private module: string;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the id
	 * @returns A String representing the id
	 */
	public getId(): string	{
		return this.id;

	}

	/**
	 * The method to set the value to id
	 * @param id A String representing the id
	 */
	public setId(id: string): void	{
		this.id = id;
		this.keyModified.set("id", 1);

	}

	/**
	 * The method to get the enabled
	 * @returns A Boolean representing the enabled
	 */
	public getEnabled(): boolean	{
		return this.enabled;

	}

	/**
	 * The method to set the value to enabled
	 * @param enabled A Boolean representing the enabled
	 */
	public setEnabled(enabled: boolean): void	{
		this.enabled = enabled;
		this.keyModified.set("enabled", 1);

	}

	/**
	 * The method to get the name
	 * @returns A String representing the name
	 */
	public getName(): string	{
		return this.name;

	}

	/**
	 * The method to set the value to name
	 * @param name A String representing the name
	 */
	public setName(name: string): void	{
		this.name = name;
		this.keyModified.set("name", 1);

	}

	/**
	 * The method to get the displayLabel
	 * @returns A String representing the displayLabel
	 */
	public getDisplayLabel(): string	{
		return this.displayLabel;

	}

	/**
	 * The method to set the value to displayLabel
	 * @param displayLabel A String representing the displayLabel
	 */
	public setDisplayLabel(displayLabel: string): void	{
		this.displayLabel = displayLabel;
		this.keyModified.set("display_label", 1);

	}

	/**
	 * The method to get the customizable
	 * @returns A Boolean representing the customizable
	 */
	public getCustomizable(): boolean	{
		return this.customizable;

	}

	/**
	 * The method to set the value to customizable
	 * @param customizable A Boolean representing the customizable
	 */
	public setCustomizable(customizable: boolean): void	{
		this.customizable = customizable;
		this.keyModified.set("customizable", 1);

	}

	/**
	 * The method to get the parentPermissions
	 * @returns An Array representing the parentPermissions
	 */
	public getParentPermissions(): Array<bigint>	{
		return this.parentPermissions;

	}

	/**
	 * The method to set the value to parentPermissions
	 * @param parentPermissions An Array representing the parentPermissions
	 */
	public setParentPermissions(parentPermissions: Array<bigint>): void	{
		this.parentPermissions = parentPermissions;
		this.keyModified.set("parent_permissions", 1);

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
	PermissionDetail as MasterModel,
	PermissionDetail as PermissionDetail
}
