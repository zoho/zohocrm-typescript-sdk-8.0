import {Property} from "./property";
import {Model} from "../../../../../../utils/util/model";

class Definition implements Model{

	private rootElementName: string;
	private extradetails: Map<string, any>;
	private properties: Array<Property>;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the rootElementName
	 * @returns A String representing the rootElementName
	 */
	public getRootElementName(): string	{
		return this.rootElementName;

	}

	/**
	 * The method to set the value to rootElementName
	 * @param rootElementName A String representing the rootElementName
	 */
	public setRootElementName(rootElementName: string): void	{
		this.rootElementName = rootElementName;
		this.keyModified.set("root_element_name", 1);

	}

	/**
	 * The method to get the extradetails
	 * @returns A Map representing the extradetails
	 */
	public getExtradetails(): Map<string, any>	{
		return this.extradetails;

	}

	/**
	 * The method to set the value to extradetails
	 * @param extradetails A Map representing the extradetails
	 */
	public setExtradetails(extradetails: Map<string, any>): void	{
		this.extradetails = extradetails;
		this.keyModified.set("extraDetails", 1);

	}

	/**
	 * The method to get the properties
	 * @returns An Array representing the properties
	 */
	public getProperties(): Array<Property>	{
		return this.properties;

	}

	/**
	 * The method to set the value to properties
	 * @param properties An Array representing the properties
	 */
	public setProperties(properties: Array<Property>): void	{
		this.properties = properties;
		this.keyModified.set("properties", 1);

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
	Definition as MasterModel,
	Definition as Definition
}
