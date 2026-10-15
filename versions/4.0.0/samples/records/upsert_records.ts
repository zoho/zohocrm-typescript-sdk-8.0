import * as ZOHOCRMSDK from "@zohocrm/typescript-sdk-8.0"

class UpsertRecords {
    static async upsertRecords(): Promise<void> {
        const moduleAPIName = "Leads";
        const recordOperations = new ZOHOCRMSDK.Record.RecordOperations(moduleAPIName);
        const bodyWrapper = new ZOHOCRMSDK.Record.BodyWrapper();
        const records = [];
        
        // Create first record for upsert (will create if not exists, update if exists)
        const record1 = new ZOHOCRMSDK.Record.Record();
        record1.addKeyValue("Last_Name", "Johnson");
        record1.addKeyValue("First_Name", "Michael");
        record1.addKeyValue("Company", "TechCorp Inc");
        record1.addKeyValue("Email", "michael.johnson@techcorp.com");
        record1.addKeyValue("Phone", "555-111-2222");
        
        records.push(record1);
        
        // Create second record for upsert
        const record2 = new ZOHOCRMSDK.Record.Record();
        record2.addKeyValue("Last_Name", "Williams");
        record2.addKeyValue("First_Name", "Sarah");
        record2.addKeyValue("Company", "Global Solutions");
        record2.addKeyValue("Email", "sarah.williams@globalsolutions.com");
        record2.addKeyValue("Phone", "555-333-4444");
        
        records.push(record2);
        
        bodyWrapper.setData(records);
        
        const headerInstance = new ZOHOCRMSDK.HeaderMap();
        
        const response = await recordOperations.upsertRecords(bodyWrapper, headerInstance);
        if (response !== null) {
            console.log("Status Code: " + response.getStatusCode());
            
            const actionHandler = response.getObject();
            
            if (actionHandler instanceof ZOHOCRMSDK.Record.ActionWrapper) {
                const actionResponses = actionHandler.getData();
                if (actionResponses != null) {
                    for (let i = 0; i < actionResponses.length; i++) {
                        const actionResponse = actionResponses[i];
                        console.log(`\\nRecord ${i + 1} Upsert Response:`);
                        
                        if (actionResponse instanceof ZOHOCRMSDK.Record.SuccessResponse) {
                            console.log("Status: " + actionResponse.getStatus().getValue());
                            console.log("Code: " + actionResponse.getCode().getValue());
                            console.log("Message: " + actionResponse.getMessage());
                            
                            const details = actionResponse.getDetails();
                            if (details != null) {
                                console.log("Details:");
                                Array.from(details.keys()).forEach(key => {
                                    console.log("  " + key + ": " + details.get(key));
                                });
                                
                                if (details.has("id")) {
                                    console.log("Record ID: " + details.get("id"));
                                }
                                
                                if (details.has("duplicate_field")) {
                                    console.log("Duplicate Field: " + details.get("duplicate_field"));
                                }
                                
                                if (details.has("action")) {
                                    const action = details.get("action");
                                    console.log("Action Performed: " + action);
                                    if (action === "insert") {
                                        console.log("✓ Record was CREATED (new record)");
                                    } else if (action === "update") {
                                        console.log("✓ Record was UPDATED (existing record)");
                                    }
                                }
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
                            
                            console.log("Message: " + exception.getMessage());
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
        await UpsertRecords.upsertRecords();
    }
}

UpsertRecords.initializeAndCall();