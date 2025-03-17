import {Criteria} from "./criteria";
import {Choice} from "../../../../../../utils/util/choice";
import {Model} from "../../../../../../utils/util/model";

class Assign implements Model{

	private feature: Choice<string>;
	private relatedEntityId: bigint;
	private page: number;
	private perPage: number;
	private id: bigint;
	private filters: Criteria;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the feature
	 * @returns An instance of Choice<string>
	 */
	public getFeature(): Choice<string>	{
		return this.feature;

	}

	/**
	 * The method to set the value to feature
	 * @param feature An instance of Choice<string>
	 */
	public setFeature(feature: Choice<string>): void	{
		this.feature = feature;
		this.keyModified.set("feature", 1);

	}

	/**
	 * The method to get the relatedEntityId
	 * @returns A BigInt representing the relatedEntityId
	 */
	public getRelatedEntityId(): bigint	{
		return this.relatedEntityId;

	}

	/**
	 * The method to set the value to relatedEntityId
	 * @param relatedEntityId A BigInt representing the relatedEntityId
	 */
	public setRelatedEntityId(relatedEntityId: bigint): void	{
		this.relatedEntityId = relatedEntityId;
		this.keyModified.set("related_entity_id", 1);

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
	 * The method to get the perPage
	 * @returns A number representing the perPage
	 */
	public getPerPage(): number	{
		return this.perPage;

	}

	/**
	 * The method to set the value to perPage
	 * @param perPage A number representing the perPage
	 */
	public setPerPage(perPage: number): void	{
		this.perPage = perPage;
		this.keyModified.set("per_page", 1);

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
	 * The method to get the filters
	 * @returns An instance of Criteria
	 */
	public getFilters(): Criteria	{
		return this.filters;

	}

	/**
	 * The method to set the value to filters
	 * @param filters An instance of Criteria
	 */
	public setFilters(filters: Criteria): void	{
		this.filters = filters;
		this.keyModified.set("filters", 1);

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
	Assign as MasterModel,
	Assign as Assign
}
