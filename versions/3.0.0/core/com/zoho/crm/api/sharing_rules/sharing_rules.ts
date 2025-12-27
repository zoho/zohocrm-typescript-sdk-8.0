import {Criteria} from "./criteria";
import {Module} from "./module";
import {Shared} from "./shared";
import {Choice} from "../../../../../../utils/util/choice";
import {Model} from "../../../../../../utils/util/model";

class SharingRules implements Model{

	private id: bigint;
	private permissionType: Choice<string>;
	private superiorsAllowed: boolean;
	private name: string;
	private type: Choice<string>;
	private sharedFrom: Shared;
	private sharedTo: Shared;
	private criteria: Criteria;
	private module: Module;
	private status: Choice<string>;
	private matchLimitExceeded: boolean;
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
	 * The method to get the superiorsAllowed
	 * @returns A Boolean representing the superiorsAllowed
	 */
	public getSuperiorsAllowed(): boolean	{
		return this.superiorsAllowed;

	}

	/**
	 * The method to set the value to superiorsAllowed
	 * @param superiorsAllowed A Boolean representing the superiorsAllowed
	 */
	public setSuperiorsAllowed(superiorsAllowed: boolean): void	{
		this.superiorsAllowed = superiorsAllowed;
		this.keyModified.set("superiors_allowed", 1);

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
	 * The method to get the sharedFrom
	 * @returns An instance of Shared
	 */
	public getSharedFrom(): Shared	{
		return this.sharedFrom;

	}

	/**
	 * The method to set the value to sharedFrom
	 * @param sharedFrom An instance of Shared
	 */
	public setSharedFrom(sharedFrom: Shared): void	{
		this.sharedFrom = sharedFrom;
		this.keyModified.set("shared_from", 1);

	}

	/**
	 * The method to get the sharedTo
	 * @returns An instance of Shared
	 */
	public getSharedTo(): Shared	{
		return this.sharedTo;

	}

	/**
	 * The method to set the value to sharedTo
	 * @param sharedTo An instance of Shared
	 */
	public setSharedTo(sharedTo: Shared): void	{
		this.sharedTo = sharedTo;
		this.keyModified.set("shared_to", 1);

	}

	/**
	 * The method to get the criteria
	 * @returns An instance of Criteria
	 */
	public getCriteria(): Criteria	{
		return this.criteria;

	}

	/**
	 * The method to set the value to criteria
	 * @param criteria An instance of Criteria
	 */
	public setCriteria(criteria: Criteria): void	{
		this.criteria = criteria;
		this.keyModified.set("criteria", 1);

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
	 * The method to get the status
	 * @returns An instance of Choice<string>
	 */
	public getStatus(): Choice<string>	{
		return this.status;

	}

	/**
	 * The method to set the value to status
	 * @param status An instance of Choice<string>
	 */
	public setStatus(status: Choice<string>): void	{
		this.status = status;
		this.keyModified.set("status", 1);

	}

	/**
	 * The method to get the matchLimitExceeded
	 * @returns A Boolean representing the matchLimitExceeded
	 */
	public getMatchLimitExceeded(): boolean	{
		return this.matchLimitExceeded;

	}

	/**
	 * The method to set the value to matchLimitExceeded
	 * @param matchLimitExceeded A Boolean representing the matchLimitExceeded
	 */
	public setMatchLimitExceeded(matchLimitExceeded: boolean): void	{
		this.matchLimitExceeded = matchLimitExceeded;
		this.keyModified.set("match_limit_exceeded", 1);

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
	SharingRules as MasterModel,
	SharingRules as SharingRules
}
