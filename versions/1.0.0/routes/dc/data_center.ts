import {Environment} from './environment'

/**
 * This class represents the properties of Zoho CRM DataCenter
 */
class DataCenter {
    /**
     * The method to get the accounts URL.
     * @returns A String representing the accounts URL.
     */
    public getIAMUrl() {
    }

    /**
     * The method to get the File Upload URL
     * @returns A String representing the File Upload URL.
     */
    public getFileUploadUrl() {
    }

    /**
     * This method sets the environment to the calling DataCenter instance
     * @param {string} url - A String representing the domain URL
     * @param {string} accountsUrl - A String representing the accounts URL to fetch tokens.
     * @param {string} fileUploadUrl - A String representing the File Upload URL
     */
    static setEnvironment(url: string, accountsUrl: string, fileUploadUrl: string){
        return new Environment(url, accountsUrl, fileUploadUrl);
    }

    public static async get(config : string) {
        const USDataCenter = (await import("./us_data_center")).USDataCenter;
        const JPDataCenter = (await import("./jp_data_center")).JPDataCenter;
        const INDataCenter = (await import("./in_data_center")).INDataCenter;
        const EUDataCenter = (await import("./eu_data_center")).EUDataCenter;
        const CNDataCenter = (await import("./cn_data_center")).CNDataCenter;
        const AUDataCenter = (await import("./au_data_center")).AUDataCenter;
        const CADataCenter = (await import("./ca_data_center")).CADataCenter;
        const Constants = (await import("../../utils/util/constants")).Constants;

        if(Constants.US_DATACENTER.includes(config)) {
            if (config.includes(Constants.SANDBOX)) {
                return USDataCenter.SANDBOX();
            }
            else if (config.includes(Constants.DEVELOPER)) {
                return USDataCenter.DEVELOPER();
            }
            return USDataCenter.PRODUCTION();
        }
        else if(Constants.JP_DATACENTER.includes(config)) {
            if (config.includes(Constants.SANDBOX)) {
                return JPDataCenter.SANDBOX();
            }
            else if (config.includes(Constants.DEVELOPER)) {
                return JPDataCenter.DEVELOPER();
            }
            return JPDataCenter.PRODUCTION();
        }
        else if(Constants.IN_DATACENTER.includes(config)) {
            if (config.includes(Constants.SANDBOX)) {
                return INDataCenter.SANDBOX();
            }
            else if (config.includes(Constants.DEVELOPER)) {
                return INDataCenter.DEVELOPER();
            }
            return INDataCenter.PRODUCTION();
        }
        else if(Constants.EU_DATACENTER.includes(config)) {
            if (config.includes(Constants.SANDBOX)) {
                return EUDataCenter.SANDBOX();
            }
            else if (config.includes(Constants.DEVELOPER)) {
                return EUDataCenter.DEVELOPER();
            }
            return EUDataCenter.PRODUCTION();
        }
        else if(Constants.CN_DATACENTER.includes(config)) {
            if (config.includes(Constants.SANDBOX)) {
                return CNDataCenter.SANDBOX();
            } 
            else if (config.includes(Constants.DEVELOPER)) {
                return CNDataCenter.DEVELOPER();
            }
            return CNDataCenter.PRODUCTION();
        }
        else if(Constants.AU_DATACENTER.includes(config)) {
            if (config.includes(Constants.SANDBOX)) {
                return AUDataCenter.SANDBOX();
            } 
            else if (config.includes(Constants.DEVELOPER)) {
                return AUDataCenter.DEVELOPER();
            }
            return AUDataCenter.PRODUCTION();
        }
        else if(Constants.CA_DATACENTER.includes(config)) {
            if (config.includes(Constants.SANDBOX)) {
                return CADataCenter.SANDBOX();
            } 
            else if (config.includes(Constants.DEVELOPER)) {
                return CADataCenter.DEVELOPER();
            }
            return CADataCenter.PRODUCTION();
        }
        return null;
    }
}

export {
	DataCenter as MasterModel,
	DataCenter as DataCenter
}
