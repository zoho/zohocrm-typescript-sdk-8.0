import {DefaultAssignmentView} from "./default_assignment_view";
import {DefaultView} from "./default_view";
import {Model} from "../../../../../../utils/util/model";

class Profiles implements Model{

	private default1: boolean;
	private name: string;
	private id: bigint;
	private defaultview: DefaultView;
	private defaultassignmentview: DefaultAssignmentView;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the default
	 * @returns A Boolean representing the default1
	 */
	public getDefault(): boolean	{
		return this.default1;

	}

	/**
	 * The method to set the value to default
	 * @param default1 A Boolean representing the default1
	 */
	public setDefault(default1: boolean): void	{
		this.default1 = default1;
		this.keyModified.set("default", 1);

	}

	/**
	 * The method to get the name
	 * @returns A String representing the name
	 */
	public getName(): string	{
		return this.name;

	}

	/**
	 * The method to set the value to name
	 * @param name A String representing the name
	 */
	public setName(name: string): void	{
		this.name = name;
		this.keyModified.set("name", 1);

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
	 * The method to get the defaultview
	 * @returns An instance of DefaultView
	 */
	public getDefaultview(): DefaultView	{
		return this.defaultview;

	}

	/**
	 * The method to set the value to defaultview
	 * @param defaultview An instance of DefaultView
	 */
	public setDefaultview(defaultview: DefaultView): void	{
		this.defaultview = defaultview;
		this.keyModified.set("_default_view", 1);

	}

	/**
	 * The method to get the defaultassignmentview
	 * @returns An instance of DefaultAssignmentView
	 */
	public getDefaultassignmentview(): DefaultAssignmentView	{
		return this.defaultassignmentview;

	}

	/**
	 * The method to set the value to defaultassignmentview
	 * @param defaultassignmentview An instance of DefaultAssignmentView
	 */
	public setDefaultassignmentview(defaultassignmentview: DefaultAssignmentView): void	{
		this.defaultassignmentview = defaultassignmentview;
		this.keyModified.set("_default_assignment_view", 1);

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
	Profiles as MasterModel,
	Profiles as Profiles
}
