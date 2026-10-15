import * as ZOHOCRMSDK from "@zohocrm/typescript-sdk-8.0"

class UpdateRelatedRecord {
    static async updateRelatedRecord(): Promise<void> {
        const moduleAPIName = "Leads";
        const relatedListAPIName = "Products";
        const recordId = BigInt("1055806000028688019");
        const relatedRecordId =  BigInt("1055806000005356009");
        
        const relatedRecordsOperations = new ZOHOCRMSDK.RelatedRecords.RelatedRecordsOperations(relatedListAPIName, moduleAPIName);
        const request = new ZOHOCRMSDK.RelatedRecords.BodyWrapper();
        const headerInstance = new ZOHOCRMSDK.HeaderMap();
        
        // Create record array
        const recordsArray: ZOHOCRMSDK.Record.Record[] = [];
        const record = new ZOHOCRMSDK.Record.Record();
        record.addKeyValue("list_price", 50.56);
        recordsArray.push(record);
        request.setData(recordsArray);
        const response = await relatedRecordsOperations.updateRelatedRecord(relatedRecordId, recordId, request, headerInstance);
        
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
        await UpdateRelatedRecord.updateRelatedRecord();
    }
}

UpdateRelatedRecord.initializeAndCall();