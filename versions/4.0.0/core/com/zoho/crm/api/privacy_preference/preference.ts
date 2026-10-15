import {Model} from "../../../../../../utils/util/model";

class Preference implements Model{

	private consentModules: string;
	private restrictTptFields: string;
	private excludeAPIZoho: string;
	private awaitingPeriod: string;
	private consentMailSend: string;
	private excludeExportFields: string;
	private limitActions: string;
	private excludeExport: string;
	private restrictZohoInteg: string;
	private excludeAPIZohoFields: string;
	private durationTiming: string;
	private dataProcessingDuration: string;
	private restrictTptServices: string;
	private excludeAPITptFields: string;
	private restrictZohoIntegServices: string;
	private privacySettingStatus: string;
	private doubleOptIn: string;
	private restrictZohoIntegFields: string;
	private excludeAPITpt: string;
	private blockList: string;
	private restrictTpt: string;
	private actionsWhileAwaiting: string;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the consentModules
	 * @returns A String representing the consentModules
	 */
	public getConsentModules(): string	{
		return this.consentModules;

	}

	/**
	 * The method to set the value to consentModules
	 * @param consentModules A String representing the consentModules
	 */
	public setConsentModules(consentModules: string): void	{
		this.consentModules = consentModules;
		this.keyModified.set("consent_modules", 1);

	}

	/**
	 * The method to get the restrictTptFields
	 * @returns A String representing the restrictTptFields
	 */
	public getRestrictTptFields(): string	{
		return this.restrictTptFields;

	}

	/**
	 * The method to set the value to restrictTptFields
	 * @param restrictTptFields A String representing the restrictTptFields
	 */
	public setRestrictTptFields(restrictTptFields: string): void	{
		this.restrictTptFields = restrictTptFields;
		this.keyModified.set("restrict_tpt_fields", 1);

	}

	/**
	 * The method to get the excludeapiZoho
	 * @returns A String representing the excludeAPIZoho
	 */
	public getExcludeAPIZoho(): string	{
		return this.excludeAPIZoho;

	}

	/**
	 * The method to set the value to excludeapiZoho
	 * @param excludeAPIZoho A String representing the excludeAPIZoho
	 */
	public setExcludeAPIZoho(excludeAPIZoho: string): void	{
		this.excludeAPIZoho = excludeAPIZoho;
		this.keyModified.set("exclude_api_zoho", 1);

	}

	/**
	 * The method to get the awaitingPeriod
	 * @returns A String representing the awaitingPeriod
	 */
	public getAwaitingPeriod(): string	{
		return this.awaitingPeriod;

	}

	/**
	 * The method to set the value to awaitingPeriod
	 * @param awaitingPeriod A String representing the awaitingPeriod
	 */
	public setAwaitingPeriod(awaitingPeriod: string): void	{
		this.awaitingPeriod = awaitingPeriod;
		this.keyModified.set("awaiting_period", 1);

	}

	/**
	 * The method to get the consentMailSend
	 * @returns A String representing the consentMailSend
	 */
	public getConsentMailSend(): string	{
		return this.consentMailSend;

	}

	/**
	 * The method to set the value to consentMailSend
	 * @param consentMailSend A String representing the consentMailSend
	 */
	public setConsentMailSend(consentMailSend: string): void	{
		this.consentMailSend = consentMailSend;
		this.keyModified.set("consent_mail_send", 1);

	}

	/**
	 * The method to get the excludeExportFields
	 * @returns A String representing the excludeExportFields
	 */
	public getExcludeExportFields(): string	{
		return this.excludeExportFields;

	}

	/**
	 * The method to set the value to excludeExportFields
	 * @param excludeExportFields A String representing the excludeExportFields
	 */
	public setExcludeExportFields(excludeExportFields: string): void	{
		this.excludeExportFields = excludeExportFields;
		this.keyModified.set("exclude_export_fields", 1);

	}

	/**
	 * The method to get the limitActions
	 * @returns A String representing the limitActions
	 */
	public getLimitActions(): string	{
		return this.limitActions;

	}

