import * as ZOHOCRMSDK from "@zohocrm/typescript-sdk-8.0"

class DeletePhoto {
    static async deletePhoto(): Promise<void> {
        const moduleAPIName = "Leads";
        const recordOperations = new ZOHOCRMSDK.Record.RecordOperations(moduleAPIName);
        const recordId = BigInt("1055806000028683001"); // Replace with actual record ID
        
        const response = await recordOperations.deletePhoto(recordId);
        if (response !== null) {
            console.log("Status Code: " + response.getStatusCode());
            
            const actionHandler = response.getObject();
            
            if (actionHandler instanceof ZOHOCRMSDK.Record.ActionWrapper) {
                const actionResponses = actionHandler.getData();
                if (actionResponses !== null) {
                    for (let actionResponse of actionResponses) {
                        if (actionResponse instanceof ZOHOCRMSDK.Record.SuccessResponse) {
                            console.log("\\n✓ Photo deleted successfully!");
                            console.log("Status: " + actionResponse.getStatus().getValue());
                            console.log("Code: " + actionResponse.getCode().getValue());
                            console.log("Message: " + actionResponse.getMessage().getValue());
                            
                            const details = actionResponse.getDetails();
                            if (details !== null) {
                                console.log("\\nDeletion Details:");
                                Array.from(details.keys()).forEach(key => {
                                    console.log("  " + key + ": " + details.get(key));
                                });
                            }
                        }
                        else if (actionResponse instanceof ZOHOCRMSDK.Record.APIException) {
                            const exception = actionResponse;
                            console.log("Status: " + exception.getStatus().getValue());
                            console.log("Code: " + exception.getCode().getValue());
                            console.log("Message: " + exception.getMessage().getValue());
                            const details = exception.getDetails();
                            if (details !== null) {
                                console.log("Details:");
                                Array.from(details.keys()).forEach(key => {
                                    console.log("  " + key + ": " + details.get(key));
                                });
                            }
                        }
                    }
                }
            }
            else if (actionHandler instanceof ZOHOCRMSDK.Record.APIException) {
                const exception = actionHandler;
                console.log("Status: " + exception.getStatus().getValue());
                console.log("Code: " + exception.getCode().getValue());
                console.log("Message: " + exception.getMessage().getValue());
                
                const details = exception.getDetails();
                if (details !== null) {
                    console.log("Details:");
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
        
        // Show deletion tips first
        await DeletePhoto.deletePhoto();
    }
}

DeletePhoto.initializeAndCall();