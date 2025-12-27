import {FieldMappings} from "./field_mappings";
import {Layout} from "./layout";
import {Model} from "../../../../../../utils/util/model";

class DealRecordConfiguration implements Model{

	private layout: Layout;
	private fieldMappings: Array<FieldMappings>;
	private id: bigint;
	private keyModified: Map<string, number> = new Map<string, number>();
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
	 * The method to get the fieldMappings
	 * @returns An Array representing the fieldMappings
	 */
	public getFieldMappings(): Array<FieldMappings>	{
		return this.fieldMappings;

	}

	/**
	 * The method to set the value to fieldMappings
	 * @param fieldMappings An Array representing the fieldMappings
	 */
	public setFieldMappings(fieldMappings: Array<FieldMappings>): void	{
		this.fieldMappings = fieldMappings;
		this.keyModified.set("field_mappings", 1);

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
	DealRecordConfiguration as MasterModel,
	DealRecordConfiguration as DealRecordConfiguration
}
