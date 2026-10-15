import {Layouts} from "../layouts/layouts";
import {Comment} from "./comment";
import {Consent} from "./consent";
import {Participants} from "./participants";
import {PricingDetails} from "./pricing_details";
import {Record} from "./record";
import {RecurringActivity} from "./recurring_activity";
import {RemindAt} from "./remind_at";
import {Reminder} from "./reminder";
import {Tax} from "./tax";
import {Territory} from "./territory";
import {TimeRange} from "./time_range";
import {MinifiedUser} from "../users/minified_user";
import {Choice} from "../../../../../../utils/util/choice";

class Field<T>{

	private apiName: string;
	/**
	 * Creates an instance of Field with the given parameters
	 * @param apiName A String representing the apiName
	 */
	constructor(apiName: string){
		this.apiName = apiName;

	}

	/**
	 * The method to get the apiName
	 * @returns A String representing the apiName
	 */
	public getAPIName(): string	{
		return this.apiName;

	}

	public static Products = class {
		
		public static PRODUCT_CATEGORY: Field<Choice<string>> = new Field<Choice<string>>("Product_Category");
		
		public static QTY_IN_DEMAND: Field<number> = new Field<number>("Qty_in_Demand");
		
		public static OWNER: Field<MinifiedUser> = new Field<MinifiedUser>("Owner");
		
		public static DESCRIPTION: Field<string> = new Field<string>("Description");
		
		public static VENDOR_NAME: Field<Record> = new Field<Record>("Vendor_Name");
		
		public static SALES_START_DATE: Field<Date> = new Field<Date>("Sales_Start_Date");
		
		public static TAX: Field<Array<Tax>> = new Field<Array<Tax>>("Tax");
		
		public static PRODUCT_ACTIVE: Field<boolean> = new Field<boolean>("Product_Active");
		
		public static RECORD_IMAGE: Field<string> = new Field<string>("Record_Image");
		
		public static MODIFIED_BY: Field<MinifiedUser> = new Field<MinifiedUser>("Modified_By");
		
		public static PRODUCT_CODE: Field<string> = new Field<string>("Product_Code");
		
		public static MANUFACTURER: Field<Choice<string>> = new Field<Choice<string>>("Manufacturer");
		
		public static ID: Field<bigint> = new Field<bigint>("id");
		
		public static SUPPORT_EXPIRY_DATE: Field<Date> = new Field<Date>("Support_Expiry_Date");
		
		public static MODIFIED_TIME: Field<Date> = new Field<Date>("Modified_Time");
		
		public static CREATED_TIME: Field<Date> = new Field<Date>("Created_Time");
		
		public static COMMISSION_RATE: Field<number> = new Field<number>("Commission_Rate");
		
		public static PRODUCT_NAME: Field<string> = new Field<string>("Product_Name");
		
		public static HANDLER: Field<MinifiedUser> = new Field<MinifiedUser>("Handler");
		
		public static SUPPORT_START_DATE: Field<Date> = new Field<Date>("Support_Start_Date");
		
		public static RECORD_STATUS__S: Field<Choice<string>> = new Field<Choice<string>>("Record_Status__s");
		
		public static USAGE_UNIT: Field<Choice<string>> = new Field<Choice<string>>("Usage_Unit");
		
		public static QTY_ORDERED: Field<number> = new Field<number>("Qty_Ordered");
		
		public static LOCKED__S: Field<boolean> = new Field<boolean>("Locked__s");
		
		public static QTY_IN_STOCK: Field<number> = new Field<number>("Qty_in_Stock");
		
		public static CREATED_BY: Field<MinifiedUser> = new Field<MinifiedUser>("Created_By");
		
		public static TAG: Field<string> = new Field<string>("Tag");
		
		public static SALES_END_DATE: Field<Date> = new Field<Date>("Sales_End_Date");
		
		public static UNIT_PRICE: Field<number> = new Field<number>("Unit_Price");
		
		public static REORDER_LEVEL: Field<number> = new Field<number>("Reorder_Level");
		
		public static TAXABLE: Field<boolean> = new Field<boolean>("Taxable");
	}

	public static Consents = class {
		
		public static CONTACT_THROUGH_EMAIL: Field<boolean> = new Field<boolean>("Contact_Through_Email");
		
		public static OWNER: Field<MinifiedUser> = new Field<MinifiedUser>("Owner");
		
		public static MODIFIED_TIME: Field<Date> = new Field<Date>("Modified_Time");
		
		public static EMAIL: Field<string> = new Field<string>("Email");
		
		public static CREATED_TIME: Field<Date> = new Field<Date>("Created_Time");
		
		public static CONSENT_THROUGH: Field<Choice<string>> = new Field<Choice<string>>("Consent_Through");
		
		public static CONTACT_THROUGH_SURVEY: Field<boolean> = new Field<boolean>("Contact_Through_Survey");
		
		public static RECORD_STATUS__S: Field<Choice<string>> = new Field<Choice<string>>("Record_Status__s");
		
		public static DATA_PROCESSING_BASIS: Field<Choice<string>> = new Field<Choice<string>>("Data_Processing_Basis");
		
		public static CONTACT_THROUGH_PHONE: Field<boolean> = new Field<boolean>("Contact_Through_Phone");
		
		public static LAWFUL_REASON: Field<string> = new Field<string>("Lawful_Reason");
		
		public static MAIL_SENT_TIME: Field<Date> = new Field<Date>("Mail_Sent_Time");
		
		public static MODIFIED_BY: Field<MinifiedUser> = new Field<MinifiedUser>("Modified_By");
		
		public static CONSENT_DATE: Field<Date> = new Field<Date>("Consent_Date");
		
		public static ID: Field<bigint> = new Field<bigint>("id");
		
		public static CREATED_BY: Field<MinifiedUser> = new Field<MinifiedUser>("Created_By");
		
		public static CONSENT_REMARKS: Field<string> = new Field<string>("Consent_Remarks");
	}

	public static Tasks = class {
		
		public static STATUS: Field<Choice<string>> = new Field<Choice<string>>("Status");
		
		public static OWNER: Field<MinifiedUser> = new Field<MinifiedUser>("Owner");
		
		public static MODIFIED_TIME: Field<Date> = new Field<Date>("Modified_Time");
		
		public static DESCRIPTION: Field<string> = new Field<string>("Description");
		
		public static DUE_DATE: Field<Date> = new Field<Date>("Due_Date");
		
		public static PRIORITY: Field<Choice<string>> = new Field<Choice<string>>("Priority");
		
		public static CREATED_TIME: Field<Date> = new Field<Date>("Created_Time");
		
		public static CLOSED_TIME: Field<Date> = new Field<Date>("Closed_Time");
		
		public static RECORD_STATUS__S: Field<Choice<string>> = new Field<Choice<string>>("Record_Status__s");
		
		public static SUBJECT: Field<string> = new Field<string>("Subject");
		
		public static SEND_NOTIFICATION_EMAIL: Field<boolean> = new Field<boolean>("Send_Notification_Email");
		
		public static MODIFIED_BY: Field<MinifiedUser> = new Field<MinifiedUser>("Modified_By");
		
		public static RECURRING_ACTIVITY: Field<RecurringActivity> = new Field<RecurringActivity>("Recurring_Activity");
		
		public static WHAT_ID: Field<Record> = new Field<Record>("What_Id");
		
		public static LOCKED__S: Field<boolean> = new Field<boolean>("Locked__s");
		
		public static CREATED_BY: Field<MinifiedUser> = new Field<MinifiedUser>("Created_By");
		
		public static TAG: Field<string> = new Field<string>("Tag");
		
		public static ID: Field<bigint> = new Field<bigint>("id");
		
		public static REMIND_AT: Field<RemindAt> = new Field<RemindAt>("Remind_At");
		
		public static WHO_ID: Field<Record> = new Field<Record>("Who_Id");
	}

	public static Data_Subject_Requests = class {
		
		public static REQUEST_TYPE: Field<Choice<string>> = new Field<Choice<string>>("Request_Type");
		
		public static IS_CLOSED: Field<string> = new Field<string>("Is_Closed");
		
		public static PARENT_ID: Field<Record> = new Field<Record>("Parent_Id");
		
		public static REQUEST_SOURCE: Field<Choice<string>> = new Field<Choice<string>>("Request_Source");
		
		public static ID: Field<bigint> = new Field<bigint>("id");
		
		public static CLOSED_BY: Field<MinifiedUser> = new Field<MinifiedUser>("Closed_By");
		
		public static RECORD_STATUS__S: Field<Choice<string>> = new Field<Choice<string>>("Record_Status__s");
		
		public static REQUESTED_BY: Field<MinifiedUser> = new Field<MinifiedUser>("Requested_By");
		
		public static REQUESTED_DATE: Field<Date> = new Field<Date>("Requested_Date");
		
		public static CLOSED_DATE: Field<Date> = new Field<Date>("Closed_Date");
	}

