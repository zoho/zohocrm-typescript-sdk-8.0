import * as ZOHOCRMSDK from "@zohocrm/typescript-sdk-8.0"

class GetSharedRecordDetails {
    static async getSharedRecordDetails(): Promise<void> {
        const recordId = BigInt("1055806000028688018");
        const moduleAPIName = "Leads";
        
        const shareRecordsOperations = new ZOHOCRMSDK.ShareRecords.ShareRecordsOperations(recordId, moduleAPIName);
        
        // Create ParameterMap for optional query parameters
        const paramInstance = new ZOHOCRMSDK.ParameterMap();
        
        // Add sharedTo parameter to filter by specific user
        // paramInstance.add(ZOHOCRMSDK.ShareRecords.GetSharedRecordDetailsParam.SHAREDTO, BigInt("34096430001234"));

        // paramInstance.add(ZOHOCRMSDK.ShareRecords.GetSharedRecordDetailsParam.VIEW, "share");
        
        const response = await shareRecordsOperations.getSharedRecordDetails(paramInstance);
        
        if (response !== null) {
            console.log("Status Code: " + response.getStatusCode());
            
            if ([204, 304].includes(response.getStatusCode())) {
                console.log(response.getStatusCode() === 204 ? "No Content" : "Not Modified");
                return;
            }

            const responseHandler = response.getObject();
            
            if (responseHandler instanceof ZOHOCRMSDK.ShareRecords.ResponseWrapper) {
                const shareRecords = responseHandler.getShare();
                
                if (shareRecords != null) {
                    console.log("=== Shared Record Details ===");
                    for (let shareRecord of shareRecords) {
                        const user = shareRecord.getUser();
                        if (user !== null && user !== undefined) {
                            console.log("Shared With User ID: " + user.getId());
                            console.log("Shared With User Name: " + user.getName());
                            console.log("Shared With User Email: " + user.getEmail());
                        }
                        
                        const sharedBy = shareRecord.getSharedBy();
                        if (sharedBy !== null && sharedBy !== undefined) {
                            console.log("Shared By User ID: " + sharedBy.getId());
                            console.log("Shared By User Name: " + sharedBy.getName());
                        }
                        
                        console.log("Permission: " + shareRecord.getPermission());
                        console.log("Shared Time: " + shareRecord.getSharedTime());
                        
                        const sharedThrough = shareRecord.getSharedThrough();
                        if (sharedThrough !== null && sharedThrough !== undefined) {
                            console.log("Shared Through: " + JSON.stringify(sharedThrough));
                        }
                        
                        console.log("--------------------");
                    }
                } else {
                    console.log("No shared record details found.");
                }
            }
            else if (responseHandler instanceof ZOHOCRMSDK.ShareRecords.APIException) {
                const exception = responseHandler;
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
        await GetSharedRecordDetails.getSharedRecordDetails();
    }
}

GetSharedRecordDetails.initializeAndCall();