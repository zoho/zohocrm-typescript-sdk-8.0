import * as ZOHOCRMSDK from "@zohocrm/typescript-sdk-8.0"

class GetDeletedRecords {
    static async getDeletedRecords(): Promise<void> {
        const moduleAPIName = "Leads";
        const recordOperations = new ZOHOCRMSDK.Record.RecordOperations(moduleAPIName);
        const paramInstance = new ZOHOCRMSDK.ParameterMap();
        const headerInstance = new ZOHOCRMSDK.HeaderMap();
        
        // Add parameters
        await paramInstance.add(ZOHOCRMSDK.Record.GetDeletedRecordsParam.TYPE, "all");
        await paramInstance.add(ZOHOCRMSDK.Record.GetDeletedRecordsParam.PAGE, 1);
        await paramInstance.add(ZOHOCRMSDK.Record.GetDeletedRecordsParam.PER_PAGE, 50);
        
        // Add If-Modified-Since header (optional)
        const modifiedSince = new Date("2024-01-01T00:00:00.000Z");
        await headerInstance.add(ZOHOCRMSDK.Record.GetDeletedRecordsHeader.IF_MODIFIED_SINCE, modifiedSince);
        
        const response = await recordOperations.getDeletedRecords(paramInstance, headerInstance);
        if (response !== null) {
            console.log("Status Code: " + response.getStatusCode());
            
            if ([204, 304].includes(response.getStatusCode())) {
                console.log(response.getStatusCode() === 204 ? "No Content" : "Not Modified");
                return;
            }

            const deletedRecordsHandler = response.getObject();
            
            if (deletedRecordsHandler instanceof ZOHOCRMSDK.Record.DeletedRecordsWrapper) {
                const deletedRecords = deletedRecordsHandler.getData();
                if (deletedRecords != null) {
                    console.log("Deleted Records Count: " + deletedRecords.length);
                    console.log("=====================================\\n");
                    
                    for (let i = 0; i < deletedRecords.length; i++) {
                        const deletedRecord = deletedRecords[i];
                        console.log(`Deleted Record ${i + 1}:`);
                        
                        const id = deletedRecord.getDeletedBy();
                        if (id != null) {
                            console.log("Deleted By ID: " + id.getId());
                            console.log("Deleted By Name: " + id.getName());
                            console.log("Deleted By Email: " + id.getEmail());
                        }
                        
                        const recordId = deletedRecord.getId();
                        if (recordId != null) {
                            console.log("Record ID: " + recordId);
                        }
                        
                        const deletedTime = deletedRecord.getDeletedTime();
                        if (deletedTime != null) {
                            console.log("Deleted Time: " + deletedTime);
                        }
                        
                        const createdBy = deletedRecord.getCreatedBy();
                        if (createdBy != null) {
                            console.log("Originally Created By: " + createdBy.getName());
                        }
                        
                        const type = deletedRecord.getType();
                        if (type != null) {
                            console.log("Record Type: " + type);
                        }
                        
                        // Get display name if available
                        const displayName = deletedRecord.getDisplayName();
                        if (displayName != null) {
                            console.log("Display Name: " + displayName);
                        }
                        
                        console.log("--------------------");
                    }
                }
                
                const info = deletedRecordsHandler.getInfo();
                if (info != null) {
                    console.log("\\nDeleted Records Info:");
                    console.log("Count: " + info.getCount());
                    console.log("More Records: " + info.getMoreRecords());
                    console.log("Per Page: " + info.getPerPage());
                    console.log("Page: " + info.getPage());
                    
                    if (info.getMoreRecords()) {
                        console.log("More deleted records available. Increase page number to get next set.");
                    }
                }
            }
            else if (deletedRecordsHandler instanceof ZOHOCRMSDK.Record.APIException) {
                const exception = deletedRecordsHandler;
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
        await GetDeletedRecords.getDeletedRecords();
    }
}

GetDeletedRecords.initializeAndCall();