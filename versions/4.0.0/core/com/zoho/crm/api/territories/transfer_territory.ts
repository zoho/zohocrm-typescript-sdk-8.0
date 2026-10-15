import {Model} from "../../../../../../utils/util/model";

class TransferTerritory implements Model{

	private id: bigint;
	private transferToId: bigint;
	private deletePreviousForecasts: boolean;
	private keyModified: Map<string, number> = new Map<string, number>();
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
	 * The method to get the transferToId
	 * @returns A BigInt representing the transferToId
	 */
	public getTransferToId(): bigint	{
		return this.transferToId;

	}

	/**
	 * The method to set the value to transferToId
	 * @param transferToId A BigInt representing the transferToId
	 */
	public setTransferToId(transferToId: bigint): void	{
		this.transferToId = transferToId;
		this.keyModified.set("transfer_to_id", 1);

	}

	/**
	 * The method to get the deletePreviousForecasts
	 * @returns A Boolean representing the deletePreviousForecasts
	 */
	public getDeletePreviousForecasts(): boolean	{
		return this.deletePreviousForecasts;

	}

	/**
	 * The method to set the value to deletePreviousForecasts
	 * @param deletePreviousForecasts A Boolean representing the deletePreviousForecasts
	 */
	public setDeletePreviousForecasts(deletePreviousForecasts: boolean): void	{
		this.deletePreviousForecasts = deletePreviousForecasts;
		this.keyModified.set("delete_previous_forecasts", 1);

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
	TransferTerritory as MasterModel,
	TransferTerritory as TransferTerritory
}
