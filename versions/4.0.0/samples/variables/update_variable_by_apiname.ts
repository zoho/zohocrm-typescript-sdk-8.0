import * as ZOHOCRMSDK from "@zohocrm/typescript-sdk-8.0";

class UpdateVariableByApiname {
    static async updateVariableByApiname(): Promise<void> {
        const variablesOperations = new ZOHOCRMSDK.Variables.VariablesOperations();
        
        const apiName = "test_variable_1";  // Replace with actual variable API name
        
        // Create request body
        const bodyWrapper = new ZOHOCRMSDK.Variables.BodyWrapper();
        const variables: ZOHOCRMSDK.Variables.Variable[] = [];
        
        // Update variable
        const variable = new ZOHOCRMSDK.Variables.Variable();
        variable.setName("Updated Variable by API Name");
        variable.setValue("Updated Value by API Name");
        variable.setDescription("Variable updated using API Name");
        
        variables.push(variable);
        bodyWrapper.setVariables(variables);
        
        // Optional: Add group parameter
        const parameterMap = new ZOHOCRMSDK.ParameterMap();
        await parameterMap.add(ZOHOCRMSDK.Variables.UpdateVariableByAPINameParam.GROUP, "General");
        
        const response = await variablesOperations.updateVariableByApiname(apiName, bodyWrapper, parameterMap);
        
        if (response !== null) {
            console.log("Status Code: " + response.getStatusCode());

            const responseHandler = response.getObject();
            
            if (responseHandler instanceof ZOHOCRMSDK.Variables.ActionWrapper) {
                const actionResponses = responseHandler.getVariables();
                
                for (let actionResponse of actionResponses) {
                    if (actionResponse instanceof ZOHOCRMSDK.Variables.SuccessResponse) {
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
                    else if (actionResponse instanceof ZOHOCRMSDK.Variables.APIException) {
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
        await UpdateVariableByApiname.updateVariableByApiname();
    }
}

UpdateVariableByApiname.initializeAndCall();