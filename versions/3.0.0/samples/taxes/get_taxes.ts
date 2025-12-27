import * as ZOHOCRMSDK from "@zohocrm/typescript-sdk-8.0"

class GetTaxes {
    static async getTaxes(): Promise<void> {
        const taxesOperations = new ZOHOCRMSDK.Taxes.TaxesOperations();
        const response = await taxesOperations.getTaxes();
        
        if (response !== null) {
            console.log("Status Code: " + response.getStatusCode());
            
            if ([204, 304].includes(response.getStatusCode())) {
                console.log(response.getStatusCode() === 204 ? "No Content" : "Not Modified");
                return;
            }

            const responseHandler = response.getObject();
            
            if (responseHandler instanceof ZOHOCRMSDK.Taxes.ResponseWrapper) {
                let orgTax = responseHandler.getOrgTaxes();
                const taxes = orgTax.getTaxes();
                
                if (taxes != null && taxes.length > 0) {
                    console.log("=== Organization Taxes Details ===");
                    for (let tax of taxes) {
                        console.log("Tax ID: " + tax.getId());
                        console.log("Tax Name: " + tax.getName());
                        console.log("Tax Display Label: " + tax.getDisplayLabel());
                        console.log("Tax Value: " + tax.getValue() + "%");
                    }
                    
                    console.log(`\nTotal taxes found: ${taxes.length}`);
                }
                let preference = orgTax.getPreference();
                if (preference != null){
                    console.log("Preference AutoPopulateTax: " + preference.getAutoPopulateTax().toString());
                    if (preference.getModifyTaxRates() != null)
                    {
                        console.log("Preference ModifyTaxRates: " + preference.getModifyTaxRates().toString());
                    }
                }
            }
            else if (responseHandler instanceof ZOHOCRMSDK.Taxes.APIException) {
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
                
                console.log("Message: " + exception.getMessage().getValue());
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
        await GetTaxes.getTaxes();
    }
}

GetTaxes.initializeAndCall();