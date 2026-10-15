import * as ZOHOCRMSDK from "@zohocrm/typescript-sdk-8.0"

class UpdateRecord {
    static async updateRecord(): Promise<void> {
        const moduleAPIName = "Leads";
        const recordOperations = new ZOHOCRMSDK.Record.RecordOperations(moduleAPIName);
        const recordId = BigInt("1055806000028638058");
        const bodyWrapper = new ZOHOCRMSDK.Record.BodyWrapper();
        const records = [];
        
        // Create record to update
        const record = new ZOHOCRMSDK.Record.Record();
        record.setId(recordId);
        
        // Update field values
        record.addKeyValue("Last_Name", "Updated Last Name");
        record.addKeyValue("First_Name", "Updated First Name");
        record.addKeyValue("Company", "Updated Company Name");
        record.addKeyValue("Email", "updated.email@example.com");
        record.addKeyValue("Phone", "555-999-8888");
        record.addKeyValue("Annual_Revenue", 2000000);
        record.addKeyValue("Description", "Updated record with new information");
        
        records.push(record);
        bodyWrapper.setData(records);
        
        const headerInstance = new ZOHOCRMSDK.HeaderMap();
        
        const response = await recordOperations.updateRecord(recordId, bodyWrapper, headerInstance);
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
        await UpdateRecord.updateRecord();
    }
}

UpdateRecord.initializeAndCall();