	public static Vendors = class {
		
		public static OWNER: Field<MinifiedUser> = new Field<MinifiedUser>("Owner");
		
		public static EMAIL: Field<string> = new Field<string>("Email");
		
		public static CATEGORY: Field<string> = new Field<string>("Category");
		
		public static DESCRIPTION: Field<string> = new Field<string>("Description");
		
		public static VENDOR_NAME: Field<string> = new Field<string>("Vendor_Name");
		
		public static WEBSITE: Field<string> = new Field<string>("Website");
		
		public static RECORD_IMAGE: Field<string> = new Field<string>("Record_Image");
		
		public static MODIFIED_BY: Field<MinifiedUser> = new Field<MinifiedUser>("Modified_By");
		
		public static UNSUBSCRIBED_MODE: Field<Choice<string>> = new Field<Choice<string>>("Unsubscribed_Mode");
		
		public static PHONE: Field<string> = new Field<string>("Phone");
		
		public static STREET: Field<string> = new Field<string>("Street");
		
		public static ZIP_CODE: Field<string> = new Field<string>("Zip_Code");
		
		public static ID: Field<bigint> = new Field<bigint>("id");
		
		public static EMAIL_OPT_OUT: Field<boolean> = new Field<boolean>("Email_Opt_Out");
		
		public static MODIFIED_TIME: Field<Date> = new Field<Date>("Modified_Time");
		
		public static CREATED_TIME: Field<Date> = new Field<Date>("Created_Time");
		
		public static UNSUBSCRIBED_TIME: Field<Date> = new Field<Date>("Unsubscribed_Time");
		
		public static CITY: Field<string> = new Field<string>("City");
		
		public static RECORD_STATUS__S: Field<Choice<string>> = new Field<Choice<string>>("Record_Status__s");
		
		public static STATE: Field<string> = new Field<string>("State");
		
		public static GL_ACCOUNT: Field<Choice<string>> = new Field<Choice<string>>("GL_Account");
		
		public static LOCKED__S: Field<boolean> = new Field<boolean>("Locked__s");
		
		public static COUNTRY: Field<string> = new Field<string>("Country");
		
		public static CREATED_BY: Field<MinifiedUser> = new Field<MinifiedUser>("Created_By");
		
		public static TAG: Field<string> = new Field<string>("Tag");
	}

	public static Appointments__s = class {
		
		public static OWNER: Field<MinifiedUser> = new Field<MinifiedUser>("Owner");
		
		public static ADDRESS: Field<string> = new Field<string>("Address");
		
		public static APPOINTMENT_START_TIME: Field<Date> = new Field<Date>("Appointment_Start_Time");
		
		public static CANCELLATION_REASON: Field<Choice<string>> = new Field<Choice<string>>("Cancellation_Reason");
		
		public static APPOINTMENT_FOR: Field<Record> = new Field<Record>("Appointment_For");
		
		public static RESCHEDULED_TO: Field<Date> = new Field<Date>("Rescheduled_To");
		
		public static RESCHEDULE_REASON: Field<Choice<string>> = new Field<Choice<string>>("Reschedule_Reason");
		
		public static JOB_SHEET_NAME__S: Field<string> = new Field<string>("Job_Sheet_Name__s");
		
		public static ADDITIONAL_INFORMATION: Field<string> = new Field<string>("Additional_Information");
		
		public static JOB_SHEET_CREATED__S: Field<boolean> = new Field<boolean>("Job_Sheet_Created__s");
		
		public static CANCELLED_TIME: Field<Date> = new Field<Date>("Cancelled_Time");
		
		public static CANCELLATION_NOTE: Field<string> = new Field<string>("Cancellation_Note");
		
		public static MODIFIED_BY: Field<MinifiedUser> = new Field<MinifiedUser>("Modified_By");
		
		public static RESCHEDULE_COUNT: Field<number> = new Field<number>("Reschedule_Count");
		
		public static RESCHEDULED_BY: Field<MinifiedUser> = new Field<MinifiedUser>("Rescheduled_By");
		
		public static ID: Field<bigint> = new Field<bigint>("id");
		
		public static RESCHEDULED_TIME: Field<Date> = new Field<Date>("Rescheduled_Time");
		
		public static REMIND_AT: Field<Array<Reminder>> = new Field<Array<Reminder>>("Remind_At");
		
		public static APPOINTMENT_END_TIME: Field<Date> = new Field<Date>("Appointment_End_Time");
		
		public static STATUS: Field<Choice<string>> = new Field<Choice<string>>("Status");
		
		public static MODIFIED_TIME: Field<Date> = new Field<Date>("Modified_Time");
		
		public static SERVICE_NAME: Field<Record> = new Field<Record>("Service_Name");
		
		public static CREATED_TIME: Field<Date> = new Field<Date>("Created_Time");
		
		public static RESCHEDULED_FROM: Field<Date> = new Field<Date>("Rescheduled_From");
		
		public static CANCELLED_BY: Field<MinifiedUser> = new Field<MinifiedUser>("Cancelled_By");
		
		public static APPOINTMENT_NAME: Field<string> = new Field<string>("Appointment_Name");
		
		public static DURATION: Field<number> = new Field<number>("Duration");
		
		public static JOB_SHEET_SECTION__S: Field<Choice<string>> = new Field<Choice<string>>("Job_Sheet_Section__s");
		
		public static RECORD_STATUS__S: Field<Choice<string>> = new Field<Choice<string>>("Record_Status__s");
		
		public static JOB_SHEET_DESCRIPTION__S: Field<string> = new Field<string>("Job_Sheet_Description__s");
		
		public static CREATED_BY: Field<MinifiedUser> = new Field<MinifiedUser>("Created_By");
		
		public static TAG: Field<string> = new Field<string>("Tag");
		
		public static LOCATION: Field<Choice<string>> = new Field<Choice<string>>("Location");
		
		public static RESCHEDULE_NOTE: Field<string> = new Field<string>("Reschedule_Note");
	}

	public static Calls = class {
		
		public static CALL_DURATION: Field<string> = new Field<string>("Call_Duration");
		
		public static OWNER: Field<MinifiedUser> = new Field<MinifiedUser>("Owner");
		
		public static DESCRIPTION: Field<string> = new Field<string>("Description");
		
		public static CTI_ENTRY: Field<boolean> = new Field<boolean>("CTI_Entry");
		
		public static CALLER_ID: Field<string> = new Field<string>("Caller_ID");
		
		public static CALL_AGENDA: Field<string> = new Field<string>("Call_Agenda");
		
		public static MODIFIED_BY: Field<MinifiedUser> = new Field<MinifiedUser>("Modified_By");
		
		public static CALL_PURPOSE: Field<Choice<string>> = new Field<Choice<string>>("Call_Purpose");
		
		public static ID: Field<bigint> = new Field<bigint>("id");
		
		public static WHO_ID: Field<Record> = new Field<Record>("Who_Id");
		
		public static OUTGOING_CALL_STATUS: Field<Choice<string>> = new Field<Choice<string>>("Outgoing_Call_Status");
		
		public static MODIFIED_TIME: Field<Date> = new Field<Date>("Modified_Time");
		
		public static REMINDER: Field<Choice<string>> = new Field<Choice<string>>("Reminder");
		
		public static VOICE_RECORDING__S: Field<string> = new Field<string>("Voice_Recording__s");
		
		public static CREATED_TIME: Field<Date> = new Field<Date>("Created_Time");
		
		public static CALL_START_TIME: Field<Date> = new Field<Date>("Call_Start_Time");
		
		public static RECORD_STATUS__S: Field<Choice<string>> = new Field<Choice<string>>("Record_Status__s");
		
		public static SUBJECT: Field<string> = new Field<string>("Subject");
		
		public static CALL_TYPE: Field<Choice<string>> = new Field<Choice<string>>("Call_Type");
		
		public static CALL_RESULT: Field<string> = new Field<string>("Call_Result");
		
		public static SCHEDULED_IN_CRM: Field<Choice<string>> = new Field<Choice<string>>("Scheduled_In_CRM");
		
		public static WHAT_ID: Field<Record> = new Field<Record>("What_Id");
		
		public static CALL_DURATION_IN_SECONDS: Field<number> = new Field<number>("Call_Duration_in_seconds");
		
		public static CREATED_BY: Field<MinifiedUser> = new Field<MinifiedUser>("Created_By");
		
		public static TAG: Field<string> = new Field<string>("Tag");
		
		public static DIALLED_NUMBER: Field<string> = new Field<string>("Dialled_Number");
	}

