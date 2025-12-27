import {Model} from "../../../../../../utils/util/model";

class EmailParser implements Model{

	private fieldsUpdateSupported: boolean;
	private recordOperationsSupported: boolean;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the fieldsUpdateSupported
	 * @returns A Boolean representing the fieldsUpdateSupported
	 */
	public getFieldsUpdateSupported(): boolean	{
		return this.fieldsUpdateSupported;

	}

	/**
	 * The method to set the value to fieldsUpdateSupported
	 * @param fieldsUpdateSupported A Boolean representing the fieldsUpdateSupported
	 */
	public setFieldsUpdateSupported(fieldsUpdateSupported: boolean): void	{
		this.fieldsUpdateSupported = fieldsUpdateSupported;
		this.keyModified.set("fields_update_supported", 1);

	}

	/**
	 * The method to get the recordOperationsSupported
	 * @returns A Boolean representing the recordOperationsSupported
	 */
	public getRecordOperationsSupported(): boolean	{
		return this.recordOperationsSupported;

	}

	/**
	 * The method to set the value to recordOperationsSupported
	 * @param recordOperationsSupported A Boolean representing the recordOperationsSupported
	 */
	public setRecordOperationsSupported(recordOperationsSupported: boolean): void	{
		this.recordOperationsSupported = recordOperationsSupported;
		this.keyModified.set("record_operations_supported", 1);

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
	EmailParser as MasterModel,
	EmailParser as EmailParser
}
