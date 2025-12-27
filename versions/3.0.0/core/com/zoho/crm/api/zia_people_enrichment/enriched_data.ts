import {Address} from "./address";
import {CompanyInfo} from "./company_info";
import {EmailInfo} from "./email_info";
import {SocialMedia} from "./social_media";
import {Model} from "../../../../../../utils/util/model";

class EnrichedData implements Model{

	private website: string;
	private emailInfos: Array<EmailInfo>;
	private gender: string;
	private companyInfo: CompanyInfo;
	private lastName: string;
	private educations: Array<any>;
	private middleName: string;
	private skills: Array<any>;
	private otherContacts: Array<string>;
	private addressListInfo: Array<Address>;
	private primaryAddressInfo: Address;
	private name: string;
	private secondaryContact: string;
	private primaryEmail: string;
	private designation: string;
	private id: string;
	private interests: Array<any>;
	private firstName: string;
	private primaryContact: string;
	private socialMedia: Array<SocialMedia>;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the website
	 * @returns A String representing the website
	 */
	public getWebsite(): string	{
		return this.website;

	}

	/**
	 * The method to set the value to website
	 * @param website A String representing the website
	 */
	public setWebsite(website: string): void	{
		this.website = website;
		this.keyModified.set("website", 1);

	}

	/**
	 * The method to get the emailInfos
	 * @returns An Array representing the emailInfos
	 */
	public getEmailInfos(): Array<EmailInfo>	{
		return this.emailInfos;

	}

	/**
	 * The method to set the value to emailInfos
	 * @param emailInfos An Array representing the emailInfos
	 */
	public setEmailInfos(emailInfos: Array<EmailInfo>): void	{
		this.emailInfos = emailInfos;
		this.keyModified.set("email_infos", 1);

	}

	/**
	 * The method to get the gender
	 * @returns A String representing the gender
	 */
	public getGender(): string	{
		return this.gender;

	}

	/**
	 * The method to set the value to gender
	 * @param gender A String representing the gender
	 */
	public setGender(gender: string): void	{
		this.gender = gender;
		this.keyModified.set("gender", 1);

	}

	/**
	 * The method to get the companyInfo
	 * @returns An instance of CompanyInfo
	 */
	public getCompanyInfo(): CompanyInfo	{
		return this.companyInfo;

	}

	/**
	 * The method to set the value to companyInfo
	 * @param companyInfo An instance of CompanyInfo
	 */
	public setCompanyInfo(companyInfo: CompanyInfo): void	{
		this.companyInfo = companyInfo;
		this.keyModified.set("company_info", 1);

	}

	/**
	 * The method to get the lastName
	 * @returns A String representing the lastName
	 */
	public getLastName(): string	{
		return this.lastName;

	}

	/**
	 * The method to set the value to lastName
	 * @param lastName A String representing the lastName
	 */
	public setLastName(lastName: string): void	{
		this.lastName = lastName;
		this.keyModified.set("last_name", 1);

	}

	/**
	 * The method to get the educations
	 * @returns An Array representing the educations
	 */
	public getEducations(): Array<any>	{
		return this.educations;

	}

	/**
	 * The method to set the value to educations
	 * @param educations An Array representing the educations
	 */
	public setEducations(educations: Array<any>): void	{
		this.educations = educations;
		this.keyModified.set("educations", 1);

	}

	/**
	 * The method to get the middleName
	 * @returns A String representing the middleName
	 */
	public getMiddleName(): string	{
		return this.middleName;

	}

	/**
	 * The method to set the value to middleName
	 * @param middleName A String representing the middleName
	 */
	public setMiddleName(middleName: string): void	{
		this.middleName = middleName;
		this.keyModified.set("middle_name", 1);

	}

	/**
	 * The method to get the skills
	 * @returns An Array representing the skills
	 */
	public getSkills(): Array<any>	{
		return this.skills;

	}

	/**
	 * The method to set the value to skills
	 * @param skills An Array representing the skills
	 */
	public setSkills(skills: Array<any>): void	{
		this.skills = skills;
		this.keyModified.set("skills", 1);

	}

	/**
	 * The method to get the otherContacts
	 * @returns An Array representing the otherContacts
	 */
	public getOtherContacts(): Array<string>	{
		return this.otherContacts;

	}

	/**
	 * The method to set the value to otherContacts
	 * @param otherContacts An Array representing the otherContacts
	 */
	public setOtherContacts(otherContacts: Array<string>): void	{
		this.otherContacts = otherContacts;
		this.keyModified.set("other_contacts", 1);

	}

