import {Layout} from "./layout";
import {Module} from "./module";
import {Model} from "../../../../../../utils/util/model";

class Fields implements Model{

	private layout: Layout;
	private help: string;
	private field: Fields;
	private module: Module;
	private secretKey: string;
	private recaptchaLabel: string;
	private hidden: boolean;
	private siteKey: string;
	private advanced: boolean;
	private apiName: string;
	private fieldLabel: string;
	private theme: string;
	private id: bigint;
	private required: boolean;
	private fieldName: string;
	private dateFormat: string;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the layout
	 * @returns An instance of Layout
	 */
	public getLayout(): Layout	{
		return this.layout;

	}

	/**
	 * The method to set the value to layout
	 * @param layout An instance of Layout
	 */
	public setLayout(layout: Layout): void	{
		this.layout = layout;
		this.keyModified.set("layout", 1);

	}

	/**
	 * The method to get the help
	 * @returns A String representing the help
	 */
	public getHelp(): string	{
		return this.help;

	}

	/**
	 * The method to set the value to help
	 * @param help A String representing the help
	 */
	public setHelp(help: string): void	{
		this.help = help;
		this.keyModified.set("help", 1);

	}

	/**
	 * The method to get the field
	 * @returns An instance of Fields
	 */
	public getField(): Fields	{
		return this.field;

	}

	/**
	 * The method to set the value to field
	 * @param field An instance of Fields
	 */
	public setField(field: Fields): void	{
		this.field = field;
		this.keyModified.set("field", 1);

	}

	/**
	 * The method to get the module
	 * @returns An instance of Module
	 */
	public getModule(): Module	{
		return this.module;

	}

	/**
	 * The method to set the value to module
	 * @param module An instance of Module
	 */
	public setModule(module: Module): void	{
		this.module = module;
		this.keyModified.set("module", 1);

	}

	/**
	 * The method to get the secretKey
	 * @returns A String representing the secretKey
	 */
	public getSecretKey(): string	{
		return this.secretKey;

	}

	/**
	 * The method to set the value to secretKey
	 * @param secretKey A String representing the secretKey
	 */
	public setSecretKey(secretKey: string): void	{
		this.secretKey = secretKey;
		this.keyModified.set("secret_key", 1);

	}

	/**
	 * The method to get the recaptchaLabel
	 * @returns A String representing the recaptchaLabel
	 */
	public getRecaptchaLabel(): string	{
		return this.recaptchaLabel;

	}

	/**
	 * The method to set the value to recaptchaLabel
	 * @param recaptchaLabel A String representing the recaptchaLabel
	 */
	public setRecaptchaLabel(recaptchaLabel: string): void	{
		this.recaptchaLabel = recaptchaLabel;
		this.keyModified.set("recaptcha_label", 1);

	}

	/**
	 * The method to get the hidden
	 * @returns A Boolean representing the hidden
	 */
	public getHidden(): boolean	{
		return this.hidden;

	}

	/**
	 * The method to set the value to hidden
	 * @param hidden A Boolean representing the hidden
	 */
	public setHidden(hidden: boolean): void	{
		this.hidden = hidden;
		this.keyModified.set("hidden", 1);

	}

	/**
	 * The method to get the siteKey
	 * @returns A String representing the siteKey
	 */
	public getSiteKey(): string	{
		return this.siteKey;

	}

	/**
	 * The method to set the value to siteKey
	 * @param siteKey A String representing the siteKey
	 */
	public setSiteKey(siteKey: string): void	{
		this.siteKey = siteKey;
		this.keyModified.set("site_key", 1);

	}

	/**
	 * The method to get the advanced
	 * @returns A Boolean representing the advanced
	 */
	public getAdvanced(): boolean	{
		return this.advanced;

	}

	/**
	 * The method to set the value to advanced
	 * @param advanced A Boolean representing the advanced
	 */
	public setAdvanced(advanced: boolean): void	{
		this.advanced = advanced;
		this.keyModified.set("advanced", 1);

	}

	/**
	 * The method to get the apiName
	 * @returns A String representing the apiName
	 */
	public getAPIName(): string	{
		return this.apiName;

	}

	/**
	 * The method to set the value to apiName
	 * @param apiName A String representing the apiName
	 */
	public setAPIName(apiName: string): void	{
		this.apiName = apiName;
		this.keyModified.set("api_name", 1);

	}

	/**
	 * The method to get the fieldLabel
	 * @returns A String representing the fieldLabel
	 */
	public getFieldLabel(): string	{
		return this.fieldLabel;

	}

	/**
	 * The method to set the value to fieldLabel
	 * @param fieldLabel A String representing the fieldLabel
	 */
	public setFieldLabel(fieldLabel: string): void	{
		this.fieldLabel = fieldLabel;
		this.keyModified.set("field_label", 1);

	}

	/**
	 * The method to get the theme
	 * @returns A String representing the theme
	 */
	public getTheme(): string	{
		return this.theme;

	}

	/**
	 * The method to set the value to theme
	 * @param theme A String representing the theme
	 */
	public setTheme(theme: string): void	{
		this.theme = theme;
		this.keyModified.set("theme", 1);

	}

	/**
	 * The method to get the id
	 * @returns A BigInt representing the id
	 */
	public getId(): bigint	{
		return this.id;

	}

	/**
	 * The method to set the value to id
	 * @param id A BigInt representing the id
	 */
	public setId(id: bigint): void	{
		this.id = id;
		this.keyModified.set("id", 1);

	}

	/**
	 * The method to get the required
	 * @returns A Boolean representing the required
	 */
	public getRequired(): boolean	{
		return this.required;

	}

	/**
	 * The method to set the value to required
	 * @param required A Boolean representing the required
	 */
	public setRequired(required: boolean): void	{
		this.required = required;
		this.keyModified.set("required", 1);

	}

	/**
	 * The method to get the fieldName
	 * @returns A String representing the fieldName
	 */
	public getFieldName(): string	{
		return this.fieldName;

	}

	/**
	 * The method to set the value to fieldName
	 * @param fieldName A String representing the fieldName
	 */
	public setFieldName(fieldName: string): void	{
		this.fieldName = fieldName;
		this.keyModified.set("field_name", 1);

	}

	/**
	 * The method to get the dateFormat
	 * @returns A String representing the dateFormat
	 */
	public getDateFormat(): string	{
		return this.dateFormat;

	}

	/**
	 * The method to set the value to dateFormat
	 * @param dateFormat A String representing the dateFormat
	 */
	public setDateFormat(dateFormat: string): void	{
		this.dateFormat = dateFormat;
		this.keyModified.set("date_format", 1);

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
	Fields as MasterModel,
	Fields as Fields
}