	/**
	 * The method to set the value to limitActions
	 * @param limitActions A String representing the limitActions
	 */
	public setLimitActions(limitActions: string): void	{
		this.limitActions = limitActions;
		this.keyModified.set("limit_actions", 1);

	}

	/**
	 * The method to get the excludeExport
	 * @returns A String representing the excludeExport
	 */
	public getExcludeExport(): string	{
		return this.excludeExport;

	}

	/**
	 * The method to set the value to excludeExport
	 * @param excludeExport A String representing the excludeExport
	 */
	public setExcludeExport(excludeExport: string): void	{
		this.excludeExport = excludeExport;
		this.keyModified.set("exclude_export", 1);

	}

	/**
	 * The method to get the restrictZohoInteg
	 * @returns A String representing the restrictZohoInteg
	 */
	public getRestrictZohoInteg(): string	{
		return this.restrictZohoInteg;

	}

	/**
	 * The method to set the value to restrictZohoInteg
	 * @param restrictZohoInteg A String representing the restrictZohoInteg
	 */
	public setRestrictZohoInteg(restrictZohoInteg: string): void	{
		this.restrictZohoInteg = restrictZohoInteg;
		this.keyModified.set("restrict_zoho_integ", 1);

	}

	/**
	 * The method to get the excludeapiZohoFields
	 * @returns A String representing the excludeAPIZohoFields
	 */
	public getExcludeAPIZohoFields(): string	{
		return this.excludeAPIZohoFields;

	}

	/**
	 * The method to set the value to excludeapiZohoFields
	 * @param excludeAPIZohoFields A String representing the excludeAPIZohoFields
	 */
	public setExcludeAPIZohoFields(excludeAPIZohoFields: string): void	{
		this.excludeAPIZohoFields = excludeAPIZohoFields;
		this.keyModified.set("exclude_api_zoho_fields", 1);

	}

	/**
	 * The method to get the durationTiming
	 * @returns A String representing the durationTiming
	 */
	public getDurationTiming(): string	{
		return this.durationTiming;

	}

	/**
	 * The method to set the value to durationTiming
	 * @param durationTiming A String representing the durationTiming
	 */
	public setDurationTiming(durationTiming: string): void	{
		this.durationTiming = durationTiming;
		this.keyModified.set("duration_timing", 1);

	}

	/**
	 * The method to get the dataProcessingDuration
	 * @returns A String representing the dataProcessingDuration
	 */
	public getDataProcessingDuration(): string	{
		return this.dataProcessingDuration;

	}

	/**
	 * The method to set the value to dataProcessingDuration
	 * @param dataProcessingDuration A String representing the dataProcessingDuration
	 */
	public setDataProcessingDuration(dataProcessingDuration: string): void	{
		this.dataProcessingDuration = dataProcessingDuration;
		this.keyModified.set("data_processing_duration", 1);

	}

	/**
	 * The method to get the restrictTptServices
	 * @returns A String representing the restrictTptServices
	 */
	public getRestrictTptServices(): string	{
		return this.restrictTptServices;

	}

	/**
	 * The method to set the value to restrictTptServices
	 * @param restrictTptServices A String representing the restrictTptServices
	 */
	public setRestrictTptServices(restrictTptServices: string): void	{
		this.restrictTptServices = restrictTptServices;
		this.keyModified.set("restrict_tpt_services", 1);

	}

	/**
	 * The method to get the excludeapiTptFields
	 * @returns A String representing the excludeAPITptFields
	 */
	public getExcludeAPITptFields(): string	{
		return this.excludeAPITptFields;

	}

	/**
	 * The method to set the value to excludeapiTptFields
	 * @param excludeAPITptFields A String representing the excludeAPITptFields
	 */
	public setExcludeAPITptFields(excludeAPITptFields: string): void	{
		this.excludeAPITptFields = excludeAPITptFields;
		this.keyModified.set("exclude_api_tpt_fields", 1);

	}

	/**
	 * The method to get the restrictZohoIntegServices
	 * @returns A String representing the restrictZohoIntegServices
	 */
	public getRestrictZohoIntegServices(): string	{
		return this.restrictZohoIntegServices;

	}

