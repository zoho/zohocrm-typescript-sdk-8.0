import {Record} from "../record/record";
import {Tag} from "../tags/tag";
import {CustomizeInfo} from "./customize_info";
import {MinifiedUser} from "./minified_user";
import {Profile} from "./profile";
import {Role} from "./role";
import {Shift} from "./shift";
import {Theme} from "./theme";
import {Choice} from "../../../../../../utils/util/choice";
import {Model} from "../../../../../../utils/util/model";
import {MomentZone} from "moment-timezone";

class Users extends Record implements Model{

	/**
	 * The method to get the country
	 * @returns A String representing the country
	 */
	public getCountry(): string	{
		return this.getKeyValue("country");

	}

	/**
	 * The method to set the value to country
	 * @param country A String representing the country
	 */
	public setCountry(country: string): void	{
		this.addKeyValue("country", country);

	}

	/**
	 * The method to get the language
	 * @returns A String representing the language
	 */
	public getLanguage(): string	{
		return this.getKeyValue("language");

	}

	/**
	 * The method to set the value to language
	 * @param language A String representing the language
	 */
	public setLanguage(language: string): void	{
		this.addKeyValue("language", language);

	}

	/**
	 * The method to get the microsoft
	 * @returns A Boolean representing the microsoft
	 */
	public getMicrosoft(): boolean	{
		return this.getKeyValue("microsoft");

	}

	/**
	 * The method to set the value to microsoft
	 * @param microsoft A Boolean representing the microsoft
	 */
	public setMicrosoft(microsoft: boolean): void	{
		this.addKeyValue("microsoft", microsoft);

	}

	/**
	 * The method to get the shiftEffectiveFrom
	 * @returns An Object representing the shiftEffectiveFrom
	 */
	public getShiftEffectiveFrom(): any	{
		return this.getKeyValue("$shift_effective_from");

	}

