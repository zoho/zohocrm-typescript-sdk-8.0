import {EnrichBasedOn} from "./enrich_based_on";
import {EnrichedData} from "./enriched_data";
import {User} from "./user";
import {Model} from "../../../../../../utils/util/model";

class ZiaOrgEnrichment implements Model{

	private enrichedData: EnrichedData;
	private createdTime: string;
	private id: bigint;
	private createdBy: User;
	private status: string;
	private enrichBasedOn: EnrichBasedOn;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the enrichedData
	 * @returns An instance of EnrichedData
	 */
	public getEnrichedData(): EnrichedData	{
		return this.enrichedData;

	}

	/**
	 * The method to set the value to enrichedData
	 * @param enrichedData An instance of EnrichedData
	 */
	public setEnrichedData(enrichedData: EnrichedData): void	{
		this.enrichedData = enrichedData;
		this.keyModified.set("enriched_data", 1);

	}

	/**
	 * The method to get the createdTime
	 * @returns A String representing the createdTime
	 */
	public getCreatedTime(): string	{
		return this.createdTime;

	}

	/**
	 * The method to set the value to createdTime
	 * @param createdTime A String representing the createdTime
	 */
	public setCreatedTime(createdTime: string): void	{
		this.createdTime = createdTime;
		this.keyModified.set("created_time", 1);

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
	 * The method to get the enrichBasedOn
	 * @returns An instance of EnrichBasedOn
	 */
	public getEnrichBasedOn(): EnrichBasedOn	{
		return this.enrichBasedOn;

	}

	/**
	 * The method to set the value to enrichBasedOn
	 * @param enrichBasedOn An instance of EnrichBasedOn
	 */
	public setEnrichBasedOn(enrichBasedOn: EnrichBasedOn): void	{
		this.enrichBasedOn = enrichBasedOn;
		this.keyModified.set("enrich_based_on", 1);

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
	ZiaOrgEnrichment as MasterModel,
	ZiaOrgEnrichment as ZiaOrgEnrichment
}
