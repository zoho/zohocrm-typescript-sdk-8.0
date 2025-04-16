import {Address} from "./address";
import {Description} from "./description";
import {Industry} from "./industry";
import {SocialMedia} from "./social_media";
import {Model} from "../../../../../../utils/util/model";

class EnrichedData implements Model{

	private orgStatus: string;
	private description: Array<Description>;
	private ceo: string;
	private secondaryEmail: string;
	private revenue: string;
	private yearsInIndustry: string;
	private otherContacts: Array<string>;
	private technoGraphicData: string;
	private logo: string;
	private secondaryContact: string;
	private id: string;
	private otherEmails: Array<string>;
	private signIn: string;
	private website: string;
	private address: Array<Address>;
	private signUp: string;
	private orgType: string;
	private headQuarters: Array<Address>;
	private noOfEmployees: string;
	private territoryList: Array<string>;
	private foundingYear: string;
	private industries: Array<Industry>;
	private name: string;
	private primaryEmail: string;
	private businessModel: Array<string>;
	private primaryContact: string;
	private socialMedia: Array<SocialMedia>;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the orgStatus
	 * @returns A String representing the orgStatus
	 */
	public getOrgStatus(): string	{
		return this.orgStatus;

	}

	/**
	 * The method to set the value to orgStatus
	 * @param orgStatus A String representing the orgStatus
	 */
	public setOrgStatus(orgStatus: string): void	{
		this.orgStatus = orgStatus;
		this.keyModified.set("org_status", 1);

	}

	/**
	 * The method to get the description
	 * @returns An Array representing the description
	 */
	public getDescription(): Array<Description>	{
		return this.description;

	}

	/**
	 * The method to set the value to description
	 * @param description An Array representing the description
	 */
	public setDescription(description: Array<Description>): void	{
		this.description = description;
		this.keyModified.set("description", 1);

	}

	/**
	 * The method to get the ceo
	 * @returns A String representing the ceo
	 */
	public getCeo(): string	{
		return this.ceo;

	}

	/**
	 * The method to set the value to ceo
	 * @param ceo A String representing the ceo
	 */
	public setCeo(ceo: string): void	{
		this.ceo = ceo;
		this.keyModified.set("ceo", 1);

	}

	/**
	 * The method to get the secondaryEmail
	 * @returns A String representing the secondaryEmail
	 */
	public getSecondaryEmail(): string	{
		return this.secondaryEmail;

	}

	/**
	 * The method to set the value to secondaryEmail
	 * @param secondaryEmail A String representing the secondaryEmail
	 */
	public setSecondaryEmail(secondaryEmail: string): void	{
		this.secondaryEmail = secondaryEmail;
		this.keyModified.set("secondary_email", 1);

	}

	/**
	 * The method to get the revenue
	 * @returns A String representing the revenue
	 */
	public getRevenue(): string	{
		return this.revenue;

	}

	/**
	 * The method to set the value to revenue
	 * @param revenue A String representing the revenue
	 */
	public setRevenue(revenue: string): void	{
		this.revenue = revenue;
		this.keyModified.set("revenue", 1);

	}

	/**
	 * The method to get the yearsInIndustry
	 * @returns A String representing the yearsInIndustry
	 */
	public getYearsInIndustry(): string	{
		return this.yearsInIndustry;

	}

