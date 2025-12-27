import {CheckinPreferences} from "./checkin_preferences";
import {HierarchyPreferences} from "./hierarchy_preferences";
import {LicenseDetails} from "./license_details";
import {Choice} from "../../../../../../utils/util/choice";
import {Model} from "../../../../../../utils/util/model";

class Org implements Model{

	private country: string;
	private photoId: string;
	private city: string;
	private description: string;
	private mcStatus: boolean;
	private gappsEnabled: boolean;
	private translationEnabled: boolean;
	private street: string;
	private domainName: string;
	private alias: string;
	private currency: string;
	private id: string;
	private state: string;
	private fax: string;
	private zip: string;
	private employeeCount: string;
	private website: string;
	private currencySymbol: string;
	private mobile: string;
	private currencyLocale: string;
	private primaryZuid: string;
	private ziaPortalId: string;
	private timeZone: string;
	private zgid: string;
	private countryCode: string;
	private deletableOrgAccount: boolean;
	private licenseDetails: LicenseDetails;
	private hierarchyPreferences: HierarchyPreferences;
	private phone: string;
	private companyName: string;
	private privacySettings: boolean;
	private primaryEmail: string;
	private isoCode: string;
	private hipaaComplianceEnabled: boolean;
	private liteUsersEnabled: boolean;
	private maxPerPage: number;
	private ezgid: string;
	private callIcon: string;
	private oauthPresence: boolean;
	private ziaZgid: number;
	private checkinPreferences: CheckinPreferences;
	private type: Choice<string>;
	private createdTime: Date;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the country
	 * @returns A String representing the country
	 */
	public getCountry(): string	{
		return this.country;

	}

	/**
	 * The method to set the value to country
	 * @param country A String representing the country
	 */
	public setCountry(country: string): void	{
		this.country = country;
		this.keyModified.set("country", 1);

	}

	/**
	 * The method to get the photoId
	 * @returns A String representing the photoId
	 */
	public getPhotoId(): string	{
		return this.photoId;

	}

	/**
	 * The method to set the value to photoId
	 * @param photoId A String representing the photoId
	 */
	public setPhotoId(photoId: string): void	{
		this.photoId = photoId;
		this.keyModified.set("photo_id", 1);

	}

	/**
	 * The method to get the city
	 * @returns A String representing the city
	 */
	public getCity(): string	{
		return this.city;

	}

	/**
	 * The method to set the value to city
	 * @param city A String representing the city
	 */
	public setCity(city: string): void	{
		this.city = city;
		this.keyModified.set("city", 1);

	}

	/**
	 * The method to get the description
	 * @returns A String representing the description
	 */
	public getDescription(): string	{
		return this.description;

	}

	/**
	 * The method to set the value to description
	 * @param description A String representing the description
	 */
	public setDescription(description: string): void	{
		this.description = description;
		this.keyModified.set("description", 1);

	}

	/**
	 * The method to get the mcStatus
	 * @returns A Boolean representing the mcStatus
	 */
	public getMcStatus(): boolean	{
		return this.mcStatus;

	}

	/**
	 * The method to set the value to mcStatus
	 * @param mcStatus A Boolean representing the mcStatus
	 */
	public setMcStatus(mcStatus: boolean): void	{
		this.mcStatus = mcStatus;
		this.keyModified.set("mc_status", 1);

	}

	/**
	 * The method to get the gappsEnabled
	 * @returns A Boolean representing the gappsEnabled
	 */
	public getGappsEnabled(): boolean	{
		return this.gappsEnabled;

	}

	/**
	 * The method to set the value to gappsEnabled
	 * @param gappsEnabled A Boolean representing the gappsEnabled
	 */
	public setGappsEnabled(gappsEnabled: boolean): void	{
		this.gappsEnabled = gappsEnabled;
		this.keyModified.set("gapps_enabled", 1);

	}

	/**
	 * The method to get the translationEnabled
	 * @returns A Boolean representing the translationEnabled
	 */
	public getTranslationEnabled(): boolean	{
		return this.translationEnabled;

	}

	/**
	 * The method to set the value to translationEnabled
	 * @param translationEnabled A Boolean representing the translationEnabled
	 */
	public setTranslationEnabled(translationEnabled: boolean): void	{
		this.translationEnabled = translationEnabled;
		this.keyModified.set("translation_enabled", 1);

	}

	/**
	 * The method to get the street
	 * @returns A String representing the street
	 */
	public getStreet(): string	{
		return this.street;

	}

	/**
	 * The method to set the value to street
	 * @param street A String representing the street
	 */
	public setStreet(street: string): void	{
		this.street = street;
		this.keyModified.set("street", 1);

	}

