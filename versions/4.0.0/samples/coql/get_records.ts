import * as ZOHOCRMSDK from "@zohocrm/typescript-sdk-8.0"

class GetRecords {
    static async getRecords(): Promise<void> {
        const coqlOperations = new ZOHOCRMSDK.Coql.CoqlOperations();
        const bodyWrapper = new ZOHOCRMSDK.Coql.BodyWrapper();
        
        // Example COQL query to get records from Leads module
        const selectQuery = "select Last_Name, First_Name, Company, Email, Phone, Lead_Status from Leads where Lead_Status = 'Not Contacted' limit 200";
        bodyWrapper.setSelectQuery(selectQuery);
        
        const response = await coqlOperations.getRecords(bodyWrapper);
        if (response !== null) {
            console.log("Status Code: " + response.getStatusCode());
            
            if ([204, 304].includes(response.getStatusCode())) {
                console.log(response.getStatusCode() === 204 ? "No Content" : "Not Modified");
                return;
            }

            const responseHandler = response.getObject();
            
            if (responseHandler instanceof ZOHOCRMSDK.Coql.ResponseWrapper) {
                    let records = responseHandler.getData();
                    for (let record of records) {
                        console.log("Record ID: " + record.getId());
                        let createdBy = record.getCreatedBy();
                        if (createdBy != null) {
                            console.log("Record Created By User-ID: " + createdBy.getId());
                            console.log("Record Created By User-Name: " + createdBy.getName());
                            console.log("Record Created By User-Email: " + createdBy.getEmail());
                        }
                        console.log("Record CreatedTime: " + record.getCreatedTime());
                        let modifiedBy = record.getModifiedBy();
                        if (modifiedBy != null) {
                            console.log("Record Modified By User-ID: " + modifiedBy.getId());
                            console.log("Record Modified By User-Name: " + modifiedBy.getName());
                            console.log("Record Modified By User-Email: " + modifiedBy.getEmail());
                        }
                        console.log("Record ModifiedTime: " + record.getModifiedTime());
                        let tags = record.getTag();
                        if (tags != null) {
                            tags.forEach(tag => {
                                console.log("Record Tag Name: " + tag.getName());
                                console.log("Record Tag ID: " + tag.getId());
                            });
                        }
                        //To get particular field value
                        console.log("Record Field Value: " + record.getKeyValue("Last_Name"));// FieldApiName
                        console.log("Record KeyValues: ");
                        let keyValues = record.getKeyValues();
                        let keyArray = Array.from(keyValues.keys());
                        for (let keyName of keyArray) {
                            let value = keyValues.get(keyName);
                            if (Array.isArray(value)) {
                                console.log("Record keyName: " + keyName);
                                for (let data of value) {
                                    if (data instanceof Map) {
                                        for (let mapKey in data) {
                                            console.log(mapKey + " : " + data.get(mapKey));
                                        }
                                    }
                                    else {
                                        console.log(data);
                                    }
                                }
                            }
                            else if (value instanceof Map) {
                                console.log("Record keyName: " + keyName);
                                for (let mapKey in value) {
                                    console.log(mapKey + " : " + value.get(mapKey));
                                }
                            }
                            else {
                                console.log("Record keyName: " + keyName + " - Value - " + value);
                            }
                        }
                    }
                    let info = responseHandler.getInfo();
                    if (info != null) {
                        if (info.getCount() != null) {
                            console.log("Record Info Count: " + info.getCount().toString());
                        }
                        if (info.getMoreRecords() != null) {
                            console.log("Record Info MoreRecords: " + info.getMoreRecords().toString());
                        }
                    }
            }
            else if (responseHandler instanceof ZOHOCRMSDK.Coql.APIException) {
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
        await GetRecords.getRecords();
    }
}

GetRecords.initializeAndCall();