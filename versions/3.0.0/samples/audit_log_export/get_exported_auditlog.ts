import * as ZOHOCRMSDK from "@zohocrm/typescript-sdk-8.0"

class GetExportedAuditlog {
    static async getExportedAuditlog(Id: bigint): Promise<void> {
        const auditLogExportOperations = new ZOHOCRMSDK.AuditLogExport.AuditLogExportOperations();
        const response = await auditLogExportOperations.getExportedAuditlog(Id);

        if (response !== null) {
            console.log("Status Code: " + response.getStatusCode());
            if (response.getStatusCode() === 204) {
                console.log("No Content");
                return;
            }

            const responseHandler = response.getObject();
            if (responseHandler instanceof ZOHOCRMSDK.AuditLogExport.ResponseWrapper) {
                const responseWrapper = responseHandler;
                const auditLogExport = responseWrapper.getAuditLogExport();
                if (auditLogExport != null) {
                    for (const auditLogExport1 of auditLogExport) {
                        const criteria = auditLogExport1.getCriteria();
                        if (criteria != null) {
                            this.printCriteria(criteria);
                        }
                        console.log("AuditLogExport Id : " + auditLogExport1.getId());
                        console.log("AuditLogExport Status : " + auditLogExport1.getStatus());
                        const createdBy = auditLogExport1.getCreatedBy();
                        if (createdBy != null) {
                            console.log("AuditLogExport User Id : " + createdBy.getId());
                            console.log("AuditLogExport User Name : " + createdBy.getName());
                        }
                        const downloadLinks = auditLogExport1.getDownloadLinks();
                        if (downloadLinks != null){
                            for (const link of downloadLinks) {
                                console.log("AuditLogExport DownloadLink : " + link);
                            }
                        }
                        console.log("AuditLogExport JobStartTime : " + auditLogExport1.getJobStartTime());
                        console.log("AuditLogExport JobEndTime : " + auditLogExport1.getJobEndTime());
                        console.log("AuditLogExport ExpiryDate : " + auditLogExport1.getExpiryDate());
                    }
                }
            } else if (responseHandler instanceof ZOHOCRMSDK.AuditLogExport.APIException) {
                const exception = responseHandler as ZOHOCRMSDK.AuditLogExport.APIException;
                console.log("Status: " + exception.getStatus().getValue());
                console.log("Code: " + exception.getCode().getValue());
                console.log("Details: ");
                const details = exception.getDetails();
                for (const [key, value] of Object.entries(details)) {
                    console.log(`${key}: ${value}`);
                }
                console.log("Message: " + exception.getMessage());
            }
        }
    }

    private static printCriteria(criteria: ZOHOCRMSDK.AuditLogExport.Criteria): void {
        if (criteria.getComparator() != null) {
            console.log("ExportedAuditlogs Criteria Comparator: " + criteria.getComparator());
        }
        if (criteria.getValue() !=null) {
            console.log("ExportedAuditlogs Criteria Value: " + criteria.getValue().toString());
        }
        if (criteria.getField() != null) {
            console.log("ExportedAuditlogs Criteria field name: " + criteria.getField().getAPIName());
        }
        const criteriaGroup = criteria.getGroup();
        if (criteriaGroup != null) {
            for (const criteria1 of criteriaGroup) {
                this.printCriteria(criteria1);
            }
        }
        if (criteria.getGroupOperator() !== null) {
            console.log("ExportedAuditlogs Criteria Group Operator: " + criteria.getGroupOperator());
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
        let id = BigInt("7272250599001")
        await GetExportedAuditlog.getExportedAuditlog(id);
    }
}

GetExportedAuditlog.initializeAndCall();
