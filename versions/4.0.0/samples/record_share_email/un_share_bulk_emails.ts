import * as ZOHOCRMSDK from "@zohocrm/typescript-sdk-8.0";

class UnShareBulkEmails {

    static async unshareBulkEmails(moduleAPIName: string) {
        const recordShareEmailOperations: ZOHOCRMSDK.RecordShareEmail.RecordShareEmailOperations = new ZOHOCRMSDK.RecordShareEmail.RecordShareEmailOperations(moduleAPIName);
        const request: ZOHOCRMSDK.RecordShareEmail.BodyWrapper = new ZOHOCRMSDK.RecordShareEmail.BodyWrapper();
        request.setIds([BigInt(34771023), BigInt(347720)]);
        const response: ZOHOCRMSDK.APIResponse<ZOHOCRMSDK.RecordShareEmail.ActionHandler.MasterModel> = await recordShareEmailOperations.unshareBulkEmails(request);

        if (response) {
            console.log("Status Code:", response.getStatusCode());
            if ([204, 304].includes(response.getStatusCode())) {
                console.log(response.getStatusCode() === 204 ? "No Content" : "Not Modified");
                return;
            }
            let actionHandler = response.getObject();

            if (actionHandler instanceof ZOHOCRMSDK.RecordShareEmail.ActionWrapper) {
                const actionResponses: ZOHOCRMSDK.RecordShareEmail.ActionResponse.MasterModel[] = actionHandler.getData();

                for (const actionResponse of actionResponses) {
                    if (actionResponse instanceof ZOHOCRMSDK.RecordShareEmail.SuccessResponse) {
                        const successResponse: ZOHOCRMSDK.RecordShareEmail.SuccessResponse = actionResponse;
                        console.log("Status:", successResponse.getStatus().getValue());
                        console.log("Code:", successResponse.getCode().getValue());
                        console.log("Details:");
                        let details = successResponse.getDetails();
                        if (details != null) {
                            Array.from(details.keys()).forEach(key => {
                                console.log(key + ": " + details.get(key));
                            });
                        }
                        console.log("Message:", successResponse.getMessage().getValue());
                    } else if (actionResponse instanceof ZOHOCRMSDK.RecordShareEmail.APIException) {
                        const exception: ZOHOCRMSDK.RecordShareEmail.APIException = actionResponse;
                        console.log("Status:", exception.getStatus().getValue());
                        console.log("Code:", exception.getCode().getValue());
                        console.log("Details:");
                        let details = exception.getDetails();
                        if (details != null) {
                            Array.from(details.keys()).forEach(key => {
                                console.log(key + ": " + details.get(key));
                            });
                        }
                        console.log("Message:", exception.getMessage().getValue());
                    }
                }
            } else if (actionHandler instanceof ZOHOCRMSDK.RecordShareEmail.APIException) {
                const exception: ZOHOCRMSDK.RecordShareEmail.APIException = actionHandler;
                console.log("Status:", exception.getStatus().getValue());
                console.log("Code:", exception.getCode().getValue());
                console.log("Details:");
                let details = exception.getDetails();
                if (details != null) {
                    Array.from(details.keys()).forEach(key => {
                        console.log(key + ": " + details.get(key));
                    });
                }
                console.log("Message:", exception.getMessage().getValue());
            }
        }
    }
    static async initializeAndCall() {
        let environment: ZOHOCRMSDK.Environment = ZOHOCRMSDK.USDataCenter.PRODUCTION();
        let token: ZOHOCRMSDK.OAuthToken = new ZOHOCRMSDK.OAuthBuilder()
            .clientId("client_id")
            .clientSecret("client_secret")
            .grantToken("grant_token")
            .build();
        await (await new ZOHOCRMSDK.InitializeBuilder())
            .environment(environment)
            .token(token)
            .initialize();

        let moduleAPIName = "Leads";
        await UnShareBulkEmails.unshareBulkEmails(moduleAPIName);
    }
}

UnShareBulkEmails.initializeAndCall();