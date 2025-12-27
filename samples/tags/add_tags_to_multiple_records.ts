import * as ZOHOCRMSDK from "@zohocrm/typescript-sdk-8.0"

class AddTagsToMultipleRecords {
    static async addTagsToMultipleRecords(): Promise<void> {
        const moduleAPIName = "Leads";
        const tagsOperations = new ZOHOCRMSDK.Tags.TagsOperations();
        const requestWrapper = new ZOHOCRMSDK.Tags.NewTagRequestWrapper();
        const tagArray: ZOHOCRMSDK.Tags.Tag[] = [];

        const tag1 = new ZOHOCRMSDK.Tags.Tag();
        tag1.setName("Bulk Campaign");
        tag1.setColorCode("#9B59B6"); // Purple color
        tagArray.push(tag1);
        
        const tag2 = new ZOHOCRMSDK.Tags.Tag();
        tag2.setName("Bulk Campaign1");
        tagArray.push(tag2);

        const tag3 = new ZOHOCRMSDK.Tags.Tag();
        tag3.setName("Q4 Target");
        tag3.setColorCode("#E67E22"); // Orange color
        tagArray.push(tag3);
        
        requestWrapper.setTags(tagArray);
        
        const recordIds: bigint[] = [
            BigInt("1055806000028688018"), // Replace with actual record IDs
            BigInt("1055806000028638063")
        ];
        requestWrapper.setIds(recordIds);
        
        const paramInstance = new ZOHOCRMSDK.ParameterMap();
        await paramInstance.add(ZOHOCRMSDK.Tags.AddTagsToMultipleRecordsParam.OVER_WRITE, "false");
        const response = await tagsOperations.addTagsToMultipleRecords(moduleAPIName, requestWrapper, paramInstance);
        
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
        await AddTagsToMultipleRecords.addTagsToMultipleRecords();
    }
}

AddTagsToMultipleRecords.initializeAndCall();