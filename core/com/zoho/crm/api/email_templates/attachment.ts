import {Model} from "../../../../../../utils/util/model";

class Attachment implements Model{

	private size: bigint;
	private fileName: string;
	private fileId: string;
	private id: bigint;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the size
	 * @returns A BigInt representing the size
	 */
	public getSize(): bigint	{
		return this.size;

	}

	/**
	 * The method to set the value to size
	 * @param size A BigInt representing the size
	 */
	public setSize(size: bigint): void	{
		this.size = size;
		this.keyModified.set("size", 1);

	}

	/**
	 * The method to get the fileName
	 * @returns A String representing the fileName
	 */
	public getFileName(): string	{
		return this.fileName;

	}

	/**
	 * The method to set the value to fileName
	 * @param fileName A String representing the fileName
	 */
	public setFileName(fileName: string): void	{
		this.fileName = fileName;
		this.keyModified.set("file_name", 1);

	}

	/**
	 * The method to get the fileId
	 * @returns A String representing the fileId
	 */
	public getFileId(): string	{
		return this.fileId;

	}

	/**
	 * The method to set the value to fileId
	 * @param fileId A String representing the fileId
	 */
	public setFileId(fileId: string): void	{
		this.fileId = fileId;
		this.keyModified.set("file_id", 1);

	}

	/**
	 * The method to get the id
	 * @returns A BigInt representing the id
	 */
	public getId(): bigint	{
		return this.id;

	}

	/**
	 * The method to set the value to id
	 * @param id A BigInt representing the id
	 */
	public setId(id: bigint): void	{
		this.id = id;
		this.keyModified.set("id", 1);

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
	Attachment as MasterModel,
	Attachment as Attachment
}
