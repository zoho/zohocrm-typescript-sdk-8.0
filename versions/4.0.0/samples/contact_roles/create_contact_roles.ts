import * as ZOHOCRMSDK from "@zohocrm/typescript-sdk-8.0"

class CreateContactRoles {
    static async createContactRoles(): Promise<void> {
        const contactRolesOperations = new ZOHOCRMSDK.ContactRoles.ContactRolesOperations();
        
        const bodyWrapper = new ZOHOCRMSDK.ContactRoles.BodyWrapper();
        const contactRoles = [];
        
        const contactRole1 = new ZOHOCRMSDK.ContactRoles.ContactRole();
        contactRole1.setName("Decision Maker22");
        contactRole1.setSequenceNumber(1);
        contactRoles.push(contactRole1);
        
        const contactRole2 = new ZOHOCRMSDK.ContactRoles.ContactRole();
        contactRole2.setName("Evaluator22");
        contactRole2.setSequenceNumber(2);
        contactRoles.push(contactRole2);
        
        bodyWrapper.setContactRoles(contactRoles);
        
        const response = await contactRolesOperations.createRoles(bodyWrapper);
        
        if (response !== null) {
            console.log("Status Code: " + response.getStatusCode());
            
            const actionWrapper = response.getObject();
            
            if (actionWrapper instanceof ZOHOCRMSDK.ContactRoles.ActionWrapper) {
                const actionResponses = actionWrapper.getContactRoles();
                if (actionResponses != null) {
                    for (let actionResponse of actionResponses) {
                        if (actionResponse instanceof ZOHOCRMSDK.ContactRoles.SuccessResponse) {
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
                        else if (actionResponse instanceof ZOHOCRMSDK.ContactRoles.APIException) {
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
            else if (actionWrapper instanceof ZOHOCRMSDK.ContactRoles.APIException) {
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
        await CreateContactRoles.createContactRoles();
    }
}

CreateContactRoles.initializeAndCall();