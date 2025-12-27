import * as ZOHOCRMSDK from "@zohocrm/typescript-sdk-8.0"

class GetBlueprint {
    static async getBlueprint(recordId: string, moduleAPIName: string): Promise<void> {
        const blueprintOperations = new ZOHOCRMSDK.Blueprint.BlueprintOperations(recordId, moduleAPIName);
        
        const response = await blueprintOperations.getBlueprint();
        
        if (response !== null) {
            console.log("Status Code: " + response.getStatusCode());
            
            if ([204, 304].includes(response.getStatusCode())) {
                console.log(response.getStatusCode() === 204 ? "No Content" : "Not Modified");
                return;
            }

            const responseHandler = response.getObject();
            
            if (responseHandler instanceof ZOHOCRMSDK.Blueprint.ResponseWrapper) {
                const responseWrapper = responseHandler;
                const blueprint = responseWrapper.getBlueprint();

                if (blueprint !== null && blueprint !== undefined) {
                    const processInfo = blueprint.getProcessInfo();
                    
                    if (processInfo !== null && processInfo !== undefined) {
                        console.log("ProcessInfo Field-ID: " + processInfo.getFieldId());
						let escalation = processInfo.getEscalation();
						if (escalation != null)
						{
							console.log("Escalation days: " + escalation.getDays());
							console.log("Escalation status: " + escalation.getStatus());
						}
						console.log("ProcessInfo isContinuous: " + processInfo.getIsContinuous());
						console.log("ProcessInfo API Name: " + processInfo.getAPIName());
						console.log("ProcessInfo Continuous: " + processInfo.getContinuous());
						console.log("ProcessInfo FieldLabel: " + processInfo.getFieldLabel());
						console.log("ProcessInfo Name: " + processInfo.getName());
						console.log("ProcessInfo ColumnName: " + processInfo.getColumnName());
						console.log("ProcessInfo FieldValue: " + processInfo.getFieldValue());
						console.log("ProcessInfo ID: " + processInfo.getId());
						console.log("ProcessInfo FieldName: " + processInfo.getFieldName());
                    }

                    const transitions = blueprint.getTransitions();
                    if (transitions !== null && transitions !== undefined) {
                        console.log("Blueprint Transitions Count: " + transitions.length);
                        
                        for (let index = 0; index < transitions.length; index++) {
                            const transition = transitions[index];
                            
                            const nextTransitions = transition.getNextTransitions();
                            if (nextTransitions !== null && nextTransitions !== undefined) {
                                console.log("Blueprint Next Transitions Count: " + nextTransitions.length);
                                
                                for (let nextIndex = 0; nextIndex < nextTransitions.length; nextIndex++) {
                                    const nextTransition = nextTransitions[nextIndex];
                                    console.log("Blueprint Next Transition ID: " + nextTransition.getId());
                                    console.log("Blueprint Next Transition Name: " + nextTransition.getName());
                                }
                            }

                            console.log("Blueprint Transition ID: " + transition.getId());
                            console.log("Blueprint Transition Name: " + transition.getName());
                            console.log("Blueprint Transition Type: " + transition.getType());
                            
                            const fields = transition.getFields();
                            if (fields !== null && fields !== undefined) {
                                console.log("Blueprint Transition Fields Count: " + fields.length);
                                
                                for (let fieldIndex = 0; fieldIndex < fields.length; fieldIndex++) {
                                    const field = fields[fieldIndex];
                                    console.log("Blueprint Field API Name: " + field.getAPIName());
                                    console.log("Blueprint Field Display Label: " + field.getDisplayLabel());
                                    console.log("Blueprint Field Read Only: " + field.getReadOnly());
                                }
                            }
                        }
                    }
                }
            }
            else if (responseHandler instanceof ZOHOCRMSDK.Blueprint.APIException) {
                const exception = responseHandler;
                console.log("Status: " + exception.getStatus().getValue());
                console.log("Code: " + exception.getCode().getValue());
                
                const details = exception.getDetails();
                if (details !== null) {
                    console.log("Details: ");
                    for (const [key, value] of Object.entries(details)) {
                        console.log(`${key}: ${value}`);
                    }
                }
                
                console.log("Message: " + exception.getMessage().getValue());
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
        let recordId = "1055806000028562118";
        let moduleAPIName = "Leads";
        await GetBlueprint.getBlueprint(recordId, moduleAPIName);
    }
}

GetBlueprint.initializeAndCall();