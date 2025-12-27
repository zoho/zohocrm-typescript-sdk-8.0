import * as ZOHOCRMSDK from "@zohocrm/typescript-sdk-8.0"

class DeleteNotification {
    static async deleteNotification(): Promise<void> {
        const notificationsOperations = new ZOHOCRMSDK.Notifications.NotificationsOperations();
        
        const paramInstance = new ZOHOCRMSDK.ParameterMap();
        
        // Add channel IDs to delete
        // Delete single notification
        await paramInstance.add(ZOHOCRMSDK.Notifications.DeleteNotificationParam.CHANNEL_IDS, "1055806000000087001");
        
        const response = await notificationsOperations.deleteNotification(paramInstance);
        
        if (response !== null) {
            console.log("Status Code: " + response.getStatusCode());
            
            const actionHandler = response.getObject();
            
            if (actionHandler instanceof ZOHOCRMSDK.Notifications.ActionWrapper) {
                const actionResponses = actionHandler.getWatch();
                if (actionResponses != null) {
                    console.log("Total responses received: " + actionResponses.length);
                    
                    for (let i = 0; i < actionResponses.length; i++) {
                        const actionResponse = actionResponses[i];
                        
                        if (actionResponse instanceof ZOHOCRMSDK.Notifications.SuccessResponse) {
                            const successResponse = actionResponse;
                            console.log("\nNotification " + (i + 1) + " deleted successfully:");
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
                        else if (actionResponse instanceof ZOHOCRMSDK.Notifications.APIException) {
                            const exception = actionResponse;
                            console.log("\nFailed to delete notification " + (i + 1) + ":");
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
                    }
                }
            }
            else if (actionHandler instanceof ZOHOCRMSDK.Notifications.APIException) {
                const exception = actionHandler;
                console.log("API Exception occurred during deletion:");
                console.log("Status: " + exception.getStatus().getValue());
                console.log("Code: " + exception.getCode().getValue());
                console.log("Message: " + exception.getMessage());
                
                const details = exception.getDetails();
                if (details !== null && details.size > 0) {
                    console.log("Exception Details: ");
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
        await DeleteNotification.deleteNotification();
    }
}

DeleteNotification.initializeAndCall();