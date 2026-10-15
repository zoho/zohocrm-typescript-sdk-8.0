import * as ZOHOCRMSDK from "@zohocrm/typescript-sdk-8.0"

class GetLayouts {
    static async getLayouts(): Promise<void> {
        const layoutsOperations = new ZOHOCRMSDK.Layouts.LayoutsOperations();
        
        const paramInstance = new ZOHOCRMSDK.ParameterMap();
        await paramInstance.add(ZOHOCRMSDK.Layouts.GetLayoutsParam.MODULE, "Leads");
        
        const response = await layoutsOperations.getLayouts(paramInstance);
        
        if (response !== null) {
            console.log("Status Code: " + response.getStatusCode());
            
            if ([204, 304].includes(response.getStatusCode())) {
                console.log(response.getStatusCode() === 204 ? "No Content" : "Not Modified");
                return;
            }

            const responseHandler = response.getObject();
            
            if (responseHandler instanceof ZOHOCRMSDK.Layouts.ResponseWrapper) {
                const layouts = responseHandler.getLayouts();
                if (layouts != null) {
                    for (let layout of layouts) {
                        console.log("Layout ID: " + layout.getId());
                        console.log("Layout Name: " + layout.getName());
                        console.log("Layout DisplayLabel: " + layout.getDisplayLabel());
                        console.log("Layout Visible: " + layout.getVisible());
                        console.log("Layout Status: " + layout.getStatus());
                        console.log("Layout Source: " + layout.getSource());
                        console.log("Layout ShowBusinessCard: " + layout.getShowBusinessCard());
                        console.log("Layout GeneratedType: " + layout.getGeneratedType());
                        
                        const convertMapping = layout.getConvertMapping();
                        if (convertMapping != null) {
                            console.log("Convert Mapping Contacts: " + convertMapping.getContacts());
                            console.log("Convert Mapping Accounts: " + convertMapping.getAccounts());
                            console.log("Convert Mapping Deals: " + convertMapping.getDeals());
                        }
                        
                        const sections = layout.getSections();
                        if (sections != null && sections.length > 0) {
                            console.log("Layout Sections:");
                            for (let section of sections) {
                                console.log("Section DisplayLabel: " + section.getDisplayLabel());
                                console.log("Section SequenceNumber: " + section.getSequenceNumber());
                                console.log("Section TabTraversal: " + section.getTabTraversal());
                                console.log("Section APIName: " + section.getAPIName());
                                console.log("Section ColumnCount: " + section.getColumnCount());
                                console.log("Section Name: " + section.getName());
                                console.log("Section GeneratedType: " + section.getGeneratedType());
                                
                                const fields = section.getFields();
                                if (fields != null && fields.length > 0) {
                                    console.log("Section Fields:");
                                    for (let field of fields) {
                                        console.log("Field ID: " + field.getId());
                                        console.log("Field APIName: " + field.getAPIName());
                                        console.log("Field FieldLabel: " + field.getFieldLabel());
                                        console.log("Field DataType: " + field.getDataType());
                                        console.log("----");
                                    }
                                }
                                console.log("----");
                            }
                        }
                        
                        console.log("--------------------");
                    }
                }
            }
            else if (responseHandler instanceof ZOHOCRMSDK.Layouts.APIException) {
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
        await GetLayouts.getLayouts();
    }
}

GetLayouts.initializeAndCall();