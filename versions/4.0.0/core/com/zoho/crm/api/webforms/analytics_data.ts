import {Model} from "../../../../../../utils/util/model";

class AnalyticsData implements Model{

	private iframeUrlTrackingCode: string;
	private urlAnalyticsEnabled: boolean;
	private analyticsEnabled: boolean;
	private analyticsEnabledTime: Date;
	private trackingCode: string;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the iframeUrlTrackingCode
	 * @returns A String representing the iframeUrlTrackingCode
	 */
	public getIframeUrlTrackingCode(): string	{
		return this.iframeUrlTrackingCode;

	}

	/**
	 * The method to set the value to iframeUrlTrackingCode
	 * @param iframeUrlTrackingCode A String representing the iframeUrlTrackingCode
	 */
	public setIframeUrlTrackingCode(iframeUrlTrackingCode: string): void	{
		this.iframeUrlTrackingCode = iframeUrlTrackingCode;
		this.keyModified.set("iframe_url_tracking_code", 1);

	}

	/**
	 * The method to get the urlAnalyticsEnabled
	 * @returns A Boolean representing the urlAnalyticsEnabled
	 */
	public getUrlAnalyticsEnabled(): boolean	{
		return this.urlAnalyticsEnabled;

	}

	/**
	 * The method to set the value to urlAnalyticsEnabled
	 * @param urlAnalyticsEnabled A Boolean representing the urlAnalyticsEnabled
	 */
	public setUrlAnalyticsEnabled(urlAnalyticsEnabled: boolean): void	{
		this.urlAnalyticsEnabled = urlAnalyticsEnabled;
		this.keyModified.set("url_analytics_enabled", 1);

	}

	/**
	 * The method to get the analyticsEnabled
	 * @returns A Boolean representing the analyticsEnabled
	 */
	public getAnalyticsEnabled(): boolean	{
		return this.analyticsEnabled;

	}

	/**
	 * The method to set the value to analyticsEnabled
	 * @param analyticsEnabled A Boolean representing the analyticsEnabled
	 */
	public setAnalyticsEnabled(analyticsEnabled: boolean): void	{
		this.analyticsEnabled = analyticsEnabled;
		this.keyModified.set("analytics_enabled", 1);

	}

	/**
	 * The method to get the analyticsEnabledTime
	 * @returns An instance of Date
	 */
	public getAnalyticsEnabledTime(): Date	{
		return this.analyticsEnabledTime;

	}

	/**
	 * The method to set the value to analyticsEnabledTime
	 * @param analyticsEnabledTime An instance of Date
	 */
	public setAnalyticsEnabledTime(analyticsEnabledTime: Date): void	{
		this.analyticsEnabledTime = analyticsEnabledTime;
		this.keyModified.set("analytics_enabled_time", 1);

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
	AnalyticsData as MasterModel,
	AnalyticsData as AnalyticsData
}
