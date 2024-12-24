import {Model} from "../../../../../../utils/util/model";

class Attachments implements Model{

	private serviceName: string;
	private fileSize: string;
	private id: string;
	private fileName: string;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the serviceName
	 * @returns A String representing the serviceName
	 */
	public getServiceName(): string	{
		return this.serviceName;

	}

	/**
	 * The method to set the value to serviceName
	 * @param serviceName A String representing the serviceName
	 */
	public setServiceName(serviceName: string): void	{
		this.serviceName = serviceName;
		this.keyModified.set("service_name", 1);

	}

	/**
	 * The method to get the fileSize
	 * @returns A String representing the fileSize
	 */
	public getFileSize(): string	{
		return this.fileSize;

	}

	/**
	 * The method to set the value to fileSize
	 * @param fileSize A String representing the fileSize
	 */
	public setFileSize(fileSize: string): void	{
		this.fileSize = fileSize;
		this.keyModified.set("file_size", 1);

	}

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
	Attachments as MasterModel,
	Attachments as Attachments
}
