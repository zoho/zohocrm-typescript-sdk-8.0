import * as ZOHOCRMSDK from "@zohocrm/typescript-sdk-8.0";

class CreateSharingRules{
    static async createSharingRules(moduleAPIName : string) {
        const sharingRulesOperations: ZOHOCRMSDK.SharingRules.SharingRulesOperations = new ZOHOCRMSDK.SharingRules.SharingRulesOperations(moduleAPIName);
        const request: ZOHOCRMSDK.SharingRules.BodyWrapper = new ZOHOCRMSDK.SharingRules.BodyWrapper();
        const sharingRules = [];
        const sharingRule: ZOHOCRMSDK.SharingRules.SharingRules = new ZOHOCRMSDK.SharingRules.SharingRules();

        // Record Owner Based Rule
        sharingRule.setType(new ZOHOCRMSDK.Choice("Record_Owner_Based"));
        const sharedFrom: ZOHOCRMSDK.SharingRules.Shared = new ZOHOCRMSDK.SharingRules.Shared();
        const resourceFrom: ZOHOCRMSDK.SharingRules.Resource = new ZOHOCRMSDK.SharingRules.Resource();
        resourceFrom.setId(BigInt("36002"));
        sharedFrom.setResource(resourceFrom);
        sharedFrom.setType(new ZOHOCRMSDK.Choice("groups"));
        sharedFrom.setSubordinates(false);
        sharingRule.setSharedFrom(sharedFrom);
        sharingRule.setSuperiorsAllowed(false);
        const sharedTo: ZOHOCRMSDK.SharingRules.Shared = new ZOHOCRMSDK.SharingRules.Shared();
        const resourceTo: ZOHOCRMSDK.SharingRules.Resource = new ZOHOCRMSDK.SharingRules.Resource();
        resourceTo.setId(BigInt("347706117236002"));
        sharedTo.setResource(resourceTo);
        sharedTo.setType(new ZOHOCRMSDK.Choice("groups"));
        sharedTo.setSubordinates(false);
        sharingRule.setSharedTo(sharedTo);
        sharingRule.setPermissionType(new ZOHOCRMSDK.Choice("read_write_delete"));
        sharingRule.setName("TestNodeSDK");
        sharingRules.push(sharingRule);
        request.setSharingRules(sharingRules);
        const response:ZOHOCRMSDK.APIResponse<ZOHOCRMSDK.SharingRules.ActionHandler.MasterModel> = await sharingRulesOperations.createSharingRules(request);
        if (response) {
            console.log("Status Code:", response.getStatusCode());
            const actionHandler = response.getObject();
            if (actionHandler instanceof ZOHOCRMSDK.SharingRules.ActionWrapper) {
                const actionWrapper:  ZOHOCRMSDK.SharingRules.ActionWrapper = actionHandler;
                const actionResponses: ZOHOCRMSDK.SharingRules.ActionResponse.MasterModel[] = actionWrapper.getSharingRules();
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
        await CreateSharingRules.createSharingRules(moduleAPIName);
    }
}
CreateSharingRules.initializeAndCall();