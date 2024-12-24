import {Model} from "../../../../../../utils/util/model";

class Permissions implements Model{

	private view: boolean;
	private edit: boolean;
	private editSharedRecords: boolean;
	private create: boolean;
	private delete1: boolean;
	private deleteAttachment: boolean;
	private createAttachment: boolean;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the view
	 * @returns A Boolean representing the view
	 */
	public getView(): boolean	{
		return this.view;

	}

	/**
	 * The method to set the value to view
	 * @param view A Boolean representing the view
	 */
	public setView(view: boolean): void	{
		this.view = view;
		this.keyModified.set("view", 1);

	}

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
	 * The method to get the editSharedRecords
	 * @returns A Boolean representing the editSharedRecords
	 */
	public getEditSharedRecords(): boolean	{
		return this.editSharedRecords;

	}

	/**
	 * The method to set the value to editSharedRecords
	 * @param editSharedRecords A Boolean representing the editSharedRecords
	 */
	public setEditSharedRecords(editSharedRecords: boolean): void	{
		this.editSharedRecords = editSharedRecords;
		this.keyModified.set("edit_shared_records", 1);

	}

	/**
	 * The method to get the create
	 * @returns A Boolean representing the create
	 */
	public getCreate(): boolean	{
		return this.create;

	}

	/**
	 * The method to set the value to create
	 * @param create A Boolean representing the create
	 */
	public setCreate(create: boolean): void	{
		this.create = create;
		this.keyModified.set("create", 1);

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
	 * The method to get the deleteAttachment
	 * @returns A Boolean representing the deleteAttachment
	 */
	public getDeleteAttachment(): boolean	{
		return this.deleteAttachment;

	}

	/**
	 * The method to set the value to deleteAttachment
	 * @param deleteAttachment A Boolean representing the deleteAttachment
	 */
	public setDeleteAttachment(deleteAttachment: boolean): void	{
		this.deleteAttachment = deleteAttachment;
		this.keyModified.set("delete_attachment", 1);

	}

	/**
	 * The method to get the createAttachment
	 * @returns A Boolean representing the createAttachment
	 */
	public getCreateAttachment(): boolean	{
		return this.createAttachment;

	}

	/**
	 * The method to set the value to createAttachment
	 * @param createAttachment A Boolean representing the createAttachment
	 */
	public setCreateAttachment(createAttachment: boolean): void	{
		this.createAttachment = createAttachment;
		this.keyModified.set("create_attachment", 1);

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
	Permissions as MasterModel,
	Permissions as Permissions
}
