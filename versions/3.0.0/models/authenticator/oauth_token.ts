import {Initializer} from '../../routes/initializer';
import {Token} from './token';
import {Constants} from '../../utils/util/constants';
import {UserSignature} from '../../routes/user_signature';
import * as Logger from 'winston';
import {SDKException} from '../../core/com/zoho/crm/api/exception/sdk_exception';
import got from 'got';
import FormData = require("form-data");
import {APIHTTPConnector} from "../../routes/controllers/api_http_connector";
import {Environment} from "../../routes/dc/environment";
import {DataCenter} from "../../routes/dc/data_center";
import { Utility } from "../../utils/util/utility";

/**
 * This class maintains the tokens and authenticates every request.
*/
export class OAuthToken implements Token {
    private clientID: string | null;
    private clientSecret: string | null;
    private redirectURL: string | null;
    private grantToken: string | null;
    private refreshToken: string | null;
    private accessToken: string | null;
    private expiresIn: string;
    private id: string | null;
    private userSignature : UserSignature | null;
    private apiDomain : string | null;
    private findUser: Boolean = true;

    /**
     * This is a getter method to get APIDomain.
     * @returns A String representing the APIDomain.
     */
    public getAPIDomain(){
        return this.apiDomain;
    }

    /**
     * This is a setter method to set APIDomain.
     * @param {string} apiDomain - A String containing the APIDomain.
     */
    public setAPIDomain(apiDomain : string | null){
        this.apiDomain = apiDomain;
    }

    /**
     * This is a setter method to get OAuth UserSignature
     * @param {UserSignature} userSignature - The instance of UserSignature contains username
     */
    public setUserSignature(userSignature : UserSignature| null) {
        this.userSignature = userSignature;
    }

    /**
     * This is a getter method to get OAuth UserSignature.
     * @returns An instance of UserSignature contains username.
     */
    public getUserSignature() {
        return this.userSignature;
    }
    /**
     * This is a setter method to set OAuth client id.
     * @param {string} clientID - A String containing the client Id.
     */
    public setClientId(clientID: string) {
        this.clientID = clientID;
    }

    /**
     * This is a getter method to get OAuth client id.
     * @returns A String representing the OAuth client id.
    */
    public getClientId(): string | null {
        return this.clientID;
    }

    /**
     * This is a setter method to set OAuth client secret.
     * @param {string} clientSecret - A String containing the client Secret.
     */
    public setClientSecret(clientSecret: string) {
        this.clientSecret = clientSecret;
    }

    /**
     * This is a getter method to get OAuth client secret.
     * @returns A String representing the OAuth client secret.
    */
    public getClientSecret(): string | null {
        return this.clientSecret;
    }

    /**
     * This is a setter method to set OAuth redirect URL.
     * @param {string} redirectURL - A String containing the redirectURL.
     */
    public setRedirectURL(redirectURL: string | null) {
        this.redirectURL = redirectURL;
    }

    /**
     * This is a getter method to get OAuth redirect URL.
     * @returns A String representing the OAuth redirect URL.
    */
    public getRedirectURL(): string | null {
        return this.redirectURL;
    }

    /**
     * This is a setter method to set grant token.
     * @param {string} grantToken - A String containing the grantToken.
     */
    public setGrantToken(grantToken: string | null) {
        this.grantToken = grantToken;
    }

    /**
     * This is a getter method to get grant token.
     * @returns A String representing the grant token.
    */
    public getGrantToken(): string | null {
        return this.grantToken;
    }

    /**
     * This is a getter method to get refresh token.
     * @returns A String representing the refresh token.
    */
    public getRefreshToken(): string | null {
        return this.refreshToken;
    }

    /**
     * This is a setter method to set refresh token.
     * @param {string} refreshToken - A String containing the refresh token.
    */
    public setRefreshToken(refreshToken: string | null) {
        this.refreshToken = refreshToken;
    }

    /**
     * This is a getter method to get access token.
     * @returns A String representing the access token.
    */
    public getAccessToken(): string | null {
        return this.accessToken;
    }

    /**
     * This is a setter method to set access token.
     * @param {string} accessToken A String containing the access token.
    */
    public setAccessToken(accessToken: string | null) {
        this.accessToken = accessToken;
    }

    /**
     * This is a getter method to get token expire time.
     * @returns A String representing the token expire time.
    */
    public getExpiresIn(): string {
        return this.expiresIn;
    }

    /**
     * This is a setter method to set token expire time.
     * @param {string} expiresIn A String containing the token expire time.
    */
    public setExpiresIn(expiresIn: string) {
        this.expiresIn = expiresIn;
    }