	public static Leads = class {
		
		public static OWNER: Field<MinifiedUser> = new Field<MinifiedUser>("Owner");
		
		public static COMPANY: Field<string> = new Field<string>("Company");
		
		public static EMAIL: Field<string> = new Field<string>("Email");
		
		public static VISITOR_SCORE: Field<bigint> = new Field<bigint>("Visitor_Score");
		
		public static LAST_ACTIVITY_TIME: Field<Date> = new Field<Date>("Last_Activity_Time");
		
		public static INDUSTRY: Field<Choice<string>> = new Field<Choice<string>>("Industry");
		
		public static UNSUBSCRIBED_MODE: Field<Choice<string>> = new Field<Choice<string>>("Unsubscribed_Mode");
		
		public static EXCHANGE_RATE: Field<number> = new Field<number>("Exchange_Rate");
		
		public static CURRENCY: Field<Choice<string>> = new Field<Choice<string>>("Currency");
		
		public static STREET: Field<string> = new Field<string>("Street");
		
		public static ZIP_CODE: Field<string> = new Field<string>("Zip_Code");
		
		public static DATA_PROCESSING_BASIS_DETAILS: Field<Consent> = new Field<Consent>("Data_Processing_Basis_Details");
		
		public static ID: Field<bigint> = new Field<bigint>("id");
		
		public static DATA_SOURCE: Field<Choice<string>> = new Field<Choice<string>>("Data_Source");
		
		public static ENRICH_STATUS__S: Field<Choice<string>> = new Field<Choice<string>>("Enrich_Status__s");
		
		public static FIRST_VISITED_URL: Field<string> = new Field<string>("First_Visited_URL");
		
		public static DAYS_VISITED: Field<number> = new Field<number>("Days_Visited");
		
		public static CREATED_TIME: Field<Date> = new Field<Date>("Created_Time");
		
		public static CHANGE_LOG_TIME__S: Field<Date> = new Field<Date>("Change_Log_Time__s");
		
		public static CITY: Field<string> = new Field<string>("City");
		
		public static NO_OF_EMPLOYEES: Field<number> = new Field<number>("No_of_Employees");
		
		public static DATA_PROCESSING_BASIS: Field<Choice<string>> = new Field<Choice<string>>("Data_Processing_Basis");
		
		public static CONVERTED__S: Field<boolean> = new Field<boolean>("Converted__s");
		
		public static CONVERTED_DATE_TIME: Field<Date> = new Field<Date>("Converted_Date_Time");
		
		public static CONVERTED_ACCOUNT: Field<Record> = new Field<Record>("Converted_Account");
		
		public static STATE: Field<string> = new Field<string>("State");
		
		public static COUNTRY: Field<string> = new Field<string>("Country");
		
		public static LAST_VISITED_TIME: Field<Date> = new Field<Date>("Last_Visited_Time");
		
		public static CREATED_BY: Field<MinifiedUser> = new Field<MinifiedUser>("Created_By");
		
		public static ANNUAL_REVENUE: Field<number> = new Field<number>("Annual_Revenue");
		
		public static SECONDARY_EMAIL: Field<string> = new Field<string>("Secondary_Email");
		
		public static DESCRIPTION: Field<string> = new Field<string>("Description");
		
		public static NUMBER_OF_CHATS: Field<number> = new Field<number>("Number_Of_Chats");
		
		public static RATING: Field<Choice<string>> = new Field<Choice<string>>("Rating");
		
		public static WEBSITE: Field<string> = new Field<string>("Website");
		
		public static TWITTER: Field<string> = new Field<string>("Twitter");
		
		public static AVERAGE_TIME_SPENT_MINUTES: Field<number> = new Field<number>("Average_Time_Spent_Minutes");
		
		public static SALUTATION: Field<Choice<string>> = new Field<Choice<string>>("Salutation");
		
		public static FIRST_NAME: Field<string> = new Field<string>("First_Name");
		
		public static LEAD_STATUS: Field<Choice<string>> = new Field<Choice<string>>("Lead_Status");
		
		public static FULL_NAME: Field<string> = new Field<string>("Full_Name");
		
		public static RECORD_IMAGE: Field<string> = new Field<string>("Record_Image");
		
		public static MODIFIED_BY: Field<MinifiedUser> = new Field<MinifiedUser>("Modified_By");
		
		public static CONVERTED_DEAL: Field<Record> = new Field<Record>("Converted_Deal");
		
		public static LEAD_CONVERSION_TIME: Field<number> = new Field<number>("Lead_Conversion_Time");
		
		public static SKYPE_ID: Field<string> = new Field<string>("Skype_ID");
		
		public static PHONE: Field<string> = new Field<string>("Phone");
		
		public static EMAIL_OPT_OUT: Field<boolean> = new Field<boolean>("Email_Opt_Out");
		
		public static DESIGNATION: Field<string> = new Field<string>("Designation");
		
		public static MODIFIED_TIME: Field<Date> = new Field<Date>("Modified_Time");
		
		public static UNSUBSCRIBED_TIME: Field<Date> = new Field<Date>("Unsubscribed_Time");
		
		public static CONVERTED_CONTACT: Field<Record> = new Field<Record>("Converted_Contact");
		
		public static MOBILE: Field<string> = new Field<string>("Mobile");
		
		public static TERRITORIES: Field<Array<Territory>> = new Field<Array<Territory>>("Territories");
		
		public static RECORD_STATUS__S: Field<Choice<string>> = new Field<Choice<string>>("Record_Status__s");
		
		public static FIRST_VISITED_TIME: Field<Date> = new Field<Date>("First_Visited_Time");
		
		public static LAST_NAME: Field<string> = new Field<string>("Last_Name");
		
		public static LAYOUT: Field<Layouts> = new Field<Layouts>("Layout");
		
		public static REFERRER: Field<string> = new Field<string>("Referrer");
		
		public static LOCKED__S: Field<boolean> = new Field<boolean>("Locked__s");
		
		public static LEAD_SOURCE: Field<Choice<string>> = new Field<Choice<string>>("Lead_Source");
		
		public static TAG: Field<string> = new Field<string>("Tag");
		
		public static FAX: Field<string> = new Field<string>("Fax");
		
		public static LAST_ENRICHED_TIME__S: Field<Date> = new Field<Date>("Last_Enriched_Time__s");
	}

	public static Deals = class {
		
		public static OWNER: Field<MinifiedUser> = new Field<MinifiedUser>("Owner");
		
		public static DESCRIPTION: Field<string> = new Field<string>("Description");
		
		public static CAMPAIGN_SOURCE: Field<Record> = new Field<Record>("Campaign_Source");
		
		public static CLOSING_DATE: Field<Date> = new Field<Date>("Closing_Date");
		
		public static LAST_ACTIVITY_TIME: Field<Date> = new Field<Date>("Last_Activity_Time");
		
		public static REASON_FOR_LOSS__S: Field<Choice<string>> = new Field<Choice<string>>("Reason_For_Loss__s");
		
		public static MODIFIED_BY: Field<MinifiedUser> = new Field<MinifiedUser>("Modified_By");
		
		public static LEAD_CONVERSION_TIME: Field<number> = new Field<number>("Lead_Conversion_Time");
		
		public static DEAL_NAME: Field<string> = new Field<string>("Deal_Name");
		
		public static EXCHANGE_RATE: Field<number> = new Field<number>("Exchange_Rate");
		
		public static EXPECTED_REVENUE: Field<number> = new Field<number>("Expected_Revenue");
		
		public static CURRENCY: Field<Choice<string>> = new Field<Choice<string>>("Currency");
		
		public static OVERALL_SALES_DURATION: Field<number> = new Field<number>("Overall_Sales_Duration");
		
		public static STAGE: Field<Choice<string>> = new Field<Choice<string>>("Stage");
		
		public static ACCOUNT_NAME: Field<Record> = new Field<Record>("Account_Name");
		
		public static ID: Field<bigint> = new Field<bigint>("id");
		
		public static MODIFIED_TIME: Field<Date> = new Field<Date>("Modified_Time");
		
		public static TERRITORY: Field<Array<Territory>> = new Field<Array<Territory>>("Territory");
		
		public static CREATED_TIME: Field<Date> = new Field<Date>("Created_Time");
		
		public static AMOUNT: Field<number> = new Field<number>("Amount");
		
		public static PROBABILITY: Field<number> = new Field<number>("Probability");
		
		public static NEXT_STEP: Field<string> = new Field<string>("Next_Step");
		
		public static CHANGE_LOG_TIME__S: Field<Date> = new Field<Date>("Change_Log_Time__s");
		
		public static RECORD_STATUS__S: Field<Choice<string>> = new Field<Choice<string>>("Record_Status__s");
		
		public static CONTACT_NAME: Field<Record> = new Field<Record>("Contact_Name");
		
		public static PIPELINE: Field<Choice<string>> = new Field<Choice<string>>("Pipeline");
		
		public static SALES_CYCLE_DURATION: Field<number> = new Field<number>("Sales_Cycle_Duration");
		
		public static TYPE: Field<Choice<string>> = new Field<Choice<string>>("Type");
		
		public static LOCKED__S: Field<boolean> = new Field<boolean>("Locked__s");
		
		public static LEAD_SOURCE: Field<Choice<string>> = new Field<Choice<string>>("Lead_Source");
		
		public static CREATED_BY: Field<MinifiedUser> = new Field<MinifiedUser>("Created_By");
		
		public static TAG: Field<string> = new Field<string>("Tag");
	}

