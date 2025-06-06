import {AuditLogExport} from "./audit_log_export";
import {ResponseHandler} from "./response_handler";
import {Model} from "../../../../../../utils/util/model";

class ResponseWrapper implements Model, ResponseHandler{

	private auditLogExport: Array<AuditLogExport>;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the auditLogExport
	 * @returns An Array representing the auditLogExport
	 */
	public getAuditLogExport(): Array<AuditLogExport>	{
		return this.auditLogExport;

	}

	/**
	 * The method to set the value to auditLogExport
	 * @param auditLogExport An Array representing the auditLogExport
	 */
	public setAuditLogExport(auditLogExport: Array<AuditLogExport>): void	{
		this.auditLogExport = auditLogExport;
		this.keyModified.set("audit_log_export", 1);

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
	ResponseWrapper as MasterModel,
	ResponseWrapper as ResponseWrapper
}
