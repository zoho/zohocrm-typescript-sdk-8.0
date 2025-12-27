import * as path from "path";
import { Constants } from "./constants";
import { DatatypeConverter } from "./datatype_converter";
import { JSONConverter } from "./json_converter";
import { Choice } from "./choice";
import { CommonAPIHandler } from "../../routes/middlewares/common_api_handler";
import {Converter} from "./converter";

/**
 * This class validates the Header and Parameter values with the type accepted by the CRM APIs.
 */
class HeaderParamValidator {
    public async validate(name: string, className: string, value: any) {
        let jsonDetails: { [key: string]: any } = await this.getJSONDetails().catch((err) => { throw err });
        let jsonClassName: string = await this.getFileName(className);
        let typeDetail: { [key: string]: any } | null = null;
        if (jsonDetails.hasOwnProperty(jsonClassName)) {
            typeDetail = await this.getKeyJSONDetails(name, jsonDetails[jsonClassName]).catch((err) => { throw err });
        }
        if (typeDetail !== null) {
            if(typeDetail.hasOwnProperty(Constants.STRUCTURE_NAME)) {
                let converter = new JSONConverter(new CommonAPIHandler());
                let type = Object.prototype.toString.call(value);
                if (type == Constants.ARRAY_TYPE) {
                    let jsonArray = new Array();
                    for (let response of value) {
                        jsonArray.push(await converter.formRequest(response, typeDetail[Constants.STRUCTURE_NAME], 0, null).catch((err) => { throw err }));
                    }
                    return JSON.stringify(jsonArray);
                }
                return JSON.stringify(await converter.formRequest(value, typeDetail[Constants.STRUCTURE_NAME], 0, null).catch((err) => {
                    throw err
                }));
            }
            else if(typeDetail.hasOwnProperty(Constants.TYPE) && typeDetail[Constants.TYPE].toLowerCase() == Constants.CHOICE_NAMESPACE.toLowerCase()) {
                await Converter.checkChoiceValue1(Constants.CHOICE_NAMESPACE, typeDetail, value);
            }
            return (await this.parseData(value).catch((err) => {
                throw err
            })).toString();
        }
        let type = Object.prototype.toString.call(value);
        if (value instanceof Map || value instanceof Array){
            type = Constants.OBJECT_TYPE
        }
        return await DatatypeConverter.postConvert(value, type.toLowerCase());
    }

    private async parseData(value: any) {
        if (Array.isArray(value)) {
            let jsonArray = new Array();
            if (value.length > 0) {
                for (let request of value) {
                    jsonArray.push(await this.parseData(request).catch((err) => { throw err }));
                }
            }
            return jsonArray;
        }else if (value instanceof Map) {
            let jsonObject: any = {};
            for (let key of Array.from(value.keys())) {
                jsonObject[key] = await this.parseData(value.get(key)).catch((err) => { throw err; });
            }
            return jsonObject;
        } else if (value instanceof Choice) {
          return value.getValue();
        } else {
            let type = Object.prototype.toString.call(value);
            return (await DatatypeConverter.postConvert(value, type.toLowerCase())).toString();
        }
    }
    private async getJSONDetails() {
        let Initializer = (await import("../../routes/initializer")).Initializer;
        if (Initializer.jsonDetails == null) {
            Initializer.jsonDetails = await Initializer.getJSON(path.join(__dirname, "..", "..", Constants.CONFIG_DIRECTORY, Constants.JSON_DETAILS_FILE_PATH));
        }
        return Initializer.jsonDetails;
    }

    private async getFileName(name : any) {
        if(name.includes(".")) {
            let spl = name.toString().split(".");
            let className = await this.getSplitFileName(spl.pop());
            let resourceName = await this.getSplitFileName(spl.pop());
            return "core/" + spl.join("/").toLowerCase() + "/" + resourceName.join("_") + "/" + className.join("_");
        }
        return name;
    }

    private async getSplitFileName(className: string) {
        let fileName = []
        let nameParts = className.split(/([A-Z][a-z]+)/).filter(function (e) { return e });
        fileName.push(nameParts[0].toLowerCase());
        for (let i = 1; i < nameParts.length; i++) {
            fileName.push(nameParts[i].toLowerCase());
        }
        return fileName;
    }

    private async getKeyJSONDetails(name: string, jsonDetails: { [key: string]: any }) {
        let keyArray = Array.from(Object.keys(jsonDetails));
        for (let index = 0; index < keyArray.length; index++) {
            const key = keyArray[index];
            let detail = jsonDetails[key];
            if (detail.hasOwnProperty(Constants.NAME)) {
                if (detail[Constants.NAME].toLowerCase() == name.toLowerCase()) {
                    return detail;
                }
            }
        }
    }
}

export {
    HeaderParamValidator as MasterModel,
    HeaderParamValidator as HeaderParamValidator
}