	public static Quotes = class {
		
		public static OWNER: Field<MinifiedUser> = new Field<MinifiedUser>("Owner");
		
		public static DESCRIPTION: Field<string> = new Field<string>("Description");
		
		public static DISCOUNT: Field<number> = new Field<number>("Discount");
		
		public static SHIPPING_STATE: Field<string> = new Field<string>("Shipping_State");
		
		public static TAX: Field<number> = new Field<number>("Tax");
		
		public static MODIFIED_BY: Field<MinifiedUser> = new Field<MinifiedUser>("Modified_By");
		
		public static DEAL_NAME: Field<Record> = new Field<Record>("Deal_Name");
		
		public static EXCHANGE_RATE: Field<number> = new Field<number>("Exchange_Rate");
		
		public static VALID_TILL: Field<Date> = new Field<Date>("Valid_Till");
		
		public static BILLING_COUNTRY: Field<string> = new Field<string>("Billing_Country");
		
		public static CURRENCY: Field<Choice<string>> = new Field<Choice<string>>("Currency");
		
		public static TEAM: Field<string> = new Field<string>("Team");
		
		public static ACCOUNT_NAME: Field<Record> = new Field<Record>("Account_Name");
		
		public static CARRIER: Field<Choice<string>> = new Field<Choice<string>>("Carrier");
		
		public static QUOTED_ITEMS: Field<Array<Record>> = new Field<Array<Record>>("Quoted_Items");
		
		public static ID: Field<bigint> = new Field<bigint>("id");
		
		public static QUOTE_STAGE: Field<Choice<string>> = new Field<Choice<string>>("Quote_Stage");
		
		public static GRAND_TOTAL: Field<number> = new Field<number>("Grand_Total");
		
		public static MODIFIED_TIME: Field<Date> = new Field<Date>("Modified_Time");
		
		public static ADJUSTMENT: Field<number> = new Field<number>("Adjustment");
		
		public static BILLING_STREET: Field<string> = new Field<string>("Billing_Street");
		
		public static CREATED_TIME: Field<Date> = new Field<Date>("Created_Time");
		
		public static TERMS_AND_CONDITIONS: Field<string> = new Field<string>("Terms_and_Conditions");
		
		public static SUB_TOTAL: Field<number> = new Field<number>("Sub_Total");
		
		public static BILLING_CODE: Field<string> = new Field<string>("Billing_Code");
		
		public static RECORD_STATUS__S: Field<Choice<string>> = new Field<Choice<string>>("Record_Status__s");
		
		public static SUBJECT: Field<string> = new Field<string>("Subject");
		
		public static CONTACT_NAME: Field<Record> = new Field<Record>("Contact_Name");
		
		public static SHIPPING_CITY: Field<string> = new Field<string>("Shipping_City");
		
		public static SHIPPING_COUNTRY: Field<string> = new Field<string>("Shipping_Country");
		
		public static SHIPPING_CODE: Field<string> = new Field<string>("Shipping_Code");
		
		public static BILLING_CITY: Field<string> = new Field<string>("Billing_City");
		
		public static QUOTE_NUMBER: Field<string> = new Field<string>("Quote_Number");
		
		public static LOCKED__S: Field<boolean> = new Field<boolean>("Locked__s");
		
		public static BILLING_STATE: Field<string> = new Field<string>("Billing_State");
		
		public static CREATED_BY: Field<MinifiedUser> = new Field<MinifiedUser>("Created_By");
		
		public static TAG: Field<string> = new Field<string>("Tag");
		
		public static SHIPPING_STREET: Field<string> = new Field<string>("Shipping_Street");
	}

	public static Invoices = class {
		
		public static OWNER: Field<MinifiedUser> = new Field<MinifiedUser>("Owner");
		
		public static DESCRIPTION: Field<string> = new Field<string>("Description");
		
		public static DISCOUNT: Field<number> = new Field<number>("Discount");
		
		public static SHIPPING_STATE: Field<string> = new Field<string>("Shipping_State");
		
		public static TAX: Field<number> = new Field<number>("Tax");
		
		public static INVOICE_DATE: Field<Date> = new Field<Date>("Invoice_Date");
		
		public static MODIFIED_BY: Field<MinifiedUser> = new Field<MinifiedUser>("Modified_By");
		
		public static INVOICED_ITEMS: Field<Array<Record>> = new Field<Array<Record>>("Invoiced_Items");
		
		public static EXCHANGE_RATE: Field<number> = new Field<number>("Exchange_Rate");
		
		public static BILLING_COUNTRY: Field<string> = new Field<string>("Billing_Country");
		
		public static CURRENCY: Field<Choice<string>> = new Field<Choice<string>>("Currency");
		
		public static ACCOUNT_NAME: Field<Record> = new Field<Record>("Account_Name");
		
		public static ID: Field<bigint> = new Field<bigint>("id");
		
		public static SALES_ORDER: Field<Record> = new Field<Record>("Sales_Order");
		
		public static STATUS: Field<Choice<string>> = new Field<Choice<string>>("Status");
		
		public static SALES_COMMISSION: Field<number> = new Field<number>("Sales_Commission");
		
		public static GRAND_TOTAL: Field<number> = new Field<number>("Grand_Total");
		
		public static MODIFIED_TIME: Field<Date> = new Field<Date>("Modified_Time");
		
		public static DUE_DATE: Field<Date> = new Field<Date>("Due_Date");
		
		public static ADJUSTMENT: Field<number> = new Field<number>("Adjustment");
		
		public static BILLING_STREET: Field<string> = new Field<string>("Billing_Street");
		
		public static CREATED_TIME: Field<Date> = new Field<Date>("Created_Time");
		
		public static TERMS_AND_CONDITIONS: Field<string> = new Field<string>("Terms_and_Conditions");
		
		public static SUB_TOTAL: Field<number> = new Field<number>("Sub_Total");
		
		public static INVOICE_NUMBER: Field<string> = new Field<string>("Invoice_Number");
		
		public static BILLING_CODE: Field<string> = new Field<string>("Billing_Code");
		
		public static RECORD_STATUS__S: Field<Choice<string>> = new Field<Choice<string>>("Record_Status__s");
		
		public static SUBJECT: Field<string> = new Field<string>("Subject");
		
		public static EXCISE_DUTY: Field<number> = new Field<number>("Excise_Duty");
		
		public static CONTACT_NAME: Field<Record> = new Field<Record>("Contact_Name");
		
		public static SHIPPING_CITY: Field<string> = new Field<string>("Shipping_City");
		
		public static SHIPPING_COUNTRY: Field<string> = new Field<string>("Shipping_Country");
		
		public static SHIPPING_CODE: Field<string> = new Field<string>("Shipping_Code");
		
		public static BILLING_CITY: Field<string> = new Field<string>("Billing_City");
		
		public static LOCKED__S: Field<boolean> = new Field<boolean>("Locked__s");
		
		public static PURCHASE_ORDER: Field<string> = new Field<string>("Purchase_Order");
		
		public static BILLING_STATE: Field<string> = new Field<string>("Billing_State");
		
		public static CREATED_BY: Field<MinifiedUser> = new Field<MinifiedUser>("Created_By");
		
		public static TAG: Field<string> = new Field<string>("Tag");
		
		public static SHIPPING_STREET: Field<string> = new Field<string>("Shipping_Street");
	}

