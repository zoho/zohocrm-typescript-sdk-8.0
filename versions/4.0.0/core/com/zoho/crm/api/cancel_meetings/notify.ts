import {Model} from "../../../../../../utils/util/model";

class Notify implements Model{

	private sendCancellingMail: boolean;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the sendCancellingMail
	 * @returns A Boolean representing the sendCancellingMail
	 */
	public getSendCancellingMail(): boolean	{
		return this.sendCancellingMail;

	}

	/**
	 * The method to set the value to sendCancellingMail
	 * @param sendCancellingMail A Boolean representing the sendCancellingMail
	 */
	public setSendCancellingMail(sendCancellingMail: boolean): void	{
		this.sendCancellingMail = sendCancellingMail;
		this.keyModified.set("send_cancelling_mail", 1);

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
	Notify as MasterModel,
	Notify as Notify
}
