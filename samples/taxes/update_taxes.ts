import * as ZOHOCRMSDK from "@zohocrm/typescript-sdk-8.0"

class UpdateTaxes {
    static async updateTaxes(): Promise<void> {
        const taxesOperations = new ZOHOCRMSDK.Taxes.TaxesOperations();
        
        // Create BodyWrapper instance
        const bodyWrapper = new ZOHOCRMSDK.Taxes.BodyWrapper();

        let orgTax = new ZOHOCRMSDK.Taxes.OrgTax();
        const taxArray: ZOHOCRMSDK.Taxes.Tax[] = [];
        
        // Update first existing tax
        const tax1 = new ZOHOCRMSDK.Taxes.Tax();
        tax1.setId(BigInt("1055806000023782001")); // Replace with actual tax ID
        tax1.setName("Updated GST Tax");
        tax1.setDisplayLabel("Updated GST (18%)");
        tax1.setValue(18.0); // Tax percentage
        taxArray.push(tax1);
        orgTax.setTaxes(taxArray);
        
        bodyWrapper.setOrgTaxes(orgTax);
        
        const response = await taxesOperations.updateTaxes(bodyWrapper);
        
        if (response !== null) {
            console.log("Status Code: " + response.getStatusCode());

            const actionHandler = response.getObject();
            
            if (actionHandler instanceof ZOHOCRMSDK.Taxes.ActionWrapper) {
                const actionWrapper = actionHandler;
                const actionResponse = actionWrapper.getOrgTaxes();
                if (actionResponse instanceof ZOHOCRMSDK.Taxes.SuccessResponse) {
                    const successResponse = actionResponse;
                    console.log("Status: " + successResponse.getStatus().getValue());
                    console.log("Code: " + successResponse.getCode().getValue());
                    console.log("Details: " + JSON.stringify(successResponse.getDetails()));
                    console.log("Message: " + successResponse.getMessage().getValue());
                }
                else if (actionResponse instanceof ZOHOCRMSDK.Taxes.APIException) {
                    const exception = actionResponse;
                    console.log("Status: " + exception.getStatus().getValue());
                    console.log("Code: " + exception.getCode().getValue());
                    console.log("Details: " + JSON.stringify(exception.getDetails()));
                    console.log("Message: " + exception.getMessage().getValue());
                }
            }
            else if (actionHandler instanceof ZOHOCRMSDK.Taxes.APIException) {
                const exception = actionHandler;
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
        await UpdateTaxes.updateTaxes();
    }
}

UpdateTaxes.initializeAndCall();