	/**
	 * The method to get the domainName
	 * @returns A String representing the domainName
	 */
	public getDomainName(): string	{
		return this.domainName;

	}

	/**
	 * The method to set the value to domainName
	 * @param domainName A String representing the domainName
	 */
	public setDomainName(domainName: string): void	{
		this.domainName = domainName;
		this.keyModified.set("domain_name", 1);

	}

	/**
	 * The method to get the alias
	 * @returns A String representing the alias
	 */
	public getAlias(): string	{
		return this.alias;

	}

	/**
	 * The method to set the value to alias
	 * @param alias A String representing the alias
	 */
	public setAlias(alias: string): void	{
		this.alias = alias;
		this.keyModified.set("alias", 1);

	}

	/**
	 * The method to get the currency
	 * @returns A String representing the currency
	 */
	public getCurrency(): string	{
		return this.currency;

	}

	/**
	 * The method to set the value to currency
	 * @param currency A String representing the currency
	 */
	public setCurrency(currency: string): void	{
		this.currency = currency;
		this.keyModified.set("currency", 1);

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
	 * The method to get the state
	 * @returns A String representing the state
	 */
	public getState(): string	{
		return this.state;

	}

	/**
	 * The method to set the value to state
	 * @param state A String representing the state
	 */
	public setState(state: string): void	{
		this.state = state;
		this.keyModified.set("state", 1);

	}

	/**
	 * The method to get the fax
	 * @returns A String representing the fax
	 */
	public getFax(): string	{
		return this.fax;

	}

	/**
	 * The method to set the value to fax
	 * @param fax A String representing the fax
	 */
	public setFax(fax: string): void	{
		this.fax = fax;
		this.keyModified.set("fax", 1);

	}

	/**
	 * The method to get the zip
	 * @returns A String representing the zip
	 */
	public getZip(): string	{
		return this.zip;

	}

	/**
	 * The method to set the value to zip
	 * @param zip A String representing the zip
	 */
	public setZip(zip: string): void	{
		this.zip = zip;
		this.keyModified.set("zip", 1);

	}

	/**
	 * The method to get the employeeCount
	 * @returns A String representing the employeeCount
	 */
	public getEmployeeCount(): string	{
		return this.employeeCount;

	}

	/**
	 * The method to set the value to employeeCount
	 * @param employeeCount A String representing the employeeCount
	 */
	public setEmployeeCount(employeeCount: string): void	{
		this.employeeCount = employeeCount;
		this.keyModified.set("employee_count", 1);

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
	 * The method to get the currencySymbol
	 * @returns A String representing the currencySymbol
	 */
	public getCurrencySymbol(): string	{
		return this.currencySymbol;

	}

	/**
	 * The method to set the value to currencySymbol
	 * @param currencySymbol A String representing the currencySymbol
	 */
	public setCurrencySymbol(currencySymbol: string): void	{
		this.currencySymbol = currencySymbol;
		this.keyModified.set("currency_symbol", 1);

	}

	/**
	 * The method to get the mobile
	 * @returns A String representing the mobile
	 */
	public getMobile(): string	{
		return this.mobile;

	}

	/**
	 * The method to set the value to mobile
	 * @param mobile A String representing the mobile
	 */
	public setMobile(mobile: string): void	{
		this.mobile = mobile;
		this.keyModified.set("mobile", 1);

	}

	/**
	 * The method to get the currencyLocale
	 * @returns A String representing the currencyLocale
	 */
	public getCurrencyLocale(): string	{
		return this.currencyLocale;

	}

	/**
	 * The method to set the value to currencyLocale
	 * @param currencyLocale A String representing the currencyLocale
	 */
	public setCurrencyLocale(currencyLocale: string): void	{
		this.currencyLocale = currencyLocale;
		this.keyModified.set("currency_locale", 1);

	}

	/**
	 * The method to get the primaryZuid
	 * @returns A String representing the primaryZuid
	 */
	public getPrimaryZuid(): string	{
		return this.primaryZuid;

	}

	/**
	 * The method to set the value to primaryZuid
	 * @param primaryZuid A String representing the primaryZuid
	 */
	public setPrimaryZuid(primaryZuid: string): void	{
		this.primaryZuid = primaryZuid;
		this.keyModified.set("primary_zuid", 1);

	}

	/**
	 * The method to get the ziaPortalId
	 * @returns A String representing the ziaPortalId
	 */
	public getZiaPortalId(): string	{
		return this.ziaPortalId;

	}

	/**
	 * The method to set the value to ziaPortalId
	 * @param ziaPortalId A String representing the ziaPortalId
	 */
	public setZiaPortalId(ziaPortalId: string): void	{
		this.ziaPortalId = ziaPortalId;
		this.keyModified.set("zia_portal_id", 1);

	}

	/**
	 * The method to get the timeZone
	 * @returns A String representing the timeZone
	 */
	public getTimeZone(): string	{
		return this.timeZone;

	}

	/**
	 * The method to set the value to timeZone
	 * @param timeZone A String representing the timeZone
	 */
	public setTimeZone(timeZone: string): void	{
		this.timeZone = timeZone;
		this.keyModified.set("time_zone", 1);

	}

	/**
	 * The method to get the zgid
	 * @returns A String representing the zgid
	 */
	public getZgid(): string	{
		return this.zgid;

	}

	/**
	 * The method to set the value to zgid
	 * @param zgid A String representing the zgid
	 */
	public setZgid(zgid: string): void	{
		this.zgid = zgid;
		this.keyModified.set("zgid", 1);

	}

	/**
	 * The method to get the countryCode
	 * @returns A String representing the countryCode
	 */
	public getCountryCode(): string	{
		return this.countryCode;

	}

	/**
	 * The method to set the value to countryCode
	 * @param countryCode A String representing the countryCode
	 */
	public setCountryCode(countryCode: string): void	{
		this.countryCode = countryCode;
		this.keyModified.set("country_code", 1);

	}

	/**
	 * The method to get the deletableOrgAccount
	 * @returns A Boolean representing the deletableOrgAccount
	 */
	public getDeletableOrgAccount(): boolean	{
		return this.deletableOrgAccount;

	}

	/**
	 * The method to set the value to deletableOrgAccount
	 * @param deletableOrgAccount A Boolean representing the deletableOrgAccount
	 */
	public setDeletableOrgAccount(deletableOrgAccount: boolean): void	{
		this.deletableOrgAccount = deletableOrgAccount;
		this.keyModified.set("deletable_org_account", 1);

	}

	/**
	 * The method to get the licenseDetails
	 * @returns An instance of LicenseDetails
	 */
	public getLicenseDetails(): LicenseDetails	{
		return this.licenseDetails;

	}

	/**
	 * The method to set the value to licenseDetails
	 * @param licenseDetails An instance of LicenseDetails
	 */
	public setLicenseDetails(licenseDetails: LicenseDetails): void	{
		this.licenseDetails = licenseDetails;
		this.keyModified.set("license_details", 1);

	}

	/**
	 * The method to get the hierarchyPreferences
	 * @returns An instance of HierarchyPreferences
	 */
	public getHierarchyPreferences(): HierarchyPreferences	{
		return this.hierarchyPreferences;

	}

	/**
	 * The method to set the value to hierarchyPreferences
	 * @param hierarchyPreferences An instance of HierarchyPreferences
	 */
	public setHierarchyPreferences(hierarchyPreferences: HierarchyPreferences): void	{
		this.hierarchyPreferences = hierarchyPreferences;
		this.keyModified.set("hierarchy_preferences", 1);

	}

	/**
	 * The method to get the phone
	 * @returns A String representing the phone
	 */
	public getPhone(): string	{
		return this.phone;

	}

	/**
	 * The method to set the value to phone
	 * @param phone A String representing the phone
	 */
	public setPhone(phone: string): void	{
		this.phone = phone;
		this.keyModified.set("phone", 1);

	}

	/**
	 * The method to get the companyName
	 * @returns A String representing the companyName
	 */
	public getCompanyName(): string	{
		return this.companyName;

	}

	/**
	 * The method to set the value to companyName
	 * @param companyName A String representing the companyName
	 */
	public setCompanyName(companyName: string): void	{
		this.companyName = companyName;
		this.keyModified.set("company_name", 1);

	}

	/**
	 * The method to get the privacySettings
	 * @returns A Boolean representing the privacySettings
	 */
	public getPrivacySettings(): boolean	{
		return this.privacySettings;

	}

	/**
	 * The method to set the value to privacySettings
	 * @param privacySettings A Boolean representing the privacySettings
	 */
	public setPrivacySettings(privacySettings: boolean): void	{
		this.privacySettings = privacySettings;
		this.keyModified.set("privacy_settings", 1);

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
	 * The method to get the isoCode
	 * @returns A String representing the isoCode
	 */
	public getIsoCode(): string	{
		return this.isoCode;

	}

	/**
	 * The method to set the value to isoCode
	 * @param isoCode A String representing the isoCode
	 */
	public setIsoCode(isoCode: string): void	{
		this.isoCode = isoCode;
		this.keyModified.set("iso_code", 1);

	}

	/**
	 * The method to get the hipaaComplianceEnabled
	 * @returns A Boolean representing the hipaaComplianceEnabled
	 */
	public getHipaaComplianceEnabled(): boolean	{
		return this.hipaaComplianceEnabled;

	}

	/**
	 * The method to set the value to hipaaComplianceEnabled
	 * @param hipaaComplianceEnabled A Boolean representing the hipaaComplianceEnabled
	 */
	public setHipaaComplianceEnabled(hipaaComplianceEnabled: boolean): void	{
		this.hipaaComplianceEnabled = hipaaComplianceEnabled;
		this.keyModified.set("hipaa_compliance_enabled", 1);

	}

	/**
	 * The method to get the liteUsersEnabled
	 * @returns A Boolean representing the liteUsersEnabled
	 */
	public getLiteUsersEnabled(): boolean	{
		return this.liteUsersEnabled;

	}

	/**
	 * The method to set the value to liteUsersEnabled
	 * @param liteUsersEnabled A Boolean representing the liteUsersEnabled
	 */
	public setLiteUsersEnabled(liteUsersEnabled: boolean): void	{
		this.liteUsersEnabled = liteUsersEnabled;
		this.keyModified.set("lite_users_enabled", 1);

	}

	/**
	 * The method to get the maxPerPage
	 * @returns A number representing the maxPerPage
	 */
	public getMaxPerPage(): number	{
		return this.maxPerPage;

	}

	/**
	 * The method to set the value to maxPerPage
	 * @param maxPerPage A number representing the maxPerPage
	 */
	public setMaxPerPage(maxPerPage: number): void	{
		this.maxPerPage = maxPerPage;
		this.keyModified.set("max_per_page", 1);

	}

	/**
	 * The method to get the ezgid
	 * @returns A String representing the ezgid
	 */
	public getEzgid(): string	{
		return this.ezgid;

	}

	/**
	 * The method to set the value to ezgid
	 * @param ezgid A String representing the ezgid
	 */
	public setEzgid(ezgid: string): void	{
		this.ezgid = ezgid;
		this.keyModified.set("ezgid", 1);

	}

	/**
	 * The method to get the callIcon
	 * @returns A String representing the callIcon
	 */
	public getCallIcon(): string	{
		return this.callIcon;

	}

	/**
	 * The method to set the value to callIcon
	 * @param callIcon A String representing the callIcon
	 */
	public setCallIcon(callIcon: string): void	{
		this.callIcon = callIcon;
		this.keyModified.set("call_icon", 1);

	}

	/**
	 * The method to get the oauthPresence
	 * @returns A Boolean representing the oauthPresence
	 */
	public getOauthPresence(): boolean	{
		return this.oauthPresence;

	}

	/**
	 * The method to set the value to oauthPresence
	 * @param oauthPresence A Boolean representing the oauthPresence
	 */
	public setOauthPresence(oauthPresence: boolean): void	{
		this.oauthPresence = oauthPresence;
		this.keyModified.set("oauth_presence", 1);

	}

	/**
	 * The method to get the ziaZgid
	 * @returns A number representing the ziaZgid
	 */
	public getZiaZgid(): number	{
		return this.ziaZgid;

	}

	/**
	 * The method to set the value to ziaZgid
	 * @param ziaZgid A number representing the ziaZgid
	 */
	public setZiaZgid(ziaZgid: number): void	{
		this.ziaZgid = ziaZgid;
		this.keyModified.set("zia_zgid", 1);

	}

	/**
	 * The method to get the checkinPreferences
	 * @returns An instance of CheckinPreferences
	 */
	public getCheckinPreferences(): CheckinPreferences	{
		return this.checkinPreferences;

	}

	/**
	 * The method to set the value to checkinPreferences
	 * @param checkinPreferences An instance of CheckinPreferences
	 */
	public setCheckinPreferences(checkinPreferences: CheckinPreferences): void	{
		this.checkinPreferences = checkinPreferences;
		this.keyModified.set("checkin_preferences", 1);

	}

	/**
	 * The method to get the type
	 * @returns An instance of Choice<string>
	 */
	public getType(): Choice<string>	{
		return this.type;

	}

	/**
	 * The method to set the value to type
	 * @param type An instance of Choice<string>
	 */
	public setType(type: Choice<string>): void	{
		this.type = type;
		this.keyModified.set("type", 1);

	}

	/**
	 * The method to get the createdTime
	 * @returns An instance of Date
	 */
	public getCreatedTime(): Date	{
		return this.createdTime;

	}

	/**
	 * The method to set the value to createdTime
	 * @param createdTime An instance of Date
	 */
	public setCreatedTime(createdTime: Date): void	{
		this.createdTime = createdTime;
		this.keyModified.set("created_time", 1);

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
	Org as MasterModel,
	Org as Org
}
