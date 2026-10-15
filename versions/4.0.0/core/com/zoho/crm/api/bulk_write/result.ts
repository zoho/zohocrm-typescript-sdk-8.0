import {Model} from "../../../../../../utils/util/model";

class Result implements Model{

	private downloadUrl: string;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the downloadUrl
	 * @returns A String representing the downloadUrl
	 */
	public getDownloadUrl(): string	{
		return this.downloadUrl;

	}

	/**
	 * The method to set the value to downloadUrl
	 * @param downloadUrl A String representing the downloadUrl
	 */
	public setDownloadUrl(downloadUrl: string): void	{
		this.downloadUrl = downloadUrl;
		this.keyModified.set("download_url", 1);

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
	Result as MasterModel,
	Result as Result
}
