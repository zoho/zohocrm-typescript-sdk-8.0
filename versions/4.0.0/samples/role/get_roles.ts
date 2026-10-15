import * as ZOHOCRMSDK from "@zohocrm/typescript-sdk-8.0"

class GetRoles {
    static async getRoles(): Promise<void> {
        const rolesOperations = new ZOHOCRMSDK.Roles.RolesOperations();
        const response = await rolesOperations.getRoles();
        if (response !== null) {
            console.log("Status Code: " + response.getStatusCode());
            
            if ([204, 304].includes(response.getStatusCode())) {
                console.log(response.getStatusCode() === 204 ? "No Content" : "Not Modified");
                return;
            }

            const responseHandler = response.getObject();
            
            if (responseHandler instanceof ZOHOCRMSDK.Roles.ResponseWrapper) {
                const roles = responseHandler.getRoles();
                
                if (roles != null) {
                    for (let role of roles) {
                        console.log("Role ID: " + role.getId());
                        console.log("Role Name: " + role.getName());
                        console.log("Role Display Label: " + role.getDisplayLabel());
                        console.log("Role Description: " + role.getDescription());
                        console.log("Role Share With Peers: " + role.getShareWithPeers());
                        console.log("Role Admin User: " + role.getAdminUser());
                        
                        const forecastManager = role.getForecastManager();
                        if (forecastManager !== null && forecastManager !== undefined) {
                            console.log("Forecast Manager ID: " + forecastManager.getId());
                            console.log("Forecast Manager Name: " + forecastManager.getName());
                        }
                        
                        const reportingTo = role.getReportingTo();
                        if (reportingTo !== null && reportingTo !== undefined) {
                            console.log("Reporting To ID: " + reportingTo.getId());
                            console.log("Reporting To Name: " + reportingTo.getName());
                        }
                        
                        console.log("--------------------");
                    }
                }
            }
            else if (responseHandler instanceof ZOHOCRMSDK.Roles.APIException) {
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
        await GetRoles.getRoles();
    }
}

GetRoles.initializeAndCall();