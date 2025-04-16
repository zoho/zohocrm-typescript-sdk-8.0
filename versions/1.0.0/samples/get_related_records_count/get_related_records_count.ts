import * as ZOHOCRMSDK from "@zohocrm/typescript-sdk-8.0";

class GetRelatedRecordsCount {
    static async getRelatedRecordsCount(recordId: bigint, moduleAPIName: string) {
        const getRelatedRecordsCountOperations: ZOHOCRMSDK.GetRelatedRecordsCount.GetRelatedRecordsCountOperations = new ZOHOCRMSDK.GetRelatedRecordsCount.GetRelatedRecordsCountOperations(recordId, moduleAPIName);
        const request: ZOHOCRMSDK.GetRelatedRecordsCount.BodyWrapper = new ZOHOCRMSDK.GetRelatedRecordsCount.BodyWrapper();
        const getRelatedRecordsCountList = [];
        const getRelatedRecordsCountInstance: ZOHOCRMSDK.GetRelatedRecordsCount.GetRelatedRecordCount = new ZOHOCRMSDK.GetRelatedRecordsCount.GetRelatedRecordCount();
        const relatedListInstance: ZOHOCRMSDK.GetRelatedRecordsCount.RelatedList = new ZOHOCRMSDK.GetRelatedRecordsCount.RelatedList();
        relatedListInstance.setAPIName("Notes");
        relatedListInstance.setId(BigInt("34770602197"));
        getRelatedRecordsCountInstance.setRelatedList(relatedListInstance);
        getRelatedRecordsCountList.push(getRelatedRecordsCountInstance);
        request.setGetRelatedRecordsCount(getRelatedRecordsCountList);
        const response: ZOHOCRMSDK.APIResponse<ZOHOCRMSDK.GetRelatedRecordsCount.ActionHandler.MasterModel> = await getRelatedRecordsCountOperations.getRelatedRecordsCount(request);
        if (response) {
            console.log("Status Code:", response.getStatusCode());
            const actionHandler = response.getObject();
            if (actionHandler instanceof ZOHOCRMSDK.GetRelatedRecordsCount.ActionWrapper) {
                const actionResponses = actionHandler.getGetRelatedRecordsCount();
                actionResponses.forEach(actionResponse => {
                    if (actionResponse instanceof ZOHOCRMSDK.GetRelatedRecordsCount.SuccessResponse) {
                        console.log("Count:", actionResponse.getCount());
                        const relatedList = actionResponse.getRelatedList();
                        if (relatedList) {
                            console.log("RelatedList APIName:", relatedList.getAPIName());
                            console.log("RelatedList Id:", relatedList.getId());
                        }
                    } else if (actionResponse instanceof ZOHOCRMSDK.GetRelatedRecordsCount.APIException) {
                        console.log("Status:", actionResponse.getStatus().getValue());
                        console.log("Code:", actionResponse.getCode().getValue());
                        console.log("Details:");
                        Object.entries(actionResponse.getDetails()).forEach(([key, value]) => {
                            console.log(`${key}: ${value}`);
                        });
                        console.log("Message:", actionResponse.getMessage());
                    }
                });
            } else if (actionHandler instanceof ZOHOCRMSDK.GetRelatedRecordsCount.APIException) {
                console.log("Status:", actionHandler.getStatus().getValue());
                console.log("Code:", actionHandler.getCode().getValue());
                console.log("Details:");
                Object.entries(actionHandler.getDetails()).forEach(([key, value]) => {
                    console.log(`${key}: ${value}`);
                });
                console.log("Message:", actionHandler.getMessage());
            }
        }
    }

    static async initializeAndCall() {
        let environment = ZOHOCRMSDK.USDataCenter.PRODUCTION();
        let token = new ZOHOCRMSDK.OAuthBuilder()
            .clientId("client_id")
            .clientSecret("client_secret")
            .grantToken("grant_token")
            .build();
        await (new ZOHOCRMSDK.InitializeBuilder())
            .environment(environment)
            .token(token)
            .initialize();
        const moduleAPIName = "Leads";
        const recordId = BigInt("727225053001");
        await GetRelatedRecordsCount.getRelatedRecordsCount(recordId, moduleAPIName);
    }
}

GetRelatedRecordsCount.initializeAndCall();