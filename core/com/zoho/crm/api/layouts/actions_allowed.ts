import {Model} from "../../../../../../utils/util/model";

class ActionsAllowed implements Model{

	private edit: boolean;
	private rename: boolean;
	private clone: boolean;
	private downgrade: boolean;
	private delete1: boolean;
	private deactivate: boolean;
	private setLayoutPermissions: boolean;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the edit
	 * @returns A Boolean representing the edit
	 */
	public getEdit(): boolean	{
		return this.edit;

	}

	/**
	 * The method to set the value to edit
	 * @param edit A Boolean representing the edit
	 */
	public setEdit(edit: boolean): void	{
		this.edit = edit;
		this.keyModified.set("edit", 1);

	}

	/**
	 * The method to get the rename
	 * @returns A Boolean representing the rename
	 */
	public getRename(): boolean	{
		return this.rename;

	}

	/**
	 * The method to set the value to rename
	 * @param rename A Boolean representing the rename
	 */
	public setRename(rename: boolean): void	{
		this.rename = rename;
		this.keyModified.set("rename", 1);

	}

	/**
	 * The method to get the clone
	 * @returns A Boolean representing the clone
	 */
	public getClone(): boolean	{
		return this.clone;

	}

	/**
	 * The method to set the value to clone
	 * @param clone A Boolean representing the clone
	 */
	public setClone(clone: boolean): void	{
		this.clone = clone;
		this.keyModified.set("clone", 1);

	}

	/**
	 * The method to get the downgrade
	 * @returns A Boolean representing the downgrade
	 */
	public getDowngrade(): boolean	{
		return this.downgrade;

	}

	/**
	 * The method to set the value to downgrade
	 * @param downgrade A Boolean representing the downgrade
	 */
	public setDowngrade(downgrade: boolean): void	{
		this.downgrade = downgrade;
		this.keyModified.set("downgrade", 1);

	}

	/**
	 * The method to get the delete
	 * @returns A Boolean representing the delete1
	 */
	public getDelete(): boolean	{
		return this.delete1;

	}

	/**
	 * The method to set the value to delete
	 * @param delete1 A Boolean representing the delete1
	 */
	public setDelete(delete1: boolean): void	{
		this.delete1 = delete1;
		this.keyModified.set("delete", 1);

	}

	/**
	 * The method to get the deactivate
	 * @returns A Boolean representing the deactivate
	 */
	public getDeactivate(): boolean	{
		return this.deactivate;

	}

	/**
	 * The method to set the value to deactivate
	 * @param deactivate A Boolean representing the deactivate
	 */
	public setDeactivate(deactivate: boolean): void	{
		this.deactivate = deactivate;
		this.keyModified.set("deactivate", 1);

	}

	/**
	 * The method to get the setLayoutPermissions
	 * @returns A Boolean representing the setLayoutPermissions
	 */
	public getSetLayoutPermissions(): boolean	{
		return this.setLayoutPermissions;

	}

	/**
	 * The method to set the value to setLayoutPermissions
	 * @param setLayoutPermissions A Boolean representing the setLayoutPermissions
	 */
	public setSetLayoutPermissions(setLayoutPermissions: boolean): void	{
		this.setLayoutPermissions = setLayoutPermissions;
		this.keyModified.set("set_layout_permissions", 1);

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
	ActionsAllowed as MasterModel,
	ActionsAllowed as ActionsAllowed
}
