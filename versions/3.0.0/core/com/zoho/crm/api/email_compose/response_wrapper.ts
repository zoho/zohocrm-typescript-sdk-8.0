import {EmailCompose} from "./email_compose";
import {ResponseHandler} from "./response_handler";
import {Model} from "../../../../../../utils/util/model";

class ResponseWrapper implements Model, ResponseHandler{

	private emailCompose: Array<EmailCompose>;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the emailCompose
	 * @returns An Array representing the emailCompose
	 */
	public getEmailCompose(): Array<EmailCompose>	{
		return this.emailCompose;

	}

	/**
	 * The method to set the value to emailCompose
	 * @param emailCompose An Array representing the emailCompose
	 */
	public setEmailCompose(emailCompose: Array<EmailCompose>): void	{
		this.emailCompose = emailCompose;
		this.keyModified.set("email_compose", 1);

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
