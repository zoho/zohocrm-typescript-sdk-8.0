import * as ZOHOCRMSDK from "@zohocrm/typescript-sdk-8.0"


class EnrolCadences {
    static async enrolCadences(moduleAPIName: string): Promise<void> {
        const cadencesExecutionOperations = new ZOHOCRMSDK.CadencesExecution.CadencesExecutionOperations();
        const request = new ZOHOCRMSDK.CadencesExecution.BodyWrapper();
        const cadencesIds: Array<string> = ["34770785001"];
        request.setCadencesIds(cadencesIds);
        const ids: Array<string> = ["34770650001"];
        request.setIds(ids);

        const response = await cadencesExecutionOperations.enrollCadences(moduleAPIName, request);

        if (response !== null) {
            console.log("Status Code: " + response.getStatusCode());
            const actionHandler: ZOHOCRMSDK.CadencesExecution.ActionHandler.MasterModel = response.getObject();
            if (actionHandler instanceof ZOHOCRMSDK.CadencesExecution.ActionWrapper) {
                const actionWrapper: ZOHOCRMSDK.CadencesExecution.ActionWrapper = actionHandler as ZOHOCRMSDK.CadencesExecution.ActionWrapper;
                const actionResponses: Array<ZOHOCRMSDK.CadencesExecution.ActionResponse.MasterModel> = actionWrapper.getData();
                for (const actionResponse of actionResponses) {
                    if (actionResponse instanceof ZOHOCRMSDK.CadencesExecution.SuccessResponse) {
                        const successResponse: ZOHOCRMSDK.CadencesExecution.SuccessResponse = actionResponse as ZOHOCRMSDK.CadencesExecution.SuccessResponse;
                        console.log("Status: " + successResponse.getStatus().getValue());
                        console.log("Code: " + successResponse.getCode().getValue());
                        console.log("Details: ");
                        for (let [key, value] of Object.entries(successResponse.getDetails())) {
                            console.log(`${key}: ${value}`);
                        }
                        console.log("Message: " + successResponse.getMessage());
                    } else if (actionResponse instanceof ZOHOCRMSDK.CadencesExecution.APIException) {
                        const exception: ZOHOCRMSDK.CadencesExecution.APIException = actionResponse as ZOHOCRMSDK.CadencesExecution.APIException;
                        console.log("Status: " + exception.getStatus().getValue());
                        console.log("Code: " + exception.getCode().getValue());
                        console.log("Details: ");
                        for (let [key, value] of Object.entries(exception.getDetails())) {
                            console.log(`${key}: ${value}`);
                        }
                        console.log("Message: " + exception.getMessage());
                    }
                }
            } else if (actionHandler instanceof ZOHOCRMSDK.CadencesExecution.APIException) {
                const exception: ZOHOCRMSDK.CadencesExecution.APIException = actionHandler as ZOHOCRMSDK.CadencesExecution.APIException;
                console.log("Status: " + exception.getStatus().getValue());
                console.log("Code: " + exception.getCode().getValue());
                console.log("Details: ");
                for (let [key, value] of Object.entries(exception.getDetails())) {
                    console.log(`${key}: ${value}`);
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
        const moduleAPIName = "Leads";
        await EnrolCadences.enrolCadences(moduleAPIName);
    }
}

EnrolCadences.initializeAndCall();