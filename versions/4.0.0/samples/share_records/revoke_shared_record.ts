import * as ZOHOCRMSDK from "@zohocrm/typescript-sdk-8.0"

class RevokeSharedRecord {
    static async revokeSharedRecord(): Promise<void> {
        const recordId = BigInt("1055806000028688018");
        const moduleAPIName = "Leads";
        
        const shareRecordsOperations = new ZOHOCRMSDK.ShareRecords.ShareRecordsOperations(recordId, moduleAPIName);
        
        console.log(`Revoking shared access for record ID: ${recordId} in module: ${moduleAPIName}`);
        
        const response = await shareRecordsOperations.revokeSharedRecord();
        
        if (response !== null) {
            console.log("Status Code: " + response.getStatusCode());

            const deleteActionHandler = response.getObject();
            
            if (deleteActionHandler instanceof ZOHOCRMSDK.ShareRecords.DeleteActionWrapper) {
                const deleteActionWrapper = deleteActionHandler;
                const deleteActionResponse = deleteActionWrapper.getShare();
                
                if (deleteActionResponse instanceof ZOHOCRMSDK.ShareRecords.SuccessResponse) {
                    const successResponse = deleteActionResponse;
                    console.log("Status: " + successResponse.getStatus().getValue());
                    console.log("Code: " + successResponse.getCode().getValue());
                    console.log("Details: " + JSON.stringify(successResponse.getDetails()));
                    console.log("Message: " + successResponse.getMessage().getValue());
                    
                    // Check if record sharing was successfully revoked
                    if (successResponse.getStatus().getValue() === "success") {
                        console.log("✓ Record sharing successfully revoked");
                        console.log("All users no longer have shared access to this record");
                    }
                }
                else if (deleteActionResponse instanceof ZOHOCRMSDK.ShareRecords.APIException) {
                    const exception = deleteActionResponse;
                    console.log("Status: " + exception.getStatus().getValue());
                    console.log("Code: " + exception.getCode().getValue());
                    console.log("Details: " + JSON.stringify(exception.getDetails()));
                    console.log("Message: " + exception.getMessage().getValue());
                }
            }
            else if (deleteActionHandler instanceof ZOHOCRMSDK.ShareRecords.APIException) {
                const exception = deleteActionHandler;
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
        await RevokeSharedRecord.revokeSharedRecord();
    }
}

RevokeSharedRecord.initializeAndCall();