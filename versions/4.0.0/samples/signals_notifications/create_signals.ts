import * as ZOHOCRMSDK from "@zohocrm/typescript-sdk-8.0";

class CreateSignals {
    static async createSignals() {
        let signalsNotificationsOperations: ZOHOCRMSDK.SignalsNotifications.SignalsNotificationsOperations = new ZOHOCRMSDK.SignalsNotifications.SignalsNotificationsOperations();
        let bodyWrapper: ZOHOCRMSDK.SignalsNotifications.BodyWrapper = new ZOHOCRMSDK.SignalsNotifications.BodyWrapper();
        let signals = [];
        let signal: ZOHOCRMSDK.SignalsNotifications.Signals = new ZOHOCRMSDK.SignalsNotifications.Signals();
        signal.setSignalNamespace("mailchimp.open");
        signal.setSubject("Node.js SDK Test");
        signal.setId(BigInt("34770605001"));
        signal.setModule("Leads");
        signal.setMessage("This is SDK sample code");
        signals.push(signal);
        bodyWrapper.setSignals(signals);
        let response: ZOHOCRMSDK.APIResponse<ZOHOCRMSDK.SignalsNotifications.ActionHandler.MasterModel> = await signalsNotificationsOperations.createSignals(bodyWrapper);
        if (response) {
            console.log("Status Code: " + response.getStatusCode());
            let actionHandler = response.getObject();
            if (actionHandler instanceof ZOHOCRMSDK.SignalsNotifications.ActionWrapper) {
                let actionResponses = actionHandler.getSignals();
                actionResponses.forEach(actionResponse => {
                    if (actionResponse instanceof ZOHOCRMSDK.SignalsNotifications.SuccessResponse) {
                        console.log("Status: " + actionResponse.getStatus().getValue());
                        console.log("Code: " + actionResponse.getCode().getValue());
                        console.log("Details: ");
                        let details = actionResponse.getDetails();
                        Object.entries(actionResponse.getDetails()).forEach(([key, value]) => {
                            console.log(`${key}: ${value}`);
                        });
                        console.log("Message: " + actionResponse.getMessage());
                    } else if (actionResponse instanceof ZOHOCRMSDK.SignalsNotifications.APIException) {
                        console.log("Status: " + actionResponse.getStatus().getValue());
                        console.log("Code: " + actionResponse.getCode().getValue());
                        console.log("Details: ");
                        let details = actionResponse.getDetails();
                        Object.entries(actionResponse.getDetails()).forEach(([key, value]) => {
                            console.log(`${key}: ${value}`);
                        });
                        console.log("Message: " + actionResponse.getMessage());
                    }
                });
            } else if (actionHandler instanceof ZOHOCRMSDK.SignalsNotifications.APIException) {
                console.log("Status: " + actionHandler.getStatus().getValue());
                console.log("Code: " + actionHandler.getCode().getValue());
                console.log("Details: ");
                let details = actionHandler.getDetails();
                Object.entries(actionHandler.getDetails()).forEach(([key, value]) => {
                    console.log(`${key}: ${value}`);
                });
                console.log("Message: " + actionHandler.getMessage());
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
        await CreateSignals.createSignals();
    }
}
CreateSignals.initializeAndCall();