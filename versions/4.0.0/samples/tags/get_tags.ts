import * as ZOHOCRMSDK from "@zohocrm/typescript-sdk-8.0"

class GetTags {
    static async getTags(): Promise<void> {
        const tagsOperations = new ZOHOCRMSDK.Tags.TagsOperations();
        
        // Create ParameterMap for optional query parameters
        const paramInstance = new ZOHOCRMSDK.ParameterMap();
        
        // Add module parameter to filter tags by module
        await paramInstance.add(ZOHOCRMSDK.Tags.GetTagsParam.MODULE, "Leads");
        
        // Add my_tags parameter to get only user's tags
        // await paramInstance.add(ZOHOCRMSDK.Tags.GetTagsParam.MY_TAGS, "true");
        
        const response = await tagsOperations.getTags(paramInstance);
        
        if (response !== null) {
            console.log("Status Code: " + response.getStatusCode());
            
            if ([204, 304].includes(response.getStatusCode())) {
                console.log(response.getStatusCode() === 204 ? "No Content" : "Not Modified");
                return;
            }

            const responseHandler = response.getObject();
            
            if (responseHandler instanceof ZOHOCRMSDK.Tags.ResponseWrapper) {
                const tags = responseHandler.getTags();
                
                if (tags != null) {
                    console.log("=== Tags Details ===");
                    for (let tag of tags) {
                        console.log("Tag ID: " + tag.getId());
                        console.log("Tag Name: " + tag.getName());
                        console.log("Tag Color Code: " + tag.getColorCode());
                        
                        const createdBy = tag.getCreatedBy();
                        if (createdBy !== null && createdBy !== undefined) {
                            console.log("Created By ID: " + createdBy.getId());
                            console.log("Created By Name: " + createdBy.getName());
                        }
                        
                        const modifiedBy = tag.getModifiedBy();
                        if (modifiedBy !== null && modifiedBy !== undefined) {
                            console.log("Modified By ID: " + modifiedBy.getId());
                            console.log("Modified By Name: " + modifiedBy.getName());
                        }
                        
                        console.log("Created Time: " + tag.getCreatedTime());
                        console.log("Modified Time: " + tag.getModifiedTime());
                        console.log("--------------------");
                    }
                }
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
        await GetTags.getTags();
    }
}

GetTags.initializeAndCall();