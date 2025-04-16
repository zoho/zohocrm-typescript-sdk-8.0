import {Abtesting} from "./abtesting";
import {AcknowledgeVisitors} from "./acknowledge_visitors";
import {AnalyticsData} from "./analytics_data";
import {AssignmentRule} from "./assignment_rule";
import {ButtonAttributes} from "./button_attributes";
import {Fields} from "./fields";
import {FormAttributes} from "./form_attributes";
import {Layout} from "./layout";
import {Module} from "./module";
import {Owner} from "./owner";
import {SpamControll} from "./spam_controll";
import {Suggestion} from "./suggestion";
import {Tags} from "./tags";
import {User} from "./user";
import {Model} from "../../../../../../utils/util/model";

class WebForm implements Model{

	private googleSite: string;
	private encryptedFormId: string;
	private owner: Owner;
	private userType: User;
	private acknowledgeVisitor: AcknowledgeVisitors;
	private buttonAttributes: Array<ButtonAttributes>;
	private encryptedZgid: string;
	private createdTime: Date;
	private analyticsData: AnalyticsData;
	private module: Module;
	private encryptedModule: string;
	private active: boolean;
	private adwordEnabled: boolean;
	private notifyOwner: Owner;
	private createdBy: User;
	private formAttributes: FormAttributes;
	private locationUrl: Array<string>;
	private landingUrl: string;
	private doubleOptinEnabled: boolean;
	private layout: Layout;
	private tags: Array<Tags>;
	private approvalRequest: boolean;
	private type: string;
	private createContact: boolean;
	private assignmentRule: AssignmentRule;
	private name: string;
	private id: bigint;
	private spamControl: SpamControll;
	private fields: Array<Fields>;
	private formFields: Array<Fields>;
	private abtesting: Array<Abtesting>;
	private visitorTracking: string;
	private lastSubmittedTime: Date;
	private actionOnSubmit: string;
	private actionValue: string;
	private suggestion: Suggestion;
	private embedCode: string;
	private codeFormats: Array<string>;
	private sourceCode: string;
	private iframeCode: string;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the googleSite
	 * @returns A String representing the googleSite
	 */
	public getGoogleSite(): string	{
		return this.googleSite;

	}

	/**
	 * The method to set the value to googleSite
	 * @param googleSite A String representing the googleSite
	 */
	public setGoogleSite(googleSite: string): void	{
		this.googleSite = googleSite;
		this.keyModified.set("google_site", 1);

	}

	/**
	 * The method to get the encryptedFormId
	 * @returns A String representing the encryptedFormId
	 */
	public getEncryptedFormId(): string	{
		return this.encryptedFormId;

	}

	/**
	 * The method to set the value to encryptedFormId
	 * @param encryptedFormId A String representing the encryptedFormId
	 */
	public setEncryptedFormId(encryptedFormId: string): void	{
		this.encryptedFormId = encryptedFormId;
		this.keyModified.set("encrypted_form_id", 1);

	}

	/**
	 * The method to get the owner
	 * @returns An instance of Owner
	 */
	public getOwner(): Owner	{
		return this.owner;

	}

	/**
	 * The method to set the value to owner
	 * @param owner An instance of Owner
	 */
	public setOwner(owner: Owner): void	{
		this.owner = owner;
		this.keyModified.set("owner", 1);

	}

	/**
	 * The method to get the userType
	 * @returns An instance of User
	 */
	public getUserType(): User	{
		return this.userType;

	}

	/**
	 * The method to set the value to userType
	 * @param userType An instance of User
	 */
	public setUserType(userType: User): void	{
		this.userType = userType;
		this.keyModified.set("user_type", 1);

	}

	/**
	 * The method to get the acknowledgeVisitor
	 * @returns An instance of AcknowledgeVisitors
	 */
	public getAcknowledgeVisitor(): AcknowledgeVisitors	{
		return this.acknowledgeVisitor;

	}

	/**
	 * The method to set the value to acknowledgeVisitor
	 * @param acknowledgeVisitor An instance of AcknowledgeVisitors
	 */
	public setAcknowledgeVisitor(acknowledgeVisitor: AcknowledgeVisitors): void	{
		this.acknowledgeVisitor = acknowledgeVisitor;
		this.keyModified.set("acknowledge_visitor", 1);

	}

	/**
	 * The method to get the buttonAttributes
	 * @returns An Array representing the buttonAttributes
	 */
	public getButtonAttributes(): Array<ButtonAttributes>	{
		return this.buttonAttributes;

	}

