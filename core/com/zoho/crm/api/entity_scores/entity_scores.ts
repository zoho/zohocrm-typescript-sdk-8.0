import {Entity} from "./entity";
import {ScoringRule} from "./scoring_rule";
import {Model} from "../../../../../../utils/util/model";

class EntityScores implements Model{

	private entity: Entity;
	private positiveScore: number;
	private touchPointScore: number;
	private score: number;
	private negativeScore: number;
	private touchPointNegativeScore: number;
	private scoringRule: ScoringRule;
	private fieldStates: Array<string>;
	private id: bigint;
	private ziaVisions: boolean;
	private touchPointPositiveScore: number;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the entity
	 * @returns An instance of Entity
	 */
	public getEntity(): Entity	{
		return this.entity;

	}

	/**
	 * The method to set the value to entity
	 * @param entity An instance of Entity
	 */
	public setEntity(entity: Entity): void	{
		this.entity = entity;
		this.keyModified.set("Entity", 1);

	}

	/**
	 * The method to get the positiveScore
	 * @returns A number representing the positiveScore
	 */
	public getPositiveScore(): number	{
		return this.positiveScore;

	}

	/**
	 * The method to set the value to positiveScore
	 * @param positiveScore A number representing the positiveScore
	 */
	public setPositiveScore(positiveScore: number): void	{
		this.positiveScore = positiveScore;
		this.keyModified.set("Positive_Score", 1);

	}

	/**
	 * The method to get the touchPointScore
	 * @returns A number representing the touchPointScore
	 */
	public getTouchPointScore(): number	{
		return this.touchPointScore;

	}

	/**
	 * The method to set the value to touchPointScore
	 * @param touchPointScore A number representing the touchPointScore
	 */
	public setTouchPointScore(touchPointScore: number): void	{
		this.touchPointScore = touchPointScore;
		this.keyModified.set("Touch_Point_Score", 1);

	}

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
		this.keyModified.set("Score", 1);

	}

	/**
	 * The method to get the negativeScore
	 * @returns A number representing the negativeScore
	 */
	public getNegativeScore(): number	{
		return this.negativeScore;

	}

	/**
	 * The method to set the value to negativeScore
	 * @param negativeScore A number representing the negativeScore
	 */
	public setNegativeScore(negativeScore: number): void	{
		this.negativeScore = negativeScore;
		this.keyModified.set("Negative_Score", 1);

	}

	/**
	 * The method to get the touchPointNegativeScore
	 * @returns A number representing the touchPointNegativeScore
	 */
	public getTouchPointNegativeScore(): number	{
		return this.touchPointNegativeScore;

	}

	/**
	 * The method to set the value to touchPointNegativeScore
	 * @param touchPointNegativeScore A number representing the touchPointNegativeScore
	 */
	public setTouchPointNegativeScore(touchPointNegativeScore: number): void	{
		this.touchPointNegativeScore = touchPointNegativeScore;
		this.keyModified.set("Touch_Point_Negative_Score", 1);

	}

	/**
	 * The method to get the scoringRule
	 * @returns An instance of ScoringRule
	 */
	public getScoringRule(): ScoringRule	{
		return this.scoringRule;

	}

	/**
	 * The method to set the value to scoringRule
	 * @param scoringRule An instance of ScoringRule
	 */
	public setScoringRule(scoringRule: ScoringRule): void	{
		this.scoringRule = scoringRule;
		this.keyModified.set("Scoring_Rule", 1);

	}

	/**
	 * The method to get the fieldStates
	 * @returns An Array representing the fieldStates
	 */
	public getFieldStates(): Array<string>	{
		return this.fieldStates;

	}

	/**
	 * The method to set the value to fieldStates
	 * @param fieldStates An Array representing the fieldStates
	 */
	public setFieldStates(fieldStates: Array<string>): void	{
		this.fieldStates = fieldStates;
		this.keyModified.set("$field_states", 1);

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
	 * The method to get the ziaVisions
	 * @returns A Boolean representing the ziaVisions
	 */
	public getZiaVisions(): boolean	{
		return this.ziaVisions;

	}

	/**
	 * The method to set the value to ziaVisions
	 * @param ziaVisions A Boolean representing the ziaVisions
	 */
	public setZiaVisions(ziaVisions: boolean): void	{
		this.ziaVisions = ziaVisions;
		this.keyModified.set("$zia_visions", 1);

	}

	/**
	 * The method to get the touchPointPositiveScore
	 * @returns A number representing the touchPointPositiveScore
	 */
	public getTouchPointPositiveScore(): number	{
		return this.touchPointPositiveScore;

	}

	/**
	 * The method to set the value to touchPointPositiveScore
	 * @param touchPointPositiveScore A number representing the touchPointPositiveScore
	 */
	public setTouchPointPositiveScore(touchPointPositiveScore: number): void	{
		this.touchPointPositiveScore = touchPointPositiveScore;
		this.keyModified.set("Touch_Point_Positive_Score", 1);

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
	EntityScores as MasterModel,
	EntityScores as EntityScores
}
