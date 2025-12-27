import * as ZOHOCRMSDK from "@zohocrm/typescript-sdk-8.0"

class DeleteRecordUsingExternalId {
    static async deleteRecordUsingExternalId(): Promise<void> {
        const moduleAPIName = "Leads";
        const recordOperations = new ZOHOCRMSDK.Record.RecordOperations(moduleAPIName);
        const externalFieldValue = "EXTERNAL_LEAD_001"; // External ID value

        const paramInstance = new ZOHOCRMSDK.ParameterMap();
        const headerInstance = new ZOHOCRMSDK.HeaderMap();
        await headerInstance.add(ZOHOCRMSDK.Record.DeleteRecordUsingExternalIDHeader.X_EXTERNAL, "Leads.External_Lead_ID");
        const response = await recordOperations.deleteRecordUsingExternalId(externalFieldValue, paramInstance, headerInstance);
        if (response !== null) {
            console.log("Status Code: " + response.getStatusCode());
            
            const actionHandler = response.getObject();
            
            if (actionHandler instanceof ZOHOCRMSDK.Record.ActionWrapper) {
                const actionResponses = actionHandler.getData();
                if (actionResponses != null) {
                    for (let actionResponse of actionResponses) {
                        if (actionResponse instanceof ZOHOCRMSDK.Record.SuccessResponse) {
                            console.log("Status: " + actionResponse.getStatus().getValue());
                            console.log("Code: " + actionResponse.getCode().getValue());
                            console.log("Message: " + actionResponse.getMessage().getValue());
                            
                            const details = actionResponse.getDetails();
                            if (details != null) {
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
                            
                            const details = exception.getDetails();
                            if (details !== null) {
                                console.log("Details: ");
                                Array.from(details.keys()).forEach(key => {
                                    console.log(key + ": " + details.get(key));
                                });
                            }
                            
                            console.log("Message: " + exception.getMessage().getValue());
                        }
                    }
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
                        console.log(key + ": " + details.get(key));
                    });
                }
                
                console.log("Message: " + exception.getMessage().getValue());
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
        
        // Delete record using external ID
        await DeleteRecordUsingExternalId.deleteRecordUsingExternalId();
    }
}

DeleteRecordUsingExternalId.initializeAndCall();