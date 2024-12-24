import { DataCenter } from './data_center'
import { Environment } from './environment';

/**
 * This class represents the properties of Zoho CRM in Japan Domain.
 * @extends DataCenter
*/
export class JPDataCenter extends DataCenter {
    private static _PRODUCTION: Environment;
    private static _SANDBOX: Environment;
    private static _DEVELOPER: Environment;
    private static JP: JPDataCenter = new JPDataCenter();

    /**
     * This method represents the Zoho CRM Production environment in Japan domain
     * @returns {Environment} An instance of Environment
    */
    public static PRODUCTION(): Environment {
        if (this._PRODUCTION == null) {
            this._PRODUCTION = DataCenter.setEnvironment("https://www.zohoapis.jp", this.JP.getIAMUrl(), this.JP.getFileUploadUrl());
        }
        return this._PRODUCTION;
    }

    /**
     * This method represents the Zoho CRM Sandbox environment in Japan domain
     * @returns {Environment} An instance of Environment
    */
    public static SANDBOX(): Environment {
        if (this._SANDBOX == null) {
            this._SANDBOX = DataCenter.setEnvironment("https://sandbox.zohoapis.jp", this.JP.getIAMUrl(), this.JP.getFileUploadUrl());
        }
        return this._SANDBOX;
    }

    /**
     * This method represents the Zoho CRM Developer environment in Japan domain
     * @returns {Environment} An instance of Environment
    */
    public static DEVELOPER(): Environment {
        if (this._DEVELOPER == null) {
            this._DEVELOPER = DataCenter.setEnvironment("https://developer.zohoapis.jp", this.JP.getIAMUrl(), this.JP.getFileUploadUrl());
        }
        return this._DEVELOPER;
    }

    public getIAMUrl() {
        return "https://accounts.zoho.jp/oauth/v2/token";
    }

    public getFileUploadUrl() {
        return "https://content.zohoapis.jp";
    }
}