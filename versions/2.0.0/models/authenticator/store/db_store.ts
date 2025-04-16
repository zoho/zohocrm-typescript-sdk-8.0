import * as mysql from 'mysql';
import { SDKException } from '../../../core/com/zoho/crm/api/exception/sdk_exception';
import { UserSignature } from "../../../routes/user_signature";
import { Constants } from "../../../utils/util/constants";
import { OAuthToken } from '../oauth_token';
import { Token } from "../token";
import { TokenStore } from "./token_store";
/**
 * This class stores the user token details to the MySQL DataBase.
*/
export class DBStore implements TokenStore {
    private userName: string;
    private portNumber: number;
    private password: string;
    private host: string;
    private databaseName: string;
    private tableName: string;

    /**
     * Creates an DBStore class instance with the specified parameters.
     * @param {string} host - A String containing the DataBase host name. Default value is localhost
     * @param {string} databaseName - A String containing the DataBase name. Default value is zohooauth
     * @param {string} tableName - A String containing the DataBase table name. Default value is oauthtoken
     * @param {string} userName - A String containing the DataBase user name. Default value is root
     * @param {string} password - A String containing the DataBase password. Default value is an empty string
     * @param {string} portNumber - A String containing the DataBase port number. Default value is 3306
     */
    constructor(host: string, databaseName: string, tableName: string, userName: string, password: string, portNumber: number) {
        this.host = host;
        this.databaseName = databaseName;
        this.tableName = tableName;
        this.userName = userName;
        this.password = password;
        this.portNumber = portNumber;
    }

    async findToken(token : OAuthToken) : Promise<Token|null|void> {
        try {
            let oauthToken = token;
            var query = "select * from " + this.tableName;
            if (oauthToken.getUserSignature() != null) {
                let name = oauthToken.getUserSignature()?.getName();
                if (name != null && name.length > 0) {
                    query += " where user_name='" + name + "'";
                }
            } else if (oauthToken.getAccessToken() != null && oauthToken.getClientId() == null && oauthToken.getClientSecret() == null) {
                query = query + " where access_token='" + oauthToken.getAccessToken() + "'";
            } else if (oauthToken.getRefreshToken() != null || oauthToken.getGrantToken() != null && oauthToken.getClientId() != null && oauthToken.getClientSecret() != null) {
                if (oauthToken.getGrantToken() != null && oauthToken.getGrantToken()!.length > 0) {
                    query += " where grant_token='" + oauthToken.getGrantToken() + "'";
                } else if (oauthToken.getRefreshToken() != null && oauthToken.getRefreshToken()!.length > 0) {
                    query += " where refresh_token='" + oauthToken.getRefreshToken() + "'";
                }
            }
            query += "limit 1;";
            try {
                var connection = await this.getConnection();
                var that = this;
                return new Promise<Token | null | void>(function (resolve, reject) {
                    connection.connect(function (err) {
                        if (err) {
                            return reject(err);
                        }
                        connection.query(query, async function (err, result) {
                            connection.end();
                            if (err) {
                                return reject(err);
                            }
                            if (result.length == 0) {
                                return resolve(null);
                            }
                            do {
                                await that.setMergeData(oauthToken, result);
                                break;
                            }
                            while (result.next());
                            return resolve(oauthToken);
                        });
                    });
                }).catch(err => { throw err; });
            } catch (err) {
                throw new SDKException(Constants.TOKEN_STORE, Constants.GET_TOKEN_DB_ERROR1,null,  err);
            }
        }
        catch (err1) {
            throw new SDKException(Constants.TOKEN_STORE, Constants.GET_TOKEN_DB_ERROR1,null, err1);
        }
    }

