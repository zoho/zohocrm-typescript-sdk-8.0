import {Criteria} from "./criteria";
import {MinifiedModule} from "../modules/minified_module";
import {Choice} from "../../../../../../utils/util/choice";
import {Model} from "../../../../../../utils/util/model";

class Query implements Model{

	private module: MinifiedModule;
	private cvid: bigint;
	private fields: Array<string>;
	private page: number;
	private criteria: Criteria;
	private fileType: Choice<string>;
	private pageToken: string;
	private keyModified: Map<string, number> = new Map<string, number>();
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
	 * The method to get the cvid
	 * @returns A BigInt representing the cvid
	 */
	public getCvid(): bigint	{
		return this.cvid;

	}

	/**
	 * The method to set the value to cvid
	 * @param cvid A BigInt representing the cvid
	 */
	public setCvid(cvid: bigint): void	{
		this.cvid = cvid;
		this.keyModified.set("cvid", 1);

	}

	/**
	 * The method to get the fields
	 * @returns An Array representing the fields
	 */
	public getFields(): Array<string>	{
		return this.fields;

	}

	/**
	 * The method to set the value to fields
	 * @param fields An Array representing the fields
	 */
	public setFields(fields: Array<string>): void	{
		this.fields = fields;
		this.keyModified.set("fields", 1);

	}

	/**
	 * The method to get the page
	 * @returns A number representing the page
	 */
	public getPage(): number	{
		return this.page;

	}

	/**
	 * The method to set the value to page
	 * @param page A number representing the page
	 */
	public setPage(page: number): void	{
		this.page = page;
		this.keyModified.set("page", 1);

	}

	/**
	 * The method to get the criteria
	 * @returns An instance of Criteria
	 */
	public getCriteria(): Criteria	{
		return this.criteria;

	}

	/**
	 * The method to set the value to criteria
	 * @param criteria An instance of Criteria
	 */
	public setCriteria(criteria: Criteria): void	{
		this.criteria = criteria;
		this.keyModified.set("criteria", 1);

	}

	/**
	 * The method to get the fileType
	 * @returns An instance of Choice<string>
	 */
	public getFileType(): Choice<string>	{
		return this.fileType;

	}

	/**
	 * The method to set the value to fileType
	 * @param fileType An instance of Choice<string>
	 */
	public setFileType(fileType: Choice<string>): void	{
		this.fileType = fileType;
		this.keyModified.set("file_type", 1);

	}

	/**
	 * The method to get the pageToken
	 * @returns A String representing the pageToken
	 */
	public getPageToken(): string	{
		return this.pageToken;

	}

	/**
	 * The method to set the value to pageToken
	 * @param pageToken A String representing the pageToken
	 */
	public setPageToken(pageToken: string): void	{
		this.pageToken = pageToken;
		this.keyModified.set("page_token", 1);

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
	Query as MasterModel,
	Query as Query
}
