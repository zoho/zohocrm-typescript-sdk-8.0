import {Choice} from "../../../../../../utils/util/choice";
import {Model} from "../../../../../../utils/util/model";

class FeaturesAvailable implements Model{

	private zsurveyEnabled: Choice<boolean>;
	private inlineComposeWindow: Choice<boolean>;
	private scheduleMail: Choice<boolean>;
	private emailCloudPicker: Choice<boolean>;
	private formIntegrationEnabled: Choice<boolean>;
	private isprivacyenabled: Choice<boolean>;
	private autoSuggestion: Choice<boolean>;
	private unsubscribeLink: Choice<boolean>;
	private bestTimeToContact: Choice<boolean>;
	private attachTeamdrive: Choice<boolean>;
	private islivedeskenabled: Choice<boolean>;
	private subjectLineSuggestion: boolean;
	private emailPreference: boolean;
	private attachment: boolean;
	private mandateunsublink: boolean;
	private oldComposeRevert: boolean;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the zsurveyEnabled
	 * @returns An instance of Choice<boolean>
	 */
	public getZsurveyEnabled(): Choice<boolean>	{
		return this.zsurveyEnabled;

	}

	/**
	 * The method to set the value to zsurveyEnabled
	 * @param zsurveyEnabled An instance of Choice<boolean>
	 */
	public setZsurveyEnabled(zsurveyEnabled: Choice<boolean>): void	{
		this.zsurveyEnabled = zsurveyEnabled;
		this.keyModified.set("zsurvey_enabled", 1);

	}

	/**
	 * The method to get the inlineComposeWindow
	 * @returns An instance of Choice<boolean>
	 */
	public getInlineComposeWindow(): Choice<boolean>	{
		return this.inlineComposeWindow;

	}

	/**
	 * The method to set the value to inlineComposeWindow
	 * @param inlineComposeWindow An instance of Choice<boolean>
	 */
	public setInlineComposeWindow(inlineComposeWindow: Choice<boolean>): void	{
		this.inlineComposeWindow = inlineComposeWindow;
		this.keyModified.set("inline_compose_window", 1);

	}

	/**
	 * The method to get the scheduleMail
	 * @returns An instance of Choice<boolean>
	 */
	public getScheduleMail(): Choice<boolean>	{
		return this.scheduleMail;

	}

	/**
	 * The method to set the value to scheduleMail
	 * @param scheduleMail An instance of Choice<boolean>
	 */
	public setScheduleMail(scheduleMail: Choice<boolean>): void	{
		this.scheduleMail = scheduleMail;
		this.keyModified.set("Schedule_Mail", 1);

	}

	/**
	 * The method to get the emailCloudPicker
	 * @returns An instance of Choice<boolean>
	 */
	public getEmailCloudPicker(): Choice<boolean>	{
		return this.emailCloudPicker;

	}

	/**
	 * The method to set the value to emailCloudPicker
	 * @param emailCloudPicker An instance of Choice<boolean>
	 */
	public setEmailCloudPicker(emailCloudPicker: Choice<boolean>): void	{
		this.emailCloudPicker = emailCloudPicker;
		this.keyModified.set("EMAIL_CLOUD_PICKER", 1);

	}

	/**
	 * The method to get the formIntegrationEnabled
	 * @returns An instance of Choice<boolean>
	 */
	public getFormIntegrationEnabled(): Choice<boolean>	{
		return this.formIntegrationEnabled;

	}

	/**
	 * The method to set the value to formIntegrationEnabled
	 * @param formIntegrationEnabled An instance of Choice<boolean>
	 */
	public setFormIntegrationEnabled(formIntegrationEnabled: Choice<boolean>): void	{
		this.formIntegrationEnabled = formIntegrationEnabled;
		this.keyModified.set("form_integration_enabled", 1);

	}

	/**
	 * The method to get the isprivacyenabled
	 * @returns An instance of Choice<boolean>
	 */
	public getIsprivacyenabled(): Choice<boolean>	{
		return this.isprivacyenabled;

	}

	/**
	 * The method to set the value to isprivacyenabled
	 * @param isprivacyenabled An instance of Choice<boolean>
	 */
	public setIsprivacyenabled(isprivacyenabled: Choice<boolean>): void	{
		this.isprivacyenabled = isprivacyenabled;
		this.keyModified.set("isPrivacyEnabled", 1);

	}

	/**
	 * The method to get the autoSuggestion
	 * @returns An instance of Choice<boolean>
	 */
	public getAutoSuggestion(): Choice<boolean>	{
		return this.autoSuggestion;

	}

	/**
	 * The method to set the value to autoSuggestion
	 * @param autoSuggestion An instance of Choice<boolean>
	 */
	public setAutoSuggestion(autoSuggestion: Choice<boolean>): void	{
		this.autoSuggestion = autoSuggestion;
		this.keyModified.set("auto_suggestion", 1);

	}

