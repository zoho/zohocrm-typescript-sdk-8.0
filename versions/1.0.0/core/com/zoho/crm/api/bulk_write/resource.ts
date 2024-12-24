import {FieldMapping} from "./field_mapping";
import {File} from "./file";
import {MinifiedModule} from "../modules/minified_module";
import {Choice} from "../../../../../../utils/util/choice";
import {Model} from "../../../../../../utils/util/model";

class Resource implements Model{

	private status: Choice<string>;
	private type: Choice<string>;
	private module: MinifiedModule;
	private code: string;
	private fileId: string;
	private fileNames: Array<string>;
	private ignoreEmpty: boolean;
	private findBy: string;
	private fieldMappings: Array<FieldMapping>;
	private file: File;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the status
	 * @returns An instance of Choice<string>
	 */
	public getStatus(): Choice<string>	{
		return this.status;

	}

	/**
	 * The method to set the value to status
	 * @param status An instance of Choice<string>
	 */
	public setStatus(status: Choice<string>): void	{
		this.status = status;
		this.keyModified.set("status", 1);

	}

	/**
	 * The method to get the type
	 * @returns An instance of Choice<string>
	 */
	public getType(): Choice<string>	{
		return this.type;

	}

	/**
	 * The method to set the value to type
	 * @param type An instance of Choice<string>
	 */
	public setType(type: Choice<string>): void	{
		this.type = type;
		this.keyModified.set("type", 1);

	}

	/**
	 * The method to get the module
	 * @returns An instance of MinifiedModule
	 */
	public getModule(): MinifiedModule	{
		return this.module;

	}

	/**
	 * The method to set the value to module
	 * @param module An instance of MinifiedModule
	 */
	public setModule(module: MinifiedModule): void	{
		this.module = module;
		this.keyModified.set("module", 1);

	}

	/**
	 * The method to get the code
	 * @returns A String representing the code
	 */
	public getCode(): string	{
		return this.code;

	}

	/**
	 * The method to set the value to code
	 * @param code A String representing the code
	 */
	public setCode(code: string): void	{
		this.code = code;
		this.keyModified.set("code", 1);

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
	 * The method to get the fileNames
	 * @returns An Array representing the fileNames
	 */
	public getFileNames(): Array<string>	{
		return this.fileNames;

	}

	/**
	 * The method to set the value to fileNames
	 * @param fileNames An Array representing the fileNames
	 */
	public setFileNames(fileNames: Array<string>): void	{
		this.fileNames = fileNames;
		this.keyModified.set("file_names", 1);

	}

	/**
	 * The method to get the ignoreEmpty
	 * @returns A Boolean representing the ignoreEmpty
	 */
	public getIgnoreEmpty(): boolean	{
		return this.ignoreEmpty;

	}

	/**
	 * The method to set the value to ignoreEmpty
	 * @param ignoreEmpty A Boolean representing the ignoreEmpty
	 */
	public setIgnoreEmpty(ignoreEmpty: boolean): void	{
		this.ignoreEmpty = ignoreEmpty;
		this.keyModified.set("ignore_empty", 1);

	}

	/**
	 * The method to get the findBy
	 * @returns A String representing the findBy
	 */
	public getFindBy(): string	{
		return this.findBy;

	}

	/**
	 * The method to set the value to findBy
	 * @param findBy A String representing the findBy
	 */
	public setFindBy(findBy: string): void	{
		this.findBy = findBy;
		this.keyModified.set("find_by", 1);

	}

	/**
	 * The method to get the fieldMappings
	 * @returns An Array representing the fieldMappings
	 */
	public getFieldMappings(): Array<FieldMapping>	{
		return this.fieldMappings;

	}

	/**
	 * The method to set the value to fieldMappings
	 * @param fieldMappings An Array representing the fieldMappings
	 */
	public setFieldMappings(fieldMappings: Array<FieldMapping>): void	{
		this.fieldMappings = fieldMappings;
		this.keyModified.set("field_mappings", 1);

	}

	/**
	 * The method to get the file
	 * @returns An instance of File
	 */
	public getFile(): File	{
		return this.file;

	}

	/**
	 * The method to set the value to file
	 * @param file An instance of File
	 */
	public setFile(file: File): void	{
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
	Resource as MasterModel,
	Resource as Resource
}
