import * as ZOHOCRMSDK from "@zohocrm/typescript-sdk-8.0"

class GetOrganization {
    static async getOrganization(): Promise<void> {
        const orgOperations = new ZOHOCRMSDK.Org.OrgOperations();
        
        const response = await orgOperations.getOrganization();
        
        if (response !== null) {
            console.log("Status Code: " + response.getStatusCode());
            
            if ([204, 304].includes(response.getStatusCode())) {
                console.log(response.getStatusCode() === 204 ? "No Content" : "Not Modified");
                return;
            }

            const responseHandler = response.getObject();
            
            if (responseHandler instanceof ZOHOCRMSDK.Org.ResponseWrapper) {
                const organizations = responseHandler.getOrg();
                if (organizations != null) {
                    for (let organization of organizations) {
                        console.log("Organization ID: " + organization.getId());
                        console.log("Organization Company Name: " + organization.getCompanyName());
                        console.log("Organization Alias: " + organization.getAlias());
                        console.log("Organization Primary Email: " + organization.getPrimaryEmail());
                        console.log("Organization Website: " + organization.getWebsite());
                        console.log("Organization Mobile: " + organization.getMobile());
                        console.log("Organization Phone: " + organization.getPhone());
                        console.log("Organization Employee Count: " + organization.getEmployeeCount());
                        console.log("Organization Description: " + organization.getDescription());
                        console.log("Organization Time Zone: " + organization.getTimeZone());
                        console.log("Organization ISO Code: " + organization.getIsoCode());
                        
                        const currency = organization.getCurrency();
                        if (currency != null) {
                            console.log("Organization Currency: " + currency);
                        }
                        
                        const street = organization.getStreet();
                        if (street != null) {
                            console.log("Organization Street: " + street);
                        }
                        
                        const city = organization.getCity();
                        if (city != null) {
                            console.log("Organization City: " + city);
                        }
                        
                        const state = organization.getState();
                        if (state != null) {
                            console.log("Organization State: " + state);
                        }
                        
                        const country = organization.getCountry();
                        if (country != null) {
                            console.log("Organization Country: " + country);
                        }
                        
                        const countryCode = organization.getCountryCode();
                        if (countryCode != null) {
                            console.log("Organization Country Code: " + countryCode);
                        }
                        
                        const fax = organization.getFax();
                        if (fax != null) {
                            console.log("Organization Fax: " + fax);
                        }
                        
                        const mcStatus = organization.getMcStatus();
                        if (mcStatus != null) {
                            console.log("Organization MC Status: " + mcStatus);
                        }
                        
                        const gappsEnabled = organization.getGappsEnabled();
                        if (gappsEnabled != null) {
                            console.log("Organization GAPPS Enabled: " + gappsEnabled);
                        }
                        
                        console.log("--------------------");
                    }
                }
            }
            else if (responseHandler instanceof ZOHOCRMSDK.Org.APIException) {
                const exception = responseHandler;
                console.log("Status: " + exception.getStatus().getValue());
                console.log("Code: " + exception.getCode().getValue());
                
                const details = exception.getDetails();
                if (details !== null) {
                    console.log("Details: ");
                    Array.from(details.keys()).forEach(key => {
                        console.log(key + ": " + details.get(key));
                    });
                }
                
                console.log("Message: " + exception.getMessage());
            }
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
        await GetOrganization.getOrganization();
    }
}

GetOrganization.initializeAndCall();