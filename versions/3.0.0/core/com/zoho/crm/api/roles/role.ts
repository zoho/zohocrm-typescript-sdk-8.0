import {ReportingTo} from "./reporting_to";
import {MinifiedUser} from "../users/minified_user";
import {Model} from "../../../../../../utils/util/model";

class Role implements Model{

	private displayLabel: string;
	private forecastManager: ReportingTo;
	private reportingTo: ReportingTo;
	private shareWithPeers: boolean;
	private description: string;
	private id: bigint;
	private name: string;
	private createdByS: MinifiedUser;
	private modifiedByS: MinifiedUser;
	private modifiedTimeS: Date;
	private createdTimeS: Date;
	private adminUser: boolean;
	private keyModified: Map<string, number> = new Map<string, number>();
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
	 * The method to get the forecastManager
	 * @returns An instance of ReportingTo
	 */
	public getForecastManager(): ReportingTo	{
		return this.forecastManager;

	}

	/**
	 * The method to set the value to forecastManager
	 * @param forecastManager An instance of ReportingTo
	 */
	public setForecastManager(forecastManager: ReportingTo): void	{
		this.forecastManager = forecastManager;
		this.keyModified.set("forecast_manager", 1);

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
	 * The method to get the shareWithPeers
	 * @returns A Boolean representing the shareWithPeers
	 */
	public getShareWithPeers(): boolean	{
		return this.shareWithPeers;

	}

	/**
	 * The method to set the value to shareWithPeers
	 * @param shareWithPeers A Boolean representing the shareWithPeers
	 */
	public setShareWithPeers(shareWithPeers: boolean): void	{
		this.shareWithPeers = shareWithPeers;
		this.keyModified.set("share_with_peers", 1);

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
	 * The method to get the createdByS
	 * @returns An instance of MinifiedUser
	 */
	public getCreatedByS(): MinifiedUser	{
		return this.createdByS;

	}

	/**
	 * The method to set the value to createdByS
	 * @param createdByS An instance of MinifiedUser
	 */
	public setCreatedByS(createdByS: MinifiedUser): void	{
		this.createdByS = createdByS;
		this.keyModified.set("created_by__s", 1);

	}

	/**
	 * The method to get the modifiedByS
	 * @returns An instance of MinifiedUser
	 */
	public getModifiedByS(): MinifiedUser	{
		return this.modifiedByS;

	}

	/**
	 * The method to set the value to modifiedByS
	 * @param modifiedByS An instance of MinifiedUser
	 */
	public setModifiedByS(modifiedByS: MinifiedUser): void	{
		this.modifiedByS = modifiedByS;
		this.keyModified.set("modified_by__s", 1);

	}

	/**
	 * The method to get the modifiedTimeS
	 * @returns An instance of Date
	 */
	public getModifiedTimeS(): Date	{
		return this.modifiedTimeS;

	}

	/**
	 * The method to set the value to modifiedTimeS
	 * @param modifiedTimeS An instance of Date
	 */
	public setModifiedTimeS(modifiedTimeS: Date): void	{
		this.modifiedTimeS = modifiedTimeS;
		this.keyModified.set("modified_time__s", 1);

	}

	/**
	 * The method to get the createdTimeS
	 * @returns An instance of Date
	 */
	public getCreatedTimeS(): Date	{
		return this.createdTimeS;

	}

	/**
	 * The method to set the value to createdTimeS
	 * @param createdTimeS An instance of Date
	 */
	public setCreatedTimeS(createdTimeS: Date): void	{
		this.createdTimeS = createdTimeS;
		this.keyModified.set("created_time__s", 1);

	}

	/**
	 * The method to get the adminUser
	 * @returns A Boolean representing the adminUser
	 */
	public getAdminUser(): boolean	{
		return this.adminUser;

	}

	/**
	 * The method to set the value to adminUser
	 * @param adminUser A Boolean representing the adminUser
	 */
	public setAdminUser(adminUser: boolean): void	{
		this.adminUser = adminUser;
		this.keyModified.set("admin_user", 1);

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
	Role as MasterModel,
	Role as Role
}
