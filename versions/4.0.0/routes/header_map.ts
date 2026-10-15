import { HeaderParamValidator } from '../utils/util/header_param_validator';
import { Header } from './header';
import { SDKException } from "../core/com/zoho/crm/api/exception/sdk_exception";
import { Constants } from '../utils/util/constants';
import * as Logger from "winston";
import { DatatypeConverter } from "../utils/util/datatype_converter";

/**
 * This class represents the HTTP header name and value.
 */
class HeaderMap {
    private headerMap: Map<string, string> = new Map<string, string>();

    /**
     * This is a getter method to get the header map.
     * @returns {Map} A Map representing the API request headers.
     */
    public getHeaderMap(): Map<string, string> {
        return this.headerMap;
    }

    /**
     * The method to add the header name and value.
     * @param {Header} header - A Header class instance.
     * @param {object} value - An object containing the header value.
     * @throws {SDKException}
     */
    public async add<T>(header: Header<T>, value: T) {
        if (header == null || header == undefined) {
            throw new SDKException(Constants.HEADER_NULL_ERROR, Constants.HEADER_INSTANCE_NULL_ERROR);
        }
        let headerName = header.getName();
        if (headerName == null || headerName == undefined) {
            throw new SDKException(Constants.HEADER_NAME_NULL_ERROR, Constants.HEADER_NAME_NULL_ERROR_MESSAGE);
        }
        if (value == null) {
            throw new SDKException(Constants.HEADER_NULL_ERROR, headerName + Constants.NULL_VALUE_ERROR_MESSAGE);
        }
        try {
            let headerClassName: string | undefined | null = header.getClassName();
            let parsedHeaderValue: any;
            if (headerClassName !== undefined && headerClassName != null) {
                parsedHeaderValue = await new HeaderParamValidator().validate(headerName, headerClassName, value).catch(err=> { throw err;});
            } else {
				try {
					let type = Object.prototype.toString.call(value);
					parsedHeaderValue = await DatatypeConverter.postConvert(value, type.toLowerCase());
				} catch (err) {
					parsedHeaderValue = value;
				}
			}
            if (this.headerMap.has(headerName) && this.headerMap.get(headerName) != null) {
                let headerValue = this.headerMap.get(headerName);
                if (headerValue !== undefined) {
                    headerValue = headerValue.concat(",", parsedHeaderValue.toString());
                    this.headerMap.set(headerName, headerValue);
                }
            } else {
                this.headerMap.set(headerName, parsedHeaderValue.toString());
            }
        } catch (error) {
			if (!(error instanceof SDKException)) {
				error = new SDKException(null, null, null, error);
			}
			Logger.error(Constants.HEADER_EXCEPTION, error);
			throw error;
		}
        
    }
}

export {
    HeaderMap as MasterModel,
    HeaderMap as HeaderMap
}