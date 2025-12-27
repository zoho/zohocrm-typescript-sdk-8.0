import {DownloadMailMerge} from "./download_mail_merge";
import {Model} from "../../../../../../utils/util/model";

class DownloadMailMergeWrapper implements Model{

	private downloadMailMerge: Array<DownloadMailMerge>;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the downloadMailMerge
	 * @returns An Array representing the downloadMailMerge
	 */
	public getDownloadMailMerge(): Array<DownloadMailMerge>	{
		return this.downloadMailMerge;

	}

	/**
	 * The method to set the value to downloadMailMerge
	 * @param downloadMailMerge An Array representing the downloadMailMerge
	 */
	public setDownloadMailMerge(downloadMailMerge: Array<DownloadMailMerge>): void	{
		this.downloadMailMerge = downloadMailMerge;
		this.keyModified.set("download_mail_merge", 1);

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
	DownloadMailMergeWrapper as MasterModel,
	DownloadMailMergeWrapper as DownloadMailMergeWrapper
}