    async saveToken(token : OAuthToken) : Promise<void>{
        let oauthToken = token;
        var query = "update " + this.tableName + " set ";
        if (oauthToken.getUserSignature() != null) {
            let name = oauthToken.getUserSignature()?.getName();
            if (name != null && name.length > 0) {
                query += await this.setToken(oauthToken) + " where user_name='" + name + "'";
            }
        }
        else if (oauthToken.getAccessToken() != null && oauthToken.getAccessToken()!.length > 0 && oauthToken.getClientId() == null && oauthToken.getClientSecret() == null) {
            query += await this.setToken(oauthToken) + " where access_token='" + oauthToken.getAccessToken() + "'";
        }
        else if (((oauthToken && oauthToken.getRefreshToken() != null && oauthToken.getRefreshToken()!.length > 0) || oauthToken.getGrantToken() != null && oauthToken.getGrantToken()!.length > 0) && oauthToken.getClientId() != null && oauthToken.getClientSecret() != null) {
            if (oauthToken.getGrantToken() != null && oauthToken.getGrantToken()!.length > 0) {
                query += await this.setToken(oauthToken) + " where grant_token='" + oauthToken.getGrantToken() + "'";
            }
            else if (oauthToken.getRefreshToken() != null && oauthToken.getRefreshToken()!.length > 0) {
                query += await this.setToken(oauthToken) + " where refresh_token='" + oauthToken.getRefreshToken() + "'";
            }
        }
        query += " limit 1;";
        try {
            let that = this;
            let connection = await this.getConnection();
            return new Promise<void>(async function (resolve, reject) {
                connection.connect(function (err) {
                    if (err) {
                        return reject(err);
                    }
                    connection.query(query, async function (err, result) {
                        if (err) {
                            connection.end();
                            return reject(err);
                        }
                        if (result.affectedRows > 0) {
                            connection.end();
                            return resolve(result);
                        }
                        else {
                            try {
                                if (oauthToken.getId() != null || oauthToken.getUserSignature() != null) {
                                    if (oauthToken.getRefreshToken() == null && oauthToken.getGrantToken() == null && oauthToken.getAccessToken() == null) {
                                        reject(new SDKException(Constants.TOKEN_STORE, Constants.GET_TOKEN_DB_ERROR1));
                                    }
                                }
                                if (oauthToken.getId() == null) {
                                    let newId : string = await that.generateId();
                                    oauthToken.setId(newId);
                                }
                                var sqlQuery =
                                    "INSERT INTO " +
                                    that.tableName +
                                    "(id,user_name,client_id,client_secret,refresh_token,access_token,grant_token,expiry_time,redirect_url,api_domain) VALUES ?";

                                var values = [
                                    [
                                        token.getId(),
                                        token.getUserSignature() == null ? token.getUserSignature() : token.getUserSignature()?.getName(),
                                        token.getClientId(),
                                        token.getClientSecret(),
                                        token.getRefreshToken(),
                                        token.getAccessToken(),
                                        token.getGrantToken(),
                                        token.getExpiresIn(),
                                        token.getRedirectURL(),
                                        token.getAPIDomain(),
                                    ],
                                ];
                                connection.query(sqlQuery, [values], function (err, result) {
                                    connection.end();
                                    if (err) {
                                        return reject(err);
                                    }
                                    return resolve();
                                });
                            }
                            catch (err) {
                                throw err;
                            }
                        }
                    })
                })
            }).catch(err => { throw err; });
        }
        catch (err) {
            throw new SDKException(Constants.TOKEN_STORE, Constants.SAVE_TOKEN_DB_ERROR,null, err);
        }
    }

    async deleteToken(id: string) : Promise<void> {
        try {
            var connection = await this.getConnection();
            let query = "delete from " + this.tableName + " where id='" + id + "';";
            return new Promise<void>(function (resolve, reject) {
                connection.connect(function (err) {
                    if (err) {
                        return reject(err);
                    }
                    connection.query(query, function (err, result) {
                        connection.end();
                        if (err) {
                            return reject(err);
                        }
                        return resolve(result);
                    })
                })
            }).catch(err => { throw err; });
        } catch (error) {
            throw new SDKException(Constants.TOKEN_STORE, Constants.DELETE_TOKEN_DB_ERROR, null, error);
        }
    }

