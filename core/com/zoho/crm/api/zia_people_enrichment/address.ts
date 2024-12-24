import {Model} from "../../../../../../utils/util/model";

class Address implements Model{

	private continent: string;
	private country: string;
	private name: string;
	private region: string;
	private primary: boolean;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the continent
	 * @returns A String representing the continent
	 */
	public getContinent(): string	{
		return this.continent;

	}

	/**
	 * The method to set the value to continent
	 * @param continent A String representing the continent
	 */
	public setContinent(continent: string): void	{
		this.continent = continent;
		this.keyModified.set("continent", 1);

	}

	/**
	 * The method to get the country
	 * @returns A String representing the country
	 */
	public getCountry(): string	{
		return this.country;

	}

	/**
	 * The method to set the value to country
	 * @param country A String representing the country
	 */
	public setCountry(country: string): void	{
		this.country = country;
		this.keyModified.set("country", 1);

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
	 * The method to get the region
	 * @returns A String representing the region
	 */
	public getRegion(): string	{
		return this.region;

	}

	/**
	 * The method to set the value to region
	 * @param region A String representing the region
	 */
	public setRegion(region: string): void	{
		this.region = region;
		this.keyModified.set("region", 1);

	}

	/**
	 * The method to get the primary
	 * @returns A Boolean representing the primary
	 */
	public getPrimary(): boolean	{
		return this.primary;

	}

	/**
	 * The method to set the value to primary
	 * @param primary A Boolean representing the primary
	 */
	public setPrimary(primary: boolean): void	{
		this.primary = primary;
		this.keyModified.set("primary", 1);

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
	Address as MasterModel,
	Address as Address
}
