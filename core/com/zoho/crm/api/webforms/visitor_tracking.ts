import {Model} from "../../../../../../utils/util/model";

class VisitorTracking implements Model{

	private portalName: string;
	private trackingCode: string;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the portalName
	 * @returns A String representing the portalName
	 */
	public getPortalName(): string	{
		return this.portalName;

	}

	/**
	 * The method to set the value to portalName
	 * @param portalName A String representing the portalName
	 */
	public setPortalName(portalName: string): void	{
		this.portalName = portalName;
		this.keyModified.set("portal_name", 1);

	}

	/**
	 * The method to get the trackingCode
	 * @returns A String representing the trackingCode
	 */
	public getTrackingCode(): string	{
		return this.trackingCode;

	}

	/**
	 * The method to set the value to trackingCode
	 * @param trackingCode A String representing the trackingCode
	 */
	public setTrackingCode(trackingCode: string): void	{
		this.trackingCode = trackingCode;
		this.keyModified.set("tracking_code", 1);

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
	VisitorTracking as MasterModel,
	VisitorTracking as VisitorTracking
}
