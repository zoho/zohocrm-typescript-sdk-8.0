import {Role} from "./role";
import {Model} from "../../../../../../utils/util/model";

class Users implements Model{

	private role: Role;
	private name: string;
	private id: bigint;
	private email: string;
	private zuid: string;
	private effectiveFrom: Date;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the role
	 * @returns An instance of Role
	 */
	public getRole(): Role	{
		return this.role;

	}

	/**
	 * The method to set the value to role
	 * @param role An instance of Role
	 */
	public setRole(role: Role): void	{
		this.role = role;
		this.keyModified.set("role", 1);

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
	 * The method to get the email
	 * @returns A String representing the email
	 */
	public getEmail(): string	{
		return this.email;

	}

	/**
	 * The method to set the value to email
	 * @param email A String representing the email
	 */
	public setEmail(email: string): void	{
		this.email = email;
		this.keyModified.set("email", 1);

	}

	/**
	 * The method to get the zuid
	 * @returns A String representing the zuid
	 */
	public getZuid(): string	{
		return this.zuid;

	}

	/**
	 * The method to set the value to zuid
	 * @param zuid A String representing the zuid
	 */
	public setZuid(zuid: string): void	{
		this.zuid = zuid;
		this.keyModified.set("zuid", 1);

	}

	/**
	 * The method to get the effectiveFrom
	 * @returns An instance of Date
	 */
	public getEffectiveFrom(): Date	{
		return this.effectiveFrom;

	}

	/**
	 * The method to set the value to effectiveFrom
	 * @param effectiveFrom An instance of Date
	 */
	public setEffectiveFrom(effectiveFrom: Date): void	{
		this.effectiveFrom = effectiveFrom;
		this.keyModified.set("effective_from", 1);

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
	Users as MasterModel,
	Users as Users
}
