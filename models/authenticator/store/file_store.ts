import * as fs from 'fs';
import { SDKException } from '../../../core/com/zoho/crm/api/exception/sdk_exception';
import { UserSignature } from "../../../routes/user_signature";
import { Constants } from "../../../utils/util/constants";
import { OAuthToken } from '../oauth_token';
import { Token } from "../token";
import { TokenStore } from "./token_store";

/**
 * This class stores the user token details to the file.
*/
export class FileStore implements TokenStore {
    private filePath: string;
    private headers: string[];

    /**
     * Creates an FileStore class instance with the specified parameters.
     * @param {string} filePath
    */
    constructor(filePath: string) {
        this.filePath = filePath;
        let isCreate : boolean = false;
        this.headers = [Constants.ID, Constants.USER_MAIL, Constants.CLIENT_ID, Constants.CLIENT_SECRET, Constants.REFRESH_TOKEN, Constants.ACCESS_TOKEN, Constants.GRANT_TOKEN, Constants.EXPIRY_TIME, Constants.REDIRECT_URL, Constants.API_DOMAIN];
        if(!fs.existsSync(this.filePath) || (fs.existsSync(this.filePath) && fs.readFileSync(this.filePath, 'utf-8') === "")) {
            isCreate = true;
            fs.writeFileSync(filePath, this.headers.join(), 'utf-8');
        }
        if (!isCreate){
            try {
                var allContents : string[] = fs.readFileSync(this.filePath, 'utf-8').toString().split("\n");
                let headers : string[] = allContents[0].split(",");
                if (headers.length == 9) {
                    for (let i = 0; i< allContents.length ; i++)
                    {
                        let content = allContents[i];
                        const arr = content.split(",");
                        const newArr = arr.slice();
                        newArr.push('');
                        content = newArr.join();
                        allContents[i] = content;
                    }
                    allContents[0] = this.headers.join();
                    fs.writeFileSync(this.filePath, allContents.join("\n"));
                }
            } catch (error) {
                throw error;
            }
        }
    }

    async findToken(token: OAuthToken) : Promise<Token | null>  {
        try {
            var csvReader = fs.readFileSync(this.filePath, 'utf-8').toString().split("\n");
            let oauthToken = token;
            let isRowPresent = false;
            for (let index = 1; index < csvReader.length; index++) {
                let allcontents = csvReader[index];
                let nextRecord : string[] = allcontents.split(",");
                if (nextRecord.length > 1) {
                    isRowPresent = await this.checkCondition(oauthToken, nextRecord);
                    if (isRowPresent) {
                        await this.setMergeData(oauthToken, nextRecord);
                        return oauthToken;
                    }
                }
            }
            if (!isRowPresent) {
                return null;
            }
        } catch (error) {
            throw new SDKException(Constants.TOKEN_STORE, Constants.GET_TOKEN_FILE_ERROR, null, error);
        }
        return null;
    }

    async saveToken(token : OAuthToken) : Promise<void> {
        try {
            let oauthToken = token;
            var csvReader = fs.readFileSync(this.filePath, 'utf-8').toString().split("\n");
            let isRowPresent = false;
            for (var index = 1; index < csvReader.length; index++) {
                var allcontents = csvReader[index];
                let nextRecord = allcontents.split(",");
                if (nextRecord.length > 1) {
                    if (oauthToken.getId() != null) {
                        let id = await this.getData(nextRecord[0]);
                        if (id != null && oauthToken.getId() != null && id == oauthToken.getId()) {
                            isRowPresent = true;
                        }
                    } else {
                        isRowPresent = await this.checkCondition(oauthToken, nextRecord);
                    }
                    if (isRowPresent) {
                        await this.setMergeData(oauthToken, nextRecord)
                        csvReader.splice(index, 1, (await this.setToken(oauthToken)).join(","));
                        break;
                    }
                } else {
                    csvReader.slice(index, csvReader.length + 1);
                }
            }
            if (!isRowPresent) {
                if (oauthToken.getId() != null || oauthToken.getUserSignature() != null) {
                    if (oauthToken.getRefreshToken() == null && oauthToken.getGrantToken() == null && oauthToken.getAccessToken() == null) {
                        throw new SDKException(Constants.TOKEN_STORE, Constants.GET_TOKEN_FILE_ERROR1);
                    }
                }
                if (oauthToken.getId() == null) {
                    let newID = await this.generateID(csvReader);
                    oauthToken.setId(newID);
                }
                csvReader.push((await this.setToken(oauthToken)).join(","))
                fs.writeFileSync(this.filePath, csvReader.join("\n"));
            }
            if (isRowPresent) {
                fs.writeFileSync(this.filePath, csvReader.join("\n"));
            }
        } catch (err) {
            if (err instanceof SDKException) {
                throw err;
            } else {
                throw new SDKException(Constants.TOKEN_STORE, Constants.SAVE_TOKEN_FILE_ERROR, null, err);
            }
        }
        finally {
        }
    }

