import * as ZOHOCRMSDK from "@zohocrm/typescript-sdk-8.0"

class GetTerritories {
    static async getTerritories(): Promise<void> {
        const territoriesOperations = new ZOHOCRMSDK.Territories.TerritoriesOperations();
        
        // Create ParameterMap for optional query parameters
        const paramInstance = new ZOHOCRMSDK.ParameterMap();
        await paramInstance.add(ZOHOCRMSDK.Territories.GetTerritoriesParam.PAGE, 1);
        await paramInstance.add(ZOHOCRMSDK.Territories.GetTerritoriesParam.PER_PAGE, 20);
        
        const response = await territoriesOperations.getTerritories(paramInstance);
        
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
                    console.log("=== Territories Details ===");
                    for (let territory of territories) {
                        console.log("Territory ID: " + territory.getId());
                        console.log("Territory Name: " + territory.getName());
                        console.log("Territory Description: " + territory.getDescription());
                        
                        const manager = territory.getManager();
                        if (manager !== null && manager !== undefined) {
                            console.log("Manager ID: " + manager.getId());
                            console.log("Manager Name: " + manager.getName());
                        }
                        
                        const createdBy = territory.getCreatedBy();
                        if (createdBy !== null && createdBy !== undefined) {
                            console.log("Created By: " + createdBy.getName());
                        }
                        
                        console.log("Created Time: " + territory.getCreatedTime());
                        console.log("Modified Time: " + territory.getModifiedTime());
                        console.log("--------------------");
                    }
                    
                    console.log(`\nTotal territories found: ${territories.length}`);
                }
                
                const info = responseHandler.getInfo();
                if (info !== null) {
                    console.log("\n=== Pagination Info ===");
                    console.log("Page: " + info.getPage());
                    console.log("Per Page: " + info.getPerPage());
                    console.log("Count: " + info.getCount());
                    console.log("More Records: " + info.getMoreRecords());
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
        await GetTerritories.getTerritories();
    }
}

GetTerritories.initializeAndCall();