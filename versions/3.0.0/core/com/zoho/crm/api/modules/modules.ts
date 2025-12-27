import {CustomViews} from "../custom_views/custom_views";
import {LayoutAssociation} from "../fields/layout_association";
import {MinifiedField} from "../fields/minified_field";
import {Argument} from "./argument";
import {LookupFieldProperties} from "./lookup_field_properties";
import {MinifiedModule} from "./minified_module";
import {ModuleFields} from "./module_fields";
import {RelatedListProperties} from "./related_list_properties";
import {StaticSubformProperties} from "./static_subform_properties";
import {Territory} from "./territory";
import {MinifiedProfile} from "../profiles/minified_profile";
import {RelatedList} from "../related_lists/related_list";
import {MinifiedUser} from "../users/minified_user";
import {Choice} from "../../../../../../utils/util/choice";
import {Model} from "../../../../../../utils/util/model";

class Modules implements Model{

	private hasMoreProfiles: boolean;
	private subMenuAvailable: boolean;
	private globalSearchSupported: boolean;
	private deletable: boolean;
	private description: string;
	private creatable: boolean;
	private recycleBinOnDelete: boolean;
	private inventoryTemplateSupported: boolean;
	private modifiedTime: Date;
	private pluralLabel: string;
	private presenceSubMenu: boolean;
	private triggersSupported: boolean;
	private id: bigint;
	private chartView: boolean;
	private isblueprintsupported: boolean;
	private visibility: number;
	private visible: boolean;
	private convertable: boolean;
	private editable: boolean;
	private emailtemplateSupport: boolean;
	private emailParserSupported: boolean;
	private filterSupported: boolean;
	private showAsTab: boolean;
	private webLink: string;
	private sequenceNumber: number;
	private singularLabel: string;
	private viewable: boolean;
	private apiSupported: boolean;
	private apiName: string;
	private quickCreate: boolean;
	private generatedType: Choice<string>;
	private feedsRequired: boolean;
	private scoringSupported: boolean;
	private webformSupported: boolean;
	private territory: Territory;
	private arguments1: Array<Argument>;
	private moduleName: string;
	private chartViewSupported: boolean;
	private profileCount: number;
	private businessCardFieldLimit: number;
	private trackCurrentData: boolean;
	private modifiedBy: MinifiedUser;
	private profiles: Array<MinifiedProfile>;
	private parentModule: MinifiedModule;
	private activityBadge: Choice<string>;
	private fieldStates: Array<string>;
	private businessCardFields: Array<string>;
	private perPage: number;
	private properties: Array<string>;
	private onDemandProperties: Array<string>;
	private searchLayoutFields: Array<string>;
	private kanbanViewSupported: boolean;
	private lookupFieldProperties: LookupFieldProperties;
	private kanbanView: boolean;
	private relatedLists: Array<RelatedList>;
	private filterStatus: boolean;
	private relatedListProperties: RelatedListProperties;
	private displayField: any;
	private layouts: Array<any>;
	private fields: Array<ModuleFields>;
	private customView: CustomViews;
	private ziaView: boolean;
	private defaultMappingFields: Array<MinifiedField>;
	private status: string;
	private staticSubformProperties: StaticSubformProperties;
	private layoutAssociations: Array<LayoutAssociation>;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the hasMoreProfiles
	 * @returns A Boolean representing the hasMoreProfiles
	 */
	public getHasMoreProfiles(): boolean	{
		return this.hasMoreProfiles;

	}

	/**
	 * The method to set the value to hasMoreProfiles
	 * @param hasMoreProfiles A Boolean representing the hasMoreProfiles
	 */
	public setHasMoreProfiles(hasMoreProfiles: boolean): void	{
		this.hasMoreProfiles = hasMoreProfiles;
		this.keyModified.set("has_more_profiles", 1);

	}

	/**
	 * The method to get the subMenuAvailable
	 * @returns A Boolean representing the subMenuAvailable
	 */
	public getSubMenuAvailable(): boolean	{
		return this.subMenuAvailable;

	}