	/**
	 * The method to get the unsubscribeLink
	 * @returns An instance of Choice<boolean>
	 */
	public getUnsubscribeLink(): Choice<boolean>	{
		return this.unsubscribeLink;

	}

	/**
	 * The method to set the value to unsubscribeLink
	 * @param unsubscribeLink An instance of Choice<boolean>
	 */
	public setUnsubscribeLink(unsubscribeLink: Choice<boolean>): void	{
		this.unsubscribeLink = unsubscribeLink;
		this.keyModified.set("UNSUBSCRIBE_LINK", 1);

	}

	/**
	 * The method to get the bestTimeToContact
	 * @returns An instance of Choice<boolean>
	 */
	public getBestTimeToContact(): Choice<boolean>	{
		return this.bestTimeToContact;

	}

	/**
	 * The method to set the value to bestTimeToContact
	 * @param bestTimeToContact An instance of Choice<boolean>
	 */
	public setBestTimeToContact(bestTimeToContact: Choice<boolean>): void	{
		this.bestTimeToContact = bestTimeToContact;
		this.keyModified.set("best_time_to_contact", 1);

	}

	/**
	 * The method to get the attachTeamdrive
	 * @returns An instance of Choice<boolean>
	 */
	public getAttachTeamdrive(): Choice<boolean>	{
		return this.attachTeamdrive;

	}

	/**
	 * The method to set the value to attachTeamdrive
	 * @param attachTeamdrive An instance of Choice<boolean>
	 */
	public setAttachTeamdrive(attachTeamdrive: Choice<boolean>): void	{
		this.attachTeamdrive = attachTeamdrive;
		this.keyModified.set("attach_teamdrive", 1);

	}

	/**
	 * The method to get the islivedeskenabled
	 * @returns An instance of Choice<boolean>
	 */
	public getIslivedeskenabled(): Choice<boolean>	{
		return this.islivedeskenabled;

	}

	/**
	 * The method to set the value to islivedeskenabled
	 * @param islivedeskenabled An instance of Choice<boolean>
	 */
	public setIslivedeskenabled(islivedeskenabled: Choice<boolean>): void	{
		this.islivedeskenabled = islivedeskenabled;
		this.keyModified.set("isLiveDeskEnabled", 1);

	}

	/**
	 * The method to get the subjectLineSuggestion
	 * @returns A Boolean representing the subjectLineSuggestion
	 */
	public getSubjectLineSuggestion(): boolean	{
		return this.subjectLineSuggestion;

	}

	/**
	 * The method to set the value to subjectLineSuggestion
	 * @param subjectLineSuggestion A Boolean representing the subjectLineSuggestion
	 */
	public setSubjectLineSuggestion(subjectLineSuggestion: boolean): void	{
		this.subjectLineSuggestion = subjectLineSuggestion;
		this.keyModified.set("subject_line_suggestion", 1);

	}

	/**
	 * The method to get the emailPreference
	 * @returns A Boolean representing the emailPreference
	 */
	public getEmailPreference(): boolean	{
		return this.emailPreference;

	}

	/**
	 * The method to set the value to emailPreference
	 * @param emailPreference A Boolean representing the emailPreference
	 */
	public setEmailPreference(emailPreference: boolean): void	{
		this.emailPreference = emailPreference;
		this.keyModified.set("EMAIL_PREFERENCE", 1);

	}

	/**
	 * The method to get the attachment
	 * @returns A Boolean representing the attachment
	 */
	public getAttachment(): boolean	{
		return this.attachment;

	}

	/**
	 * The method to set the value to attachment
	 * @param attachment A Boolean representing the attachment
	 */
	public setAttachment(attachment: boolean): void	{
		this.attachment = attachment;
		this.keyModified.set("ATTACHMENT", 1);

	}

	/**
	 * The method to get the mandateunsublink
	 * @returns A Boolean representing the mandateunsublink
	 */
	public getMandateunsublink(): boolean	{
		return this.mandateunsublink;

	}

	/**
	 * The method to set the value to mandateunsublink
	 * @param mandateunsublink A Boolean representing the mandateunsublink
	 */
	public setMandateunsublink(mandateunsublink: boolean): void	{
		this.mandateunsublink = mandateunsublink;
		this.keyModified.set("mandateUnsubLink", 1);

	}

	/**
	 * The method to get the oldComposeRevert
	 * @returns A Boolean representing the oldComposeRevert
	 */
	public getOldComposeRevert(): boolean	{
		return this.oldComposeRevert;

	}

	/**
	 * The method to set the value to oldComposeRevert
	 * @param oldComposeRevert A Boolean representing the oldComposeRevert
	 */
	public setOldComposeRevert(oldComposeRevert: boolean): void	{
		this.oldComposeRevert = oldComposeRevert;
		this.keyModified.set("OLD_COMPOSE_REVERT", 1);

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
	FeaturesAvailable as MasterModel,
	FeaturesAvailable as FeaturesAvailable
}