	public static Campaigns = class {
		
		public static STATUS: Field<Choice<string>> = new Field<Choice<string>>("Status");
		
		public static OWNER: Field<MinifiedUser> = new Field<MinifiedUser>("Owner");
		
		public static MODIFIED_TIME: Field<Date> = new Field<Date>("Modified_Time");
		
		public static DESCRIPTION: Field<string> = new Field<string>("Description");
		
		public static CAMPAIGN_NAME: Field<string> = new Field<string>("Campaign_Name");
		
		public static CREATED_TIME: Field<Date> = new Field<Date>("Created_Time");
		
		public static END_DATE: Field<Date> = new Field<Date>("End_Date");
		
		public static RECORD_STATUS__S: Field<Choice<string>> = new Field<Choice<string>>("Record_Status__s");
		
		public static TYPE: Field<Choice<string>> = new Field<Choice<string>>("Type");
		
		public static MODIFIED_BY: Field<MinifiedUser> = new Field<MinifiedUser>("Modified_By");
		
		public static NUM_SENT: Field<bigint> = new Field<bigint>("Num_sent");
		
		public static EXCHANGE_RATE: Field<number> = new Field<number>("Exchange_Rate");
		
		public static EXPECTED_REVENUE: Field<number> = new Field<number>("Expected_Revenue");
		
		public static CURRENCY: Field<Choice<string>> = new Field<Choice<string>>("Currency");
		
		public static ACTUAL_COST: Field<number> = new Field<number>("Actual_Cost");
		
		public static EXPECTED_RESPONSE: Field<bigint> = new Field<bigint>("Expected_Response");
		
		public static CREATED_BY: Field<MinifiedUser> = new Field<MinifiedUser>("Created_By");
		
		public static TAG: Field<string> = new Field<string>("Tag");
		
		public static PARENT_CAMPAIGN: Field<Record> = new Field<Record>("Parent_Campaign");
		
		public static ID: Field<bigint> = new Field<bigint>("id");
		
		public static START_DATE: Field<Date> = new Field<Date>("Start_Date");
		
		public static BUDGETED_COST: Field<number> = new Field<number>("Budgeted_Cost");
	}

	public static Attachments = class {
		
		public static OWNER: Field<MinifiedUser> = new Field<MinifiedUser>("Owner");
		
		public static MODIFIED_BY: Field<MinifiedUser> = new Field<MinifiedUser>("Modified_By");
		
		public static MODIFIED_TIME: Field<Date> = new Field<Date>("Modified_Time");
		
		public static FILE_NAME: Field<string> = new Field<string>("File_Name");
		
		public static CREATED_TIME: Field<Date> = new Field<Date>("Created_Time");
		
		public static SIZE: Field<bigint> = new Field<bigint>("Size");
		
		public static PARENT_ID: Field<Record> = new Field<Record>("Parent_Id");
		
		public static CREATED_BY: Field<MinifiedUser> = new Field<MinifiedUser>("Created_By");
		
		public static ID: Field<bigint> = new Field<bigint>("id");
		
		public static RECORD_STATUS__S: Field<Choice<string>> = new Field<Choice<string>>("Record_Status__s");
	}

	public static Price_Books = class {
		
		public static OWNER: Field<MinifiedUser> = new Field<MinifiedUser>("Owner");
		
		public static MODIFIED_TIME: Field<Date> = new Field<Date>("Modified_Time");
		
		public static PRICING_DETAILS: Field<Array<PricingDetails>> = new Field<Array<PricingDetails>>("Pricing_Details");
		
		public static DESCRIPTION: Field<string> = new Field<string>("Description");
		
		public static CREATED_TIME: Field<Date> = new Field<Date>("Created_Time");
		
		public static RECORD_STATUS__S: Field<Choice<string>> = new Field<Choice<string>>("Record_Status__s");
		
		public static MODIFIED_BY: Field<MinifiedUser> = new Field<MinifiedUser>("Modified_By");
		
		public static ACTIVE: Field<boolean> = new Field<boolean>("Active");
		
		public static PRICING_MODEL: Field<Choice<string>> = new Field<Choice<string>>("Pricing_Model");
		
		public static LOCKED__S: Field<boolean> = new Field<boolean>("Locked__s");
		
		public static PRICE_BOOK_NAME: Field<string> = new Field<string>("Price_Book_Name");
		
		public static CREATED_BY: Field<MinifiedUser> = new Field<MinifiedUser>("Created_By");
		
		public static TAG: Field<string> = new Field<string>("Tag");
		
		public static ID: Field<bigint> = new Field<bigint>("id");
	}

	public static Sales_Orders = class {
		
		public static OWNER: Field<MinifiedUser> = new Field<MinifiedUser>("Owner");
		
		public static DESCRIPTION: Field<string> = new Field<string>("Description");
		
		public static DISCOUNT: Field<number> = new Field<number>("Discount");
		
		public static CUSTOMER_NO: Field<string> = new Field<string>("Customer_No");
		
		public static SHIPPING_STATE: Field<string> = new Field<string>("Shipping_State");
		
		public static TAX: Field<number> = new Field<number>("Tax");
		
		public static MODIFIED_BY: Field<MinifiedUser> = new Field<MinifiedUser>("Modified_By");
		
		public static DEAL_NAME: Field<Record> = new Field<Record>("Deal_Name");
		
		public static EXCHANGE_RATE: Field<number> = new Field<number>("Exchange_Rate");
		
		public static BILLING_COUNTRY: Field<string> = new Field<string>("Billing_Country");
		
		public static CURRENCY: Field<Choice<string>> = new Field<Choice<string>>("Currency");
		
		public static ACCOUNT_NAME: Field<Record> = new Field<Record>("Account_Name");
		
		public static CARRIER: Field<Choice<string>> = new Field<Choice<string>>("Carrier");
		
		public static ID: Field<bigint> = new Field<bigint>("id");
		
		public static ORDERED_ITEMS: Field<Array<Record>> = new Field<Array<Record>>("Ordered_Items");
		
		public static QUOTE_NAME: Field<Record> = new Field<Record>("Quote_Name");
		
		public static STATUS: Field<Choice<string>> = new Field<Choice<string>>("Status");
		
		public static SALES_COMMISSION: Field<number> = new Field<number>("Sales_Commission");
		
		public static MODIFIED_TIME: Field<Date> = new Field<Date>("Modified_Time");
		
		public static DUE_DATE: Field<Date> = new Field<Date>("Due_Date");
		
		public static ADJUSTMENT: Field<number> = new Field<number>("Adjustment");
		
		public static BILLING_STREET: Field<string> = new Field<string>("Billing_Street");
		
		public static CREATED_TIME: Field<Date> = new Field<Date>("Created_Time");
		
		public static TERMS_AND_CONDITIONS: Field<string> = new Field<string>("Terms_and_Conditions");
		
		public static SUB_TOTAL: Field<number> = new Field<number>("Sub_Total");
		
		public static BILLING_CODE: Field<string> = new Field<string>("Billing_Code");
		
		public static RECORD_STATUS__S: Field<Choice<string>> = new Field<Choice<string>>("Record_Status__s");
		
		public static SUBJECT: Field<string> = new Field<string>("Subject");
		
		public static CONTACT_NAME: Field<Record> = new Field<Record>("Contact_Name");
		
		public static EXCISE_DUTY: Field<number> = new Field<number>("Excise_Duty");
		
		public static SHIPPING_CITY: Field<string> = new Field<string>("Shipping_City");
		
		public static SHIPPING_COUNTRY: Field<string> = new Field<string>("Shipping_Country");
		
		public static SHIPPING_CODE: Field<string> = new Field<string>("Shipping_Code");
		
		public static BILLING_CITY: Field<string> = new Field<string>("Billing_City");
		
		public static SO_NUMBER: Field<string> = new Field<string>("SO_Number");
		
		public static LOCKED__S: Field<boolean> = new Field<boolean>("Locked__s");
		
		public static PURCHASE_ORDER: Field<string> = new Field<string>("Purchase_Order");
		
		public static BILLING_STATE: Field<string> = new Field<string>("Billing_State");
		
		public static CREATED_BY: Field<MinifiedUser> = new Field<MinifiedUser>("Created_By");
		
		public static TAG: Field<string> = new Field<string>("Tag");
		
		public static PENDING: Field<string> = new Field<string>("Pending");
		
		public static SHIPPING_STREET: Field<string> = new Field<string>("Shipping_Street");
	}

