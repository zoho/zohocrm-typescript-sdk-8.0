import * as ZOHOCRMSDK from "@zohocrm/typescript-sdk-8.0";

class DeleteVariable {
    static async deleteVariable(): Promise<void> {
        const variablesOperations = new ZOHOCRMSDK.Variables.VariablesOperations();
        
        const variableId = "1055806000028694010";  // Replace with actual variable ID
        
        const response = await variablesOperations.deleteVariable(BigInt(variableId));
        
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
        await DeleteVariable.deleteVariable();
    }
}

DeleteVariable.initializeAndCall();