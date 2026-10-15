import * as ZOHOCRMSDK from "@zohocrm/typescript-sdk-8.0"

class DisableNotification {
    static async disableNotification(): Promise<void> {
        const notificationsOperations = new ZOHOCRMSDK.Notifications.NotificationsOperations();
        
        const request = new ZOHOCRMSDK.Notifications.BodyWrapper();
        const notificationsArray = [];
        
        // Disable specific notification by setting empty events array
        const notification = new ZOHOCRMSDK.Notifications.Notification();
        
        // Notification to disable - specify the channel ID
        notification.setChannelId("1055806000000087001");
        
        // Setting empty events array to disable all event notifications
        notification.setEvents([]);
        
        notificationsArray.push(notification);
        
        // Can disable multiple notifications at once
        const notification2 = new ZOHOCRMSDK.Notifications.Notification();
        notification2.setChannelId("1055806000000087002");
        notification2.setEvents([]);
        
        notificationsArray.push(notification2);
        
        request.setWatch(notificationsArray);
        
        const response = await notificationsOperations.disableNotification(request);
        
        if (response !== null) {
            console.log("Status Code: " + response.getStatusCode());
            
            const actionHandler = response.getObject();
            
            if (actionHandler instanceof ZOHOCRMSDK.Notifications.ActionWrapper) {
                const actionResponses = actionHandler.getWatch();
                if (actionResponses != null) {
                    for (let i = 0; i < actionResponses.length; i++) {
                        const actionResponse = actionResponses[i];
                        
                        if (actionResponse instanceof ZOHOCRMSDK.Notifications.SuccessResponse) {
                            const successResponse = actionResponse;
                            console.log("Notification " + (i + 1) + " disabled successfully:");
                            console.log("Status: " + successResponse.getStatus().getValue());
                            console.log("Code: " + successResponse.getCode().getValue());
                            console.log("Message: " + successResponse.getMessage());
                            
                            const details = successResponse.getDetails();
                            if (details !== null) {
                                console.log("Details: ");
                                Array.from(details.keys()).forEach(key => {
                                    console.log("  " + key + ": " + details.get(key));
                                });
                            }
                        }
                        else if (actionResponse instanceof ZOHOCRMSDK.Notifications.APIException) {
                            const exception = actionResponse;
                            console.log("Failed to disable notification " + (i + 1) + ":");
                            console.log("Status: " + exception.getStatus().getValue());
                            console.log("Code: " + exception.getCode().getValue());
                            console.log("Message: " + exception.getMessage());
                            
                            const details = exception.getDetails();
                            if (details !== null) {
                                console.log("Details: ");
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
                console.log("API Exception occurred:");
                console.log("Status: " + exception.getStatus().getValue());
                console.log("Code: " + exception.getCode().getValue());
                console.log("Message: " + exception.getMessage());
                
                const details = exception.getDetails();
                if (details !== null) {
                    console.log("Details: ");
                    Array.from(details.keys()).forEach(key => {
                        console.log("  " + key + ": " + details.get(key));
                    });
                }
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
        await DisableNotification.disableNotification();
    }
}

DisableNotification.initializeAndCall();