import {Model} from "../../../../../../utils/util/model";

class LicenseDetails implements Model{

	private paidExpiry: Date;
	private usersLicensePurchased: number;
	private trialType: string;
	private trialExpiry: string;
	private paid: boolean;
	private paidType: string;
	private trialAction: string;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the paidExpiry
	 * @returns An instance of Date
	 */
	public getPaidExpiry(): Date	{
		return this.paidExpiry;

	}

	/**
	 * The method to set the value to paidExpiry
	 * @param paidExpiry An instance of Date
	 */
	public setPaidExpiry(paidExpiry: Date): void	{
		this.paidExpiry = paidExpiry;
		this.keyModified.set("paid_expiry", 1);

	}

	/**
	 * The method to get the usersLicensePurchased
	 * @returns A number representing the usersLicensePurchased
	 */
	public getUsersLicensePurchased(): number	{
		return this.usersLicensePurchased;

	}

	/**
	 * The method to set the value to usersLicensePurchased
	 * @param usersLicensePurchased A number representing the usersLicensePurchased
	 */
	public setUsersLicensePurchased(usersLicensePurchased: number): void	{
		this.usersLicensePurchased = usersLicensePurchased;
		this.keyModified.set("users_license_purchased", 1);

	}

	/**
	 * The method to get the trialType
	 * @returns A String representing the trialType
	 */
	public getTrialType(): string	{
		return this.trialType;

	}

	/**
	 * The method to set the value to trialType
	 * @param trialType A String representing the trialType
	 */
	public setTrialType(trialType: string): void	{
		this.trialType = trialType;
		this.keyModified.set("trial_type", 1);

	}

	/**
	 * The method to get the trialExpiry
	 * @returns A String representing the trialExpiry
	 */
	public getTrialExpiry(): string	{
		return this.trialExpiry;

	}

	/**
	 * The method to set the value to trialExpiry
	 * @param trialExpiry A String representing the trialExpiry
	 */
	public setTrialExpiry(trialExpiry: string): void	{
		this.trialExpiry = trialExpiry;
		this.keyModified.set("trial_expiry", 1);

	}

	/**
	 * The method to get the paid
	 * @returns A Boolean representing the paid
	 */
	public getPaid(): boolean	{
		return this.paid;

	}

	/**
	 * The method to set the value to paid
	 * @param paid A Boolean representing the paid
	 */
	public setPaid(paid: boolean): void	{
		this.paid = paid;
		this.keyModified.set("paid", 1);

	}

	/**
	 * The method to get the paidType
	 * @returns A String representing the paidType
	 */
	public getPaidType(): string	{
		return this.paidType;

	}

	/**
	 * The method to set the value to paidType
	 * @param paidType A String representing the paidType
	 */
	public setPaidType(paidType: string): void	{
		this.paidType = paidType;
		this.keyModified.set("paid_type", 1);

	}

	/**
	 * The method to get the trialAction
	 * @returns A String representing the trialAction
	 */
	public getTrialAction(): string	{
		return this.trialAction;

	}

	/**
	 * The method to set the value to trialAction
	 * @param trialAction A String representing the trialAction
	 */
	public setTrialAction(trialAction: string): void	{
		this.trialAction = trialAction;
		this.keyModified.set("trial_action", 1);

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
	LicenseDetails as MasterModel,
	LicenseDetails as LicenseDetails
}
