import * as ZOHOCRMSDK from "@zohocrm/typescript-sdk-8.0";

class DeleteRelatedRecordsUsingExternalId {

    public static async deleteRelatedRecordsUsingExternalId() {
        try {
            let relatedRecordsOperations: ZOHOCRMSDK.RelatedRecords.RelatedRecordsOperations =  new ZOHOCRMSDK.RelatedRecords.RelatedRecordsOperations("Products", "Leads");
            let paramInstance: ZOHOCRMSDK.ParameterMap = new ZOHOCRMSDK.ParameterMap();
            let recordIds: string = "external_product_id_123,34096430693008,34096430694009";
            paramInstance.add(ZOHOCRMSDK.RelatedRecords.DeleteRelatedRecordsUsingExternalIDParam.IDS, recordIds);

            let headerInstance: ZOHOCRMSDK.HeaderMap = new ZOHOCRMSDK.HeaderMap();
            let xExternal = "Leads.External,Products.Products_External";
            headerInstance.add(ZOHOCRMSDK.RelatedRecords.DeleteRelatedRecordsUsingExternalIDHeader.X_EXTERNAL, xExternal);

            let externalValue: string = "external_lead_id_123";
            let response: ZOHOCRMSDK.APIResponse<ZOHOCRMSDK.RelatedRecords.ActionHandler.MasterModel> = await relatedRecordsOperations.deleteRelatedRecordsUsingExternalId(externalValue, paramInstance, headerInstance);

            if (response !== null) {
                console.log("Status Code: " + response.getStatusCode());

                let actionHandler: ZOHOCRMSDK.RelatedRecords.ActionHandler.MasterModel = response.getObject();

                if (actionHandler instanceof ZOHOCRMSDK.RelatedRecords.ActionWrapper) {
                    let actionWrapper: ZOHOCRMSDK.RelatedRecords.ActionWrapper = actionHandler as ZOHOCRMSDK.RelatedRecords.ActionWrapper;
                    let actionResponses: ZOHOCRMSDK.RelatedRecords.ActionResponse.MasterModel[] = actionWrapper.getData();

                    actionResponses.forEach((actionResponse) => {
                        if (actionResponse instanceof ZOHOCRMSDK.RelatedRecords.SuccessResponse) {
                            let successResponse: ZOHOCRMSDK.RelatedRecords.SuccessResponse = actionResponse as ZOHOCRMSDK.RelatedRecords.SuccessResponse;
                            console.log("Status: " + successResponse.getStatus().getValue());
                            console.log("Code: " + successResponse.getCode().getValue());
                            console.log("Message: " + successResponse.getMessage().getValue());
                            const details = successResponse.getDetails();
                            if (details != null) {
                                console.log("Details:");
                                Array.from(details.keys()).forEach(key => {
                                    console.log("  " + key + ": " + details.get(key));
                                });
                            }
                        }
                        else if (actionResponse instanceof ZOHOCRMSDK.RelatedRecords.APIException) {
                            let exception: ZOHOCRMSDK.RelatedRecords.APIException = actionResponse as ZOHOCRMSDK.RelatedRecords.APIException;
                            console.log("Status: " + exception.getStatus().getValue());
                            console.log("Code: " + exception.getCode().getValue());
                            console.log("Message: " + exception.getMessage().getValue());
                            const details = exception.getDetails();
                            if (details != null) {
                                console.log("Details:");
                                Array.from(details.keys()).forEach(key => {
                                    console.log("  " + key + ": " + details.get(key));
                                });
                            }
                        }
                    });
                }
                else if (actionHandler instanceof ZOHOCRMSDK.RelatedRecords.APIException) {
                    let exception: ZOHOCRMSDK.RelatedRecords.APIException = actionHandler as ZOHOCRMSDK.RelatedRecords.APIException;
                    console.log("Status: " + exception.getStatus().getValue());
                    console.log("Code: " + exception.getCode().getValue());
                    console.log("Message: " + exception.getMessage().getValue());
                    const details = exception.getDetails();
                    if (details != null) {
                        console.log("Details:");
                        Array.from(details.keys()).forEach(key => {
                            console.log("  " + key + ": " + details.get(key));
                        });
                    }
                }
            }

        } catch (error) {
            console.error("Error in deleteRelatedRecordsUsingExternalId:", error);
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
        await DeleteRelatedRecordsUsingExternalId.deleteRelatedRecordsUsingExternalId();
    }
}

// Execute the function
DeleteRelatedRecordsUsingExternalId.initializeAndCall();