    async deleteToken(id: string) : Promise<void>{
        try {
            var csvReader = fs.readFileSync(this.filePath, 'utf-8').toString().split("\n");
            let isRowPresent = false;
            for (let index = 1; index < csvReader.length; index++) {
                let allcontents = csvReader[index];
                let nextRecord = allcontents.split(",");
                if (nextRecord.length > 1) {
                    let recordId = await this.getData(nextRecord[0]);
                    if (recordId == id) {
                        isRowPresent = true;
                        csvReader.splice(index, 1);
                    }
                }
            }
            if (isRowPresent) {
                fs.writeFileSync(this.filePath, csvReader.join("\n"), 'utf8');
            } else {
                throw new SDKException(Constants.TOKEN_STORE, Constants.GET_TOKEN_BY_ID_FILE_ERROR);
            }
        } catch (err) {
            if (err instanceof SDKException) {
                throw err;
            } else {
                throw new SDKException(Constants.TOKEN_STORE, Constants.DELETE_TOKEN_FILE_ERROR, null, err);
            }
        }
    }

    async getTokens(): Promise<Token[] | null> {
        try {
            var tokens = [];
            var array = fs.readFileSync(this.filePath,'utf-8').toString().split("\n");
            for (var i = 1; i < array.length; i++) {
                let allContents : string = array[i];
                if (allContents.length == 0) {
                    continue;
                }
                let nextRecord = allContents.split(",");
                let oauthToken : OAuthToken = Reflect.construct(OAuthToken, []);
                await this.setMergeData(oauthToken, nextRecord);
                tokens.push(oauthToken);
            }
            return tokens;
        }
        catch (error) {
            throw new SDKException(Constants.TOKEN_STORE, Constants.GET_TOKENS_FILE_ERROR, null, error);
        }
    }

    async deleteTokens(): Promise<void> {
        try {
            fs.writeFileSync(this.filePath, this.headers.join(), 'utf-8');
        }
        catch (error) {
            throw new SDKException(Constants.TOKEN_STORE, Constants.DELETE_TOKENS_FILE_ERROR, null, error);
        }
    }

    async findTokenById(id: string) {
        try {
            let csvReader = fs.readFileSync(this.filePath, 'utf-8').toString().split("\n");
            let oauthToken = Reflect.construct(OAuthToken, []);
            let isRowPresent = false;
            for (let index = 1; index < csvReader.length; index++) {
                let nextRecord = csvReader[index].split(",");
                if (nextRecord[0] == id) {
                    isRowPresent = true;
                    await this.setMergeData(oauthToken, nextRecord);
                    return oauthToken;
                }
            }
            if (!isRowPresent) {
                throw new SDKException(Constants.TOKEN_STORE, Constants.GET_TOKEN_BY_ID_FILE_ERROR);
            }
        } catch (err) {
            if (err instanceof SDKException) {
                throw err;
            } else {
                throw new SDKException(Constants.TOKEN_STORE, Constants.GET_TOKEN_BY_ID_FILE_ERROR, null, err);
            }
        }
    }

