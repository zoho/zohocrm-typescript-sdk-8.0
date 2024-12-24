import {AssociationDetails} from "../fields/association_details";
import {AutoNumber} from "../fields/auto_number";
import {ConvertMapping} from "../fields/convert_mapping";
import {Crypt} from "../fields/crypt";
import {Currency} from "../fields/currency";
import {EmailParser} from "../fields/email_parser";
import {External} from "../fields/external";
import {Fields} from "../fields/fields";
import {FileUpoladOption} from "../fields/file_upolad_option";
import {Formula} from "../fields/formula";
import {HipaaCompliance} from "../fields/hipaa_compliance";
import {HistoryTracking} from "../fields/history_tracking";
import {LayoutAssociation} from "../fields/layout_association";
import {Lookup} from "../fields/lookup";
import {MultiModuleLookup} from "../fields/multi_module_lookup";
import {Multiselectlookup} from "../fields/multiselectlookup";
import {OperationType} from "../fields/operation_type";
import {PickListValue} from "../fields/pick_list_value";
import {Private} from "../fields/private";
import {Profile} from "../fields/profile";
import {ReferFromField} from "../fields/refer_from_field";
import {RollupSummary} from "../fields/rollup_summary";
import {Subform} from "../fields/subform";
import {Textarea} from "../fields/textarea";
import {Tooltip} from "../fields/tooltip";
import {Unique} from "../fields/unique";
import {ViewType} from "../fields/view_type";
import {MinifiedModule} from "./minified_module";
import {SharingProperties} from "./sharing_properties";
import {Model} from "../../../../../../utils/util/model";

class ModuleFields extends Fields implements Model{

	protected blueprintSupported: boolean;
	protected jsonType: string;
	protected length: number;
	protected decimalPlace: number;
	protected multiModuleLookup: MultiModuleLookup;
	protected sharingProperties: SharingProperties;
	protected currency: Currency;
	protected fileUpoladOptionlist: Array<FileUpoladOption>;
	protected lookup: Lookup;
	protected subform: Subform;
	protected formula: Formula;
	protected multiselectlookup: Multiselectlookup;
	protected multiuserlookup: Multiselectlookup;
	protected pickListValues: Array<PickListValue>;
	protected allowedModules: Array<MinifiedModule>;
	protected hipaaComplianceEnabled: boolean;
	protected hipaaCompliance: HipaaCompliance;
	protected associatedModule: MinifiedModule;
	protected dataType: string;
	protected operationType: OperationType;
	protected systemMandatory: boolean;
	protected webhook: boolean;
	protected sequenceNumber: number;
	protected defaultValue: string;
	protected virtualField: boolean;
	protected fieldReadOnly: boolean;
	protected customizableProperties: Array<string>;
	protected readOnly: boolean;
	protected customField: boolean;
	protected businesscardSupported: boolean;
	protected filterable: boolean;
	protected visible: boolean;
	protected availableInUserLayout: boolean;
	protected displayField: boolean;
	protected pickListValuesSortedLexically: boolean;
	protected sortable: boolean;
	protected layoutAssociations: Array<LayoutAssociation>;
	protected separator: boolean;
	protected searchable: boolean;
	protected enableColourCode: boolean;
	protected massUpdate: boolean;
	protected createdSource: string;
	protected type: string;
	protected displayLabel: string;
	protected columnName: string;
	protected apiName: string;
	protected displayType: number;
	protected uiType: number;
	protected colourCodeEnabledBySystem: boolean;
	protected quickSequenceNumber: string;
	protected emailParser: EmailParser;
	protected rollupSummary: RollupSummary;
	protected referFromField: ReferFromField;
	protected createdTime: Date;
	protected modifiedTime: Date;
	protected showType: number;
	protected category: number;
	protected id: bigint;
	protected profiles: Array<Profile>;
	protected viewType: ViewType;
	protected unique: Unique;
	protected subModule: MinifiedModule;
	protected external: External;
	protected private1: Private;
	protected convertMapping: ConvertMapping;
	protected autonumber: AutoNumber;
	protected autoNumber65: AutoNumber;
	protected crypt: Crypt;
	protected tooltip: Tooltip;
	protected historyTracking: HistoryTracking;
	protected associationDetails: AssociationDetails;
	protected additionalColumn: string;
	protected fieldLabel: string;
	protected globalPicklist: any;
	protected updateexistingrecords: boolean;
	protected numberSeparator: boolean;
	protected textarea: Textarea;
	protected staticField: boolean;
	protected keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the blueprintSupported
	 * @returns A Boolean representing the blueprintSupported
	 */
	public getBlueprintSupported(): boolean	{
		return this.blueprintSupported;

	}

