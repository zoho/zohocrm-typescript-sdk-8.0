import * as ZOHOCRMSDK from "@zohocrm/typescript-sdk-8.0"

class GetModules {
    static async getModules(): Promise<void> {
        const modulesOperations = new ZOHOCRMSDK.Modules.ModulesOperations();
        
        const paramInstance = new ZOHOCRMSDK.ParameterMap();
        // await paramInstance.add(ZOHOCRMSDK.Modules.GetModulesParam.STATUS, "visible");
        
        const headerInstance = new ZOHOCRMSDK.HeaderMap();
        await headerInstance.add(ZOHOCRMSDK.Modules.GetModulesHeader.IF_MODIFIED_SINCE, new Date("2023-01-01"));
        
        const response = await modulesOperations.getModules(paramInstance, headerInstance);
        
        if (response !== null) {
            console.log("Status Code: " + response.getStatusCode());
            
            if ([204, 304].includes(response.getStatusCode())) {
                console.log(response.getStatusCode() === 204 ? "No Content" : "Not Modified");
                return;
            }

            const responseHandler = response.getObject();
            
            if (responseHandler instanceof ZOHOCRMSDK.Modules.ResponseWrapper) {
                const modules = responseHandler.getModules();
                if (modules != null) {
                    for (let module of modules) {
                        console.log("Module ID: " + module.getId());
                        console.log("Module APIName: " + module.getAPIName());
                        console.log("Module ModuleName: " + module.getModuleName());
                        console.log("Module PluralLabel: " + module.getPluralLabel());
                        console.log("Module SingularLabel: " + module.getSingularLabel());
                        console.log("Module Creatable: " + module.getCreatable());
                        console.log("Module Deletable: " + module.getDeletable());
                        console.log("Module Convertable: " + module.getConvertable());
                        console.log("Module Editable: " + module.getEditable());
                        console.log("Module Viewable: " + module.getViewable());
                        console.log("Module APISupported: " + module.getAPISupported());
                        console.log("Module ScoringSupported: " + module.getScoringSupported());
                        console.log("Module WebformSupported: " + module.getWebformSupported());
                        console.log("Module QuickCreate: " + module.getQuickCreate());
                        console.log("Module ModifiedTime: " + module.getModifiedTime());
                        console.log("Module GeneratedType: " + module.getGeneratedType());
                        console.log("Module FeedsRequired: " + module.getFeedsRequired());
                        console.log("Module KanbanView: " + module.getKanbanView());
                        console.log("Module FilterStatus: " + module.getFilterStatus());
                        console.log("Module WebLink: " + module.getWebLink());
                        console.log("Module SequenceNumber: " + module.getSequenceNumber());
                        
                        const modifiedBy = module.getModifiedBy();
                        if (modifiedBy != null) {
                            console.log("Modified By Name: " + modifiedBy.getName());
                            console.log("Modified By ID: " + modifiedBy.getId());
                        }
                        
                        const profiles = module.getProfiles();
                        if (profiles != null && profiles.length > 0) {
                            console.log("Module Profiles:");
                            for (let profile of profiles) {
                                console.log("Profile ID: " + profile.getId());
                                console.log("Profile Name: " + profile.getName());
                                console.log("----");
                            }
                        }
                        
                        const relatedLists = module.getRelatedLists();
                        if (relatedLists != null && relatedLists.length > 0) {
                            console.log("Related Lists:");
                            for (let relatedList of relatedLists) {
                                console.log("Related List APIName: " + relatedList.getAPIName());
                                console.log("Related List Module: " + relatedList.getModule());
                                console.log("Related List Name: " + relatedList.getName());
                                console.log("----");
                            }
                        }
                        
                        console.log("--------------------");
                    }
                }
            }
            else if (responseHandler instanceof ZOHOCRMSDK.Modules.APIException) {
                const exception = responseHandler;
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
        await GetModules.getModules();
    }
}

GetModules.initializeAndCall();