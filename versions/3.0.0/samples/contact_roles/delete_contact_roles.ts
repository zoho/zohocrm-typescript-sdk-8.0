import * as ZOHOCRMSDK from "@zohocrm/typescript-sdk-8.0"

class DeleteContactRoles {
    static async deleteContactRoles(): Promise<void> {
        const contactRolesOperations = new ZOHOCRMSDK.ContactRoles.ContactRolesOperations();
        
        const paramInstance = new ZOHOCRMSDK.ParameterMap();
        await paramInstance.add(ZOHOCRMSDK.ContactRoles.DeleteContactRolesParam.IDS, "1055806000028662006,1055806000000993004");
        
        const response = await contactRolesOperations.deleteContactRoles(paramInstance);
        
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
                            console.log("Message: " + actionResponse.getMessage());
                        }
                        else if (actionResponse instanceof ZOHOCRMSDK.ContactRoles.APIException) {
                            console.log("Status: " + actionResponse.getStatus().getValue());
                            console.log("Code: " + actionResponse.getCode().getValue());
                            console.log("Details: " + actionResponse.getDetails());
                            console.log("Message: " + actionResponse.getMessage());
                        }
                    }
                }
            }
            else if (actionWrapper instanceof ZOHOCRMSDK.ContactRoles.APIException) {
                const exception = actionWrapper;
                console.log("Status: " + exception.getStatus().getValue());
                console.log("Code: " + exception.getCode().getValue());
                console.log("Details: " + exception.getDetails());
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
        await DeleteContactRoles.deleteContactRoles();
    }
}

DeleteContactRoles.initializeAndCall();