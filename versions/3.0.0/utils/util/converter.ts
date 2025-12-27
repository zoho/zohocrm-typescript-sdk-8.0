import { SDKException } from "../../core/com/zoho/crm/api/exception/sdk_exception";
import { Initializer } from "../../routes/initializer";
import { CommonAPIHandler } from "../../routes/middlewares/common_api_handler";
import { Choice } from "./choice";
import { Constants } from "./constants";
import path from "path";
import { OAuthToken } from "../../models/authenticator/oauth_token";

/**
 * This class is to construct API request and response.
 */
export abstract class Converter {
	protected commonAPIHandler: CommonAPIHandler;

	/**
	 * Creates a Converter class instance with the CommonAPIHandler class instance.
	 * @param {CommonAPIHandler} commonAPIHandler - A CommonAPIHandler class instance.
	 */
	constructor(commonAPIHandler: CommonAPIHandler) {
		this.commonAPIHandler = commonAPIHandler;
	}

	/**
	 * This abstract method is to process the API response.
	 * @param {object} response - An Object containing the API response contents or response.
	 * @param {string} pack - A String containing the expected method return type.
	 * @returns An Object representing the class instance.
	 * @throws {Error}
	 */
	public abstract getResponse(response: any, pack: string): Promise<object | null>;

	/**
	 * This method is to construct the API request.
	 * @param {object} requestInstance - An Object containing the class instance.
	 * @param {string} pack - A String containing the expected method return type.
	 * @param {int} instanceNumber - An Integer containing the class instance list number.
	 * @param {object} memberDetail - An object containing the member properties
	 * @returns An Object representing the API request body object.
	 * @throws {Error}
	 */
	public abstract formRequest(requestInstance: object, pack: string, instanceNumber: number | null, memberDetail: object | null): Promise<object | null>;

	/**
	 * This abstract method is to construct the API request body.
	 * @param {object} requestBase
	 * @param {object} requestObject - A Object containing the API request body object.
	 * @throws {Error}
	 */
	public abstract appendToRequest(requestBase: object): Promise<any>;

	/**
	 * This abstract method is to process the API response.
	 * @param {object} response - An Object containing the HttpResponse class instance.
	 * @param {string} pack - A String containing the expected method return type.
	 * @returns An Array representing the class instance and ResponseJSON.
	 * @throws {Error}
	 */
	public abstract getWrappedResponse(response: any, pack: string): Promise<(object|null)[] | null>;