    async getTokens() : Promise<Array<Token>|null>{
        var tokens : Array<Token> = [];
        let _this = this;
        try {
            var connection = await this.getConnection();
            var sqlQuery = "select * from " + this.tableName + ";";
            return new Promise<Array<Token>|null>(function (resolve, reject) {
                connection.connect(function (err) {
                    if (err) {
                        return reject(err);
                    }
                    connection.query(sqlQuery, function (err, result) {
                        connection.end();
                        if (err) {
                            return reject(err);
                        }
                        if (result.length > 0) {
                            for (let row of result) {
                                let oauthToken : OAuthToken = Reflect.construct(OAuthToken, []);
                                _this.setMergeData(oauthToken, [row])
                                tokens.push(oauthToken);
                            }
                            return resolve(tokens);
                        }
                        return resolve(null);
                    });
                });
            }).catch(err => { throw err; });
        } catch (error) {
            throw new SDKException(Constants.TOKEN_STORE, Constants.GET_TOKENS_DB_ERROR, null, error);
        }
    }

    async deleteTokens() : Promise<void>{
        try {
            var connection = await this.getConnection();
            var sqlQuery = "delete from " + this.tableName + ";";
            return new Promise<void>(function (resolve, reject) {
                connection.connect(function (err) {
                    if (err) {
                        return reject(err);
                    }
                    connection.query(sqlQuery, function (err, result) {
                        connection.end();
                        if (err) {
                            return reject(err);
                        }
                        return resolve(result);
                    });
                });
            }).catch(err => { throw err; });
        } catch (error) {
            throw new SDKException(Constants.TOKEN_STORE, Constants.DELETE_TOKENS_DB_ERROR, null, error);
        }
    }

    private getConnection() {
        var connection = mysql.createConnection({
            host: this.host,
            user: this.userName,
            password: this.password,
            database: this.databaseName,
            port: this.portNumber
        });
        return connection;
    }

    async findTokenById(id: string) : Promise<Token|null|void> {
        try {
            let connection = await this.getConnection();
            let _this = this;
            let oauthToken = Reflect.construct(OAuthToken, []);
            let query = "select * from " + this.tableName + " where id='" + id + "';";
            return new Promise<Token | null>(function (resolve, reject) {
                connection.connect(function (err) {
                    if (err) {
                        return reject(err);
                    }
                    connection.query(query, async function (err, result) {
                        connection.end();
                        if (err) {
                            return reject(err);
                        }
                        if (result.length == 0) {
                            throw new SDKException(Constants.TOKEN_STORE, Constants.GET_TOKEN_BY_ID_DB_ERROR);
                        }
                        do {
                            await _this.setMergeData(oauthToken, result);
                            return resolve(oauthToken);
                        }
                        while (result.next());
                    });
                });
            }).catch(err => { throw err; });
        } catch (err) {
            if (err instanceof SDKException) {
                throw err;
            } else {
                throw new SDKException(Constants.TOKEN_STORE, Constants.GET_TOKEN_BY_ID_DB_ERROR, null, err);
            }
        }
    }

