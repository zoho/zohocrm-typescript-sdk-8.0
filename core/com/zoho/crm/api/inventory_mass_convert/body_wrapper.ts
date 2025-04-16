import {ConvertTo} from "./convert_to";
import {RelatedModules} from "./related_modules";
import {User} from "./user";
import {Model} from "../../../../../../utils/util/model";

class BodyWrapper implements Model{

	private convertTo: Array<ConvertTo>;
	private assignTo: User;
	private relatedModules: Array<RelatedModules>;
	private ids: Array<bigint>;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the convertTo
	 * @returns An Array representing the convertTo
	 */
	public getConvertTo(): Array<ConvertTo>	{
		return this.convertTo;

	}

	/**
	 * The method to set the value to convertTo
	 * @param convertTo An Array representing the convertTo
	 */
	public setConvertTo(convertTo: Array<ConvertTo>): void	{
		this.convertTo = convertTo;
		this.keyModified.set("convert_to", 1);

	}

	/**
	 * The method to get the assignTo
	 * @returns An instance of User
	 */
	public getAssignTo(): User	{
		return this.assignTo;

	}

	/**
	 * The method to set the value to assignTo
	 * @param assignTo An instance of User
	 */
	public setAssignTo(assignTo: User): void	{
		this.assignTo = assignTo;
		this.keyModified.set("assign_to", 1);

	}

	/**
	 * The method to get the relatedModules
	 * @returns An Array representing the relatedModules
	 */
	public getRelatedModules(): Array<RelatedModules>	{
		return this.relatedModules;

	}

	/**
	 * The method to set the value to relatedModules
	 * @param relatedModules An Array representing the relatedModules
	 */
	public setRelatedModules(relatedModules: Array<RelatedModules>): void	{
		this.relatedModules = relatedModules;
		this.keyModified.set("related_modules", 1);

	}

	/**
	 * The method to get the ids
	 * @returns An Array representing the ids
	 */
	public getIds(): Array<bigint>	{
		return this.ids;

	}

	/**
	 * The method to set the value to ids
	 * @param ids An Array representing the ids
	 */
	public setIds(ids: Array<bigint>): void	{
		this.ids = ids;
		this.keyModified.set("ids", 1);

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
	BodyWrapper as MasterModel,
	BodyWrapper as BodyWrapper
}
