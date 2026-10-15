import { Constants } from "./constants";
import * as moment from "moment-timezone";
/**
 * This class converts JSON value to the expected object type and vice versa.
 */
class DatatypeConverter {
    private static preConverterMap: Map<string, any> = new Map<string, any>();
    private static postConverterMap: Map<string, any> = new Map<string, any>();

    /**
     * This method is to initialize the PreConverter and PostConverter lambda functions.
     */
    private static init() {
        if (this.preConverterMap.size != 0 && this.postConverterMap.size != 0) {
            return;
        }
        var string = (obj: any) => { return obj.toString(); }
        var integer = (obj: any) => { return parseInt(obj); }
        var long = (obj: any) => { return obj.toString() != Constants.NULL_VALUE ? BigInt(obj) : null; }
        var longToString = (obj: any) => { return obj.toString() }
        var bool = (obj: any) => { return Boolean(obj); }
        var stringToDateTime = (obj: string) => { return new Date(obj); }
        var dateTimeToString = (obj: Date) => { return obj.toISOString().split('.')[0] + "Z"; }
        var dateToString = (obj: Date) => { return obj.toISOString().split('T')[0]; }
        var stringToDate = (obj: string) => { return new Date(obj); }
        var double = (obj: any) => { return parseFloat(obj.toString()); }
        var preObject = (obj: any) => { return this.preConvertObjectData(obj); }
        var postObject = (obj: any) => { return this.postConvertObjectData(obj); }
        var stringtoTimeZone = (obj: any) => { return moment.tz.zone(obj); }
        var timeZoneToString = (obj: any) => { return obj.name;}
        var stringtoLocalTime = (obj: any) => { 
            const splittedInputTime = obj.split(':');
            let currentDate = new Date();
            currentDate.setHours(splittedInputTime[0]);
            currentDate.setMinutes(splittedInputTime[1]);
            return currentDate;
        }
        var localTimetoSting = (obj: any) => { 
            let hour = obj.getHours();
            let minute = obj.getMinutes();
            if(hour == 0) {
                hour = "00";
            }
            if(minute == 0) {
                minute = "00";
            }
            return hour + ":" + minute;
        }
        this.addToMap(Constants.STRING_NAMESPACE.toLowerCase(), string, string);
        this.addToMap(Constants.INTEGER_NAMESPACE.toLowerCase(), integer, integer);
        this.addToMap(Constants.LONG_NAMESPACE.toLowerCase(), long, longToString);
        this.addToMap(Constants.BOOLEAN_NAMESPACE.toLowerCase(), bool, bool);
        this.addToMap(Constants.DATE_NAMESPACE.toLowerCase(), stringToDate, dateToString);
        this.addToMap(Constants.DATETIME_NAMESPACE.toLowerCase(), stringToDateTime, dateTimeToString);
        this.addToMap(Constants.DOUBLE_NAMESPACE.toLowerCase(), double, double);
        this.addToMap(Constants.FLOAT_NAMESPACE.toLowerCase(), double, double);
        this.addToMap(Constants.OBJECT_NAMESPACE.toLowerCase(), preObject, postObject);
        this.addToMap(Constants.TIMEZONE_NAMESPACE.toLowerCase(), stringtoTimeZone, timeZoneToString);
        this.addToMap(Constants.STRING_TYPE.toLowerCase(), string, string);
        this.addToMap(Constants.INTEGER_TYPE.toLowerCase(), integer, integer);
        this.addToMap(Constants.DATE_TYPE.toLowerCase(), stringToDateTime, dateTimeToString);
        this.addToMap(Constants.NUMBER_TYPE.toLowerCase(), double, double);
        this.addToMap(Constants.LOCALTIME_NAMESPACE.toLowerCase(), stringtoLocalTime, localTimetoSting);
    }

    private static preConvertObjectData(obj: any) {
        return obj;
    }

    private static async postConvertObjectData(obj: any) {
        if (Array.isArray(obj) && obj.length > 0) {
            let list = [];
            for (let data of obj) {
                if (data instanceof Date) {
                    if (data.getHours() == 0 && data.getMinutes() == 0 && data.getSeconds() == 0) {
                        list.push(await this.postConvert(data, Constants.DATE_NAMESPACE.toLowerCase()));
                    }
                    else {
                        list.push(await this.postConvert(data, Constants.DATETIME_NAMESPACE.toLowerCase()));
                    }
                }
                else if (data instanceof Map) {
                    await this.postConvertObjectData(data);
                }
                else {
                    list.push(data);
                }
            }
            return list;
        }
        else if (obj instanceof Map) {
            let requestObject: { [key: string]: any } = {};
            for (let key of Array.from(obj.keys())) {
                let value = obj.get(key);
                if (Array.isArray(value)) {
                    requestObject[key] = await this.postConvertObjectData(value);
                }
                else if (value instanceof Date) {
                    if (value.getHours() == 0 && value.getMinutes() == 0 && value.getSeconds() == 0) {
                        requestObject[key] = await this.postConvert(value, Constants.DATE_NAMESPACE.toLowerCase());
                    }
                    else {
                        requestObject[key] = await this.postConvert(value, Constants.DATETIME_NAMESPACE.toLowerCase());
                    }
                }
                else if (value instanceof Map) {
                    requestObject[key] = await this.postConvertObjectData(value);
                }
                else {
                    requestObject[key] = value;
                }
            }
            return requestObject;
        }
        else if (obj instanceof Date) {
            if (obj.getHours() == 0 && obj.getMinutes() == 0 && obj.getSeconds() == 0) {
                return await this.postConvert(obj, Constants.DATE_NAMESPACE.toLowerCase());
            }
            else {
                return await this.postConvert(obj, Constants.DATETIME_NAMESPACE.toLowerCase());
            }
        }
        else {
            return obj;
        }
    }

    /**
     * This method is to add PreConverter and PostConverter instance.
     * @param {string} name - A String containing the data type class name.
     * @param {object} preConverter - A PreConverter instance.
     * @param {object} postConverter - A PostConverter instance.
     */
    private static addToMap(name: string, preConverter: any, postConverter: any) {
        this.preConverterMap.set(name, preConverter);
        this.postConverterMap.set(name, postConverter);
    }

    /**
     * This method is to convert JSON value to expected data value.
     * @param {object} obj - An Object containing the JSON value.
     * @param {string} type - A String containing the expected method return type.
     * @throws {Error}
     */
    public static preConvert(obj: any, type: string): Promise<any> {
        this.init();
        if (this.preConverterMap.has(type)) {
            return this.preConverterMap.get(type)(obj);
        }
        return obj;
    }

    /**
     * This method to convert JavaScript data to JSON data value.
     * @param {object} obj - An object containing the JavaScript data value.
     * @param {string} type - A String containing the expected method return type.
     * @throws {Error}
     */
    public static async postConvert(obj: any, type: string): Promise<any> {
        this.init();
        if (this.postConverterMap.has(type)) {
            return await this.postConverterMap.get(type)(obj);
        }
        return obj;
    }
}

export {
    DatatypeConverter as MasterModel,
    DatatypeConverter as DatatypeConverter
}