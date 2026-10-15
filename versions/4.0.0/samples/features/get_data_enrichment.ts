import * as ZOHOCRMSDK from "@zohocrm/typescript-sdk-8.0"


class GetDataEnrichment {
    static async getDataEnrichment() {
        const featuresOperations = new ZOHOCRMSDK.Features.FeaturesOperations();
        const response: ZOHOCRMSDK.APIResponse<ZOHOCRMSDK.Features.ResponseHandler.MasterModel> = await featuresOperations.getDataEnrichment();

        if (response != null) {
            console.log("Status Code: " + response.getStatusCode());

            if ([204, 304].includes(response.getStatusCode())) {
                console.log(response.getStatusCode() === 204 ? "No Content" : "Not Modified");
                return;
            }

            const responseHandler = response.getObject();

            if (responseHandler instanceof ZOHOCRMSDK.Features.ResponseWrapper) {
                const responseWrapper = responseHandler;
                const features = responseWrapper.getFeatures();

                if (features != null) {
                    for (const feature of features) {
                        const components = feature.getComponents();

                        if (components != null) {
                            for (const component of components) {
                                console.log("Feature Component APIName: " + component.getAPIName());
                                console.log("Feature Component ModuleSupported: " + component.getModuleSupported());

                                const detail = component.getDetails();
                                if (detail != null) {
                                    const limit = detail.getLimits();
                                    if (limit != null) {
                                        console.log("Feature Component Detail Limit EditionLimit: " + limit.getEditionLimit());
                                        console.log("Feature Component Detail Limit Total: " + limit.getTotal());
                                    }

                                    const usedCount = detail.getUsedCount();
                                    if (usedCount != null) {
                                        console.log("Feature Component Detail UsedCount EditionLimit: " + usedCount.getEditionLimit());
                                        console.log("Feature Component Detail UsedCount Total: " + usedCount.getTotal());
                                    }
                                }

                                console.log("Feature Component FeatureLabel: " + component.getFeatureLabel());
                            }
                        }

                        console.log("Feature APIName: " + feature.getAPIName());

                        const parentFeature = feature.getParentFeature();
                        if (parentFeature != null) {
                            console.log("Feature ParentFeature APIName: " + parentFeature.getAPIName());
                        }

                        console.log("Feature ModuleSupported: " + feature.getModuleSupported());

                        const featureDetail = feature.getDetails();
                        if (featureDetail != null) {
                            const limit = featureDetail.getLimits();
                            if (limit != null) {
                                console.log("Feature Detail Limit EditionLimit: " + limit.getEditionLimit());
                                console.log("Feature Detail Limit Total: " + limit.getTotal());
                            }

                            const usedCount = featureDetail.getUsedCount();
                            if (usedCount != null) {
                                console.log("Feature Detail UsedCount EditionLimit: " + usedCount.getEditionLimit());
                                console.log("Feature Detail UsedCount Total: " + usedCount.getTotal());
                            }
                        }

                        console.log("Feature FeatureLabel: " + feature.getFeatureLabel());
                    }
                }
            } else if (responseHandler instanceof ZOHOCRMSDK.Features.APIException) {
                const exception = responseHandler;
                console.log("Status: " + exception.getStatus().getValue());
                console.log("Code: " + exception.getCode().getValue());
                console.log("Details: ");
                const details = exception.getDetails();
                for (const [key, value] of Object.entries(details)) {
                    console.log(`${key}: ${value}`);
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
        await GetDataEnrichment.getDataEnrichment();
    }
}

GetDataEnrichment.initializeAndCall();
