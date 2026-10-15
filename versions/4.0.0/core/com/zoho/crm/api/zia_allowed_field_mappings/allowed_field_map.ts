import {AllowedOutputData} from "./allowed_output_data";
import {Model} from "../../../../../../utils/util/model";

class AllowedFieldMap implements Model{

	private outputDataFieldMapping: Array<AllowedOutputData>;
	private inputDataFieldMapping: Array<AllowedOutputData>;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the outputDataFieldMapping
	 * @returns An Array representing the outputDataFieldMapping
	 */
	public getOutputDataFieldMapping(): Array<AllowedOutputData>	{
		return this.outputDataFieldMapping;

	}

	/**
	 * The method to set the value to outputDataFieldMapping
	 * @param outputDataFieldMapping An Array representing the outputDataFieldMapping
	 */
	public setOutputDataFieldMapping(outputDataFieldMapping: Array<AllowedOutputData>): void	{
		this.outputDataFieldMapping = outputDataFieldMapping;
		this.keyModified.set("output_data_field_mapping", 1);

	}

	/**
	 * The method to get the inputDataFieldMapping
	 * @returns An Array representing the inputDataFieldMapping
	 */
	public getInputDataFieldMapping(): Array<AllowedOutputData>	{
		return this.inputDataFieldMapping;

	}

	/**
	 * The method to set the value to inputDataFieldMapping
	 * @param inputDataFieldMapping An Array representing the inputDataFieldMapping
	 */
	public setInputDataFieldMapping(inputDataFieldMapping: Array<AllowedOutputData>): void	{
		this.inputDataFieldMapping = inputDataFieldMapping;
		this.keyModified.set("input_data_field_mapping", 1);

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
	AllowedFieldMap as MasterModel,
	AllowedFieldMap as AllowedFieldMap
}
