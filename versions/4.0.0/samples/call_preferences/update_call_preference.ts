import * as ZOHOCRMSDK from "@zohocrm/typescript-sdk-8.0";

class UpdateCallPreference{

    static async update_call_preference()
    {
        let callPreferencesOperations:ZOHOCRMSDK.CallPreferences.CallPreferencesOperations = new ZOHOCRMSDK.CallPreferences.CallPreferencesOperations();
        let bodyWrapper:ZOHOCRMSDK.CallPreferences.BodyWrapper = new ZOHOCRMSDK.CallPreferences.BodyWrapper();
        let callPreferences:ZOHOCRMSDK.CallPreferences.CallPreferences = new ZOHOCRMSDK.CallPreferences.CallPreferences();
        callPreferences.setShowFromNumber(true);
        callPreferences.setShowToNumber(true);
        await bodyWrapper.setCallPreferences(callPreferences);
        let response: ZOHOCRMSDK.APIResponse<ZOHOCRMSDK.CallPreferences.ActionHandler.MasterModel> = await callPreferencesOperations.updateCallPreference(bodyWrapper);
        if (response) {
            console.log("Status Code:", response.getStatusCode());
            if ([204, 304].includes(response.getStatusCode())) {
                console.log(response.getStatusCode() === 204 ? "No Content" : "Not Modified");
                return;
            }
            let actionHandler = response.getObject();
            if (actionHandler instanceof ZOHOCRMSDK.CallPreferences.ActionWrapper) {
                const actionResponse:ZOHOCRMSDK.CallPreferences.ActionResponse.MasterModel = actionHandler.getCallPreferences()
                if (actionResponse instanceof ZOHOCRMSDK.CallPreferences.SuccessResponse) {
                    const successResponse:ZOHOCRMSDK.CallPreferences.SuccessResponse = actionResponse;
                    console.log("Status:", successResponse.getStatus().getValue());
                    console.log("Code:", successResponse.getCode().getValue());
                    console.log("Details:");
                    let details = successResponse.getDetails();
                    if (details != null) {
                        Array.from(details.keys()).forEach(key => {
                            console.log(key + ": " + details.get(key));
                        });
                    }
                    console.log("Message:", successResponse.getMessage());
                } else if (actionResponse instanceof ZOHOCRMSDK.CallPreferences.APIException) {
                    const exception: ZOHOCRMSDK.CallPreferences.APIException = actionResponse;
                    console.log("Status:", exception.getStatus().getValue());
                    console.log("Code:", exception.getCode().getValue());
                    console.log("Details:");
                    let details = exception.getDetails();
                    if (details != null) {
                        Array.from(details.keys()).forEach(key => {
                            console.log(key + ": " + details.get(key));
                        });
                    }
                    console.log("Message:", exception.getMessage());
                }
            } else if (actionHandler instanceof ZOHOCRMSDK.CallPreferences.APIException) {
                const exception: ZOHOCRMSDK.CallPreferences.APIException = actionHandler;
                console.log("Status:", exception.getStatus().getValue());
                console.log("Code:", exception.getCode().getValue());
                console.log("Details:");
                let details = exception.getDetails();
                if (details != null) {
                    Array.from(details.keys()).forEach(key => {
                        console.log(key + ": " + details.get(key));
                    });
                }
                console.log("Message:", exception.getMessage());
            }
        }
    }
    static async initializeAndCall()
    {
        let environment = ZOHOCRMSDK.USDataCenter.PRODUCTION();
        let token = new ZOHOCRMSDK.OAuthBuilder()
            .clientId("client_id")
            .clientSecret("client_secret")
            .grantToken("grant_token")
            .build();
        await (await new ZOHOCRMSDK.InitializeBuilder())
            .environment(environment)
            .token(token)
            .initialize();
        await UpdateCallPreference.update_call_preference();
    }
}
UpdateCallPreference.initializeAndCall();