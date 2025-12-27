import {Model} from "../../../../../../utils/util/model";

class SocialMedia implements Model{

	private mediaType: string;
	private mediaUrl: Array<string>;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the mediaType
	 * @returns A String representing the mediaType
	 */
	public getMediaType(): string	{
		return this.mediaType;

	}

	/**
	 * The method to set the value to mediaType
	 * @param mediaType A String representing the mediaType
	 */
	public setMediaType(mediaType: string): void	{
		this.mediaType = mediaType;
		this.keyModified.set("media_type", 1);

	}

	/**
	 * The method to get the mediaUrl
	 * @returns An Array representing the mediaUrl
	 */
	public getMediaUrl(): Array<string>	{
		return this.mediaUrl;

	}

	/**
	 * The method to set the value to mediaUrl
	 * @param mediaUrl An Array representing the mediaUrl
	 */
	public setMediaUrl(mediaUrl: Array<string>): void	{
		this.mediaUrl = mediaUrl;
		this.keyModified.set("media_url", 1);

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
	SocialMedia as MasterModel,
	SocialMedia as SocialMedia
}
