import {Action} from "./action";
import {Model} from "../../../../../../utils/util/model";

class Signals implements Model{

	private signalNamespace: string;
	private email: string;
	private subject: string;
	private message: string;
	private module: string;
	private id: bigint;
	private actions: Array<Action>;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the signalNamespace
	 * @returns A String representing the signalNamespace
	 */
	public getSignalNamespace(): string	{
		return this.signalNamespace;

	}

	/**
	 * The method to set the value to signalNamespace
	 * @param signalNamespace A String representing the signalNamespace
	 */
	public setSignalNamespace(signalNamespace: string): void	{
		this.signalNamespace = signalNamespace;
		this.keyModified.set("signal_namespace", 1);

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
	 * The method to get the subject
	 * @returns A String representing the subject
	 */
	public getSubject(): string	{
		return this.subject;

	}

	/**
	 * The method to set the value to subject
	 * @param subject A String representing the subject
	 */
	public setSubject(subject: string): void	{
		this.subject = subject;
		this.keyModified.set("subject", 1);

	}

	/**
	 * The method to get the message
	 * @returns A String representing the message
	 */
	public getMessage(): string	{
		return this.message;

	}

	/**
	 * The method to set the value to message
	 * @param message A String representing the message
	 */
	public setMessage(message: string): void	{
		this.message = message;
		this.keyModified.set("message", 1);

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
	 * The method to get the id
	 * @returns A BigInt representing the id
	 */
	public getId(): bigint	{
		return this.id;

	}

	/**
	 * The method to set the value to id
	 * @param id A BigInt representing the id
	 */
	public setId(id: bigint): void	{
		this.id = id;
		this.keyModified.set("id", 1);

	}

	/**
	 * The method to get the actions
	 * @returns An Array representing the actions
	 */
	public getActions(): Array<Action>	{
		return this.actions;

	}

	/**
	 * The method to set the value to actions
	 * @param actions An Array representing the actions
	 */
	public setActions(actions: Array<Action>): void	{
		this.actions = actions;
		this.keyModified.set("actions", 1);

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
	Signals as MasterModel,
	Signals as Signals
}
