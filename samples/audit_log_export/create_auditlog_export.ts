import * as ZOHOCRMSDK from "@zohocrm/typescript-sdk-8.0"

class CreateAuditlogExport {
    public static async createAuditlogExport() {
        let auditLogExportOperations = new ZOHOCRMSDK.AuditLogExport.AuditLogExportOperations();
        let request = new ZOHOCRMSDK.AuditLogExport.BodyWrapper();
        let auditLogExport: Array<ZOHOCRMSDK.AuditLogExport.AuditLogExport> = [];
        let auditLogExport1 = new ZOHOCRMSDK.AuditLogExport.AuditLogExport();
        let criteria = new ZOHOCRMSDK.AuditLogExport.Criteria();

        criteria.setComparator("between");

        let field = new ZOHOCRMSDK.AuditLogExport.Field();
        field.setAPIName("audited_time");
        criteria.setField(field);

        let values = [];
        values.push(new Date(2024, 2, 20, 10, 10, 19));
        values.push(new Date(2024, 2, 20, 10, 10, 10));
        criteria.setValue(values);

        auditLogExport1.setCriteria(criteria);
        auditLogExport.push(auditLogExport1);
        request.setAuditLogExport(auditLogExport);

        let response = await auditLogExportOperations.createAuditlogExport(request);

        if (response !== null) {
            console.log("Status Code: " + response.getStatusCode());
            let actionHandler = response.getObject();
            if (actionHandler instanceof ZOHOCRMSDK.AuditLogExport.ActionWrapper) {
                let actionWrapper: ZOHOCRMSDK.AuditLogExport.ActionWrapper = actionHandler;
                let actionResponses = actionWrapper.getAuditLogExport();
                for (let actionResponse of actionResponses) {
                    if (actionResponse instanceof ZOHOCRMSDK.AuditLogExport.SuccessResponse) {
                        let successResponse: ZOHOCRMSDK.AuditLogExport.SuccessResponse = actionResponse;
                        console.log("Status: " + successResponse.getStatus().getValue());
                        console.log("Code: " + successResponse.getCode().getValue());
                        console.log("Details: ");
                        for (let [key, value] of Object.entries(successResponse.getDetails())) {
                            console.log(`${key}: ${value}`);
                        }
                        console.log("Message: " + successResponse.getMessage());
                    } else if (actionResponse instanceof ZOHOCRMSDK.AuditLogExport.APIException) {
                        let exception: ZOHOCRMSDK.AuditLogExport.APIException = actionResponse;
                        console.log("Status: " + exception.getStatus().getValue());
                        console.log("Code: " + exception.getCode().getValue());
                        console.log("Details: ");
                        for (let [key, value] of Object.entries(exception.getDetails())) {
                            console.log(`${key}: ${value}`);
                        }
                        console.log("Message: " + exception.getMessage());
                    }
                }
            } else if (actionHandler instanceof ZOHOCRMSDK.AuditLogExport.APIException) {
                let exception: ZOHOCRMSDK.AuditLogExport.APIException = actionHandler;
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
        await CreateAuditlogExport.createAuditlogExport();
    }
}

CreateAuditlogExport.initializeAndCall();