	/**
	 * The method to set the value to shiftEffectiveFrom
	 * @param shiftEffectiveFrom An Object representing the shiftEffectiveFrom
	 */
	public setShiftEffectiveFrom(shiftEffectiveFrom: any): void	{
		this.addKeyValue("$shift_effective_from", shiftEffectiveFrom);

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
	 * The method to get the state
	 * @returns A String representing the state
	 */
	public getState(): string	{
		return this.getKeyValue("state");

	}

	/**
	 * The method to set the value to state
	 * @param state A String representing the state
	 */
	public setState(state: string): void	{
		this.addKeyValue("state", state);

	}

	/**
	 * The method to get the fax
	 * @returns A String representing the fax
	 */
	public getFax(): string	{
		return this.getKeyValue("fax");

	}

	/**
	 * The method to set the value to fax
	 * @param fax A String representing the fax
	 */
	public setFax(fax: string): void	{
		this.addKeyValue("fax", fax);

	}

	/**
	 * The method to get the countryLocale
	 * @returns A String representing the countryLocale
	 */
	public getCountryLocale(): string	{
		return this.getKeyValue("country_locale");

	}

	/**
	 * The method to set the value to countryLocale
	 * @param countryLocale A String representing the countryLocale
	 */
	public setCountryLocale(countryLocale: string): void	{
		this.addKeyValue("country_locale", countryLocale);

	}

	/**
	 * The method to get the zip
	 * @returns A String representing the zip
	 */
	public getZip(): string	{
		return this.getKeyValue("zip");

	}

	/**
	 * The method to set the value to zip
	 * @param zip A String representing the zip
	 */
	public setZip(zip: string): void	{
		this.addKeyValue("zip", zip);

	}

	/**
	 * The method to get the createdTime
	 * @returns An instance of Date
	 */
	public getCreatedTime(): Date	{
		return this.getKeyValue("created_time");

	}

	/**
	 * The method to set the value to createdTime
	 * @param createdTime An instance of Date
	 */
	public setCreatedTime(createdTime: Date): void	{
		this.addKeyValue("created_time", createdTime);

	}

	/**
	 * The method to get the timeFormat
	 * @returns An instance of Choice<string>
	 */
	public getTimeFormat(): Choice<string>	{
		return this.getKeyValue("time_format");

	}

	/**
	 * The method to set the value to timeFormat
	 * @param timeFormat An instance of Choice<string>
	 */
	public setTimeFormat(timeFormat: Choice<string>): void	{
		this.addKeyValue("time_format", timeFormat);

	}

	/**
	 * The method to get the offset
	 * @returns A number representing the offset
	 */
	public getOffset(): number	{
		return this.getKeyValue("offset");

	}

	/**
	 * The method to set the value to offset
	 * @param offset A number representing the offset
	 */
	public setOffset(offset: number): void	{
		this.addKeyValue("offset", offset);

	}

	/**
	 * The method to get the imapStatus
	 * @returns A Boolean representing the imapStatus
	 */
	public getImapStatus(): boolean	{
		return this.getKeyValue("imap_status");

	}

	/**
	 * The method to set the value to imapStatus
	 * @param imapStatus A Boolean representing the imapStatus
	 */
	public setImapStatus(imapStatus: boolean): void	{
		this.addKeyValue("imap_status", imapStatus);

	}

	/**
	 * The method to get the imageLink
	 * @returns A String representing the imageLink
	 */
	public getImageLink(): string	{
		return this.getKeyValue("image_link");

	}

	/**
	 * The method to set the value to imageLink
	 * @param imageLink A String representing the imageLink
	 */
	public setImageLink(imageLink: string): void	{
		this.addKeyValue("image_link", imageLink);

	}

	/**
	 * The method to get the ezuid
	 * @returns A String representing the ezuid
	 */
	public getEzuid(): string	{
		return this.getKeyValue("ezuid");

	}

	/**
	 * The method to set the value to ezuid
	 * @param ezuid A String representing the ezuid
	 */
	public setEzuid(ezuid: string): void	{
		this.addKeyValue("ezuid", ezuid);

	}

	/**
	 * The method to get the profile
	 * @returns An instance of Profile
	 */
	public getProfile(): Profile	{
		return this.getKeyValue("profile");

	}

	/**
	 * The method to set the value to profile
	 * @param profile An instance of Profile
	 */
	public setProfile(profile: Profile): void	{
		this.addKeyValue("profile", profile);

	}

	/**
	 * The method to get the role
	 * @returns An instance of Role
	 */
	public getRole(): Role	{
		return this.getKeyValue("role");

	}

	/**
	 * The method to set the value to role
	 * @param role An instance of Role
	 */
	public setRole(role: Role): void	{
		this.addKeyValue("role", role);

	}

	/**
	 * The method to get the createdBy
	 * @returns An instance of MinifiedUser
	 */
	public getCreatedBy(): MinifiedUser	{
		return this.getKeyValue("created_by");

	}

	/**
	 * The method to set the value to createdBy
	 * @param createdBy An instance of MinifiedUser
	 */
	public setCreatedBy(createdBy: MinifiedUser): void	{
		this.addKeyValue("created_by", createdBy);

	}

	/**
	 * The method to get the fullName
	 * @returns A String representing the fullName
	 */
	public getFullName(): string	{
		return this.getKeyValue("full_name");

	}

	/**
	 * The method to set the value to fullName
	 * @param fullName A String representing the fullName
	 */
	public setFullName(fullName: string): void	{
		this.addKeyValue("full_name", fullName);

	}

	/**
	 * The method to get the zuid
	 * @returns A String representing the zuid
	 */
	public getZuid(): string	{
		return this.getKeyValue("zuid");

	}

	/**
	 * The method to set the value to zuid
	 * @param zuid A String representing the zuid
	 */
	public setZuid(zuid: string): void	{
		this.addKeyValue("zuid", zuid);

	}

	/**
	 * The method to get the phone
	 * @returns A String representing the phone
	 */
	public getPhone(): string	{
		return this.getKeyValue("phone");

	}

	/**
	 * The method to set the value to phone
	 * @param phone A String representing the phone
	 */
	public setPhone(phone: string): void	{
		this.addKeyValue("phone", phone);

	}

	/**
	 * The method to get the dob
	 * @returns An instance of Date
	 */
	public getDob(): Date	{
		return this.getKeyValue("dob");

	}

	/**
	 * The method to set the value to dob
	 * @param dob An instance of Date
	 */
	public setDob(dob: Date): void	{
		this.addKeyValue("dob", dob);

	}

	/**
	 * The method to get the status
	 * @returns A String representing the status
	 */
	public getStatus(): string	{
		return this.getKeyValue("status");

	}

	/**
	 * The method to set the value to status
	 * @param status A String representing the status
	 */
	public setStatus(status: string): void	{
		this.addKeyValue("status", status);

	}

	/**
	 * The method to get the customizeInfo
	 * @returns An instance of CustomizeInfo
	 */
	public getCustomizeInfo(): CustomizeInfo	{
		return this.getKeyValue("customize_info");

	}

	/**
	 * The method to set the value to customizeInfo
	 * @param customizeInfo An instance of CustomizeInfo
	 */
	public setCustomizeInfo(customizeInfo: CustomizeInfo): void	{
		this.addKeyValue("customize_info", customizeInfo);

	}

	/**
	 * The method to get the city
	 * @returns A String representing the city
	 */
	public getCity(): string	{
		return this.getKeyValue("city");

	}

	/**
	 * The method to set the value to city
	 * @param city A String representing the city
	 */
	public setCity(city: string): void	{
		this.addKeyValue("city", city);

	}

	/**
	 * The method to get the signature
	 * @returns A String representing the signature
	 */
	public getSignature(): string	{
		return this.getKeyValue("signature");

	}

	/**
	 * The method to set the value to signature
	 * @param signature A String representing the signature
	 */
	public setSignature(signature: string): void	{
		this.addKeyValue("signature", signature);

	}

	/**
	 * The method to get the sortOrderPreferenceS
	 * @returns A String representing the sortOrderPreferenceS
	 */
	public getSortOrderPreferenceS(): string	{
		return this.getKeyValue("sort_order_preference__s");

	}

	/**
	 * The method to set the value to sortOrderPreferenceS
	 * @param sortOrderPreferenceS A String representing the sortOrderPreferenceS
	 */
	public setSortOrderPreferenceS(sortOrderPreferenceS: string): void	{
		this.addKeyValue("sort_order_preference__s", sortOrderPreferenceS);

	}

	/**
	 * The method to get the category
	 * @returns A String representing the category
	 */
	public getCategory(): string	{
		return this.getKeyValue("category");

	}

	/**
	 * The method to set the value to category
	 * @param category A String representing the category
	 */
	public setCategory(category: string): void	{
		this.addKeyValue("category", category);

	}

	/**
	 * The method to get the dateFormat
	 * @returns An instance of Choice<string>
	 */
	public getDateFormat(): Choice<string>	{
		return this.getKeyValue("date_format");

	}

	/**
	 * The method to set the value to dateFormat
	 * @param dateFormat An instance of Choice<string>
	 */
	public setDateFormat(dateFormat: Choice<string>): void	{
		this.addKeyValue("date_format", dateFormat);

	}

	/**
	 * The method to get the confirm
	 * @returns A Boolean representing the confirm
	 */
	public getConfirm(): boolean	{
		return this.getKeyValue("confirm");

	}

	/**
	 * The method to set the value to confirm
	 * @param confirm A Boolean representing the confirm
	 */
	public setConfirm(confirm: boolean): void	{
		this.addKeyValue("confirm", confirm);

	}

	/**
	 * The method to get the decimalSeparator
	 * @returns An instance of Choice<string>
	 */
	public getDecimalSeparator(): Choice<string>	{
		return this.getKeyValue("decimal_separator");

	}

	/**
	 * The method to set the value to decimalSeparator
	 * @param decimalSeparator An instance of Choice<string>
	 */
	public setDecimalSeparator(decimalSeparator: Choice<string>): void	{
		this.addKeyValue("decimal_separator", decimalSeparator);

	}

	/**
	 * The method to get the numberSeparator
	 * @returns An instance of Choice<string>
	 */
	public getNumberSeparator(): Choice<string>	{
		return this.getKeyValue("number_separator");

	}

	/**
	 * The method to set the value to numberSeparator
	 * @param numberSeparator An instance of Choice<string>
	 */
	public setNumberSeparator(numberSeparator: Choice<string>): void	{
		this.addKeyValue("number_separator", numberSeparator);

	}

	/**
	 * The method to get the timeZone
	 * @returns An instance of MomentZone|null
	 */
	public getTimeZone(): MomentZone|null	{
		return this.getKeyValue("time_zone");

	}

	/**
	 * The method to set the value to timeZone
	 * @param timeZone An instance of MomentZone|null
	 */
	public setTimeZone(timeZone: MomentZone|null): void	{
		this.addKeyValue("time_zone", timeZone);

	}

	/**
	 * The method to get the lastName
	 * @returns A String representing the lastName
	 */
	public getLastName(): string	{
		return this.getKeyValue("last_name");

	}

	/**
	 * The method to set the value to lastName
	 * @param lastName A String representing the lastName
	 */
	public setLastName(lastName: string): void	{
		this.addKeyValue("last_name", lastName);

	}

	/**
	 * The method to get the mobile
	 * @returns A String representing the mobile
	 */
	public getMobile(): string	{
		return this.getKeyValue("mobile");

	}

	/**
	 * The method to set the value to mobile
	 * @param mobile A String representing the mobile
	 */
	public setMobile(mobile: string): void	{
		this.addKeyValue("mobile", mobile);

	}

	/**
	 * The method to get the currentShift
	 * @returns An instance of Shift
	 */
	public getCurrentShift(): Shift	{
		return this.getKeyValue("$current_shift");

	}

	/**
	 * The method to set the value to currentShift
	 * @param currentShift An instance of Shift
	 */
	public setCurrentShift(currentShift: Shift): void	{
		this.addKeyValue("$current_shift", currentShift);

	}

	/**
	 * The method to get the reportingTo
	 * @returns An instance of MinifiedUser
	 */
	public getReportingTo(): MinifiedUser	{
		return this.getKeyValue("Reporting_To");

	}

	/**
	 * The method to set the value to reportingTo
	 * @param reportingTo An instance of MinifiedUser
	 */
	public setReportingTo(reportingTo: MinifiedUser): void	{
		this.addKeyValue("Reporting_To", reportingTo);

	}

	/**
	 * The method to get the currency
	 * @returns A String representing the currency
	 */
	public getCurrency(): string	{
		return this.getKeyValue("Currency");

	}

	/**
	 * The method to set the value to currency
	 * @param currency A String representing the currency
	 */
	public setCurrency(currency: string): void	{
		this.addKeyValue("Currency", currency);

	}

	/**
	 * The method to get the nextShift
	 * @returns An instance of Shift
	 */
	public getNextShift(): Shift	{
		return this.getKeyValue("$next_shift");

	}

	/**
	 * The method to set the value to nextShift
	 * @param nextShift An instance of Shift
	 */
	public setNextShift(nextShift: Shift): void	{
		this.addKeyValue("$next_shift", nextShift);

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
	 * The method to get the website
	 * @returns A String representing the website
	 */
	public getWebsite(): string	{
		return this.getKeyValue("website");

	}

	/**
	 * The method to set the value to website
	 * @param website A String representing the website
	 */
	public setWebsite(website: string): void	{
		this.addKeyValue("website", website);

	}

	/**
	 * The method to get the statusReasonS
	 * @returns A String representing the statusReasonS
	 */
	public getStatusReasonS(): string	{
		return this.getKeyValue("status_reason__s");

	}

	/**
	 * The method to set the value to statusReasonS
	 * @param statusReasonS A String representing the statusReasonS
	 */
	public setStatusReasonS(statusReasonS: string): void	{
		this.addKeyValue("status_reason__s", statusReasonS);

	}

	/**
	 * The method to get the email
	 * @returns A String representing the email
	 */
	public getEmail(): string	{
		return this.getKeyValue("email");

	}

	/**
	 * The method to set the value to email
	 * @param email A String representing the email
	 */
	public setEmail(email: string): void	{
		this.addKeyValue("email", email);

	}

	/**
	 * The method to get the firstName
	 * @returns A String representing the firstName
	 */
	public getFirstName(): string	{
		return this.getKeyValue("first_name");

	}

	/**
	 * The method to set the value to firstName
	 * @param firstName A String representing the firstName
	 */
	public setFirstName(firstName: string): void	{
		this.addKeyValue("first_name", firstName);

	}

	/**
	 * The method to get the sandboxdeveloper
	 * @returns A Boolean representing the sandboxdeveloper
	 */
	public getSandboxdeveloper(): boolean	{
		return this.getKeyValue("sandboxDeveloper");

	}

	/**
	 * The method to set the value to sandboxdeveloper
	 * @param sandboxdeveloper A Boolean representing the sandboxdeveloper
	 */
	public setSandboxdeveloper(sandboxdeveloper: boolean): void	{
		this.addKeyValue("sandboxDeveloper", sandboxdeveloper);

	}

	/**
	 * The method to get the alias
	 * @returns A String representing the alias
	 */
	public getAlias(): string	{
		return this.getKeyValue("alias");

	}

	/**
	 * The method to set the value to alias
	 * @param alias A String representing the alias
	 */
	public setAlias(alias: string): void	{
		this.addKeyValue("alias", alias);

	}

	/**
	 * The method to get the street
	 * @returns A String representing the street
	 */
	public getStreet(): string	{
		return this.getKeyValue("street");

	}

	/**
	 * The method to set the value to street
	 * @param street A String representing the street
	 */
	public setStreet(street: string): void	{
		this.addKeyValue("street", street);

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
	 * The method to get the isonline
	 * @returns A Boolean representing the isonline
	 */
	public getIsonline(): boolean	{
		return this.getKeyValue("Isonline");

	}

	/**
	 * The method to set the value to isonline
	 * @param isonline A Boolean representing the isonline
	 */
	public setIsonline(isonline: boolean): void	{
		this.addKeyValue("Isonline", isonline);

	}

	/**
	 * The method to get the locale
	 * @returns A String representing the locale
	 */
	public getLocale(): string	{
		return this.getKeyValue("locale");

	}

	/**
	 * The method to set the value to locale
	 * @param locale A String representing the locale
	 */
	public setLocale(locale: string): void	{
		this.addKeyValue("locale", locale);

	}

	/**
	 * The method to get the nameFormatS
	 * @returns An instance of Choice<string>
	 */
	public getNameFormatS(): Choice<string>	{
		return this.getKeyValue("name_format__s");

	}

	/**
	 * The method to set the value to nameFormatS
	 * @param nameFormatS An instance of Choice<string>
	 */
	public setNameFormatS(nameFormatS: Choice<string>): void	{
		this.addKeyValue("name_format__s", nameFormatS);

	}

	/**
	 * The method to get the personalAccount
	 * @returns A Boolean representing the personalAccount
	 */
	public getPersonalAccount(): boolean	{
		return this.getKeyValue("personal_account");

	}

	/**
	 * The method to set the value to personalAccount
	 * @param personalAccount A Boolean representing the personalAccount
	 */
	public setPersonalAccount(personalAccount: boolean): void	{
		this.addKeyValue("personal_account", personalAccount);

	}

	/**
	 * The method to get the defaultTabGroup
	 * @returns A String representing the defaultTabGroup
	 */
	public getDefaultTabGroup(): string	{
		return this.getKeyValue("default_tab_group");

	}

	/**
	 * The method to set the value to defaultTabGroup
	 * @param defaultTabGroup A String representing the defaultTabGroup
	 */
	public setDefaultTabGroup(defaultTabGroup: string): void	{
		this.addKeyValue("default_tab_group", defaultTabGroup);

	}

	/**
	 * The method to get the theme
	 * @returns An instance of Theme
	 */
	public getTheme(): Theme	{
		return this.getKeyValue("theme");

	}

	/**
	 * The method to set the value to theme
	 * @param theme An instance of Theme
	 */
	public setTheme(theme: Theme): void	{
		this.addKeyValue("theme", theme);

	}

	/**
	 * The method to get the ntcNotificationType
	 * @returns An Array representing the ntcNotificationType
	 */
	public getNtcNotificationType(): Array<bigint>	{
		return this.getKeyValue("ntc_notification_type");

	}

	/**
	 * The method to set the value to ntcNotificationType
	 * @param ntcNotificationType An Array representing the ntcNotificationType
	 */
	public setNtcNotificationType(ntcNotificationType: Array<bigint>): void	{
		this.addKeyValue("ntc_notification_type", ntcNotificationType);

	}

	/**
	 * The method to get the ntcEnabled
	 * @returns A Boolean representing the ntcEnabled
	 */
	public getNtcEnabled(): boolean	{
		return this.getKeyValue("ntc_enabled");

	}

	/**
	 * The method to set the value to ntcEnabled
	 * @param ntcEnabled A Boolean representing the ntcEnabled
	 */
	public setNtcEnabled(ntcEnabled: boolean): void	{
		this.addKeyValue("ntc_enabled", ntcEnabled);

	}

	/**
	 * The method to get the rtlEnabled
	 * @returns A Boolean representing the rtlEnabled
	 */
	public getRtlEnabled(): boolean	{
		return this.getKeyValue("rtl_enabled");

	}

	/**
	 * The method to set the value to rtlEnabled
	 * @param rtlEnabled A Boolean representing the rtlEnabled
	 */
	public setRtlEnabled(rtlEnabled: boolean): void	{
		this.addKeyValue("rtl_enabled", rtlEnabled);

	}

	/**
	 * The method to get the telephonyEnabled
	 * @returns A Boolean representing the telephonyEnabled
	 */
	public getTelephonyEnabled(): boolean	{
		return this.getKeyValue("telephony_enabled");

	}

	/**
	 * The method to set the value to telephonyEnabled
	 * @param telephonyEnabled A Boolean representing the telephonyEnabled
	 */
	public setTelephonyEnabled(telephonyEnabled: boolean): void	{
		this.addKeyValue("telephony_enabled", telephonyEnabled);

	}

	/**
	 * The method to get the sortOrderPreference
	 * @returns A String representing the sortOrderPreference
	 */
	public getSortOrderPreference(): string	{
		return this.getKeyValue("sort_order_preference");

	}

	/**
	 * The method to set the value to sortOrderPreference
	 * @param sortOrderPreference A String representing the sortOrderPreference
	 */
	public setSortOrderPreference(sortOrderPreference: string): void	{
		this.addKeyValue("sort_order_preference", sortOrderPreference);

	}

	/**
	 * The method to get the createdBy17
	 * @returns An instance of MinifiedUser
	 */
	public getCreatedBy17(): MinifiedUser	{
		return this.getKeyValue("Created_By");

	}

	/**
	 * The method to set the value to createdBy17
	 * @param createdBy17 An instance of MinifiedUser
	 */
	public setCreatedBy17(createdBy17: MinifiedUser): void	{
		this.addKeyValue("Created_By", createdBy17);

	}

	/**
	 * The method to get the createdTime9
	 * @returns An instance of Date
	 */
	public getCreatedTime9(): Date	{
		return this.getKeyValue("Created_Time");

	}

	/**
	 * The method to set the value to createdTime9
	 * @param createdTime9 An instance of Date
	 */
	public setCreatedTime9(createdTime9: Date): void	{
		this.addKeyValue("Created_Time", createdTime9);

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
	Users as MasterModel,
	Users as Users
}