	/**
	 * This method is to validate if the input values satisfy the constraints for the respective fields.
	 * @param {string} className - A String containing the class name.
	 * @param {string} memberName - A String containing the member name.
	 * @param {object} keyDetails - A JSONObject containing the key JSON details.
	 * @param {object} value - A Object containing the key value.
	 * @param {Map} uniqueValuesMap - A Map containing the value of constructed object's unique fields.
	 * @param {int} instanceNumber - An Integer containing the class instance list number.
	 * @returns A Boolean representing the key value is expected pattern, unique, length, and values.
	 * @throws {SDKException}
	 */
	public async valueChecker(className: string, memberName: string, keyDetails: { [key: string]: any }, value: any, uniqueValuesMap: Map<string, any[]>, instanceNumber: number | null): Promise<boolean> {
		let detailsJO: { [key: string]: any } = {};
		var name: string = keyDetails[Constants.NAME];
		var type: string = keyDetails[Constants.TYPE];
		var valueType = Object.prototype.toString.call(value);
		let check: boolean = true;
		let givenType = null;
		if (keyDetails[Constants.INTERFACE]) {
			let interfaceDetail = Initializer.jsonDetails[keyDetails[Constants.STRUCTURE_NAME]];
			let classes = interfaceDetail[Constants.CLASSES];
			check = false;
			if (classes != null) {
				for (let i = 0 ; i<classes.length ; i++) {
					let className = (await import("../../" + classes[i])).MasterModel;
					if (value instanceof className) {
						check = true;
					}
				}
			}
		}
		if (Constants.TYPE_VS_DATATYPE.has(type.toLowerCase())) {
			if (Array.isArray(value) && keyDetails.hasOwnProperty(Constants.STRUCTURE_NAME)) {
				let structureName = keyDetails[Constants.STRUCTURE_NAME];
				let index = 0;
				let className = (await import("../../" + structureName)).MasterModel;
				for (let data of value) {
					if (!(data instanceof className)) {
						check = false;
						instanceNumber = index;
						let baseName = structureName.split("/").pop();
						let classNameSplit = baseName.split("_");
						let expectedClassName = "";
						for (var nameIndex = 0; nameIndex < classNameSplit.length; nameIndex++) {
							var fieldName = classNameSplit[nameIndex];
							var firstLetterUppercase = fieldName[0].toUpperCase() + fieldName.slice(1);
							expectedClassName = expectedClassName.concat(firstLetterUppercase);
						}
						type = Constants.ARRAY_KEY + "(" + expectedClassName + ")";
						givenType = Constants.ARRAY_KEY + "(" + data.constructor.name + ")";
						break;
					}
					index = index + 1;
				}
			} else if(Array.isArray(value) && keyDetails.hasOwnProperty(Constants.SUB_TYPE)) {
				let index = 0;
				for (let data of value) {
					let subType = keyDetails[Constants.SUB_TYPE];
					let sub_type = subType[Constants.TYPE];
					let dataType;
					if(sub_type.toLowerCase() == Constants.OBJECT_KEY) {
						check = true;
					} else {
						dataType = Constants.SPECIAL_TYPES.has(sub_type.toLowerCase()) ? Constants.SPECIAL_TYPES.get(sub_type.toLowerCase()) : sub_type;
						if (Constants.TYPE_VS_DATATYPE.has(dataType.toLowerCase())) {
							if (Object.prototype.toString.call(data) != Constants.TYPE_VS_DATATYPE.get(sub_type.toLowerCase())) {
								check = false;
							}
						}
					}
					if(!check) {
						instanceNumber = index;
						type = Constants.ARRAY_KEY + "(" + dataType + ")";
						givenType = Constants.ARRAY_KEY + "(" + Object.getPrototypeOf(data).constructor.name + ")";
						break;
					}
					index = index + 1;
				}
			} else if (value != null) {//TypeScript don't have int type
				check = (valueType != Constants.TYPE_VS_DATATYPE.get(type.toLowerCase()) ? false : true);
				givenType = Object.getPrototypeOf(value).constructor.name;
			}
		}
		else if (value != null && type.toLowerCase() !== Constants.OBJECT_KEY) {
			let expectedStructure = keyDetails[Constants.TYPE];
			if (expectedStructure == "TimeZone") {
				check = value.hasOwnProperty("name");
			} else {
				if (!keyDetails[Constants.INTERFACE]) {
					let className = (await import("../../" + expectedStructure)).MasterModel;
					if (!(value instanceof className)) {
						check = false;
						type = expectedStructure;
						givenType = value.constructor.name;
					}
					if (check == false) {
						if (givenType.toLowerCase() == Constants.INVENTORYTEMPLATE && type.toLowerCase() == Constants.TEMPLATE) {
							check = true;
						}
					}
				}
			}
		}
		if (!check) {
			detailsJO[Constants.ERROR_HASH_FIELD] = name;
			detailsJO[Constants.ERROR_HASH_CLASS] = className;
			detailsJO[Constants.ACCEPTED_TYPE] = Constants.SPECIAL_TYPES.has(type) ? Constants.SPECIAL_TYPES.get(type) : type;
			detailsJO[Constants.GIVEN_TYPE] = givenType;
			if (instanceNumber != null) {
				detailsJO[Constants.INDEX] = instanceNumber;
			}
			throw new SDKException(Constants.TYPE_ERROR, null, detailsJO);
		}
		let initializer = await Initializer.getInitializer().catch((err) => { throw err });
		if (keyDetails.hasOwnProperty(Constants.VALUES) && (!keyDetails.hasOwnProperty(Constants.PICKLIST) || (keyDetails[Constants.PICKLIST] && initializer.getSDKConfig().getPickListValidation()))) {
			let valuesJA = keyDetails[Constants.VALUES];
			await Converter.checkChoiceValue(memberName, className, instanceNumber, value, detailsJO, valuesJA);
		}
		if (keyDetails.hasOwnProperty(Constants.UNIQUE)) {
			let valuesArray: any[] | undefined = uniqueValuesMap.get(name);
			if (valuesArray !== undefined && valuesArray.includes(value)) {
				detailsJO[Constants.ERROR_HASH_FIELD] = memberName;
				detailsJO[Constants.ERROR_HASH_CLASS] = className;
				detailsJO[Constants.FIRST_INDEX] = valuesArray.indexOf(value);
				detailsJO[Constants.NEXT_INDEX] = instanceNumber;
				throw new SDKException(Constants.UNIQUE_KEY_ERROR, null, detailsJO);
			}
			else {
				if (valuesArray === undefined) {
					valuesArray = [];
				}
				valuesArray.push(value);
				uniqueValuesMap.set(name, valuesArray);
			}
		}
		if (keyDetails.hasOwnProperty(Constants.MIN_LENGTH) || keyDetails.hasOwnProperty(Constants.MAX_LENGTH)) {
			let count = value.toString().length;
			if (Array.isArray(value)) {
				count = value.length;
			}
			if (keyDetails.hasOwnProperty(Constants.MAX_LENGTH) && (count > keyDetails[Constants.MAX_LENGTH])) {
				detailsJO[Constants.ERROR_HASH_FIELD] = memberName;
				detailsJO[Constants.ERROR_HASH_CLASS] = className;
				detailsJO[Constants.GIVEN_LENGTH] = count;
				detailsJO[Constants.ERROR_HASH_MAXIMUM_LENGTH] = keyDetails[Constants.MAX_LENGTH];
				throw new SDKException(Constants.MAXIMUM_LENGTH_ERROR, null, detailsJO);
			}
			if (keyDetails.hasOwnProperty(Constants.MIN_LENGTH) && count < keyDetails[Constants.MIN_LENGTH]) {
				detailsJO[Constants.ERROR_HASH_FIELD] = memberName;
				detailsJO[Constants.ERROR_HASH_CLASS] = className;
				detailsJO[Constants.GIVEN_LENGTH] = count;
				detailsJO[Constants.ERROR_HASH_MINIMUM_LENGTH] = keyDetails[Constants.MIN_LENGTH];
				throw new SDKException(Constants.MINIMUM_LENGTH_ERROR, null, detailsJO);
			}
		}
		return true;
	}

