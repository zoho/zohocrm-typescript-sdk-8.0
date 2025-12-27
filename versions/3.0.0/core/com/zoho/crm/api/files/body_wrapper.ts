import {StreamWrapper} from "../../../../../../utils/util/stream_wrapper";
import {Model} from "../../../../../../utils/util/model";

class BodyWrapper implements Model{

	private file: Array<StreamWrapper>;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the file
	 * @returns An Array representing the file
	 */
	public getFile(): Array<StreamWrapper>	{
		return this.file;

	}

	/**
	 * The method to set the value to file
	 * @param file An Array representing the file
	 */
	public setFile(file: Array<StreamWrapper>): void	{
		this.file = file;
		this.keyModified.set("file", 1);

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
	BodyWrapper as MasterModel,
	BodyWrapper as BodyWrapper
}