    /**
     * This is a getter method to get the id
     * @returns the id
    */
    public getId(): string | null {
        return this.id;
    }

    /**
     * This is a setter method to set the id
     * @param {String} id A String containing the id
    */
    public setId(id: string | null) {
        this.id = id;
    }

    public async generateToken() {
        await this.getToken().catch((err) => { throw err });
    }
    public async getToken() {
        let initializer: Initializer = await Initializer.getInitializer().catch((err) => { throw err });
        let store = initializer.getStore();
        let oauthToken = null;
        let idToSearch = this.getId();
        if (idToSearch != null) {
            oauthToken = await store.findTokenById(idToSearch).catch((err) => { throw err });
            await this.mergeObjects(this, oauthToken);
            if (oauthToken instanceof OAuthToken) {
                oauthToken.findUser = this.findUser;
            }
        } else {
            oauthToken = await store.findToken(this).catch((err) => { throw err });
        }
        if (oauthToken == null) {
            if (this.getUserSignature() != null) {
                await this.checkTokenDetails().catch((err) => { throw err });
            }
            oauthToken = this;
        }
        if (oauthToken instanceof OAuthToken) {
            if (oauthToken.getAPIDomain() == null || oauthToken.getAPIDomain()!.length <= 0) {
                if (initializer.getEnvironment() == null) {
                    throw new SDKException(Constants.ENVIRONMENT_ERROR_1, Constants.ENVIRONMENT_ERROR_MESSAGE.concat(" : "));
                }
                oauthToken.setAPIDomain(initializer.getEnvironment().getUrl());
            }
            let api_domain = oauthToken.getAPIDomain();
            if (api_domain != null) {
                let environment: Environment | null = await DataCenter.get(api_domain);
                if (environment != null) {
                    try{
                        let initializer = await Initializer.getInitializer().catch((err) => { throw err });
                        Object.keys(initializer).forEach(field=>{
                           if (field == Constants.ENVIRONMENT1){
                               Reflect.set(initializer, field, environment);
                           }
                        });
                    } catch (error) {
                        if (error instanceof SDKException) {
                            throw error;
                        } else if (error instanceof Error) {
                            throw new SDKException(Constants.ENVIRONMENT_ERROR_RESPONSE.concat(" : "), null, null, error);
                        }
                    }
                } else {
                    if (initializer.getEnvironment() == null) {
                        throw new SDKException(Constants.ENVIRONMENT_ERROR_1, Constants.ENVIRONMENT_ERROR_RESPONSE.concat(" : "));
                    }
                }
            }
            let url: string = initializer.getEnvironment().getAccountsUrl();
            let save: Boolean = false;
            if (oauthToken.getAccessToken() == null || oauthToken.getAccessToken()!.length == 0) {
                if (oauthToken.getRefreshToken() != null && (oauthToken.getRefreshToken()!.length > 0)) {
                    Logger.info(Constants.ACCESS_TOKEN_USING_REFRESH_TOKEN_MESSAGE);
                    await oauthToken.refreshAccessToken(oauthToken, url).catch((err) => { throw err });
                } else {
                    Logger.info(Constants.ACCESS_TOKEN_USING_GRANT_TOKEN_MESSAGE);
                    await oauthToken.generateAccessToken(oauthToken, url).catch((err) => { throw err});
                }
                save = true;
            } else if (oauthToken.getExpiresIn() != null && parseInt(oauthToken.getExpiresIn()) > 0 && this.getTokenExpiry(oauthToken)) {
                Logger.info(Constants.REFRESH_TOKEN_MESSAGE);
                await oauthToken.refreshAccessToken(oauthToken, url).catch((err) => { throw err });
                save = true;
            } else if (oauthToken.getExpiresIn() == null && oauthToken.getAccessToken() != null && oauthToken.getId() == null) {
                save = true;
            }
            if(save) {
                try {
                  if(oauthToken.getUserSignature() == null && oauthToken.findUser) {
                      try {
                        let utility = new Utility();
                        let userName: string | null = await utility.getUserName(oauthToken.accessToken).catch((err) => { throw err });
                        if(userName != null) {
                            await oauthToken.setUserSignature(new UserSignature(userName));
                        }
                      } catch (e) {
                        Logger.error(Constants.API_EXCEPTION, e);
                      }
                  }
                  await store.saveToken(oauthToken).catch((err) => { throw err });
                } catch (e) {
                  throw new SDKException(Constants.SAVE_TOKEN_ERROR, null, null, e);
                }
            }
            return oauthToken.getAccessToken();
        }
    }
    public async authenticate(urlConnection : APIHTTPConnector) {
        if(!urlConnection.getHeaders().has(Constants.AUTHORIZATION)) {
            await urlConnection.addHeader(Constants.AUTHORIZATION, Constants.OAUTH_HEADER_PREFIX + await this.getToken().catch((err) => { throw err }));
        }
    }

