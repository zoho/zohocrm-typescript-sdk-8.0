import * as ZOHOCRMSDK from "@zohocrm/typescript-sdk-8.0"

class UpdateTags {
    static async updateTags(): Promise<void> {
        const tagsOperations = new ZOHOCRMSDK.Tags.TagsOperations();
        
        // Create BodyWrapper instance
        const bodyWrapper = new ZOHOCRMSDK.Tags.BodyWrapper();
        
        // Array to hold Tag instances for bulk update
        const tagArray: ZOHOCRMSDK.Tags.Tag[] = [];
        
        // Update first existing tag
        const tag1 = new ZOHOCRMSDK.Tags.Tag();
        tag1.setId(BigInt("1055806000010550007")); // Replace with actual tag ID
        tag1.setName("Updated Hot Lead");
        tagArray.push(tag1);
        
        // Update second existing tag
        const tag2 = new ZOHOCRMSDK.Tags.Tag();
        tag2.setId(BigInt("34096432463002")); // Replace with actual tag ID
        tag2.setName("Updated Qualified Lead");
        tag2.setColorCode("#4ECDC4"); // Updated color
        tagArray.push(tag2);
        
        // Update third existing tag
        const tag3 = new ZOHOCRMSDK.Tags.Tag();
        tag3.setId(BigInt("34096432463003")); // Replace with actual tag ID
        tag3.setName("Updated Cold Lead");
        tag3.setColorCode("#45B7D1"); // Updated color
        tagArray.push(tag3);
        
        bodyWrapper.setTags(tagArray);
        
        // Create ParameterMap for additional parameters
        const paramInstance = new ZOHOCRMSDK.ParameterMap();
        await paramInstance.add(ZOHOCRMSDK.Tags.UpdateTagsParam.MODULE, "Leads");
        
        const response = await tagsOperations.updateTags(bodyWrapper, paramInstance);
        
        if (response !== null) {
            console.log("Status Code: " + response.getStatusCode());

            const actionHandler = response.getObject();
            
            if (actionHandler instanceof ZOHOCRMSDK.Tags.ActionWrapper) {
                const actionWrapper = actionHandler;
                const actionResponses = actionWrapper.getTags();
                
                if (actionResponses !== null) {
                    for (let i = 0; i < actionResponses.length; i++) {
                        const actionResponse = actionResponses[i];
                        if (actionResponse instanceof ZOHOCRMSDK.Tags.SuccessResponse) {
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
                            console.log("Message: " + successResponse.getMessage().getValue());
                        }
                        else if (actionResponse instanceof ZOHOCRMSDK.Tags.APIException) {
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
                            console.log("Message: " + exception.getMessage().getValue());
                        }
                    }
                }
            }
            else if (actionHandler instanceof ZOHOCRMSDK.Tags.APIException) {
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
        await UpdateTags.updateTags();
    }
}

UpdateTags.initializeAndCall();