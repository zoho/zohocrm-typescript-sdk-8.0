import * as fs from "fs";
import { SDKException } from "../../core/com/zoho/crm/api/exception/sdk_exception";
import * as path from "path";
import { Constants } from "./constants";

/**
 * This class handles the file stream and name.
 */
class StreamWrapper {
    private name: string | undefined;
    private stream: fs.ReadStream | undefined;
    private file: string | undefined;

    /**
     * Creates a StreamWrapper class instance with the specified parameters.
     * @param {string} name - A String containing the file name.
     * @param {object} stream - A InputStream containing the file stream.
     * @param {string} filePath - A String containing the absolute file path.
    */
    constructor(name?: string, stream?: fs.ReadStream, filePath?: string | null) {
        if (filePath === undefined || filePath === null) {
            this.name = name;
            this.stream = stream;
        } else {
            if (!fs.existsSync(filePath)) {
                throw new SDKException(Constants.FILE_ERROR, Constants.FILE_DOES_NOT_EXISTS);
            }
            this.file = filePath;
            this.name = path.basename(filePath);
            this.stream = fs.createReadStream(filePath);
        }
    }

    /**
     * This is a getter method to get the file name.
     * @returns A String representing the file name.
    */
    public getName(): string | undefined {
        return this.name;
    }

    /**
     * This is a getter method to get the file input stream.
     * @returns A ReadStream representing the file input stream.
    */
    public getStream(): fs.ReadStream | undefined {
        return this.stream;
    }
}

export {
    StreamWrapper as MasterModel,
    StreamWrapper as StreamWrapper
}