    getTokenExpiry(oauthToken : OAuthToken) {
        let num = (parseInt(oauthToken.getExpiresIn()) - new Date().getTime());
        return num < 5000;
    }
    private async checkTokenDetails() {
        if (this.getGrantToken() == null && this.getRefreshToken() == null) {
            throw new SDKException(Constants.MANDATORY_VALUE_ERROR, Constants.GET_TOKEN_BY_USER_NAME_ERROR + " - " + Constants.OAUTH_MANDATORY_KEYS2.join())
        }
        return true;
    }

    private async mergeObjects(first : OAuthToken | null, second : Token | void |  null) {
        if (first != null && second != null) {
            let fieldsArray = Object.keys(first);
            fieldsArray.forEach(field => {
                let value1 = Reflect.get(first, field);
                let value2 = Reflect.get(second, field);
                let value = (value1 != null) ? value1 : value2;
                Reflect.set(first, field, value);
            });
        }
    }

   private async refreshAccessToken(oauthToken : OAuthToken, url : string) {
       var formDataRequestBody = new FormData();
       formDataRequestBody.append(Constants.CLIENT_ID, oauthToken.getClientId());
       formDataRequestBody.append(Constants.CLIENT_SECRET, oauthToken.getClientSecret());
       formDataRequestBody.append(Constants.GRANT_TYPE, Constants.REFRESH_TOKEN);
       formDataRequestBody.append(Constants.REFRESH_TOKEN, oauthToken.getRefreshToken());
       const requestDetails = {
           method: Constants.REQUEST_METHOD_POST,
           headers: {},
           body: formDataRequestBody,
           encoding: "utf8",
           allowGetBody: true,
           throwHttpErrors: false,
       };
       var response = await this.getResponse(url, requestDetails).catch((err) => { throw err });
       try {
           await this.parseResponse(oauthToken, response.body).catch((err) => { throw err });
       } catch (error) {
           if (error instanceof SDKException) {
               throw error;
           } else if (error instanceof Error) {
               throw new SDKException(Constants.SAVE_TOKEN_ERROR, null, null, error);
           }
       }
       return oauthToken;
   }

  private async generateAccessToken(oauthToken: OAuthToken, url : string) {
      var formDataRequestBody = new FormData();
      formDataRequestBody.append(Constants.CLIENT_ID, oauthToken.getClientId());
      formDataRequestBody.append(Constants.CLIENT_SECRET, oauthToken.getClientSecret());
      if (oauthToken.getRedirectURL() != null) {
          formDataRequestBody.append(Constants.REDIRECT_URI, oauthToken.getRedirectURL());
      }
      formDataRequestBody.append(Constants.GRANT_TYPE, Constants.GRANT_TYPE_AUTH_CODE);
      formDataRequestBody.append(Constants.CODE, oauthToken.getGrantToken());
      const requestDetails = {
          method: Constants.REQUEST_METHOD_POST,
          headers: {},
          body: formDataRequestBody,
          encoding: "utf8",
          allowGetBody: true,
          throwHttpErrors: false,
      };
      var response = await this.getResponse(url, requestDetails).catch((err) => { throw err });
      try {
          await this.parseResponse(oauthToken, response.body).catch((err) => { throw err });
      } catch (error) {
          if (error instanceof SDKException) {
              throw error;
          } else if (error instanceof Error) {
              throw new SDKException(Constants.SAVE_TOKEN_ERROR, null, null, error);
          }
      }
      return oauthToken;
    }

    async getResponse(url: string, requestDetails: {}) {
        return got(url, requestDetails);
    }

    async parseResponse(oauthToken : OAuthToken, response: string) {
        var responseJSON = JSON.parse(response);
        let initializer = await Initializer.getInitializer().catch((err) => { throw err });
        let sdkConfig = initializer.getSDKConfig();
        if (!responseJSON.hasOwnProperty(Constants.ACCESS_TOKEN)) {
            throw new SDKException(Constants.INVALID_TOKEN_ERROR, responseJSON.hasOwnProperty(Constants.ERROR_KEY) ? responseJSON[Constants.ERROR_KEY].toString() : Constants.NO_ACCESS_TOKEN_ERROR);
        }
        oauthToken.setAccessToken(responseJSON[Constants.ACCESS_TOKEN]);
        this.expiresIn = (new Date().getTime() + (await this.getTokenExpiryTime(responseJSON))).toString();
        if (responseJSON.hasOwnProperty(Constants.REFRESH_TOKEN)) {
            oauthToken.setRefreshToken(responseJSON[Constants.REFRESH_TOKEN]);
        }
        if (responseJSON.hasOwnProperty(Constants.API_DOMAIN)) {
            oauthToken.setAPIDomain(responseJSON[Constants.API_DOMAIN]);
        }
        if (sdkConfig.applyAPIDomainUpdate() && responseJSON.hasOwnProperty(Constants.API_DOMAIN)) {
            oauthToken.setAPIDomain(responseJSON[Constants.API_DOMAIN]);
        }
        return oauthToken;
    }

