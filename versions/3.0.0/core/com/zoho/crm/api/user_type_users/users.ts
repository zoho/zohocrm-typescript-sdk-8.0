import {Model} from "../../../../../../utils/util/model";

class Users implements Model{

	private personalityId: bigint;
	private confirm: boolean;
	private statusReasonS: string;
	private invitedTime: Date;
	private module: string;
	private name: string;
	private active: boolean;
	private email: string;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the personalityId
	 * @returns A BigInt representing the personalityId
	 */
	public getPersonalityId(): bigint	{
		return this.personalityId;

	}

	/**
	 * The method to set the value to personalityId
	 * @param personalityId A BigInt representing the personalityId
	 */
	public setPersonalityId(personalityId: bigint): void	{
		this.personalityId = personalityId;
		this.keyModified.set("personality_id", 1);

	}

	/**
	 * The method to get the confirm
	 * @returns A Boolean representing the confirm
	 */
	public getConfirm(): boolean	{
		return this.confirm;

	}

	/**
	 * The method to set the value to confirm
	 * @param confirm A Boolean representing the confirm
	 */
	public setConfirm(confirm: boolean): void	{
		this.confirm = confirm;
		this.keyModified.set("confirm", 1);

	}

	/**
	 * The method to get the statusReasonS
	 * @returns A String representing the statusReasonS
	 */
	public getStatusReasonS(): string	{
		return this.statusReasonS;

	}

	/**
	 * The method to set the value to statusReasonS
	 * @param statusReasonS A String representing the statusReasonS
	 */
	public setStatusReasonS(statusReasonS: string): void	{
		this.statusReasonS = statusReasonS;
		this.keyModified.set("status_reason__s", 1);

	}

	/**
	 * The method to get the invitedTime
	 * @returns An instance of Date
	 */
	public getInvitedTime(): Date	{
		return this.invitedTime;

	}

	/**
	 * The method to set the value to invitedTime
	 * @param invitedTime An instance of Date
	 */
	public setInvitedTime(invitedTime: Date): void	{
		this.invitedTime = invitedTime;
		this.keyModified.set("invited_time", 1);

	}

	/**
	 * The method to get the module
	 * @returns A String representing the module
	 */
	public getModule(): string	{
		return this.module;

	}

	/**
	 * The method to set the value to module
	 * @param module A String representing the module
	 */
	public setModule(module: string): void	{
		this.module = module;
		this.keyModified.set("module", 1);

	}

	/**
	 * The method to get the name
	 * @returns A String representing the name
	 */
	public getName(): string	{
		return this.name;

	}

	/**
	 * The method to set the value to name
	 * @param name A String representing the name
	 */
	public setName(name: string): void	{
		this.name = name;
		this.keyModified.set("name", 1);

	}

	/**
	 * The method to get the active
	 * @returns A Boolean representing the active
	 */
	public getActive(): boolean	{
		return this.active;

	}

	/**
	 * The method to set the value to active
	 * @param active A Boolean representing the active
	 */
	public setActive(active: boolean): void	{
		this.active = active;
		this.keyModified.set("active", 1);

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
	Users as MasterModel,
	Users as Users
}
