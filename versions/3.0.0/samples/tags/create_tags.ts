import * as ZOHOCRMSDK from "@zohocrm/typescript-sdk-8.0"

class CreateTags {
    static async createTags(): Promise<void> {
        const tagsOperations = new ZOHOCRMSDK.Tags.TagsOperations();
        
        // Create BodyWrapper instance
        const bodyWrapper = new ZOHOCRMSDK.Tags.BodyWrapper();
        
        // Array to hold Tag instances
        const tagArray: ZOHOCRMSDK.Tags.Tag[] = [];
        
        // Create first tag
        const tag1 = new ZOHOCRMSDK.Tags.Tag();
        tag1.setName("Important Lead");
        tag1.setColorCode("#FF5733"); // Orange color
        tagArray.push(tag1);
        
        // Create second tag
        const tag2 = new ZOHOCRMSDK.Tags.Tag();
        tag2.setName("Follow Up Required");
        tag2.setColorCode("#3498DB"); // Blue color
        tagArray.push(tag2);
        
        bodyWrapper.setTags(tagArray);
        
        // Create ParameterMap for additional parameters
        const paramInstance = new ZOHOCRMSDK.ParameterMap();
        await paramInstance.add(ZOHOCRMSDK.Tags.CreateTagsParam.MODULE, "Leads");
        
        const response = await tagsOperations.createTags(bodyWrapper, paramInstance);
        
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
        await CreateTags.createTags();
    }
}

CreateTags.initializeAndCall();