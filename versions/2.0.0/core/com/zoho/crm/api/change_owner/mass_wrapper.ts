import {BodyWrapper} from "./body_wrapper";
import {Owner} from "./owner";
import {RelatedModules} from "./related_modules";
import {Model} from "../../../../../../utils/util/model";

class MassWrapper extends BodyWrapper implements Model{

	protected ids: Array<bigint>;
	protected owner: Owner;
	protected notify: boolean;
	protected relatedModules: Array<RelatedModules>;
	protected keyModified: Map<string, number> = new Map<string, number>();
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
	 * The method to get the owner
	 * @returns An instance of Owner
	 */
	public getOwner(): Owner	{
		return this.owner;

	}

	/**
	 * The method to set the value to owner
	 * @param owner An instance of Owner
	 */
	public setOwner(owner: Owner): void	{
		this.owner = owner;
		this.keyModified.set("owner", 1);

	}

	/**
	 * The method to get the notify
	 * @returns A Boolean representing the notify
	 */
	public getNotify(): boolean	{
		return this.notify;

	}

	/**
	 * The method to set the value to notify
	 * @param notify A Boolean representing the notify
	 */
	public setNotify(notify: boolean): void	{
		this.notify = notify;
		this.keyModified.set("notify", 1);

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
	MassWrapper as MasterModel,
	MassWrapper as MassWrapper
}
