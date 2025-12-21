import * as ZOHOCRMSDK from "@zohocrm/typescript-sdk-8.0"

class UpdateNotifications {
    static async updateNotifications(): Promise<void> {
        const notificationsOperations = new ZOHOCRMSDK.Notifications.NotificationsOperations();
        
        const request = new ZOHOCRMSDK.Notifications.BodyWrapper();
        const notificationsArray = [];
        
        // Update first notification
        const notification1 = new ZOHOCRMSDK.Notifications.Notification();
        notification1.setChannelId("106800211");
        notification1.setNotifyUrl("https://www.example.com/updated-notifications");
        notification1.setChannelExpiry(new Date("2025-06-30T23:59:59Z"));
        notification1.setToken("TOKEN_FOR_VERIFICATION_OF_1068002");
        
        // Update events to watch
        let events = [];
        events.push("Accounts.create");
        events.push("Accounts.edit");
        events.push("Accounts.delete");
        events.push("Accounts.convert"); // Added new event
        notification1.setEvents(events);
        
        notificationsArray.push(notification1);
        
        // Update second notification
        const notification2 = new ZOHOCRMSDK.Notifications.Notification();
        notification2.setChannelId("106800211");
        notification2.setNotifyUrl("https://www.example.com/updated-contact-notifications");
        notification2.setChannelExpiry(new Date("2025-06-30T23:59:59Z"));
        notification2.setToken("TOKEN_FOR_VERIFICATION_OF_1068002");
        
        events = [];
        events.push("Accounts.create");
        events.push("Accounts.edit");
        events.push("Accounts.delete"); // Added delete event
        notification2.setEvents(events);
        
        notificationsArray.push(notification2);
        
        request.setWatch(notificationsArray);
        
        const response = await notificationsOperations.updateNotifications(request);
        
        if (response !== null) {
            console.log("Status Code: " + response.getStatusCode());
            
            const actionHandler = response.getObject();
            
            if (actionHandler instanceof ZOHOCRMSDK.Notifications.ActionWrapper) {
                const actionResponses = actionHandler.getWatch();
                if (actionResponses != null) {
                    for (let actionResponse of actionResponses) {
                        if (actionResponse instanceof ZOHOCRMSDK.Notifications.SuccessResponse) {
                            const successResponse = actionResponse;
                            console.log("Status: " + successResponse.getStatus().getValue());
                            console.log("Code: " + successResponse.getCode().getValue());
                            
                            const details = successResponse.getDetails();
                            if (details !== null) {
                                console.log("Details: ");
                                Array.from(details.keys()).forEach(key => {
                                    console.log(key + ": " + details.get(key));
                                });
                            }
                            
                            console.log("Message: " + successResponse.getMessage());
                        }
                        else if (actionResponse instanceof ZOHOCRMSDK.Notifications.APIException) {
                            const exception = actionResponse;
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
            }
            else if (actionHandler instanceof ZOHOCRMSDK.Notifications.APIException) {
                const exception = actionHandler;
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
        await UpdateNotifications.updateNotifications();
    }
}

UpdateNotifications.initializeAndCall();