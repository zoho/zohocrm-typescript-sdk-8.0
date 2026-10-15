import {User} from "./user";
import {Choice} from "../../../../../../utils/util/choice";
import {Model} from "../../../../../../utils/util/model";

class UnsubscribeLinks implements Model{

	private id: bigint;
	private name: string;
	private pageType: Choice<string>;
	private customLocationUrl: string;
	private standardPageMessage: string;
	private submissionActionType: Choice<string>;
	private submissionMessage: string;
	private submissionRedirectUrl: string;
	private locationUrlType: string;
	private actionOnUnsubscribe: string;
	private createdBy: User;
	private modifiedBy: User;
	private modifiedTime: Date;
	private createdTime: Date;
	private landingUrl: string;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the id
	 * @returns A BigInt representing the id
	 */
	public getId(): bigint	{
		return this.id;

	}

	/**
	 * The method to set the value to id
	 * @param id A BigInt representing the id
	 */
	public setId(id: bigint): void	{
		this.id = id;
		this.keyModified.set("id", 1);

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
	 * The method to get the pageType
	 * @returns An instance of Choice<string>
	 */
	public getPageType(): Choice<string>	{
		return this.pageType;

	}

	/**
	 * The method to set the value to pageType
	 * @param pageType An instance of Choice<string>
	 */
	public setPageType(pageType: Choice<string>): void	{
		this.pageType = pageType;
		this.keyModified.set("page_type", 1);

	}

	/**
	 * The method to get the customLocationUrl
	 * @returns A String representing the customLocationUrl
	 */
	public getCustomLocationUrl(): string	{
		return this.customLocationUrl;

	}

	/**
	 * The method to set the value to customLocationUrl
	 * @param customLocationUrl A String representing the customLocationUrl
	 */
	public setCustomLocationUrl(customLocationUrl: string): void	{
		this.customLocationUrl = customLocationUrl;
		this.keyModified.set("custom_location_url", 1);

	}

	/**
	 * The method to get the standardPageMessage
	 * @returns A String representing the standardPageMessage
	 */
	public getStandardPageMessage(): string	{
		return this.standardPageMessage;

	}

	/**
	 * The method to set the value to standardPageMessage
	 * @param standardPageMessage A String representing the standardPageMessage
	 */
	public setStandardPageMessage(standardPageMessage: string): void	{
		this.standardPageMessage = standardPageMessage;
		this.keyModified.set("standard_page_message", 1);

	}

	/**
	 * The method to get the submissionActionType
	 * @returns An instance of Choice<string>
	 */
	public getSubmissionActionType(): Choice<string>	{
		return this.submissionActionType;

	}

	/**
	 * The method to set the value to submissionActionType
	 * @param submissionActionType An instance of Choice<string>
	 */
	public setSubmissionActionType(submissionActionType: Choice<string>): void	{
		this.submissionActionType = submissionActionType;
		this.keyModified.set("submission_action_type", 1);

	}

	/**
	 * The method to get the submissionMessage
	 * @returns A String representing the submissionMessage
	 */
	public getSubmissionMessage(): string	{
		return this.submissionMessage;

	}

	/**
	 * The method to set the value to submissionMessage
	 * @param submissionMessage A String representing the submissionMessage
	 */
	public setSubmissionMessage(submissionMessage: string): void	{
		this.submissionMessage = submissionMessage;
		this.keyModified.set("submission_message", 1);

	}

	/**
	 * The method to get the submissionRedirectUrl
	 * @returns A String representing the submissionRedirectUrl
	 */
	public getSubmissionRedirectUrl(): string	{
		return this.submissionRedirectUrl;

	}

	/**
	 * The method to set the value to submissionRedirectUrl
	 * @param submissionRedirectUrl A String representing the submissionRedirectUrl
	 */
	public setSubmissionRedirectUrl(submissionRedirectUrl: string): void	{
		this.submissionRedirectUrl = submissionRedirectUrl;
		this.keyModified.set("submission_redirect_url", 1);

	}

	/**
	 * The method to get the locationUrlType
	 * @returns A String representing the locationUrlType
	 */
	public getLocationUrlType(): string	{
		return this.locationUrlType;

	}

	/**
	 * The method to set the value to locationUrlType
	 * @param locationUrlType A String representing the locationUrlType
	 */
	public setLocationUrlType(locationUrlType: string): void	{
		this.locationUrlType = locationUrlType;
		this.keyModified.set("location_url_type", 1);

	}

	/**
	 * The method to get the actionOnUnsubscribe
	 * @returns A String representing the actionOnUnsubscribe
	 */
	public getActionOnUnsubscribe(): string	{
		return this.actionOnUnsubscribe;

	}

	/**
	 * The method to set the value to actionOnUnsubscribe
	 * @param actionOnUnsubscribe A String representing the actionOnUnsubscribe
	 */
	public setActionOnUnsubscribe(actionOnUnsubscribe: string): void	{
		this.actionOnUnsubscribe = actionOnUnsubscribe;
		this.keyModified.set("action_on_unsubscribe", 1);

	}

	/**
	 * The method to get the createdBy
	 * @returns An instance of User
	 */
	public getCreatedBy(): User	{
		return this.createdBy;

	}

	/**
	 * The method to set the value to createdBy
	 * @param createdBy An instance of User
	 */
	public setCreatedBy(createdBy: User): void	{
		this.createdBy = createdBy;
		this.keyModified.set("created_by", 1);

	}

	/**
	 * The method to get the modifiedBy
	 * @returns An instance of User
	 */
	public getModifiedBy(): User	{
		return this.modifiedBy;

	}

	/**
	 * The method to set the value to modifiedBy
	 * @param modifiedBy An instance of User
	 */
	public setModifiedBy(modifiedBy: User): void	{
		this.modifiedBy = modifiedBy;
		this.keyModified.set("modified_by", 1);

	}

	/**
	 * The method to get the modifiedTime
	 * @returns An instance of Date
	 */
	public getModifiedTime(): Date	{
		return this.modifiedTime;

	}

	/**
	 * The method to set the value to modifiedTime
	 * @param modifiedTime An instance of Date
	 */
	public setModifiedTime(modifiedTime: Date): void	{
		this.modifiedTime = modifiedTime;
		this.keyModified.set("modified_time", 1);

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
	 * The method to get the landingUrl
	 * @returns A String representing the landingUrl
	 */
	public getLandingUrl(): string	{
		return this.landingUrl;

	}

	/**
	 * The method to set the value to landingUrl
	 * @param landingUrl A String representing the landingUrl
	 */
	public setLandingUrl(landingUrl: string): void	{
		this.landingUrl = landingUrl;
		this.keyModified.set("landing_url", 1);

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
	UnsubscribeLinks as MasterModel,
	UnsubscribeLinks as UnsubscribeLinks
}
