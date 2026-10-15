import {Modules} from "./modules";
import {Owner} from "./owner";
import {PersonalityModule} from "./personality_module";
import {Model} from "../../../../../../utils/util/model";

class UserType implements Model{

	private personalityModule: PersonalityModule;
	private createdTime: Date;
	private modifiedTime: Date;
	private modifiedBy: Owner;
	private createdBy: Owner;
	private name: string;
	private active: boolean;
	private default1: boolean;
	private noOfUsers: number;
	private id: bigint;
	private modules: Array<Modules>;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the personalityModule
	 * @returns An instance of PersonalityModule
	 */
	public getPersonalityModule(): PersonalityModule	{
		return this.personalityModule;

	}

	/**
	 * The method to set the value to personalityModule
	 * @param personalityModule An instance of PersonalityModule
	 */
	public setPersonalityModule(personalityModule: PersonalityModule): void	{
		this.personalityModule = personalityModule;
		this.keyModified.set("personality_module", 1);

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
	 * The method to get the modifiedBy
	 * @returns An instance of Owner
	 */
	public getModifiedBy(): Owner	{
		return this.modifiedBy;

	}

	/**
	 * The method to set the value to modifiedBy
	 * @param modifiedBy An instance of Owner
	 */
	public setModifiedBy(modifiedBy: Owner): void	{
		this.modifiedBy = modifiedBy;
		this.keyModified.set("modified_by", 1);

	}

	/**
	 * The method to get the createdBy
	 * @returns An instance of Owner
	 */
	public getCreatedBy(): Owner	{
		return this.createdBy;

	}

	/**
	 * The method to set the value to createdBy
	 * @param createdBy An instance of Owner
	 */
	public setCreatedBy(createdBy: Owner): void	{
		this.createdBy = createdBy;
		this.keyModified.set("created_by", 1);

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
	 * The method to get the default
	 * @returns A Boolean representing the default1
	 */
	public getDefault(): boolean	{
		return this.default1;

	}

	/**
	 * The method to set the value to default
	 * @param default1 A Boolean representing the default1
	 */
	public setDefault(default1: boolean): void	{
		this.default1 = default1;
		this.keyModified.set("default", 1);

	}

	/**
	 * The method to get the noOfUsers
	 * @returns A number representing the noOfUsers
	 */
	public getNoOfUsers(): number	{
		return this.noOfUsers;

	}

	/**
	 * The method to set the value to noOfUsers
	 * @param noOfUsers A number representing the noOfUsers
	 */
	public setNoOfUsers(noOfUsers: number): void	{
		this.noOfUsers = noOfUsers;
		this.keyModified.set("no_of_users", 1);

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
	 * The method to get the modules
	 * @returns An Array representing the modules
	 */
	public getModules(): Array<Modules>	{
		return this.modules;

	}

	/**
	 * The method to set the value to modules
	 * @param modules An Array representing the modules
	 */
	public setModules(modules: Array<Modules>): void	{
		this.modules = modules;
		this.keyModified.set("modules", 1);

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
	UserType as MasterModel,
	UserType as UserType
}
