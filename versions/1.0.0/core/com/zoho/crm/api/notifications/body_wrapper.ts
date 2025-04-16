import {Notification} from "./notification";
import {Model} from "../../../../../../utils/util/model";

class BodyWrapper implements Model{

	private watch: Array<Notification>;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the watch
	 * @returns An Array representing the watch
	 */
	public getWatch(): Array<Notification>	{
		return this.watch;

	}

	/**
	 * The method to set the value to watch
	 * @param watch An Array representing the watch
	 */
	public setWatch(watch: Array<Notification>): void	{
		this.watch = watch;
		this.keyModified.set("watch", 1);

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
	BodyWrapper as MasterModel,
	BodyWrapper as BodyWrapper
}