	/**
	 * The method to set the value to blueprintSupported
	 * @param blueprintSupported A Boolean representing the blueprintSupported
	 */
	public setBlueprintSupported(blueprintSupported: boolean): void	{
		this.blueprintSupported = blueprintSupported;
		this.keyModified.set("blueprint_supported", 1);

	}

	/**
	 * The method to get the jsonType
	 * @returns A String representing the jsonType
	 */
	public getJsonType(): string	{
		return this.jsonType;

	}

	/**
	 * The method to set the value to jsonType
	 * @param jsonType A String representing the jsonType
	 */
	public setJsonType(jsonType: string): void	{
		this.jsonType = jsonType;
		this.keyModified.set("json_type", 1);

	}

	/**
	 * The method to get the length
	 * @returns A number representing the length
	 */
	public getLength(): number	{
		return this.length;

	}

	/**
	 * The method to set the value to length
	 * @param length A number representing the length
	 */
	public setLength(length: number): void	{
		this.length = length;
		this.keyModified.set("length", 1);

	}

	/**
	 * The method to get the decimalPlace
	 * @returns A number representing the decimalPlace
	 */
	public getDecimalPlace(): number	{
		return this.decimalPlace;

	}

	/**
	 * The method to set the value to decimalPlace
	 * @param decimalPlace A number representing the decimalPlace
	 */
	public setDecimalPlace(decimalPlace: number): void	{
		this.decimalPlace = decimalPlace;
		this.keyModified.set("decimal_place", 1);

	}

	/**
	 * The method to get the multiModuleLookup
	 * @returns An instance of MultiModuleLookup
	 */
	public getMultiModuleLookup(): MultiModuleLookup	{
		return this.multiModuleLookup;

	}

	/**
	 * The method to set the value to multiModuleLookup
	 * @param multiModuleLookup An instance of MultiModuleLookup
	 */
	public setMultiModuleLookup(multiModuleLookup: MultiModuleLookup): void	{
		this.multiModuleLookup = multiModuleLookup;
		this.keyModified.set("multi_module_lookup", 1);

	}

	/**
	 * The method to get the sharingProperties
	 * @returns An instance of SharingProperties
	 */
	public getSharingProperties(): SharingProperties	{
		return this.sharingProperties;

	}

	/**
	 * The method to set the value to sharingProperties
	 * @param sharingProperties An instance of SharingProperties
	 */
	public setSharingProperties(sharingProperties: SharingProperties): void	{
		this.sharingProperties = sharingProperties;
		this.keyModified.set("sharing_properties", 1);

	}

	/**
	 * The method to get the currency
	 * @returns An instance of Currency
	 */
	public getCurrency(): Currency	{
		return this.currency;

	}

	/**
	 * The method to set the value to currency
	 * @param currency An instance of Currency
	 */
	public setCurrency(currency: Currency): void	{
		this.currency = currency;
		this.keyModified.set("currency", 1);

	}

	/**
	 * The method to get the fileUpoladOptionlist
	 * @returns An Array representing the fileUpoladOptionlist
	 */
	public getFileUpoladOptionlist(): Array<FileUpoladOption>	{
		return this.fileUpoladOptionlist;

	}

	/**
	 * The method to set the value to fileUpoladOptionlist
	 * @param fileUpoladOptionlist An Array representing the fileUpoladOptionlist
	 */
	public setFileUpoladOptionlist(fileUpoladOptionlist: Array<FileUpoladOption>): void	{
		this.fileUpoladOptionlist = fileUpoladOptionlist;
		this.keyModified.set("file_upolad_optionlist", 1);

	}

	/**
	 * The method to get the lookup
	 * @returns An instance of Lookup
	 */
	public getLookup(): Lookup	{
		return this.lookup;

	}

	/**
	 * The method to set the value to lookup
	 * @param lookup An instance of Lookup
	 */
	public setLookup(lookup: Lookup): void	{
		this.lookup = lookup;
		this.keyModified.set("lookup", 1);

	}

	/**
	 * The method to get the subform
	 * @returns An instance of Subform
	 */
	public getSubform(): Subform	{
		return this.subform;

	}

