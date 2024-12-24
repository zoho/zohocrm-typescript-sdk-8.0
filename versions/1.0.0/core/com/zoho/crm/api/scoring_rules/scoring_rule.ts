import {Modules} from "../modules/modules";
import {FieldRule} from "./field_rule";
import {Layout} from "./layout";
import {SignalRule} from "./signal_rule";
import {MinifiedUser} from "../users/minified_user";
import {Model} from "../../../../../../utils/util/model";

class ScoringRule implements Model{

	private name: string;
	private description: string;
	private id: string;
	private layout: Layout;
	private createdTime: string;
	private modifiedTime: string;
	private module: Modules;
	private modifiedBy: MinifiedUser;
	private active: boolean;
	private createdBy: MinifiedUser;
	private fieldRules: Array<FieldRule>;
	private signalRules: Array<SignalRule>;
	private keyModified: Map<string, number> = new Map<string, number>();
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
	 * The method to get the description
	 * @returns A String representing the description
	 */
	public getDescription(): string	{
		return this.description;

	}

	/**
	 * The method to set the value to description
	 * @param description A String representing the description
	 */
	public setDescription(description: string): void	{
		this.description = description;
		this.keyModified.set("description", 1);

	}

	/**
	 * The method to get the id
	 * @returns A String representing the id
	 */
	public getId(): string	{
		return this.id;

	}

	/**
	 * The method to set the value to id
	 * @param id A String representing the id
	 */
	public setId(id: string): void	{
		this.id = id;
		this.keyModified.set("id", 1);

	}

	/**
	 * The method to get the layout
	 * @returns An instance of Layout
	 */
	public getLayout(): Layout	{
		return this.layout;

	}

	/**
	 * The method to set the value to layout
	 * @param layout An instance of Layout
	 */
	public setLayout(layout: Layout): void	{
		this.layout = layout;
		this.keyModified.set("layout", 1);

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
	 * The method to get the modifiedTime
	 * @returns A String representing the modifiedTime
	 */
	public getModifiedTime(): string	{
		return this.modifiedTime;

	}

	/**
	 * The method to set the value to modifiedTime
	 * @param modifiedTime A String representing the modifiedTime
	 */
	public setModifiedTime(modifiedTime: string): void	{
		this.modifiedTime = modifiedTime;
		this.keyModified.set("modified_time", 1);

	}

	/**
	 * The method to get the module
	 * @returns An instance of Modules
	 */
	public getModule(): Modules	{
		return this.module;

	}

	/**
	 * The method to set the value to module
	 * @param module An instance of Modules
	 */
	public setModule(module: Modules): void	{
		this.module = module;
		this.keyModified.set("module", 1);

	}

	/**
	 * The method to get the modifiedBy
	 * @returns An instance of MinifiedUser
	 */
	public getModifiedBy(): MinifiedUser	{
		return this.modifiedBy;

	}

	/**
	 * The method to set the value to modifiedBy
	 * @param modifiedBy An instance of MinifiedUser
	 */
	public setModifiedBy(modifiedBy: MinifiedUser): void	{
		this.modifiedBy = modifiedBy;
		this.keyModified.set("modified_by", 1);

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
	 * The method to get the createdBy
	 * @returns An instance of MinifiedUser
	 */
	public getCreatedBy(): MinifiedUser	{
		return this.createdBy;

	}

	/**
	 * The method to set the value to createdBy
	 * @param createdBy An instance of MinifiedUser
	 */
	public setCreatedBy(createdBy: MinifiedUser): void	{
		this.createdBy = createdBy;
		this.keyModified.set("created_by", 1);

	}

	/**
	 * The method to get the fieldRules
	 * @returns An Array representing the fieldRules
	 */
	public getFieldRules(): Array<FieldRule>	{
		return this.fieldRules;

	}

	/**
	 * The method to set the value to fieldRules
	 * @param fieldRules An Array representing the fieldRules
	 */
	public setFieldRules(fieldRules: Array<FieldRule>): void	{
		this.fieldRules = fieldRules;
		this.keyModified.set("field_rules", 1);

	}

	/**
	 * The method to get the signalRules
	 * @returns An Array representing the signalRules
	 */
	public getSignalRules(): Array<SignalRule>	{
		return this.signalRules;

	}

	/**
	 * The method to set the value to signalRules
	 * @param signalRules An Array representing the signalRules
	 */
	public setSignalRules(signalRules: Array<SignalRule>): void	{
		this.signalRules = signalRules;
		this.keyModified.set("signal_rules", 1);

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
	ScoringRule as MasterModel,
	ScoringRule as ScoringRule
}
