import * as ZOHOCRMSDK from "@zohocrm/typescript-sdk-8.0"

class DelinkRecords {
    static async delinkRecords(): Promise<void> {
        const moduleAPIName = "Leads";
        const relatedListAPIName = "Products";
        const recordId = BigInt("1055806000028638058");
        
        const relatedRecordsOperations = new ZOHOCRMSDK.RelatedRecords.RelatedRecordsOperations(relatedListAPIName, moduleAPIName);
        const paramInstance = new ZOHOCRMSDK.ParameterMap();
        const headerInstance = new ZOHOCRMSDK.HeaderMap();
        
        // Add parameters - IDs of related records to delink
        const relatedRecordIds = ["1055806000007230023", "1055806000007230023", "4409002306006"];
        await paramInstance.add(ZOHOCRMSDK.RelatedRecords.DelinkRecordsParam.IDS, relatedRecordIds.toString());
        const response = await relatedRecordsOperations.delinkRecords(recordId, paramInstance, headerInstance);
        
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
                            
                            console.log("Message: " + actionResponse.getMessage());
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
        await DelinkRecords.delinkRecords();
    }
}

DelinkRecords.initializeAndCall();