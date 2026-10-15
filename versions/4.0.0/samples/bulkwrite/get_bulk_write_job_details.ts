import * as ZOHOCRMSDK from "@zohocrm/typescript-sdk-8.0"

class GetBulkWriteJobDetails {
    static async getBulkWriteJobDetails(jobId: string): Promise<void> {
        const bulkWriteOperations = new ZOHOCRMSDK.BulkWrite.BulkWriteOperations();
        
        const response = await bulkWriteOperations.getBulkWriteJobDetails(jobId);
        
        if (response !== null) {
            console.log("Status Code: " + response.getStatusCode());
            
            if ([204, 304].includes(response.getStatusCode())) {
                console.log(response.getStatusCode() === 204 ? "No Content" : "Not Modified");
                return;
            }

            const responseWrapper = response.getObject();
            
            if (responseWrapper instanceof ZOHOCRMSDK.BulkWrite.BulkWriteResponse) {
               	let bulkWriteResponse = responseWrapper;
                console.log("Bulk write Job Status: " + bulkWriteResponse.getStatus());
                console.log("Bulk write CharacterEncoding: " + bulkWriteResponse.getCharacterEncoding());
                let resources = bulkWriteResponse.getResource();
                if (resources != null)
                {
                    for (let resource of resources)
                    {
                        console.log("Bulk write Resource Status: " + resource.getStatus().getValue());
                        console.log("Bulk write Resource Type: " + resource.getType().getValue());
                        let module = resource.getModule();
                        if (module != null)
                        {
                            console.log("Bulkwrite Resource Module Name : " + module.getAPIName());
                            console.log("Bulkwrite Resource Module Id : " + module.getId());
                        }
                        let fieldMappings = resource.getFieldMappings();
                        if (fieldMappings != null)
                        {
                            for (let fieldMapping of fieldMappings)
                            {
                                console.log("Bulk write Resource FieldMapping Module: " + fieldMapping.getAPIName());
                                if (fieldMapping.getIndex() != null)
                                {
                                    console.log("Bulk write Resource FieldMapping Index: " + fieldMapping.getIndex());
                                }
                                if (fieldMapping.getFormat() != null)
                                {
                                    console.log("Bulk write Resource FieldMapping Format: " + fieldMapping.getFormat());
                                }
                                if (fieldMapping.getModule() != null)
                                {
                                    console.log("Bulk write Resource FieldMapping Module: " + fieldMapping.getModule());
                                }
                                if (fieldMapping.getFindBy() != null)
                                {
                                    console.log("Bulk write Resource FieldMapping FindBy: " + fieldMapping.getFindBy());
                                }
                                if (fieldMapping.getDefaultValue() != null)
                                {
                                    let defaultValue = fieldMapping.getDefaultValue();

                                    if (defaultValue != null)
                                    {
                                        console.log("Name : " + defaultValue.getName());

                                        console.log("Module : " + defaultValue.getModule());

                                        console.log("Value : " + defaultValue.getValue());
                                    }
                                }
                            }
                        }
                        let file = resource.getFile();
                        if (file != null)
                        {
                            console.log("Bulk write Resource File Status: " + file.getStatus().getValue());
                            console.log("Bulk write Resource File Name: " + file.getName());
                            console.log("Bulk write Resource File AddedCount: " + file.getAddedCount().toString());
                            console.log("Bulk write Resource File SkippedCount: " + file.getSkippedCount().toString());
                            console.log("Bulk write Resource File UpdatedCount: " + file.getUpdatedCount().toString());
                            console.log("Bulk write Resource File TotalCount: " + file.getTotalCount().toString());
                        }
                        console.log("Bulk write Resource FindBy: " + resource.getFindBy());
                        console.log("Bulk write Resource Code: " + resource.getCode());
                    }
                }
                let callback = bulkWriteResponse.getCallback();
                if (callback != null)
                {
                    console.log("Bulk write CallBack Url: " + callback.getUrl());
                    console.log("Bulk write CallBack Method: " + callback.getMethod().getValue());
                }
                console.log("Bulk write ID: " + bulkWriteResponse.getId().toString());
                let result = bulkWriteResponse.getResult();
                if (result != null)
                {
                    console.log("Bulk write DownloadUrl: " + result.getDownloadUrl());
                }
                let createdBy = bulkWriteResponse.getCreatedBy();
                if (createdBy != null)
                {
                    console.log("Bulkread Created By User-ID: " + createdBy.getId());
                    console.log("Bulkread Created By user-Name: " + createdBy.getName());
                }
                console.log("Bulk write Operation: " + bulkWriteResponse.getOperation());
                console.log("Bulk write File CreatedTime: " + bulkWriteResponse.getCreatedTime().toString());
            }
            else if (responseWrapper instanceof ZOHOCRMSDK.BulkWrite.APIException) {
                const exception = responseWrapper;
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
        let jobId = "1055806000028656002";
        await GetBulkWriteJobDetails.getBulkWriteJobDetails(jobId);
    }
}

GetBulkWriteJobDetails.initializeAndCall();