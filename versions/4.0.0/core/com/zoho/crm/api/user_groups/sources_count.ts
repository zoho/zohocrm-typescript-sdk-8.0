import {Users} from "./users";
import {Model} from "../../../../../../utils/util/model";

class SourcesCount implements Model{

	private territories: number;
	private roles: number;
	private groups: number;
	private users: Users;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the territories
	 * @returns A number representing the territories
	 */
	public getTerritories(): number	{
		return this.territories;

	}

	/**
	 * The method to set the value to territories
	 * @param territories A number representing the territories
	 */
	public setTerritories(territories: number): void	{
		this.territories = territories;
		this.keyModified.set("territories", 1);

	}

	/**
	 * The method to get the roles
	 * @returns A number representing the roles
	 */
	public getRoles(): number	{
		return this.roles;

	}

	/**
	 * The method to set the value to roles
	 * @param roles A number representing the roles
	 */
	public setRoles(roles: number): void	{
		this.roles = roles;
		this.keyModified.set("roles", 1);

	}

	/**
	 * The method to get the groups
	 * @returns A number representing the groups
	 */
	public getGroups(): number	{
		return this.groups;

	}

	/**
	 * The method to set the value to groups
	 * @param groups A number representing the groups
	 */
	public setGroups(groups: number): void	{
		this.groups = groups;
		this.keyModified.set("groups", 1);

	}

	/**
	 * The method to get the users
	 * @returns An instance of Users
	 */
	public getUsers(): Users	{
		return this.users;

	}

	/**
	 * The method to set the value to users
	 * @param users An instance of Users
	 */
	public setUsers(users: Users): void	{
		this.users = users;
		this.keyModified.set("users", 1);

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
	SourcesCount as MasterModel,
	SourcesCount as SourcesCount
}
