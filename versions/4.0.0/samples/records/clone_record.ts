import * as ZOHOCRMSDK from "@zohocrm/typescript-sdk-8.0"

class CloneRecord {
    static async cloneRecord(moduleAPIName: string, recordId: bigint) {
        const recordOperations = new ZOHOCRMSDK.Record.RecordOperations(moduleAPIName);
        const response: ZOHOCRMSDK.APIResponse<ZOHOCRMSDK.Record.ActionHandler.MasterModel> = await recordOperations.cloneRecord(recordId);

        if (response !== null) {
            console.log("Status Code: " + response.getStatusCode());

            const actionHandler = response.getObject();

            if (actionHandler instanceof ZOHOCRMSDK.Record.ActionWrapper) {
                const actionWrapper = actionHandler as ZOHOCRMSDK.Record.ActionWrapper;
                const actionResponses = actionWrapper.getData();

                for (const actionResponse of actionResponses) {
                    if (actionResponse instanceof ZOHOCRMSDK.Record.SuccessResponse) {
                        const successResponse = actionResponse as ZOHOCRMSDK.Record.SuccessResponse;
                        console.log("Status: " + successResponse.getStatus().getValue());
                        console.log("Code: " + successResponse.getCode().getValue());
                        console.log("Details: ");
                        for (const [key, value] of Object.entries(successResponse.getDetails())) {
                            console.log(key + ": " + value);
                        }
                        console.log("Message: " + successResponse.getMessage().getValue());
                    } else if (actionResponse instanceof ZOHOCRMSDK.Record.APIException) {
                        const exception = actionResponse as ZOHOCRMSDK.Record.APIException;
                        console.log("Status: " + exception.getStatus().getValue());
                        console.log("Code: " + exception.getCode().getValue());
                        console.log("Details: ");
                        for (const [key, value] of Object.entries(exception.getDetails())) {
                            console.log(key + ": " + value);
                        }
                        console.log("Message: " + exception.getMessage().getValue());
                    }
                }
            } else if (actionHandler instanceof ZOHOCRMSDK.Record.APIException) {
                const exception = actionHandler as ZOHOCRMSDK.Record.APIException;
                console.log("Status: " + exception.getStatus().getValue());
                console.log("Code: " + exception.getCode().getValue());
                console.log("Details: ");
                for (const [key, value] of Object.entries(exception.getDetails())) {
                    console.log(key + ": " + value);
                }
                console.log("Message: " + exception.getMessage().getValue());
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
        const moduleAPIName = "Leads";
        const recordId = BigInt("7272250053001");
        await CloneRecord.cloneRecord(moduleAPIName, recordId);
    }
}

CloneRecord.initializeAndCall();
