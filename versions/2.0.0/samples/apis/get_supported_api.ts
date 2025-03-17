import * as ZOHOCRMSDK from "@zohocrm/typescript-sdk-8.0"
class GetSupportedAPI {
    public static async getSupportedAPI() {
        let filters: string | null = null;
        let apisOperations = new ZOHOCRMSDK.Apis.APIsOperations(filters);
        let response: ZOHOCRMSDK.APIResponse<ZOHOCRMSDK.Apis.ResponseWrapper | ZOHOCRMSDK.Apis.APIException> = await apisOperations.getSupportedAPI();

        if (response !== null) {
            console.log("Status Code: " + response.getStatusCode());
            if (response.getStatusCode() === 204) {
                console.log("No Content");
                return;
            }
            let responseHandler = response.getObject();
            if (responseHandler instanceof ZOHOCRMSDK.Apis.ResponseWrapper) {
                let responseWrapper: ZOHOCRMSDK.Apis.ResponseWrapper = responseHandler;
                let apis = responseWrapper.getApis();
                if (apis !== null) {
                    for (let api of apis) {
                        console.log("API Path : " + api.getPath());
                        let operationTypes = api.getOperationTypes();
                        for (let operationType of operationTypes) {
                            console.log("API Operation Method : " + operationType.getMethod());
                            console.log("API Operation OAuthScope : " + operationType.getOauthScope());
                            console.log("API Operation MaxCredits : " + operationType.getMaxCredits());
                            console.log("API Operation MinCredits : " + operationType.getMinCredits());
                        }
                    }
                }
            } else if (responseHandler instanceof ZOHOCRMSDK.Apis.APIException) {
                let exception: ZOHOCRMSDK.Apis.APIException = responseHandler;
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
        await GetSupportedAPI.getSupportedAPI();
    }
}

GetSupportedAPI.initializeAndCall()
