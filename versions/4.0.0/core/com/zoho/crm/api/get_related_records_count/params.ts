import {Filters} from "./filters";
import {Choice} from "../../../../../../utils/util/choice";
import {Model} from "../../../../../../utils/util/model";

class Params implements Model{

	private approved: boolean;
	private converted: boolean;
	private associated: boolean;
	private category: Choice<string>;
	private approvalState: Choice<string>;
	private filters: Filters;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the approved
	 * @returns A Boolean representing the approved
	 */
	public getApproved(): boolean	{
		return this.approved;

	}

	/**
	 * The method to set the value to approved
	 * @param approved A Boolean representing the approved
	 */
	public setApproved(approved: boolean): void	{
		this.approved = approved;
		this.keyModified.set("approved", 1);

	}

	/**
	 * The method to get the converted
	 * @returns A Boolean representing the converted
	 */
	public getConverted(): boolean	{
		return this.converted;

	}

	/**
	 * The method to set the value to converted
	 * @param converted A Boolean representing the converted
	 */
	public setConverted(converted: boolean): void	{
		this.converted = converted;
		this.keyModified.set("converted", 1);

	}

	/**
	 * The method to get the associated
	 * @returns A Boolean representing the associated
	 */
	public getAssociated(): boolean	{
		return this.associated;

	}

	/**
	 * The method to set the value to associated
	 * @param associated A Boolean representing the associated
	 */
	public setAssociated(associated: boolean): void	{
		this.associated = associated;
		this.keyModified.set("associated", 1);

	}

	/**
	 * The method to get the category
	 * @returns An instance of Choice<string>
	 */
	public getCategory(): Choice<string>	{
		return this.category;

	}

	/**
	 * The method to set the value to category
	 * @param category An instance of Choice<string>
	 */
	public setCategory(category: Choice<string>): void	{
		this.category = category;
		this.keyModified.set("category", 1);

	}

	/**
	 * The method to get the approvalState
	 * @returns An instance of Choice<string>
	 */
	public getApprovalState(): Choice<string>	{
		return this.approvalState;

	}

	/**
	 * The method to set the value to approvalState
	 * @param approvalState An instance of Choice<string>
	 */
	public setApprovalState(approvalState: Choice<string>): void	{
		this.approvalState = approvalState;
		this.keyModified.set("approval_state", 1);

	}

	/**
	 * The method to get the filters
	 * @returns An instance of Filters
	 */
	public getFilters(): Filters	{
		return this.filters;

	}

	/**
	 * The method to set the value to filters
	 * @param filters An instance of Filters
	 */
	public setFilters(filters: Filters): void	{
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
	Params as MasterModel,
	Params as Params
}
