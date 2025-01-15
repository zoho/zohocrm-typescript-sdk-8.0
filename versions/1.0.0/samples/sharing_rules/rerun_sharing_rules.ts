import * as ZOHOCRMSDK from "@zohocrm/typescript-sdk-8.0";

class RerunSharingRules{
    static async rerunSharingRules(moduleAPIName : string) {
        const sharingRulesOperations: ZOHOCRMSDK.SharingRules.SharingRulesOperations = new ZOHOCRMSDK.SharingRules.SharingRulesOperations(moduleAPIName);
        const response:ZOHOCRMSDK.APIResponse<ZOHOCRMSDK.SharingRules.ActionHandler.MasterModel> = await sharingRulesOperations.rerunSharingRules();
        if (response) {
            console.log("Status Code:", response.getStatusCode());
            const actionHandler = response.getObject();

            if (actionHandler instanceof ZOHOCRMSDK.SharingRules.ActionWrapper) {
                const actionWrapper = actionHandler;
                const actionResponses = actionWrapper.getSharingRules();

                actionResponses.forEach(actionResponse => {
                    if (actionResponse instanceof ZOHOCRMSDK.SharingRules.SuccessResponse) {
                        console.log("Status:", actionResponse.getStatus().getValue());
                        console.log("Code:", actionResponse.getCode().getValue());
                        console.log("Details:");
                        Object.entries(actionResponse.getDetails()).forEach(([key, value]) => {
                            console.log(`${key}: ${value}`);
                        });
                        console.log("Message:", actionResponse.getMessage().getValue());
                    } else if (actionResponse instanceof ZOHOCRMSDK.SharingRules.APIException) {
                        console.log("Status:", actionResponse.getStatus().getValue());
                        console.log("Code:", actionResponse.getCode().getValue());
                        console.log("Details:");
                        Object.entries(actionResponse.getDetails()).forEach(([key, value]) => {
                            console.log(`${key}: ${value}`);
                        });
                        console.log("Message:", actionResponse.getMessage().getValue());
                    }
                });
            } else if (actionHandler instanceof ZOHOCRMSDK.SharingRules.APIException) {
                console.log("Status:", actionHandler.getStatus().getValue());
                console.log("Code:", actionHandler.getCode().getValue());
                console.log("Details:");
                Object.entries(actionHandler.getDetails()).forEach(([key, value]) => {
                    console.log(`${key}: ${value}`);
                });
                console.log("Message:", actionHandler.getMessage());
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
        await RerunSharingRules.rerunSharingRules(moduleAPIName);
    }
}
RerunSharingRules.initializeAndCall();