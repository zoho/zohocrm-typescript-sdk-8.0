import {Choice} from "../../../../../../utils/util/choice";
import {Model} from "../../../../../../utils/util/model";

class DefaultFromAddress implements Model{

	private type: Choice<string>;
	private userName: string;
	private email: string;
	private keyModified: Map<string, number> = new Map<string, number>();
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
	 * The method to get the userName
	 * @returns A String representing the userName
	 */
	public getUserName(): string	{
		return this.userName;

	}

	/**
	 * The method to set the value to userName
	 * @param userName A String representing the userName
	 */
	public setUserName(userName: string): void	{
		this.userName = userName;
		this.keyModified.set("user_name", 1);

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
	DefaultFromAddress as MasterModel,
	DefaultFromAddress as DefaultFromAddress
}
