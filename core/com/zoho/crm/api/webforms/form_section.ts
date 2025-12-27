import {Fields} from "./fields";
import {Model} from "../../../../../../utils/util/model";

class FormSection implements Model{

	private formFields: Array<Fields>;
	private name: string;
	private description: string;
	private helpMessage: string;
	private id: string;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the formFields
	 * @returns An Array representing the formFields
	 */
	public getFormFields(): Array<Fields>	{
		return this.formFields;

	}

	/**
	 * The method to set the value to formFields
	 * @param formFields An Array representing the formFields
	 */
	public setFormFields(formFields: Array<Fields>): void	{
		this.formFields = formFields;
		this.keyModified.set("form_fields", 1);

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
	 * The method to get the description
	 * @returns A String representing the description
	 */
	public getDescription(): string	{
		return this.description;

	}

	/**
	 * The method to set the value to description
	 * @param description A String representing the description
	 */
	public setDescription(description: string): void	{
		this.description = description;
		this.keyModified.set("description", 1);

	}

	/**
	 * The method to get the helpMessage
	 * @returns A String representing the helpMessage
	 */
	public getHelpMessage(): string	{
		return this.helpMessage;

	}

	/**
	 * The method to set the value to helpMessage
	 * @param helpMessage A String representing the helpMessage
	 */
	public setHelpMessage(helpMessage: string): void	{
		this.helpMessage = helpMessage;
		this.keyModified.set("help_message", 1);

	}

	/**
	 * The method to get the id
	 * @returns A String representing the id
	 */
	public getId(): string	{
		return this.id;

	}

	/**
	 * The method to set the value to id
	 * @param id A String representing the id
	 */
	public setId(id: string): void	{
		this.id = id;
		this.keyModified.set("id", 1);

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
	FormSection as MasterModel,
	FormSection as FormSection
}
