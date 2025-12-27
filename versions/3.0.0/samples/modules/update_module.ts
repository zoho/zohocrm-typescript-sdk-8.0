import * as ZOHOCRMSDK from "@zohocrm/typescript-sdk-8.0"

class UpdateModule {
    static async updateModule(): Promise<void> {
        const moduleId = BigInt("1055806000000000087");
        
        const modulesOperations = new ZOHOCRMSDK.Modules.ModulesOperations();
        
        const request = new ZOHOCRMSDK.Modules.BodyWrapper();
        const modules = [];
        
        const module = new ZOHOCRMSDK.Modules.Modules();
        module.setId(moduleId);
        module.setModuleName("Updated Leads Module");
        module.setSingularLabel("Updated Lead");
        module.setPluralLabel("Updated Leads");

        // Update profiles
        const profiles = [];
        const profile1 = new ZOHOCRMSDK.Profiles.MinifiedProfile();
        profile1.setId(BigInt("1055806000000026014"));
        profile1.setName("Administrator");
        profiles.push(profile1);
        
        module.setProfiles(profiles);
        
        modules.push(module);
        request.setModules(modules);
        
        const response = await modulesOperations.updateModule(moduleId, request);
        
        if (response !== null) {
            console.log("Status Code: " + response.getStatusCode());
            
            const actionHandler = response.getObject();
            
            if (actionHandler instanceof ZOHOCRMSDK.Modules.ActionWrapper) {
                const actionResponses = actionHandler.getModules();
                if (actionResponses != null) {
                    for (let actionResponse of actionResponses) {
                        if (actionResponse instanceof ZOHOCRMSDK.Modules.SuccessResponse) {
                            const successResponse = actionResponse;
                            console.log("Status: " + successResponse.getStatus().getValue());
                            console.log("Code: " + successResponse.getCode().getValue());
                            
                            const details = successResponse.getDetails();
                            if (details !== null) {
                                console.log("Details: ");
                                Array.from(details.keys()).forEach(key => {
                                    console.log(key + ": " + details.get(key));
                                });
                            }
                            
                            console.log("Message: " + successResponse.getMessage());
                        }
                        else if (actionResponse instanceof ZOHOCRMSDK.Modules.APIException) {
                            const exception = actionResponse;
                            console.log("Status: " + exception.getStatus().getValue());
                            console.log("Code: " + exception.getCode().getValue());
                            
                            const details = exception.getDetails();
                            if (details !== null) {
                                console.log("Details: ");
                                Array.from(details.keys()).forEach(key => {
                                    console.log(key + ": " + details.get(key));
                                });
                            }
                            
                            console.log("Message: " + exception.getMessage());
                        }
                    }
                }
            }
            else if (actionHandler instanceof ZOHOCRMSDK.Modules.APIException) {
                const exception = actionHandler;
                console.log("Status: " + exception.getStatus().getValue());
                console.log("Code: " + exception.getCode().getValue());
                
                const details = exception.getDetails();
                if (details !== null) {
                    console.log("Details: ");
                    Array.from(details.keys()).forEach(key => {
                        console.log(key + ": " + details.get(key));
                    });
                }
                
                console.log("Message: " + exception.getMessage());
            }
        }
    }

    public static async initializeAndCall() {
        let environment = ZOHOCRMSDK.INDataCenter.PRODUCTION();
        let token = new ZOHOCRMSDK.OAuthBuilder()
            .clientId("client_id")
            .clientSecret("client_secret")
            .grantToken("grant_token")
            .build();
        await(new ZOHOCRMSDK.InitializeBuilder())
            .environment(environment)
            .token(token)
            .initialize();
        await UpdateModule.updateModule();
    }
}

UpdateModule.initializeAndCall();