	public static Services__s = class {
		
		public static JOB_SHEET_REQUIRED: Field<Choice<string>> = new Field<Choice<string>>("Job_Sheet_Required");
		
		public static OWNER: Field<MinifiedUser> = new Field<MinifiedUser>("Owner");
		
		public static DESCRIPTION: Field<string> = new Field<string>("Description");
		
		public static AVAILABLE_DAYS: Field<Array<Choice<string>>> = new Field<Array<Choice<string>>>("Available_Days");
		
		public static TAX: Field<Array<Choice<string>>> = new Field<Array<Choice<string>>>("Tax");
		
		public static UNAVAILABLE_FROM: Field<Date> = new Field<Date>("Unavailable_From");
		
		public static RECORD_IMAGE: Field<string> = new Field<string>("Record_Image");
		
		public static MODIFIED_BY: Field<MinifiedUser> = new Field<MinifiedUser>("Modified_By");
		
		public static ID: Field<bigint> = new Field<bigint>("id");
		
		public static AVAILABLE_DATES: Field<Date> = new Field<Date>("Available_Dates");
		
		public static STATUS: Field<Choice<string>> = new Field<Choice<string>>("Status");
		
		public static MODIFIED_TIME: Field<Date> = new Field<Date>("Modified_Time");
		
		public static AVAILABLE_TIMINGS: Field<Array<TimeRange>> = new Field<Array<TimeRange>>("Available_Timings");
		
		public static SERVICE_NAME: Field<string> = new Field<string>("Service_Name");
		
		public static AVAILABLE_FROM: Field<Date> = new Field<Date>("Available_From");
		
		public static CREATED_TIME: Field<Date> = new Field<Date>("Created_Time");
		
		public static AVAILABLE_TILL: Field<Date> = new Field<Date>("Available_Till");
		
		public static DURATION: Field<number> = new Field<number>("Duration");
		
		public static JOB_SHEET_SECTION__S: Field<Choice<string>> = new Field<Choice<string>>("Job_Sheet_Section__s");
		
		public static RECORD_STATUS__S: Field<Choice<string>> = new Field<Choice<string>>("Record_Status__s");
		
		public static PRICE: Field<number> = new Field<number>("Price");
		
		public static CREATED_BY: Field<MinifiedUser> = new Field<MinifiedUser>("Created_By");
		
		public static TAG: Field<string> = new Field<string>("Tag");
		
		public static AVAILABILITY_TYPE: Field<Choice<string>> = new Field<Choice<string>>("Availability_Type");
		
		public static MEMBERS: Field<Array<Record>> = new Field<Array<Record>>("Members");
		
		public static LOCATION: Field<Choice<string>> = new Field<Choice<string>>("Location");
		
		public static UNAVAILABLE_TILL: Field<Date> = new Field<Date>("Unavailable_Till");
	}

	public static Contacts = class {
		
		public static OWNER: Field<MinifiedUser> = new Field<MinifiedUser>("Owner");
		
		public static EMAIL: Field<string> = new Field<string>("Email");
		
		public static VISITOR_SCORE: Field<bigint> = new Field<bigint>("Visitor_Score");
		
		public static OTHER_PHONE: Field<string> = new Field<string>("Other_Phone");
		
		public static MAILING_STATE: Field<string> = new Field<string>("Mailing_State");
		
		public static OTHER_STATE: Field<string> = new Field<string>("Other_State");
		
		public static OTHER_COUNTRY: Field<string> = new Field<string>("Other_Country");
		
		public static LAST_ACTIVITY_TIME: Field<Date> = new Field<Date>("Last_Activity_Time");
		
		public static DEPARTMENT: Field<string> = new Field<string>("Department");
		
		public static UNSUBSCRIBED_MODE: Field<Choice<string>> = new Field<Choice<string>>("Unsubscribed_Mode");
		
		public static ASSISTANT: Field<string> = new Field<string>("Assistant");
		
		public static MAILING_COUNTRY: Field<string> = new Field<string>("Mailing_Country");
		
		public static DATA_PROCESSING_BASIS_DETAILS: Field<Consent> = new Field<Consent>("Data_Processing_Basis_Details");
		
		public static ID: Field<bigint> = new Field<bigint>("id");
		
		public static DATA_SOURCE: Field<Choice<string>> = new Field<Choice<string>>("Data_Source");
		
		public static REPORTING_TO: Field<Record> = new Field<Record>("Reporting_To");
		
		public static ENRICH_STATUS__S: Field<Choice<string>> = new Field<Choice<string>>("Enrich_Status__s");
		
		public static FIRST_VISITED_URL: Field<string> = new Field<string>("First_Visited_URL");
		
		public static DAYS_VISITED: Field<number> = new Field<number>("Days_Visited");
		
		public static OTHER_CITY: Field<string> = new Field<string>("Other_City");
		
		public static CREATED_TIME: Field<Date> = new Field<Date>("Created_Time");
		
		public static CHANGE_LOG_TIME__S: Field<Date> = new Field<Date>("Change_Log_Time__s");
		
		public static DATA_PROCESSING_BASIS: Field<Choice<string>> = new Field<Choice<string>>("Data_Processing_Basis");
		
		public static HOME_PHONE: Field<string> = new Field<string>("Home_Phone");
		
		public static LAST_VISITED_TIME: Field<Date> = new Field<Date>("Last_Visited_Time");
		
		public static CREATED_BY: Field<MinifiedUser> = new Field<MinifiedUser>("Created_By");
		
		public static SECONDARY_EMAIL: Field<string> = new Field<string>("Secondary_Email");
		
		public static DESCRIPTION: Field<string> = new Field<string>("Description");
		
		public static VENDOR_NAME: Field<Record> = new Field<Record>("Vendor_Name");
		
		public static MAILING_ZIP: Field<string> = new Field<string>("Mailing_Zip");
		
		public static REPORTS_TO: Field<string> = new Field<string>("Reports_To");
		
		public static NUMBER_OF_CHATS: Field<number> = new Field<number>("Number_Of_Chats");
		
		public static OTHER_ZIP: Field<string> = new Field<string>("Other_Zip");
		
		public static TWITTER: Field<string> = new Field<string>("Twitter");
		
		public static MAILING_STREET: Field<string> = new Field<string>("Mailing_Street");
		
		public static AVERAGE_TIME_SPENT_MINUTES: Field<number> = new Field<number>("Average_Time_Spent_Minutes");
		
		public static SALUTATION: Field<Choice<string>> = new Field<Choice<string>>("Salutation");
		
		public static FIRST_NAME: Field<string> = new Field<string>("First_Name");
		
		public static ASST_PHONE: Field<string> = new Field<string>("Asst_Phone");
		
		public static FULL_NAME: Field<string> = new Field<string>("Full_Name");
		
		public static RECORD_IMAGE: Field<string> = new Field<string>("Record_Image");
		
		public static MODIFIED_BY: Field<MinifiedUser> = new Field<MinifiedUser>("Modified_By");
		
		public static SKYPE_ID: Field<string> = new Field<string>("Skype_ID");
		
		public static PHONE: Field<string> = new Field<string>("Phone");
		
		public static ACCOUNT_NAME: Field<Record> = new Field<Record>("Account_Name");
		
		public static EMAIL_OPT_OUT: Field<boolean> = new Field<boolean>("Email_Opt_Out");
		
		public static MODIFIED_TIME: Field<Date> = new Field<Date>("Modified_Time");
		
		public static DATE_OF_BIRTH: Field<Date> = new Field<Date>("Date_of_Birth");
		
		public static MAILING_CITY: Field<string> = new Field<string>("Mailing_City");
		
		public static UNSUBSCRIBED_TIME: Field<Date> = new Field<Date>("Unsubscribed_Time");
		
		public static TITLE: Field<string> = new Field<string>("Title");
		
		public static OTHER_STREET: Field<string> = new Field<string>("Other_Street");
		
		public static MOBILE: Field<string> = new Field<string>("Mobile");
		
		public static TERRITORIES: Field<Array<Territory>> = new Field<Array<Territory>>("Territories");
		
		public static RECORD_STATUS__S: Field<Choice<string>> = new Field<Choice<string>>("Record_Status__s");
		
		public static FIRST_VISITED_TIME: Field<Date> = new Field<Date>("First_Visited_Time");
		
		public static LAST_NAME: Field<string> = new Field<string>("Last_Name");
		
		public static REFERRER: Field<string> = new Field<string>("Referrer");
		
		public static LOCKED__S: Field<boolean> = new Field<boolean>("Locked__s");
		
		public static LEAD_SOURCE: Field<Choice<string>> = new Field<Choice<string>>("Lead_Source");
		
		public static TAG: Field<string> = new Field<string>("Tag");
		
		public static FAX: Field<string> = new Field<string>("Fax");
		
		public static LAST_ENRICHED_TIME__S: Field<Date> = new Field<Date>("Last_Enriched_Time__s");
	}

