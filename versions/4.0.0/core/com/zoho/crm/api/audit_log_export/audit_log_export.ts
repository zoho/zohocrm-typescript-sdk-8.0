import {Criteria} from "./criteria";
import {User} from "./user";
import {Model} from "../../../../../../utils/util/model";

class AuditLogExport implements Model{

	private criteria: Criteria;
	private id: bigint;
	private status: string;
	private createdBy: User;
	private downloadLinks: Array<string>;
	private jobStartTime: Date;
	private jobEndTime: Date;
	private expiryDate: Date;
	private keyModified: Map<string, number> = new Map<string, number>();
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
	 * The method to get the status
	 * @returns A String representing the status
	 */
	public getStatus(): string	{
		return this.status;

	}

	/**
	 * The method to set the value to status
	 * @param status A String representing the status
	 */
	public setStatus(status: string): void	{
		this.status = status;
		this.keyModified.set("status", 1);

	}

	/**
	 * The method to get the createdBy
	 * @returns An instance of User
	 */
	public getCreatedBy(): User	{
		return this.createdBy;

	}

	/**
	 * The method to set the value to createdBy
	 * @param createdBy An instance of User
	 */
	public setCreatedBy(createdBy: User): void	{
		this.createdBy = createdBy;
		this.keyModified.set("created_by", 1);

	}

	/**
	 * The method to get the downloadLinks
	 * @returns An Array representing the downloadLinks
	 */
	public getDownloadLinks(): Array<string>	{
		return this.downloadLinks;

	}

	/**
	 * The method to set the value to downloadLinks
	 * @param downloadLinks An Array representing the downloadLinks
	 */
	public setDownloadLinks(downloadLinks: Array<string>): void	{
		this.downloadLinks = downloadLinks;
		this.keyModified.set("download_links", 1);

	}

	/**
	 * The method to get the jobStartTime
	 * @returns An instance of Date
	 */
	public getJobStartTime(): Date	{
		return this.jobStartTime;

	}

	/**
	 * The method to set the value to jobStartTime
	 * @param jobStartTime An instance of Date
	 */
	public setJobStartTime(jobStartTime: Date): void	{
		this.jobStartTime = jobStartTime;
		this.keyModified.set("job_start_time", 1);

	}

	/**
	 * The method to get the jobEndTime
	 * @returns An instance of Date
	 */
	public getJobEndTime(): Date	{
		return this.jobEndTime;

	}

	/**
	 * The method to set the value to jobEndTime
	 * @param jobEndTime An instance of Date
	 */
	public setJobEndTime(jobEndTime: Date): void	{
		this.jobEndTime = jobEndTime;
		this.keyModified.set("job_end_time", 1);

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
	AuditLogExport as MasterModel,
	AuditLogExport as AuditLogExport
}
