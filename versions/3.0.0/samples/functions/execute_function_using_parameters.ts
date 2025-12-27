import * as ZOHOCRMSDK from "@zohocrm/typescript-sdk-8.0";

class ExecuteFunctionUsingParameters {

    static async executeFunctionUsingParameters() {
        const functionName = "get_record_lead";
        const authType = "oauth";
        let arguments1 = new Map();
        let innerMap = new Map();
        innerMap.set("12223322", "iuubnf");
        arguments1.set("zoho", innerMap);
        let functionsOperations = new ZOHOCRMSDK.Functions.FunctionsOperations(functionName, authType, arguments1);
        let paramInstance = new ZOHOCRMSDK.ParameterMap();
        const param = {
            "1221": "2111221",
            "15221": "21113221",
            "12421": "211341221"
        };
        await paramInstance.add(new ZOHOCRMSDK.Param("Java", Map.name), param);
        let headerInstance = new ZOHOCRMSDK.HeaderMap();
        let response : ZOHOCRMSDK.APIResponse<ZOHOCRMSDK.Functions.ResponseWrapper.MasterModel>= await functionsOperations.executeFunctionUsingParameters(paramInstance, headerInstance);
        if (response) {
            console.log("Status Code: " + response.getStatusCode());
            let responseWrapper = response.getObject();
            if (responseWrapper instanceof ZOHOCRMSDK.Functions.SuccessResponse) {
                console.log("Code: " + responseWrapper.getCode().getValue());
                console.log("Details: ");
                let details = responseWrapper.getDetails();
                for (const [key, value] of Object.entries(details)) {
                    console.log(`${key}: ${value}`);
                }
                console.log("Message: " + responseWrapper.getMessage().getValue());
            } else if (responseWrapper instanceof ZOHOCRMSDK.Functions.APIException) {
                console.log("Status: " + responseWrapper.getStatus().getValue());
                console.log("Code: " + responseWrapper.getCode().getValue());
                console.log("Details: ");
                let details = responseWrapper.getDetails();
                for (const [key, value] of Object.entries(details)) {
                    console.log(`${key}: ${value}`);
                }
                console.log("Message: " + responseWrapper.getMessage().getValue());
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
        await ExecuteFunctionUsingParameters.executeFunctionUsingParameters();
    }
}
ExecuteFunctionUsingParameters.initializeAndCall();