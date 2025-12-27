import * as ZOHOCRMSDK from "@zohocrm/typescript-sdk-8.0"

class UpdateTag {
    static async updateTag(): Promise<void> {
        const tagId = BigInt("1055806000010550007"); // Replace with actual tag ID
        const tagsOperations = new ZOHOCRMSDK.Tags.TagsOperations();
        const bodyWrapper = new ZOHOCRMSDK.Tags.BodyWrapper();
        const tagArray: ZOHOCRMSDK.Tags.Tag[] = [];
        const tag = new ZOHOCRMSDK.Tags.Tag();
        tag.setName("Updated Tag Name");
        tag.setColorCode("#28A745"); // Green color
        tagArray.push(tag);
        bodyWrapper.setTags(tagArray);
        const paramInstance = new ZOHOCRMSDK.ParameterMap();
        await paramInstance.add(ZOHOCRMSDK.Tags.UpdateTagParam.MODULE, "Leads");
        
        const response = await tagsOperations.updateTag(tagId, bodyWrapper, paramInstance);
        
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
        await UpdateTag.updateTag();
    }
}

UpdateTag.initializeAndCall();