import {Model} from "../../../../../../utils/util/model";

class Address implements Model{

	private country: string;
	private city: string;
	private pinCode: string;
	private state: string;
	private fillAddress: string;
	private keyModified: Map<string, number> = new Map<string, number>();
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
	 * The method to get the city
	 * @returns A String representing the city
	 */
	public getCity(): string	{
		return this.city;

	}

	/**
	 * The method to set the value to city
	 * @param city A String representing the city
	 */
	public setCity(city: string): void	{
		this.city = city;
		this.keyModified.set("city", 1);

	}

	/**
	 * The method to get the pinCode
	 * @returns A String representing the pinCode
	 */
	public getPinCode(): string	{
		return this.pinCode;

	}

	/**
	 * The method to set the value to pinCode
	 * @param pinCode A String representing the pinCode
	 */
	public setPinCode(pinCode: string): void	{
		this.pinCode = pinCode;
		this.keyModified.set("pin_code", 1);

	}

	/**
	 * The method to get the state
	 * @returns A String representing the state
	 */
	public getState(): string	{
		return this.state;

	}

	/**
	 * The method to set the value to state
	 * @param state A String representing the state
	 */
	public setState(state: string): void	{
		this.state = state;
		this.keyModified.set("state", 1);

	}

	/**
	 * The method to get the fillAddress
	 * @returns A String representing the fillAddress
	 */
	public getFillAddress(): string	{
		return this.fillAddress;

	}

	/**
	 * The method to set the value to fillAddress
	 * @param fillAddress A String representing the fillAddress
	 */
	public setFillAddress(fillAddress: string): void	{
		this.fillAddress = fillAddress;
		this.keyModified.set("fill_address", 1);

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
