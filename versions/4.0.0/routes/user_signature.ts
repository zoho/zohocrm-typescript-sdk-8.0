import {Constants, Utility} from "../zohocrmsdk.js";

/**
 * This class represents the Zoho CRM User.
 */
export class UserSignature {
    name: string;

    constructor(name: string) {
        if(name == null) {
            Utility.assertNotNull(null, Constants.MANDATORY_VALUE_ERROR, Constants.MANDATORY_KEY_ERROR + " - " + Constants.NAME).then(r => r);
        }
        this.name = name;
    }

    /**
     * This is a getter method to get user email.
     * @returns {string} A String representing the CRM user email.
     */
    public getName(): string {
        return this.name;
    }
}