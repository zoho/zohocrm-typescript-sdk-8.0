import * as ZOHOCRMSDK from "@zohocrm/typescript-sdk-8.0"
import * as fs from "fs";

class UploadFile {
    static async uploadFile(absoluteFilePath: string): Promise<void> {
        const bulkWriteOperations = new ZOHOCRMSDK.BulkWrite.BulkWriteOperations();
        
        const fileBodyWrapper = new ZOHOCRMSDK.BulkWrite.FileBodyWrapper();

        let streamWrapper = new ZOHOCRMSDK.StreamWrapper(undefined, undefined, absoluteFilePath);
        fileBodyWrapper.setFile(streamWrapper);
        
        // Set up headers (optional)
        const headerInstance = new ZOHOCRMSDK.HeaderMap();
        await headerInstance.add(ZOHOCRMSDK.BulkWrite.UploadFileHeader.FEATURE, "bulk-write");
        await headerInstance.add(ZOHOCRMSDK.BulkWrite.UploadFileHeader.X_CRM_ORG, "orgId");
        
        const response = await bulkWriteOperations.uploadFile(fileBodyWrapper, headerInstance);
        
        if (response !== null) {
            console.log("Status Code: " + response.getStatusCode());
            
            const actionResponse = response.getObject();

            if (actionResponse instanceof ZOHOCRMSDK.BulkWrite.SuccessResponse) {
                const successResponse = actionResponse;
                console.log("Status: " + successResponse.getStatus().getValue());
                console.log("Code: " + successResponse.getCode().getValue());
                
                const details = successResponse.getDetails();
                if (details !== null) {
                    console.log("Details: ");
                    for (const [key, value] of Object.entries(details)) {
                        console.log(`${key}: ${value}`);
                    }
                    
                    // Extract file ID for future reference
                    if (details.has("file_id")) {
                        console.log("Uploaded File ID: " + details.get("file_id"));
                    }
                }
                
                console.log("Message: " + successResponse.getMessage());
            }
            else if (actionResponse instanceof ZOHOCRMSDK.BulkWrite.APIException) {
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
        let absoluteFilePath = "./Leads.zip";
        await UploadFile.uploadFile(absoluteFilePath);
    }
}

UploadFile.initializeAndCall();