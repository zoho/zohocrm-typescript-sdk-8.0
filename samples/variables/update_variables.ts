import * as ZOHOCRMSDK from "@zohocrm/typescript-sdk-8.0";

class UpdateVariables {
    static async updateVariables(): Promise<void> {
        const variablesOperations = new ZOHOCRMSDK.Variables.VariablesOperations();
        
        // Create request body
        const bodyWrapper = new ZOHOCRMSDK.Variables.BodyWrapper();
        const variables: ZOHOCRMSDK.Variables.Variable[] = [];
        
        // Update first variable
        const variable1 = new ZOHOCRMSDK.Variables.Variable();
        variable1.setId(BigInt("1055806000028697004"));  // Replace with actual variable ID
        variable1.setName("Updated Variable Name");
        variable1.setValue("Updated Value");
        variable1.setDescription("Updated description for the variable");
        
        variables.push(variable1);
        
        // Update second variable
        const variable2 = new ZOHOCRMSDK.Variables.Variable();
        variable2.setId(BigInt("1055806000028697007"));  // Replace with actual variable ID
        variable2.setName("Another Updated Variable");
        variable2.setValue("Another Updated Value");
        variable2.setDescription("Another updated description");
        
        variables.push(variable2);
        
        bodyWrapper.setVariables(variables);
        
        const response = await variablesOperations.updateVariables(bodyWrapper);
        
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
        await UpdateVariables.updateVariables();
    }
}

UpdateVariables.initializeAndCall();