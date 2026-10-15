import * as ZOHOCRMSDK from "@zohocrm/typescript-sdk-8.0"

class DeleteContactRole {
    static async deleteContactRole(roleId: bigint): Promise<void> {
        const contactRolesOperations = new ZOHOCRMSDK.ContactRoles.ContactRolesOperations();
        
        const response = await contactRolesOperations.deleteContactRole(roleId);
        
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
                let details: Map<string, any> = exception.getDetails();
                if (details !== null) {
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
        let roleId = BigInt("1055806000028662007");
        await DeleteContactRole.deleteContactRole(roleId);
    }
}

DeleteContactRole.initializeAndCall();