class RequestProxy {
    private _host: string;
    private _port: number;
    private _user?: string;
    private _password?: string;

    /**
     * Creates a RequestProxy class instance with the specified parameters.
     * @param {String} host A String containing the hostname or address of the proxy server
     * @param {Number} port An Integer containing The port number of the proxy server
     * @param {String} user A String containing the user name of the proxy server
     * @param {String} password A String containing the password of the proxy server
     */
    constructor(host: string, port: number, user?: string, password?: string) {
        this._host = host;
        this._port = port;
        this._user = user;
        this._password = password;
    }

    /**
     * This is a getter method to get Proxy host.
     * @returns {String}
     */
    public getHost(): string {
        return this._host;
    }

    /**
     * This is a getter method to get the Proxy port.
     * @returns {Number}
     */
    public getPort(): number {
        return this._port;
    }

    /**
     * This is a getter method to get the Proxy user name.
     * @returns {String}
     */
    public getUser(): string | undefined {
        return this._user;
    }

    /**
     * This is a getter method to get the Proxy password.
     * @returns {String}
     */
    public getPassword(): string | undefined {
        return this._password;
    }
}

export {
    RequestProxy as MasterModel,
    RequestProxy as RequestProxy
}