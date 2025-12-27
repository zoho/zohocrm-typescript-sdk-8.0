import * as ZOHOCRMSDK from "@zohocrm/typescript-sdk-8.0"

class UnenrolCadences {
    public static async unenrolCadences(moduleAPIName: string) {
        let cadencesExecutionOperations = new ZOHOCRMSDK.CadencesExecution.CadencesExecutionOperations();
        let request = new ZOHOCRMSDK.CadencesExecution.BodyWrapper();

        let cadencesIds: Array<string> = [];
        cadencesIds.push("34770785001");
        request.setCadencesIds(cadencesIds);

        let ids: Array<string> = [];
        ids.push("347750001");
        request.setIds(ids);

        let response = await cadencesExecutionOperations.unenrollCadences(moduleAPIName, request);

        if (response !== null) {
            console.log("Status Code: " + response.getStatusCode());
            let actionHandler = response.getObject();
            if (actionHandler instanceof ZOHOCRMSDK.CadencesExecution.ActionWrapper) {
                let actionWrapper: ZOHOCRMSDK.CadencesExecution.ActionWrapper = actionHandler;
                let actionResponses = actionWrapper.getData();
                for (let actionResponse of actionResponses) {
                    if (actionResponse instanceof ZOHOCRMSDK.CadencesExecution.SuccessResponse) {
                        let successResponse: ZOHOCRMSDK.CadencesExecution.SuccessResponse = actionResponse;
                        console.log("Status: " + successResponse.getStatus().getValue());
                        console.log("Code: " + successResponse.getCode().getValue());
                        console.log("Details: ");
                        for (let [key, value] of Object.entries(successResponse.getDetails())) {
                            console.log(`${key}: ${value}`);
                        }
                        console.log("Message: " + successResponse.getMessage());
                    } else if (actionResponse instanceof ZOHOCRMSDK.CadencesExecution.APIException) {
                        let exception: ZOHOCRMSDK.CadencesExecution.APIException = actionResponse;
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
                let exception: ZOHOCRMSDK.CadencesExecution.APIException = actionHandler;
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
        let moduleAPIName = "Leads";
        await UnenrolCadences.unenrolCadences(moduleAPIName);
    }
}

UnenrolCadences.initializeAndCall();
