import {ContactRole} from "./contact_role";
import {ResponseHandler} from "./response_handler";
import {Model} from "../../../../../../utils/util/model";

class ResponseWrapper implements Model, ResponseHandler{

	private contactRoles: Array<ContactRole>;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the contactRoles
	 * @returns An Array representing the contactRoles
	 */
	public getContactRoles(): Array<ContactRole>	{
		return this.contactRoles;

	}

	/**
	 * The method to set the value to contactRoles
	 * @param contactRoles An Array representing the contactRoles
	 */
	public setContactRoles(contactRoles: Array<ContactRole>): void	{
		this.contactRoles = contactRoles;
		this.keyModified.set("contact_roles", 1);

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