    async setMergeData(oauthToken: OAuthToken, nextRecord: string[]) : Promise<void> {
        if (oauthToken.getId() == null) {
            oauthToken.setId(await this.getData(nextRecord[0]));
        }
        if (oauthToken.getUserSignature() == null) {
            let name = await this.getData(nextRecord[1]);
            if (name != null) {
                oauthToken.setUserSignature(new UserSignature(name));
            } else if (name == null) {
                oauthToken.setUserSignature(null);
            }
        }
        if (oauthToken.getClientId() == null) {
            let clientIdValue :any = "";
            if (await this.getData(nextRecord[2]) != null) {
                clientIdValue = await this.getData(nextRecord[2]);
            }
            oauthToken.setClientId(clientIdValue);
        }
        if (oauthToken.getClientSecret() == null) {
            let clientSecretValue : any = "";
            if (await this.getData(nextRecord[3]) != null) {
                clientSecretValue = await this.getData(nextRecord[3]);
            }
            oauthToken.setClientSecret(clientSecretValue);
        }
        if (oauthToken.getRefreshToken() == null) {
            oauthToken.setRefreshToken(await this.getData(nextRecord[4]));
        }
        if (oauthToken.getAccessToken() == null) {
            oauthToken.setAccessToken(await this.getData(nextRecord[5]));
        }
        if (oauthToken.getGrantToken() == null) {
            oauthToken.setGrantToken(await this.getData(nextRecord[6]));
        }
        if (oauthToken.getExpiresIn() == null) {
            let expiresIn = await this.getData(nextRecord[7]);
            if (expiresIn != null) {
                oauthToken.setExpiresIn(expiresIn.toString());
            }
        }
        if (oauthToken.getRedirectURL() == null) {
            oauthToken.setRedirectURL(await this.getData(nextRecord[8]));
        }
        if (oauthToken.getAPIDomain() == null) {
            oauthToken.setAPIDomain(await this.getData(nextRecord[9]));
        }
    }

    async checkCondition(oauthToken : OAuthToken, nextRecord : string[]) : Promise<boolean> {
        let isRowPresent = false;
        if (oauthToken.getUserSignature() != null) {
            let name = oauthToken.getUserSignature()?.getName();
            let userName = await this.getData(nextRecord[1]);
            if (name != null && name.length > 0 && userName != null && userName.length > 0 && name == userName) {
                isRowPresent = true;
            }
        } else if (oauthToken.getAccessToken() != null && oauthToken.getClientId() == null && oauthToken.getClientSecret() == null) {
            let accessToken = await this.getData(nextRecord[5]);
            if (oauthToken && accessToken != null && accessToken.length > 0 && oauthToken.getAccessToken()!.length > 0 && oauthToken.getAccessToken() == accessToken) {
                isRowPresent = true;
            }
        } else if (oauthToken.getRefreshToken() != null || oauthToken.getGrantToken() != null && oauthToken.getClientId() != null && oauthToken.getClientSecret() != null) {
            let grantToken = await this.getData(nextRecord[6]);
            let refreshToken = await this.getData(nextRecord[4]);
            if (grantToken != null && grantToken.length > 0 && oauthToken.getGrantToken() != null && oauthToken.getGrantToken() == grantToken) {
                isRowPresent = true;
            } else if (refreshToken != null && refreshToken.length > 0 && oauthToken.getRefreshToken() != null && oauthToken.getRefreshToken() == refreshToken) {
                isRowPresent = true;
            }
        }
        return isRowPresent;
    }
    async getData(value: string|null) {
        return (value != null && value.length > 0 && !(value.length == 0)) ? value : null;
    }
    async setToken(oauthToken : OAuthToken) {
        let data = [];
        data[0] = oauthToken.getId();
        data[1] = oauthToken.getUserSignature() != null ? oauthToken.getUserSignature()?.getName() : null;
        data[2] = oauthToken.getClientId();
        data[3] = oauthToken.getClientSecret();
        data[4] = oauthToken.getRefreshToken();
        data[5] = oauthToken.getAccessToken();
        data[6] = oauthToken.getGrantToken();
        data[7] = oauthToken.getExpiresIn();
        data[8] = oauthToken.getRedirectURL();
        data[9] = oauthToken.getAPIDomain();
        return data;
    }
    async generateID(allcontents : string[]) : Promise<string> {
        let maxValue = 0;
        if (allcontents.length > 1) {
            for (var i = 1; i < allcontents.length; i++) {
                let nextRecord = allcontents[i];

                if (nextRecord.length > 1 && nextRecord[0] != null && nextRecord[0]) {
                    if (maxValue < parseInt(nextRecord[0])) {
                        maxValue = parseInt(nextRecord[0]);
                    }
                }
            }
        }
        return (maxValue + 1).toString();
    }
}