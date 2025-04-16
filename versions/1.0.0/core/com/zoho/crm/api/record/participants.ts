import {Record} from "./record";
import {Tag} from "../tags/tag";
import {MinifiedUser} from "../users/minified_user";
import {Model} from "../../../../../../utils/util/model";

class Participants extends Record implements Model{

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

	/**
	 * The method to get the email
	 * @returns A String representing the email
	 */
	public getEmail(): string	{
		return this.getKeyValue("Email");

	}

	/**
	 * The method to set the value to email
	 * @param email A String representing the email
	 */
	public setEmail(email: string): void	{
		this.addKeyValue("Email", email);

	}

	/**
	 * The method to get the invited
	 * @returns A Boolean representing the invited
	 */
	public getInvited(): boolean	{
		return this.getKeyValue("invited");

	}

	/**
	 * The method to set the value to invited
	 * @param invited A Boolean representing the invited
	 */
	public setInvited(invited: boolean): void	{
		this.addKeyValue("invited", invited);

	}

	/**
	 * The method to get the type
	 * @returns A String representing the type
	 */
	public getType(): string	{
		return this.getKeyValue("type");

	}

	/**
	 * The method to set the value to type
	 * @param type A String representing the type
	 */
	public setType(type: string): void	{
		this.addKeyValue("type", type);

	}

	/**
	 * The method to get the participant
	 * @returns A String representing the participant
	 */
	public getParticipant(): string	{
		return this.getKeyValue("participant");

	}

	/**
	 * The method to set the value to participant
	 * @param participant A String representing the participant
	 */
	public setParticipant(participant: string): void	{
		this.addKeyValue("participant", participant);

	}

	/**
	 * The method to get the status
	 * @returns A String representing the status
	 */
	public getStatus(): string	{
		return this.getKeyValue("status");

	}

	/**
	 * The method to set the value to status
	 * @param status A String representing the status
	 */
	public setStatus(status: string): void	{
		this.addKeyValue("status", status);

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

}
export {
	Participants as MasterModel,
	Participants as Participants
}
