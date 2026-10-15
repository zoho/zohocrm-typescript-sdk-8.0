import * as ZOHOCRMSDK from "@zohocrm/typescript-sdk-8.0"
import * as fs from "fs";

class UploadAttachments {
    static async uploadAttachments(recordId: bigint, moduleAPIName: string, absoluteFilePath: string): Promise<void> {
        const attachmentsOperations = new ZOHOCRMSDK.Attachments.AttachmentsOperations();
        
        const fileBodyWrapper = new ZOHOCRMSDK.Attachments.FileBodyWrapper();
        const fileStream = fs.createReadStream(absoluteFilePath);
        let streamWrapper = new ZOHOCRMSDK.StreamWrapper(undefined, undefined, absoluteFilePath);
        fileBodyWrapper.setFile(streamWrapper);
        
        const response = await attachmentsOperations.uploadAttachments(recordId, moduleAPIName, fileBodyWrapper);
        
        if (response !== null) {
            console.log("Status Code: " + response.getStatusCode());
            
            const actionHandler = response.getObject();

            if (actionHandler instanceof ZOHOCRMSDK.Attachments.ActionWrapper) {
                const actionWrapper = actionHandler;
                const actionResponses = actionWrapper.getData();

                for (const actionResponse of actionResponses) {
                    if (actionResponse instanceof ZOHOCRMSDK.Attachments.SuccessResponse) {
                        const successResponse = actionResponse;
                        console.log("Status: " + successResponse.getStatus().getValue());
                        console.log("Code: " + successResponse.getCode().getValue());
                        
                        const details = successResponse.getDetails();
                        if (details !== null) {
                            console.log("Details: ");
                            for (const [key, value] of Object.entries(details)) {
                                console.log(`${key}: ${value}`);
                            }
                        }
                        
                        console.log("Message: " + successResponse.getMessage());
                    }
                    else if (actionResponse instanceof ZOHOCRMSDK.Attachments.APIException) {
                        const exception = actionResponse;
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
            else if (actionHandler instanceof ZOHOCRMSDK.Attachments.APIException) {
                const exception = actionHandler;
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
        let environment = ZOHOCRMSDK.USDataCenter.PRODUCTION();
        let token = new ZOHOCRMSDK.OAuthBuilder()
            .clientId("client_id")
            .clientSecret("client_secret")
            .grantToken("grant_token")
            .build();
        await(new ZOHOCRMSDK.InitializeBuilder())
            .environment(environment)
            .token(token)
            .initialize();
        let recordId = BigInt("1055806000028562118");
        let moduleAPIName = "Leads";
        let absoluteFilePath = "/path/to/file.pdf";
        await UploadAttachments.uploadAttachments(recordId, moduleAPIName, absoluteFilePath);
    }
}

UploadAttachments.initializeAndCall();