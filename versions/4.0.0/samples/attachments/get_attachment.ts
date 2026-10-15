import * as ZOHOCRMSDK from "@zohocrm/typescript-sdk-8.0"
import * as fs from 'fs';
import * as path from "path";

class GetAttachment {
    static async getAttachment(attachmentId: bigint, recordId: bigint, moduleAPIName: string, destinationFolder: string): Promise<void> {
        const attachmentsOperations = new ZOHOCRMSDK.Attachments.AttachmentsOperations();
        
        const response = await attachmentsOperations.getAttachment(attachmentId, recordId, moduleAPIName);
        
        if (response !== null) {
            console.log("Status Code: " + response.getStatusCode());

            if ([204, 304].includes(response.getStatusCode())) {
                console.log(response.getStatusCode() === 204 ? "No Content" : "Not Modified");
                return;
            }

            const responseObject = response.getObject();

            if (responseObject instanceof ZOHOCRMSDK.Attachments.FileBodyWrapper) {
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
            else if (responseObject instanceof ZOHOCRMSDK.Attachments.APIException) {
                const exception = responseObject;
                console.log("Status: " + exception.getStatus().getValue());
                console.log("Code: " + exception.getCode().getValue());
                
                const details = exception.getDetails();
                if (details !== null) {
                    console.log("Details: ");
                    for (const [key, value] of Object.entries(details)) {
                        console.log(`${key}: ${value}`);
                    }
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
        let attachmentId = BigInt("1055806000028644001");
        let recordId = BigInt("1055806000028562118");
        let moduleAPIName = "Leads";
        let destinationFolder = "./";
        await GetAttachment.getAttachment(attachmentId, recordId, moduleAPIName, destinationFolder);
    }
}

GetAttachment.initializeAndCall();