	/**
	 * The method to set the value to subform
	 * @param subform An instance of Subform
	 */
	public setSubform(subform: Subform): void	{
		this.subform = subform;
		this.keyModified.set("subform", 1);

	}

	/**
	 * The method to get the formula
	 * @returns An instance of Formula
	 */
	public getFormula(): Formula	{
		return this.formula;

	}

	/**
	 * The method to set the value to formula
	 * @param formula An instance of Formula
	 */
	public setFormula(formula: Formula): void	{
		this.formula = formula;
		this.keyModified.set("formula", 1);

	}

	/**
	 * The method to get the multiselectlookup
	 * @returns An instance of Multiselectlookup
	 */
	public getMultiselectlookup(): Multiselectlookup	{
		return this.multiselectlookup;

	}

	/**
	 * The method to set the value to multiselectlookup
	 * @param multiselectlookup An instance of Multiselectlookup
	 */
	public setMultiselectlookup(multiselectlookup: Multiselectlookup): void	{
		this.multiselectlookup = multiselectlookup;
		this.keyModified.set("multiselectlookup", 1);

	}

	/**
	 * The method to get the multiuserlookup
	 * @returns An instance of Multiselectlookup
	 */
	public getMultiuserlookup(): Multiselectlookup	{
		return this.multiuserlookup;

	}

	/**
	 * The method to set the value to multiuserlookup
	 * @param multiuserlookup An instance of Multiselectlookup
	 */
	public setMultiuserlookup(multiuserlookup: Multiselectlookup): void	{
		this.multiuserlookup = multiuserlookup;
		this.keyModified.set("multiuserlookup", 1);

	}

	/**
	 * The method to get the pickListValues
	 * @returns An Array representing the pickListValues
	 */
	public getPickListValues(): Array<PickListValue>	{
		return this.pickListValues;

	}

	/**
	 * The method to set the value to pickListValues
	 * @param pickListValues An Array representing the pickListValues
	 */
	public setPickListValues(pickListValues: Array<PickListValue>): void	{
		this.pickListValues = pickListValues;
		this.keyModified.set("pick_list_values", 1);

	}

	/**
	 * The method to get the allowedModules
	 * @returns An Array representing the allowedModules
	 */
	public getAllowedModules(): Array<MinifiedModule>	{
		return this.allowedModules;

	}

