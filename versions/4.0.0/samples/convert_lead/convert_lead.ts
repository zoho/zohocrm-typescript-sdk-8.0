import * as ZOHOCRMSDK from "@zohocrm/typescript-sdk-8.0"

class ConvertLead {
    static async convertLead(): Promise<void> {
        const leadId = BigInt("1055806000028638063"); // Replace with actual lead ID
        const convertLeadOperations = new ZOHOCRMSDK.ConvertLead.ConvertLeadOperations(leadId);
        
        const bodyWrapper = new ZOHOCRMSDK.ConvertLead.BodyWrapper();
        const conversionOptions = [];
        
        const conversionOption = new ZOHOCRMSDK.ConvertLead.LeadConverter();
        
        // Set Accounts details
        const account = new ZOHOCRMSDK.Record.Record();
        account.setId(BigInt("34770615848125"));
        conversionOption.setAccounts(account);
        
        // // Set Contacts details
        const contact = new ZOHOCRMSDK.Record.Record();
        contact.setId(BigInt("34770615848125"));
        conversionOption.setContacts(contact);
        
        // Set Deals details (optional)
        const deal = new ZOHOCRMSDK.Record.Record();
        deal.addKeyValue("Deal_Name", "Converted Deal");
        deal.addKeyValue("Stage", new ZOHOCRMSDK.Choice("Qualification"));
        deal.addKeyValue("Amount", 10000.0);
        deal.addKeyValue("Closing_Date", new Date("2024-12-31"));
        conversionOption.setDeals(deal);
        
        conversionOptions.push(conversionOption);
        bodyWrapper.setData(conversionOptions);
        
        const response = await convertLeadOperations.convertLead(bodyWrapper);
        
        if (response !== null) {
            console.log("Status Code: " + response.getStatusCode());
            
            const actionWrapper = response.getObject();
            
            if (actionWrapper instanceof ZOHOCRMSDK.ConvertLead.ActionWrapper) {
                const actionResponses = actionWrapper.getData();
                if (actionResponses != null) {
                    for (let actionResponse of actionResponses) {
                        if (actionResponse instanceof ZOHOCRMSDK.ConvertLead.SuccessResponse) {
                            console.log("Status: " + actionResponse.getStatus().getValue());
                            console.log("Code: " + actionResponse.getCode().getValue());
                            console.log("Message: " + actionResponse.getMessage().getValue());
                            console.log("Details: ");
                            let details: Map<string, any> = actionResponse.getDetails();
                            if (details !== null) {
                                Array.from(details.keys()).forEach(key => {
                                    console.log(key + ": " + details.get(key));
                                });
                            }
                        }
                        else if (actionResponse instanceof ZOHOCRMSDK.ConvertLead.APIException) {
                            console.log("Status: " + actionResponse.getStatus().getValue());
                            console.log("Code: " + actionResponse.getCode().getValue());
                            console.log("Message: " + actionResponse.getMessage().getValue());
                            console.log("Details: ");
                            let details: Map<string, any> = actionResponse.getDetails();
                            if (details !== null) {
                                Array.from(details.keys()).forEach(key => {
                                    console.log(key + ": " + details.get(key));
                                });
                            }
                        }
                    }
                }
            }
            else if (actionWrapper instanceof ZOHOCRMSDK.ConvertLead.APIException) {
                const exception = actionWrapper;
                console.log("Status: " + exception.getStatus().getValue());
                console.log("Code: " + exception.getCode().getValue());
                console.log("Details: ");
                for (let [key, value] of Object.entries(exception.getDetails())) {
                    console.log(`${key}: ${value}`);
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
        await ConvertLead.convertLead();
    }
}

ConvertLead.initializeAndCall();