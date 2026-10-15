import * as ZOHOCRMSDK from "@zohocrm/typescript-sdk-8.0"
import * as fs from 'fs';
import * as path from "path";

class GetFile {
    static async getFile(fileId: string, destinationFolder: string): Promise<void> {
        const filesOperations = new ZOHOCRMSDK.Files.FilesOperations();
        
        const paramInstance = new ZOHOCRMSDK.ParameterMap();
        await paramInstance.add(ZOHOCRMSDK.Files.GetFileParam.ID, fileId);
        
        const response = await filesOperations.getFile(paramInstance);
        
        if (response !== null) {
            console.log("Status Code: " + response.getStatusCode());

            if ([204, 304].includes(response.getStatusCode())) {
                console.log(response.getStatusCode() === 204 ? "No Content" : "Not Modified");
                return;
            }

            const responseObject = response.getObject();

            if (responseObject instanceof ZOHOCRMSDK.Files.FileBodyWrapper) {
                //Get StreamWrapper instance from the returned FileBodyWrapper instance
                let streamWrapper: ZOHOCRMSDK.StreamWrapper = responseObject.getFile();

                let name: string | undefined = streamWrapper.getName();

                if (name !== undefined) {
                    //Construct the file name by joining the destinationFolder and the name from StreamWrapper instance
                    let fileName = path.join(destinationFolder, name);

                    //Get the stream from StreamWrapper instance
                    let readStream: Buffer | fs.ReadStream | undefined = streamWrapper.getStream();

                    if (readStream !== undefined && readStream instanceof Buffer) {
                        //Write the stream to the destination file.
                        fs.writeFileSync(fileName, readStream);
                    }
                }
            }
            else if (responseObject instanceof ZOHOCRMSDK.Files.APIException) {
                const exception = responseObject;
                console.log("Status: " + exception.getStatus().getValue());
                console.log("Code: " + exception.getCode().getValue());
                
                const details = exception.getDetails();
                if (details !== null) {
                    console.log("Details: ");
                    Array.from(details.keys()).forEach(key => {
                        console.log(key + ": " + details.get(key));
                    });
                }
                
                console.log("Message: " + exception.getMessage());
            }
        }
    }

    public static async initializeAndCall() {
        let environment = ZOHOCRMSDK.INDataCenter.PRODUCTION();
        let token = new ZOHOCRMSDK.OAuthBuilder()
            .clientId("client_id")
            .clientSecret("client_secret")
            .grantToken("grant_token")
            .build();
        await(new ZOHOCRMSDK.InitializeBuilder())
            .environment(environment)
            .token(token)
            .initialize();
        let fileId = "7214c027e31dacb72196554361d640a560665ce766a661c7fdfdae309f7b2586bf2fbb195525d8a7744429f64adf37d8";
        let destinationFolder = "./";
        await GetFile.getFile(fileId, destinationFolder);
    }
}

GetFile.initializeAndCall();