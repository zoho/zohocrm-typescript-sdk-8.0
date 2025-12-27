import {CrmField} from "./crm_field";
import {EnrichField} from "./enrich_field";
import {Model} from "../../../../../../utils/util/model";

class AllowedOutputData implements Model{

	private enrichField: EnrichField;
	private crmFields: Array<CrmField>;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the enrichField
	 * @returns An instance of EnrichField
	 */
	public getEnrichField(): EnrichField	{
		return this.enrichField;

	}

	/**
	 * The method to set the value to enrichField
	 * @param enrichField An instance of EnrichField
	 */
	public setEnrichField(enrichField: EnrichField): void	{
		this.enrichField = enrichField;
		this.keyModified.set("enrich_field", 1);

	}

	/**
	 * The method to get the crmFields
	 * @returns An Array representing the crmFields
	 */
	public getCrmFields(): Array<CrmField>	{
		return this.crmFields;

	}

	/**
	 * The method to set the value to crmFields
	 * @param crmFields An Array representing the crmFields
	 */
	public setCrmFields(crmFields: Array<CrmField>): void	{
		this.crmFields = crmFields;
		this.keyModified.set("crm_fields", 1);

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
	AllowedOutputData as MasterModel,
	AllowedOutputData as AllowedOutputData
}
