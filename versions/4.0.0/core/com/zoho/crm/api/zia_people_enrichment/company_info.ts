import {Experience} from "./experience";
import {Industry} from "./industry";
import {Model} from "../../../../../../utils/util/model";

class CompanyInfo implements Model{

	private name: string;
	private industries: Array<Industry>;
	private experiences: Array<Experience>;
	private keyModified: Map<string, number> = new Map<string, number>();
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
	 * The method to get the industries
	 * @returns An Array representing the industries
	 */
	public getIndustries(): Array<Industry>	{
		return this.industries;

	}

	/**
	 * The method to set the value to industries
	 * @param industries An Array representing the industries
	 */
	public setIndustries(industries: Array<Industry>): void	{
		this.industries = industries;
		this.keyModified.set("industries", 1);

	}

	/**
	 * The method to get the experiences
	 * @returns An Array representing the experiences
	 */
	public getExperiences(): Array<Experience>	{
		return this.experiences;

	}

	/**
	 * The method to set the value to experiences
	 * @param experiences An Array representing the experiences
	 */
	public setExperiences(experiences: Array<Experience>): void	{
		this.experiences = experiences;
		this.keyModified.set("experiences", 1);

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
	CompanyInfo as MasterModel,
	CompanyInfo as CompanyInfo
}
