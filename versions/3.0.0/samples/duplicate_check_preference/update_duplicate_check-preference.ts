import * as ZOHOCRMSDK from "@zohocrm/typescript-sdk-8.0"


class UpdateDuplicateCheckPreference {
    static async updateDuplicateCheckPreference(moduleAPIName: string) {
        const duplicateCheckPreferenceOperations = new ZOHOCRMSDK.DuplicateCheckPreference.DuplicateCheckPreferenceOperations(moduleAPIName);
        const request = new ZOHOCRMSDK.DuplicateCheckPreference.BodyWrapper();

        const duplicateCheckPreference = new ZOHOCRMSDK.DuplicateCheckPreference.DuplicateCheckPreference();
        duplicateCheckPreference.setType(new ZOHOCRMSDK.Choice<string>("converted_records"));

        const typeConfigurations: ZOHOCRMSDK.DuplicateCheckPreference.TypeConfiguration[] = [];
        const typeConfiguration = new ZOHOCRMSDK.DuplicateCheckPreference.TypeConfiguration();

        const mappedModule = new ZOHOCRMSDK.DuplicateCheckPreference.MappedModule();
        mappedModule.setId("3477061000002175");
        mappedModule.setAPIName("Leads");
        typeConfiguration.setMappedModule(mappedModule);

        const fieldMappings: ZOHOCRMSDK.DuplicateCheckPreference.FieldMappings[] = [];
        const fieldMapping = new ZOHOCRMSDK.DuplicateCheckPreference.FieldMappings();

        const currentField = new ZOHOCRMSDK.DuplicateCheckPreference.CurrentField();
        currentField.setId("34770610006570001");
        currentField.setAPIName("Email_1");
        fieldMapping.setCurrentField(currentField);

        const mappedField = new ZOHOCRMSDK.DuplicateCheckPreference.MappedField();
        mappedField.setId("347706100537018");
        mappedField.setAPIName("Email_2");
        fieldMapping.setMappedField(mappedField);

        fieldMappings.push(fieldMapping);
        typeConfiguration.setFieldMappings(fieldMappings);
        typeConfigurations.push(typeConfiguration);

        duplicateCheckPreference.setTypeConfigurations(typeConfigurations);
        request.setDuplicateCheckPreference(duplicateCheckPreference);

        const response: ZOHOCRMSDK.APIResponse<ZOHOCRMSDK.DuplicateCheckPreference.ActionHandler.MasterModel> = await duplicateCheckPreferenceOperations.updateDuplicateCheckPreference(request);

        if (response !== null) {
            console.log("Status Code: " + response.getStatusCode());
            let actionHandler = response.getObject();
            if (actionHandler instanceof ZOHOCRMSDK.DuplicateCheckPreference.ActionWrapper) {
                let actionWrapper: ZOHOCRMSDK.DuplicateCheckPreference.ActionWrapper = actionHandler;
                let actionResponse = actionWrapper.getDuplicateCheckPreference();
                if (actionResponse instanceof ZOHOCRMSDK.DuplicateCheckPreference.SuccessResponse) {
                    let successResponse: ZOHOCRMSDK.DuplicateCheckPreference.SuccessResponse = actionResponse;
                    console.log("Status: " + successResponse.getStatus().getValue());
                    console.log("Code: " + successResponse.getCode().getValue());
                    console.log("Details: ");
                    for (let [key, value] of Object.entries(successResponse.getDetails())) {
                        console.log(`${key}: ${value}`);
                    }
                    console.log("Message: " + successResponse.getMessage());
                } else if (actionResponse instanceof ZOHOCRMSDK.DuplicateCheckPreference.APIException) {
                    let exception: ZOHOCRMSDK.DuplicateCheckPreference.APIException = actionResponse;
                    console.log("Status: " + exception.getStatus().getValue());
                    console.log("Code: " + exception.getCode().getValue());
                    console.log("Details: ");
                    for (let [key, value] of Object.entries(exception.getDetails())) {
                        console.log(`${key}: ${value}`);
                    }
                    console.log("Message: " + exception.getMessage());
                }
            } else if (actionHandler instanceof ZOHOCRMSDK.DuplicateCheckPreference.APIException) {
                let exception: ZOHOCRMSDK.DuplicateCheckPreference.APIException = actionHandler;
                console.log("Status: " + exception.getStatus().getValue());
                console.log("Code: " + exception.getCode().getValue());
                console.log("Details: ");
                for (let [key, value] of Object.entries(exception.getDetails())) {
                    console.log(`${key}: ${value}`);
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
        let moduleAPIName = "Leads";
        await UpdateDuplicateCheckPreference.updateDuplicateCheckPreference(moduleAPIName);
    }
}

UpdateDuplicateCheckPreference.initializeAndCall();
