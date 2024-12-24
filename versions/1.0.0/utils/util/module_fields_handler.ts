import { Initializer } from "../../routes/initializer";
import path from "path";
import fs, {existsSync, unlinkSync} from "fs";
import { Constants } from "./constants";
import { Converter } from "./converter";
import { SDKException } from "../../core/com/zoho/crm/api/exception/sdk_exception";
import * as Logger from "winston";
import { Utility } from "./utility";

/**
 * The class contains methods to manipulate the module fields only when autoRefreshFields is set to false in Initializer.
 */
export class ModuleFieldsHandler {
    /**
     * The method to obtain resources directory path.
     * @returns {String} A String representing the directory's absolute path.
    */
    private static async getDirectory(): Promise<string>  {
        let initializer = await Initializer.getInitializer().catch((err) => {throw err;});
        return path.join(initializer.getResourcePath(), Constants.FIELD_DETAILS_DIRECTORY)
    }

    /**
     * The method to delete fields JSON File of the current user.
     * @throws {SDKException}
    */
    public static async deleteFieldsFile() {
        try {
            let recordFieldDetailsPath = await Converter.getEncodedFileName().catch((err) => {throw err;});
            if (existsSync(recordFieldDetailsPath)){
                unlinkSync(recordFieldDetailsPath);
            }
        } catch (error) {
            let exception = new SDKException(null, null, null, error);
            Logger.error(Constants.DELETE_FIELD_FILE_ERROR, exception);
            throw exception;
        }
    }

    /**
     * The method to delete all field JSON files.
     * @throws {SDKException}
    */
    public static async deleteAllFieldFiles() {
        try {
            let dir = await this.getDirectory().catch((err) => {throw err;});
            fs.readdirSync(dir).forEach(fileName => {
                let filepath = path.resolve(dir, fileName);
                fs.unlinkSync(filepath);
            });
        } catch (error) {
            let exception = new SDKException(null, null, null, error);
            Logger.error(Constants.DELETE_FIELD_FILES_ERROR, exception);
            throw exception;
        }
    }

    /**
     * The method to delete fields of the given module from the current user's fields JSON file.
     * @param {String} module A string representing the module.
     * @throws {SDKException}
    */
    public static async deleteFields(module: string) {
        try {
            let recordFieldDetailsPath = await Converter.getEncodedFileName().catch((err) => {throw err;});
            if (fs.existsSync(recordFieldDetailsPath)) {
                let recordFieldDetailsJson: { [key: string]: any } = await Initializer.getJSON(recordFieldDetailsPath);
                if (recordFieldDetailsJson.hasOwnProperty(module.toLowerCase())) {
                    await Utility.deleteFields(recordFieldDetailsJson, module);
                    fs.writeFileSync(recordFieldDetailsPath, JSON.stringify(recordFieldDetailsJson));
                }
            }
        } catch (error) {
            let exception = new SDKException(null, null, null, error);

            throw exception;
        }
    }

    /**
     * The method to force-refresh fields of a module.
     * @param {String} module A string representing the module.
     * @throws {SDKException}
    */
    public static async refreshFields(module: string) {
        try {
            await this.deleteFields(module);
            await Utility.getFieldsInfo(module, null).catch(err => { throw err; });
        } catch (error) {
            if (!(error instanceof SDKException)) {
                error = new SDKException(null, null, null, error);
            }
            Logger.error(Constants.REFRESH_SINGLE_MODULE_FIELDS_ERROR + module, error);
            throw error;
        }
    }

    /**
     * The method to force-refresh fields of all the available modules.
     * @throws {SDKException}
     */
    public static async refreshAllModules() {
        try {
            await Utility.refreshModules().catch((err) => {throw err;});
        } catch (error) {
            if (!(error instanceof SDKException)) {
                error = new SDKException(null, null, null, error);
            }
            Logger.error(Constants.REFRESH_ALL_MODULE_FIELDS_ERROR, error);
            throw error;
        }
    }
}