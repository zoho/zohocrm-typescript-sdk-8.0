import { Constants } from '../../utils/util/constants';
import got from 'got';
import * as Logger from 'winston';
import { Converter } from '../../utils/util/converter';
import { Initializer } from '../initializer';
import { RequestProxy } from '../request_proxy';
import * as tunnel from "tunnel";

/**
 * This module is to make HTTP connections, trigger the requests and receive the response
 */
export class APIHTTPConnector {
    private url: string;
    private requestMethod: string;
    private headers: Map<string, string> = new Map<string, string>();
    private parameters: Map<string, string> = new Map<string, string>();
    private requestBody: { [key: string]: any } = {};
    private contentType: string | undefined;

    /**
     * This is a getter method to get the ContentType.
     * @returns A String representing the ContentType.
    */
    public getContentType(): string | undefined {
        return this.contentType;
    }

    /**
     * This is a setter method to set the ContentType.
     * @param {string} contentType A String containing the ContentType.
    */
    public setContentType(contentType: string | undefined) {
        this.contentType = contentType;
    }

    /**
     * This is a setter method to set the API URL.
     * @param {string} url A String containing the API Request URL.
    */
    public setUrl(url: string) {
        this.url = url;
    }

    /**
     * This is a setter method to set the API request method.
     * @param {string} httpMethod - A String containing the API request method.
    */
    public setRequestMethod(requestMethod: string) {
        this.requestMethod = requestMethod;
    }

    /**
     * This is a getter method to get API request headers.
     * @returns A Map representing the API request headers.
    */
    public getHeaders(): Map<string, string> {
        return this.headers;
    }

    /**
     * This is a setter method to set API request headers.
     * @param {Map} headers - A Map containing the API request headers.
    */
    public setHeaders(headers: Map<string, string>) {
        this.headers = headers;
    }

    /**
     * This method to add API request header name and value.
     * @param {string} headerName - A String containing the API request header name.
     * @param {string} headerValue - A String containing the API request header value.
    */
    public addHeader(headerName: string, headerValue: string) {
        this.headers.set(headerName, headerValue);
    }

    /**
     * This is a getter method to get API request parameters.
     * @returns A Map representing the API request parameters.
    */
    public getParams(): Map<string, string> {
        return this.parameters;
    }

    /**
     * This is a setter method to set API request parameters.
     * @param {Map} params - A Map containing the API request parameters.
    */
    public setParams(params: Map<string, string>) {
        this.parameters = params;
    }

    /**
     * This method to add API request param name and value.
     * @param {string} paramName - A String containing the API request param name.
     * @param {string} paramValue - A String containing the API request param value.
    */
    public addParam(paramName: string, paramValue: string) {
        this.parameters.set(paramName, paramValue);
    }

    /**
     * This is a setter method to set the API request body.
     * @param {object} requestBody - A Object containing the API request body.
    */
    public setRequestBody(requestBody: object) {
        this.requestBody = requestBody;
    }

    public getRequestBody(): object {
        return this.requestBody;
    }

    /**
     * This method makes the Zoho CRM Rest API request.
     * @param {object} converterInstance A Converter class instance to call appendToRequest method.
     * @returns got instance or null
    */
    public async fireRequest(converterInstance: Converter | null) {
        var apiHeaders: { [key: string]: string } = {};
        var apiParameters: { [key: string]: string } = {};
        var modifiedRequestBody: any;
        if (this.contentType !== undefined) {
            await this.setContentTypeHeader();
        }
        if (this.headers) {
            this.headers.forEach(function (value, key) {
                apiHeaders[key] = value;
            });
        }
        if (this.parameters) {
            this.parameters.forEach(function (value, key) {
                apiParameters[key] = value;
            });
        }
        if (this.requestBody !== undefined && this.requestBody !== null && Array.from(Object.keys(this.requestBody)).length > 0 && converterInstance !== null) {
            modifiedRequestBody = await converterInstance.appendToRequest(this).catch((err) => { throw err });
        }
        let initializer = await Initializer.getInitializer().catch((err) => { throw err });
        var requestDetails: { [key: string]: any } = {
            method: this.requestMethod,
            headers: apiHeaders,
            searchParams: apiParameters,
            body: modifiedRequestBody,
            encoding: "utf8",
            allowGetBody: true,
            throwHttpErrors: false
        };
        let timeout: number = initializer.getSDKConfig() != null ? initializer.getSDKConfig().getTimeout() : 0;
        if (timeout > 0) {
            requestDetails.timeout = timeout;
        }
        let requestProxy: RequestProxy | undefined = initializer.getRequestProxy();
        if (requestProxy !== undefined) {
            let proxyAuthorization = undefined;
            if (requestProxy.getUser() != undefined) {
                proxyAuthorization = requestProxy.getUser() + ":" + requestProxy.getPassword();
            }
            let httpTunnel = tunnel.httpOverHttp({
                proxy: {
                    host: requestProxy.getHost(),
                    port: requestProxy.getPort(),
                    proxyAuth: proxyAuthorization
                }
            });
            let httpsTunnel = tunnel.httpsOverHttp({
                proxy: {
                    host: requestProxy.getHost(),
                    port: requestProxy.getPort(),
                    proxyAuth: proxyAuthorization
                }
            });
            let agents = {
                http: httpTunnel,
                https: httpsTunnel
            }
            requestDetails.agent = agents;
            Logger.info(await this.proxyLog(requestProxy));
        }
        Logger.info(await this.toString());
        return await got(this.url, requestDetails);
    }

    public setContentTypeHeader() {
        for (let url of Constants.SET_TO_CONTENT_TYPE) {
            if (this.contentType !== undefined) {
                if (this.url.includes(url)) {
                    this.headers.set(Constants.CONTENT_TYPE_HEADER, this.contentType);
                    return;
                }
            }
        }
    }

    public async toString() {
        let headers = new Map<string, string>(this.headers);
        headers.set(Constants.AUTHORIZATION, Constants.CANT_DISCLOSE);
        let headerMapString = JSON.stringify(headers, (key, value) => (value instanceof Map ? [...value] : value));
        let paramMapString = JSON.stringify(this.parameters, (key, value) => (value instanceof Map ? [...value] : value));
        return Constants.REQUEST_METHOD.concat(" = ").concat(this.requestMethod).concat(" , ").concat(Constants.URL).concat(" = ").concat(this.url).concat(" , ").concat(Constants.HEADERS).concat(" = ").concat(headerMapString).concat(" , ").concat(Constants.PARAMS).concat(" = ").concat(paramMapString).concat(".");
    }

    public async proxyLog(requestProxy: RequestProxy) {
        let proxyDetails = Constants.PROXY_SETTINGS.concat(Constants.PROXY_HOST).concat(requestProxy.getHost()).concat(" , ").concat(Constants.PROXY_PORT).concat(requestProxy.getPort().toString());
        let user: string | undefined = requestProxy.getUser();
        if (user != null) {
            proxyDetails = proxyDetails.concat(" , ").concat(Constants.PROXY_USER).concat(user);
        }
        return proxyDetails;
    }
}