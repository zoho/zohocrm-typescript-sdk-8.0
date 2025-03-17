import {JobResponse} from "./job_response";
import {Model} from "../../../../../../utils/util/model";

class ResponseWrapper implements Model{

	private portalInvite: Array<JobResponse>;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the portalInvite
	 * @returns An Array representing the portalInvite
	 */
	public getPortalInvite(): Array<JobResponse>	{
		return this.portalInvite;

	}

	/**
	 * The method to set the value to portalInvite
	 * @param portalInvite An Array representing the portalInvite
	 */
	public setPortalInvite(portalInvite: Array<JobResponse>): void	{
		this.portalInvite = portalInvite;
		this.keyModified.set("portal_invite", 1);

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
