import * as ZOHOCRMSDK from "@zohocrm/typescript-sdk-8.0";

class CreateVariables {
    static async createVariables(): Promise<void> {
        const variablesOperations = new ZOHOCRMSDK.Variables.VariablesOperations();
        
        // Create request body
        const bodyWrapper = new ZOHOCRMSDK.Variables.BodyWrapper();
        const variables: ZOHOCRMSDK.Variables.Variable[] = [];
        
        // Create first variable
        const variable1 = new ZOHOCRMSDK.Variables.Variable();
        variable1.setName("Test Variable 1");
        variable1.setAPIName("test_variable_1");
        variable1.setType(new ZOHOCRMSDK.Choice("text"));
        variable1.setValue("Sample Value 1");
        variable1.setDescription("This is a test variable");
        
        // Set variable group
        const variableGroup1 = new ZOHOCRMSDK.Variables.VariableGroup();
        variableGroup1.setId(BigInt("1055806000003089001"));  // Replace with actual variable group ID
        variable1.setVariableGroup(variableGroup1);
        
        variables.push(variable1);
        
        // Create second variable
        const variable2 = new ZOHOCRMSDK.Variables.Variable();
        variable2.setName("Test Variable 2");
        variable2.setAPIName("test_variable_2");
        variable2.setType(new ZOHOCRMSDK.Choice("integer"));
        variable2.setValue("100");
        variable2.setDescription("This is another test variable");
        
        // Set variable group
        const variableGroup2 = new ZOHOCRMSDK.Variables.VariableGroup();
        variableGroup2.setId(BigInt("1055806000023802014"));  // Replace with actual variable group ID
        variable2.setVariableGroup(variableGroup2);
        
        variables.push(variable2);
        
        bodyWrapper.setVariables(variables);
        
        const response = await variablesOperations.createVariables(bodyWrapper);
        
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
        await CreateVariables.createVariables();
    }
}

CreateVariables.initializeAndCall();