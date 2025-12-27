import * as ZOHOCRMSDK from "@zohocrm/typescript-sdk-8.0"

class GetAttachments {
    static async getAttachments(recordId: bigint, moduleAPIName: string): Promise<void> {
        const attachmentsOperations = new ZOHOCRMSDK.Attachments.AttachmentsOperations();
        
        const paramInstance = new ZOHOCRMSDK.ParameterMap();
        await paramInstance.add(ZOHOCRMSDK.Attachments.GetAttachmentsParam.FIELDS, "id,Modified_Time");
        await paramInstance.add(ZOHOCRMSDK.Attachments.GetAttachmentsParam.PAGE, 1);
        // await paramInstance.add(ZOHOCRMSDK.Attachments.GetAttachmentsParam.IDS, "1055806000028644003");
        await paramInstance.add(ZOHOCRMSDK.Attachments.GetAttachmentsParam.PER_PAGE, 10);
        
        const response = await attachmentsOperations.getAttachments(recordId, moduleAPIName, paramInstance);
        
        if (response !== null) {
            console.log("Status Code: " + response.getStatusCode());
            
            if ([204, 304].includes(response.getStatusCode())) {
                console.log(response.getStatusCode() === 204 ? "No Content" : "Not Modified");
                return;
            }

            const responseHandler = response.getObject();
            
            if (responseHandler instanceof ZOHOCRMSDK.Attachments.ResponseWrapper) {
                const responseWrapper = responseHandler;
                const attachments = responseWrapper.getData();

                if (attachments !== null) {
                    for (const attachment of attachments) {
                        console.log("Attachment ID: " + attachment.getId());
                        console.log("Attachment Name: " + attachment.getFileName());
                        console.log("Attachment Size: " + attachment.getSize());
                        
                        const owner = attachment.getOwner();
                        if (owner !== undefined) {
                            console.log("Attachment Owner Name: " + owner.getName());
                            console.log("Attachment Owner ID: " + owner.getId());
                        }
                        
                        console.log("Attachment Modified Time: " + attachment.getModifiedTime());
                        console.log("Attachment Created Time: " + attachment.getCreatedTime());
                    }
                }

                const info = responseWrapper.getInfo();
                if (info !== null) {
                    console.log("Attachment Info PerPage: " + info.getPerPage());
                    console.log("Attachment Info Count: " + info.getCount());
                }
            }
            else if (responseHandler instanceof ZOHOCRMSDK.Attachments.APIException) {
                const exception = responseHandler;
                console.log("Status: " + exception.getStatus().getValue());
                console.log("Code: " + exception.getCode().getValue());
                console.log("Details: ");
                
                const details = exception.getDetails();
                if (details !== null) {
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
        let recordId = BigInt("1055806000028562118");
        let moduleAPIName = "Leads";
        await GetAttachments.getAttachments(recordId, moduleAPIName);
    }
}

GetAttachments.initializeAndCall();