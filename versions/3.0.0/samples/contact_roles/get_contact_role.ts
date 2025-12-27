import * as ZOHOCRMSDK from "@zohocrm/typescript-sdk-8.0"

class GetContactRole {
    static async getContactRole(roleId: bigint): Promise<void> {
        const contactRolesOperations = new ZOHOCRMSDK.ContactRoles.ContactRolesOperations();
        
        const response = await contactRolesOperations.getRole(roleId);
        
        if (response !== null) {
            console.log("Status Code: " + response.getStatusCode());
            
            if ([204, 304].includes(response.getStatusCode())) {
                console.log(response.getStatusCode() === 204 ? "No Content" : "Not Modified");
                return;
            }

            const responseWrapper = response.getObject();
            
            if (responseWrapper instanceof ZOHOCRMSDK.ContactRoles.ResponseWrapper) {
                const contactRoles = responseWrapper.getContactRoles();
                if (contactRoles != null) {
                    for (let contactRole of contactRoles) {
                        console.log("ContactRole ID: " + contactRole.getId());
                        console.log("ContactRole Name: " + contactRole.getName());
                        console.log("ContactRole Sequence Number: " + contactRole.getSequenceNumber());
                    }
                }
            }
            else if (responseWrapper instanceof ZOHOCRMSDK.ContactRoles.APIException) {
                const exception = responseWrapper;
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
        let roleId = BigInt("1055806000028662002");
        await GetContactRole.getContactRole(roleId);
    }
}

GetContactRole.initializeAndCall();