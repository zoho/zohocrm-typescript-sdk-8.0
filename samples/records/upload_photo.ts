import * as ZOHOCRMSDK from "@zohocrm/typescript-sdk-8.0"

class UploadPhoto {
    static async uploadPhoto(): Promise<void> {
        const moduleAPIName = "Leads";
        const recordOperations = new ZOHOCRMSDK.Record.RecordOperations(moduleAPIName);
        const recordId = BigInt("1055806000028638063"); // Replace with actual record ID
        
        try {
            const photoPath = './download.png'; // Replace with actual photo path
            const fileBodyWrapper = new ZOHOCRMSDK.Record.FileBodyWrapper();
            const streamWrapper = new ZOHOCRMSDK.StreamWrapper(
                undefined,
                undefined,
                photoPath
            );
            
            fileBodyWrapper.setFile(streamWrapper);
            
            const response = await recordOperations.uploadPhoto(recordId, fileBodyWrapper);
            if (response !== null) {
                console.log("Status Code: " + response.getStatusCode());
                
                const actionHandler = response.getObject();
                
                if (actionHandler instanceof ZOHOCRMSDK.Record.SuccessResponse) {
                    console.log("Status: " + actionHandler.getStatus().getValue());
                    console.log("Code: " + actionHandler.getCode().getValue());
                    console.log("Message: " + actionHandler.getMessage().getValue());
                    
                    const details = actionHandler.getDetails();
                    if (details != null) {
                        console.log("Details:");
                        Array.from(details.keys()).forEach(key => {
                            console.log("  " + key + ": " + details.get(key));
                        });
                    }
                }
                else if (actionHandler instanceof ZOHOCRMSDK.Record.APIException) {
                    const exception = actionHandler;
                    console.log("Status: " + exception.getStatus().getValue());
                    console.log("Code: " + exception.getCode().getValue());
                    
                    const details = exception.getDetails();
                    if (details !== null) {
                        console.log("Details: ");
                        Array.from(details.keys()).forEach(key => {
                            console.log("  " + key + ": " + details.get(key));
                        });
                    }
                    console.log("Message: " + exception.getMessage().getValue());
                }
            }
        } catch (error) {
            console.log("Error during photo upload:");
            console.log(error);
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

        await UploadPhoto.uploadPhoto();
    }
}

UploadPhoto.initializeAndCall();