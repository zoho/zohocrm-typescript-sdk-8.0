import * as ZOHOCRMSDK from "@zohocrm/typescript-sdk-8.0";

class GetVariableGroupByAPIName {
    static async getVariableGroupByAPIName(): Promise<void> {
        const variableGroupAPIName = "General"; // Replace with actual variable group API name
        const variableGroupsOperations = new ZOHOCRMSDK.VariableGroups.VariableGroupsOperations();
        
        const response = await variableGroupsOperations.getVariableGroupByAPIName(variableGroupAPIName);
        
        if (response !== null) {
            console.log("Status Code: " + response.getStatusCode());
            
            if ([204, 304].includes(response.getStatusCode())) {
                console.log(response.getStatusCode() === 204 ? "No Content" : "Not Modified");
                return;
            }

            const responseHandler = response.getObject();
            
            if (responseHandler instanceof ZOHOCRMSDK.VariableGroups.ResponseWrapper) {
                const variableGroups = responseHandler.getVariableGroups();
                
                if (variableGroups != null && variableGroups.length > 0) {
                    for (let variableGroup of variableGroups) {
                        console.log("Variable Group ID: " + variableGroup.getId());
                        console.log("Variable Group Name: " + variableGroup.getName());
                        console.log("Variable Group API Name: " + variableGroup.getAPIName());
                        console.log("Variable Group Display Label: " + variableGroup.getDisplayLabel());
                        console.log("Variable Group Description: " + variableGroup.getDescription());
                        
                        console.log("--------------------");
                    }
                } else {
                    console.log("No variable groups found.");
                }
            }
            else if (responseHandler instanceof ZOHOCRMSDK.VariableGroups.APIException) {
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
                
                console.log("Message: " + exception.getMessage().getValue());
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
        await GetVariableGroupByAPIName.getVariableGroupByAPIName();
    }
}

GetVariableGroupByAPIName.initializeAndCall();