import * as ZOHOCRMSDK from "@zohocrm/typescript-sdk-8.0"


class GetZiaPeopleEnrichment{
    static async getZiaPeopleEnrichment(ziaPeopleEnrichmentId: bigint) {
        const ziaPeopleEnrichmentOperations = new ZOHOCRMSDK.ZiaPeopleEnrichment.ZiaPeopleEnrichmentOperations();

        const response: ZOHOCRMSDK.APIResponse<ZOHOCRMSDK.ZiaPeopleEnrichment.ResponseHandler.MasterModel> = await ziaPeopleEnrichmentOperations.getZiaPeopleEnrichment(ziaPeopleEnrichmentId);

        if (response !== null) {
            console.log('Status Code: ' + response.getStatusCode());

            if (response.getStatusCode() === 204) {
                console.log('No Content');
                return;
            }

            const responseHandler: ZOHOCRMSDK.ZiaPeopleEnrichment.ResponseHandler.MasterModel = response.getObject();

            if (responseHandler instanceof ZOHOCRMSDK.ZiaPeopleEnrichment.ResponseWrapper) {
                const responseWrapper: ZOHOCRMSDK.ZiaPeopleEnrichment.ResponseWrapper = responseHandler;
                const ziapeopleenrichment: ZOHOCRMSDK.ZiaPeopleEnrichment.ZiaPeopleEnrichment[] = responseWrapper.getZiapeopleenrichment();

                if (ziapeopleenrichment != null) {
                    for (const ziapeopleenrichment1 of ziapeopleenrichment) {
                        const enrichedData: ZOHOCRMSDK.ZiaPeopleEnrichment.EnrichedData = ziapeopleenrichment1.getEnrichedData();

                        if (enrichedData != null) {
                            console.log('ZiaPeopleEnrichment EnrichedData Website: ' + enrichedData.getWebsite());

                            const emailInfos: ZOHOCRMSDK.ZiaPeopleEnrichment.EmailInfo[] = enrichedData.getEmailInfos();
                            if (emailInfos != null) {
                                for (const emailInfo of emailInfos) {
                                    console.log('ZiaPeopleEnrichment EnrichedData EmailInfo Type: ' + emailInfo.getType());
                                    console.log('ZiaPeopleEnrichment EnrichedData EmailInfo Email: ' + emailInfo.getEmail());
                                }
                            }

                            console.log('ZiaPeopleEnrichment EnrichedData Gender: ' + enrichedData.getGender());

                            const companyInfo: ZOHOCRMSDK.ZiaPeopleEnrichment.CompanyInfo = enrichedData.getCompanyInfo();
                            if (companyInfo != null) {
                                console.log('ZiaPeopleEnrichment EnrichedData CompanyInfo Name: ' + companyInfo.getName());

                                const industries: ZOHOCRMSDK.ZiaPeopleEnrichment.Industry[] = companyInfo.getIndustries();
                                if (industries != null) {
                                    for (const industry of industries) {
                                        console.log('ZiaPeopleEnrichment EnrichedData CompanyInfo Industries Name: ' + industry.getName());
                                        console.log('ZiaPeopleEnrichment EnrichedData CompanyInfo Industries Description: ' + industry.getDescription());
                                    }
                                }

                                const experiences: ZOHOCRMSDK.ZiaPeopleEnrichment.Experience[] = companyInfo.getExperiences();
                                if (experiences != null) {
                                    for (const experience of experiences) {
                                        console.log('ZiaPeopleEnrichment EnrichedData CompanyInfo Experience EndDate: ' + experience.getEndDate());
                                        console.log('ZiaPeopleEnrichment EnrichedData CompanyInfo Experience CompanyName: ' + experience.getCompanyName());
                                        console.log('ZiaPeopleEnrichment EnrichedData CompanyInfo Experience Title: ' + experience.getTitle());
                                        console.log('ZiaPeopleEnrichment EnrichedData CompanyInfo Experience StartDate: ' + experience.getStartDate());
                                        console.log('ZiaPeopleEnrichment EnrichedData CompanyInfo Experience Primary: ' + experience.getPrimary());
                                    }
                                }
                            }

                            console.log('ZiaPeopleEnrichment EnrichedData LastName: ' + enrichedData.getLastName());

                            const educations: any[] = enrichedData.getEducations();
                            if (educations != null) {
                                console.log('ZiaPeopleEnrichment EnrichedData Educations: ');
                                console.log(educations);
                            }

                            console.log('ZiaPeopleEnrichment EnrichedData MiddleName: ' + enrichedData.getMiddleName());

                            const skills: any[] = enrichedData.getSkills();
                            if (skills != null) {
                                console.log('ZiaPeopleEnrichment EnrichedData Skills: ');
                                console.log(skills);
                            }

                            const otherContacts: string[] = enrichedData.getOtherContacts();
                            if (otherContacts != null) {
                                for (const otherContact of otherContacts) {
                                    console.log('ZiaPeopleEnrichment EnrichedData OtherContacts: ' + otherContact);
                                }
                            }

                            const addressListInfo: ZOHOCRMSDK.ZiaPeopleEnrichment.Address[] = enrichedData.getAddressListInfo();
                            if (addressListInfo != null) {
                                for (const address of addressListInfo) {
                                    console.log('ZiaPeopleEnrichment EnrichedData AddressListInfo Continent: ' + address.getContinent());
                                    console.log('ZiaPeopleEnrichment EnrichedData AddressListInfo Country: ' + address.getCountry());
                                    console.log('ZiaPeopleEnrichment EnrichedData AddressListInfo Name: ' + address.getName());
                                    console.log('ZiaPeopleEnrichment EnrichedData AddressListInfo Region: ' + address.getRegion());
                                    console.log('ZiaPeopleEnrichment EnrichedData AddressListInfo Primary: ' + address.getPrimary());
                                }
                            }

                            const primaryAddressInfo: ZOHOCRMSDK.ZiaPeopleEnrichment.Address = enrichedData.getPrimaryAddressInfo();
                            if (primaryAddressInfo != null) {
                                console.log('ZiaPeopleEnrichment EnrichedData PrimaryAddressInfo Continent: ' + primaryAddressInfo.getContinent());
                                console.log('ZiaPeopleEnrichment EnrichedData PrimaryAddressInfo Country: ' + primaryAddressInfo.getCountry());
                                console.log('ZiaPeopleEnrichment EnrichedData PrimaryAddressInfo Name: ' + primaryAddressInfo.getName());
                                console.log('ZiaPeopleEnrichment EnrichedData PrimaryAddressInfo Region: ' + primaryAddressInfo.getRegion());
                                console.log('ZiaPeopleEnrichment EnrichedData PrimaryAddressInfo Primary: ' + primaryAddressInfo.getPrimary());
                            }

                            console.log('ZiaPeopleEnrichment EnrichedData Name: ' + enrichedData.getName());
                            console.log('ZiaPeopleEnrichment EnrichedData SecondaryContact: ' + enrichedData.getSecondaryContact());
                            console.log('ZiaPeopleEnrichment EnrichedData PrimaryEmail: ' + enrichedData.getPrimaryEmail());
                            console.log('ZiaPeopleEnrichment EnrichedData Designation: ' + enrichedData.getDesignation());
                            console.log('ZiaPeopleEnrichment EnrichedData Id: ' + enrichedData.getId());

                            const interests: any[] = enrichedData.getInterests();
                            if (interests != null) {
                                console.log('ZiaPeopleEnrichment EnrichedData Interests: ');
                                console.log(interests);
                            }

                            console.log('ZiaPeopleEnrichment EnrichedData FirstName: ' + enrichedData.getFirstName());
                            console.log('ZiaPeopleEnrichment EnrichedData PrimaryContact: ' + enrichedData.getPrimaryContact());

                            const socialMedia: ZOHOCRMSDK.ZiaPeopleEnrichment.SocialMedia[] = enrichedData.getSocialMedia();
                            if (socialMedia != null) {
                                for (const socialMediaItem of socialMedia) {
                                    console.log('ZiaPeopleEnrichment EnrichedData SocialMedia MediaType: ' + socialMediaItem.getMediaType());
                                    const mediaUrl: string[] = socialMediaItem.getMediaUrl();
                                    if (mediaUrl != null) {
                                        for (const mediaUrlItem of mediaUrl) {
                                            console.log('ZiaPeopleEnrichment EnrichedData SocialMedia MediaUrl: ' + mediaUrlItem);
                                        }
                                    }
                                }
                            }
                        }

                        const enrichBasedOn: ZOHOCRMSDK.ZiaPeopleEnrichment.EnrichBasedOn = ziapeopleenrichment1.getEnrichBasedOn();
                        if (enrichBasedOn != null) {
                            const social: ZOHOCRMSDK.ZiaPeopleEnrichment.Social = enrichBasedOn.getSocial();
                            if (social != null) {
                                console.log('ZiaPeopleEnrichment EnrichBasedOn Social Facebook: ' + social.getFacebook());
                                console.log('ZiaPeopleEnrichment EnrichBasedOn Social Linkedin: ' + social.getLinkedin());
                                console.log('ZiaPeopleEnrichment EnrichBasedOn Social Twitter: ' + social.getTwitter());
                            }

                            console.log('ZiaPeopleEnrichment EnrichBasedOn Name: ' + enrichBasedOn.getName());

                            const company: ZOHOCRMSDK.ZiaPeopleEnrichment.Company = enrichBasedOn.getCompany();
                            if (company != null) {
                                console.log('ZiaPeopleEnrichment EnrichBasedOn Company Website: ' + company.getWebsite());
                                console.log('ZiaPeopleEnrichment EnrichBasedOn Company Name: ' + company.getName());
                            }

                            console.log('ZiaPeopleEnrichment EnrichBasedOn Email: ' + enrichBasedOn.getEmail());
                        }

                        console.log('ZiaPeopleEnrichment Id: ' + ziapeopleenrichment1.getId());
                        console.log('ZiaPeopleEnrichment Status: ' + ziapeopleenrichment1.getStatus());
                    }
                }
            } else if (responseHandler instanceof ZOHOCRMSDK.ZiaPeopleEnrichment.APIException) {
                const exception: ZOHOCRMSDK.ZiaPeopleEnrichment.APIException = responseHandler;
                console.log('Status: ' + exception.getStatus().getValue());
                console.log('Code: ' + exception.getCode().getValue());
                console.log('Details: ');
                for (const [key, value] of Object.entries(exception.getDetails())) {
                    console.log(`${key}: ${value}`);
                }
                console.log('Message: ' + exception.getMessage());
            }
        }
    }
    static async initializeAndCall()
    {
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
        await GetZiaPeopleEnrichment.getZiaPeopleEnrichment(BigInt("727225563001"));
    }
}

GetZiaPeopleEnrichment.initializeAndCall()
