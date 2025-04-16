import {MailMergeTemplate} from "./mail_merge_template";
import {Choice} from "../../../../../../utils/util/choice";
import {Model} from "../../../../../../utils/util/model";

class DownloadMailMerge implements Model{

	private mailMergeTemplate: MailMergeTemplate;
	private outputFormat: Choice<string>;
	private fileName: string;
	private password: string;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the mailMergeTemplate
	 * @returns An instance of MailMergeTemplate
	 */
	public getMailMergeTemplate(): MailMergeTemplate	{
		return this.mailMergeTemplate;

	}

	/**
	 * The method to set the value to mailMergeTemplate
	 * @param mailMergeTemplate An instance of MailMergeTemplate
	 */
	public setMailMergeTemplate(mailMergeTemplate: MailMergeTemplate): void	{
		this.mailMergeTemplate = mailMergeTemplate;
		this.keyModified.set("mail_merge_template", 1);

	}

	/**
	 * The method to get the outputFormat
	 * @returns An instance of Choice<string>
	 */
	public getOutputFormat(): Choice<string>	{
		return this.outputFormat;

	}

	/**
	 * The method to set the value to outputFormat
	 * @param outputFormat An instance of Choice<string>
	 */
	public setOutputFormat(outputFormat: Choice<string>): void	{
		this.outputFormat = outputFormat;
		this.keyModified.set("output_format", 1);

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
	 * The method to get the password
	 * @returns A String representing the password
	 */
	public getPassword(): string	{
		return this.password;

	}

	/**
	 * The method to set the value to password
	 * @param password A String representing the password
	 */
	public setPassword(password: string): void	{
		this.password = password;
		this.keyModified.set("password", 1);

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
	DownloadMailMerge as MasterModel,
	DownloadMailMerge as DownloadMailMerge
}
