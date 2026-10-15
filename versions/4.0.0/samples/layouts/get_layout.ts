import * as ZOHOCRMSDK from "@zohocrm/typescript-sdk-8.0"

class GetLayout {
    static async getLayout(): Promise<void> {
        const layoutId = BigInt("1055806000000091055");
        
        const layoutsOperations = new ZOHOCRMSDK.Layouts.LayoutsOperations();
        
        const paramInstance = new ZOHOCRMSDK.ParameterMap();
        await paramInstance.add(ZOHOCRMSDK.Layouts.GetLayoutParam.MODULE, "Leads");
        
        const response = await layoutsOperations.getLayout(layoutId, paramInstance);
        
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
                        console.log("Layout CreatedTime: " + layout.getCreatedTime());
                        console.log("Layout ModifiedTime: " + layout.getModifiedTime());
                        
                        const createdBy = layout.getCreatedBy();
                        if (createdBy != null) {
                            console.log("Created By Name: " + createdBy.getName());
                            console.log("Created By ID: " + createdBy.getId());
                        }
                        
                        const modifiedBy = layout.getModifiedBy();
                        if (modifiedBy != null) {
                            console.log("Modified By Name: " + modifiedBy.getName());
                            console.log("Modified By ID: " + modifiedBy.getId());
                        }
                        
                        const profiles = layout.getProfiles();
                        if (profiles != null && profiles.length > 0) {
                            console.log("Layout Profiles:");
                            for (let profile of profiles) {
                                console.log("Profile ID: " + profile.getId());
                                console.log("Profile Name: " + profile.getName());
                                console.log("----");
                            }
                        }
                        
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
                                
                                const properties = section.getProperties();
                                if (properties != null) {
                                    console.log("Section Reorder Rows: " + properties.getReorderRows());
                                    console.log("Section Tooltip: " + properties.getTooltip());
                                    console.log("Section Maximum Rows: " + properties.getMaximumRows());
                                }
                                
                                const fields = section.getFields();
                                if (fields != null && fields.length > 0) {
                                    console.log("Section Fields: " + fields.length + " fields");
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
        await GetLayout.getLayout();
    }
}

GetLayout.initializeAndCall();