import {TransferPipeline} from "./transfer_pipeline";
import {Model} from "../../../../../../utils/util/model";

class TransferPipelineWrapper implements Model{

	private transferPipeline: Array<TransferPipeline>;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the transferPipeline
	 * @returns An Array representing the transferPipeline
	 */
	public getTransferPipeline(): Array<TransferPipeline>	{
		return this.transferPipeline;

	}

	/**
	 * The method to set the value to transferPipeline
	 * @param transferPipeline An Array representing the transferPipeline
	 */
	public setTransferPipeline(transferPipeline: Array<TransferPipeline>): void	{
		this.transferPipeline = transferPipeline;
		this.keyModified.set("transfer_pipeline", 1);

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
	TransferPipelineWrapper as MasterModel,
	TransferPipelineWrapper as TransferPipelineWrapper
}
