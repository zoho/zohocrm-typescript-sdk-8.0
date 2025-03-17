import {Section} from "./section";
import {Tpt} from "./tpt";
import {Model} from "../../../../../../utils/util/model";

class Config implements Model{

	private tpt: Array<Tpt>;
	private section: Array<Section>;
	private zohoInteg: Array<Tpt>;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the tpt
	 * @returns An Array representing the tpt
	 */
	public getTpt(): Array<Tpt>	{
		return this.tpt;

	}

	/**
	 * The method to set the value to tpt
	 * @param tpt An Array representing the tpt
	 */
	public setTpt(tpt: Array<Tpt>): void	{
		this.tpt = tpt;
		this.keyModified.set("tpt", 1);

	}

	/**
	 * The method to get the section
	 * @returns An Array representing the section
	 */
	public getSection(): Array<Section>	{
		return this.section;

	}

	/**
	 * The method to set the value to section
	 * @param section An Array representing the section
	 */
	public setSection(section: Array<Section>): void	{
		this.section = section;
		this.keyModified.set("section", 1);

	}

	/**
	 * The method to get the zohoInteg
	 * @returns An Array representing the zohoInteg
	 */
	public getZohoInteg(): Array<Tpt>	{
		return this.zohoInteg;

	}

	/**
	 * The method to set the value to zohoInteg
	 * @param zohoInteg An Array representing the zohoInteg
	 */
	public setZohoInteg(zohoInteg: Array<Tpt>): void	{
		this.zohoInteg = zohoInteg;
		this.keyModified.set("zoho_integ", 1);

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
	Config as MasterModel,
	Config as Config
}
