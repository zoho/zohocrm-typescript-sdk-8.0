import {Record} from "./record";
import {Tag} from "../tags/tag";
import {MinifiedUser} from "../users/minified_user";
import {Model} from "../../../../../../utils/util/model";

class Consent extends Record implements Model{

	/**
	 * The method to get the owner
	 * @returns An instance of MinifiedUser
	 */
	public getOwner(): MinifiedUser	{
		return this.getKeyValue("Owner");

	}

	/**
	 * The method to set the value to owner
	 * @param owner An instance of MinifiedUser
	 */
	public setOwner(owner: MinifiedUser): void	{
		this.addKeyValue("Owner", owner);

	}

	/**
	 * The method to get the contactThroughEmail
	 * @returns A Boolean representing the contactThroughEmail
	 */
	public getContactThroughEmail(): boolean	{
		return this.getKeyValue("Contact_Through_Email");

	}

	/**
	 * The method to set the value to contactThroughEmail
	 * @param contactThroughEmail A Boolean representing the contactThroughEmail
	 */
	public setContactThroughEmail(contactThroughEmail: boolean): void	{
		this.addKeyValue("Contact_Through_Email", contactThroughEmail);

	}

	/**
	 * The method to get the contactThroughSocial
	 * @returns A Boolean representing the contactThroughSocial
	 */
	public getContactThroughSocial(): boolean	{
		return this.getKeyValue("Contact_Through_Social");

	}

	/**
	 * The method to set the value to contactThroughSocial
	 * @param contactThroughSocial A Boolean representing the contactThroughSocial
	 */
	public setContactThroughSocial(contactThroughSocial: boolean): void	{
		this.addKeyValue("Contact_Through_Social", contactThroughSocial);

	}

	/**
	 * The method to get the contactThroughSurvey
	 * @returns A Boolean representing the contactThroughSurvey
	 */
	public getContactThroughSurvey(): boolean	{
		return this.getKeyValue("Contact_Through_Survey");

	}

	/**
	 * The method to set the value to contactThroughSurvey
	 * @param contactThroughSurvey A Boolean representing the contactThroughSurvey
	 */
	public setContactThroughSurvey(contactThroughSurvey: boolean): void	{
		this.addKeyValue("Contact_Through_Survey", contactThroughSurvey);

	}

	/**
	 * The method to get the contactThroughPhone
	 * @returns A Boolean representing the contactThroughPhone
	 */
	public getContactThroughPhone(): boolean	{
		return this.getKeyValue("Contact_Through_Phone");

	}

	/**
	 * The method to set the value to contactThroughPhone
	 * @param contactThroughPhone A Boolean representing the contactThroughPhone
	 */
	public setContactThroughPhone(contactThroughPhone: boolean): void	{
		this.addKeyValue("Contact_Through_Phone", contactThroughPhone);

	}

	/**
	 * The method to get the mailSentTime
	 * @returns An instance of Date
	 */
	public getMailSentTime(): Date	{
		return this.getKeyValue("Mail_Sent_Time");

	}

	/**
	 * The method to set the value to mailSentTime
	 * @param mailSentTime An instance of Date
	 */
	public setMailSentTime(mailSentTime: Date): void	{
		this.addKeyValue("Mail_Sent_Time", mailSentTime);

	}

	/**
	 * The method to get the consentDate
	 * @returns An instance of Date
	 */
	public getConsentDate(): Date	{
		return this.getKeyValue("Consent_Date");

	}

	/**
	 * The method to set the value to consentDate
	 * @param consentDate An instance of Date
	 */
	public setConsentDate(consentDate: Date): void	{
		this.addKeyValue("Consent_Date", consentDate);

	}

	/**
	 * The method to get the consentRemarks
	 * @returns A String representing the consentRemarks
	 */
	public getConsentRemarks(): string	{
		return this.getKeyValue("Consent_Remarks");

	}

