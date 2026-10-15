import {Model} from "../../../../../../utils/util/model";

class Translation implements Model{

	private publicViews: string;
	private otherUsersViews: string;
	private sharedWithMe: string;
	private createdByMe: string;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the publicViews
	 * @returns A String representing the publicViews
	 */
	public getPublicViews(): string	{
		return this.publicViews;

	}

	/**
	 * The method to set the value to publicViews
	 * @param publicViews A String representing the publicViews
	 */
	public setPublicViews(publicViews: string): void	{
		this.publicViews = publicViews;
		this.keyModified.set("public_views", 1);

	}

	/**
	 * The method to get the otherUsersViews
	 * @returns A String representing the otherUsersViews
	 */
	public getOtherUsersViews(): string	{
		return this.otherUsersViews;

	}

	/**
	 * The method to set the value to otherUsersViews
	 * @param otherUsersViews A String representing the otherUsersViews
	 */
	public setOtherUsersViews(otherUsersViews: string): void	{
		this.otherUsersViews = otherUsersViews;
		this.keyModified.set("other_users_views", 1);

	}

	/**
	 * The method to get the sharedWithMe
	 * @returns A String representing the sharedWithMe
	 */
	public getSharedWithMe(): string	{
		return this.sharedWithMe;

	}

	/**
	 * The method to set the value to sharedWithMe
	 * @param sharedWithMe A String representing the sharedWithMe
	 */
	public setSharedWithMe(sharedWithMe: string): void	{
		this.sharedWithMe = sharedWithMe;
		this.keyModified.set("shared_with_me", 1);

	}

	/**
	 * The method to get the createdByMe
	 * @returns A String representing the createdByMe
	 */
	public getCreatedByMe(): string	{
		return this.createdByMe;

	}

	/**
	 * The method to set the value to createdByMe
	 * @param createdByMe A String representing the createdByMe
	 */
	public setCreatedByMe(createdByMe: string): void	{
		this.createdByMe = createdByMe;
		this.keyModified.set("created_by_me", 1);

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
	Translation as MasterModel,
	Translation as Translation
}
