import * as ZOHOCRMSDK from "@zohocrm/typescript-sdk-8.0"
import * as fs from "fs";

class UploadFiles {
    static async uploadFiles(absoluteFilePath: string): Promise<void> {
        const filesOperations = new ZOHOCRMSDK.Files.FilesOperations();
        
        const fileBodyWrapper = new ZOHOCRMSDK.Files.BodyWrapper();
        let streamWrapper = new ZOHOCRMSDK.StreamWrapper(undefined, undefined, absoluteFilePath);
        fileBodyWrapper.setFile([streamWrapper]);
        
        const paramInstance = new ZOHOCRMSDK.ParameterMap();
        const response = await filesOperations.uploadFiles(fileBodyWrapper, paramInstance);
        
        if (response !== null) {
            console.log("Status Code: " + response.getStatusCode());
            
            const actionHandler = response.getObject();

            if (actionHandler instanceof ZOHOCRMSDK.Files.ActionWrapper) {
                const actionWrapper = actionHandler;
                const actionResponses = actionWrapper.getData();

                if (actionResponses != null) {
                    for (const actionResponse of actionResponses) {
                        if (actionResponse instanceof ZOHOCRMSDK.Files.SuccessResponse) {
                            const successResponse = actionResponse;
                            console.log("Status: " + successResponse.getStatus().getValue());
                            console.log("Code: " + successResponse.getCode().getValue());
                            
                            const details = successResponse.getDetails();
                            if (details !== null) {
                                console.log("Details: ");
                                Array.from(details.keys()).forEach(key => {
                                    console.log(key + ": " + details.get(key));
                                });
                            }
                            
                            console.log("Message: " + successResponse.getMessage());
                        }
                        else if (actionResponse instanceof ZOHOCRMSDK.Files.APIException) {
                            const exception = actionResponse;
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
            }
            else if (actionHandler instanceof ZOHOCRMSDK.Files.APIException) {
                const exception = actionHandler;
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
        let absoluteFilePath = "./download.png";
        await UploadFiles.uploadFiles(absoluteFilePath);
    }
}

UploadFiles.initializeAndCall();