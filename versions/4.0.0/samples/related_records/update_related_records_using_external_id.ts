import * as ZOHOCRMSDK from "@zohocrm/typescript-sdk-8.0";

class UpdateRelatedRecordsUsingExternalId {
    
    public static async updateRelatedRecordsUsingExternalId() {
        try {
            let relatedRecordsOperations: ZOHOCRMSDK.RelatedRecords.RelatedRecordsOperations =  new ZOHOCRMSDK.RelatedRecords.RelatedRecordsOperations("Products", "Leads");
            let recordsArray: ZOHOCRMSDK.Record.Record[] = [];

            let record1: ZOHOCRMSDK.Record.Record = new ZOHOCRMSDK.Record.Record();
            
            record1.addKeyValue("Products_External", "AutomatedSDKExternal");
		    record1.addKeyValue("list_price", 50.56);
            recordsArray.push(record1);

            let record2: ZOHOCRMSDK.Record.Record = new ZOHOCRMSDK.Record.Record();
            
            record2.addKeyValue("Products_External", "AutomatedSDKExternal");
		    record2.addKeyValue("list_price", 50.56);
            
            recordsArray.push(record2);

            let bodyWrapper: ZOHOCRMSDK.RelatedRecords.BodyWrapper = new ZOHOCRMSDK.RelatedRecords.BodyWrapper();
            bodyWrapper.setData(recordsArray);

            let headerInstance: ZOHOCRMSDK.HeaderMap = new ZOHOCRMSDK.HeaderMap();
            let xExternal = "Leads.External,Products.Products_External";
            headerInstance.add(ZOHOCRMSDK.RelatedRecords.UpdateRelatedRecordsUsingExternalIDHeader.X_EXTERNAL, xExternal);
            let externalValue: string = "external_leads_id_123";

            let response: ZOHOCRMSDK.APIResponse<ZOHOCRMSDK.RelatedRecords.ActionHandler.MasterModel> = await relatedRecordsOperations.updateRelatedRecordsUsingExternalId(externalValue, bodyWrapper, headerInstance);

            if (response !== null) {
                console.log("Status Code: " + response.getStatusCode());
                
                const actionHandler = response.getObject();
                
                if (actionHandler instanceof ZOHOCRMSDK.RelatedRecords.ActionWrapper) {
                    const actionResponses = actionHandler.getData();
                    
                    if (actionResponses != null) {
                        for (let actionResponse of actionResponses) {
                            if (actionResponse instanceof ZOHOCRMSDK.RelatedRecords.SuccessResponse) {
                                console.log("Status: " + actionResponse.getStatus().getValue());
                                console.log("Code: " + actionResponse.getCode().getValue());
                                console.log("Details: ");
                                
                                const details = actionResponse.getDetails();
                                if (details != null) {
                                    Array.from(details.keys()).forEach(key => {
                                        console.log(key + ": " + details.get(key));
                                    });
                                }
                                
                                console.log("Message: " + actionResponse.getMessage().getValue());
                            }
                            else if (actionResponse instanceof ZOHOCRMSDK.RelatedRecords.APIException) {
                                console.log("Status: " + actionResponse.getStatus().getValue());
                                console.log("Code: " + actionResponse.getCode().getValue());
                                
                                const details = actionResponse.getDetails();
                                if (details !== null) {
                                    console.log("Details: ");
                                    Array.from(details.keys()).forEach(key => {
                                        console.log(key + ": " + details.get(key));
                                    });
                                }
                                
                                console.log("Message: " + actionResponse.getMessage().getValue());
                            }
                        }
                    }
                }
                else if (actionHandler instanceof ZOHOCRMSDK.RelatedRecords.APIException) {
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

        } catch (error) {
            console.error("Error in updateRelatedRecordsUsingExternalId:", error);
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
        await UpdateRelatedRecordsUsingExternalId.updateRelatedRecordsUsingExternalId();
    }
}

// Execute the function
UpdateRelatedRecordsUsingExternalId.initializeAndCall();