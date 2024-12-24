import { Constants } from '../utils/util/constants';
import { Utility } from '../utils/util/utility';
import { RequestProxy } from './request_proxy';

export class ProxyBuilder {
    private _host: string;
    private _port: number;
    private _user?: string;
    private _password?: string = "";

    public host(host: string): ProxyBuilder {
        Utility.assertNotNull(host, Constants.REQUEST_PROXY_ERROR, Constants.HOST_ERROR_MESSAGE);
        this._host = host;
        return this;
    }

    public port(port: number): ProxyBuilder {
        Utility.assertNotNull(port, Constants.REQUEST_PROXY_ERROR, Constants.PORT_ERROR_MESSAGE);
        this._port = port;
        return this;
    }

    public user(user?: string): ProxyBuilder {
        this._user = user;
        return this;
    }

    public password(password?: string): ProxyBuilder {
        this._password = password;
        return this;
    }

    public build(): RequestProxy {
        Utility.assertNotNull(this._host, Constants.REQUEST_PROXY_ERROR, Constants.HOST_ERROR_MESSAGE);
        Utility.assertNotNull(this._port, Constants.REQUEST_PROXY_ERROR, Constants.PORT_ERROR_MESSAGE);
        return new RequestProxy(this._host, this._port, this._user, this._password);
    }
}