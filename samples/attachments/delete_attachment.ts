import * as ZOHOCRMSDK from "@zohocrm/typescript-sdk-8.0"

class DeleteAttachment {
    static async deleteAttachment(attachmentId: bigint, recordId: bigint, moduleAPIName: string): Promise<void> {
        const attachmentsOperations = new ZOHOCRMSDK.Attachments.AttachmentsOperations();
        
        const response = await attachmentsOperations.deleteAttachment(attachmentId, recordId, moduleAPIName);
        
        if (response !== null) {
            console.log("Status Code: " + response.getStatusCode());
            
            const actionHandler = response.getObject();

            if (actionHandler instanceof ZOHOCRMSDK.Attachments.ActionWrapper) {
                const actionWrapper = actionHandler;
                const actionResponses = actionWrapper.getData();

                for (const actionResponse of actionResponses) {
                    if (actionResponse instanceof ZOHOCRMSDK.Attachments.SuccessResponse) {
                        const successResponse = actionResponse;
                        console.log("Status: " + successResponse.getStatus().getValue());
                        console.log("Code: " + successResponse.getCode().getValue());
                        
                        const details = successResponse.getDetails();
                        if (details !== null) {
                            console.log("Details: ");
                            for (const [key, value] of Object.entries(details)) {
                                console.log(`${key}: ${value}`);
                            }
                        }
                        
                        console.log("Message: " + successResponse.getMessage());
                    }
                    else if (actionResponse instanceof ZOHOCRMSDK.Attachments.APIException) {
                        const exception = actionResponse;
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
            else if (actionHandler instanceof ZOHOCRMSDK.Attachments.APIException) {
                const exception = actionHandler;
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
        let attachmentId = BigInt("1055806000028644003");
        let recordId = BigInt("1055806000028562118");
        let moduleAPIName = "Leads";
        await DeleteAttachment.deleteAttachment(attachmentId, recordId, moduleAPIName);
    }
}

DeleteAttachment.initializeAndCall();