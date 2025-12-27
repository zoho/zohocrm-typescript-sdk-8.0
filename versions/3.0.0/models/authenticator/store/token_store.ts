import { Token } from "../token";

/**
 * This class stores the user token details.
*/
interface TokenStore {
    /**
     This method is used to get user token details.
     * @param {Token} token - A Token class instance.
     * @returns {Token} A Token class instance representing the user token details.
     * @throws {SDKException}
     */
    findToken(token: Token): Promise<Token | null | void>;

    /**
     * This method is used to retrieve the user token details based on unique ID
     * @param {String} id - A String representing the unique ID
     * @return {Token} A Token class instance representing the user token details.
     * @throws SDKException
     */
    findTokenById(id: string): Promise<Token | null | void>;

    /**
     * This method is used to store user token details.
     * @param {Token} token - A Token class instance.
     * @throws {SDKException}
     */
    saveToken(token: Token): Promise<void>;

    /**
     This method is used to delete user token details.
     * @param {String} id - A String representing the unique ID
     * @throws {SDKException}
     */
    deleteToken(id: string): Promise<void>;

    /**
     * The method to retrieve all the stored tokens.
     * @returns {Array} - An array of Token class instances
     * @throws {SDKException}
     */
    getTokens(): Promise<Array<Token> | null>;

    /**
     * The method to delete all the stored tokens.
     * @throws {SDKException}
     */
    deleteTokens(): Promise<void> ;
}

export type{
	TokenStore as MasterModel,
	TokenStore as TokenStore
}