import {ResponseHandler} from "./response_handler";
import {UserType} from "./user_type";
import {Model} from "../../../../../../utils/util/model";

class ResponseWrapper implements Model, ResponseHandler{

	private userType: Array<UserType>;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the userType
	 * @returns An Array representing the userType
	 */
	public getUserType(): Array<UserType>	{
		return this.userType;

	}

	/**
	 * The method to set the value to userType
	 * @param userType An Array representing the userType
	 */
	public setUserType(userType: Array<UserType>): void	{
		this.userType = userType;
		this.keyModified.set("user_type", 1);

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
	ResponseWrapper as MasterModel,
	ResponseWrapper as ResponseWrapper
}
