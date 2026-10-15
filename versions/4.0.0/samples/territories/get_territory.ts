import * as ZOHOCRMSDK from "@zohocrm/typescript-sdk-8.0"

class GetTerritory {
    static async getTerritory(): Promise<void> {
        const territoryId = BigInt("1055806000003051357"); // Replace with actual territory ID
        const territoriesOperations = new ZOHOCRMSDK.Territories.TerritoriesOperations();
        
        const response = await territoriesOperations.getTerritory(territoryId);
        
        if (response !== null) {
            console.log("Status Code: " + response.getStatusCode());
            
            if ([204, 304].includes(response.getStatusCode())) {
                console.log(response.getStatusCode() === 204 ? "No Content" : "Not Modified");
                return;
            }

            const responseHandler = response.getObject();
            
            if (responseHandler instanceof ZOHOCRMSDK.Territories.ResponseWrapper) {
                const territories = responseHandler.getTerritories();
                
                if (territories != null && territories.length > 0) {
                    console.log("=== Territory Details ===");
                    const territory = territories[0];
                    
                    console.log("\n--- Basic Information ---");
                    console.log("Territory ID: " + territory.getId());
                    console.log("Territory Name: " + territory.getName());
                    console.log("Territory Description: " + territory.getDescription());
                    
                    console.log("\n--- Management Information ---");
                    const manager = territory.getManager();
                    if (manager !== null && manager !== undefined) {
                        console.log("Manager ID: " + manager.getId());
                        console.log("Manager Name: " + manager.getName());
                    }
                    
                    console.log("\n--- Creation & Modification Info ---");
                    const createdBy = territory.getCreatedBy();
                    if (createdBy !== null && createdBy !== undefined) {
                        console.log("Created By ID: " + createdBy.getId());
                        console.log("Created By Name: " + createdBy.getName());
                    }
                    
                    const modifiedBy = territory.getModifiedBy();
                    if (modifiedBy !== null && modifiedBy !== undefined) {
                        console.log("Modified By ID: " + modifiedBy.getId());
                        console.log("Modified By Name: " + modifiedBy.getName());
                    }
                    
                    console.log("Created Time: " + territory.getCreatedTime());
                    console.log("Modified Time: " + territory.getModifiedTime());
                    
                    console.log("\n--- Additional Properties ---");
                    console.log("Reporting To: " + territory.getReportingTo());
                    console.log("Permission Type: " + territory.getPermissionType().getValue());
                }
            }
            else if (responseHandler instanceof ZOHOCRMSDK.Territories.APIException) {
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
        await GetTerritory.getTerritory();
    }
}

GetTerritory.initializeAndCall();