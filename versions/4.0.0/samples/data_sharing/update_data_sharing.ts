import * as ZOHOCRMSDK from "@zohocrm/typescript-sdk-8.0";

class UpdateDataSharing{
    static async updateDataSharing() {
        const dataSharingOperations: ZOHOCRMSDK.DataSharing.DataSharingOperations = new ZOHOCRMSDK.DataSharing.DataSharingOperations();
        const request: ZOHOCRMSDK.DataSharing.BodyWrapper = new ZOHOCRMSDK.DataSharing.BodyWrapper();
        const dataSharingArray = [];
        const dataSharing1: ZOHOCRMSDK.DataSharing.DataSharing = new ZOHOCRMSDK.DataSharing.DataSharing();
        dataSharing1.setShareType(new ZOHOCRMSDK.Choice("private"));
        const module: ZOHOCRMSDK.DataSharing.Module = new ZOHOCRMSDK.DataSharing.Module();
        module.setAPIName("Leads");
        module.setId(BigInt("34770612175"));
        await dataSharing1.setModule(module);
        dataSharingArray.push(dataSharing1);
        request.setDataSharing(dataSharingArray);
        const response : ZOHOCRMSDK.APIResponse<ZOHOCRMSDK.DataSharing.ResponseHandler.MasterModel>= await dataSharingOperations.updateDataSharing(request);

        if (response) {
            console.log("Status Code:", response.getStatusCode());
            const actionHandler = response.getObject();
            if (actionHandler instanceof ZOHOCRMSDK.DataSharing.ActionWrapper) {
                const actionResponses= actionHandler.getDataSharing();
                actionResponses.forEach(actionResponse => {
                    if (actionResponse instanceof ZOHOCRMSDK.DataSharing.SuccessResponse) {
                        console.log("Status:", actionResponse.getStatus().getValue());
                        console.log("Code:", actionResponse.getCode().getValue());
                        console.log("Details:");
                        Object.entries(actionResponse.getDetails()).forEach(([key, value]) => {
                            console.log(`${key}: ${value}`);
                        });
                        console.log("Message:", actionResponse.getMessage());
                    } else if (actionResponse instanceof ZOHOCRMSDK.DataSharing.APIException) {
                        console.log("Status:", actionResponse.getStatus().getValue());
                        console.log("Code:", actionResponse.getCode().getValue());
                        console.log("Details:");
                        Object.entries(actionResponse.getDetails()).forEach(([key, value]) => {
                            console.log(`${key}: ${value}`);
                        });
                        console.log("Message:", actionResponse.getMessage());
                    }
                });
            } else if (actionHandler instanceof ZOHOCRMSDK.DataSharing.APIException) {
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
        await(new ZOHOCRMSDK.InitializeBuilder())
            .environment(environment)
            .token(token)
            .initialize();
        await UpdateDataSharing.updateDataSharing();

    }
}
UpdateDataSharing.initializeAndCall();