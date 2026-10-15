import * as ZOHOCRMSDK from "@zohocrm/typescript-sdk-8.0"

class GetRecordCountForTag {
    static async getRecordCountForTag(): Promise<void> {
        const tagId = BigInt("1055806000028714002"); // Replace with actual tag ID
        const tagsOperations = new ZOHOCRMSDK.Tags.TagsOperations();
        const paramInstance = new ZOHOCRMSDK.ParameterMap();
        await paramInstance.add(ZOHOCRMSDK.Tags.GetRecordCountForTagParam.MODULE, "Leads");
        const response = await tagsOperations.getRecordCountForTag(tagId, paramInstance);
        
        if (response !== null) {
            console.log("Status Code: " + response.getStatusCode());
            
            if ([204, 304].includes(response.getStatusCode())) {
                console.log(response.getStatusCode() === 204 ? "No Content" : "Not Modified");
                return;
            }
            const responseHandler = response.getObject();
            
            if (responseHandler instanceof ZOHOCRMSDK.Tags.CountResponseWrapper) {
                let countWrapper = responseHandler;
				console.log("Tag Count: " + countWrapper.getCount());
            }
            else if (responseHandler instanceof ZOHOCRMSDK.Tags.APIException) {
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
        await GetRecordCountForTag.getRecordCountForTag();
    }
}

GetRecordCountForTag.initializeAndCall();