import * as ZOHOCRMSDK from "@zohocrm/typescript-sdk-8.0"

class GetCustomViews {
    static async getCustomViews(): Promise<void> {
        const customViewsOperations = new ZOHOCRMSDK.CustomViews.CustomViewsOperations();
        
        const paramInstance = new ZOHOCRMSDK.ParameterMap();
        await paramInstance.add(ZOHOCRMSDK.CustomViews.GetCustomViewsParam.MODULE, "Leads");
        await paramInstance.add(ZOHOCRMSDK.CustomViews.GetCustomViewsParam.PAGE, 1);
        await paramInstance.add(ZOHOCRMSDK.CustomViews.GetCustomViewsParam.PER_PAGE, 20);
        
        const response = await customViewsOperations.getCustomViews(paramInstance);
        
        if (response !== null) {
            console.log("Status Code: " + response.getStatusCode());
            
            if ([204, 304].includes(response.getStatusCode())) {
                console.log(response.getStatusCode() === 204 ? "No Content" : "Not Modified");
                return;
            }

            const responseHandler = response.getObject();
            
            if (responseHandler instanceof ZOHOCRMSDK.CustomViews.ResponseWrapper) {
                const customViews = responseHandler.getCustomViews();
                if (customViews != null) {
                    for (let customView of customViews) {
                        console.log("CustomView ID: " + customView.getId());
                        console.log("CustomView Name: " + customView.getName());
                        console.log("CustomView DisplayValue: " + customView.getDisplayValue());
                        console.log("CustomView SystemName: " + customView.getSystemName());
                        console.log("CustomView Category: " + customView.getCategory());
                        console.log("CustomView SortBy: " + customView.getSortBy());
                        console.log("CustomView SortOrder: " + customView.getSortOrder());
                        console.log("CustomView Favorite: " + customView.getFavorite());
                        console.log("CustomView Offline: " + customView.getOffline());
                        console.log("CustomView Default: " + customView.getDefault());
                        console.log("CustomView SystemDefined: " + customView.getSystemDefined());
                        
                        const criteria = customView.getCriteria();
                        if (criteria != null) {
                            console.log("CustomView Criteria: " + JSON.stringify(criteria));
                        }
                        const fields = customView.getFields();
                        if (fields != null && fields.length > 0) {
                            console.log("CustomView Fields:");
                            for (let field of fields) {
                                console.log("Field API Name: " + field.getAPIName());
                                console.log("Field ID: " + field.getId());
                            }
                        }
                        
                        console.log("--------------------");
                    }
                }
                
                const info = responseHandler.getInfo();
                if (info != null) {
                    if (info.getCount() != null) {
                        console.log("CustomViews Count: " + info.getCount());
                    }
                    if (info.getMoreRecords() != null) {
                        console.log("CustomViews MoreRecords: " + info.getMoreRecords());
                    }
                }
            }
            else if (responseHandler instanceof ZOHOCRMSDK.CustomViews.APIException) {
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
        await GetCustomViews.getCustomViews();
    }
}

GetCustomViews.initializeAndCall();