	public static async checkChoiceValue1(className: string, keyDetails:  { [key: string]: any }, value: object) {
		var name = keyDetails[Constants.NAME];
		let initializer = await Initializer.getInitializer().catch((err) => { throw err });
		if (initializer == null) {
			throw new SDKException(Constants.SDK_UNINITIALIZATION_ERROR, Constants.SDK_UNINITIALIZATION_MESSAGE);
		}
		if (keyDetails.hasOwnProperty(Constants.VALUES) && name != null && initializer.getSDKConfig().getPickListValidation()) {
			await this.checkChoiceValue(name, className, 0, value, {}, keyDetails[Constants.VALUES]);
		}
	}

	public static async checkChoiceValue(memberName : string, className: string, instanceNumber: number|null, value: object, detailsJO: { [key: string]: any }, valuesJA: any) {
		if (Array.isArray(value)) {
			for (let value_2 of value) {
				if (value_2 instanceof Choice) {
					value_2 = value_2.getValue();
				}
				if (!valuesJA.includes(value_2)) {
					detailsJO[Constants.ERROR_HASH_FIELD] = memberName;
					detailsJO[Constants.ERROR_HASH_CLASS] = className;
					if (instanceNumber != null) {
						detailsJO[Constants.INDEX] = instanceNumber;
					}
					detailsJO[Constants.GIVEN_VALUE] = value;
					detailsJO[Constants.ACCEPTED_VALUES] = valuesJA;
					throw new SDKException(Constants.UNACCEPTED_VALUES_ERROR, null, detailsJO);
				}
			}
		}
		else {
			if (value instanceof Choice) {
				value = value.getValue();
			}
			if (!valuesJA.includes(value)) {
				detailsJO[Constants.ERROR_HASH_FIELD] = memberName;
				detailsJO[Constants.ERROR_HASH_CLASS] = className;
				if (instanceNumber != null) {
					detailsJO[Constants.INDEX] = instanceNumber;
				}
				detailsJO[Constants.GIVEN_VALUE] = value;
				detailsJO[Constants.ACCEPTED_VALUES] = valuesJA;
				throw new SDKException(Constants.UNACCEPTED_VALUES_ERROR, null, detailsJO);
			}
		}
	}

