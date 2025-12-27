import * as ZOHOCRMSDK from "@zohocrm/typescript-sdk-8.0";

class ExecuteFunctionUsingRequestBody {
    static async executeFunctionUsingRequestBody() {
        const functionName = "get_record_lead";
        const authType = "oauth";
        let arguments1 = new Map();
        let innerMap = new Map();
        innerMap.set("12223322", "iuubnf");
        arguments1.set("zoho", innerMap);
        let functionsOperations: ZOHOCRMSDK.Functions.FunctionsOperations = new ZOHOCRMSDK.Functions.FunctionsOperations(functionName, authType, arguments1);
        let bodyWrapper: ZOHOCRMSDK.Functions.BodyWrapper = new ZOHOCRMSDK.Functions.BodyWrapper();
        let requestBody = new Map();
        requestBody.set("name", "javascript");
        requestBody.set("name", "javascript");
        let subMap = new Map();
        subMap.set("name", "JAVASCRIPT-2.1");
        subMap.set("version", "1.0.0");
        requestBody.set("v2.1", subMap);
        bodyWrapper.setBody(requestBody);
        let paramInstance = new ZOHOCRMSDK.ParameterMap();
        const param = {
            "1221": "2111221",
            "15221": "21113221",
            "12421": "211341221"
        };
        await paramInstance.add(new ZOHOCRMSDK.Param("Java", Object.name), param);
        let headerInstance = new ZOHOCRMSDK.HeaderMap();
        let response : ZOHOCRMSDK.APIResponse<ZOHOCRMSDK.Functions.ResponseWrapper.MasterModel>= await functionsOperations.executeFunctionUsingRequestBody(bodyWrapper, paramInstance, headerInstance);
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
        await ExecuteFunctionUsingRequestBody.executeFunctionUsingRequestBody();
    }
}
ExecuteFunctionUsingRequestBody.initializeAndCall();