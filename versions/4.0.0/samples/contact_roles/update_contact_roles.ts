import * as ZOHOCRMSDK from "@zohocrm/typescript-sdk-8.0"

class UpdateContactRoles {
    static async updateContactRoles(): Promise<void> {
        const contactRolesOperations = new ZOHOCRMSDK.ContactRoles.ContactRolesOperations();
        
        const bodyWrapper = new ZOHOCRMSDK.ContactRoles.BodyWrapper();
        const contactRoles = [];
        
        const contactRole1 = new ZOHOCRMSDK.ContactRoles.ContactRole();
        contactRole1.setId(BigInt("1055806000028662002"));
        contactRole1.setName("Updated Decision Maker");
        contactRole1.setSequenceNumber(1);
        contactRoles.push(contactRole1);
        
        const contactRole2 = new ZOHOCRMSDK.ContactRoles.ContactRole();
        contactRole2.setId(BigInt("1055806000000993004"));
        contactRole2.setName("Updated Evaluator");
        contactRole2.setSequenceNumber(2);
        contactRoles.push(contactRole2);
        
        bodyWrapper.setContactRoles(contactRoles);
        
        const response = await contactRolesOperations.updateRoles(bodyWrapper);
        
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
                            console.log("Details: " + actionResponse.getDetails());
                            console.log("Message: " + actionResponse.getMessage().getValue());
                        }
                        else if (actionResponse instanceof ZOHOCRMSDK.ContactRoles.APIException) {
                            console.log("Status: " + actionResponse.getStatus().getValue());
                            console.log("Code: " + actionResponse.getCode().getValue());
                            console.log("Details: " + actionResponse.getDetails());
                            console.log("Message: " + actionResponse.getMessage().getValue());
                        }
                    }
                }
            }
            else if (actionWrapper instanceof ZOHOCRMSDK.ContactRoles.APIException) {
                const exception = actionWrapper;
                console.log("Status: " + exception.getStatus().getValue());
                console.log("Code: " + exception.getCode().getValue());
                console.log("Details: " + exception.getDetails());
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
        await UpdateContactRoles.updateContactRoles();
    }
}

UpdateContactRoles.initializeAndCall();