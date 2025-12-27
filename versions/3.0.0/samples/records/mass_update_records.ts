import * as ZOHOCRMSDK from "@zohocrm/typescript-sdk-8.0"

class MassUpdateRecords {
    static async massUpdateRecords(): Promise<void> {
        const moduleAPIName = "Leads";
        const recordOperations = new ZOHOCRMSDK.Record.RecordOperations(moduleAPIName);
        const bodyWrapper = new ZOHOCRMSDK.Record.MassUpdateBodyWrapper();
        
        const data = new ZOHOCRMSDK.Record.Record();
        data.addKeyValue("City", "Chennai");
        bodyWrapper.setData([data]);

        bodyWrapper.setCvid("1055806000000087501"); // Custom View ID
        bodyWrapper.setIds(["1055806000023311047", "3477061000005177002"]); // Record IDs to be updated
        bodyWrapper.setOverWrite(true); // Overwrite existing values
        
        const response = await recordOperations.massUpdateRecords(bodyWrapper);
        if (response !== null) {
            console.log("Status Code: " + response.getStatusCode());
            
            const massUpdateActionHandler = response.getObject();
            
            if (massUpdateActionHandler instanceof ZOHOCRMSDK.Record.MassUpdateActionWrapper) {
                const massUpdateResponses = massUpdateActionHandler.getData();
                if (massUpdateResponses != null) {
                    for (let massUpdateResponse of massUpdateResponses) {
                        if (massUpdateResponse instanceof ZOHOCRMSDK.Record.MassUpdateSuccessResponse) {
                            console.log("Mass Update Initiated Successfully!");
                            console.log("Status: " + massUpdateResponse.getStatus().getValue());
                            console.log("Code: " + massUpdateResponse.getCode().getValue());
                            console.log("Message: " + massUpdateResponse.getMessage().getValue());
                            
                            const details = massUpdateResponse.getDetails();
                            if (details != null) {
                                console.log("Mass Update Details:");
                                Array.from(details.keys()).forEach(key => {
                                    console.log("  " + key + ": " + details.get(key));
                                });
                            }
                        }
                        else if (massUpdateResponse instanceof ZOHOCRMSDK.Record.APIException) {
                            const exception = massUpdateResponse;
                            console.log("Mass Update Failed!");
                            console.log("Status: " + exception.getStatus().getValue());
                            console.log("Code: " + exception.getCode().getValue());
                            
                            const details = exception.getDetails();
                            if (details !== null) {
                                console.log("Error Details: ");
                                Array.from(details.keys()).forEach(key => {
                                    console.log("  " + key + ": " + details.get(key));
                                });
                            }
                            
                            console.log("Message: " + exception.getMessage().getValue());
                        }
                    }
                }
            }
            else if (massUpdateActionHandler instanceof ZOHOCRMSDK.Record.APIException) {
                const exception = massUpdateActionHandler;
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
        await MassUpdateRecords.massUpdateRecords();
    }
}

MassUpdateRecords.initializeAndCall();