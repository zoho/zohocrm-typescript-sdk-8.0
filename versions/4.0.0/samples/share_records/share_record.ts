import * as ZOHOCRMSDK from "@zohocrm/typescript-sdk-8.0"

class ShareRecord {
    static async shareRecord(): Promise<void> {
        const recordId = BigInt("1055806000028688018");
        const moduleAPIName = "Leads";
        
        const shareRecordsOperations = new ZOHOCRMSDK.ShareRecords.ShareRecordsOperations(recordId, moduleAPIName);
        
        const bodyWrapper = new ZOHOCRMSDK.ShareRecords.BodyWrapper();
        
        const shareArray: ZOHOCRMSDK.ShareRecords.ShareRecord[] = [];
        const shareRecord = new ZOHOCRMSDK.ShareRecords.ShareRecord();

        const sharedWith = new ZOHOCRMSDK.Users.Users();
        sharedWith.setId(BigInt("1055806000017236002"));
        sharedWith.addKeyValue("type", "group");
        shareRecord.setSharedWith(sharedWith);
        
        shareRecord.setPermission("read_write");
        shareRecord.setType(new ZOHOCRMSDK.Choice("private"));
        
        shareArray.push(shareRecord);
        bodyWrapper.setShare(shareArray);
        const response = await shareRecordsOperations.shareRecord(bodyWrapper);
        if (response !== null) {
            console.log("Status Code: " + response.getStatusCode());

            const actionHandler = response.getObject();
            
            if (actionHandler instanceof ZOHOCRMSDK.ShareRecords.ActionWrapper) {
                const actionWrapper = actionHandler;
                const actionResponses = actionWrapper.getShare();
                
                if (actionResponses !== null) {
                    for (let i = 0; i < actionResponses.length; i++) {
                        const actionResponse = actionResponses[i];
                        if (actionResponse instanceof ZOHOCRMSDK.ShareRecords.SuccessResponse) {
                            const successResponse = actionResponse;
                            console.log("Status: " + successResponse.getStatus().getValue());
                            console.log("Code: " + successResponse.getCode().getValue());
                            console.log("Details: " + JSON.stringify(successResponse.getDetails()));
                            console.log("Message: " + successResponse.getMessage().getValue());
                        }
                        else if (actionResponse instanceof ZOHOCRMSDK.ShareRecords.APIException) {
                            const exception = actionResponse;
                            console.log("Status: " + exception.getStatus().getValue());
                            console.log("Code: " + exception.getCode().getValue());
                            console.log("Details: " + JSON.stringify(exception.getDetails()));
                            console.log("Message: " + exception.getMessage().getValue());
                        }
                    }
                }
            }
            else if (actionHandler instanceof ZOHOCRMSDK.ShareRecords.APIException) {
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
        let environment = ZOHOCRMSDK.USDataCenter.PRODUCTION();
        let token = new ZOHOCRMSDK.OAuthBuilder()
            .clientId("client_id")
            .clientSecret("client_secret")
            .grantToken("grant_token")
            .build();
        await(new ZOHOCRMSDK.InitializeBuilder())
            .environment(environment)
            .token(token)
            .initialize();
        await ShareRecord.shareRecord();
    }
}

ShareRecord.initializeAndCall();