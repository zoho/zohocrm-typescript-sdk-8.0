import { Converter } from "./converter";

class XMLConverter extends Converter {
    public getResponse(response: object, pack: string): Promise<object> {
        throw new Error("Method not implemented.");
    }
    public formRequest(requestInstance: object, pack: string, instanceNumber: number | null, classMemberDetail: object | null): Promise<object> {
        throw new Error("Method not implemented.");
    }
    public getWrappedResponse(response: object, pack: string): Promise<(object|null)[]> {
        throw new Error("Method not implemented.");
    }
    public appendToRequest(requestBase: object): Promise<any> {
        throw new Error("Method not implemented.");
    }
}

export {
    XMLConverter as MasterModel,
    XMLConverter as XMLConverter
}