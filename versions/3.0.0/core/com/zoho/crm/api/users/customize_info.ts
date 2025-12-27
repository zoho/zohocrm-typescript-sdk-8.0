import {Model} from "../../../../../../utils/util/model";

class CustomizeInfo implements Model{

	private notesDesc: any;
	private showRightPanel: any;
	private bcView: any;
	private unpinRecentItem: any;
	private showHome: boolean;
	private showDetailView: boolean;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the notesDesc
	 * @returns An Object representing the notesDesc
	 */
	public getNotesDesc(): any	{
		return this.notesDesc;

	}

	/**
	 * The method to set the value to notesDesc
	 * @param notesDesc An Object representing the notesDesc
	 */
	public setNotesDesc(notesDesc: any): void	{
		this.notesDesc = notesDesc;
		this.keyModified.set("notes_desc", 1);

	}

	/**
	 * The method to get the showRightPanel
	 * @returns An Object representing the showRightPanel
	 */
	public getShowRightPanel(): any	{
		return this.showRightPanel;

	}

	/**
	 * The method to set the value to showRightPanel
	 * @param showRightPanel An Object representing the showRightPanel
	 */
	public setShowRightPanel(showRightPanel: any): void	{
		this.showRightPanel = showRightPanel;
		this.keyModified.set("show_right_panel", 1);

	}

	/**
	 * The method to get the bcView
	 * @returns An Object representing the bcView
	 */
	public getBcView(): any	{
		return this.bcView;

	}

	/**
	 * The method to set the value to bcView
	 * @param bcView An Object representing the bcView
	 */
	public setBcView(bcView: any): void	{
		this.bcView = bcView;
		this.keyModified.set("bc_view", 1);

	}

	/**
	 * The method to get the unpinRecentItem
	 * @returns An Object representing the unpinRecentItem
	 */
	public getUnpinRecentItem(): any	{
		return this.unpinRecentItem;

	}

	/**
	 * The method to set the value to unpinRecentItem
	 * @param unpinRecentItem An Object representing the unpinRecentItem
	 */
	public setUnpinRecentItem(unpinRecentItem: any): void	{
		this.unpinRecentItem = unpinRecentItem;
		this.keyModified.set("unpin_recent_item", 1);

	}

	/**
	 * The method to get the showHome
	 * @returns A Boolean representing the showHome
	 */
	public getShowHome(): boolean	{
		return this.showHome;

	}

	/**
	 * The method to set the value to showHome
	 * @param showHome A Boolean representing the showHome
	 */
	public setShowHome(showHome: boolean): void	{
		this.showHome = showHome;
		this.keyModified.set("show_home", 1);

	}

	/**
	 * The method to get the showDetailView
	 * @returns A Boolean representing the showDetailView
	 */
	public getShowDetailView(): boolean	{
		return this.showDetailView;

	}

	/**
	 * The method to set the value to showDetailView
	 * @param showDetailView A Boolean representing the showDetailView
	 */
	public setShowDetailView(showDetailView: boolean): void	{
		this.showDetailView = showDetailView;
		this.keyModified.set("show_detail_view", 1);

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
	CustomizeInfo as MasterModel,
	CustomizeInfo as CustomizeInfo
}
