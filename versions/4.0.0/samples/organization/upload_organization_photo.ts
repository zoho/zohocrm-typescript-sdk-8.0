import * as ZOHOCRMSDK from "@zohocrm/typescript-sdk-8.0"

class UploadOrganizationPhoto {
    static async uploadOrganizationPhoto(photoFilePath: string): Promise<void> {
        const orgOperations = new ZOHOCRMSDK.Org.OrgOperations();
        
        const request = new ZOHOCRMSDK.Org.FileBodyWrapper();
        const streamWrapper = new ZOHOCRMSDK.StreamWrapper(undefined, undefined, photoFilePath);
        
        request.setFile(streamWrapper);
        const response = await orgOperations.uploadOrganizationPhoto(request);
        
        if (response !== null) {
            console.log("Status Code: " + response.getStatusCode());
            
            const actionResponse = response.getObject();
            
            if (actionResponse instanceof ZOHOCRMSDK.Org.SuccessResponse) {
                const successResponse = actionResponse;
                console.log("Status: " + successResponse.getStatus().getValue());
                console.log("Code: " + successResponse.getCode().getValue());
                console.log("Message: " + successResponse.getMessage());
                
                const details = successResponse.getDetails();
                if (details !== null && details.size > 0) {
                    console.log("Response Details: ");
                    Array.from(details.keys()).forEach(key => {
                        console.log("  " + key + ": " + details.get(key));
                    });
                }
            }
            else if (actionResponse instanceof ZOHOCRMSDK.Org.APIException) {
                const exception = actionResponse;
                console.log("Status: " + exception.getStatus().getValue());
                console.log("Code: " + exception.getCode().getValue());
                console.log("Message: " + exception.getMessage());
                
                const details = exception.getDetails();
                if (details !== null && details.size > 0) {
                    console.log("Error Details: ");
                    Array.from(details.keys()).forEach(key => {
                        console.log("  " + key + ": " + details.get(key));
                    });
                }
            }
        } else {
            console.log("No response received from the API");
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
        let photoFilePath = "./download.png";
        await UploadOrganizationPhoto.uploadOrganizationPhoto(photoFilePath);
    }
}

UploadOrganizationPhoto.initializeAndCall();