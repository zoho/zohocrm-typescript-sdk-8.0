/**
Copyright (c) 2021, ZOHO CORPORATION PRIVATE LIMITED 
All rights reserved. 
 
   Licensed under the Apache License, Version 2.0 (the "License"); 
   you may not use this file except in compliance with the License. 
   You may obtain a copy of the License at 
 
       http://www.apache.org/licenses/LICENSE-2.0 
 
   Unless required by applicable law or agreed to in writing, software 
   distributed under the License is distributed on an "AS IS" BASIS, 
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. 
   See the License for the specific language governing permissions and 
   limitations under the License. 
**/

import * as Logger from 'winston';
import * as path from "path";
import { Environment } from './dc/environment';
import { Token } from '../models/authenticator/token';
import { RequestProxy } from './request_proxy';
import { SDKConfig } from './sdk_config';
import { TokenStore } from '../models/authenticator/store/token_store';
import * as LoggerFile from './logger/logger';
import { Constants } from '../utils/util/constants';
import { SDKLogger } from './logger/sdk_logger';
import { SDKException } from '../core/com/zoho/crm/api/exception/sdk_exception';
import { OAuthToken } from "../models/authenticator/oauth_token";

/**
 * The class to initialize Zoho CRM SDK.
 */
export class Initializer {
	private static LOCAL: Map<string, Initializer> = new Map<string, Initializer>();
	public static initializer: Initializer;
	private _environment: Environment;
	private _store: TokenStore;
	private _token: Token;
	public static jsonDetails: { [key: string]: { [key: string]: any } };
	private _resourcePath: string;
	private _requestProxy: RequestProxy | undefined;
	private _sdkConfig: SDKConfig;

	/**
	 * The method is to initialize the SDK.
	 * @param {Environment} environment - A Environment class instance containing the CRM API base URL and Accounts URL.
	 * @param {Token} token - A Token class instance containing the OAuth client application information.
	 * @param {TokenStore} store - A TokenStore class instance containing the token store information.
	 * @param {SDKConfig} sdkConfig - A SDKConfig class instance containing the configuration.
	 * @param {String} resourcePath - A String containing the absolute directory path to store user specific JSON files containing module fields information.
	 * @param {LoggerFile.Logger} logger - A Logger class instance containing the log file path and Logger type.
	 * @param {RequestProxy} proxy - A RequestProxy class instance containing the proxy properties of the user.
	 * @throws {SDKException}
	 */
	public static async initialize(environment: Environment, token: Token, store: TokenStore, sdkConfig: SDKConfig, resourcePath: string, logger: LoggerFile.Logger, proxy?: RequestProxy) {
		try {
			SDKLogger.initialize(logger);
			try {
				if (Initializer.jsonDetails == null) {
					Initializer.jsonDetails = Initializer.getJSON(path.join(__dirname, "..", Constants.CONFIG_DIRECTORY, Constants.JSON_DETAILS_FILE_PATH));
				}
			} catch (ex) {
				throw new SDKException(Constants.JSON_DETAILS_ERROR, null, null, ex);
			}
			let initializer = new Initializer();
			initializer._environment = environment;
			initializer._token = token;
			initializer._store = store;
			initializer._sdkConfig = sdkConfig;
			initializer._resourcePath = resourcePath;
			initializer._requestProxy = proxy;
			Initializer.initializer = initializer;
			initializer._token = token;
			if (token != null && token instanceof OAuthToken) {
				await token.generateToken().catch((err) => {throw err});
			}
			initializer._token = token;
			Initializer.initializer = initializer;
			Initializer.LOCAL.set(await initializer.getEncodedKey(), initializer);
			Logger.info(Constants.INITIALIZATION_SUCCESSFUL.concat(initializer.getEnvironment().getUrl()));
		} catch (err) {
			if (!(err instanceof SDKException)) {
				err = new SDKException(null, null, null, err);
			}
			throw err;
		}
	}

	/**
	 * This method to get record field and class details.
	 * @param filePath A String containing the file path.
	 * @returns A JSON representing the class information details.
	 */
	public static getJSON(filePath: string): any {
		let fs = require('fs');
		let fileData = fs.readFileSync(filePath);
		return JSON.parse(fileData);
	}

	/**
	 * This method is to get Initializer class instance.
	 * @returns A Initializer class instance representing the SDK configuration details.
	 */
	public static async getInitializer(): Promise<Initializer> {
		if (Array.from(Initializer.LOCAL.keys()).length > 0) {
			let initializer = new Initializer();
			let encodedKey = await initializer.getEncodedKey();
			if (Initializer.LOCAL.has(encodedKey)) {
				let value = Initializer.LOCAL.get(encodedKey);
				if (value !== undefined) {
					return value;
				}
			}
		}
		return Initializer.initializer;
	}

