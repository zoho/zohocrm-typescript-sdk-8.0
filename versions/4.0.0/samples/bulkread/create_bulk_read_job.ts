import * as ZOHOCRMSDK from "@zohocrm/typescript-sdk-8.0"

class CreateBulkReadJob {
    static async createBulkReadJob(moduleAPIName: string): Promise<void> {
        const bulkReadOperations = new ZOHOCRMSDK.BulkRead.BulkReadOperations();
        const bodyWrapper = new ZOHOCRMSDK.BulkRead.BodyWrapper();

        // Set callback configuration (optional)
        const callback = new ZOHOCRMSDK.BulkRead.CallBack();
        callback.setUrl("https://www.example.com/callback");
        callback.setMethod(new ZOHOCRMSDK.Choice("post"));
        bodyWrapper.setCallback(callback);
        
        let query = new ZOHOCRMSDK.BulkRead.Query();
        // Set module details
        const module = new ZOHOCRMSDK.Modules.MinifiedModule();
        module.setAPIName(moduleAPIName);
        query.setModule(module);
        
        // Set file type
        query.setFileType("csv");
        
        // Set criteria for filtering records (optional)
        const criteria = new ZOHOCRMSDK.BulkRead.Criteria();
        let field1 = new ZOHOCRMSDK.Fields.MinifiedField();
        field1.setAPIName("Created_Time");
        criteria.setField(field1);
        criteria.setComparator(new ZOHOCRMSDK.Choice("between"));
        const criteriaValues = ["2023-01-01T00:00:00+05:30", "2024-12-31T23:59:59+05:30"];
        criteria.setValue(criteriaValues);
        
        // query.setCriteria(criteria);
        
        // Set fields to include in export (optional)
        const fields = ["First_Name", "Last_Name", "Email", "Phone", "Company"];
        query.setFields(fields);

        // Set the bulk read job to body wrapper
        bodyWrapper.setQuery(query);
        
        const response = await bulkReadOperations.createBulkReadJob(bodyWrapper);
        
        if (response !== null) {
            console.log("Status Code: " + response.getStatusCode());
            
            const actionHandler = response.getObject();

            if (actionHandler instanceof ZOHOCRMSDK.BulkRead.ActionWrapper) {
                const actionWrapper = actionHandler;
                const actionResponses = actionWrapper.getData();

                for (const actionResponse of actionResponses) {
                    if (actionResponse instanceof ZOHOCRMSDK.BulkRead.SuccessResponse) {
                        const successResponse = actionResponse;
                        console.log("Status: " + successResponse.getStatus().getValue());
                        console.log("Code: " + successResponse.getCode().getValue());
                        
                        const details = successResponse.getDetails();
                        if (details !== null) {
                            console.log("Details: ");
                            for (const [key, value] of Object.entries(details)) {
                                console.log(`${key}: ${value}`);
                            }
                            
                            // Extract job ID for future reference
                            if (details.has("id")) {
                                console.log("Bulk Read Job ID: " + details.get("id"));
                            }
                        }
                        
                        console.log("Message: " + successResponse.getMessage().getValue());
                    }
                    else if (actionResponse instanceof ZOHOCRMSDK.BulkRead.APIException) {
                        const exception = actionResponse;
                        console.log("Status: " + exception.getStatus().getValue());
                        console.log("Code: " + exception.getCode().getValue());
                        
                        const details = exception.getDetails();
                        if (details !== null) {
                            console.log("Details: ");
                            for (const [key, value] of Object.entries(details)) {
                                console.log(`${key}: ${value}`);
                            }
                        }
                        
                        console.log("Message: " + exception.getMessage());
                    }
                }
            }
            else if (actionHandler instanceof ZOHOCRMSDK.BulkRead.APIException) {
                const exception = actionHandler;
                console.log("Status: " + exception.getStatus().getValue());
                console.log("Code: " + exception.getCode().getValue());
                
                const details = exception.getDetails();
                if (details !== null) {
                    console.log("Details: ");
                    for (const [key, value] of Object.entries(details)) {
                        console.log(`${key}: ${value}`);
                    }
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
        let moduleAPIName = "Leads";
        await CreateBulkReadJob.createBulkReadJob(moduleAPIName);
    }
}

CreateBulkReadJob.initializeAndCall();