import * as ZOHOCRMSDK from "@zohocrm/typescript-sdk-8.0"

class MergeTags {
    static async mergeTags(): Promise<void> {
        const tagId = BigInt("1055806000028714002"); // Main tag ID to merge others into
        const tagsOperations = new ZOHOCRMSDK.Tags.TagsOperations();
        
        // Create MergeWrapper instance
        const mergeWrapper = new ZOHOCRMSDK.Tags.MergeWrapper();
        
        // Array to hold Tag instances to be merged into the main tag
        const tagsToMerge: ZOHOCRMSDK.Tags.ConflictWrapper[] = [];
        
        // First tag to merge
        const tag1 = new ZOHOCRMSDK.Tags.ConflictWrapper();
        tag1.setConflictId("1055806000028713001"); // Tag ID to be merged
        tagsToMerge.push(tag1);
        
        mergeWrapper.setTags(tagsToMerge);
        const response = await tagsOperations.mergeTags(tagId, mergeWrapper);
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
        await MergeTags.mergeTags();
    }
}

MergeTags.initializeAndCall();