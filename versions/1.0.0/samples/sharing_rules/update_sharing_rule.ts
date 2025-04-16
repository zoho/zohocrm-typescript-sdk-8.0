import * as ZOHOCRMSDK from "@zohocrm/typescript-sdk-8.0";
class UpdateSharingRule{
    static async updateSharingRule(id: bigint, moduleAPIName: string) {
        const sharingRulesOperations: ZOHOCRMSDK.SharingRules.SharingRulesOperations = new ZOHOCRMSDK.SharingRules.SharingRulesOperations(moduleAPIName);
        const request: ZOHOCRMSDK.SharingRules.BodyWrapper = new ZOHOCRMSDK.SharingRules.BodyWrapper();
        const sharingRules = [];
        const sharingRule: ZOHOCRMSDK.SharingRules.SharingRules = new ZOHOCRMSDK.SharingRules.SharingRules();
        // Set type to "Record_Owner_Based"
        sharingRule.setType(new ZOHOCRMSDK.Choice("Record_Owner_Based"));
        // Set sharedFrom details
        const sharedFrom: ZOHOCRMSDK.SharingRules.Shared = new ZOHOCRMSDK.SharingRules.Shared();
        const sharedFromResource: ZOHOCRMSDK.SharingRules.Resource = new ZOHOCRMSDK.SharingRules.Resource();
        sharedFromResource.setId(BigInt("3422232"));
        sharedFrom.setResource(sharedFromResource);
        sharedFrom.setType(new ZOHOCRMSDK.Choice("groups"));
        sharedFrom.setSubordinates(false);
        sharingRule.setSharedFrom(sharedFrom);
        // Optional: Criteria-based rule example (commented out)
        /*
        sharingRule.setType(new ZOHOCRMSDK.Choice("Criteria_Based"));
        const criteria = new ZOHOCRMSDK.SharingRules.Criteria();
        criteria.setComparator("equal");
        const field = new ZOHOCRMSDK.SharingRules.Field();
        await field.setAPIName("Wizard");
        field.setId(1111195003n);
        criteria.setField(field);
        const value = {
            name: "TestWizards",
            id: "11111195001"
        };
        criteria.setValue(value);
        sharingRule.setCriteria(criteria);
        */
        sharingRule.setSuperiorsAllowed(false);
        // Set sharedTo details
        const sharedTo: ZOHOCRMSDK.SharingRules.Shared = new ZOHOCRMSDK.SharingRules.Shared();
        const sharedToResource: ZOHOCRMSDK.SharingRules.Resource = new ZOHOCRMSDK.SharingRules.Resource();
        sharedToResource.setId(BigInt("3422232"));
        sharedTo.setResource(sharedToResource);
        sharedTo.setType(new ZOHOCRMSDK.Choice("groups"));
        sharedTo.setSubordinates(false);
        sharingRule.setSharedTo(sharedTo);
        sharingRule.setPermissionType(new ZOHOCRMSDK.Choice("read_write_delete"));
        sharingRules.push(sharingRule);
        request.setSharingRules(sharingRules);
        const response: ZOHOCRMSDK.APIResponse<ZOHOCRMSDK.SharingRules.ActionHandler.MasterModel> = await sharingRulesOperations.updateSharingRule(id, request);
        if (response) {
            console.log("Status Code:", response.getStatusCode());
            const actionHandler = response.getObject();
            if (actionHandler instanceof ZOHOCRMSDK.SharingRules.ActionWrapper) {
                const actionResponses = actionHandler.getSharingRules();
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
        await (new ZOHOCRMSDK.InitializeBuilder())
            .environment(environment)
            .token(token)
            .initialize();
        const moduleAPIName = "Leads";
        const recordId = BigInt("7272250053001");
        await UpdateSharingRule.updateSharingRule(recordId, moduleAPIName);
    }
}
UpdateSharingRule.initializeAndCall();