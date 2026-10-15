import {MoveSubordinate} from "./move_subordinate";
import {Transfer} from "./transfer";
import {Model} from "../../../../../../utils/util/model";

class TransferAndDeleteByID implements Model{

	private transfer: Transfer;
	private moveSubordinate: MoveSubordinate;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the transfer
	 * @returns An instance of Transfer
	 */
	public getTransfer(): Transfer	{
		return this.transfer;

	}

	/**
	 * The method to set the value to transfer
	 * @param transfer An instance of Transfer
	 */
	public setTransfer(transfer: Transfer): void	{
		this.transfer = transfer;
		this.keyModified.set("transfer", 1);

	}

	/**
	 * The method to get the moveSubordinate
	 * @returns An instance of MoveSubordinate
	 */
	public getMoveSubordinate(): MoveSubordinate	{
		return this.moveSubordinate;

	}

	/**
	 * The method to set the value to moveSubordinate
	 * @param moveSubordinate An instance of MoveSubordinate
	 */
	public setMoveSubordinate(moveSubordinate: MoveSubordinate): void	{
		this.moveSubordinate = moveSubordinate;
		this.keyModified.set("move_subordinate", 1);

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
	TransferAndDeleteByID as MasterModel,
	TransferAndDeleteByID as TransferAndDeleteByID
}
