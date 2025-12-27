import {Model} from "../../../../../../utils/util/model";

class State implements Model{

	private triggerType: string;
	private name: string;
	private isLastState: boolean;
	private id: bigint;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the triggerType
	 * @returns A String representing the triggerType
	 */
	public getTriggerType(): string	{
		return this.triggerType;

	}

	/**
	 * The method to set the value to triggerType
	 * @param triggerType A String representing the triggerType
	 */
	public setTriggerType(triggerType: string): void	{
		this.triggerType = triggerType;
		this.keyModified.set("trigger_type", 1);

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
	 * The method to get the isLastState
	 * @returns A Boolean representing the isLastState
	 */
	public getIsLastState(): boolean	{
		return this.isLastState;

	}

	/**
	 * The method to set the value to isLastState
	 * @param isLastState A Boolean representing the isLastState
	 */
	public setIsLastState(isLastState: boolean): void	{
		this.isLastState = isLastState;
		this.keyModified.set("is_last_state", 1);

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
	State as MasterModel,
	State as State
}
