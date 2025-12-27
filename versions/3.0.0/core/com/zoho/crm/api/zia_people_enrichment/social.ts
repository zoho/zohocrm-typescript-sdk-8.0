import {Model} from "../../../../../../utils/util/model";

class Social implements Model{

	private twitter: string;
	private facebook: string;
	private linkedin: string;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the twitter
	 * @returns A String representing the twitter
	 */
	public getTwitter(): string	{
		return this.twitter;

	}

	/**
	 * The method to set the value to twitter
	 * @param twitter A String representing the twitter
	 */
	public setTwitter(twitter: string): void	{
		this.twitter = twitter;
		this.keyModified.set("twitter", 1);

	}

	/**
	 * The method to get the facebook
	 * @returns A String representing the facebook
	 */
	public getFacebook(): string	{
		return this.facebook;

	}

	/**
	 * The method to set the value to facebook
	 * @param facebook A String representing the facebook
	 */
	public setFacebook(facebook: string): void	{
		this.facebook = facebook;
		this.keyModified.set("facebook", 1);

	}

	/**
	 * The method to get the linkedin
	 * @returns A String representing the linkedin
	 */
	public getLinkedin(): string	{
		return this.linkedin;

	}

	/**
	 * The method to set the value to linkedin
	 * @param linkedin A String representing the linkedin
	 */
	public setLinkedin(linkedin: string): void	{
		this.linkedin = linkedin;
		this.keyModified.set("linkedin", 1);

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
	Social as MasterModel,
	Social as Social
}
