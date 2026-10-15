import {InputData} from "./input_data";
import {Module} from "./module";
import {OutputData} from "./output_data";
import {User} from "./user";
import {Model} from "../../../../../../utils/util/model";

class DataEnrichment implements Model{

	private module: Module;
	private type: string;
	private outputDataFieldMapping: Array<OutputData>;
	private inputDataFieldMapping: Array<InputData>;
	private id: bigint;
	private status: boolean;
	private createdTime: Date;
	private createdBy: User;
	private modifiedTime: Date;
	private modifiedBy: User;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the module
	 * @returns An instance of Module
	 */
	public getModule(): Module	{
		return this.module;

	}

	/**
	 * The method to set the value to module
	 * @param module An instance of Module
	 */
	public setModule(module: Module): void	{
		this.module = module;
		this.keyModified.set("module", 1);

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
	 * The method to get the outputDataFieldMapping
	 * @returns An Array representing the outputDataFieldMapping
	 */
	public getOutputDataFieldMapping(): Array<OutputData>	{
		return this.outputDataFieldMapping;

	}

	/**
	 * The method to set the value to outputDataFieldMapping
	 * @param outputDataFieldMapping An Array representing the outputDataFieldMapping
	 */
	public setOutputDataFieldMapping(outputDataFieldMapping: Array<OutputData>): void	{
		this.outputDataFieldMapping = outputDataFieldMapping;
		this.keyModified.set("output_data_field_mapping", 1);

	}

	/**
	 * The method to get the inputDataFieldMapping
	 * @returns An Array representing the inputDataFieldMapping
	 */
	public getInputDataFieldMapping(): Array<InputData>	{
		return this.inputDataFieldMapping;

	}

	/**
	 * The method to set the value to inputDataFieldMapping
	 * @param inputDataFieldMapping An Array representing the inputDataFieldMapping
	 */
	public setInputDataFieldMapping(inputDataFieldMapping: Array<InputData>): void	{
		this.inputDataFieldMapping = inputDataFieldMapping;
		this.keyModified.set("input_data_field_mapping", 1);

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
	 * @returns A Boolean representing the status
	 */
	public getStatus(): boolean	{
		return this.status;

	}

	/**
	 * The method to set the value to status
	 * @param status A Boolean representing the status
	 */
	public setStatus(status: boolean): void	{
		this.status = status;
		this.keyModified.set("status", 1);

	}

	/**
	 * The method to get the createdTime
	 * @returns An instance of Date
	 */
	public getCreatedTime(): Date	{
		return this.createdTime;

	}

	/**
	 * The method to set the value to createdTime
	 * @param createdTime An instance of Date
	 */
	public setCreatedTime(createdTime: Date): void	{
		this.createdTime = createdTime;
		this.keyModified.set("created_time", 1);

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
	 * The method to get the modifiedTime
	 * @returns An instance of Date
	 */
	public getModifiedTime(): Date	{
		return this.modifiedTime;

	}

	/**
	 * The method to set the value to modifiedTime
	 * @param modifiedTime An instance of Date
	 */
	public setModifiedTime(modifiedTime: Date): void	{
		this.modifiedTime = modifiedTime;
		this.keyModified.set("modified_time", 1);

	}

	/**
	 * The method to get the modifiedBy
	 * @returns An instance of User
	 */
	public getModifiedBy(): User	{
		return this.modifiedBy;

	}

	/**
	 * The method to set the value to modifiedBy
	 * @param modifiedBy An instance of User
	 */
	public setModifiedBy(modifiedBy: User): void	{
		this.modifiedBy = modifiedBy;
		this.keyModified.set("modified_by", 1);

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
	DataEnrichment as MasterModel,
	DataEnrichment as DataEnrichment
}
