import { DataCenter } from './data_center'
import { Environment } from './environment';

export class SADataCenter extends DataCenter{
    private static _PRODUCTION: Environment;
    private static _SANDBOX: Environment;
    private static _DEVELOPER: Environment;
    private static SA: SADataCenter = new SADataCenter();

    /**
     * This method represents the Zoho CRM Production environment in CA domain
     * @returns {Environment} An instance of Environment
    */
    public static PRODUCTION(): Environment {
        if (this._PRODUCTION == null) {
            this._PRODUCTION = DataCenter.setEnvironment("https://www.zohoapis.sa", this.SA.getIAMUrl(), this.SA.getFileUploadUrl());
        }
        return this._PRODUCTION;
    }

    /**
     * This method represents the Zoho CRM Sandbox environment in CA domain
     * @returns {Environment} An instance of Environment
    */
    public static SANDBOX(): Environment {
        if (this._SANDBOX == null) {
            this._SANDBOX = DataCenter.setEnvironment("https://sandbox.zohoapis.sa", this.SA.getIAMUrl(), this.SA.getFileUploadUrl());
        }
        return this._SANDBOX;
    }

    /**
     * This method represents the Zoho CRM Developer environment in CA domain
     * @returns {Environment} An instance of Environment
    */
    public static DEVELOPER(): Environment {
        if (this._DEVELOPER == null) {
            this._DEVELOPER = DataCenter.setEnvironment("https://developer.zohoapis.sa", this.SA.getIAMUrl(), this.SA.getFileUploadUrl());
        }
        return this._DEVELOPER;
    }

    public getIAMUrl() {
        return "https://accounts.zoho.sa/oauth/v2/token";
    }

    public getFileUploadUrl() {
        return "https://files.zoho.sa"
    }

}