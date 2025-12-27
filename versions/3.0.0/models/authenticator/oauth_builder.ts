import { Utility } from '../../utils/util/utility';
import { Constants } from '../../utils/util/constants';
import { SDKException } from '../../core/com/zoho/crm/api/exception/sdk_exception';
import { OAuthToken } from './oauth_token';
import {UserSignature} from "../../routes/user_signature";

export class OAuthBuilder {
    private _clientID: string | null;
    private _clientSecret: string | null;
    private _redirectURL: string | null;
    private _refreshToken: string | null;
    private _grantToken: string | null;
    private _accessToken: string | null;
    private _id: string | null;
    private _userSignature : UserSignature | null =null;
    private _findUser: Boolean = true;

    public id(id: string): OAuthBuilder {
        this._id = id;
        return this;
    }

    public clientId(clientID: string): OAuthBuilder {
        Utility.assertNotNull(clientID, Constants.TOKEN_ERROR, Constants.CLIENT_ID_NULL_ERROR_MESSAGE);
        this._clientID = clientID;
        return this;
    }

    public clientSecret(clientSecret: string): OAuthBuilder {
        Utility.assertNotNull(clientSecret, Constants.TOKEN_ERROR, Constants.CLIENT_SECRET_NULL_ERROR_MESSAGE);
        this._clientSecret = clientSecret;
        return this;
    }

    public redirectURL(redirectURL: string): OAuthBuilder {
        this._redirectURL = redirectURL;
        return this;
    }

    public refreshToken(refreshToken: string): OAuthBuilder {
        this._refreshToken = refreshToken;
        return this;
    }

    public grantToken(grantToken: string): OAuthBuilder {
        this._grantToken = grantToken;
        return this;
    }

    public accessToken(accessToken: string): OAuthBuilder {
        this._accessToken = accessToken;
        return this;
    }

    public userSignature(userSignature : UserSignature) {
        if (userSignature != null && typeof userSignature.getName() !== Constants.STRING_NAMESPACE.toLowerCase()) {
            let error : {[p: string]: any} = {};
            error[Constants.ERROR_HASH_FIELD] = Constants.USER_SIGNATURE;
            error[Constants.ERROR_HASH_EXPECTED_TYPE] = Constants.STRING_NAMESPACE;
            error[Constants.ERROR_HASH_CLASS] = OAuthToken.name;
            throw new SDKException(Constants.TOKEN_ERROR, null, error, null);
        }
        this._userSignature = userSignature;
        return this;
    }

    public findUser(findUser: Boolean) {
        this._findUser = findUser;
        return this;
    }

    public build(): OAuthToken {
        if (this._grantToken == null && this._refreshToken == null && this._id == null && this._accessToken == null && this._userSignature == null) {
            throw new SDKException(Constants.MANDATORY_VALUE_ERROR, Constants.MANDATORY_KEY_ERROR + "-" +  Constants.OAUTH_MANDATORY_KEYS.join(","));
        }
        if (this._grantToken != null || this._refreshToken != null) {
            if (this._clientID == null && this._clientSecret == null) {
                throw new SDKException(Constants.MANDATORY_VALUE_ERROR, Constants.MANDATORY_KEY_ERROR + "-" + Constants.OAUTH_MANDATORY_KEYS1.join(","));
            }
            else {
                Utility.assertNotNull(this._clientID, Constants.MANDATORY_VALUE_ERROR, Constants.MANDATORY_KEY_ERROR + "-" + Constants.CLIENT_ID);
                Utility.assertNotNull(this._clientSecret, Constants.MANDATORY_VALUE_ERROR, Constants.MANDATORY_KEY_ERROR + "-" + Constants.CLIENT_SECRET);
            }
        }
        return new OAuthToken(this._clientID, this._clientSecret, this._grantToken, this._refreshToken, this._redirectURL, this._id, this._accessToken, this._userSignature, this._findUser);
    }
}