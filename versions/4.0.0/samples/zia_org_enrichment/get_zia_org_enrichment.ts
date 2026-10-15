import * as ZOHOCRMSDK from "@zohocrm/typescript-sdk-8.0"


class GetZiaOrgEnrichment {
    static async getZiaOrgEnrichment(ziaOrgEnrichmentId: bigint) {
        const ziaOrgEnrichmentOperations = new ZOHOCRMSDK.ZiaOrgEnrichment.ZiaOrgEnrichmentOperations();
        const response: ZOHOCRMSDK.APIResponse<ZOHOCRMSDK.ZiaOrgEnrichment.ResponseHandler.MasterModel> = await ziaOrgEnrichmentOperations.getZiaOrgEnrichment(ziaOrgEnrichmentId);

        if (response !== null) {
            console.log("Status Code: " + response.getStatusCode());

            if (response.getStatusCode() === 204) {
                console.log("No Content");
                return;
            }

            const responseHandler = response.getObject();

            if (responseHandler instanceof ZOHOCRMSDK.ZiaOrgEnrichment.ResponseWrapper) {
                const responseWrapper = responseHandler as ZOHOCRMSDK.ZiaOrgEnrichment.ResponseWrapper;
                const ziaOrgEnrichments = responseWrapper.getZiaOrgEnrichment();

                if (ziaOrgEnrichments != null) {
                    for (const ziaOrgEnrichment of ziaOrgEnrichments) {
                        const enrichedData = ziaOrgEnrichment.getEnrichedData();

                        if (enrichedData != null) {
                            console.log("ZiaOrgEnrichment EnrichedData OrgStatus: " + enrichedData.getOrgStatus());

                            const descriptions = enrichedData.getDescription();
                            if (descriptions != null) {
                                for (const description of descriptions) {
                                    console.log("ZiaOrgEnrichment EnrichedData Title: " + description.getTitle());
                                    console.log("ZiaOrgEnrichment EnrichedData Description: " + description.getDescription());
                                }
                            }

                            console.log("ZiaOrgEnrichment EnrichedData CEO: " + enrichedData.getCeo());
                            console.log("ZiaOrgEnrichment EnrichedData SecondaryEmail: " + enrichedData.getSecondaryEmail());
                            console.log("ZiaOrgEnrichment EnrichedData Revenue: " + enrichedData.getRevenue());
                            console.log("ZiaOrgEnrichment EnrichedData YearsInIndustry: " + enrichedData.getYearsInIndustry());

                            const otherContacts = enrichedData.getOtherContacts();
                            if (otherContacts != null) {
                                for (const contact of otherContacts) {
                                    console.log("ZiaOrgEnrichment EnrichedData OtherContacts: " + contact);
                                }
                            }

                            console.log("ZiaOrgEnrichment EnrichedData TechnoGraphicData: " + enrichedData.getTechnoGraphicData());
                            console.log("ZiaOrgEnrichment EnrichedData Logo: " + enrichedData.getLogo());
                            console.log("ZiaOrgEnrichment EnrichedData SecondaryContact: " + enrichedData.getSecondaryContact());
                            console.log("ZiaOrgEnrichment EnrichedData Id: " + enrichedData.getId());

                            const otherEmails = enrichedData.getOtherEmails();
                            if (otherEmails != null) {
                                for (const email of otherEmails) {
                                    console.log("ZiaOrgEnrichment EnrichedData OtherEmails: " + email);
                                }
                            }

                            console.log("ZiaOrgEnrichment EnrichedData SignIn: " + enrichedData.getSignIn());
                            console.log("ZiaOrgEnrichment EnrichedData Website: " + enrichedData.getWebsite());

                            const addresses = enrichedData.getAddress();
                            if (addresses != null) {
                                for (const address of addresses) {
                                    console.log("ZiaOrgEnrichment EnrichedData Address Country: " + address.getCountry());
                                    console.log("ZiaOrgEnrichment EnrichedData Address City: " + address.getCity());
                                    console.log("ZiaOrgEnrichment EnrichedData Address PinCode: " + address.getPinCode());
                                    console.log("ZiaOrgEnrichment EnrichedData Address State: " + address.getState());
                                    console.log("ZiaOrgEnrichment EnrichedData Address FillAddress: " + address.getFillAddress());
                                }
                            }

                            console.log("ZiaOrgEnrichment EnrichedData SignUp: " + enrichedData.getSignUp());
                            console.log("ZiaOrgEnrichment EnrichedData OrgType: " + enrichedData.getOrgType());

                            const headQuarters = enrichedData.getHeadQuarters();
                            if (headQuarters != null) {
                                for (const headQuarter of headQuarters) {
                                    console.log("ZiaOrgEnrichment EnrichedData HeadQuarters Country: " + headQuarter.getCountry());
                                    console.log("ZiaOrgEnrichment EnrichedData HeadQuarters City: " + headQuarter.getCity());
                                    console.log("ZiaOrgEnrichment EnrichedData HeadQuarters PinCode: " + headQuarter.getPinCode());
                                    console.log("ZiaOrgEnrichment EnrichedData HeadQuarters State: " + headQuarter.getState());
                                    console.log("ZiaOrgEnrichment EnrichedData HeadQuarters FillAddress: " + headQuarter.getFillAddress());
                                }
                            }

                            console.log("ZiaOrgEnrichment EnrichedData NoOfEmployees: " + enrichedData.getNoOfEmployees());

                            const territoryList = enrichedData.getTerritoryList();
                            if (territoryList != null) {
                                for (const territory of territoryList) {
                                    console.log("ZiaOrgEnrichment EnrichedData TerritoryList: " + territory);
                                }
                            }

                            console.log("ZiaOrgEnrichment EnrichedData FoundingYear: " + enrichedData.getFoundingYear());

                            const industries = enrichedData.getIndustries();
                            if (industries != null) {
                                for (const industry of industries) {
                                    console.log("ZiaOrgEnrichment EnrichedData Industries Name: " + industry.getName());
                                    console.log("ZiaOrgEnrichment EnrichedData Industries Description: " + industry.getDescription());
                                }
                            }

                            console.log("ZiaOrgEnrichment EnrichedData Name: " + enrichedData.getName());
                            console.log("ZiaOrgEnrichment EnrichedData PrimaryEmail: " + enrichedData.getPrimaryEmail());

                            const businessModel = enrichedData.getBusinessModel();
                            if (businessModel != null) {
                                for (const model of businessModel) {
                                    console.log("ZiaOrgEnrichment EnrichedData BusinessModel: " + model);
                                }
                            }

                            console.log("ZiaOrgEnrichment EnrichedData PrimaryContact: " + enrichedData.getPrimaryContact());

                            const socialMedia = enrichedData.getSocialMedia();
                            if (socialMedia != null) {
                                for (const media of socialMedia) {
                                    console.log("ZiaOrgEnrichment EnrichedData SocialMedia MediaType: " + media.getMediaType());
                                    const mediaUrls = media.getMediaUrl();
                                    if (mediaUrls !== null) {
                                        for (const url of mediaUrls) {
                                            console.log("ZiaOrgEnrichment EnrichedData SocialMedia MediaUrl: " + url);
                                        }
                                    }
                                }
                            }
                        }

                        const enrichBasedOn = ziaOrgEnrichment.getEnrichBasedOn();
                        if (enrichBasedOn != null) {
                            console.log("ZiaOrgEnrichment EnrichBasedOn Name: " + enrichBasedOn.getName());
                            console.log("ZiaOrgEnrichment EnrichBasedOn Email: " + enrichBasedOn.getEmail());
                            console.log("ZiaOrgEnrichment EnrichBasedOn Website: " + enrichBasedOn.getWebsite());
                        }

                        console.log("ZiaOrgEnrichment Id: " + ziaOrgEnrichment.getId());
                        console.log("ZiaOrgEnrichment Status: " + ziaOrgEnrichment.getStatus());
                    }
                }
            } else if (responseHandler instanceof ZOHOCRMSDK.ZiaOrgEnrichment.APIException) {
                const exception = responseHandler as ZOHOCRMSDK.ZiaOrgEnrichment.APIException;
                console.log("Status: " + exception.getStatus().getValue());
                console.log("Code: " + exception.getCode().getValue());
                console.log("Details: ");
                const details = exception.getDetails();
                if (details != null) {
                    for (const [key, value] of Object.entries(details)) {
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
        const ziaOrgEnrichmentId = BigInt("72722500001");
        await GetZiaOrgEnrichment.getZiaOrgEnrichment(ziaOrgEnrichmentId);
    }
}

GetZiaOrgEnrichment.initializeAndCall();