	/**
	 * The method to set the value to consentRemarks
	 * @param consentRemarks A String representing the consentRemarks
	 */
	public setConsentRemarks(consentRemarks: string): void	{
		this.addKeyValue("Consent_Remarks", consentRemarks);

	}

	/**
	 * The method to get the consentThrough
	 * @returns A String representing the consentThrough
	 */
	public getConsentThrough(): string	{
		return this.getKeyValue("Consent_Through");

	}

	/**
	 * The method to set the value to consentThrough
	 * @param consentThrough A String representing the consentThrough
	 */
	public setConsentThrough(consentThrough: string): void	{
		this.addKeyValue("Consent_Through", consentThrough);

	}

	/**
	 * The method to get the dataProcessingBasis
	 * @returns A String representing the dataProcessingBasis
	 */
	public getDataProcessingBasis(): string	{
		return this.getKeyValue("Data_Processing_Basis");

	}

	/**
	 * The method to set the value to dataProcessingBasis
	 * @param dataProcessingBasis A String representing the dataProcessingBasis
	 */
	public setDataProcessingBasis(dataProcessingBasis: string): void	{
		this.addKeyValue("Data_Processing_Basis", dataProcessingBasis);

	}

	/**
	 * The method to get the id
	 * @returns A BigInt representing the id
	 */
	public getId(): bigint	{
		return this.getKeyValue("id");

	}

	/**
	 * The method to set the value to id
	 * @param id A BigInt representing the id
	 */
	public setId(id: bigint): void	{
		this.addKeyValue("id", id);

	}

	/**
	 * The method to get the createdBy
	 * @returns An instance of MinifiedUser
	 */
	public getCreatedBy(): MinifiedUser	{
		return this.getKeyValue("Created_By");

	}

	/**
	 * The method to set the value to createdBy
	 * @param createdBy An instance of MinifiedUser
	 */
	public setCreatedBy(createdBy: MinifiedUser): void	{
		this.addKeyValue("Created_By", createdBy);

	}

	/**
	 * The method to get the createdTime
	 * @returns An instance of Date
	 */
	public getCreatedTime(): Date	{
		return this.getKeyValue("Created_Time");

	}

	/**
	 * The method to set the value to createdTime
	 * @param createdTime An instance of Date
	 */
	public setCreatedTime(createdTime: Date): void	{
		this.addKeyValue("Created_Time", createdTime);

	}

	/**
	 * The method to get the modifiedBy
	 * @returns An instance of MinifiedUser
	 */
	public getModifiedBy(): MinifiedUser	{
		return this.getKeyValue("Modified_By");

	}

	/**
	 * The method to set the value to modifiedBy
	 * @param modifiedBy An instance of MinifiedUser
	 */
	public setModifiedBy(modifiedBy: MinifiedUser): void	{
		this.addKeyValue("Modified_By", modifiedBy);

	}

	/**
	 * The method to get the modifiedTime
	 * @returns An instance of Date
	 */
	public getModifiedTime(): Date	{
		return this.getKeyValue("Modified_Time");

	}

	/**
	 * The method to set the value to modifiedTime
	 * @param modifiedTime An instance of Date
	 */
	public setModifiedTime(modifiedTime: Date): void	{
		this.addKeyValue("Modified_Time", modifiedTime);

	}

	/**
	 * The method to get the tag
	 * @returns An Array representing the tag
	 */
	public getTag(): Array<Tag>	{
		return this.getKeyValue("Tag");

	}

	/**
	 * The method to set the value to tag
	 * @param tag An Array representing the tag
	 */
	public setTag(tag: Array<Tag>): void	{
		this.addKeyValue("Tag", tag);

	}

	/**
	 * The method to get the name
	 * @returns A String representing the name
	 */
	public getName(): string	{
		return this.getKeyValue("name");

	}

	/**
	 * The method to set the value to name
	 * @param name A String representing the name
	 */
	public setName(name: string): void	{
		this.addKeyValue("name", name);

	}

}
export {
	Consent as MasterModel,
	Consent as Consent
}
