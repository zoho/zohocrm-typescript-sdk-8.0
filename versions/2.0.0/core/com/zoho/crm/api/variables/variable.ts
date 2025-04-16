import {VariableGroup} from "./variable_group";
import {Choice} from "../../../../../../utils/util/choice";
import {Model} from "../../../../../../utils/util/model";

class Variable implements Model{

	private apiName: string;
	private name: string;
	private description: string;
	private source: string;
	private id: bigint;
	private type: Choice<string>;
	private variableGroup: VariableGroup;
	private readOnly: boolean;
	private value: any;
	private keyModified: Map<string, number> = new Map<string, number>();
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
	 * The method to get the source
	 * @returns A String representing the source
	 */
	public getSource(): string	{
		return this.source;

	}

	/**
	 * The method to set the value to source
	 * @param source A String representing the source
	 */
	public setSource(source: string): void	{
		this.source = source;
		this.keyModified.set("source", 1);

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
	 * The method to get the type
	 * @returns An instance of Choice<string>
	 */
	public getType(): Choice<string>	{
		return this.type;

	}

	/**
	 * The method to set the value to type
	 * @param type An instance of Choice<string>
	 */
	public setType(type: Choice<string>): void	{
		this.type = type;
		this.keyModified.set("type", 1);

	}

	/**
	 * The method to get the variableGroup
	 * @returns An instance of VariableGroup
	 */
	public getVariableGroup(): VariableGroup	{
		return this.variableGroup;

	}

	/**
	 * The method to set the value to variableGroup
	 * @param variableGroup An instance of VariableGroup
	 */
	public setVariableGroup(variableGroup: VariableGroup): void	{
		this.variableGroup = variableGroup;
		this.keyModified.set("variable_group", 1);

	}

	/**
	 * The method to get the readOnly
	 * @returns A Boolean representing the readOnly
	 */
	public getReadOnly(): boolean	{
		return this.readOnly;

	}

	/**
	 * The method to set the value to readOnly
	 * @param readOnly A Boolean representing the readOnly
	 */
	public setReadOnly(readOnly: boolean): void	{
		this.readOnly = readOnly;
		this.keyModified.set("read_only", 1);

	}

	/**
	 * The method to get the value
	 * @returns An Object representing the value
	 */
	public getValue(): any	{
		return this.value;

	}

	/**
	 * The method to set the value to value
	 * @param value An Object representing the value
	 */
	public setValue(value: any): void	{
		this.value = value;
		this.keyModified.set("value", 1);

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
	Variable as MasterModel,
	Variable as Variable
}
