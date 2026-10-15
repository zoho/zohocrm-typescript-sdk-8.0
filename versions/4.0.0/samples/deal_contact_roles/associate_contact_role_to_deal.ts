import * as ZOHOCRMSDK from "@zohocrm/typescript-sdk-8.0"

class AssociateContactRoleToDeal {
    static async associateContactRoleToDeal(): Promise<void> {
        const contactId = BigInt("1055806000028594016");
        const dealId = BigInt("1055806000028564012");
        
        const dealContactRolesOperations = new ZOHOCRMSDK.DealContactRoles.DealContactRolesOperations();
        
        const request = new ZOHOCRMSDK.DealContactRoles.BodyWrapper();
        let data = [];
        let data1 = new ZOHOCRMSDK.DealContactRoles.Data();
        const contactRole = new ZOHOCRMSDK.DealContactRoles.ContactRole();
		contactRole.setName("Decision Maker");
		data1.setContactRole(contactRole);
		data.push(data1);
        request.setData(data);
        
        const response = await dealContactRolesOperations.associateContactRoleToDeal(contactId, dealId, request);
        
        if (response !== null) {
            console.log("Status Code: " + response.getStatusCode());
            
            const actionHandler = response.getObject();
            
            if (actionHandler instanceof ZOHOCRMSDK.DealContactRoles.ActionWrapper) {
                const actionResponses = actionHandler.getData();
                if (actionResponses != null) {
                    for (let actionResponse of actionResponses) {
                        if (actionResponse instanceof ZOHOCRMSDK.DealContactRoles.SuccessResponse) {
                            const successResponse = actionResponse;
                            console.log("Status: " + successResponse.getStatus().getValue());
                            console.log("Code: " + successResponse.getCode().getValue());
                            
                            const details = successResponse.getDetails();
                            if (details !== null) {
                                console.log("Details: ");
                                Array.from(details.keys()).forEach(key => {
                                    console.log(key + ": " + details.get(key));
                                });
                            }
                            
                            console.log("Message: " + successResponse.getMessage());
                        }
                        else if (actionResponse instanceof ZOHOCRMSDK.DealContactRoles.APIException) {
                            const exception = actionResponse;
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
            }
            else if (actionHandler instanceof ZOHOCRMSDK.DealContactRoles.APIException) {
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
        await AssociateContactRoleToDeal.associateContactRoleToDeal();
    }
}

AssociateContactRoleToDeal.initializeAndCall();