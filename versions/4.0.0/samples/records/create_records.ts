import * as ZOHOCRMSDK from "@zohocrm/typescript-sdk-8.0"

class CreateRecords {
    static async createRecords(): Promise<void> {
        const moduleAPIName = "Leads";
        const recordOperations = new ZOHOCRMSDK.Record.RecordOperations(moduleAPIName);
        const bodyWrapper = new ZOHOCRMSDK.Record.BodyWrapper();
        const records = [];
        
        // Create first record
        const record1 = new ZOHOCRMSDK.Record.Record();
        record1.addKeyValue("Last_Name", "Doe");
        record1.addKeyValue("First_Name", "John");
        record1.addKeyValue("Company", "Zoho Corporation");
        record1.addKeyValue("Email", "john.doe@example.com");
        record1.addKeyValue("Phone", "555-123-4567");
        record1.addKeyValue("Lead_Status", new ZOHOCRMSDK.Choice("Not Contacted"));
        record1.addKeyValue("Lead_Source", new ZOHOCRMSDK.Choice("Advertisement"));
        record1.addKeyValue("Annual_Revenue", 1000000);
        
        records.push(record1);
        
        // Create second record
        const record2 = new ZOHOCRMSDK.Record.Record();
        record2.addKeyValue("Last_Name", "Smith");
        record2.addKeyValue("First_Name", "Jane");
        record2.addKeyValue("Company", "ABC Industries");
        record2.addKeyValue("Email", "jane.smith@example.com");
        record2.addKeyValue("Phone", "555-987-6543");
        record2.addKeyValue("Lead_Status", new ZOHOCRMSDK.Choice("Contacted"));
        record2.addKeyValue("Lead_Source", new ZOHOCRMSDK.Choice("Advertisement"));
        record2.addKeyValue("Annual_Revenue", 500000);
        
        records.push(record2);
        
        bodyWrapper.setData(records);
        
        const headerInstance = new ZOHOCRMSDK.HeaderMap();
        
        const response = await recordOperations.createRecords(bodyWrapper, headerInstance);
        if (response !== null) {
            console.log("Status Code: " + response.getStatusCode());
            
            const actionHandler = response.getObject();
            
            if (actionHandler instanceof ZOHOCRMSDK.Record.ActionWrapper) {
                const actionResponses = actionHandler.getData();
                if (actionResponses != null) {
                    for (let i = 0; i < actionResponses.length; i++) {
                        const actionResponse = actionResponses[i];
                        console.log(`\nRecord ${i + 1} Response:`);
                        
                        if (actionResponse instanceof ZOHOCRMSDK.Record.SuccessResponse) {
                            console.log("Status: " + actionResponse.getStatus().getValue());
                            console.log("Code: " + actionResponse.getCode().getValue());
                            console.log("Message: " + actionResponse.getMessage().getValue());
                            
                            const details = actionResponse.getDetails();
                            if (details != null) {
                                console.log("Details:");
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
        await CreateRecords.createRecords();
    }
}

CreateRecords.initializeAndCall();