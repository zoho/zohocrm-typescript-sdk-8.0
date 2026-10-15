import * as ZOHOCRMSDK from "@zohocrm/typescript-sdk-8.0"

class CreateDuplicateCheckPreference {
    public static async createDuplicateCheckPreference(moduleAPIName: string) {
        let duplicateCheckPreferenceOperations = new ZOHOCRMSDK.DuplicateCheckPreference.DuplicateCheckPreferenceOperations(moduleAPIName);
        let request = new ZOHOCRMSDK.DuplicateCheckPreference.BodyWrapper();
        let duplicateCheckPreference = new ZOHOCRMSDK.DuplicateCheckPreference.DuplicateCheckPreference();
        duplicateCheckPreference.setType(new ZOHOCRMSDK.Choice("converted_records"));

        let typeConfigurations: Array<ZOHOCRMSDK.DuplicateCheckPreference.TypeConfiguration> = [];
        let typeConfiguration = new ZOHOCRMSDK.DuplicateCheckPreference.TypeConfiguration();
        let mappedModule = new ZOHOCRMSDK.DuplicateCheckPreference.MappedModule();
        mappedModule.setId("34770610002175");
        mappedModule.setAPIName("Leads");
        typeConfiguration.setMappedModule(mappedModule);

        let fieldMappings: Array<ZOHOCRMSDK.DuplicateCheckPreference.FieldMappings> = [];
        let fieldMapping = new ZOHOCRMSDK.DuplicateCheckPreference.FieldMappings();
        let currentField = new ZOHOCRMSDK.DuplicateCheckPreference.CurrentField();
        currentField.setId("347706100570001");
        currentField.setAPIName("Email_1");
        fieldMapping.setCurrentField(currentField);

        let mappedField = new ZOHOCRMSDK.DuplicateCheckPreference.MappedField();
        mappedField.setId("34770610537018");
        mappedField.setAPIName("Email_2");
        fieldMapping.setMappedField(mappedField);

        fieldMappings.push(fieldMapping);
        typeConfiguration.setFieldMappings(fieldMappings);
        typeConfigurations.push(typeConfiguration);
        duplicateCheckPreference.setTypeConfigurations(typeConfigurations);

        request.setDuplicateCheckPreference(duplicateCheckPreference);

        let response = await duplicateCheckPreferenceOperations.createDuplicateCheckPreference(request);

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
        await CreateDuplicateCheckPreference.createDuplicateCheckPreference(moduleAPIName);

    }
}

CreateDuplicateCheckPreference.initializeAndCall();
