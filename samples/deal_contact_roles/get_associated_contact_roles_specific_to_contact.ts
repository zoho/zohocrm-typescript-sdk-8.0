import * as ZOHOCRMSDK from "@zohocrm/typescript-sdk-8.0"

class GetAssociatedContactRolesSpecificToContact {
    static async getAssociatedContactRolesSpecificToContact(): Promise<void> {
        const contactId = BigInt("1055806000028594016");
        const dealId = BigInt("1055806000028564012");
        
        const dealContactRolesOperations = new ZOHOCRMSDK.DealContactRoles.DealContactRolesOperations();
        
        const response = await dealContactRolesOperations.getAssociatedContactRolesSpecificToContact(contactId, dealId);
        
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
                        
                        const tags = record.getTag();
                        if (tags != null) {
                            for (let tag of tags) {
                                console.log("Record Tag ID: " + tag.getId());
                                console.log("Record Tag Name: " + tag.getName());
                            }
                        }
                        
                        console.log("Record Field Value: " + record.getKeyValue("Contact_Role"));
                        
                        console.log("Record KeyValues: ");
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
        await GetAssociatedContactRolesSpecificToContact.getAssociatedContactRolesSpecificToContact();
    }
}

GetAssociatedContactRolesSpecificToContact.initializeAndCall();