	/**
	 * The method to set the value to buttonAttributes
	 * @param buttonAttributes An Array representing the buttonAttributes
	 */
	public setButtonAttributes(buttonAttributes: Array<ButtonAttributes>): void	{
		this.buttonAttributes = buttonAttributes;
		this.keyModified.set("button_attributes", 1);

	}

	/**
	 * The method to get the encryptedZgid
	 * @returns A String representing the encryptedZgid
	 */
	public getEncryptedZgid(): string	{
		return this.encryptedZgid;

	}

	/**
	 * The method to set the value to encryptedZgid
	 * @param encryptedZgid A String representing the encryptedZgid
	 */
	public setEncryptedZgid(encryptedZgid: string): void	{
		this.encryptedZgid = encryptedZgid;
		this.keyModified.set("encrypted_zgid", 1);

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
	 * The method to get the analyticsData
	 * @returns An instance of AnalyticsData
	 */
	public getAnalyticsData(): AnalyticsData	{
		return this.analyticsData;

	}

	/**
	 * The method to set the value to analyticsData
	 * @param analyticsData An instance of AnalyticsData
	 */
	public setAnalyticsData(analyticsData: AnalyticsData): void	{
		this.analyticsData = analyticsData;
		this.keyModified.set("analytics_data", 1);

	}

	/**
	 * The method to get the module
	 * @returns An instance of Module
	 */
	public getModule(): Module	{
		return this.module;

	}

	/**
	 * The method to set the value to module
	 * @param module An instance of Module
	 */
	public setModule(module: Module): void	{
		this.module = module;
		this.keyModified.set("module", 1);

	}

	/**
	 * The method to get the encryptedModule
	 * @returns A String representing the encryptedModule
	 */
	public getEncryptedModule(): string	{
		return this.encryptedModule;

	}

	/**
	 * The method to set the value to encryptedModule
	 * @param encryptedModule A String representing the encryptedModule
	 */
	public setEncryptedModule(encryptedModule: string): void	{
		this.encryptedModule = encryptedModule;
		this.keyModified.set("encrypted_module", 1);

	}

	/**
	 * The method to get the active
	 * @returns A Boolean representing the active
	 */
	public getActive(): boolean	{
		return this.active;

	}

	/**
	 * The method to set the value to active
	 * @param active A Boolean representing the active
	 */
	public setActive(active: boolean): void	{
		this.active = active;
		this.keyModified.set("active", 1);

	}

	/**
	 * The method to get the adwordEnabled
	 * @returns A Boolean representing the adwordEnabled
	 */
	public getAdwordEnabled(): boolean	{
		return this.adwordEnabled;

	}

	/**
	 * The method to set the value to adwordEnabled
	 * @param adwordEnabled A Boolean representing the adwordEnabled
	 */
	public setAdwordEnabled(adwordEnabled: boolean): void	{
		this.adwordEnabled = adwordEnabled;
		this.keyModified.set("adword_enabled", 1);

	}

	/**
	 * The method to get the notifyOwner
	 * @returns An instance of Owner
	 */
	public getNotifyOwner(): Owner	{
		return this.notifyOwner;

	}

	/**
	 * The method to set the value to notifyOwner
	 * @param notifyOwner An instance of Owner
	 */
	public setNotifyOwner(notifyOwner: Owner): void	{
		this.notifyOwner = notifyOwner;
		this.keyModified.set("notify_owner", 1);

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
	 * The method to get the formAttributes
	 * @returns An instance of FormAttributes
	 */
	public getFormAttributes(): FormAttributes	{
		return this.formAttributes;

	}

	/**
	 * The method to set the value to formAttributes
	 * @param formAttributes An instance of FormAttributes
	 */
	public setFormAttributes(formAttributes: FormAttributes): void	{
		this.formAttributes = formAttributes;
		this.keyModified.set("form_attributes", 1);

	}

	/**
	 * The method to get the locationUrl
	 * @returns An Array representing the locationUrl
	 */
	public getLocationUrl(): Array<string>	{
		return this.locationUrl;

	}

	/**
	 * The method to set the value to locationUrl
	 * @param locationUrl An Array representing the locationUrl
	 */
	public setLocationUrl(locationUrl: Array<string>): void	{
		this.locationUrl = locationUrl;
		this.keyModified.set("location_url", 1);

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
	 * The method to get the doubleOptinEnabled
	 * @returns A Boolean representing the doubleOptinEnabled
	 */
	public getDoubleOptinEnabled(): boolean	{
		return this.doubleOptinEnabled;

	}

	/**
	 * The method to set the value to doubleOptinEnabled
	 * @param doubleOptinEnabled A Boolean representing the doubleOptinEnabled
	 */
	public setDoubleOptinEnabled(doubleOptinEnabled: boolean): void	{
		this.doubleOptinEnabled = doubleOptinEnabled;
		this.keyModified.set("double_optin_enabled", 1);

	}

	/**
	 * The method to get the layout
	 * @returns An instance of Layout
	 */
	public getLayout(): Layout	{
		return this.layout;

	}

	/**
	 * The method to set the value to layout
	 * @param layout An instance of Layout
	 */
	public setLayout(layout: Layout): void	{
		this.layout = layout;
		this.keyModified.set("layout", 1);

	}

	/**
	 * The method to get the tags
	 * @returns An Array representing the tags
	 */
	public getTags(): Array<Tags>	{
		return this.tags;

	}

	/**
	 * The method to set the value to tags
	 * @param tags An Array representing the tags
	 */
	public setTags(tags: Array<Tags>): void	{
		this.tags = tags;
		this.keyModified.set("tags", 1);

	}

	/**
	 * The method to get the approvalRequest
	 * @returns A Boolean representing the approvalRequest
	 */
	public getApprovalRequest(): boolean	{
		return this.approvalRequest;

	}

	/**
	 * The method to set the value to approvalRequest
	 * @param approvalRequest A Boolean representing the approvalRequest
	 */
	public setApprovalRequest(approvalRequest: boolean): void	{
		this.approvalRequest = approvalRequest;
		this.keyModified.set("approval_request", 1);

	}

	/**
	 * The method to get the type
	 * @returns A String representing the type
	 */
	public getType(): string	{
		return this.type;

	}

	/**
	 * The method to set the value to type
	 * @param type A String representing the type
	 */
	public setType(type: string): void	{
		this.type = type;
		this.keyModified.set("type", 1);

	}

	/**
	 * The method to get the createContact
	 * @returns A Boolean representing the createContact
	 */
	public getCreateContact(): boolean	{
		return this.createContact;

	}

	/**
	 * The method to set the value to createContact
	 * @param createContact A Boolean representing the createContact
	 */
	public setCreateContact(createContact: boolean): void	{
		this.createContact = createContact;
		this.keyModified.set("create_contact", 1);

	}

	/**
	 * The method to get the assignmentRule
	 * @returns An instance of AssignmentRule
	 */
	public getAssignmentRule(): AssignmentRule	{
		return this.assignmentRule;

	}

	/**
	 * The method to set the value to assignmentRule
	 * @param assignmentRule An instance of AssignmentRule
	 */
	public setAssignmentRule(assignmentRule: AssignmentRule): void	{
		this.assignmentRule = assignmentRule;
		this.keyModified.set("assignment_rule", 1);

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
	 * The method to get the spamControl
	 * @returns An instance of SpamControll
	 */
	public getSpamControl(): SpamControll	{
		return this.spamControl;

	}

	/**
	 * The method to set the value to spamControl
	 * @param spamControl An instance of SpamControll
	 */
	public setSpamControl(spamControl: SpamControll): void	{
		this.spamControl = spamControl;
		this.keyModified.set("spam_control", 1);

	}

	/**
	 * The method to get the fields
	 * @returns An Array representing the fields
	 */
	public getFields(): Array<Fields>	{
		return this.fields;

	}

	/**
	 * The method to set the value to fields
	 * @param fields An Array representing the fields
	 */
	public setFields(fields: Array<Fields>): void	{
		this.fields = fields;
		this.keyModified.set("fields", 1);

	}

	/**
	 * The method to get the formFields
	 * @returns An Array representing the formFields
	 */
	public getFormFields(): Array<Fields>	{
		return this.formFields;

	}

	/**
	 * The method to set the value to formFields
	 * @param formFields An Array representing the formFields
	 */
	public setFormFields(formFields: Array<Fields>): void	{
		this.formFields = formFields;
		this.keyModified.set("form_fields", 1);

	}

	/**
	 * The method to get the abtesting
	 * @returns An Array representing the abtesting
	 */
	public getAbtesting(): Array<Abtesting>	{
		return this.abtesting;

	}

	/**
	 * The method to set the value to abtesting
	 * @param abtesting An Array representing the abtesting
	 */
	public setAbtesting(abtesting: Array<Abtesting>): void	{
		this.abtesting = abtesting;
		this.keyModified.set("abtesting", 1);

	}

	/**
	 * The method to get the visitorTracking
	 * @returns A String representing the visitorTracking
	 */
	public getVisitorTracking(): string	{
		return this.visitorTracking;

	}

	/**
	 * The method to set the value to visitorTracking
	 * @param visitorTracking A String representing the visitorTracking
	 */
	public setVisitorTracking(visitorTracking: string): void	{
		this.visitorTracking = visitorTracking;
		this.keyModified.set("visitor_tracking", 1);

	}

	/**
	 * The method to get the lastSubmittedTime
	 * @returns An instance of Date
	 */
	public getLastSubmittedTime(): Date	{
		return this.lastSubmittedTime;

	}

	/**
	 * The method to set the value to lastSubmittedTime
	 * @param lastSubmittedTime An instance of Date
	 */
	public setLastSubmittedTime(lastSubmittedTime: Date): void	{
		this.lastSubmittedTime = lastSubmittedTime;
		this.keyModified.set("last_submitted_time", 1);

	}

	/**
	 * The method to get the actionOnSubmit
	 * @returns A String representing the actionOnSubmit
	 */
	public getActionOnSubmit(): string	{
		return this.actionOnSubmit;

	}

	/**
	 * The method to set the value to actionOnSubmit
	 * @param actionOnSubmit A String representing the actionOnSubmit
	 */
	public setActionOnSubmit(actionOnSubmit: string): void	{
		this.actionOnSubmit = actionOnSubmit;
		this.keyModified.set("action_on_submit", 1);

	}

	/**
	 * The method to get the actionValue
	 * @returns A String representing the actionValue
	 */
	public getActionValue(): string	{
		return this.actionValue;

	}

	/**
	 * The method to set the value to actionValue
	 * @param actionValue A String representing the actionValue
	 */
	public setActionValue(actionValue: string): void	{
		this.actionValue = actionValue;
		this.keyModified.set("action_value", 1);

	}

	/**
	 * The method to get the suggestion
	 * @returns An instance of Suggestion
	 */
	public getSuggestion(): Suggestion	{
		return this.suggestion;

	}

	/**
	 * The method to set the value to suggestion
	 * @param suggestion An instance of Suggestion
	 */
	public setSuggestion(suggestion: Suggestion): void	{
		this.suggestion = suggestion;
		this.keyModified.set("suggestion", 1);

	}

	/**
	 * The method to get the embedCode
	 * @returns A String representing the embedCode
	 */
	public getEmbedCode(): string	{
		return this.embedCode;

	}

	/**
	 * The method to set the value to embedCode
	 * @param embedCode A String representing the embedCode
	 */
	public setEmbedCode(embedCode: string): void	{
		this.embedCode = embedCode;
		this.keyModified.set("embed_code", 1);

	}

	/**
	 * The method to get the codeFormats
	 * @returns An Array representing the codeFormats
	 */
	public getCodeFormats(): Array<string>	{
		return this.codeFormats;

	}

	/**
	 * The method to set the value to codeFormats
	 * @param codeFormats An Array representing the codeFormats
	 */
	public setCodeFormats(codeFormats: Array<string>): void	{
		this.codeFormats = codeFormats;
		this.keyModified.set("code_formats", 1);

	}

	/**
	 * The method to get the sourceCode
	 * @returns A String representing the sourceCode
	 */
	public getSourceCode(): string	{
		return this.sourceCode;

	}

	/**
	 * The method to set the value to sourceCode
	 * @param sourceCode A String representing the sourceCode
	 */
	public setSourceCode(sourceCode: string): void	{
		this.sourceCode = sourceCode;
		this.keyModified.set("source_code", 1);

	}

	/**
	 * The method to get the iframeCode
	 * @returns A String representing the iframeCode
	 */
	public getIframeCode(): string	{
		return this.iframeCode;

	}

	/**
	 * The method to set the value to iframeCode
	 * @param iframeCode A String representing the iframeCode
	 */
	public setIframeCode(iframeCode: string): void	{
		this.iframeCode = iframeCode;
		this.keyModified.set("iframe_code", 1);

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
	WebForm as MasterModel,
	WebForm as WebForm
}
