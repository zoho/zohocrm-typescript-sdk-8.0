import * as ZOHOCRMSDK from "@zohocrm/typescript-sdk-8.0"

class UpdateRecords {
    static async updateRecords(): Promise<void> {
        const moduleAPIName = "Leads";
        const recordOperations = new ZOHOCRMSDK.Record.RecordOperations(moduleAPIName);
        const bodyWrapper = new ZOHOCRMSDK.Record.BodyWrapper();
        const records = [];
        
        // Create first record to update
        const record1 = new ZOHOCRMSDK.Record.Record();
        record1.setId(BigInt("1055806000028638058"));
        record1.addKeyValue("Last_Name", "Bulk Updated LastName 1");
        
        records.push(record1);
        
        // Create second record to update
        const record2 = new ZOHOCRMSDK.Record.Record();
        record2.setId(BigInt("1055806000000026012"));
        record2.addKeyValue("Last_Name", "Bulk Updated LastName 2");
        
        records.push(record2);
        
        // Create third record to update
        const record3 = new ZOHOCRMSDK.Record.Record();
        record3.setId(BigInt("1055806000000026013"));
        record3.addKeyValue("Last_Name", "Bulk Updated LastName 3");
        
        records.push(record3);
        
        bodyWrapper.setData(records);
        
        const headerInstance = new ZOHOCRMSDK.HeaderMap();
        
        const response = await recordOperations.updateRecords(bodyWrapper, headerInstance);
        if (response !== null) {
            console.log("Status Code: " + response.getStatusCode());
            
            const actionHandler = response.getObject();
            
            if (actionHandler instanceof ZOHOCRMSDK.Record.ActionWrapper) {
                const actionResponses = actionHandler.getData();
                if (actionResponses != null) {
                    for (let actionResponse of actionResponses) {
                        if (actionResponse instanceof ZOHOCRMSDK.Record.SuccessResponse) {
                            console.log("Delete Successful!");
                            console.log("Status: " + actionResponse.getStatus().getValue());
                            console.log("Code: " + actionResponse.getCode().getValue());
                            console.log("Message: " + actionResponse.getMessage().getValue());
                            
                            const details = actionResponse.getDetails();
                            if (details != null) {
                                Array.from(details.keys()).forEach(key => {
                                    console.log("  " + key + ": " + details.get(key));
                                });
                            }
                        }
                        else if (actionResponse instanceof ZOHOCRMSDK.Record.APIException) {
                            const exception = actionResponse;
                            console.log("Delete Failed!");
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
        await UpdateRecords.updateRecords();
    }
}

UpdateRecords.initializeAndCall();