	/**
	 * The method to set the value to subMenuAvailable
	 * @param subMenuAvailable A Boolean representing the subMenuAvailable
	 */
	public setSubMenuAvailable(subMenuAvailable: boolean): void	{
		this.subMenuAvailable = subMenuAvailable;
		this.keyModified.set("sub_menu_available", 1);

	}

	/**
	 * The method to get the globalSearchSupported
	 * @returns A Boolean representing the globalSearchSupported
	 */
	public getGlobalSearchSupported(): boolean	{
		return this.globalSearchSupported;

	}

	/**
	 * The method to set the value to globalSearchSupported
	 * @param globalSearchSupported A Boolean representing the globalSearchSupported
	 */
	public setGlobalSearchSupported(globalSearchSupported: boolean): void	{
		this.globalSearchSupported = globalSearchSupported;
		this.keyModified.set("global_search_supported", 1);

	}

	/**
	 * The method to get the deletable
	 * @returns A Boolean representing the deletable
	 */
	public getDeletable(): boolean	{
		return this.deletable;

	}

	/**
	 * The method to set the value to deletable
	 * @param deletable A Boolean representing the deletable
	 */
	public setDeletable(deletable: boolean): void	{
		this.deletable = deletable;
		this.keyModified.set("deletable", 1);

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
	 * The method to get the creatable
	 * @returns A Boolean representing the creatable
	 */
	public getCreatable(): boolean	{
		return this.creatable;

	}

	/**
	 * The method to set the value to creatable
	 * @param creatable A Boolean representing the creatable
	 */
	public setCreatable(creatable: boolean): void	{
		this.creatable = creatable;
		this.keyModified.set("creatable", 1);

	}

	/**
	 * The method to get the recycleBinOnDelete
	 * @returns A Boolean representing the recycleBinOnDelete
	 */
	public getRecycleBinOnDelete(): boolean	{
		return this.recycleBinOnDelete;

	}

	/**
	 * The method to set the value to recycleBinOnDelete
	 * @param recycleBinOnDelete A Boolean representing the recycleBinOnDelete
	 */
	public setRecycleBinOnDelete(recycleBinOnDelete: boolean): void	{
		this.recycleBinOnDelete = recycleBinOnDelete;
		this.keyModified.set("recycle_bin_on_delete", 1);

	}

	/**
	 * The method to get the inventoryTemplateSupported
	 * @returns A Boolean representing the inventoryTemplateSupported
	 */
	public getInventoryTemplateSupported(): boolean	{
		return this.inventoryTemplateSupported;

	}

	/**
	 * The method to set the value to inventoryTemplateSupported
	 * @param inventoryTemplateSupported A Boolean representing the inventoryTemplateSupported
	 */
	public setInventoryTemplateSupported(inventoryTemplateSupported: boolean): void	{
		this.inventoryTemplateSupported = inventoryTemplateSupported;
		this.keyModified.set("inventory_template_supported", 1);

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
	 * The method to get the pluralLabel
	 * @returns A String representing the pluralLabel
	 */
	public getPluralLabel(): string	{
		return this.pluralLabel;

	}

	/**
	 * The method to set the value to pluralLabel
	 * @param pluralLabel A String representing the pluralLabel
	 */
	public setPluralLabel(pluralLabel: string): void	{
		this.pluralLabel = pluralLabel;
		this.keyModified.set("plural_label", 1);

	}

	/**
	 * The method to get the presenceSubMenu
	 * @returns A Boolean representing the presenceSubMenu
	 */
	public getPresenceSubMenu(): boolean	{
		return this.presenceSubMenu;

	}

	/**
	 * The method to set the value to presenceSubMenu
	 * @param presenceSubMenu A Boolean representing the presenceSubMenu
	 */
	public setPresenceSubMenu(presenceSubMenu: boolean): void	{
		this.presenceSubMenu = presenceSubMenu;
		this.keyModified.set("presence_sub_menu", 1);

	}

	/**
	 * The method to get the triggersSupported
	 * @returns A Boolean representing the triggersSupported
	 */
	public getTriggersSupported(): boolean	{
		return this.triggersSupported;

	}

	/**
	 * The method to set the value to triggersSupported
	 * @param triggersSupported A Boolean representing the triggersSupported
	 */
	public setTriggersSupported(triggersSupported: boolean): void	{
		this.triggersSupported = triggersSupported;
		this.keyModified.set("triggers_supported", 1);

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
	 * The method to get the chartView
	 * @returns A Boolean representing the chartView
	 */
	public getChartView(): boolean	{
		return this.chartView;

	}

	/**
	 * The method to set the value to chartView
	 * @param chartView A Boolean representing the chartView
	 */
	public setChartView(chartView: boolean): void	{
		this.chartView = chartView;
		this.keyModified.set("chart_view", 1);

	}

	/**
	 * The method to get the isblueprintsupported
	 * @returns A Boolean representing the isblueprintsupported
	 */
	public getIsblueprintsupported(): boolean	{
		return this.isblueprintsupported;

	}

	/**
	 * The method to set the value to isblueprintsupported
	 * @param isblueprintsupported A Boolean representing the isblueprintsupported
	 */
	public setIsblueprintsupported(isblueprintsupported: boolean): void	{
		this.isblueprintsupported = isblueprintsupported;
		this.keyModified.set("isBlueprintSupported", 1);

	}

	/**
	 * The method to get the visibility
	 * @returns A number representing the visibility
	 */
	public getVisibility(): number	{
		return this.visibility;

	}

	/**
	 * The method to set the value to visibility
	 * @param visibility A number representing the visibility
	 */
	public setVisibility(visibility: number): void	{
		this.visibility = visibility;
		this.keyModified.set("visibility", 1);

	}

	/**
	 * The method to get the visible
	 * @returns A Boolean representing the visible
	 */
	public getVisible(): boolean	{
		return this.visible;

	}

	/**
	 * The method to set the value to visible
	 * @param visible A Boolean representing the visible
	 */
	public setVisible(visible: boolean): void	{
		this.visible = visible;
		this.keyModified.set("visible", 1);

	}

	/**
	 * The method to get the convertable
	 * @returns A Boolean representing the convertable
	 */
	public getConvertable(): boolean	{
		return this.convertable;

	}

	/**
	 * The method to set the value to convertable
	 * @param convertable A Boolean representing the convertable
	 */
	public setConvertable(convertable: boolean): void	{
		this.convertable = convertable;
		this.keyModified.set("convertable", 1);

	}

	/**
	 * The method to get the editable
	 * @returns A Boolean representing the editable
	 */
	public getEditable(): boolean	{
		return this.editable;

	}

	/**
	 * The method to set the value to editable
	 * @param editable A Boolean representing the editable
	 */
	public setEditable(editable: boolean): void	{
		this.editable = editable;
		this.keyModified.set("editable", 1);

	}

	/**
	 * The method to get the emailtemplateSupport
	 * @returns A Boolean representing the emailtemplateSupport
	 */
	public getEmailtemplateSupport(): boolean	{
		return this.emailtemplateSupport;

	}

	/**
	 * The method to set the value to emailtemplateSupport
	 * @param emailtemplateSupport A Boolean representing the emailtemplateSupport
	 */
	public setEmailtemplateSupport(emailtemplateSupport: boolean): void	{
		this.emailtemplateSupport = emailtemplateSupport;
		this.keyModified.set("emailTemplate_support", 1);

	}

	/**
	 * The method to get the emailParserSupported
	 * @returns A Boolean representing the emailParserSupported
	 */
	public getEmailParserSupported(): boolean	{
		return this.emailParserSupported;

	}

	/**
	 * The method to set the value to emailParserSupported
	 * @param emailParserSupported A Boolean representing the emailParserSupported
	 */
	public setEmailParserSupported(emailParserSupported: boolean): void	{
		this.emailParserSupported = emailParserSupported;
		this.keyModified.set("email_parser_supported", 1);

	}

	/**
	 * The method to get the filterSupported
	 * @returns A Boolean representing the filterSupported
	 */
	public getFilterSupported(): boolean	{
		return this.filterSupported;

	}

	/**
	 * The method to set the value to filterSupported
	 * @param filterSupported A Boolean representing the filterSupported
	 */
	public setFilterSupported(filterSupported: boolean): void	{
		this.filterSupported = filterSupported;
		this.keyModified.set("filter_supported", 1);

	}

	/**
	 * The method to get the showAsTab
	 * @returns A Boolean representing the showAsTab
	 */
	public getShowAsTab(): boolean	{
		return this.showAsTab;

	}

	/**
	 * The method to set the value to showAsTab
	 * @param showAsTab A Boolean representing the showAsTab
	 */
	public setShowAsTab(showAsTab: boolean): void	{
		this.showAsTab = showAsTab;
		this.keyModified.set("show_as_tab", 1);

	}

	/**
	 * The method to get the webLink
	 * @returns A String representing the webLink
	 */
	public getWebLink(): string	{
		return this.webLink;

	}

	/**
	 * The method to set the value to webLink
	 * @param webLink A String representing the webLink
	 */
	public setWebLink(webLink: string): void	{
		this.webLink = webLink;
		this.keyModified.set("web_link", 1);

	}

	/**
	 * The method to get the sequenceNumber
	 * @returns A number representing the sequenceNumber
	 */
	public getSequenceNumber(): number	{
		return this.sequenceNumber;

	}

	/**
	 * The method to set the value to sequenceNumber
	 * @param sequenceNumber A number representing the sequenceNumber
	 */
	public setSequenceNumber(sequenceNumber: number): void	{
		this.sequenceNumber = sequenceNumber;
		this.keyModified.set("sequence_number", 1);

	}

	/**
	 * The method to get the singularLabel
	 * @returns A String representing the singularLabel
	 */
	public getSingularLabel(): string	{
		return this.singularLabel;

	}

	/**
	 * The method to set the value to singularLabel
	 * @param singularLabel A String representing the singularLabel
	 */
	public setSingularLabel(singularLabel: string): void	{
		this.singularLabel = singularLabel;
		this.keyModified.set("singular_label", 1);

	}

	/**
	 * The method to get the viewable
	 * @returns A Boolean representing the viewable
	 */
	public getViewable(): boolean	{
		return this.viewable;

	}

	/**
	 * The method to set the value to viewable
	 * @param viewable A Boolean representing the viewable
	 */
	public setViewable(viewable: boolean): void	{
		this.viewable = viewable;
		this.keyModified.set("viewable", 1);

	}

	/**
	 * The method to get the apiSupported
	 * @returns A Boolean representing the apiSupported
	 */
	public getAPISupported(): boolean	{
		return this.apiSupported;

	}

	/**
	 * The method to set the value to apiSupported
	 * @param apiSupported A Boolean representing the apiSupported
	 */
	public setAPISupported(apiSupported: boolean): void	{
		this.apiSupported = apiSupported;
		this.keyModified.set("api_supported", 1);

	}

	/**
	 * The method to get the apiName
	 * @returns A String representing the apiName
	 */
	public getAPIName(): string	{
		return this.apiName;

	}

	/**
	 * The method to set the value to apiName
	 * @param apiName A String representing the apiName
	 */
	public setAPIName(apiName: string): void	{
		this.apiName = apiName;
		this.keyModified.set("api_name", 1);

	}

	/**
	 * The method to get the quickCreate
	 * @returns A Boolean representing the quickCreate
	 */
	public getQuickCreate(): boolean	{
		return this.quickCreate;

	}

	/**
	 * The method to set the value to quickCreate
	 * @param quickCreate A Boolean representing the quickCreate
	 */
	public setQuickCreate(quickCreate: boolean): void	{
		this.quickCreate = quickCreate;
		this.keyModified.set("quick_create", 1);

	}

	/**
	 * The method to get the generatedType
	 * @returns An instance of Choice<string>
	 */
	public getGeneratedType(): Choice<string>	{
		return this.generatedType;

	}

	/**
	 * The method to set the value to generatedType
	 * @param generatedType An instance of Choice<string>
	 */
	public setGeneratedType(generatedType: Choice<string>): void	{
		this.generatedType = generatedType;
		this.keyModified.set("generated_type", 1);

	}

	/**
	 * The method to get the feedsRequired
	 * @returns A Boolean representing the feedsRequired
	 */
	public getFeedsRequired(): boolean	{
		return this.feedsRequired;

	}

	/**
	 * The method to set the value to feedsRequired
	 * @param feedsRequired A Boolean representing the feedsRequired
	 */
	public setFeedsRequired(feedsRequired: boolean): void	{
		this.feedsRequired = feedsRequired;
		this.keyModified.set("feeds_required", 1);

	}

	/**
	 * The method to get the scoringSupported
	 * @returns A Boolean representing the scoringSupported
	 */
	public getScoringSupported(): boolean	{
		return this.scoringSupported;

	}

	/**
	 * The method to set the value to scoringSupported
	 * @param scoringSupported A Boolean representing the scoringSupported
	 */
	public setScoringSupported(scoringSupported: boolean): void	{
		this.scoringSupported = scoringSupported;
		this.keyModified.set("scoring_supported", 1);

	}

	/**
	 * The method to get the webformSupported
	 * @returns A Boolean representing the webformSupported
	 */
	public getWebformSupported(): boolean	{
		return this.webformSupported;

	}

	/**
	 * The method to set the value to webformSupported
	 * @param webformSupported A Boolean representing the webformSupported
	 */
	public setWebformSupported(webformSupported: boolean): void	{
		this.webformSupported = webformSupported;
		this.keyModified.set("webform_supported", 1);

	}

	/**
	 * The method to get the territory
	 * @returns An instance of Territory
	 */
	public getTerritory(): Territory	{
		return this.territory;

	}

	/**
	 * The method to set the value to territory
	 * @param territory An instance of Territory
	 */
	public setTerritory(territory: Territory): void	{
		this.territory = territory;
		this.keyModified.set("territory", 1);

	}

	/**
	 * The method to get the arguments
	 * @returns An Array representing the arguments1
	 */
	public getArguments(): Array<Argument>	{
		return this.arguments1;

	}

	/**
	 * The method to set the value to arguments
	 * @param arguments1 An Array representing the arguments1
	 */
	public setArguments(arguments1: Array<Argument>): void	{
		this.arguments1 = arguments1;
		this.keyModified.set("arguments", 1);

	}

	/**
	 * The method to get the moduleName
	 * @returns A String representing the moduleName
	 */
	public getModuleName(): string	{
		return this.moduleName;

	}

	/**
	 * The method to set the value to moduleName
	 * @param moduleName A String representing the moduleName
	 */
	public setModuleName(moduleName: string): void	{
		this.moduleName = moduleName;
		this.keyModified.set("module_name", 1);

	}

	/**
	 * The method to get the chartViewSupported
	 * @returns A Boolean representing the chartViewSupported
	 */
	public getChartViewSupported(): boolean	{
		return this.chartViewSupported;

	}

	/**
	 * The method to set the value to chartViewSupported
	 * @param chartViewSupported A Boolean representing the chartViewSupported
	 */
	public setChartViewSupported(chartViewSupported: boolean): void	{
		this.chartViewSupported = chartViewSupported;
		this.keyModified.set("chart_view_supported", 1);

	}

	/**
	 * The method to get the profileCount
	 * @returns A number representing the profileCount
	 */
	public getProfileCount(): number	{
		return this.profileCount;

	}

	/**
	 * The method to set the value to profileCount
	 * @param profileCount A number representing the profileCount
	 */
	public setProfileCount(profileCount: number): void	{
		this.profileCount = profileCount;
		this.keyModified.set("profile_count", 1);

	}

	/**
	 * The method to get the businessCardFieldLimit
	 * @returns A number representing the businessCardFieldLimit
	 */
	public getBusinessCardFieldLimit(): number	{
		return this.businessCardFieldLimit;

	}

	/**
	 * The method to set the value to businessCardFieldLimit
	 * @param businessCardFieldLimit A number representing the businessCardFieldLimit
	 */
	public setBusinessCardFieldLimit(businessCardFieldLimit: number): void	{
		this.businessCardFieldLimit = businessCardFieldLimit;
		this.keyModified.set("business_card_field_limit", 1);

	}

	/**
	 * The method to get the trackCurrentData
	 * @returns A Boolean representing the trackCurrentData
	 */
	public getTrackCurrentData(): boolean	{
		return this.trackCurrentData;

	}

	/**
	 * The method to set the value to trackCurrentData
	 * @param trackCurrentData A Boolean representing the trackCurrentData
	 */
	public setTrackCurrentData(trackCurrentData: boolean): void	{
		this.trackCurrentData = trackCurrentData;
		this.keyModified.set("track_current_data", 1);

	}

	/**
	 * The method to get the modifiedBy
	 * @returns An instance of MinifiedUser
	 */
	public getModifiedBy(): MinifiedUser	{
		return this.modifiedBy;

	}

	/**
	 * The method to set the value to modifiedBy
	 * @param modifiedBy An instance of MinifiedUser
	 */
	public setModifiedBy(modifiedBy: MinifiedUser): void	{
		this.modifiedBy = modifiedBy;
		this.keyModified.set("modified_by", 1);

	}

	/**
	 * The method to get the profiles
	 * @returns An Array representing the profiles
	 */
	public getProfiles(): Array<MinifiedProfile>	{
		return this.profiles;

	}

	/**
	 * The method to set the value to profiles
	 * @param profiles An Array representing the profiles
	 */
	public setProfiles(profiles: Array<MinifiedProfile>): void	{
		this.profiles = profiles;
		this.keyModified.set("profiles", 1);

	}

	/**
	 * The method to get the parentModule
	 * @returns An instance of MinifiedModule
	 */
	public getParentModule(): MinifiedModule	{
		return this.parentModule;

	}

	/**
	 * The method to set the value to parentModule
	 * @param parentModule An instance of MinifiedModule
	 */
	public setParentModule(parentModule: MinifiedModule): void	{
		this.parentModule = parentModule;
		this.keyModified.set("parent_module", 1);

	}

	/**
	 * The method to get the activityBadge
	 * @returns An instance of Choice<string>
	 */
	public getActivityBadge(): Choice<string>	{
		return this.activityBadge;

	}

	/**
	 * The method to set the value to activityBadge
	 * @param activityBadge An instance of Choice<string>
	 */
	public setActivityBadge(activityBadge: Choice<string>): void	{
		this.activityBadge = activityBadge;
		this.keyModified.set("activity_badge", 1);

	}

	/**
	 * The method to get the fieldStates
	 * @returns An Array representing the fieldStates
	 */
	public getFieldStates(): Array<string>	{
		return this.fieldStates;

	}

	/**
	 * The method to set the value to fieldStates
	 * @param fieldStates An Array representing the fieldStates
	 */
	public setFieldStates(fieldStates: Array<string>): void	{
		this.fieldStates = fieldStates;
		this.keyModified.set("$field_states", 1);

	}

	/**
	 * The method to get the businessCardFields
	 * @returns An Array representing the businessCardFields
	 */
	public getBusinessCardFields(): Array<string>	{
		return this.businessCardFields;

	}

	/**
	 * The method to set the value to businessCardFields
	 * @param businessCardFields An Array representing the businessCardFields
	 */
	public setBusinessCardFields(businessCardFields: Array<string>): void	{
		this.businessCardFields = businessCardFields;
		this.keyModified.set("business_card_fields", 1);

	}

	/**
	 * The method to get the perPage
	 * @returns A number representing the perPage
	 */
	public getPerPage(): number	{
		return this.perPage;

	}

	/**
	 * The method to set the value to perPage
	 * @param perPage A number representing the perPage
	 */
	public setPerPage(perPage: number): void	{
		this.perPage = perPage;
		this.keyModified.set("per_page", 1);

	}

	/**
	 * The method to get the properties
	 * @returns An Array representing the properties
	 */
	public getProperties(): Array<string>	{
		return this.properties;

	}

	/**
	 * The method to set the value to properties
	 * @param properties An Array representing the properties
	 */
	public setProperties(properties: Array<string>): void	{
		this.properties = properties;
		this.keyModified.set("$properties", 1);

	}

	/**
	 * The method to get the onDemandProperties
	 * @returns An Array representing the onDemandProperties
	 */
	public getOnDemandProperties(): Array<string>	{
		return this.onDemandProperties;

	}

	/**
	 * The method to set the value to onDemandProperties
	 * @param onDemandProperties An Array representing the onDemandProperties
	 */
	public setOnDemandProperties(onDemandProperties: Array<string>): void	{
		this.onDemandProperties = onDemandProperties;
		this.keyModified.set("$on_demand_properties", 1);

	}

	/**
	 * The method to get the searchLayoutFields
	 * @returns An Array representing the searchLayoutFields
	 */
	public getSearchLayoutFields(): Array<string>	{
		return this.searchLayoutFields;

	}

	/**
	 * The method to set the value to searchLayoutFields
	 * @param searchLayoutFields An Array representing the searchLayoutFields
	 */
	public setSearchLayoutFields(searchLayoutFields: Array<string>): void	{
		this.searchLayoutFields = searchLayoutFields;
		this.keyModified.set("search_layout_fields", 1);

	}

	/**
	 * The method to get the kanbanViewSupported
	 * @returns A Boolean representing the kanbanViewSupported
	 */
	public getKanbanViewSupported(): boolean	{
		return this.kanbanViewSupported;

	}

	/**
	 * The method to set the value to kanbanViewSupported
	 * @param kanbanViewSupported A Boolean representing the kanbanViewSupported
	 */
	public setKanbanViewSupported(kanbanViewSupported: boolean): void	{
		this.kanbanViewSupported = kanbanViewSupported;
		this.keyModified.set("kanban_view_supported", 1);

	}

	/**
	 * The method to get the lookupFieldProperties
	 * @returns An instance of LookupFieldProperties
	 */
	public getLookupFieldProperties(): LookupFieldProperties	{
		return this.lookupFieldProperties;

	}

	/**
	 * The method to set the value to lookupFieldProperties
	 * @param lookupFieldProperties An instance of LookupFieldProperties
	 */
	public setLookupFieldProperties(lookupFieldProperties: LookupFieldProperties): void	{
		this.lookupFieldProperties = lookupFieldProperties;
		this.keyModified.set("lookup_field_properties", 1);

	}

	/**
	 * The method to get the kanbanView
	 * @returns A Boolean representing the kanbanView
	 */
	public getKanbanView(): boolean	{
		return this.kanbanView;

	}

	/**
	 * The method to set the value to kanbanView
	 * @param kanbanView A Boolean representing the kanbanView
	 */
	public setKanbanView(kanbanView: boolean): void	{
		this.kanbanView = kanbanView;
		this.keyModified.set("kanban_view", 1);

	}

	/**
	 * The method to get the relatedLists
	 * @returns An Array representing the relatedLists
	 */
	public getRelatedLists(): Array<RelatedList>	{
		return this.relatedLists;

	}

	/**
	 * The method to set the value to relatedLists
	 * @param relatedLists An Array representing the relatedLists
	 */
	public setRelatedLists(relatedLists: Array<RelatedList>): void	{
		this.relatedLists = relatedLists;
		this.keyModified.set("related_lists", 1);

	}

	/**
	 * The method to get the filterStatus
	 * @returns A Boolean representing the filterStatus
	 */
	public getFilterStatus(): boolean	{
		return this.filterStatus;

	}

	/**
	 * The method to set the value to filterStatus
	 * @param filterStatus A Boolean representing the filterStatus
	 */
	public setFilterStatus(filterStatus: boolean): void	{
		this.filterStatus = filterStatus;
		this.keyModified.set("filter_status", 1);

	}

	/**
	 * The method to get the relatedListProperties
	 * @returns An instance of RelatedListProperties
	 */
	public getRelatedListProperties(): RelatedListProperties	{
		return this.relatedListProperties;

	}

	/**
	 * The method to set the value to relatedListProperties
	 * @param relatedListProperties An instance of RelatedListProperties
	 */
	public setRelatedListProperties(relatedListProperties: RelatedListProperties): void	{
		this.relatedListProperties = relatedListProperties;
		this.keyModified.set("related_list_properties", 1);

	}

	/**
	 * The method to get the displayField
	 * @returns An Object representing the displayField
	 */
	public getDisplayField(): any	{
		return this.displayField;

	}

	/**
	 * The method to set the value to displayField
	 * @param displayField An Object representing the displayField
	 */
	public setDisplayField(displayField: any): void	{
		this.displayField = displayField;
		this.keyModified.set("display_field", 1);

	}

	/**
	 * The method to get the layouts
	 * @returns An Array representing the layouts
	 */
	public getLayouts(): Array<any>	{
		return this.layouts;

	}

	/**
	 * The method to set the value to layouts
	 * @param layouts An Array representing the layouts
	 */
	public setLayouts(layouts: Array<any>): void	{
		this.layouts = layouts;
		this.keyModified.set("layouts", 1);

	}

	/**
	 * The method to get the fields
	 * @returns An Array representing the fields
	 */
	public getFields(): Array<ModuleFields>	{
		return this.fields;

	}

	/**
	 * The method to set the value to fields
	 * @param fields An Array representing the fields
	 */
	public setFields(fields: Array<ModuleFields>): void	{
		this.fields = fields;
		this.keyModified.set("fields", 1);

	}

	/**
	 * The method to get the customView
	 * @returns An instance of CustomViews
	 */
	public getCustomView(): CustomViews	{
		return this.customView;

	}

	/**
	 * The method to set the value to customView
	 * @param customView An instance of CustomViews
	 */
	public setCustomView(customView: CustomViews): void	{
		this.customView = customView;
		this.keyModified.set("custom_view", 1);

	}

	/**
	 * The method to get the ziaView
	 * @returns A Boolean representing the ziaView
	 */
	public getZiaView(): boolean	{
		return this.ziaView;

	}

	/**
	 * The method to set the value to ziaView
	 * @param ziaView A Boolean representing the ziaView
	 */
	public setZiaView(ziaView: boolean): void	{
		this.ziaView = ziaView;
		this.keyModified.set("zia_view", 1);

	}

	/**
	 * The method to get the defaultMappingFields
	 * @returns An Array representing the defaultMappingFields
	 */
	public getDefaultMappingFields(): Array<MinifiedField>	{
		return this.defaultMappingFields;

	}

	/**
	 * The method to set the value to defaultMappingFields
	 * @param defaultMappingFields An Array representing the defaultMappingFields
	 */
	public setDefaultMappingFields(defaultMappingFields: Array<MinifiedField>): void	{
		this.defaultMappingFields = defaultMappingFields;
		this.keyModified.set("default_mapping_fields", 1);

	}

	/**
	 * The method to get the status
	 * @returns A String representing the status
	 */
	public getStatus(): string	{
		return this.status;

	}

	/**
	 * The method to set the value to status
	 * @param status A String representing the status
	 */
	public setStatus(status: string): void	{
		this.status = status;
		this.keyModified.set("status", 1);

	}

	/**
	 * The method to get the staticSubformProperties
	 * @returns An instance of StaticSubformProperties
	 */
	public getStaticSubformProperties(): StaticSubformProperties	{
		return this.staticSubformProperties;

	}

	/**
	 * The method to set the value to staticSubformProperties
	 * @param staticSubformProperties An instance of StaticSubformProperties
	 */
	public setStaticSubformProperties(staticSubformProperties: StaticSubformProperties): void	{
		this.staticSubformProperties = staticSubformProperties;
		this.keyModified.set("static_subform_properties", 1);

	}

	/**
	 * The method to get the layoutAssociations
	 * @returns An Array representing the layoutAssociations
	 */
	public getLayoutAssociations(): Array<LayoutAssociation>	{
		return this.layoutAssociations;

	}

	/**
	 * The method to set the value to layoutAssociations
	 * @param layoutAssociations An Array representing the layoutAssociations
	 */
	public setLayoutAssociations(layoutAssociations: Array<LayoutAssociation>): void	{
		this.layoutAssociations = layoutAssociations;
		this.keyModified.set("layout_associations", 1);

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
	Modules as MasterModel,
	Modules as Modules
}
