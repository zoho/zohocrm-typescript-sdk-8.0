import * as ZOHOCRMSDK from "@zohocrm/typescript-sdk-8.0"
import * as fs from 'fs';
import * as path from "path";

class GetPhoto {
    static async getPhoto(): Promise<void> {
        const moduleAPIName = "Leads";
        const recordOperations = new ZOHOCRMSDK.Record.RecordOperations(moduleAPIName);
        const recordId = BigInt("1055806000028638063"); // Replace with actual record ID
        let destinationFolder = "./";
        
        const response = await recordOperations.getPhoto(recordId);
        if (response !== null) {
            console.log("Status Code: " + response.getStatusCode());
            
            const fileHandler = response.getObject();
            
            if (fileHandler instanceof ZOHOCRMSDK.Record.FileBodyWrapper) {
                //Get StreamWrapper instance from the returned FileBodyWrapper instance
                let streamWrapper: ZOHOCRMSDK.StreamWrapper = fileHandler.getFile();

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
            else if (fileHandler instanceof ZOHOCRMSDK.Record.APIException) {
                const exception = fileHandler;
                console.log("Photo Retrieval Failed!");
                console.log("Record ID: " + recordId);
                console.log("Status: " + exception.getStatus().getValue());
                console.log("Code: " + exception.getCode().getValue());
                console.log("Message: " + exception.getMessage().getValue());
                
                const details = exception.getDetails();
                if (details !== null) {
                    console.log("\\nError Details:");
                    Array.from(details.keys()).forEach(key => {
                        console.log("  " + key + ": " + details.get(key));
                    });
                }
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
        await GetPhoto.getPhoto();
    }
}

GetPhoto.initializeAndCall();