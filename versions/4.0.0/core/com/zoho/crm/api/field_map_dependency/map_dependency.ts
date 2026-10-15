import {Child} from "./child";
import {Parent} from "./parent";
import {PickListMapping} from "./pick_list_mapping";
import {SubModule} from "./sub_module";
import {Model} from "../../../../../../utils/util/model";

class MapDependency implements Model{

	private parent: Parent;
	private child: Child;
	private pickListValues: Array<PickListMapping>;
	private internal: boolean;
	private active: boolean;
	private id: bigint;
	private source: number;
	private category: number;
	private subModule: SubModule;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the parent
	 * @returns An instance of Parent
	 */
	public getParent(): Parent	{
		return this.parent;

	}

	/**
	 * The method to set the value to parent
	 * @param parent An instance of Parent
	 */
	public setParent(parent: Parent): void	{
		this.parent = parent;
		this.keyModified.set("parent", 1);

	}

	/**
	 * The method to get the child
	 * @returns An instance of Child
	 */
	public getChild(): Child	{
		return this.child;

	}

	/**
	 * The method to set the value to child
	 * @param child An instance of Child
	 */
	public setChild(child: Child): void	{
		this.child = child;
		this.keyModified.set("child", 1);

	}

	/**
	 * The method to get the pickListValues
	 * @returns An Array representing the pickListValues
	 */
	public getPickListValues(): Array<PickListMapping>	{
		return this.pickListValues;

	}

	/**
	 * The method to set the value to pickListValues
	 * @param pickListValues An Array representing the pickListValues
	 */
	public setPickListValues(pickListValues: Array<PickListMapping>): void	{
		this.pickListValues = pickListValues;
		this.keyModified.set("pick_list_values", 1);

	}

	/**
	 * The method to get the internal
	 * @returns A Boolean representing the internal
	 */
	public getInternal(): boolean	{
		return this.internal;

	}

	/**
	 * The method to set the value to internal
	 * @param internal A Boolean representing the internal
	 */
	public setInternal(internal: boolean): void	{
		this.internal = internal;
		this.keyModified.set("internal", 1);

	}

	/**
	 * The method to get the active
	 * @returns A Boolean representing the active
	 */
	public getActive(): boolean	{
		return this.active;

	}

	/**
	 * The method to set the value to active
	 * @param active A Boolean representing the active
	 */
	public setActive(active: boolean): void	{
		this.active = active;
		this.keyModified.set("active", 1);

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
	 * The method to get the source
	 * @returns A number representing the source
	 */
	public getSource(): number	{
		return this.source;

	}

	/**
	 * The method to set the value to source
	 * @param source A number representing the source
	 */
	public setSource(source: number): void	{
		this.source = source;
		this.keyModified.set("source", 1);

	}

	/**
	 * The method to get the category
	 * @returns A number representing the category
	 */
	public getCategory(): number	{
		return this.category;

	}

	/**
	 * The method to set the value to category
	 * @param category A number representing the category
	 */
	public setCategory(category: number): void	{
		this.category = category;
		this.keyModified.set("category", 1);

	}

	/**
	 * The method to get the subModule
	 * @returns An instance of SubModule
	 */
	public getSubModule(): SubModule	{
		return this.subModule;

	}

	/**
	 * The method to set the value to subModule
	 * @param subModule An instance of SubModule
	 */
	public setSubModule(subModule: SubModule): void	{
		this.subModule = subModule;
		this.keyModified.set("sub_module", 1);

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
	MapDependency as MasterModel,
	MapDependency as MapDependency
}