	/**
	 * This method is to switch the different user in SDK environment.
	 * @param {Environment} environment - A Environment class instance containing the CRM API base URL and Accounts URL.
	 * @param {Token} token - A Token class instance containing the OAuth client application information.
	 * @param {SDKConfig} sdkConfig - A SDKConfig instance representing the configuration
	 * @param {RequestProxy} proxy - A RequestProxy class instance containing the proxy properties.
	 */
	public static async switchUser(environment: Environment, token: Token, sdkConfig: SDKConfig, proxy?: RequestProxy) {
		let initializer = new Initializer();
		initializer._environment = environment;
		initializer._token = token;
		initializer._store = Initializer.initializer.getStore();
		initializer._sdkConfig = sdkConfig;
		initializer._requestProxy = proxy;
		initializer._resourcePath = Initializer.initializer.getResourcePath();
		if (token != null && token instanceof OAuthToken) {
			await token.generateToken();
		}
		initializer._token = token;
		Initializer.LOCAL.set(await initializer.getEncodedKey(), initializer);
		Initializer.initializer = initializer;
		Logger.info(Constants.INITIALIZATION_SWITCHED.concat(await Initializer.initializer.toString()))
	}

	/**
	 * This is a getter method to get API environment.
	 * @returns A Environment representing the API environment.
	 */
	public getEnvironment(): Environment {
		return this._environment;
	}

	/**
	 * This is a getter method to get Token Store.
	 * @returns A TokenStore class instance containing the token store information.
	 */
	public getStore(): TokenStore {
		return this._store;
	}

	/**
	 * This is a getter method to get Proxy information.
	 * @returns {RequestProxy} A RequestProxy class instance representing the API Proxy information.
	 */
	public getRequestProxy(): RequestProxy | undefined {
		return this._requestProxy;
	}

	/**
	 * This is a getter method to get OAuth client application information.
	 * @returns {Token} A Token class instance representing the OAuth client application information.
	 */
	public getToken(): Token {
		return this._token;
	}

	/**
	 * This is a getter method to get resourcePath value.
	 * @returns {string} A String value representing the resourcePath.
	 */
	public getResourcePath(): string {
		return this._resourcePath;
	}

	/**
	 * This is a getter method to get the SDK Configuration
	 * @returns {SDKConfig} A SDKConfig instance representing the configuration
	 */
	public getSDKConfig(): SDKConfig {
		return this._sdkConfig;
	}

	static async removeUserConfiguration(token: OAuthToken) {
		let initializer = new Initializer();
		let oauthtoken = Initializer.initializer.getToken();
		if (token instanceof OAuthToken && oauthtoken instanceof OAuthToken) {
			if (token.getId() == oauthtoken.getId()) {
				let key = await initializer.getEncodedKey();
				if (Initializer.LOCAL.has(key)) {
					Initializer.LOCAL.delete(key);
				}
				else {
					let exception = new SDKException(null, Constants.USER_NOT_FOUND_ERROR_MESSAGE);
					Logger.info(Constants.USER_NOT_FOUND_ERROR, exception);
					throw exception;
				}
			}
		}
	}

	public async getEncodedKey() : Promise<string>{
		let initializer = Initializer.initializer;
		let token = initializer.getToken();
		let key : string = "";
		if (token instanceof OAuthToken) {
			let oauthToken = token;
			let user = oauthToken.getUserSignature();
			if(user != null) {
				key = user.getName();
			}
			let refreshToken : string|null= oauthToken.getRefreshToken();
			if (refreshToken != null && refreshToken.length > 0) {
				key = refreshToken.substring(refreshToken.length - 32);
			}
			else {
				let accessToken : string|null = oauthToken.getAccessToken();
				if (accessToken != null && accessToken.length > 0) {
					key = accessToken.substring(accessToken.length - 32);
				}
			}
		}
		let tokenKey : string = Initializer.initializer.getEnvironment().getUrl();
		if (key != null && key.length > 0) {
			tokenKey = tokenKey + key;
		}
		return Buffer.from(this.toUTF8Array(tokenKey)).toString('base64');
	}

	private async toString() {
		return (Constants.IN_ENVIRONMENT).concat((await Initializer.initializer)._environment.getUrl()).concat(".");
	}

	toUTF8Array(str: string) {
		var utf8 = [];
		for (var i = 0; i < str.length; i++) {
			var charcode = str.charCodeAt(i);
			if (charcode < 0x80) utf8.push(charcode);
			else if (charcode < 0x800) {
				utf8.push(0xc0 | (charcode >> 6), 0x80 | (charcode & 0x3f));
			}
			else if (charcode < 0xd800 || charcode >= 0xe000) {
				utf8.push(0xe0 | (charcode >> 12), 0x80 | ((charcode >> 6) & 0x3f), 0x80 | (charcode & 0x3f));
			}
			else {
				i++;
				charcode = 0x10000 + (((charcode & 0x3ff) << 10) | (str.charCodeAt(i) & 0x3ff));
				utf8.push(0xf0 | (charcode >> 18), 0x80 | ((charcode >> 12) & 0x3f), 0x80 | ((charcode >> 6) & 0x3f), 0x80 | (charcode & 0x3f));
			}
		}
		return utf8;
	}
}