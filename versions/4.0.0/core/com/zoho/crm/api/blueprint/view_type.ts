import {Model} from "../../../../../../utils/util/model";

class ViewType implements Model{

	private view: boolean;
	private edit: boolean;
	private create: boolean;
	private quickCreate: boolean;
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
	 * The method to get the quickCreate
	 * @returns A Boolean representing the quickCreate
	 */
	public getQuickCreate(): boolean	{
		return this.quickCreate;

	}

	/**
	 * The method to set the value to quickCreate
	 * @param quickCreate A Boolean representing the quickCreate
	 */
	public setQuickCreate(quickCreate: boolean): void	{
		this.quickCreate = quickCreate;
		this.keyModified.set("quick_create", 1);

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
	ViewType as MasterModel,
	ViewType as ViewType
}
