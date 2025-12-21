import * as ZOHOCRMSDK from "@zohocrm/typescript-sdk-8.0"

class GetFields {
    static async getFields(): Promise<void> {
        const fieldsOperations = new ZOHOCRMSDK.Fields.FieldsOperations();
        
        const paramInstance = new ZOHOCRMSDK.ParameterMap();
        await paramInstance.add(ZOHOCRMSDK.Fields.GetFieldsParam.MODULE, "Leads");
        
        const response = await fieldsOperations.getFields(paramInstance);
        
        if (response !== null) {
            console.log("Status Code: " + response.getStatusCode());
            
            if ([204, 304].includes(response.getStatusCode())) {
                console.log(response.getStatusCode() === 204 ? "No Content" : "Not Modified");
                return;
            }

            const responseHandler = response.getObject();
            
            if (responseHandler instanceof ZOHOCRMSDK.Fields.ResponseWrapper) {
                const fields = responseHandler.getFields();
                if (fields != null) {
                    for (let field of fields) {
                        console.log("Field ID: " + field.getId());
                        console.log("Field APIName: " + field.getAPIName());
                        console.log("Field FieldLabel: " + field.getFieldLabel());
                        console.log("Field DataType: " + field.getDataType());
                        console.log("Field Length: " + field.getLength());
                        console.log("Field ReadOnly: " + field.getReadOnly());
                        console.log("Field CustomField: " + field.getCustomField());
                        console.log("Field DefaultValue: " + field.getDefaultValue());
                        console.log("Field Visible: " + field.getVisible());
                        console.log("Field DisplayLabel: " + field.getDisplayLabel());
                        
                        const pickListValues = field.getPickListValues();
                        if (pickListValues != null && pickListValues.length > 0) {
                            console.log("Pick List Values:");
                            for (let pickListValue of pickListValues) {
                                console.log("Display Value: " + pickListValue.getDisplayValue());
                                console.log("Sequence Number: " + pickListValue.getSequenceNumber());
                                console.log("Expected Data Type: " + pickListValue.getExpectedDataType());
                                console.log("Actual Value: " + pickListValue.getActualValue());
                                console.log("SysRefName: " + pickListValue.getSysRefName());
                            }
                        }
                        
                        console.log("--------------------");
                    }
                }
            }
            else if (responseHandler instanceof ZOHOCRMSDK.Fields.APIException) {
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
        await GetFields.getFields();
    }
}

GetFields.initializeAndCall();