	public static Solutions = class {
		
		public static STATUS: Field<Choice<string>> = new Field<Choice<string>>("Status");
		
		public static OWNER: Field<MinifiedUser> = new Field<MinifiedUser>("Owner");
		
		public static MODIFIED_TIME: Field<Date> = new Field<Date>("Modified_Time");
		
		public static CREATED_TIME: Field<Date> = new Field<Date>("Created_Time");
		
		public static COMMENTS: Field<Array<Comment>> = new Field<Array<Comment>>("Comments");
		
		public static NO_OF_COMMENTS: Field<number> = new Field<number>("No_of_comments");
		
		public static PRODUCT_NAME: Field<Record> = new Field<Record>("Product_Name");
		
		public static ADD_COMMENT: Field<string> = new Field<string>("Add_Comment");
		
		public static RECORD_STATUS__S: Field<Choice<string>> = new Field<Choice<string>>("Record_Status__s");
		
		public static SOLUTION_NUMBER: Field<string> = new Field<string>("Solution_Number");
		
		public static ANSWER: Field<string> = new Field<string>("Answer");
		
		public static MODIFIED_BY: Field<MinifiedUser> = new Field<MinifiedUser>("Modified_By");
		
		public static SOLUTION_TITLE: Field<string> = new Field<string>("Solution_Title");
		
		public static LOCKED__S: Field<boolean> = new Field<boolean>("Locked__s");
		
		public static PUBLISHED: Field<boolean> = new Field<boolean>("Published");
		
		public static QUESTION: Field<string> = new Field<string>("Question");
		
		public static CREATED_BY: Field<MinifiedUser> = new Field<MinifiedUser>("Created_By");
		
		public static TAG: Field<string> = new Field<string>("Tag");
		
		public static ID: Field<bigint> = new Field<bigint>("id");
	}

	public static Events = class {
		
		public static ALL_DAY: Field<boolean> = new Field<boolean>("All_day");
		
		public static OWNER: Field<MinifiedUser> = new Field<MinifiedUser>("Owner");
		
		public static CHECK_IN_STATE: Field<string> = new Field<string>("Check_In_State");
		
		public static CHECK_IN_ADDRESS: Field<string> = new Field<string>("Check_In_Address");
		
		public static DESCRIPTION: Field<string> = new Field<string>("Description");
		
		public static REMIND_PARTICIPANTS: Field<Array<Reminder>> = new Field<Array<Reminder>>("Remind_Participants");
		
		public static START_DATETIME: Field<Date> = new Field<Date>("Start_DateTime");
		
		public static LATITUDE: Field<number> = new Field<number>("Latitude");
		
		public static PARTICIPANTS: Field<Array<Participants>> = new Field<Array<Participants>>("Participants");
		
		public static EVENT_TITLE: Field<string> = new Field<string>("Event_Title");
		
		public static CHECK_IN_BY: Field<MinifiedUser> = new Field<MinifiedUser>("Check_In_By");
		
		public static END_DATETIME: Field<Date> = new Field<Date>("End_DateTime");
		
		public static MODIFIED_BY: Field<MinifiedUser> = new Field<MinifiedUser>("Modified_By");
		
		public static CHECK_IN_CITY: Field<string> = new Field<string>("Check_In_City");
		
		public static ID: Field<bigint> = new Field<bigint>("id");
		
		public static CHECK_IN_COMMENT: Field<string> = new Field<string>("Check_In_Comment");
		
		public static REMIND_AT: Field<Array<Reminder>> = new Field<Array<Reminder>>("Remind_At");
		
		public static WHO_ID: Field<Record> = new Field<Record>("Who_Id");
		
		public static CHECK_IN_STATUS: Field<string> = new Field<string>("Check_In_Status");
		
		public static CHECK_IN_COUNTRY: Field<string> = new Field<string>("Check_In_Country");
		
		public static MODIFIED_TIME: Field<Date> = new Field<Date>("Modified_Time");
		
		public static VENUE: Field<string> = new Field<string>("Venue");
		
		public static ZIP_CODE: Field<string> = new Field<string>("ZIP_Code");
		
		public static CREATED_TIME: Field<Date> = new Field<Date>("Created_Time");
		
		public static LONGITUDE: Field<number> = new Field<number>("Longitude");
		
		public static RECORD_STATUS__S: Field<Choice<string>> = new Field<Choice<string>>("Record_Status__s");
		
		public static CHECK_IN_TIME: Field<Date> = new Field<Date>("Check_In_Time");
		
		public static RECURRING_ACTIVITY: Field<RecurringActivity> = new Field<RecurringActivity>("Recurring_Activity");
		
		public static WHAT_ID: Field<Record> = new Field<Record>("What_Id");
		
		public static CHECK_IN_SUB_LOCALITY: Field<string> = new Field<string>("Check_In_Sub_Locality");
		
		public static CREATED_BY: Field<MinifiedUser> = new Field<MinifiedUser>("Created_By");
		
		public static TAG: Field<string> = new Field<string>("Tag");
	}

	public static Purchase_Orders = class {
		
		public static OWNER: Field<MinifiedUser> = new Field<MinifiedUser>("Owner");
		
		public static DESCRIPTION: Field<string> = new Field<string>("Description");
		
		public static DISCOUNT: Field<number> = new Field<number>("Discount");
		
		public static VENDOR_NAME: Field<Record> = new Field<Record>("Vendor_Name");
		
		public static SHIPPING_STATE: Field<string> = new Field<string>("Shipping_State");
		
		public static TAX: Field<number> = new Field<number>("Tax");
		
		public static PO_DATE: Field<Date> = new Field<Date>("PO_Date");
		
		public static MODIFIED_BY: Field<MinifiedUser> = new Field<MinifiedUser>("Modified_By");
		
		public static EXCHANGE_RATE: Field<number> = new Field<number>("Exchange_Rate");
		
		public static BILLING_COUNTRY: Field<string> = new Field<string>("Billing_Country");
		
		public static CURRENCY: Field<Choice<string>> = new Field<Choice<string>>("Currency");
		
		public static PURCHASE_ITEMS: Field<Array<Record>> = new Field<Array<Record>>("Purchase_Items");
		
		public static CARRIER: Field<Choice<string>> = new Field<Choice<string>>("Carrier");
		
		public static ID: Field<bigint> = new Field<bigint>("id");
		
		public static STATUS: Field<Choice<string>> = new Field<Choice<string>>("Status");
		
		public static SALES_COMMISSION: Field<number> = new Field<number>("Sales_Commission");
		
		public static GRAND_TOTAL: Field<number> = new Field<number>("Grand_Total");
		
		public static MODIFIED_TIME: Field<Date> = new Field<Date>("Modified_Time");
		
		public static PO_NUMBER: Field<string> = new Field<string>("PO_Number");
		
		public static DUE_DATE: Field<Date> = new Field<Date>("Due_Date");
		
		public static ADJUSTMENT: Field<number> = new Field<number>("Adjustment");
		
		public static BILLING_STREET: Field<string> = new Field<string>("Billing_Street");
		
		public static CREATED_TIME: Field<Date> = new Field<Date>("Created_Time");
		
		public static TERMS_AND_CONDITIONS: Field<string> = new Field<string>("Terms_and_Conditions");
		
		public static SUB_TOTAL: Field<number> = new Field<number>("Sub_Total");
		
		public static BILLING_CODE: Field<string> = new Field<string>("Billing_Code");
		
		public static RECORD_STATUS__S: Field<Choice<string>> = new Field<Choice<string>>("Record_Status__s");
		
		public static SUBJECT: Field<string> = new Field<string>("Subject");
		
		public static TRACKING_NUMBER: Field<string> = new Field<string>("Tracking_Number");
		
		public static CONTACT_NAME: Field<Record> = new Field<Record>("Contact_Name");
		
		public static EXCISE_DUTY: Field<number> = new Field<number>("Excise_Duty");
		
		public static SHIPPING_CITY: Field<string> = new Field<string>("Shipping_City");
		
		public static SHIPPING_COUNTRY: Field<string> = new Field<string>("Shipping_Country");
		
		public static SHIPPING_CODE: Field<string> = new Field<string>("Shipping_Code");
		
		public static BILLING_CITY: Field<string> = new Field<string>("Billing_City");
		
		public static REQUISITION_NO: Field<string> = new Field<string>("Requisition_No");
		
		public static LOCKED__S: Field<boolean> = new Field<boolean>("Locked__s");
		
		public static BILLING_STATE: Field<string> = new Field<string>("Billing_State");
		
		public static CREATED_BY: Field<MinifiedUser> = new Field<MinifiedUser>("Created_By");
		
		public static TAG: Field<string> = new Field<string>("Tag");
		
		public static SHIPPING_STREET: Field<string> = new Field<string>("Shipping_Street");
	}

