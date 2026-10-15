import * as ZOHOCRMSDK from "@zohocrm/typescript-sdk-8.0"



class GetZiaOrgEnrichments {
    static async getZiaOrgEnrichments(){
        const ziaOrgEnrichmentOperations = new ZOHOCRMSDK.ZiaOrgEnrichment.ZiaOrgEnrichmentOperations();
        const paramInstance = new ZOHOCRMSDK.ParameterMap();

        const response: ZOHOCRMSDK.APIResponse<ZOHOCRMSDK.ZiaOrgEnrichment.ResponseHandler.MasterModel> = await ziaOrgEnrichmentOperations.getZiaOrgEnrichments(paramInstance);

        if (response) {
            console.log("Status Code: " + response.getStatusCode());

            if (response.getStatusCode() === 204) {
                console.log("No Content");
                return;
            }

            const responseHandler: ZOHOCRMSDK.ZiaOrgEnrichment.ResponseHandler.MasterModel = response.getObject();

            if (responseHandler instanceof ZOHOCRMSDK.ZiaOrgEnrichment.ResponseWrapper) {
                const responseWrapper: ZOHOCRMSDK.ZiaOrgEnrichment.ResponseWrapper = responseHandler;
                const ziaOrgEnrichmentList: ZOHOCRMSDK.ZiaOrgEnrichment.ZiaOrgEnrichment[] | undefined = responseWrapper.getZiaOrgEnrichment();

                if (ziaOrgEnrichmentList) {
                    for (const ziaOrgEnrichment of ziaOrgEnrichmentList) {
                        console.log("ZiaOrgEnrichment CreatedTime : " + ziaOrgEnrichment.getCreatedTime());
                        console.log("ZiaOrgEnrichment Id : " + ziaOrgEnrichment.getId());

                        const user: ZOHOCRMSDK.ZiaOrgEnrichment.User | undefined = ziaOrgEnrichment.getCreatedBy();
                        if (user) {
                            console.log("ZiaOrgEnrichment User Id : " + user.getId());
                            console.log("ZiaOrgEnrichment User Name : " + user.getName());
                        }

                        console.log("ZiaOrgEnrichment Status : " + ziaOrgEnrichment.getStatus());
                    }
                }

                const info: ZOHOCRMSDK.ZiaOrgEnrichment.Info | undefined = responseWrapper.getInfo();
                if (info) {
                    if (info.getPerPage() !== undefined) {
                        console.log("ZiaOrgEnrichment Info PerPage: " + info.getPerPage().toString());
                    }
                    if (info.getCount() !== undefined) {
                        console.log("ZiaOrgEnrichment Info Count: " + info.getCount().toString());
                    }
                    if (info.getPage() !== undefined) {
                        console.log("ZiaOrgEnrichment Info Page: " + info.getPage().toString());
                    }
                    if (info.getMoreRecords() !== undefined) {
                        console.log("ZiaOrgEnrichment Info MoreRecords: " + info.getMoreRecords().toString());
                    }
                }
            } else if (responseHandler instanceof ZOHOCRMSDK.ZiaOrgEnrichment.APIException) {
                const exception: ZOHOCRMSDK.ZiaOrgEnrichment.APIException = responseHandler;
                console.log("Status: " + exception.getStatus().getValue());
                console.log("Code: " + exception.getCode().getValue());
                console.log("Details: ");
                if (exception.getDetails()) {
                    for (const [key, value] of Object.entries(exception.getDetails())) {
                        console.log(key + ": " + value);
                    }
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
        await GetZiaOrgEnrichments.getZiaOrgEnrichments();

    }
}

GetZiaOrgEnrichments.initializeAndCall();
