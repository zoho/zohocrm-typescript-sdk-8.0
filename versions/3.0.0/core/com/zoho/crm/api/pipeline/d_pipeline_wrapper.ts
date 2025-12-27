import {DPipeline} from "./d_pipeline";
import {Model} from "../../../../../../utils/util/model";

class DPipelineWrapper implements Model{

	private pipeline: Array<DPipeline>;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the pipeline
	 * @returns An Array representing the pipeline
	 */
	public getPipeline(): Array<DPipeline>	{
		return this.pipeline;

	}

	/**
	 * The method to set the value to pipeline
	 * @param pipeline An Array representing the pipeline
	 */
	public setPipeline(pipeline: Array<DPipeline>): void	{
		this.pipeline = pipeline;
		this.keyModified.set("pipeline", 1);

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
	DPipelineWrapper as MasterModel,
	DPipelineWrapper as DPipelineWrapper
}
