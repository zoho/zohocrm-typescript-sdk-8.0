import * as ZOHOCRMSDK from "@zohocrm/typescript-sdk-8.0";

class DeleteSharingRule{
    static async deleteSharingRule(id: bigint, moduleAPIName: string) {
        const sharingRulesOperations : ZOHOCRMSDK.SharingRules.SharingRulesOperations= new ZOHOCRMSDK.SharingRules.SharingRulesOperations(moduleAPIName);
        const response: ZOHOCRMSDK.APIResponse<ZOHOCRMSDK.SharingRules.ActionHandler.MasterModel> = await sharingRulesOperations.deleteSharingRule(id);
        if (response) {
            console.log("Status Code:", response.getStatusCode());
            const actionHandler = response.getObject();
            if (actionHandler instanceof ZOHOCRMSDK.SharingRules.ActionWrapper) {
                const actionWrapper: ZOHOCRMSDK.SharingRules.ActionWrapper = actionHandler;
                const actionResponses = actionWrapper.getSharingRules();
                actionResponses.forEach(actionResponse => {
                    if (actionResponse instanceof ZOHOCRMSDK.SharingRules.SuccessResponse) {
                        const successResponse = actionResponse;
                        console.log("Status:", successResponse.getStatus().getValue());
                        console.log("Code:", successResponse.getCode().getValue());
                        console.log("Details:");
                        Object.entries(successResponse.getDetails()).forEach(([key, value]) => {
                            console.log(`${key}: ${value}`);
                        });
                        console.log("Message:", successResponse.getMessage().getValue());
                    } else if (actionResponse instanceof ZOHOCRMSDK.SharingRules.APIException) {
                        const exception = actionResponse;
                        console.log("Status:", exception.getStatus().getValue());
                        console.log("Code:", exception.getCode().getValue());
                        console.log("Details:");
                        Object.entries(exception.getDetails()).forEach(([key, value]) => {
                            console.log(`${key}: ${value}`);
                        });
                        console.log("Message:", exception.getMessage().getValue());
                    }
                });
            } else if (actionHandler instanceof ZOHOCRMSDK.SharingRules.APIException) {
                const exception = actionHandler;
                console.log("Status:", exception.getStatus().getValue());
                console.log("Code:", exception.getCode().getValue());
                console.log("Details:");
                Object.entries(exception.getDetails()).forEach(([key, value]) => {
                    console.log(`${key}: ${value}`);
                });
                console.log("Message:", exception.getMessage().getValue());
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
        const recordId = BigInt("7272250053001");
        await DeleteSharingRule.deleteSharingRule(recordId, moduleAPIName);
    }
}
DeleteSharingRule.initializeAndCall();