	/**
	 * getEncodedFileName
	 */
	public static async getEncodedFileName() {
		let initializer = await Initializer.getInitializer().catch((err) => { throw err });
		let token = initializer.getToken();
		let accessToken : string|null = "";
		let refreshToken : string | null = "";
		let tokenKey : string | null= "";
		if (token instanceof OAuthToken) {
			let user = token.getUserSignature();
			if(user != null) {
				tokenKey = user.getName();
			} else {
				refreshToken = token.getRefreshToken();
				if (refreshToken != null && refreshToken.length > 0) {
					tokenKey = refreshToken.substring(refreshToken.length - 32);
				}
				else {
					accessToken = token.getAccessToken();
					if (accessToken != null && accessToken.length > 0) {
						tokenKey = accessToken.substring(accessToken.length - 32);
					}
				}
			}
		}
		let fileName : string = initializer.getEnvironment().getUrl();
		if (tokenKey != null && tokenKey.length > 0) {
			fileName = fileName + tokenKey;
		}
		var input = this.toUTF8Array(fileName);
		var str : string = Buffer.from(input).toString('base64');
		let filepath : string = path.join(initializer.getResourcePath(), Constants.FIELD_DETAILS_DIRECTORY);
		return path.join(filepath, str + ".json");
	}

	public static toUTF8Array(str: string) {
		var utf8 = [];
		for (var i = 0; i < str.length; i++) {
			var charcode = str.charCodeAt(i);
			if (charcode < 0x80) utf8.push(charcode);
			else if (charcode < 0x800) {
				utf8.push(0xc0 | (charcode >> 6), 0x80 | (charcode & 0x3f));
			} else if (charcode < 0xd800 || charcode >= 0xe000) {
				utf8.push(0xe0 | (charcode >> 12), 0x80 | ((charcode >> 6) & 0x3f), 0x80 | (charcode & 0x3f));
			} else {
				i++;
				// UTF-16 encodes 0x10000-0x10FFFF by
				// subtracting 0x10000 and splitting the
				// 20 bits of 0x0-0xFFFFF into two halves
				charcode = 0x10000 + (((charcode & 0x3ff) << 10) | (str.charCodeAt(i) & 0x3ff));
				utf8.push(0xf0 | (charcode >> 18), 0x80 | ((charcode >> 12) & 0x3f), 0x80 | ((charcode >> 6) & 0x3f), 0x80 | (charcode & 0x3f));
			}
		}
		return utf8;
	}

	public async moduleToClass(moduleName : string) : Promise<string> {
		let className = moduleName;
		if (moduleName.includes("_")) {
			className = '';
			let moduleSplit : Array<string>= moduleName.split("_");
			for (let eachName in moduleSplit) {
				eachName = eachName.charAt(0).toUpperCase() + eachName.slice(1);
				className = className + eachName;
			}
		}
		else {
			className = moduleName.charAt(0).toUpperCase() + className.slice(1);
		}
		return className;
	}
	
	public async getFileName(name: string) : Promise<string> {
		let fileName = [];
		let nameParts = name.split(/([A-Z][a-z]+)/).filter(function (e) { return e });
		fileName.push(nameParts[0].toLowerCase());
		for (let i = 1; i < nameParts.length; i++) {
			fileName.push(nameParts[i].toLowerCase());
		}
		return fileName.join("_");
	}
}