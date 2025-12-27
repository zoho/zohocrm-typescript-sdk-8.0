import * as ZOHOCRMSDK from "@zohocrm/typescript-sdk-8.0";

class SearchSharingRulesSummary{
    static async searchSharingRulesSummary(moduleAPIName : string) {
        const sharingRulesOperations: ZOHOCRMSDK.SharingRules.SharingRulesOperations = new ZOHOCRMSDK.SharingRules.SharingRulesOperations(moduleAPIName);
        const request: ZOHOCRMSDK.SharingRules.FiltersBody = new ZOHOCRMSDK.SharingRules.FiltersBody();
        const criteria: ZOHOCRMSDK.SharingRules.Criteria = new ZOHOCRMSDK.SharingRules.Criteria();
        criteria.setGroupOperator("and");
        const group = [];
        const groupCriteria1: ZOHOCRMSDK.SharingRules.Criteria = new ZOHOCRMSDK.SharingRules.Criteria();
        const field1: ZOHOCRMSDK.SharingRules.Field = new ZOHOCRMSDK.SharingRules.Field();
        field1.setAPIName("shared_from.type");
        groupCriteria1.setField(field1);
        groupCriteria1.setValue("${EMPTY}");
        groupCriteria1.setComparator("equal");
        group.push(groupCriteria1);
        const groupCriteria2: ZOHOCRMSDK.SharingRules.Criteria = new ZOHOCRMSDK.SharingRules.Criteria();
        const field2: ZOHOCRMSDK.SharingRules.Field = new ZOHOCRMSDK.SharingRules.Field();
        field2.setAPIName("superiors_allowed");
        groupCriteria2.setField(field2);
        groupCriteria2.setValue("false");
        groupCriteria2.setComparator("equal");
        group.push(groupCriteria2);
        const groupCriteria3: ZOHOCRMSDK.SharingRules.Criteria = new ZOHOCRMSDK.SharingRules.Criteria();
        const field3: ZOHOCRMSDK.SharingRules.Field = new ZOHOCRMSDK.SharingRules.Field();
        field3.setAPIName("status");
        groupCriteria3.setField(field3);
        groupCriteria3.setValue("active");
        groupCriteria3.setComparator("equal");
        group.push(groupCriteria3);

        const groupCriteria4 : ZOHOCRMSDK.SharingRules.Criteria = new ZOHOCRMSDK.SharingRules.Criteria();
        groupCriteria4.setGroupOperator("or");
        const group4 = [];

        const group4Criteria1: ZOHOCRMSDK.SharingRules.Criteria = new ZOHOCRMSDK.SharingRules.Criteria();
        group4Criteria1.setGroupOperator("and");
        const group41 = [];

        const group41Criteria1: ZOHOCRMSDK.SharingRules.Criteria = new ZOHOCRMSDK.SharingRules.Criteria();
        const group41Field1: ZOHOCRMSDK.SharingRules.Field = new ZOHOCRMSDK.SharingRules.Field();
        group41Field1.setAPIName("shared_to.resource.id");
        group41Criteria1.setField(group41Field1);
        group41Criteria1.setValue([11111777078, 11111777098]);
        group41Criteria1.setComparator("in");
        group41.push(group41Criteria1);

        const group41Criteria2 : ZOHOCRMSDK.SharingRules.Criteria = new ZOHOCRMSDK.SharingRules.Criteria();
        const group41Field2: ZOHOCRMSDK.SharingRules.Field = new ZOHOCRMSDK.SharingRules.Field();
        group41Field2.setAPIName("shared_to.type");
        group41Criteria2.setField(group41Field2);
        group41Criteria2.setValue("groups");
        group41Criteria2.setComparator("equal");
        group41.push(group41Criteria2);

        group4Criteria1.setGroup(group41);
        group4.push(group4Criteria1);

        // Subgroup 4.2
        const group4Criteria2: ZOHOCRMSDK.SharingRules.Criteria = new ZOHOCRMSDK.SharingRules.Criteria();
        group4Criteria2.setGroupOperator("and");
        const group42 = [];

        const group42Criteria1: ZOHOCRMSDK.SharingRules.Criteria = new ZOHOCRMSDK.SharingRules.Criteria();
        const group42Field1: ZOHOCRMSDK.SharingRules.Field = new ZOHOCRMSDK.SharingRules.Field();
        group42Field1.setAPIName("shared_to.resource.id");
        group42Criteria1.setField(group42Field1);
        group42Criteria1.setValue([11111777078, 11111777098]);
        group42Criteria1.setComparator("in");
        group42.push(group42Criteria1);

        const group42Criteria2: ZOHOCRMSDK.SharingRules.Criteria = new ZOHOCRMSDK.SharingRules.Criteria();
        const group42Field2: ZOHOCRMSDK.SharingRules.Field = new ZOHOCRMSDK.SharingRules.Field();
        group42Field2.setAPIName("shared_to.type");
        group42Criteria2.setField(group42Field2);
        group42Criteria2.setValue("roles");
        group42Criteria2.setComparator("equal");
        group42.push(group42Criteria2);

        group4Criteria2.setGroup(group42);
        group4.push(group4Criteria2);

        groupCriteria4.setGroup(group4);
        group.push(groupCriteria4);

        criteria.setGroup(group);
        request.setFilters([criteria]);

        const response: ZOHOCRMSDK.APIResponse<ZOHOCRMSDK.SharingRules.ResponseHandler.MasterModel> = await sharingRulesOperations.searchSharingRulesSummary(request);

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
        await SearchSharingRulesSummary.searchSharingRulesSummary(moduleAPIName);
    }
}
SearchSharingRulesSummary.initializeAndCall();