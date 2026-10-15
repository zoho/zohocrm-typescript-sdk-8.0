import * as ZOHOCRMSDK from "@zohocrm/typescript-sdk-8.0"

class MassUpdateOperations {
    static async getMassUpdateStatus(): Promise<void> {
        const moduleAPIName = "Leads";
        const recordOperations = new ZOHOCRMSDK.Record.RecordOperations(moduleAPIName);
        const jobId = "4409002306123"; // Replace with actual mass update job ID
        let paramInstance = new ZOHOCRMSDK.ParameterMap();
        await paramInstance.add(ZOHOCRMSDK.Record.GetMassUpdateStatusParam.JOB_ID, jobId);
        const response = await recordOperations.getMassUpdateStatus(paramInstance);
        if (response !== null) {
            console.log("Status Code: " + response.getStatusCode());
            
            const massUpdateResponseHandler = response.getObject();
            
            if (massUpdateResponseHandler instanceof ZOHOCRMSDK.Record.MassUpdateResponseWrapper) {
                const massUpdateResponses = massUpdateResponseHandler.getData();
                if (massUpdateResponses !== null) {
                    for (let massUpdateResponse of massUpdateResponses) {
                        if (massUpdateResponse instanceof ZOHOCRMSDK.Record.MassUpdate) {
                            console.log("  Status: " + (massUpdateResponse.getStatus().getValue()));
                            const totalCount = massUpdateResponse.getTotalCount();
                            const updatedCount = massUpdateResponse.getUpdatedCount();
                            const notUpdatedCount = massUpdateResponse.getNotUpdatedCount();
                             console.log("  Failed Count: " + (massUpdateResponse.getFailedCount()));
                            if (totalCount !== null) {
                                console.log("  Total Records: " + totalCount);
                            }
                            if (updatedCount !== null) {
                                console.log("  Successfully Updated: " + updatedCount);
                            }
                            if (notUpdatedCount !== null) {
                                console.log("  Failed to Update: " + notUpdatedCount);
                            }
                        }
                        else if (massUpdateResponse instanceof ZOHOCRMSDK.Record.APIException) {
                            const exception = massUpdateResponse;
                            console.log("Status: " + exception.getStatus().getValue());
                            console.log("Code: " + exception.getCode().getValue());
                            console.log("Message: " + exception.getMessage().getValue());
                            const details = exception.getDetails();
                            if (details !== null) {
                                console.log("Details: ");
                                Array.from(details.keys()).forEach(key => {
                                    console.log(key + ": " + details.get(key));
                                });
                            }
                        }
                    }
                }
            }
            else if (massUpdateResponseHandler instanceof ZOHOCRMSDK.Record.APIException) {
                const exception = massUpdateResponseHandler;
                console.log("Mass Update Status Check Failed!");
                console.log("Status: " + exception.getStatus().getValue());
                console.log("Code: " + exception.getCode().getValue());
                console.log("Message: " + exception.getMessage().getValue());
                
                const details = exception.getDetails();
                if (details !== null) {
                    console.log("Details:");
                    Array.from(details.keys()).forEach(key => {
                        console.log("  " + key + ": " + details.get(key));
                    });
                }
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
        await MassUpdateOperations.getMassUpdateStatus();
    }
}

MassUpdateOperations.initializeAndCall();