	public static Accounts = class {
		
		public static OWNER: Field<MinifiedUser> = new Field<MinifiedUser>("Owner");
		
		public static OWNERSHIP: Field<Choice<string>> = new Field<Choice<string>>("Ownership");
		
		public static DESCRIPTION: Field<string> = new Field<string>("Description");
		
		public static ACCOUNT_TYPE: Field<Choice<string>> = new Field<Choice<string>>("Account_Type");
		
		public static RATING: Field<Choice<string>> = new Field<Choice<string>>("Rating");
		
		public static SIC_CODE: Field<number> = new Field<number>("SIC_Code");
		
		public static SHIPPING_STATE: Field<string> = new Field<string>("Shipping_State");
		
		public static WEBSITE: Field<string> = new Field<string>("Website");
		
		public static EMPLOYEES: Field<number> = new Field<number>("Employees");
		
		public static LAST_ACTIVITY_TIME: Field<Date> = new Field<Date>("Last_Activity_Time");
		
		public static INDUSTRY: Field<Choice<string>> = new Field<Choice<string>>("Industry");
		
		public static RECORD_IMAGE: Field<string> = new Field<string>("Record_Image");
		
		public static MODIFIED_BY: Field<MinifiedUser> = new Field<MinifiedUser>("Modified_By");
		
		public static ACCOUNT_SITE: Field<string> = new Field<string>("Account_Site");
		
		public static EXCHANGE_RATE: Field<number> = new Field<number>("Exchange_Rate");
		
		public static PHONE: Field<string> = new Field<string>("Phone");
		
		public static BILLING_COUNTRY: Field<string> = new Field<string>("Billing_Country");
		
		public static CURRENCY: Field<Choice<string>> = new Field<Choice<string>>("Currency");
		
		public static ACCOUNT_NAME: Field<string> = new Field<string>("Account_Name");
		
		public static ID: Field<bigint> = new Field<bigint>("id");
		
		public static ACCOUNT_NUMBER: Field<bigint> = new Field<bigint>("Account_Number");
		
		public static TICKER_SYMBOL: Field<string> = new Field<string>("Ticker_Symbol");
		
		public static MODIFIED_TIME: Field<Date> = new Field<Date>("Modified_Time");
		
		public static BILLING_STREET: Field<string> = new Field<string>("Billing_Street");
		
		public static ENRICH_STATUS__S: Field<Choice<string>> = new Field<Choice<string>>("Enrich_Status__s");
		
		public static CREATED_TIME: Field<Date> = new Field<Date>("Created_Time");
		
		public static CHANGE_LOG_TIME__S: Field<Date> = new Field<Date>("Change_Log_Time__s");
		
		public static BILLING_CODE: Field<string> = new Field<string>("Billing_Code");
		
		public static TERRITORIES: Field<Array<Territory>> = new Field<Array<Territory>>("Territories");
		
		public static RECORD_STATUS__S: Field<Choice<string>> = new Field<Choice<string>>("Record_Status__s");
		
		public static PARENT_ACCOUNT: Field<Record> = new Field<Record>("Parent_Account");
		
		public static SHIPPING_CITY: Field<string> = new Field<string>("Shipping_City");
		
		public static SHIPPING_COUNTRY: Field<string> = new Field<string>("Shipping_Country");
		
		public static SHIPPING_CODE: Field<string> = new Field<string>("Shipping_Code");
		
		public static BILLING_CITY: Field<string> = new Field<string>("Billing_City");
		
		public static LOCKED__S: Field<boolean> = new Field<boolean>("Locked__s");
		
		public static BILLING_STATE: Field<string> = new Field<string>("Billing_State");
		
		public static CREATED_BY: Field<MinifiedUser> = new Field<MinifiedUser>("Created_By");
		
		public static TAG: Field<string> = new Field<string>("Tag");
		
		public static FAX: Field<string> = new Field<string>("Fax");
		
		public static ANNUAL_REVENUE: Field<number> = new Field<number>("Annual_Revenue");
		
		public static LAST_ENRICHED_TIME__S: Field<Date> = new Field<Date>("Last_Enriched_Time__s");
		
		public static SHIPPING_STREET: Field<string> = new Field<string>("Shipping_Street");
	}

	public static Cases = class {
		
		public static OWNER: Field<MinifiedUser> = new Field<MinifiedUser>("Owner");
		
		public static EMAIL: Field<string> = new Field<string>("Email");
		
		public static DESCRIPTION: Field<string> = new Field<string>("Description");
		
		public static INTERNAL_COMMENTS: Field<string> = new Field<string>("Internal_Comments");
		
		public static NO_OF_COMMENTS: Field<number> = new Field<number>("No_of_comments");
		
		public static REPORTED_BY: Field<string> = new Field<string>("Reported_By");
		
		public static CASE_NUMBER: Field<string> = new Field<string>("Case_Number");
		
		public static MODIFIED_BY: Field<MinifiedUser> = new Field<MinifiedUser>("Modified_By");
		
		public static DEAL_NAME: Field<Record> = new Field<Record>("Deal_Name");
		
		public static PHONE: Field<string> = new Field<string>("Phone");
		
		public static ACCOUNT_NAME: Field<Record> = new Field<Record>("Account_Name");
		
		public static ID: Field<bigint> = new Field<bigint>("id");
		
		public static SOLUTION: Field<string> = new Field<string>("Solution");
		
		public static STATUS: Field<Choice<string>> = new Field<Choice<string>>("Status");
		
		public static MODIFIED_TIME: Field<Date> = new Field<Date>("Modified_Time");
		
		public static PRIORITY: Field<Choice<string>> = new Field<Choice<string>>("Priority");
		
		public static CREATED_TIME: Field<Date> = new Field<Date>("Created_Time");
		
		public static COMMENTS: Field<Array<Comment>> = new Field<Array<Comment>>("Comments");
		
		public static PRODUCT_NAME: Field<Record> = new Field<Record>("Product_Name");
		
		public static ADD_COMMENT: Field<string> = new Field<string>("Add_Comment");
		
		public static CASE_ORIGIN: Field<Choice<string>> = new Field<Choice<string>>("Case_Origin");
		
		public static RECORD_STATUS__S: Field<Choice<string>> = new Field<Choice<string>>("Record_Status__s");
		
		public static CASE_REASON: Field<Choice<string>> = new Field<Choice<string>>("Case_Reason");
		
		public static SUBJECT: Field<string> = new Field<string>("Subject");
		
		public static TYPE: Field<Choice<string>> = new Field<Choice<string>>("Type");
		
		public static LOCKED__S: Field<boolean> = new Field<boolean>("Locked__s");
		
		public static CREATED_BY: Field<MinifiedUser> = new Field<MinifiedUser>("Created_By");
		
		public static TAG: Field<string> = new Field<string>("Tag");
		
		public static RELATED_TO: Field<Record> = new Field<Record>("Related_To");
	}

	public static Notes = class {
		
		public static OWNER: Field<MinifiedUser> = new Field<MinifiedUser>("Owner");
		
		public static MODIFIED_BY: Field<MinifiedUser> = new Field<MinifiedUser>("Modified_By");
		
		public static MODIFIED_TIME: Field<Date> = new Field<Date>("Modified_Time");
		
		public static CREATED_TIME: Field<Date> = new Field<Date>("Created_Time");
		
		public static PARENT_ID: Field<Record> = new Field<Record>("Parent_Id");
		
		public static ASSOCIATED_ID__S: Field<bigint> = new Field<bigint>("Associated_Id__s");
		
		public static CREATED_BY: Field<MinifiedUser> = new Field<MinifiedUser>("Created_By");
		
		public static ID: Field<bigint> = new Field<bigint>("id");
		
		public static NOTE_TITLE: Field<string> = new Field<string>("Note_Title");
		
		public static NOTE_CONTENT: Field<string> = new Field<string>("Note_Content");
		
		public static RECORD_STATUS__S: Field<Choice<string>> = new Field<Choice<string>>("Record_Status__s");
	}	}
export {
	Field as MasterModel,
	Field as Field
}
