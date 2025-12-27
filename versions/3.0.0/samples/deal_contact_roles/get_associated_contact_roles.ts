import * as ZOHOCRMSDK from "@zohocrm/typescript-sdk-8.0"

class GetAssociatedContactRoles {
    static async getAssociatedContactRoles(): Promise<void> {
        const dealId = BigInt("1055806000028564012");
        
        const dealContactRolesOperations = new ZOHOCRMSDK.DealContactRoles.DealContactRolesOperations();
        
        const paramInstance = new ZOHOCRMSDK.ParameterMap();
        await paramInstance.add(ZOHOCRMSDK.DealContactRoles.GetAssociatedContactRolesParam.FIELDS, "id,Full_Name");
        
        const response = await dealContactRolesOperations.getAssociatedContactRoles(dealId, paramInstance);
        
        if (response !== null) {
            console.log("Status Code: " + response.getStatusCode());
            
            if ([204, 304].includes(response.getStatusCode())) {
                console.log(response.getStatusCode() === 204 ? "No Content" : "Not Modified");
                return;
            }

            const responseHandler = response.getObject();
            
            if (responseHandler instanceof ZOHOCRMSDK.DealContactRoles.ResponseWrapper) {
                const records = responseHandler.getData();
                if (records != null) {
                    for (let record of records) {
                        console.log("Record ID: " + record.getId());
                        
                        const createdBy = record.getCreatedBy();
                        if (createdBy != null) {
                            console.log("Record Created By - ID: " + createdBy.getId());
                            console.log("Record Created By - Name: " + createdBy.getName());
                            console.log("Record Created By - Email: " + createdBy.getEmail());
                        }
                        
                        console.log("Record CreatedTime: " + record.getCreatedTime());
                        
                        const modifiedBy = record.getModifiedBy();
                        if (modifiedBy != null) {
                            console.log("Record Modified By - ID: " + modifiedBy.getId());
                            console.log("Record Modified By - Name: " + modifiedBy.getName());
                            console.log("Record Modified By - Email: " + modifiedBy.getEmail());
                        }
                        
                        console.log("Record ModifiedTime: " + record.getModifiedTime());
                        
                        const keyValues = record.getKeyValues();
                        const keyArray = Array.from(keyValues.keys());
                        
                        for (let keyName of keyArray) {
                            const value = keyValues.get(keyName);
                            if (Array.isArray(value)) {
                                console.log("Record KeyName: " + keyName + " - Value: " + JSON.stringify(value));
                            } else if (value instanceof Map) {
                                console.log("Record KeyName: " + keyName + " - Value: " + JSON.stringify(Object.fromEntries(value)));
                            } else {
                                console.log("Record KeyName: " + keyName + " - Value: " + value);
                            }
                        }
                    }
                }
                
                const info = responseHandler.getInfo();
                if (info != null) {
                    if (info.getCount() != null) {
                        console.log("Record Info Count: " + info.getCount());
                    }
                    if (info.getMoreRecords() != null) {
                        console.log("Record Info MoreRecords: " + info.getMoreRecords());
                    }
                }
            }
            else if (responseHandler instanceof ZOHOCRMSDK.DealContactRoles.APIException) {
                const exception = responseHandler;
                console.log("Status: " + exception.getStatus().getValue());
                console.log("Code: " + exception.getCode().getValue());
                console.log("Details: ");
                
                const details = exception.getDetails();
                if (details !== null) {
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
        await GetAssociatedContactRoles.getAssociatedContactRoles();
    }
}

GetAssociatedContactRoles.initializeAndCall();