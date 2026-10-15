import * as ZOHOCRMSDK from "@zohocrm/typescript-sdk-8.0";

export class GetCallPreference
{
    public static async getCallPreference()
    {
        let callPreferenceOperations: ZOHOCRMSDK.CallPreferences.CallPreferencesOperations = new ZOHOCRMSDK.CallPreferences.CallPreferencesOperations();
        let response: ZOHOCRMSDK.APIResponse<ZOHOCRMSDK.CallPreferences.ResponseHandler.MasterModel> = await callPreferenceOperations.getCallPreference();
        if (response != null)
        {
            console.log('Status Code: ' + response.getStatusCode());
            if (response.getStatusCode() === 204 || response.getStatusCode() === 304) {
                console.log(response.getStatusCode() === 204 ? "No Content" : "Not Modified");
                return;
            }
            let responseHandler = response.getObject();
            if (responseHandler instanceof ZOHOCRMSDK.CallPreferences.ResponseWrapper)
            {
                let responseWrapper: ZOHOCRMSDK.CallPreferences.ResponseWrapper = responseHandler;
                let call_preferences: ZOHOCRMSDK.CallPreferences.CallPreferences = responseWrapper.getCallPreferences();
                console.log("call_preferences show_from_number: " + call_preferences.getShowFromNumber());
                console.log("call_preferences show_to_number: " + call_preferences.getShowToNumber());
            }
            else if (responseHandler instanceof ZOHOCRMSDK.CallPreferences.APIException) {
                let exception: ZOHOCRMSDK.CallPreferences.APIException = responseHandler;
                console.log("Status: " + exception.getStatus().getValue());
                console.log("Code: " + exception.getCode().getValue());
                console.log("Details: ");
                let details = exception.getDetails();
                if (details != null) {
                    Array.from(details.keys()).forEach(key => {
                        console.log(key + ": " + details.get(key));
                    });
                }
                console.log("Message: " + exception.getMessage());
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
        await GetCallPreference.getCallPreference();
    }
}
GetCallPreference.initializeAndCall();