import { APIHTTPConnector } from "../../routes/controllers/api_http_connector";

/**
 * This class verifies and sets token to APIHTTPConnector instance.
*/
interface Token {
    /**
     * This method is to set authentication token to APIHTTPConnector instance.
     * @param {APIHTTPConnector} urlConnection - A APIHTTPConnector class instance.
     * @throws {SDKException}
    */
    authenticate(urlConnection: APIHTTPConnector): void;

    /**
     * The method to remove the token from store.
     * @returns {Boolean} - A Boolean value representing the removed status.
     * @throws {SDKException}
    */
    remove(): Promise<boolean>;
    revoke(id: string): Promise<boolean | undefined>;
    generateToken() : void;
    getId() : string | null;
}

export type{
	Token as MasterModel,
	Token as Token
}