import * as ZOHOCRMSDK from "@zohocrm/typescript-sdk-8.0"

class GetStatus {
    static async getStatus() {
        const massDeleteTagsOperations = new ZOHOCRMSDK.MassDeleteTags.MassDeleteTagsOperations();
        const paramInstance = new ZOHOCRMSDK.ParameterMap();
        paramInstance.add(ZOHOCRMSDK.MassDeleteTags.GetStatusParam.JOB_ID, "3477022003");

        const response: ZOHOCRMSDK.APIResponse<ZOHOCRMSDK.MassDeleteTags.StatusResponseHandler.MasterModel> = await massDeleteTagsOperations.getStatus(paramInstance);

        if (response !== null) {
            console.log("Status Code: " + response.getStatusCode());

            const responseHandler = response.getObject();

            if (responseHandler instanceof ZOHOCRMSDK.MassDeleteTags.StatusResponseWrapper) {
                const statusResponseWrapper = responseHandler;
                const statusActionResponses = statusResponseWrapper.getMassDelete();

                for (const statusActionResponse of statusActionResponses) {
                    if (statusActionResponse instanceof ZOHOCRMSDK.MassDeleteTags.MassDeleteDetails) {
                        const massDeleteDetail = statusActionResponse;
                        console.log("Status JobId: " + massDeleteDetail.getJobId());
                        console.log("Status TotalCount: " + massDeleteDetail.getTotalCount());
                        console.log("Status FailedCount: " + massDeleteDetail.getFailedCount());
                        console.log("Status DeletedCount: " + massDeleteDetail.getDeletedCount());
                        console.log("Job Status: " + massDeleteDetail.getStatus().getValue());
                    } else if (statusActionResponse instanceof ZOHOCRMSDK.MassDeleteTags.APIException) {
                        const exception = statusActionResponse;
                        console.log("Status: " + exception.getStatus().getValue());
                        console.log("Code: " + exception.getCode().getValue());
                        console.log("Details: ");
                        const details = exception.getDetails();
                        if (details) {
                            for (const [key, value] of Object.entries(details)) {
                                console.log(key + ": " + value);
                            }
                        }
                        console.log("Message: " + exception.getMessage());
                    }
                }
            } else if (responseHandler instanceof ZOHOCRMSDK.MassDeleteTags.APIException) {
                const exception = responseHandler;
                console.log("Status: " + exception.getStatus().getValue());
                console.log("Code: " + exception.getCode().getValue());
                console.log("Details: ");
                const details = exception.getDetails();
                if (details) {
                    for (const [key, value] of Object.entries(details)) {
                        console.log(key + ": " + value);
                    }
                }
                console.log("Message: " + exception.getMessage());
            }
        }
    }

    static async initializeAndCall() {
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
        await GetStatus.getStatus();
    }
}

GetStatus.initializeAndCall();
