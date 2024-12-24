import { DataCenter } from './data_center'
import { Environment } from './environment';

/**
 * This class represents the properties of Zoho CRM in US Domain.
 */
export class USDataCenter extends DataCenter {
    private static _PRODUCTION: Environment;
    private static _SANDBOX: Environment;
    private static _DEVELOPER: Environment;
    static US: USDataCenter = new USDataCenter();

    /**
     * This method represents the Zoho CRM Production environment in US domain
     * @returns {Environment} An instance of Environment
     */
    public static PRODUCTION(): Environment {
        if (this._PRODUCTION == null) {
            this._PRODUCTION = DataCenter.setEnvironment("https://www.zohoapis.com", this.US.getIAMUrl(), this.US.getFileUploadUrl());
        }
        return this._PRODUCTION;
    }

    /**
     * This method represents the Zoho CRM Sandbox environment in US domain
     * @returns {Environment} An instance of Environment
     */
    public static SANDBOX(): Environment {
        if (this._SANDBOX == null) {
            this._SANDBOX = DataCenter.setEnvironment("https://sandbox.zohoapis.com", this.US.getIAMUrl(), this.US.getFileUploadUrl());
        }
        return this._SANDBOX;
    }

    /**
     * This method represents the Zoho CRM Developer environment in US domain
     * @returns {Environment} An instance of Environment
     */
    public static DEVELOPER(): Environment {
        if (this._DEVELOPER == null) {
            this._DEVELOPER = DataCenter.setEnvironment("https://developer.zohoapis.com", this.US.getIAMUrl(), this.US.getFileUploadUrl());
        }
        return this._DEVELOPER;
    }

    public getIAMUrl() {
        return "https://accounts.zoho.com/oauth/v2/token";
    }

    public getFileUploadUrl() {
        return "https://content.zohoapis.com";
    }
}