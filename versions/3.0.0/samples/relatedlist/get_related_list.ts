import * as ZOHOCRMSDK from "@zohocrm/typescript-sdk-8.0"

class GetRelatedList {
    static async getRelatedList(): Promise<void> {
        const layoutId = BigInt("4409002304001");
        const relatedListsOperations = new ZOHOCRMSDK.RelatedLists.RelatedListsOperations(undefined);
        const relatedListId = BigInt("1055806000012042048");
        const paramInstance = new ZOHOCRMSDK.ParameterMap();
        
        await paramInstance.add(ZOHOCRMSDK.RelatedLists.GetRelatedListParam.MODULE, "Leads");
        
        const response = await relatedListsOperations.getRelatedList(relatedListId, paramInstance);
        
        if (response !== null) {
            console.log("Status Code: " + response.getStatusCode());
            
            if ([204, 304].includes(response.getStatusCode())) {
                console.log(response.getStatusCode() === 204 ? "No Content" : "Not Modified");
                return;
            }

            const responseHandler = response.getObject();
            
            if (responseHandler instanceof ZOHOCRMSDK.RelatedLists.ResponseWrapper) {
                const relatedLists = responseHandler.getRelatedLists();
                
                if (relatedLists != null) {
                    for (let relatedList of relatedLists) {
                        console.log("Related List ID: " + relatedList.getId());
                        console.log("Related List Sequence Number: " + relatedList.getSequenceNumber());
                        console.log("Related List Display Label: " + relatedList.getDisplayLabel());
                        console.log("Related List API Name: " + relatedList.getAPIName());
                        console.log("Related List Module: " + relatedList.getModule());
                        console.log("Related List Name: " + relatedList.getName());
                        console.log("Related List Action: " + relatedList.getAction());
                        console.log("Related List Href: " + relatedList.getHref());
                        console.log("Related List Type: " + relatedList.getType());
                        console.log("Related List Connectedmodule: " + relatedList.getConnectedmodule());
                        console.log("Related List Linkingmodule: " + relatedList.getLinkingmodule());
                        console.log("Related List Visible: " + relatedList.getVisible());
                        console.log("--------------------");
                    }
                }
            }
            else if (responseHandler instanceof ZOHOCRMSDK.RelatedLists.APIException) {
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
        await GetRelatedList.getRelatedList();
    }
}

GetRelatedList.initializeAndCall();