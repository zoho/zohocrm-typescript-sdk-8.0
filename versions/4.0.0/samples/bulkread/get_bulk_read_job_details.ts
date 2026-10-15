import * as ZOHOCRMSDK from "@zohocrm/typescript-sdk-8.0"

class GetBulkReadJobDetails {
    static async getBulkReadJobDetails(jobId: bigint): Promise<void> {
        const bulkReadOperations = new ZOHOCRMSDK.BulkRead.BulkReadOperations();
        
        const response = await bulkReadOperations.getBulkReadJobDetails(jobId);
        
        if (response !== null) {
            console.log("Status Code: " + response.getStatusCode());
            
            if ([204, 304].includes(response.getStatusCode())) {
                console.log(response.getStatusCode() === 204 ? "No Content" : "Not Modified");
                return;
            }

            const responseHandler = response.getObject();
            
            if (responseHandler instanceof ZOHOCRMSDK.BulkRead.ResponseWrapper) {
                const responseWrapper = responseHandler;
                const bulkReadJobs = responseWrapper.getData();

                if (bulkReadJobs !== null && bulkReadJobs.length > 0) {
                    for (let index = 0; index < bulkReadJobs.length; index++) {
                        const bulkReadJob = bulkReadJobs[index];
                        
                        console.log("Bulk Read Job ID: " + bulkReadJob.getId());
                        console.log("Bulk Read Job Operation: " + bulkReadJob.getOperation());
                        console.log("Bulk Read Job State: " + bulkReadJob.getState().getValue());
                        
                        const createdBy = bulkReadJob.getCreatedBy();
                        if (createdBy !== null) {
                            console.log("Bulk Read Job Created By Name: " + createdBy.getName());
                            console.log("Bulk Read Job Created By ID: " + createdBy.getId());
                        }
                        
                        console.log("Bulk Read Job Created Time: " + bulkReadJob.getCreatedTime());
                        
                        const result = bulkReadJob.getResult();
                        if (result !== null) {
                            console.log("Bulk Read Job Result Page: " + result.getPage());
                            console.log("Bulk Read Job Result Count: " + result.getCount());
                            console.log("Bulk Read Job Result Download URL: " + result.getDownloadUrl());
                            console.log("Bulk Read Job Result Per Page: " + result.getPerPage());
                            console.log("Bulk Read Job Result More Records: " + result.getMoreRecords());
                        }
                        
                        const query = bulkReadJob.getQuery();
                        if (query !== null) {
                            console.log("Bulk Read Job Query Module: " + query.getModule());
                            console.log("Bulk Read Job Query Page: " + query.getPage());
                            console.log("Bulk Read Job Query CVId: " + query.getCvid());
                            
                            const fields = query.getFields();
                            if (fields !== null && fields.length > 0) {
                                console.log("Bulk Read Job Query Fields:");
                                for (const field of fields) {
                                    console.log("Field: " + field);
                                }
                            }
                            
                            const criteria = query.getCriteria();
                            if (criteria !== null && criteria !== undefined) {
                                console.log("Bulk Read Job Query Criteria API Name: " + criteria.getAPIName());
                                console.log("Bulk Read Job Query Criteria Comparator: " + criteria.getComparator());
                                console.log("Bulk Read Job Query Criteria Value: " + criteria.getValue());
                            }
                        }
                        
                        const fileType = bulkReadJob.getFileType();
                        if (fileType !== null) {
                            console.log("Bulk Read Job File Type: " + fileType);
                        }
                    }
                }
            }
            else if (responseHandler instanceof ZOHOCRMSDK.BulkRead.APIException) {
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
        let jobId = BigInt("1055806000028640002");
        await GetBulkReadJobDetails.getBulkReadJobDetails(jobId);
    }
}

GetBulkReadJobDetails.initializeAndCall();