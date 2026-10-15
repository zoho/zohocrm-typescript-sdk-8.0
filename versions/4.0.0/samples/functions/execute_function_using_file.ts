import * as ZOHOCRMSDK from "@zohocrm/typescript-sdk-8.0";

class ExecuteFunctionUsingFile {
    static async executeFunctionUsingFile() {
        const functionName = "test_java";
        const authType = "oauth";
        let functionsOperations: ZOHOCRMSDK.Functions.FunctionsOperations = new ZOHOCRMSDK.Functions.FunctionsOperations(functionName, authType, null);
        let fileBodyWrapper: ZOHOCRMSDK.Functions.FileBodyWrapper = new ZOHOCRMSDK.Functions.FileBodyWrapper();
        let streamWrapper: ZOHOCRMSDK.StreamWrapper = new ZOHOCRMSDK.StreamWrapper(null, null, "./sample.txt");
        fileBodyWrapper.setInputfile(streamWrapper);
        let paramInstance: ZOHOCRMSDK.ParameterMap = new ZOHOCRMSDK.ParameterMap();
        const param = {
            "1221": "2111221",
            "15221": "21113221",
            "12421": "211341221"
        };
        await paramInstance.add(new ZOHOCRMSDK.Param("Java", Map.name), param);
        let headerInstance: ZOHOCRMSDK.HeaderMap = new ZOHOCRMSDK.HeaderMap();
        let response: ZOHOCRMSDK.APIResponse<ZOHOCRMSDK.Functions.ResponseWrapper.MasterModel> = await functionsOperations.executeFunctionUsingFile(fileBodyWrapper, paramInstance, headerInstance);
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
        await ExecuteFunctionUsingFile.executeFunctionUsingFile();
    }
}
ExecuteFunctionUsingFile.initializeAndCall();