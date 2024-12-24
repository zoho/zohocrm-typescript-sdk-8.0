import {Criteria} from "./criteria";
import {Manager} from "./manager";
import {ReportingTo} from "./reporting_to";
import {MinifiedUser} from "../users/minified_user";
import {Choice} from "../../../../../../utils/util/choice";
import {Model} from "../../../../../../utils/util/model";

class Territories implements Model{

	private createdTime: Date;
	private modifiedTime: Date;
	private manager: Manager;
	private reportingTo: ReportingTo;
	private permissionType: Choice<string>;
	private modifiedBy: MinifiedUser;
	private description: string;
	private id: bigint;
	private createdBy: MinifiedUser;
	private accountRuleCriteria: Criteria;
	private dealRuleCriteria: Criteria;
	private leadRuleCriteria: Criteria;
	private name: string;
	private apiName: string;
	private keyModified: Map<string, number> = new Map<string, number>();
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
	 * The method to get the manager
	 * @returns An instance of Manager
	 */
	public getManager(): Manager	{
		return this.manager;

	}

	/**
	 * The method to set the value to manager
	 * @param manager An instance of Manager
	 */
	public setManager(manager: Manager): void	{
		this.manager = manager;
		this.keyModified.set("manager", 1);

	}

	/**
	 * The method to get the reportingTo
	 * @returns An instance of ReportingTo
	 */
	public getReportingTo(): ReportingTo	{
		return this.reportingTo;

	}

	/**
	 * The method to set the value to reportingTo
	 * @param reportingTo An instance of ReportingTo
	 */
	public setReportingTo(reportingTo: ReportingTo): void	{
		this.reportingTo = reportingTo;
		this.keyModified.set("reporting_to", 1);

	}

	/**
	 * The method to get the permissionType
	 * @returns An instance of Choice<string>
	 */
	public getPermissionType(): Choice<string>	{
		return this.permissionType;

	}

	/**
	 * The method to set the value to permissionType
	 * @param permissionType An instance of Choice<string>
	 */
	public setPermissionType(permissionType: Choice<string>): void	{
		this.permissionType = permissionType;
		this.keyModified.set("permission_type", 1);

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
	 * The method to get the createdBy
	 * @returns An instance of MinifiedUser
	 */
	public getCreatedBy(): MinifiedUser	{
		return this.createdBy;

	}

	/**
	 * The method to set the value to createdBy
	 * @param createdBy An instance of MinifiedUser
	 */
	public setCreatedBy(createdBy: MinifiedUser): void	{
		this.createdBy = createdBy;
		this.keyModified.set("created_by", 1);

	}

	/**
	 * The method to get the accountRuleCriteria
	 * @returns An instance of Criteria
	 */
	public getAccountRuleCriteria(): Criteria	{
		return this.accountRuleCriteria;

	}

	/**
	 * The method to set the value to accountRuleCriteria
	 * @param accountRuleCriteria An instance of Criteria
	 */
	public setAccountRuleCriteria(accountRuleCriteria: Criteria): void	{
		this.accountRuleCriteria = accountRuleCriteria;
		this.keyModified.set("account_rule_criteria", 1);

	}

	/**
	 * The method to get the dealRuleCriteria
	 * @returns An instance of Criteria
	 */
	public getDealRuleCriteria(): Criteria	{
		return this.dealRuleCriteria;

	}

	/**
	 * The method to set the value to dealRuleCriteria
	 * @param dealRuleCriteria An instance of Criteria
	 */
	public setDealRuleCriteria(dealRuleCriteria: Criteria): void	{
		this.dealRuleCriteria = dealRuleCriteria;
		this.keyModified.set("deal_rule_criteria", 1);

	}

	/**
	 * The method to get the leadRuleCriteria
	 * @returns An instance of Criteria
	 */
	public getLeadRuleCriteria(): Criteria	{
		return this.leadRuleCriteria;

	}

	/**
	 * The method to set the value to leadRuleCriteria
	 * @param leadRuleCriteria An instance of Criteria
	 */
	public setLeadRuleCriteria(leadRuleCriteria: Criteria): void	{
		this.leadRuleCriteria = leadRuleCriteria;
		this.keyModified.set("lead_rule_criteria", 1);

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
	Territories as MasterModel,
	Territories as Territories
}
