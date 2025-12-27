import * as ZOHOCRMSDK from "@zohocrm/typescript-sdk-8.0"

class RemoveTags {
    static async removeTags(): Promise<void> {
        const moduleAPIName = "Leads";
        const recordId = BigInt("1055806000028688018"); // Replace with actual record ID
        const tagsOperations = new ZOHOCRMSDK.Tags.TagsOperations();
        const requestWrapper = new ZOHOCRMSDK.Tags.ExistingTagRequestWrapper();
        const tagArray: ZOHOCRMSDK.Tags.ExistingTag[] = [];
        const tag1 = new ZOHOCRMSDK.Tags.ExistingTag();
        tag1.setName("Hot Lead");
        tagArray.push(tag1);
        requestWrapper.setTags(tagArray);
        const response = await tagsOperations.removeTags(moduleAPIName, recordId, requestWrapper);
        
        if (response !== null) {
            console.log("Status Code: " + response.getStatusCode());

            const recordActionHandler = response.getObject();
            
            if (recordActionHandler instanceof ZOHOCRMSDK.Tags.RecordActionWrapper) {
                const recordActionWrapper = recordActionHandler;
                const recordActionResponses = recordActionWrapper.getData();
                if (recordActionResponses !== null) {
                    for (let i = 0; i < recordActionResponses.length; i++) {
                        const recordActionResponse = recordActionResponses[i];
                        if (recordActionResponse instanceof ZOHOCRMSDK.Tags.RecordSuccessResponse) {
                            const successResponse = recordActionResponse;
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
                        else if (recordActionResponse instanceof ZOHOCRMSDK.Tags.APIException) {
                            const exception = recordActionResponse;
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
            else if (recordActionHandler instanceof ZOHOCRMSDK.Tags.APIException) {
                const exception = recordActionHandler;
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
        await RemoveTags.removeTags();
    }
}

RemoveTags.initializeAndCall();