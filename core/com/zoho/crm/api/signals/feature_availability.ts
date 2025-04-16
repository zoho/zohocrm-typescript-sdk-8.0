import {Model} from "../../../../../../utils/util/model";

class FeatureAvailability implements Model{

	private scoring: boolean;
	private signals: boolean;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the scoring
	 * @returns A Boolean representing the scoring
	 */
	public getScoring(): boolean	{
		return this.scoring;

	}

	/**
	 * The method to set the value to scoring
	 * @param scoring A Boolean representing the scoring
	 */
	public setScoring(scoring: boolean): void	{
		this.scoring = scoring;
		this.keyModified.set("scoring", 1);

	}

	/**
	 * The method to get the signals
	 * @returns A Boolean representing the signals
	 */
	public getSignals(): boolean	{
		return this.signals;

	}

	/**
	 * The method to set the value to signals
	 * @param signals A Boolean representing the signals
	 */
	public setSignals(signals: boolean): void	{
		this.signals = signals;
		this.keyModified.set("signals", 1);

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
	FeatureAvailability as MasterModel,
	FeatureAvailability as FeatureAvailability
}