	/**
	 * The method to set the value to yearsInIndustry
	 * @param yearsInIndustry A String representing the yearsInIndustry
	 */
	public setYearsInIndustry(yearsInIndustry: string): void	{
		this.yearsInIndustry = yearsInIndustry;
		this.keyModified.set("years_in_industry", 1);

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
	 * The method to get the technoGraphicData
	 * @returns A String representing the technoGraphicData
	 */
	public getTechnoGraphicData(): string	{
		return this.technoGraphicData;

	}

	/**
	 * The method to set the value to technoGraphicData
	 * @param technoGraphicData A String representing the technoGraphicData
	 */
	public setTechnoGraphicData(technoGraphicData: string): void	{
		this.technoGraphicData = technoGraphicData;
		this.keyModified.set("techno_graphic_data", 1);

	}

	/**
	 * The method to get the logo
	 * @returns A String representing the logo
	 */
	public getLogo(): string	{
		return this.logo;

	}

	/**
	 * The method to set the value to logo
	 * @param logo A String representing the logo
	 */
	public setLogo(logo: string): void	{
		this.logo = logo;
		this.keyModified.set("logo", 1);

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
	 * The method to get the otherEmails
	 * @returns An Array representing the otherEmails
	 */
	public getOtherEmails(): Array<string>	{
		return this.otherEmails;

	}

	/**
	 * The method to set the value to otherEmails
	 * @param otherEmails An Array representing the otherEmails
	 */
	public setOtherEmails(otherEmails: Array<string>): void	{
		this.otherEmails = otherEmails;
		this.keyModified.set("other_emails", 1);

	}

	/**
	 * The method to get the signIn
	 * @returns A String representing the signIn
	 */
	public getSignIn(): string	{
		return this.signIn;

	}

	/**
	 * The method to set the value to signIn
	 * @param signIn A String representing the signIn
	 */
	public setSignIn(signIn: string): void	{
		this.signIn = signIn;
		this.keyModified.set("sign_in", 1);

	}

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
	 * The method to get the address
	 * @returns An Array representing the address
	 */
	public getAddress(): Array<Address>	{
		return this.address;

	}

	/**
	 * The method to set the value to address
	 * @param address An Array representing the address
	 */
	public setAddress(address: Array<Address>): void	{
		this.address = address;
		this.keyModified.set("address", 1);

	}

	/**
	 * The method to get the signUp
	 * @returns A String representing the signUp
	 */
	public getSignUp(): string	{
		return this.signUp;

	}

	/**
	 * The method to set the value to signUp
	 * @param signUp A String representing the signUp
	 */
	public setSignUp(signUp: string): void	{
		this.signUp = signUp;
		this.keyModified.set("sign_up", 1);

	}

	/**
	 * The method to get the orgType
	 * @returns A String representing the orgType
	 */
	public getOrgType(): string	{
		return this.orgType;

	}

	/**
	 * The method to set the value to orgType
	 * @param orgType A String representing the orgType
	 */
	public setOrgType(orgType: string): void	{
		this.orgType = orgType;
		this.keyModified.set("org_type", 1);

	}

	/**
	 * The method to get the headQuarters
	 * @returns An Array representing the headQuarters
	 */
	public getHeadQuarters(): Array<Address>	{
		return this.headQuarters;

	}

	/**
	 * The method to set the value to headQuarters
	 * @param headQuarters An Array representing the headQuarters
	 */
	public setHeadQuarters(headQuarters: Array<Address>): void	{
		this.headQuarters = headQuarters;
		this.keyModified.set("head_quarters", 1);

	}

	/**
	 * The method to get the noOfEmployees
	 * @returns A String representing the noOfEmployees
	 */
	public getNoOfEmployees(): string	{
		return this.noOfEmployees;

	}

	/**
	 * The method to set the value to noOfEmployees
	 * @param noOfEmployees A String representing the noOfEmployees
	 */
	public setNoOfEmployees(noOfEmployees: string): void	{
		this.noOfEmployees = noOfEmployees;
		this.keyModified.set("no_of_employees", 1);

	}

	/**
	 * The method to get the territoryList
	 * @returns An Array representing the territoryList
	 */
	public getTerritoryList(): Array<string>	{
		return this.territoryList;

	}

	/**
	 * The method to set the value to territoryList
	 * @param territoryList An Array representing the territoryList
	 */
	public setTerritoryList(territoryList: Array<string>): void	{
		this.territoryList = territoryList;
		this.keyModified.set("territory_list", 1);

	}

	/**
	 * The method to get the foundingYear
	 * @returns A String representing the foundingYear
	 */
	public getFoundingYear(): string	{
		return this.foundingYear;

	}

	/**
	 * The method to set the value to foundingYear
	 * @param foundingYear A String representing the foundingYear
	 */
	public setFoundingYear(foundingYear: string): void	{
		this.foundingYear = foundingYear;
		this.keyModified.set("founding_year", 1);

	}

	/**
	 * The method to get the industries
	 * @returns An Array representing the industries
	 */
	public getIndustries(): Array<Industry>	{
		return this.industries;

	}

	/**
	 * The method to set the value to industries
	 * @param industries An Array representing the industries
	 */
	public setIndustries(industries: Array<Industry>): void	{
		this.industries = industries;
		this.keyModified.set("industries", 1);

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
	 * The method to get the businessModel
	 * @returns An Array representing the businessModel
	 */
	public getBusinessModel(): Array<string>	{
		return this.businessModel;

	}

	/**
	 * The method to set the value to businessModel
	 * @param businessModel An Array representing the businessModel
	 */
	public setBusinessModel(businessModel: Array<string>): void	{
		this.businessModel = businessModel;
		this.keyModified.set("business_model", 1);

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
