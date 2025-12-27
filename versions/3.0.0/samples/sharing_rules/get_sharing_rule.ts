import * as ZOHOCRMSDK from "@zohocrm/typescript-sdk-8.0";

class GetSharingRule{
    static async getSharingRule(moduleAPIName: string, id: bigint) {
        const sharingRulesOperations: ZOHOCRMSDK.SharingRules.SharingRulesOperations = new ZOHOCRMSDK.SharingRules.SharingRulesOperations(moduleAPIName);
        const response: ZOHOCRMSDK.APIResponse<ZOHOCRMSDK.SharingRules.ResponseHandler.MasterModel> = await sharingRulesOperations.getSharingRule(id);
        if (response) {
            console.log("Status Code:", response.getStatusCode());
            if ([204, 304].includes(response.getStatusCode())) {
                console.log(response.getStatusCode() === 204 ? "No Content" : "Not Modified");
                return;
            }
            const responseHandler = response.getObject();
            if (responseHandler instanceof ZOHOCRMSDK.SharingRules.ResponseWrapper) {
                const responseWrapper = responseHandler;
                const sharingRules = responseWrapper.getSharingRules();
                sharingRules.forEach(sharingRule => {
                    const module = sharingRule.getModule();
                    if (module) {
                        console.log("SharingRules Module APIName:", module.getAPIName());
                        console.log("SharingRules Module Name:", module.getName());
                        console.log("SharingRules Module Id:", module.getId());
                    }
                    console.log("SharingRules SuperiorsAllowed:", sharingRule.getSuperiorsAllowed());
                    console.log("SharingRules Type:", sharingRule.getType().getValue());

                    const sharedTo: ZOHOCRMSDK.SharingRules.Shared = sharingRule.getSharedTo();
                    if (sharedTo) {
                        const resource: ZOHOCRMSDK.SharingRules.Resource = sharedTo.getResource();
                        if (resource) {
                            console.log("SharingRules SharedTo Resource Name:", resource.getName());
                            console.log("SharingRules SharedTo Resource Id:", resource.getId());
                        }
                        console.log("SharingRules SharedTo Type:", sharedTo.getType());
                        console.log("SharingRules SharedTo Subordinates:", sharedTo.getSubordinates());
                    }

                    const sharedFrom: ZOHOCRMSDK.SharingRules.Shared = sharingRule.getSharedFrom();
                    if (sharedFrom) {
                        const resource: ZOHOCRMSDK.SharingRules.Resource = sharedFrom.getResource();
                        if (resource) {
                            console.log("SharingRules SharedFrom Resource Name:", resource.getName());
                            console.log("SharingRules SharedFrom Resource Id:", resource.getId());
                        }
                        console.log("SharingRules SharedFrom Type:", sharedFrom.getType());
                        console.log("SharingRules SharedFrom Subordinates:", sharedFrom.getSubordinates());
                    }

                    console.log("SharingRules PermissionType:", sharingRule.getPermissionType().getValue());
                    console.log("SharingRules Name:", sharingRule.getName());
                    console.log("SharingRules Id:", sharingRule.getId());
                    console.log("SharingRules Status:", sharingRule.getStatus().getValue());
                    console.log("SharingRules MatchLimitExceeded:", sharingRule.getMatchLimitExceeded());
                });
            } else if (responseHandler instanceof ZOHOCRMSDK.SharingRules.APIException) {
                const exception = responseHandler;
                console.log("Status:", exception.getStatus().getValue());
                console.log("Code:", exception.getCode().getValue());
                console.log("Details:");
                Object.entries(exception.getDetails()).forEach(([key, value]) => {
                    console.log(`${key}: ${value}`);
                });
                console.log("Message:", exception.getMessage());
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
        await GetSharingRule.getSharingRule(moduleAPIName, recordId);
    }
}
GetSharingRule.initializeAndCall();