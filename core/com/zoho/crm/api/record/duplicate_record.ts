import {MinifiedModule} from "../modules/minified_module";
import {MinifiedUser} from "../users/minified_user";
import {Model} from "../../../../../../utils/util/model";

class DuplicateRecord implements Model{

	private owner: MinifiedUser;
	private module: MinifiedModule;
	private id: bigint;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the owner
	 * @returns An instance of MinifiedUser
	 */
	public getOwner(): MinifiedUser	{
		return this.owner;

	}

	/**
	 * The method to set the value to owner
	 * @param owner An instance of MinifiedUser
	 */
	public setOwner(owner: MinifiedUser): void	{
		this.owner = owner;
		this.keyModified.set("Owner", 1);

	}

	/**
	 * The method to get the module
	 * @returns An instance of MinifiedModule
	 */
	public getModule(): MinifiedModule	{
		return this.module;

	}

	/**
	 * The method to set the value to module
	 * @param module An instance of MinifiedModule
	 */
	public setModule(module: MinifiedModule): void	{
		this.module = module;
		this.keyModified.set("module", 1);

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
	DuplicateRecord as MasterModel,
	DuplicateRecord as DuplicateRecord
}