    async setMergeData(oauthToken : OAuthToken, result : any) {
        if (result.length != 0) {
            if (oauthToken.getId() == null) {
                oauthToken.setId(result[0].id);
            }
            if (oauthToken.getUserSignature() == null) {
                let name = result[0].user_name;
                if (name != null) {
                    oauthToken.setUserSignature(new UserSignature(name));
                }
            }
            if (oauthToken.getClientId() == null) {
                oauthToken.setClientId(result[0].client_id);
            }
            if (oauthToken.getClientSecret() == null) {
                oauthToken.setClientSecret(result[0].client_secret);
            }
            if (oauthToken.getRefreshToken() == null) {
                oauthToken.setRefreshToken(result[0].refresh_token);
            }
            if (oauthToken.getAccessToken() == null) {
                oauthToken.setAccessToken(result[0].access_token)
            }
            if (oauthToken.getGrantToken() == null) {
                oauthToken.setGrantToken(result[0].grant_token);
            }
            if (oauthToken.getExpiresIn() == null) {
                let expiresIn = result[0].expiry_time;
                if (expiresIn != null) {
                    oauthToken.setExpiresIn(expiresIn.toString());
                }
            }
            if (oauthToken.getRedirectURL() == null) {
                oauthToken.setRedirectURL(result[0].redirect_url);
            }
            if (oauthToken.getAPIDomain() == null)
            {
                oauthToken.setAPIDomain(result[0].api_domain);
            }
        }
    }

    async setToken(oauthToken: OAuthToken) : Promise<string>{
        let query = [];
        if (oauthToken.getUserSignature() != null) {
            let name = oauthToken.getUserSignature()?.getName();
            if (name != null && name.length > 0) {
                query.push(this.setTokenInfo(Constants.USER_NAME, name));
            }
        }
        if (oauthToken.getClientId() != null) {
            query.push(this.setTokenInfo(Constants.CLIENT_ID, oauthToken.getClientId()));
        }
        if (oauthToken.getClientSecret() != null) {
            query.push(this.setTokenInfo(Constants.CLIENT_SECRET, oauthToken.getClientSecret()));
        }
        if (oauthToken.getRefreshToken() != null) {
            query.push(this.setTokenInfo(Constants.REFRESH_TOKEN, oauthToken.getRefreshToken()));
        }
        if (oauthToken.getAccessToken() != null) {
            query.push(this.setTokenInfo(Constants.ACCESS_TOKEN, oauthToken.getAccessToken()));
        }
        if (oauthToken.getGrantToken() != null) {
            query.push(this.setTokenInfo(Constants.GRANT_TOKEN, oauthToken.getGrantToken()));
        }
        if (oauthToken.getExpiresIn() != null) {
            query.push(this.setTokenInfo(Constants.EXPIRY_TIME, oauthToken.getExpiresIn()));
        }
        if (oauthToken.getRedirectURL() != null) {
            query.push(this.setTokenInfo(Constants.REDIRECT_URL, oauthToken.getRedirectURL()));
        }
        if(oauthToken.getAPIDomain() != null)
        {
            query.push(this.setTokenInfo(Constants.API_DOMAIN, oauthToken.getAPIDomain()));
        }
        return query.join(",");
    }

    setTokenInfo(key : string , value : string | null ) : string {
        return key + "='" + value + "'";
    }

    async generateId() : Promise<string> {
        let id :string = '0';
        try {
            let connection = await this.getConnection();
            let that = this;
            let query : string = "select max(id) as id from " + this.tableName + ";";
            return new Promise<string>(function (resolve, reject) {
                connection.connect(function (err) {
                    if (err) {
                        return reject(err);
                    }
                    connection.query(query, async function (err, result) {
                        connection.end();
                        if (err) {
                            return reject(err);
                        }
                        if (result.length == 0) {
                            return resolve(id);
                        }
                        do {
                            let max = await that.getMax(result);
                            if (max != null) {
                                return resolve((max + 1).toString());
                            } else {
                                return resolve('1');
                            }
                        }
                        while (result.next());
                    });
                });
            }).catch(err => { throw err; });
        }
        catch (err) {
            throw new SDKException(Constants.TOKEN_STORE, Constants.GENERATE_TOKEN_ID_ERROR,null, err);
        }
    }
    async getMax(result: any) : Promise<number| null> {
        let max = "";
        if (result.length > 0) {
            for (let row of result) {
                max = row.id;
            }
        }
        if (max != null) {
            return parseInt(max);
        }
        return null;
    }
}