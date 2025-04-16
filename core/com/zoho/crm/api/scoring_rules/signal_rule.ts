import {Signal} from "./signal";
import {Model} from "../../../../../../utils/util/model";

class SignalRule implements Model{

	private score: number;
	private signal: Signal;
	private id: string;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the score
	 * @returns A number representing the score
	 */
	public getScore(): number	{
		return this.score;

	}

	/**
	 * The method to set the value to score
	 * @param score A number representing the score
	 */
	public setScore(score: number): void	{
		this.score = score;
		this.keyModified.set("score", 1);

	}

	/**
	 * The method to get the signal
	 * @returns An instance of Signal
	 */
	public getSignal(): Signal	{
		return this.signal;

	}

	/**
	 * The method to set the value to signal
	 * @param signal An instance of Signal
	 */
	public setSignal(signal: Signal): void	{
		this.signal = signal;
		this.keyModified.set("signal", 1);

	}

	/**
	 * The method to get the id
	 * @returns A String representing the id
	 */
	public getId(): string	{
		return this.id;

	}

	/**
	 * The method to set the value to id
	 * @param id A String representing the id
	 */
	public setId(id: string): void	{
		this.id = id;
		this.keyModified.set("id", 1);

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
	SignalRule as MasterModel,
	SignalRule as SignalRule
}