    getTokenExpiryTime(response: any) {
        return response.hasOwnProperty(Constants.EXPIRES_IN_SEC) ? response[Constants.EXPIRES_IN] : response[Constants.EXPIRES_IN] * 1000;
    }

    async remove(): Promise<boolean> {
        try {
            let initializer = await Initializer.getInitializer().catch((err) => { throw err });
            let idToDelete = this.getId();
            if (idToDelete != null) {
                await initializer.getStore().deleteToken(idToDelete).catch((err) => { throw err });
                return true;
            }
        } catch (error) {
            if (error instanceof SDKException) {
                throw error;
            } else if (error instanceof Error) {
                throw new SDKException(null, null, null, error);
            }
        }
        return false;
    }

    public async revoke(id : string) : Promise<boolean | undefined> {
        try {
            if (await Initializer.getInitializer().catch((err) => { throw err }) == null) {
                throw new SDKException(Constants.SDK_UNINITIALIZATION_ERROR, Constants.SDK_UNINITIALIZATION_MESSAGE);
            }
            var initializer = await Initializer.getInitializer().catch((err) => { throw err });
            let store = initializer.getStore();
            let url = initializer.getEnvironment().getAccountsUrl();
            let isRevoke : boolean | undefined = false;
            let oauthToken = await Reflect.construct(OAuthToken, [null]);
            oauthToken.setId(id);
            store.findToken(oauthToken);
            if (oauthToken != null && oauthToken.getRefreshToken() != null) {
                isRevoke = await this.revokeRefreshToken(oauthToken.getRefreshToken(), url + Constants.REVOKE_URL).catch((err) => { throw err });
                Logger.info(Constants.ID + ":" + id + Constants.REFRESH_TOKEN_REMOVED);
            }
            else {
                Logger.warn(Constants.ID + ":" + id + Constants.TOKEN_NOT_FOUND);
            }
            return isRevoke;
        } catch (error) {
            if (!(error instanceof SDKException)) {
                error = new SDKException(null, null, null, error);
            }
            throw error;
        }
    }

    public async revokeRefreshToken(refreshToken : string, url : string): Promise<boolean | undefined> {
        var formDataRequestBody = new FormData();
        formDataRequestBody.append(Constants.TOKEN, refreshToken);
        const requestDetails = {
            method: Constants.REQUEST_METHOD_POST,
            headers: {},
            body: formDataRequestBody,
            encoding: "utf8",
            allowGetBody: true,
            throwHttpErrors: false,
        };
        try {
            let response = await this.getResponse(url, requestDetails).catch((err) => { throw err });
            let responseJSON = JSON.parse(response.body);
            return !!(responseJSON != null && responseJSON.has(Constants.STATUS) && responseJSON[Constants.STATUS] == Constants.STATUS_SUCCESS);
        } catch (error) {
            if (error instanceof SDKException) {
                throw error;
            } else if (error instanceof Error) {
                throw new SDKException(Constants.REVOKE_TOKEN_ERROR,null, null, error);
            }
        }
        return false;
    }
    /**
     * Creates an OAuthToken class instance with the specified parameters.
     * @param {String} clientID - A String containing the OAuth client id.
     * @param {String} clientSecret - A String containing the OAuth client secret.
     * @param {String} grantToken - A String containing the GRANT token.
     * @param {String} refreshToken - A String containing the REFRESH token.
     * @param {String} redirectURL - A String containing the OAuth redirect URL.
     * @param {String} id - A string
     * @param {string} accessToken - A string containing the OAuth AccessToken.
     * @param {UserSignature} userSignature - An instance of UserSignature containing the UserName.
     */
    constructor(clientID: string | null, clientSecret: string | null, grantToken: string | null, refreshToken: string | null, redirectURL: string | null, id: string | null, accessToken: string | null, userSignature : UserSignature|null, findUser: Boolean = true) {
        this.clientID = clientID;
        this.clientSecret = clientSecret;
        this.grantToken = grantToken;
        this.refreshToken = refreshToken;
        this.redirectURL = redirectURL;
        this.accessToken = accessToken;
        this.id = id;
        this.userSignature = userSignature;
        this.findUser = findUser;
    }
}