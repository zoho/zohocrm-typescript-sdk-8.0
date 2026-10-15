import {Model} from "../../../../../../utils/util/model";

class Approval implements Model{

	private delegate: boolean;
	private approve: boolean;
	private reject: boolean;
	private resubmit: boolean;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the delegate
	 * @returns A Boolean representing the delegate
	 */
	public getDelegate(): boolean	{
		return this.delegate;

	}

	/**
	 * The method to set the value to delegate
	 * @param delegate A Boolean representing the delegate
	 */
	public setDelegate(delegate: boolean): void	{
		this.delegate = delegate;
		this.keyModified.set("delegate", 1);

	}

	/**
	 * The method to get the approve
	 * @returns A Boolean representing the approve
	 */
	public getApprove(): boolean	{
		return this.approve;

	}

	/**
	 * The method to set the value to approve
	 * @param approve A Boolean representing the approve
	 */
	public setApprove(approve: boolean): void	{
		this.approve = approve;
		this.keyModified.set("approve", 1);

	}

	/**
	 * The method to get the reject
	 * @returns A Boolean representing the reject
	 */
	public getReject(): boolean	{
		return this.reject;

	}

	/**
	 * The method to set the value to reject
	 * @param reject A Boolean representing the reject
	 */
	public setReject(reject: boolean): void	{
		this.reject = reject;
		this.keyModified.set("reject", 1);

	}

	/**
	 * The method to get the resubmit
	 * @returns A Boolean representing the resubmit
	 */
	public getResubmit(): boolean	{
		return this.resubmit;

	}

	/**
	 * The method to set the value to resubmit
	 * @param resubmit A Boolean representing the resubmit
	 */
	public setResubmit(resubmit: boolean): void	{
		this.resubmit = resubmit;
		this.keyModified.set("resubmit", 1);

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
	Approval as MasterModel,
	Approval as Approval
}
