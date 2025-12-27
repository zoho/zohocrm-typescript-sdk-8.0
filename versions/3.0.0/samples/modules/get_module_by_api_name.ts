import * as ZOHOCRMSDK from "@zohocrm/typescript-sdk-8.0"

class GetModuleByAPIName {
    static async getModuleByAPIName(): Promise<void> {
        const apiName = "Leads";
        
        const modulesOperations = new ZOHOCRMSDK.Modules.ModulesOperations();
        
        const response = await modulesOperations.getModuleByAPIName(apiName);
        
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
                        
                        const businessCardFields = module.getBusinessCardFields();
                        if (businessCardFields != null && businessCardFields.length > 0) {
                            console.log("Business Card Fields: " + businessCardFields.length + " fields");
                        }
                        
                        const relatedListProperties = module.getRelatedListProperties();
                        if (relatedListProperties != null) {
                            console.log("Sort By: " + relatedListProperties.getSortBy());
                            console.log("Sort Order: " + relatedListProperties.getSortOrder());
                            console.log("Fields: " + relatedListProperties.getFields());
                        }
                        
                        const kanbanViewSupported = module.getKanbanViewSupported();
                        if (kanbanViewSupported != null) {
                            console.log("Kanban View Supported: " + kanbanViewSupported);
                        }
                        
                        const properties = module.getProperties();
                        if (properties != null && properties.length > 0) {
                            console.log("Module Properties: " + properties.length + " properties");
                        }
                        
                        const perPage = module.getPerPage();
                        if (perPage != null) {
                            console.log("Per Page: " + perPage);
                        }
                        
                        const visibility = module.getVisibility();
                        if (visibility != null) {
                            console.log("Visibility: " + visibility);
                        }
                        
                        const searchLayoutFields = module.getSearchLayoutFields();
                        if (searchLayoutFields != null && searchLayoutFields.length > 0) {
                            console.log("Search Layout Fields: " + searchLayoutFields.length + " fields");
                        }
                        
                        const inventoryTemplateSupported = module.getInventoryTemplateSupported();
                        if (inventoryTemplateSupported != null) {
                            console.log("Inventory Template Supported: " + inventoryTemplateSupported);
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
        await GetModuleByAPIName.getModuleByAPIName();
    }
}

GetModuleByAPIName.initializeAndCall();