	/**
	 * The method to set the value to allowedModules
	 * @param allowedModules An Array representing the allowedModules
	 */
	public setAllowedModules(allowedModules: Array<MinifiedModule>): void	{
		this.allowedModules = allowedModules;
		this.keyModified.set("allowed_modules", 1);

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
	 * The method to get the hipaaCompliance
	 * @returns An instance of HipaaCompliance
	 */
	public getHipaaCompliance(): HipaaCompliance	{
		return this.hipaaCompliance;

	}

	/**
	 * The method to set the value to hipaaCompliance
	 * @param hipaaCompliance An instance of HipaaCompliance
	 */
	public setHipaaCompliance(hipaaCompliance: HipaaCompliance): void	{
		this.hipaaCompliance = hipaaCompliance;
		this.keyModified.set("hipaa_compliance", 1);

	}

	/**
	 * The method to get the associatedModule
	 * @returns An instance of MinifiedModule
	 */
	public getAssociatedModule(): MinifiedModule	{
		return this.associatedModule;

	}

	/**
	 * The method to set the value to associatedModule
	 * @param associatedModule An instance of MinifiedModule
	 */
	public setAssociatedModule(associatedModule: MinifiedModule): void	{
		this.associatedModule = associatedModule;
		this.keyModified.set("associated_module", 1);

	}

	/**
	 * The method to get the dataType
	 * @returns A String representing the dataType
	 */
	public getDataType(): string	{
		return this.dataType;

	}

	/**
	 * The method to set the value to dataType
	 * @param dataType A String representing the dataType
	 */
	public setDataType(dataType: string): void	{
		this.dataType = dataType;
		this.keyModified.set("data_type", 1);

	}

	/**
	 * The method to get the operationType
	 * @returns An instance of OperationType
	 */
	public getOperationType(): OperationType	{
		return this.operationType;

	}

	/**
	 * The method to set the value to operationType
	 * @param operationType An instance of OperationType
	 */
	public setOperationType(operationType: OperationType): void	{
		this.operationType = operationType;
		this.keyModified.set("operation_type", 1);

	}

	/**
	 * The method to get the systemMandatory
	 * @returns A Boolean representing the systemMandatory
	 */
	public getSystemMandatory(): boolean	{
		return this.systemMandatory;

	}

	/**
	 * The method to set the value to systemMandatory
	 * @param systemMandatory A Boolean representing the systemMandatory
	 */
	public setSystemMandatory(systemMandatory: boolean): void	{
		this.systemMandatory = systemMandatory;
		this.keyModified.set("system_mandatory", 1);

	}

	/**
	 * The method to get the webhook
	 * @returns A Boolean representing the webhook
	 */
	public getWebhook(): boolean	{
		return this.webhook;

	}

	/**
	 * The method to set the value to webhook
	 * @param webhook A Boolean representing the webhook
	 */
	public setWebhook(webhook: boolean): void	{
		this.webhook = webhook;
		this.keyModified.set("webhook", 1);

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
	 * The method to get the defaultValue
	 * @returns A String representing the defaultValue
	 */
	public getDefaultValue(): string	{
		return this.defaultValue;

	}

	/**
	 * The method to set the value to defaultValue
	 * @param defaultValue A String representing the defaultValue
	 */
	public setDefaultValue(defaultValue: string): void	{
		this.defaultValue = defaultValue;
		this.keyModified.set("default_value", 1);

	}

	/**
	 * The method to get the virtualField
	 * @returns A Boolean representing the virtualField
	 */
	public getVirtualField(): boolean	{
		return this.virtualField;

	}

	/**
	 * The method to set the value to virtualField
	 * @param virtualField A Boolean representing the virtualField
	 */
	public setVirtualField(virtualField: boolean): void	{
		this.virtualField = virtualField;
		this.keyModified.set("virtual_field", 1);

	}

	/**
	 * The method to get the fieldReadOnly
	 * @returns A Boolean representing the fieldReadOnly
	 */
	public getFieldReadOnly(): boolean	{
		return this.fieldReadOnly;

	}

	/**
	 * The method to set the value to fieldReadOnly
	 * @param fieldReadOnly A Boolean representing the fieldReadOnly
	 */
	public setFieldReadOnly(fieldReadOnly: boolean): void	{
		this.fieldReadOnly = fieldReadOnly;
		this.keyModified.set("field_read_only", 1);

	}

	/**
	 * The method to get the customizableProperties
	 * @returns An Array representing the customizableProperties
	 */
	public getCustomizableProperties(): Array<string>	{
		return this.customizableProperties;

	}

	/**
	 * The method to set the value to customizableProperties
	 * @param customizableProperties An Array representing the customizableProperties
	 */
	public setCustomizableProperties(customizableProperties: Array<string>): void	{
		this.customizableProperties = customizableProperties;
		this.keyModified.set("customizable_properties", 1);

	}

	/**
	 * The method to get the readOnly
	 * @returns A Boolean representing the readOnly
	 */
	public getReadOnly(): boolean	{
		return this.readOnly;

	}

	/**
	 * The method to set the value to readOnly
	 * @param readOnly A Boolean representing the readOnly
	 */
	public setReadOnly(readOnly: boolean): void	{
		this.readOnly = readOnly;
		this.keyModified.set("read_only", 1);

	}

	/**
	 * The method to get the customField
	 * @returns A Boolean representing the customField
	 */
	public getCustomField(): boolean	{
		return this.customField;

	}

	/**
	 * The method to set the value to customField
	 * @param customField A Boolean representing the customField
	 */
	public setCustomField(customField: boolean): void	{
		this.customField = customField;
		this.keyModified.set("custom_field", 1);

	}

	/**
	 * The method to get the businesscardSupported
	 * @returns A Boolean representing the businesscardSupported
	 */
	public getBusinesscardSupported(): boolean	{
		return this.businesscardSupported;

	}

	/**
	 * The method to set the value to businesscardSupported
	 * @param businesscardSupported A Boolean representing the businesscardSupported
	 */
	public setBusinesscardSupported(businesscardSupported: boolean): void	{
		this.businesscardSupported = businesscardSupported;
		this.keyModified.set("businesscard_supported", 1);

	}

	/**
	 * The method to get the filterable
	 * @returns A Boolean representing the filterable
	 */
	public getFilterable(): boolean	{
		return this.filterable;

	}

	/**
	 * The method to set the value to filterable
	 * @param filterable A Boolean representing the filterable
	 */
	public setFilterable(filterable: boolean): void	{
		this.filterable = filterable;
		this.keyModified.set("filterable", 1);

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
	 * The method to get the availableInUserLayout
	 * @returns A Boolean representing the availableInUserLayout
	 */
	public getAvailableInUserLayout(): boolean	{
		return this.availableInUserLayout;

	}

	/**
	 * The method to set the value to availableInUserLayout
	 * @param availableInUserLayout A Boolean representing the availableInUserLayout
	 */
	public setAvailableInUserLayout(availableInUserLayout: boolean): void	{
		this.availableInUserLayout = availableInUserLayout;
		this.keyModified.set("available_in_user_layout", 1);

	}

	/**
	 * The method to get the displayField
	 * @returns A Boolean representing the displayField
	 */
	public getDisplayField(): boolean	{
		return this.displayField;

	}

	/**
	 * The method to set the value to displayField
	 * @param displayField A Boolean representing the displayField
	 */
	public setDisplayField(displayField: boolean): void	{
		this.displayField = displayField;
		this.keyModified.set("display_field", 1);

	}

	/**
	 * The method to get the pickListValuesSortedLexically
	 * @returns A Boolean representing the pickListValuesSortedLexically
	 */
	public getPickListValuesSortedLexically(): boolean	{
		return this.pickListValuesSortedLexically;

	}

	/**
	 * The method to set the value to pickListValuesSortedLexically
	 * @param pickListValuesSortedLexically A Boolean representing the pickListValuesSortedLexically
	 */
	public setPickListValuesSortedLexically(pickListValuesSortedLexically: boolean): void	{
		this.pickListValuesSortedLexically = pickListValuesSortedLexically;
		this.keyModified.set("pick_list_values_sorted_lexically", 1);

	}

	/**
	 * The method to get the sortable
	 * @returns A Boolean representing the sortable
	 */
	public getSortable(): boolean	{
		return this.sortable;

	}

	/**
	 * The method to set the value to sortable
	 * @param sortable A Boolean representing the sortable
	 */
	public setSortable(sortable: boolean): void	{
		this.sortable = sortable;
		this.keyModified.set("sortable", 1);

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
	 * The method to get the separator
	 * @returns A Boolean representing the separator
	 */
	public getSeparator(): boolean	{
		return this.separator;

	}

	/**
	 * The method to set the value to separator
	 * @param separator A Boolean representing the separator
	 */
	public setSeparator(separator: boolean): void	{
		this.separator = separator;
		this.keyModified.set("separator", 1);

	}

	/**
	 * The method to get the searchable
	 * @returns A Boolean representing the searchable
	 */
	public getSearchable(): boolean	{
		return this.searchable;

	}

	/**
	 * The method to set the value to searchable
	 * @param searchable A Boolean representing the searchable
	 */
	public setSearchable(searchable: boolean): void	{
		this.searchable = searchable;
		this.keyModified.set("searchable", 1);

	}

	/**
	 * The method to get the enableColourCode
	 * @returns A Boolean representing the enableColourCode
	 */
	public getEnableColourCode(): boolean	{
		return this.enableColourCode;

	}

	/**
	 * The method to set the value to enableColourCode
	 * @param enableColourCode A Boolean representing the enableColourCode
	 */
	public setEnableColourCode(enableColourCode: boolean): void	{
		this.enableColourCode = enableColourCode;
		this.keyModified.set("enable_colour_code", 1);

	}

	/**
	 * The method to get the massUpdate
	 * @returns A Boolean representing the massUpdate
	 */
	public getMassUpdate(): boolean	{
		return this.massUpdate;

	}

	/**
	 * The method to set the value to massUpdate
	 * @param massUpdate A Boolean representing the massUpdate
	 */
	public setMassUpdate(massUpdate: boolean): void	{
		this.massUpdate = massUpdate;
		this.keyModified.set("mass_update", 1);

	}

	/**
	 * The method to get the createdSource
	 * @returns A String representing the createdSource
	 */
	public getCreatedSource(): string	{
		return this.createdSource;

	}

	/**
	 * The method to set the value to createdSource
	 * @param createdSource A String representing the createdSource
	 */
	public setCreatedSource(createdSource: string): void	{
		this.createdSource = createdSource;
		this.keyModified.set("created_source", 1);

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
	 * The method to get the displayLabel
	 * @returns A String representing the displayLabel
	 */
	public getDisplayLabel(): string	{
		return this.displayLabel;

	}

	/**
	 * The method to set the value to displayLabel
	 * @param displayLabel A String representing the displayLabel
	 */
	public setDisplayLabel(displayLabel: string): void	{
		this.displayLabel = displayLabel;
		this.keyModified.set("display_label", 1);

	}

	/**
	 * The method to get the columnName
	 * @returns A String representing the columnName
	 */
	public getColumnName(): string	{
		return this.columnName;

	}

	/**
	 * The method to set the value to columnName
	 * @param columnName A String representing the columnName
	 */
	public setColumnName(columnName: string): void	{
		this.columnName = columnName;
		this.keyModified.set("column_name", 1);

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
	 * The method to get the displayType
	 * @returns A number representing the displayType
	 */
	public getDisplayType(): number	{
		return this.displayType;

	}

	/**
	 * The method to set the value to displayType
	 * @param displayType A number representing the displayType
	 */
	public setDisplayType(displayType: number): void	{
		this.displayType = displayType;
		this.keyModified.set("display_type", 1);

	}

	/**
	 * The method to get the uiType
	 * @returns A number representing the uiType
	 */
	public getUiType(): number	{
		return this.uiType;

	}

	/**
	 * The method to set the value to uiType
	 * @param uiType A number representing the uiType
	 */
	public setUiType(uiType: number): void	{
		this.uiType = uiType;
		this.keyModified.set("ui_type", 1);

	}

	/**
	 * The method to get the colourCodeEnabledBySystem
	 * @returns A Boolean representing the colourCodeEnabledBySystem
	 */
	public getColourCodeEnabledBySystem(): boolean	{
		return this.colourCodeEnabledBySystem;

	}

	/**
	 * The method to set the value to colourCodeEnabledBySystem
	 * @param colourCodeEnabledBySystem A Boolean representing the colourCodeEnabledBySystem
	 */
	public setColourCodeEnabledBySystem(colourCodeEnabledBySystem: boolean): void	{
		this.colourCodeEnabledBySystem = colourCodeEnabledBySystem;
		this.keyModified.set("colour_code_enabled_by_system", 1);

	}

	/**
	 * The method to get the quickSequenceNumber
	 * @returns A String representing the quickSequenceNumber
	 */
	public getQuickSequenceNumber(): string	{
		return this.quickSequenceNumber;

	}

	/**
	 * The method to set the value to quickSequenceNumber
	 * @param quickSequenceNumber A String representing the quickSequenceNumber
	 */
	public setQuickSequenceNumber(quickSequenceNumber: string): void	{
		this.quickSequenceNumber = quickSequenceNumber;
		this.keyModified.set("quick_sequence_number", 1);

	}

	/**
	 * The method to get the emailParser
	 * @returns An instance of EmailParser
	 */
	public getEmailParser(): EmailParser	{
		return this.emailParser;

	}

	/**
	 * The method to set the value to emailParser
	 * @param emailParser An instance of EmailParser
	 */
	public setEmailParser(emailParser: EmailParser): void	{
		this.emailParser = emailParser;
		this.keyModified.set("email_parser", 1);

	}

	/**
	 * The method to get the rollupSummary
	 * @returns An instance of RollupSummary
	 */
	public getRollupSummary(): RollupSummary	{
		return this.rollupSummary;

	}

	/**
	 * The method to set the value to rollupSummary
	 * @param rollupSummary An instance of RollupSummary
	 */
	public setRollupSummary(rollupSummary: RollupSummary): void	{
		this.rollupSummary = rollupSummary;
		this.keyModified.set("rollup_summary", 1);

	}

	/**
	 * The method to get the referFromField
	 * @returns An instance of ReferFromField
	 */
	public getReferFromField(): ReferFromField	{
		return this.referFromField;

	}

	/**
	 * The method to set the value to referFromField
	 * @param referFromField An instance of ReferFromField
	 */
	public setReferFromField(referFromField: ReferFromField): void	{
		this.referFromField = referFromField;
		this.keyModified.set("refer_from_field", 1);

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
	 * The method to get the showType
	 * @returns A number representing the showType
	 */
	public getShowType(): number	{
		return this.showType;

	}

	/**
	 * The method to set the value to showType
	 * @param showType A number representing the showType
	 */
	public setShowType(showType: number): void	{
		this.showType = showType;
		this.keyModified.set("show_type", 1);

	}

	/**
	 * The method to get the category
	 * @returns A number representing the category
	 */
	public getCategory(): number	{
		return this.category;

	}

	/**
	 * The method to set the value to category
	 * @param category A number representing the category
	 */
	public setCategory(category: number): void	{
		this.category = category;
		this.keyModified.set("category", 1);

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
	 * The method to get the profiles
	 * @returns An Array representing the profiles
	 */
	public getProfiles(): Array<Profile>	{
		return this.profiles;

	}

	/**
	 * The method to set the value to profiles
	 * @param profiles An Array representing the profiles
	 */
	public setProfiles(profiles: Array<Profile>): void	{
		this.profiles = profiles;
		this.keyModified.set("profiles", 1);

	}

	/**
	 * The method to get the viewType
	 * @returns An instance of ViewType
	 */
	public getViewType(): ViewType	{
		return this.viewType;

	}

	/**
	 * The method to set the value to viewType
	 * @param viewType An instance of ViewType
	 */
	public setViewType(viewType: ViewType): void	{
		this.viewType = viewType;
		this.keyModified.set("view_type", 1);

	}

	/**
	 * The method to get the unique
	 * @returns An instance of Unique
	 */
	public getUnique(): Unique	{
		return this.unique;

	}

	/**
	 * The method to set the value to unique
	 * @param unique An instance of Unique
	 */
	public setUnique(unique: Unique): void	{
		this.unique = unique;
		this.keyModified.set("unique", 1);

	}

	/**
	 * The method to get the subModule
	 * @returns An instance of MinifiedModule
	 */
	public getSubModule(): MinifiedModule	{
		return this.subModule;

	}

	/**
	 * The method to set the value to subModule
	 * @param subModule An instance of MinifiedModule
	 */
	public setSubModule(subModule: MinifiedModule): void	{
		this.subModule = subModule;
		this.keyModified.set("sub_module", 1);

	}

	/**
	 * The method to get the external
	 * @returns An instance of External
	 */
	public getExternal(): External	{
		return this.external;

	}

	/**
	 * The method to set the value to external
	 * @param external An instance of External
	 */
	public setExternal(external: External): void	{
		this.external = external;
		this.keyModified.set("external", 1);

	}

	/**
	 * The method to get the private
	 * @returns An instance of Private
	 */
	public getPrivate(): Private	{
		return this.private1;

	}

	/**
	 * The method to set the value to private
	 * @param private1 An instance of Private
	 */
	public setPrivate(private1: Private): void	{
		this.private1 = private1;
		this.keyModified.set("private", 1);

	}

	/**
	 * The method to get the convertMapping
	 * @returns An instance of ConvertMapping
	 */
	public getConvertMapping(): ConvertMapping	{
		return this.convertMapping;

	}

	/**
	 * The method to set the value to convertMapping
	 * @param convertMapping An instance of ConvertMapping
	 */
	public setConvertMapping(convertMapping: ConvertMapping): void	{
		this.convertMapping = convertMapping;
		this.keyModified.set("convert_mapping", 1);

	}

	/**
	 * The method to get the autonumber
	 * @returns An instance of AutoNumber
	 */
	public getAutonumber(): AutoNumber	{
		return this.autonumber;

	}

	/**
	 * The method to set the value to autonumber
	 * @param autonumber An instance of AutoNumber
	 */
	public setAutonumber(autonumber: AutoNumber): void	{
		this.autonumber = autonumber;
		this.keyModified.set("autonumber", 1);

	}

	/**
	 * The method to get the autoNumber65
	 * @returns An instance of AutoNumber
	 */
	public getAutoNumber65(): AutoNumber	{
		return this.autoNumber65;

	}

	/**
	 * The method to set the value to autoNumber65
	 * @param autoNumber65 An instance of AutoNumber
	 */
	public setAutoNumber65(autoNumber65: AutoNumber): void	{
		this.autoNumber65 = autoNumber65;
		this.keyModified.set("auto_number", 1);

	}

	/**
	 * The method to get the crypt
	 * @returns An instance of Crypt
	 */
	public getCrypt(): Crypt	{
		return this.crypt;

	}

	/**
	 * The method to set the value to crypt
	 * @param crypt An instance of Crypt
	 */
	public setCrypt(crypt: Crypt): void	{
		this.crypt = crypt;
		this.keyModified.set("crypt", 1);

	}

	/**
	 * The method to get the tooltip
	 * @returns An instance of Tooltip
	 */
	public getTooltip(): Tooltip	{
		return this.tooltip;

	}

	/**
	 * The method to set the value to tooltip
	 * @param tooltip An instance of Tooltip
	 */
	public setTooltip(tooltip: Tooltip): void	{
		this.tooltip = tooltip;
		this.keyModified.set("tooltip", 1);

	}

	/**
	 * The method to get the historyTracking
	 * @returns An instance of HistoryTracking
	 */
	public getHistoryTracking(): HistoryTracking	{
		return this.historyTracking;

	}

	/**
	 * The method to set the value to historyTracking
	 * @param historyTracking An instance of HistoryTracking
	 */
	public setHistoryTracking(historyTracking: HistoryTracking): void	{
		this.historyTracking = historyTracking;
		this.keyModified.set("history_tracking", 1);

	}

	/**
	 * The method to get the associationDetails
	 * @returns An instance of AssociationDetails
	 */
	public getAssociationDetails(): AssociationDetails	{
		return this.associationDetails;

	}

	/**
	 * The method to set the value to associationDetails
	 * @param associationDetails An instance of AssociationDetails
	 */
	public setAssociationDetails(associationDetails: AssociationDetails): void	{
		this.associationDetails = associationDetails;
		this.keyModified.set("association_details", 1);

	}

	/**
	 * The method to get the additionalColumn
	 * @returns A String representing the additionalColumn
	 */
	public getAdditionalColumn(): string	{
		return this.additionalColumn;

	}

	/**
	 * The method to set the value to additionalColumn
	 * @param additionalColumn A String representing the additionalColumn
	 */
	public setAdditionalColumn(additionalColumn: string): void	{
		this.additionalColumn = additionalColumn;
		this.keyModified.set("additional_column", 1);

	}

	/**
	 * The method to get the fieldLabel
	 * @returns A String representing the fieldLabel
	 */
	public getFieldLabel(): string	{
		return this.fieldLabel;

	}

	/**
	 * The method to set the value to fieldLabel
	 * @param fieldLabel A String representing the fieldLabel
	 */
	public setFieldLabel(fieldLabel: string): void	{
		this.fieldLabel = fieldLabel;
		this.keyModified.set("field_label", 1);

	}

	/**
	 * The method to get the globalPicklist
	 * @returns An Object representing the globalPicklist
	 */
	public getGlobalPicklist(): any	{
		return this.globalPicklist;

	}

	/**
	 * The method to set the value to globalPicklist
	 * @param globalPicklist An Object representing the globalPicklist
	 */
	public setGlobalPicklist(globalPicklist: any): void	{
		this.globalPicklist = globalPicklist;
		this.keyModified.set("global_picklist", 1);

	}

	/**
	 * The method to get the updateexistingrecords
	 * @returns A Boolean representing the updateexistingrecords
	 */
	public getUpdateexistingrecords(): boolean	{
		return this.updateexistingrecords;

	}

	/**
	 * The method to set the value to updateexistingrecords
	 * @param updateexistingrecords A Boolean representing the updateexistingrecords
	 */
	public setUpdateexistingrecords(updateexistingrecords: boolean): void	{
		this.updateexistingrecords = updateexistingrecords;
		this.keyModified.set("_update_existing_records", 1);

	}

	/**
	 * The method to get the numberSeparator
	 * @returns A Boolean representing the numberSeparator
	 */
	public getNumberSeparator(): boolean	{
		return this.numberSeparator;

	}

	/**
	 * The method to set the value to numberSeparator
	 * @param numberSeparator A Boolean representing the numberSeparator
	 */
	public setNumberSeparator(numberSeparator: boolean): void	{
		this.numberSeparator = numberSeparator;
		this.keyModified.set("number_separator", 1);

	}

	/**
	 * The method to get the textarea
	 * @returns An instance of Textarea
	 */
	public getTextarea(): Textarea	{
		return this.textarea;

	}

	/**
	 * The method to set the value to textarea
	 * @param textarea An instance of Textarea
	 */
	public setTextarea(textarea: Textarea): void	{
		this.textarea = textarea;
		this.keyModified.set("textarea", 1);

	}

	/**
	 * The method to get the staticField
	 * @returns A Boolean representing the staticField
	 */
	public getStaticField(): boolean	{
		return this.staticField;

	}

	/**
	 * The method to set the value to staticField
	 * @param staticField A Boolean representing the staticField
	 */
	public setStaticField(staticField: boolean): void	{
		this.staticField = staticField;
		this.keyModified.set("static_field", 1);

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
	ModuleFields as MasterModel,
	ModuleFields as ModuleFields
}
