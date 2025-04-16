import * as ZOHOCRMSDK from "@zohocrm/typescript-sdk-8.0"

class CreateZiaPeopleEnrichment {
    static async createZiaPeopleEnrichment() {
        const ziaPeopleEnrichmentOperations = new ZOHOCRMSDK.ZiaPeopleEnrichment.ZiaPeopleEnrichmentOperations();

        const request = new ZOHOCRMSDK.ZiaPeopleEnrichment.BodyWrapper();
        const ziapeopleenrichment: ZOHOCRMSDK.ZiaPeopleEnrichment.ZiaPeopleEnrichment[] = [];

        const ziapeopleenrichment1 = new ZOHOCRMSDK.ZiaPeopleEnrichment.ZiaPeopleEnrichment();

        const enrichBasedOn = new ZOHOCRMSDK.ZiaPeopleEnrichment.EnrichBasedOn();
        enrichBasedOn.setName("zoho");
        enrichBasedOn.setEmail("sales@zohocorp.com");

        const company = new ZOHOCRMSDK.ZiaPeopleEnrichment.Company();
        company.setName("zoho");
        company.setWebsite("www.zoho.com");
        enrichBasedOn.setCompany(company);

        const social = new ZOHOCRMSDK.ZiaPeopleEnrichment.Social();
        social.setFacebook("facebook.com/zoho");
        social.setLinkedin("linkedin.com/zoho");
        social.setTwitter("twitter.com/zoho");
        enrichBasedOn.setSocial(social);

        ziapeopleenrichment1.setEnrichBasedOn(enrichBasedOn);
        ziapeopleenrichment.push(ziapeopleenrichment1);

        request.setZiapeopleenrichment(ziapeopleenrichment);

        const paramInstance = new ZOHOCRMSDK.ParameterMap();
        await paramInstance.add(ZOHOCRMSDK.ZiaPeopleEnrichment.CreateZiaPeopleEnrichmentParam.MODULE, "Vendors");

        const response: ZOHOCRMSDK.APIResponse<ZOHOCRMSDK.ZiaPeopleEnrichment.ActionHandler.MasterModel> = await ziaPeopleEnrichmentOperations.createZiaPeopleEnrichment(request, paramInstance);

        if (response !== null) {
            console.log("Status Code: " + response.getStatusCode());

            const actionHandler = response.getObject();

            if (actionHandler instanceof ZOHOCRMSDK.ZiaPeopleEnrichment.ActionWrapper) {
                const actionWrapper = actionHandler;
                const actionResponses = actionWrapper.getZiapeopleenrichment();

                for (const actionResponse of actionResponses) {
                    if (actionResponse instanceof ZOHOCRMSDK.ZiaPeopleEnrichment.SuccessResponse) {
                        const successResponse = actionResponse;
                        console.log("Status: " + successResponse.getStatus().getValue());
                        console.log("Code: " + successResponse.getCode().getValue());
                        console.log("Details: ");
                        for (const [key, value] of Object.entries(successResponse.getDetails())) {
                            console.log(key + ": " + value);
                        }
                        console.log("Message: " + successResponse.getMessage());
                    } else if (actionResponse instanceof ZOHOCRMSDK.ZiaPeopleEnrichment.APIException) {
                        const exception = actionResponse ;
                        console.log("Status: " + exception.getStatus().getValue());
                        console.log("Code: " + exception.getCode().getValue());
                        console.log("Details: ");
                        for (const [key, value] of Object.entries(exception.getDetails())) {
                            console.log(key + ": " + value);
                        }
                        console.log("Message: " + exception.getMessage());
                    }
                }
            } else if (actionHandler instanceof ZOHOCRMSDK.ZiaPeopleEnrichment.APIException) {
                const exception = actionHandler;
                console.log("Status: " + exception.getStatus().getValue());
                console.log("Code: " + exception.getCode().getValue());
                console.log("Details: ");
                for (const [key, value] of Object.entries(exception.getDetails())) {
                    console.log(key + ": " + value);
                }
                console.log("Message: " + exception.getMessage());
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
        await CreateZiaPeopleEnrichment.createZiaPeopleEnrichment();
    }
}

CreateZiaPeopleEnrichment.initializeAndCall();
