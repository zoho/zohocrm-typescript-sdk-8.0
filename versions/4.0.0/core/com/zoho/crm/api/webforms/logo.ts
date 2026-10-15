import {Model} from "../../../../../../utils/util/model";

class Logo implements Model{

	private imageName: string;
	private align: string;
	private size: string;
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
	 * The method to get the align
	 * @returns A String representing the align
	 */
	public getAlign(): string	{
		return this.align;

	}

	/**
	 * The method to set the value to align
	 * @param align A String representing the align
	 */
	public setAlign(align: string): void	{
		this.align = align;
		this.keyModified.set("align", 1);

	}

	/**
	 * The method to get the size
	 * @returns A String representing the size
	 */
	public getSize(): string	{
		return this.size;

	}

	/**
	 * The method to set the value to size
	 * @param size A String representing the size
	 */
	public setSize(size: string): void	{
		this.size = size;
		this.keyModified.set("size", 1);

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
	Logo as MasterModel,
	Logo as Logo
}
