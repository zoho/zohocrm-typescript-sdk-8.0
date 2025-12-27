import {Stages} from "./stages";
import {TPipeline} from "./t_pipeline";
import {Model} from "../../../../../../utils/util/model";

class TransferPipeline implements Model{

	private pipeline: TPipeline;
	private stages: Array<Stages>;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the pipeline
	 * @returns An instance of TPipeline
	 */
	public getPipeline(): TPipeline	{
		return this.pipeline;

	}

	/**
	 * The method to set the value to pipeline
	 * @param pipeline An instance of TPipeline
	 */
	public setPipeline(pipeline: TPipeline): void	{
		this.pipeline = pipeline;
		this.keyModified.set("pipeline", 1);

	}

	/**
	 * The method to get the stages
	 * @returns An Array representing the stages
	 */
	public getStages(): Array<Stages>	{
		return this.stages;

	}

	/**
	 * The method to set the value to stages
	 * @param stages An Array representing the stages
	 */
	public setStages(stages: Array<Stages>): void	{
		this.stages = stages;
		this.keyModified.set("stages", 1);

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
	TransferPipeline as MasterModel,
	TransferPipeline as TransferPipeline
}
