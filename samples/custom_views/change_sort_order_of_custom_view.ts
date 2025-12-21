import * as ZOHOCRMSDK from "@zohocrm/typescript-sdk-8.0"

class ChangeSortOrderOfCustomView {
    static async changeSortOrderOfCustomView(): Promise<void> {
        const customViewId = BigInt("1055806000020849005");
        
        const customViewsOperations = new ZOHOCRMSDK.CustomViews.CustomViewsOperations();
        
        const request = new ZOHOCRMSDK.CustomViews.BodyWrapper();
        let customViews = [];
        let customView = new ZOHOCRMSDK.CustomViews.CustomViews();
        customView.setSortOrder(new ZOHOCRMSDK.Choice("asc"));
        let sortBy = new ZOHOCRMSDK.CustomViews.SortBy();
        sortBy.setAPIName("Email");
        sortBy.setId(BigInt("1055806000000002599"));
        customView.setSortBy(sortBy);
        customViews.push(customView);
        request.setCustomViews(customViews);
        
        const paramInstance = new ZOHOCRMSDK.ParameterMap();
        await paramInstance.add(ZOHOCRMSDK.CustomViews.ChangeSortOrderOfCustomViewParam.MODULE, "Leads");
        
        const response = await customViewsOperations.changeSortOrderOfCustomView(customViewId, request, paramInstance);
        
        if (response !== null) {
            console.log("Status Code: " + response.getStatusCode());
            
            const actionHandler = response.getObject();
            
            if (actionHandler instanceof ZOHOCRMSDK.CustomViews.ActionWrapper) {
                const actionResponses = actionHandler.getCustomViews();
                if (actionResponses != null) {
                    for (let actionResponse of actionResponses) {
                        if (actionResponse instanceof ZOHOCRMSDK.CustomViews.SuccessResponse) {
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
                        else if (actionResponse instanceof ZOHOCRMSDK.CustomViews.APIException) {
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
            else if (actionHandler instanceof ZOHOCRMSDK.CustomViews.APIException) {
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
        await ChangeSortOrderOfCustomView.changeSortOrderOfCustomView();
    }
}

ChangeSortOrderOfCustomView.initializeAndCall();