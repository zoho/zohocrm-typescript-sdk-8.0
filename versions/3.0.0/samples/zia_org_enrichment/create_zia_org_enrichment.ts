import * as ZOHOCRMSDK from "@zohocrm/typescript-sdk-8.0"


class CreateZiaOrgEnrichment {
    static async createZiaOrgEnrichment() {
        const ziaOrgEnrichmentOperations = new ZOHOCRMSDK.ZiaOrgEnrichment.ZiaOrgEnrichmentOperations();
        const request = new ZOHOCRMSDK.ZiaOrgEnrichment.BodyWrapper();
        const ziaOrgEnrichments: ZOHOCRMSDK.ZiaOrgEnrichment.ZiaOrgEnrichment[] = [];

        const enrichBasedOn = new ZOHOCRMSDK.ZiaOrgEnrichment.EnrichBasedOn();
        enrichBasedOn.setName("zoho");
        enrichBasedOn.setEmail("sales@zohocorp.com");
        enrichBasedOn.setWebsite("www.zoho.com");

        const ziaOrgEnrichment = new ZOHOCRMSDK.ZiaOrgEnrichment.ZiaOrgEnrichment();
        ziaOrgEnrichment.setEnrichBasedOn(enrichBasedOn);
        ziaOrgEnrichments.push(ziaOrgEnrichment);

        request.setZiaOrgEnrichment(ziaOrgEnrichments);

        const paramInstance = new ZOHOCRMSDK.ParameterMap();
        await paramInstance.add(ZOHOCRMSDK.ZiaOrgEnrichment.CreateZiaOrgEnrichmentParam.MODULE, "Leads");

        const response: ZOHOCRMSDK.APIResponse<ZOHOCRMSDK.ZiaOrgEnrichment.ActionHandler.MasterModel> = await ziaOrgEnrichmentOperations.createZiaOrgEnrichment(request, paramInstance);

        if (response !== null) {
            console.log("Status Code: " + response.getStatusCode());

            const actionHandler = response.getObject();

            if (actionHandler instanceof ZOHOCRMSDK.ZiaOrgEnrichment.ActionWrapper) {
                const actionWrapper = actionHandler;
                const actionResponses = actionWrapper.getZiaOrgEnrichment();

                for (const actionResponse of actionResponses) {
                    if (actionResponse instanceof ZOHOCRMSDK.ZiaOrgEnrichment.SuccessResponse) {
                        const successResponse = actionResponse;
                        console.log("Status: " + successResponse.getStatus().getValue());
                        console.log("Code: " + successResponse.getCode().getValue());
                        console.log("Details: ");
                        for (const [key, value] of Object.entries(successResponse.getDetails())) {
                            console.log(key + ": " + value);
                        }
                        console.log("Message: " + successResponse.getMessage().getValue());
                    } else if (actionResponse instanceof ZOHOCRMSDK.ZiaOrgEnrichment.APIException) {
                        const exception = actionResponse;
                        console.log("Status: " + exception.getStatus().getValue());
                        console.log("Code: " + exception.getCode().getValue());
                        console.log("Details: ");
                        for (const [key, value] of Object.entries(exception.getDetails())) {
                            console.log(key + ": " + value);
                        }
                        console.log("Message: " + exception.getMessage().getValue());
                    }
                }
            } else if (actionHandler instanceof ZOHOCRMSDK.ZiaOrgEnrichment.APIException) {
                const exception = actionHandler as ZOHOCRMSDK.ZiaOrgEnrichment.APIException;
                console.log("Status: " + exception.getStatus().getValue());
                console.log("Code: " + exception.getCode().getValue());
                console.log("Details: ");
                for (const [key, value] of Object.entries(exception.getDetails())) {
                    console.log(key + ": " + value);
                }
                console.log("Message: " + exception.getMessage().getValue());
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
        await CreateZiaOrgEnrichment.createZiaOrgEnrichment();
    }
}

CreateZiaOrgEnrichment.initializeAndCall();