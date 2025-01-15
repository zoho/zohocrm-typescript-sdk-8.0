import * as ZOHOCRMSDK from "@zohocrm/typescript-sdk-8.0";

class GetSharingRuleSummary{
    static async getSharingRuleSummary(moduleAPIName: string) {
        const sharingRulesOperations: ZOHOCRMSDK.SharingRules.SharingRulesOperations = new ZOHOCRMSDK.SharingRules.SharingRulesOperations(moduleAPIName);
        const response: ZOHOCRMSDK.APIResponse<ZOHOCRMSDK.SharingRules.ResponseHandler.MasterModel> = await sharingRulesOperations.getSharingRuleSummary();
        if (response) {
            console.log("Status Code:", response.getStatusCode());
            if ([204, 304].includes(response.getStatusCode())) {
                console.log(response.getStatusCode() === 204 ? "No Content" : "Not Modified");
                return;
            }
            const responseHandler = response.getObject();
            if (responseHandler instanceof ZOHOCRMSDK.SharingRules.SummaryResponseWrapper) {
                const responseWrapper = responseHandler;
                const rulesSummary = responseWrapper.getSharingRulesSummary();
                rulesSummary.forEach(ruleSummary => {
                    const module = ruleSummary.getModule();
                    if (module) {
                        console.log("RulesSummary Module APIName:", module.getAPIName());
                        console.log("RulesSummary Module Id:", module.getId());
                    }
                    console.log("RulesSummary RuleComputationStatus:", ruleSummary.getRuleComputationStatus());
                    console.log("RulesSummary RuleCount:", ruleSummary.getRuleCount());
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
        await GetSharingRuleSummary.getSharingRuleSummary(moduleAPIName);
    }
}
GetSharingRuleSummary.initializeAndCall();