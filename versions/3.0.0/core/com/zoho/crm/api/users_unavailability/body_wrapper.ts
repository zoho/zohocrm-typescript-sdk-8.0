import {UsersUnavailability} from "./users_unavailability";
import {Model} from "../../../../../../utils/util/model";

class BodyWrapper implements Model{

	private usersUnavailability: Array<UsersUnavailability>;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the usersUnavailability
	 * @returns An Array representing the usersUnavailability
	 */
	public getUsersUnavailability(): Array<UsersUnavailability>	{
		return this.usersUnavailability;

	}

	/**
	 * The method to set the value to usersUnavailability
	 * @param usersUnavailability An Array representing the usersUnavailability
	 */
	public setUsersUnavailability(usersUnavailability: Array<UsersUnavailability>): void	{
		this.usersUnavailability = usersUnavailability;
		this.keyModified.set("users_unavailability", 1);

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
	BodyWrapper as MasterModel,
	BodyWrapper as BodyWrapper
}
