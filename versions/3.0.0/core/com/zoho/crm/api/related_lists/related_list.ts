import {Field} from "./field";
import {ModuleMap} from "./module_map";
import {Choice} from "../../../../../../utils/util/choice";
import {Model} from "../../../../../../utils/util/model";

class RelatedList implements Model{

	private id: bigint;
	private sequenceNumber: string;
	private displayLabel: string;
	private apiName: string;
	private module: ModuleMap;
	private name: string;
	private action: string;
	private href: string;
	private type: string;
	private connectedmodule: string;
	private linkingmodule: string;
	private visible: boolean;
	private customizeSort: boolean;
	private customizeFields: boolean;
	private customizeDisplayLabel: boolean;
	private sortBy: Field;
	private sortOrder: string;
	private fields: Array<Field>;
	private status: Choice<string>;
	private keyModified: Map<string, number> = new Map<string, number>();
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
	 * The method to get the sequenceNumber
	 * @returns A String representing the sequenceNumber
	 */
	public getSequenceNumber(): string	{
		return this.sequenceNumber;

	}

	/**
	 * The method to set the value to sequenceNumber
	 * @param sequenceNumber A String representing the sequenceNumber
	 */
	public setSequenceNumber(sequenceNumber: string): void	{
		this.sequenceNumber = sequenceNumber;
		this.keyModified.set("sequence_number", 1);

	}

	/**
	 * The method to get the displayLabel
	 * @returns A String representing the displayLabel
	 */
	public getDisplayLabel(): string	{
		return this.displayLabel;

	}

	/**
	 * The method to set the value to displayLabel
	 * @param displayLabel A String representing the displayLabel
	 */
	public setDisplayLabel(displayLabel: string): void	{
		this.displayLabel = displayLabel;
		this.keyModified.set("display_label", 1);

	}

	/**
	 * The method to get the apiName
	 * @returns A String representing the apiName
	 */
	public getAPIName(): string	{
		return this.apiName;

	}

	/**
	 * The method to set the value to apiName
	 * @param apiName A String representing the apiName
	 */
	public setAPIName(apiName: string): void	{
		this.apiName = apiName;
		this.keyModified.set("api_name", 1);

	}

	/**
	 * The method to get the module
	 * @returns An instance of ModuleMap
	 */
	public getModule(): ModuleMap	{
		return this.module;

	}

	/**
	 * The method to set the value to module
	 * @param module An instance of ModuleMap
	 */
	public setModule(module: ModuleMap): void	{
		this.module = module;
		this.keyModified.set("module", 1);

	}

	/**
	 * The method to get the name
	 * @returns A String representing the name
	 */
	public getName(): string	{
		return this.name;

	}

	/**
	 * The method to set the value to name
	 * @param name A String representing the name
	 */
	public setName(name: string): void	{
		this.name = name;
		this.keyModified.set("name", 1);

	}

	/**
	 * The method to get the action
	 * @returns A String representing the action
	 */
	public getAction(): string	{
		return this.action;

	}

	/**
	 * The method to set the value to action
	 * @param action A String representing the action
	 */
	public setAction(action: string): void	{
		this.action = action;
		this.keyModified.set("action", 1);

	}

	/**
	 * The method to get the href
	 * @returns A String representing the href
	 */
	public getHref(): string	{
		return this.href;

	}

	/**
	 * The method to set the value to href
	 * @param href A String representing the href
	 */
	public setHref(href: string): void	{
		this.href = href;
		this.keyModified.set("href", 1);

	}

	/**
	 * The method to get the type
	 * @returns A String representing the type
	 */
	public getType(): string	{
		return this.type;

	}

	/**
	 * The method to set the value to type
	 * @param type A String representing the type
	 */
	public setType(type: string): void	{
		this.type = type;
		this.keyModified.set("type", 1);

	}

	/**
	 * The method to get the connectedmodule
	 * @returns A String representing the connectedmodule
	 */
	public getConnectedmodule(): string	{
		return this.connectedmodule;

	}

	/**
	 * The method to set the value to connectedmodule
	 * @param connectedmodule A String representing the connectedmodule
	 */
	public setConnectedmodule(connectedmodule: string): void	{
		this.connectedmodule = connectedmodule;
		this.keyModified.set("connectedmodule", 1);

	}

