import {Choice} from "../../../../../../utils/util/choice";
import {Model} from "../../../../../../utils/util/model";

class Portal implements Model{

	private id: bigint;
	private userTypeId: bigint;
	private type: Choice<string>;
	private language: Choice<string>;
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
	 * The method to get the userTypeId
	 * @returns A BigInt representing the userTypeId
	 */
	public getUserTypeId(): bigint	{
		return this.userTypeId;

	}

	/**
	 * The method to set the value to userTypeId
	 * @param userTypeId A BigInt representing the userTypeId
	 */
	public setUserTypeId(userTypeId: bigint): void	{
		this.userTypeId = userTypeId;
		this.keyModified.set("user_type_id", 1);

	}

	/**
	 * The method to get the type
	 * @returns An instance of Choice<string>
	 */
	public getType(): Choice<string>	{
		return this.type;

	}

	/**
	 * The method to set the value to type
	 * @param type An instance of Choice<string>
	 */
	public setType(type: Choice<string>): void	{
		this.type = type;
		this.keyModified.set("type", 1);

	}

	/**
	 * The method to get the language
	 * @returns An instance of Choice<string>
	 */
	public getLanguage(): Choice<string>	{
		return this.language;

	}

	/**
	 * The method to set the value to language
	 * @param language An instance of Choice<string>
	 */
	public setLanguage(language: Choice<string>): void	{
		this.language = language;
		this.keyModified.set("language", 1);

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
	Portal as MasterModel,
	Portal as Portal
}
