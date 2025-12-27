import * as ZOHOCRMSDK from "@zohocrm/typescript-sdk-8.0";

class GetDataSharing{

    static async getDataSharing() {
        const dataSharingOperations: ZOHOCRMSDK.DataSharing.DataSharingOperations = new ZOHOCRMSDK.DataSharing.DataSharingOperations();

        // Call the getDataSharing method
        const response:ZOHOCRMSDK.APIResponse<ZOHOCRMSDK.DataSharing.ResponseHandler.MasterModel> = await dataSharingOperations.getDataSharing();

        if (response) {
            console.log("Status Code:", response.getStatusCode());

            const responseHandler = response.getObject();

            if (responseHandler instanceof ZOHOCRMSDK.DataSharing.ResponseWrapper) {
                const dataSharingList: ZOHOCRMSDK.DataSharing.DataSharing[]= responseHandler.getDataSharing();

                dataSharingList.forEach(dataSharing => {
                    console.log("DataSharing PublicInPortals:", dataSharing.getPublicInPortals());
                    console.log("DataSharing ShareType:", dataSharing.getShareType().getValue());

                    const module = dataSharing.getModule();
                    if (module) {
                        console.log("DataSharing Module APIName:", module.getAPIName());
                        console.log("DataSharing Module Id:", module.getId());
                    }

                    console.log("DataSharing RuleComputationRunning:", dataSharing.getRuleComputationRunning());
                });
            } else if (responseHandler instanceof ZOHOCRMSDK.DataSharing.APIException) {
                const exception: ZOHOCRMSDK.DataSharing.APIException = responseHandler;
                console.log("Status:", exception.getStatus().getValue());
                console.log("Code:", exception.getCode().getValue());
                console.log("Details:");
                Object.entries(exception.getDetails()).forEach(([key, value]) => {
                    console.log(`${key}: ${value}`);
                });
                console.log("Message:", exception.getMessage());
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
        await GetDataSharing.getDataSharing();

    }
}
GetDataSharing.initializeAndCall();