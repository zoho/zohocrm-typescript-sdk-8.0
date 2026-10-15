import {Model} from "../../../../../../utils/util/model";

class Urls implements Model{

	private dataLinks: Array<string>;
	private attachmentLinks: Array<string>;
	private expiryDate: Date;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the dataLinks
	 * @returns An Array representing the dataLinks
	 */
	public getDataLinks(): Array<string>	{
		return this.dataLinks;

	}

	/**
	 * The method to set the value to dataLinks
	 * @param dataLinks An Array representing the dataLinks
	 */
	public setDataLinks(dataLinks: Array<string>): void	{
		this.dataLinks = dataLinks;
		this.keyModified.set("data_links", 1);

	}

	/**
	 * The method to get the attachmentLinks
	 * @returns An Array representing the attachmentLinks
	 */
	public getAttachmentLinks(): Array<string>	{
		return this.attachmentLinks;

	}

	/**
	 * The method to set the value to attachmentLinks
	 * @param attachmentLinks An Array representing the attachmentLinks
	 */
	public setAttachmentLinks(attachmentLinks: Array<string>): void	{
		this.attachmentLinks = attachmentLinks;
		this.keyModified.set("attachment_links", 1);

	}

	/**
	 * The method to get the expiryDate
	 * @returns An instance of Date
	 */
	public getExpiryDate(): Date	{
		return this.expiryDate;

	}

	/**
	 * The method to set the value to expiryDate
	 * @param expiryDate An instance of Date
	 */
	public setExpiryDate(expiryDate: Date): void	{
		this.expiryDate = expiryDate;
		this.keyModified.set("expiry_date", 1);

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
	Urls as MasterModel,
	Urls as Urls
}
