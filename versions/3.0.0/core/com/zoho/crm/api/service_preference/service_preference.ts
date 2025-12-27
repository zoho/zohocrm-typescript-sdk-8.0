import {Model} from "../../../../../../utils/util/model";

class ServicePreference implements Model{

	private jobSheetEnabled: boolean;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the jobSheetEnabled
	 * @returns A Boolean representing the jobSheetEnabled
	 */
	public getJobSheetEnabled(): boolean	{
		return this.jobSheetEnabled;

	}

	/**
	 * The method to set the value to jobSheetEnabled
	 * @param jobSheetEnabled A Boolean representing the jobSheetEnabled
	 */
	public setJobSheetEnabled(jobSheetEnabled: boolean): void	{
		this.jobSheetEnabled = jobSheetEnabled;
		this.keyModified.set("job_sheet_enabled", 1);

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
	ServicePreference as MasterModel,
	ServicePreference as ServicePreference
}
