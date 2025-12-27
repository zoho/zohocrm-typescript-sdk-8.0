import * as ZOHOCRMSDK from "@zohocrm/typescript-sdk-8.0";

class GetVariables {
    static async getVariables(): Promise<void> {
        const variablesOperations = new ZOHOCRMSDK.Variables.VariablesOperations();
        
        // Optional: Add group parameter
        const parameterMap = new ZOHOCRMSDK.ParameterMap();
        // parameterMap.add(ZOHOCRMSDK.Variables.GetVariablesParam.GROUP, "General");
        
        const response = await variablesOperations.getVariables(parameterMap);
        
        if (response !== null) {
            console.log("Status Code: " + response.getStatusCode());
            
            if ([204, 304].includes(response.getStatusCode())) {
                console.log(response.getStatusCode() === 204 ? "No Content" : "Not Modified");
                return;
            }

            const responseHandler = response.getObject();
            
            if (responseHandler instanceof ZOHOCRMSDK.Variables.ResponseWrapper) {
                const variables = responseHandler.getVariables();
                
                if (variables != null && variables.length > 0) {
                    for (let variable of variables) {
                        console.log("Variable ID: " + variable.getId());
                        console.log("Variable Name: " + variable.getName());
                        console.log("Variable API Name: " + variable.getAPIName());
                        console.log("Variable Type: " + variable.getType().getValue());
                        console.log("Variable Value: " + variable.getValue());
                        
                        const variableGroup = variable.getVariableGroup();
                        if (variableGroup != null) {
                            console.log("Variable Group Name: " + variableGroup.getName());
                            console.log("Variable Group ID: " + variableGroup.getId());
                        }
                        
                        console.log("Variable Description: " + variable.getDescription());
                        console.log("--------------------");
                    }
                } else {
                    console.log("No variables found.");
                }
            }
            else if (responseHandler instanceof ZOHOCRMSDK.Variables.APIException) {
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
        await GetVariables.getVariables();
    }
}

GetVariables.initializeAndCall();