	/**
	 * The method to get the linkingmodule
	 * @returns A String representing the linkingmodule
	 */
	public getLinkingmodule(): string	{
		return this.linkingmodule;

	}

	/**
	 * The method to set the value to linkingmodule
	 * @param linkingmodule A String representing the linkingmodule
	 */
	public setLinkingmodule(linkingmodule: string): void	{
		this.linkingmodule = linkingmodule;
		this.keyModified.set("linkingmodule", 1);

	}

	/**
	 * The method to get the visible
	 * @returns A Boolean representing the visible
	 */
	public getVisible(): boolean	{
		return this.visible;

	}

	/**
	 * The method to set the value to visible
	 * @param visible A Boolean representing the visible
	 */
	public setVisible(visible: boolean): void	{
		this.visible = visible;
		this.keyModified.set("visible", 1);

	}

	/**
	 * The method to get the customizeSort
	 * @returns A Boolean representing the customizeSort
	 */
	public getCustomizeSort(): boolean	{
		return this.customizeSort;

	}

	/**
	 * The method to set the value to customizeSort
	 * @param customizeSort A Boolean representing the customizeSort
	 */
	public setCustomizeSort(customizeSort: boolean): void	{
		this.customizeSort = customizeSort;
		this.keyModified.set("customize_sort", 1);

	}

	/**
	 * The method to get the customizeFields
	 * @returns A Boolean representing the customizeFields
	 */
	public getCustomizeFields(): boolean	{
		return this.customizeFields;

	}

	/**
	 * The method to set the value to customizeFields
	 * @param customizeFields A Boolean representing the customizeFields
	 */
	public setCustomizeFields(customizeFields: boolean): void	{
		this.customizeFields = customizeFields;
		this.keyModified.set("customize_fields", 1);

	}

	/**
	 * The method to get the customizeDisplayLabel
	 * @returns A Boolean representing the customizeDisplayLabel
	 */
	public getCustomizeDisplayLabel(): boolean	{
		return this.customizeDisplayLabel;

	}

	/**
	 * The method to set the value to customizeDisplayLabel
	 * @param customizeDisplayLabel A Boolean representing the customizeDisplayLabel
	 */
	public setCustomizeDisplayLabel(customizeDisplayLabel: boolean): void	{
		this.customizeDisplayLabel = customizeDisplayLabel;
		this.keyModified.set("customize_display_label", 1);

	}

	/**
	 * The method to get the sortBy
	 * @returns An instance of Field
	 */
	public getSortBy(): Field	{
		return this.sortBy;

	}

	/**
	 * The method to set the value to sortBy
	 * @param sortBy An instance of Field
	 */
	public setSortBy(sortBy: Field): void	{
		this.sortBy = sortBy;
		this.keyModified.set("sort_by", 1);

	}

	/**
	 * The method to get the sortOrder
	 * @returns A String representing the sortOrder
	 */
	public getSortOrder(): string	{
		return this.sortOrder;

	}

	/**
	 * The method to set the value to sortOrder
	 * @param sortOrder A String representing the sortOrder
	 */
	public setSortOrder(sortOrder: string): void	{
		this.sortOrder = sortOrder;
		this.keyModified.set("sort_order", 1);

	}

	/**
	 * The method to get the fields
	 * @returns An Array representing the fields
	 */
	public getFields(): Array<Field>	{
		return this.fields;

	}

	/**
	 * The method to set the value to fields
	 * @param fields An Array representing the fields
	 */
	public setFields(fields: Array<Field>): void	{
		this.fields = fields;
		this.keyModified.set("fields", 1);

	}

	/**
	 * The method to get the status
	 * @returns An instance of Choice<string>
	 */
	public getStatus(): Choice<string>	{
		return this.status;

	}

	/**
	 * The method to set the value to status
	 * @param status An instance of Choice<string>
	 */
	public setStatus(status: Choice<string>): void	{
		this.status = status;
		this.keyModified.set("status", 1);

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
	RelatedList as MasterModel,
	RelatedList as RelatedList
}