	/**
	 * The method to set the value to restrictZohoIntegServices
	 * @param restrictZohoIntegServices A String representing the restrictZohoIntegServices
	 */
	public setRestrictZohoIntegServices(restrictZohoIntegServices: string): void	{
		this.restrictZohoIntegServices = restrictZohoIntegServices;
		this.keyModified.set("restrict_zoho_integ_services", 1);

	}

	/**
	 * The method to get the privacySettingStatus
	 * @returns A String representing the privacySettingStatus
	 */
	public getPrivacySettingStatus(): string	{
		return this.privacySettingStatus;

	}

	/**
	 * The method to set the value to privacySettingStatus
	 * @param privacySettingStatus A String representing the privacySettingStatus
	 */
	public setPrivacySettingStatus(privacySettingStatus: string): void	{
		this.privacySettingStatus = privacySettingStatus;
		this.keyModified.set("privacy_setting_status", 1);

	}

	/**
	 * The method to get the doubleOptIn
	 * @returns A String representing the doubleOptIn
	 */
	public getDoubleOptIn(): string	{
		return this.doubleOptIn;

	}

	/**
	 * The method to set the value to doubleOptIn
	 * @param doubleOptIn A String representing the doubleOptIn
	 */
	public setDoubleOptIn(doubleOptIn: string): void	{
		this.doubleOptIn = doubleOptIn;
		this.keyModified.set("double_opt_in", 1);

	}

	/**
	 * The method to get the restrictZohoIntegFields
	 * @returns A String representing the restrictZohoIntegFields
	 */
	public getRestrictZohoIntegFields(): string	{
		return this.restrictZohoIntegFields;

	}

	/**
	 * The method to set the value to restrictZohoIntegFields
	 * @param restrictZohoIntegFields A String representing the restrictZohoIntegFields
	 */
	public setRestrictZohoIntegFields(restrictZohoIntegFields: string): void	{
		this.restrictZohoIntegFields = restrictZohoIntegFields;
		this.keyModified.set("restrict_zoho_integ_fields", 1);

	}

	/**
	 * The method to get the excludeapiTpt
	 * @returns A String representing the excludeAPITpt
	 */
	public getExcludeAPITpt(): string	{
		return this.excludeAPITpt;

	}

	/**
	 * The method to set the value to excludeapiTpt
	 * @param excludeAPITpt A String representing the excludeAPITpt
	 */
	public setExcludeAPITpt(excludeAPITpt: string): void	{
		this.excludeAPITpt = excludeAPITpt;
		this.keyModified.set("exclude_api_tpt", 1);

	}

	/**
	 * The method to get the blockList
	 * @returns A String representing the blockList
	 */
	public getBlockList(): string	{
		return this.blockList;

	}

	/**
	 * The method to set the value to blockList
	 * @param blockList A String representing the blockList
	 */
	public setBlockList(blockList: string): void	{
		this.blockList = blockList;
		this.keyModified.set("block_list", 1);

	}

	/**
	 * The method to get the restrictTpt
	 * @returns A String representing the restrictTpt
	 */
	public getRestrictTpt(): string	{
		return this.restrictTpt;

	}

	/**
	 * The method to set the value to restrictTpt
	 * @param restrictTpt A String representing the restrictTpt
	 */
	public setRestrictTpt(restrictTpt: string): void	{
		this.restrictTpt = restrictTpt;
		this.keyModified.set("restrict_tpt", 1);

	}

	/**
	 * The method to get the actionsWhileAwaiting
	 * @returns A String representing the actionsWhileAwaiting
	 */
	public getActionsWhileAwaiting(): string	{
		return this.actionsWhileAwaiting;

	}

	/**
	 * The method to set the value to actionsWhileAwaiting
	 * @param actionsWhileAwaiting A String representing the actionsWhileAwaiting
	 */
	public setActionsWhileAwaiting(actionsWhileAwaiting: string): void	{
		this.actionsWhileAwaiting = actionsWhileAwaiting;
		this.keyModified.set("actions_while_awaiting", 1);

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
	Preference as MasterModel,
	Preference as Preference
}
