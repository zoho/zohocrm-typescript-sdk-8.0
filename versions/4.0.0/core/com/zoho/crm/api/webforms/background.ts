import {Model} from "../../../../../../utils/util/model";

class Background implements Model{

	private imageName: string;
	private color: string;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the imageName
	 * @returns A String representing the imageName
	 */
	public getImageName(): string	{
		return this.imageName;

	}

	/**
	 * The method to set the value to imageName
	 * @param imageName A String representing the imageName
	 */
	public setImageName(imageName: string): void	{
		this.imageName = imageName;
		this.keyModified.set("image_name", 1);

	}

	/**
	 * The method to get the color
	 * @returns A String representing the color
	 */
	public getColor(): string	{
		return this.color;

	}

	/**
	 * The method to set the value to color
	 * @param color A String representing the color
	 */
	public setColor(color: string): void	{
		this.color = color;
		this.keyModified.set("color", 1);

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
	Background as MasterModel,
	Background as Background
}