	/**
	 * The method to get the addressListInfo
	 * @returns An Array representing the addressListInfo
	 */
	public getAddressListInfo(): Array<Address>	{
		return this.addressListInfo;

	}

	/**
	 * The method to set the value to addressListInfo
	 * @param addressListInfo An Array representing the addressListInfo
	 */
	public setAddressListInfo(addressListInfo: Array<Address>): void	{
		this.addressListInfo = addressListInfo;
		this.keyModified.set("address_list_info", 1);

	}

	/**
	 * The method to get the primaryAddressInfo
	 * @returns An instance of Address
	 */
	public getPrimaryAddressInfo(): Address	{
		return this.primaryAddressInfo;

	}

	/**
	 * The method to set the value to primaryAddressInfo
	 * @param primaryAddressInfo An instance of Address
	 */
	public setPrimaryAddressInfo(primaryAddressInfo: Address): void	{
		this.primaryAddressInfo = primaryAddressInfo;
		this.keyModified.set("primary_address_info", 1);

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
	 * The method to get the secondaryContact
	 * @returns A String representing the secondaryContact
	 */
	public getSecondaryContact(): string	{
		return this.secondaryContact;

	}

	/**
	 * The method to set the value to secondaryContact
	 * @param secondaryContact A String representing the secondaryContact
	 */
	public setSecondaryContact(secondaryContact: string): void	{
		this.secondaryContact = secondaryContact;
		this.keyModified.set("secondary_contact", 1);

	}

	/**
	 * The method to get the primaryEmail
	 * @returns A String representing the primaryEmail
	 */
	public getPrimaryEmail(): string	{
		return this.primaryEmail;

	}

	/**
	 * The method to set the value to primaryEmail
	 * @param primaryEmail A String representing the primaryEmail
	 */
	public setPrimaryEmail(primaryEmail: string): void	{
		this.primaryEmail = primaryEmail;
		this.keyModified.set("primary_email", 1);

	}

	/**
	 * The method to get the designation
	 * @returns A String representing the designation
	 */
	public getDesignation(): string	{
		return this.designation;

	}

	/**
	 * The method to set the value to designation
	 * @param designation A String representing the designation
	 */
	public setDesignation(designation: string): void	{
		this.designation = designation;
		this.keyModified.set("designation", 1);

	}

	/**
	 * The method to get the id
	 * @returns A String representing the id
	 */
	public getId(): string	{
		return this.id;

	}

	/**
	 * The method to set the value to id
	 * @param id A String representing the id
	 */
	public setId(id: string): void	{
		this.id = id;
		this.keyModified.set("id", 1);

	}

	/**
	 * The method to get the interests
	 * @returns An Array representing the interests
	 */
	public getInterests(): Array<any>	{
		return this.interests;

	}

	/**
	 * The method to set the value to interests
	 * @param interests An Array representing the interests
	 */
	public setInterests(interests: Array<any>): void	{
		this.interests = interests;
		this.keyModified.set("interests", 1);

	}

	/**
	 * The method to get the firstName
	 * @returns A String representing the firstName
	 */
	public getFirstName(): string	{
		return this.firstName;

	}

	/**
	 * The method to set the value to firstName
	 * @param firstName A String representing the firstName
	 */
	public setFirstName(firstName: string): void	{
		this.firstName = firstName;
		this.keyModified.set("first_name", 1);

	}

	/**
	 * The method to get the primaryContact
	 * @returns A String representing the primaryContact
	 */
	public getPrimaryContact(): string	{
		return this.primaryContact;

	}

	/**
	 * The method to set the value to primaryContact
	 * @param primaryContact A String representing the primaryContact
	 */
	public setPrimaryContact(primaryContact: string): void	{
		this.primaryContact = primaryContact;
		this.keyModified.set("primary_contact", 1);

	}

	/**
	 * The method to get the socialMedia
	 * @returns An Array representing the socialMedia
	 */
	public getSocialMedia(): Array<SocialMedia>	{
		return this.socialMedia;

	}

	/**
	 * The method to set the value to socialMedia
	 * @param socialMedia An Array representing the socialMedia
	 */
	public setSocialMedia(socialMedia: Array<SocialMedia>): void	{
		this.socialMedia = socialMedia;
		this.keyModified.set("social_media", 1);

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
	EnrichedData as MasterModel,
	EnrichedData as EnrichedData
}
