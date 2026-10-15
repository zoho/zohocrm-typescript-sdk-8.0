import {Record} from "./record";
import {Tag} from "../tags/tag";
import {MinifiedUser} from "../users/minified_user";
import {Model} from "../../../../../../utils/util/model";

class PricingDetails extends Record implements Model{

	/**
	 * The method to get the toRange
	 * @returns A Float representing the toRange
	 */
	public getToRange(): number	{
		return this.getKeyValue("to_range");

	}

	/**
	 * The method to set the value to toRange
	 * @param toRange A Float representing the toRange
	 */
	public setToRange(toRange: number): void	{
		this.addKeyValue("to_range", toRange);

	}

	/**
	 * The method to get the discount
	 * @returns A Float representing the discount
	 */
	public getDiscount(): number	{
		return this.getKeyValue("discount");

	}

	/**
	 * The method to set the value to discount
	 * @param discount A Float representing the discount
	 */
	public setDiscount(discount: number): void	{
		this.addKeyValue("discount", discount);

	}

	/**
	 * The method to get the fromRange
	 * @returns A Float representing the fromRange
	 */
	public getFromRange(): number	{
		return this.getKeyValue("from_range");

	}

	/**
	 * The method to set the value to fromRange
	 * @param fromRange A Float representing the fromRange
	 */
	public setFromRange(fromRange: number): void	{
		this.addKeyValue("from_range", fromRange);

	}

	/**
	 * The method to get the id
	 * @returns A BigInt representing the id
	 */
	public getId(): bigint	{
		return this.getKeyValue("id");

	}

	/**
	 * The method to set the value to id
	 * @param id A BigInt representing the id
	 */
	public setId(id: bigint): void	{
		this.addKeyValue("id", id);

	}

	/**
	 * The method to get the createdBy
	 * @returns An instance of MinifiedUser
	 */
	public getCreatedBy(): MinifiedUser	{
		return this.getKeyValue("Created_By");

	}

	/**
	 * The method to set the value to createdBy
	 * @param createdBy An instance of MinifiedUser
	 */
	public setCreatedBy(createdBy: MinifiedUser): void	{
		this.addKeyValue("Created_By", createdBy);

	}

	/**
	 * The method to get the createdTime
	 * @returns An instance of Date
	 */
	public getCreatedTime(): Date	{
		return this.getKeyValue("Created_Time");

	}

	/**
	 * The method to set the value to createdTime
	 * @param createdTime An instance of Date
	 */
	public setCreatedTime(createdTime: Date): void	{
		this.addKeyValue("Created_Time", createdTime);

	}

	/**
	 * The method to get the modifiedBy
	 * @returns An instance of MinifiedUser
	 */
	public getModifiedBy(): MinifiedUser	{
		return this.getKeyValue("Modified_By");

	}

	/**
	 * The method to set the value to modifiedBy
	 * @param modifiedBy An instance of MinifiedUser
	 */
	public setModifiedBy(modifiedBy: MinifiedUser): void	{
		this.addKeyValue("Modified_By", modifiedBy);

	}

	/**
	 * The method to get the modifiedTime
	 * @returns An instance of Date
	 */
	public getModifiedTime(): Date	{
		return this.getKeyValue("Modified_Time");

	}

	/**
	 * The method to set the value to modifiedTime
	 * @param modifiedTime An instance of Date
	 */
	public setModifiedTime(modifiedTime: Date): void	{
		this.addKeyValue("Modified_Time", modifiedTime);

	}

	/**
	 * The method to get the tag
	 * @returns An Array representing the tag
	 */
	public getTag(): Array<Tag>	{
		return this.getKeyValue("Tag");

	}

	/**
	 * The method to set the value to tag
	 * @param tag An Array representing the tag
	 */
	public setTag(tag: Array<Tag>): void	{
		this.addKeyValue("Tag", tag);

	}

	/**
	 * The method to get the name
	 * @returns A String representing the name
	 */
	public getName(): string	{
		return this.getKeyValue("name");

	}

	/**
	 * The method to set the value to name
	 * @param name A String representing the name
	 */
	public setName(name: string): void	{
		this.addKeyValue("name", name);

	}

}
export {
	PricingDetails as MasterModel,
	PricingDetails as PricingDetails
}
